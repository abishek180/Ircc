import Image from "next/image";
import { ColorBendsBackground } from "./color-bends-background";
import { TeamLineup } from "./team-lineup";

const BAND_COLORS = ["#f15b43", "#ff9d00", "#7c3aed"];

// Section 1: IRCC'27 announcement + the full organising team on stage.
// Logos and team photos are cropped from the original ircc27-banner.jpg.
export function AnnouncementSection() {
  return (
    <section aria-labelledby="announcement-title" className="relative overflow-hidden bg-navy-950">
      {/* Animated WebGL colour bands (brand coral / saffron + violet accent) */}
      <div aria-hidden className="absolute inset-0">
        <ColorBendsBackground
          colors={BAND_COLORS}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
        />
      </div>
      {/* Readability veil over the bands */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-navy-950/78 via-navy-950/60 to-navy-950/88"
      />
      {/* Giant outlined year */}
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[34vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.07)] lg:text-[26vw]"
      >
        2027
      </p>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36">
        {/* Announcement */}
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <div className="mx-auto grid w-full max-w-xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl bg-black px-4 py-4 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:gap-5 sm:px-5">
            <Image
              src="/images/gyra-logo.png"
              alt="GYRA - Global Young Researchers' Academy"
              width={244}
              height={170}
              className="h-9 w-auto sm:h-12"
            />
            <Image
              src="/images/ircc27-logo.png"
              alt="IRCC'27 @ Thrissur - International Research Conference for Children"
              width={1224}
              height={224}
              priority
              className="h-auto w-full"
            />
            <Image
              src="/images/stem4girls-logo.png"
              alt="Stem4Girls - Science Technology Engineering"
              width={242}
              height={170}
              className="h-9 w-auto sm:h-12"
            />
          </div>
          <h2
            id="announcement-title"
            className="mt-8 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Thank You for Attending <span className="text-coral">IRCC 2026!</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-300">
            Stay tuned for more updates on <strong className="font-bold text-saffron">IRCC 2027!</strong>
          </p>
        </div>

        {/* Team on stage */}
        <div className="mt-16 lg:mt-24">
          <div className="mb-10 flex items-center justify-center gap-4 lg:mb-16">
            <span aria-hidden className="h-px w-10 bg-linear-to-r from-transparent to-white/30 sm:w-20" />
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-navy-900 shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:px-5 sm:text-xs">
              <span aria-hidden className="size-1.5 rounded-full bg-coral" />
              IRCC&apos;27 Organising Team
            </p>
            <span aria-hidden className="h-px w-10 bg-linear-to-l from-transparent to-white/30 sm:w-20" />
          </div>
          <TeamLineup />
        </div>
      </div>
      <div aria-hidden className="relative h-1 bg-linear-to-r from-coral via-saffron to-leaf" />
    </section>
  );
}
