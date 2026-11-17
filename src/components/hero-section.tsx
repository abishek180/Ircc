import Image from "next/image";
import { hero, sponsors } from "@/content/home";
import { ArrowRightIcon, MapPinIcon } from "./icons";
import { SpeakerCarousel } from "./speaker-carousel";

// Section 2: centered headline + hub-and-spoke diagram.
// Hub = speaker carousel; spokes = links (top), sponsors (left/right), register (bottom).

function Dot() {
  return <span className="size-2 shrink-0 rounded-full border border-slate-300 bg-white" />;
}

function HLine() {
  return (
    <div aria-hidden className="hidden flex-1 items-center lg:flex">
      <Dot />
      <span className="h-px flex-1 bg-slate-300" />
      <Dot />
    </div>
  );
}

function VLine() {
  return (
    <div aria-hidden className="flex h-10 flex-col items-center">
      <span className="w-px flex-1 bg-slate-300" />
      <Dot />
    </div>
  );
}

function SponsorCard({
  label,
  labelClass,
  logo,
  alt,
  width,
  height,
  href,
  footer,
}: {
  label: string;
  labelClass: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  footer?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[260px] rounded-2xl bg-white p-3 shadow-[0_8px_30px_rgba(13,21,39,0.08)] ring-1 ring-slate-200/70 transition hover:-translate-y-0.5"
    >
      <div className="grid h-24 place-items-center rounded-xl border border-slate-100 bg-slate-50 px-4">
        <Image src={logo} alt={alt} width={width} height={height} className="max-h-14 w-auto object-contain" />
      </div>
      <div className="px-1 pb-1 pt-3">
        <p className={`text-sm font-semibold ${labelClass}`}>{label}</p>
        {footer && <p className="mt-0.5 text-xs text-slate-500 group-hover:text-coral">{footer}</p>}
      </div>
    </a>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[#f2f3f1] bg-[radial-gradient(60%_50%_at_50%_0%,#ffffff,transparent),radial-gradient(40%_40%_at_50%_70%,rgba(255,255,255,0.9),transparent)]"
    >
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:pb-24 lg:pt-20">
        {/* Headline */}
        <div className="animate-fade-up text-center">
          <h1
            id="hero-title"
            className="mx-auto text-4xl font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl lg:text-[58px]"
          >
            <span className="lg:whitespace-nowrap">
              International <span className="text-coral">Research Conference</span>
            </span>
            <br />
            for Children 2026
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hero.buttons.map((b) =>
              b.primary ? (
                <a
                  key={b.label}
                  href={b.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-dark"
                >
                  {b.label}
                  <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
                </a>
              ) : (
                <a
                  key={b.label}
                  href={b.href}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm ring-1 ring-slate-200 transition hover:text-coral hover:ring-coral/40"
                >
                  {b.label}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Hub-and-spoke diagram */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
          {/* Left spoke */}
          <div className="order-3 flex w-full items-center justify-center lg:order-none">
            <SponsorCard
              label={sponsors.poweredBy.label}
              labelClass="text-navy-900"
              logo={sponsors.poweredBy.logo}
              alt={`${sponsors.poweredBy.label} - ${sponsors.poweredBy.name}`}
              width={sponsors.poweredBy.width}
              height={sponsors.poweredBy.height}
              href={sponsors.poweredBy.href}
              footer={sponsors.poweredBy.display}
            />
            <HLine />
          </div>

          {/* Center column: top card, hub, bottom pill */}
          <div className="order-1 flex flex-col items-center lg:order-none">
            <p className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs text-slate-500 shadow-[0_8px_30px_rgba(13,21,39,0.08)] ring-1 ring-slate-200/70">
              <MapPinIcon className="size-4 shrink-0 text-coral" />
              <span>
                <span className="font-semibold text-navy-800">Venue:</span> {hero.venue}
              </span>
            </p>
            <VLine />

            <div className="relative w-[300px] rounded-3xl bg-navy-900 p-5 shadow-[0_24px_60px_rgba(13,21,39,0.35)] ring-1 ring-white/5">
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,rgba(43,179,74,0.18),transparent)]" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-leaf">IRCC 2026</span>
                  <span className="text-[11px] font-medium text-slate-400">Distinguished Speakers</span>
                </div>
                <SpeakerCarousel />
              </div>
            </div>

            <div className="flex h-10 flex-col items-center" aria-hidden>
              <Dot />
              <span className="w-px flex-1 bg-slate-300" />
            </div>
            <a
              href={hero.speakersHref}
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition hover:bg-coral"
            >
              View All Speakers
              <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Right spoke */}
          <div className="order-4 flex w-full items-center justify-center lg:order-none">
            <HLine />
            <SponsorCard
              label={sponsors.gold.label}
              labelClass="text-gold"
              logo={sponsors.gold.logo}
              alt={`${sponsors.gold.label} - ${sponsors.gold.name}`}
              width={sponsors.gold.width}
              height={sponsors.gold.height}
              href={sponsors.gold.href}
              footer={sponsors.gold.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
