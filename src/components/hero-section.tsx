import Image from "next/image";
import { hero, speakers, sponsors } from "@/content/home";
import { ArrowRightIcon, MapPinIcon } from "./icons";
import { SpeakerOrbit } from "./speaker-orbit";
import { Spotlight } from "./spotlight";

export type Tone = "dark" | "light";

// Class sets for the two looks. Version 1 (/) is dark; version 2 (/v2) is light.
const THEME = {
  dark: {
    section: "bg-navy-950",
    backdrop: "opacity-30",
    veil: "bg-linear-to-b from-navy-950 via-navy-950/80 to-navy-950",
    grid: "opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]",
    badge: "border-white/10 bg-white/5 text-slate-300",
    title: "text-white",
    venue: "text-slate-300",
    venueLabel: "text-white",
    secondaryBtn: "border-white/15 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
    sponsorCard: "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10",
    goldCard: "border-gold/30 bg-gold/5 hover:border-gold/60 hover:bg-gold/10",
    sponsorLabel: "text-slate-400",
    sponsorName: "text-white",
    logoBox: "bg-white",
    link: "text-white/80 hover:text-white",
  },
  light: {
    section: "bg-paper",
    backdrop: "opacity-[0.07]",
    veil: "bg-linear-to-b from-paper via-paper/85 to-paper",
    grid: "opacity-[0.5] [background-image:linear-gradient(rgba(13,21,39,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(13,21,39,0.07)_1px,transparent_1px)]",
    badge: "border-navy-900/10 bg-white text-slate-600 shadow-sm",
    title: "text-navy-900",
    venue: "text-slate-600",
    venueLabel: "text-navy-900",
    secondaryBtn: "border-navy-900/15 bg-white text-navy-900 shadow-sm hover:border-coral/50 hover:text-coral",
    sponsorCard: "border-navy-900/10 bg-white shadow-sm hover:border-navy-900/25 hover:shadow-md",
    goldCard: "border-gold/40 bg-white shadow-sm hover:border-gold/70 hover:shadow-md",
    sponsorLabel: "text-slate-500",
    sponsorName: "text-navy-900",
    logoBox: "bg-slate-50 ring-1 ring-slate-200",
    link: "text-navy-800 hover:text-coral",
  },
} as const;

// Section 2: "stage" layout with a pointer spotlight and a rotating orbit of speakers.
export function HeroSection({ tone = "dark" }: { tone?: Tone }) {
  const t = THEME[tone];

  return (
    <section aria-labelledby="hero-title" className={`relative isolate overflow-hidden ${t.section}`}>
      {/* Backdrop */}
      <Image src="/images/banner.jpg" alt="" fill sizes="100vw" className={`-z-20 object-cover ${t.backdrop}`} />
      <div aria-hidden className={`absolute inset-0 -z-10 ${t.veil}`} />
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] ${t.grid}`}
      />

      <Spotlight tone={tone}>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:py-28">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur ${t.badge}`}>
              <span className="size-1.5 animate-pulse rounded-full bg-leaf" />
              {speakers.length} distinguished speakers · Nobel Laureate keynote
            </span>

            <h1
              id="hero-title"
              className={`mt-7 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${t.title}`}
            >
              International Research Conference{" "}
              <span className={`font-serif italic ${tone === "light" ? "text-coral" : "text-saffron"}`}>for Children</span>{" "}
              <span className="bg-linear-to-r from-coral to-saffron bg-clip-text text-transparent">2026</span>
            </h1>

            <p className={`mt-6 text-sm sm:text-base ${t.venue}`}>
              <MapPinIcon className="mr-1.5 inline-block size-4 -translate-y-px text-coral" />
              <span className={`font-semibold ${t.venueLabel}`}>Venue:</span> {hero.venue}
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
                    className={`inline-flex items-center rounded-full border px-6 py-3.5 text-sm font-semibold backdrop-blur transition ${t.secondaryBtn}`}
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
                className={`flex items-center gap-4 rounded-2xl border p-3 backdrop-blur transition ${t.sponsorCard}`}
              >
                <span className={`grid h-14 w-28 shrink-0 place-items-center rounded-xl px-2 ${t.logoBox}`}>
                  <Image
                    src={sponsors.poweredBy.logo}
                    alt={sponsors.poweredBy.name}
                    width={sponsors.poweredBy.width}
                    height={sponsors.poweredBy.height}
                    className="h-auto max-h-8 w-full object-contain"
                  />
                </span>
                <span className="text-left">
                  <span className={`block text-[11px] font-bold uppercase tracking-[0.2em] ${t.sponsorLabel}`}>
                    {sponsors.poweredBy.label}
                  </span>
                  <span className={`block text-sm font-semibold ${t.sponsorName}`}>{sponsors.poweredBy.display}</span>
                </span>
              </a>
              <a
                href={sponsors.gold.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 rounded-2xl border p-3 backdrop-blur transition ${t.goldCard}`}
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
                  <span className={`block text-sm font-semibold ${t.sponsorName}`}>{sponsors.gold.name}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Speaker orbit */}
          <div className="relative">
            <SpeakerOrbit tone={tone} />
            <div className="mt-6 text-center">
              <a
                href={hero.speakersHref}
                className={`group inline-flex items-center gap-2 text-sm font-semibold transition ${t.link}`}
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
