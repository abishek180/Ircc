"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { speakers } from "@/content/home";

const AUTOPLAY_MS = 4500;

// All speakers ride a slowly rotating ring; the active one is featured in the
// centre. Click any avatar to feature it. Autoplay pauses on hover / focus.
export function SpeakerOrbit() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = speakers.length;
  const current = speakers[active];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <div
      className="group/orbit relative mx-auto w-full max-w-[540px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Distinguished speakers"
    >
      <div className="relative aspect-square w-full">
        {/* Orbit guides */}
        <div aria-hidden className="absolute inset-[6%] rounded-full border border-white/10" />
        <div aria-hidden className="absolute inset-[22%] rounded-full border border-dashed border-white/10" />
        <div
          aria-hidden
          className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(241,91,67,0.28),transparent_65%)] blur-2xl"
        />

        {/* Rotating ring of avatars */}
        <ul className="orbit-spin absolute inset-[6%] group-hover/orbit:[animation-play-state:paused]">
          {speakers.map((s, i) => {
            const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
            const left = 50 + 50 * Math.cos(angle);
            const top = 50 + 50 * Math.sin(angle);
            const isActive = i === active;
            return (
              <li
                key={s.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${s.name}`}
                  aria-pressed={isActive}
                  className="orbit-counter-spin block rounded-full group-hover/orbit:[animation-play-state:paused]"
                >
                  <span
                    className={`relative block size-11 overflow-hidden rounded-full ring-2 transition duration-300 sm:size-14 ${
                      isActive
                        ? "scale-125 ring-coral shadow-[0_0_24px_rgba(241,91,67,0.7)]"
                        : "ring-white/20 grayscale hover:scale-110 hover:grayscale-0 hover:ring-white/60"
                    }`}
                  >
                    <Image src={s.image} alt="" fill sizes="56px" className="object-cover object-[center_20%]" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Featured speaker */}
        <div className="absolute inset-[24%] grid place-items-center">
          <div key={active} className="animate-fade-up relative size-full">
            <div aria-hidden className="absolute -inset-1.5 rounded-full bg-linear-to-tr from-coral via-saffron to-leaf" />
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="(min-width: 640px) 280px, 50vw"
              className="relative rounded-full border-4 border-navy-950 object-cover object-[center_20%]"
            />
          </div>
        </div>
      </div>

      {/* Caption */}
      <div key={`c-${active}`} className="animate-fade-up mt-6 text-center" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">
          Speaker {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{current.name}</h3>
        <p className="mt-1 text-sm font-medium text-coral">{current.role}</p>
        <p className="mx-auto mt-1 max-w-sm text-sm text-slate-400">{current.org}</p>
      </div>
    </div>
  );
}
