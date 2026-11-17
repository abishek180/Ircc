"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { speakers } from "@/content/home";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

const AUTOPLAY_MS = 5000;

// Compact, dark speaker carousel used as the hub card of the hero diagram.
export function SpeakerCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = speakers.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Distinguished speakers"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {speakers.map((s, i) => (
            <article
              key={s.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${total}`}
              aria-hidden={i !== index}
              className="flex w-full shrink-0 flex-col items-center px-1 pt-2 text-center"
            >
              <div className="relative size-32">
                <div aria-hidden className="absolute -inset-1 rounded-full bg-linear-to-tr from-coral via-saffron to-leaf" />
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="128px"
                  className="relative rounded-full border-[3px] border-navy-900 bg-navy-800 object-cover object-[center_20%]"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{s.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs font-medium text-coral">{s.role}</p>
              <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-slate-400">{s.org}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous speaker"
          className="grid size-8 place-items-center rounded-full border border-white/15 text-white transition hover:border-coral hover:bg-coral"
        >
          <ChevronLeftIcon className="size-4" />
        </button>
        <p className="text-xs font-semibold tabular-nums text-slate-300" aria-live="polite">
          <span className="text-white">{index + 1}</span> / {total}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next speaker"
          className="grid size-8 place-items-center rounded-full border border-white/15 text-white transition hover:border-coral hover:bg-coral"
        >
          <ChevronRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
