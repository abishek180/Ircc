import Image from "next/image";
import { hero, speakers, sponsors } from "@/content/home";
import { ArrowRightIcon, MapPinIcon } from "./icons";
import { SpeakerOrbit } from "./speaker-orbit";
import { Spotlight } from "./spotlight";

// Section 2: immersive "stage". Conference-hall backdrop, pointer spotlight,
// giant outlined year, and a rotating orbit of speakers.
export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-navy-950">
      {/* Backdrop */}
      <Image src="/images/banner.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950 via-navy-950/80 to-navy-950" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />

      <Spotlight>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:py-28">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur">
              <span className="size-1.5 animate-pulse rounded-full bg-leaf" />
              {speakers.length} distinguished speakers · Nobel Laureate keynote
            </span>

            <h1
              id="hero-title"
              className="mt-7 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              International Research Conference{" "}
              <span className="font-serif italic text-saffron">for Children</span>{" "}
              <span className="bg-linear-to-r from-coral to-saffron bg-clip-text text-transparent">2026</span>
            </h1>

            <p className="mt-6 text-sm text-slate-300 sm:text-base">
              <MapPinIcon className="mr-1.5 inline-block size-4 -translate-y-px text-coral" />
              <span className="font-semibold text-white">Venue:</span> {hero.venue}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              {hero.buttons.map((b) =>
                b.primary ? (
                  <a
                    key={b.label}
                    href={b.href}
                    className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(241,91,67,0.45)] transition hover:bg-coral-dark"
                  >
                    {b.label}
                    <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    key={b.label}
                    href={b.href}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
                  >
                    {b.label}
                  </a>
                ),
              )}
            </div>

            {/* Sponsors */}
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              <a
                href={sponsors.poweredBy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              >
                <span className="grid h-14 w-28 shrink-0 place-items-center rounded-xl bg-white px-2">
                  <Image
                    src={sponsors.poweredBy.logo}
                    alt={sponsors.poweredBy.name}
                    width={sponsors.poweredBy.width}
                    height={sponsors.poweredBy.height}
                    className="h-auto max-h-8 w-full object-contain"
                  />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {sponsors.poweredBy.label}
                  </span>
                  <span className="block text-sm font-semibold text-white">{sponsors.poweredBy.display}</span>
                </span>
              </a>
              <a
                href={sponsors.gold.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-gold/5 p-3 backdrop-blur transition hover:border-gold/60 hover:bg-gold/10"
              >
                <span className="grid h-14 w-28 shrink-0 place-items-center overflow-hidden rounded-xl bg-white">
                  <Image
                    src={sponsors.gold.logo}
                    alt={sponsors.gold.name}
                    width={sponsors.gold.width}
                    height={sponsors.gold.height}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    {sponsors.gold.label}
                  </span>
                  <span className="block text-sm font-semibold text-white">{sponsors.gold.name}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Speaker orbit */}
          <div className="relative">
            <SpeakerOrbit />
            <div className="mt-6 text-center">
              <a
                href={hero.speakersHref}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
              >
                View all speakers
                <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Spotlight>
    </section>
  );
}
