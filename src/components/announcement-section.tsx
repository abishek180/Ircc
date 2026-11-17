import Image from "next/image";
import { ircc27Team } from "@/content/home";
import { TeamCircularCarousel } from "./team-circular-carousel";

// Section 1: IRCC'27 announcement + organising team on a 3D circular carousel.
// Logo and team photos are cropped from the original ircc27-banner.jpg.
const teamItems = ircc27Team.map((p) => ({
  src: p.image,
  alt: `${p.name}, ${p.role}`,
  title: p.name,
  subtitle: p.role,
}));

export function AnnouncementSection() {
  return (
    <section aria-labelledby="announcement-title" className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(241,91,67,0.22),transparent),radial-gradient(50%_60%_at_0%_100%,rgba(43,179,74,0.16),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:px-8 lg:py-16">
        <div className="animate-fade-up text-center lg:text-left">
          <div className="mx-auto grid w-full max-w-xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl bg-black px-4 py-4 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:gap-5 sm:px-5 lg:mx-0">
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
            className="mt-8 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            Thank You for Attending <span className="text-coral">IRCC 2026!</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-slate-300">
            Stay tuned for more updates on <strong className="font-bold text-saffron">IRCC 2027!</strong>
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            IRCC&apos;27 Organising Team
          </p>
          <div className="relative h-[420px] w-full text-white sm:h-[480px]">
            <TeamCircularCarousel
              items={teamItems}
              preset="cylinder"
              intro="rise"
              cardWidth={290}
              aspectRatio={290 / 275}
              speed={14}
              captions
              gap={22}
              tilt={-5}
              curve={1}
              perspective={2500}
              autoplay="drift"
              interval={3}
              direction="left"
              momentum={0.6}
              snap
              pauseOnHover
              focusOnClick
              draggable
              parallax={0.3}
              stretch={0.5}
              fadeColor="#070c18"
              depthFade={0.55}
              innerShade={0.6}
              cornerRadius={14}
            />
          </div>
        </div>
      </div>
      <div aria-hidden className="h-1 bg-linear-to-r from-coral via-saffron to-leaf" />
    </section>
  );
}
