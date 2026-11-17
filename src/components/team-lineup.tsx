import Image from "next/image";
import { ircc27Team } from "@/content/home";

// The whole IRCC'27 team on one "stage": cards fan out in a shallow 3D arc
// (desktop), each lit by its own spotlight with a floor reflection beneath.
// Hovering a member lifts them and dims the rest. Pure CSS, no JS.

// Per-card arc: outer cards angle inward and sit lower.
const ARC = [
  { r: 16, y: 44 },
  { r: 9, y: 16 },
  { r: 3, y: 0 },
  { r: -3, y: 0 },
  { r: -9, y: 16 },
  { r: -16, y: 44 },
];

export function TeamLineup() {
  return (
    <div className="relative">
      {/* Stage floor glow */}
      <div
        aria-hidden
        className="absolute inset-x-[5%] bottom-6 h-40 rounded-[100%] bg-[radial-gradient(closest-side,rgba(241,91,67,0.35),rgba(255,157,0,0.12)_55%,transparent)] blur-2xl"
      />

      <ul className="group/lineup relative grid grid-cols-2 gap-x-4 gap-y-8 [perspective:1400px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 lg:gap-x-5">
        {ircc27Team.map((p, i) => (
          <li
            key={p.name}
            style={{ "--r": `${ARC[i]?.r ?? 0}deg`, "--y": `${ARC[i]?.y ?? 0}px` } as React.CSSProperties}
            className="group/card relative transition duration-500 ease-out lg:[transform:rotateY(var(--r))_translateY(var(--y))] lg:group-hover/lineup:opacity-50 lg:hover:[transform:rotateY(0deg)_translateY(calc(var(--y)-14px))_scale(1.04)] lg:hover:opacity-100!"
          >
            {/* Spotlight beam */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 hidden h-40 w-[130%] -translate-x-1/2 bg-linear-to-b from-saffron/0 via-saffron/[0.06] to-saffron/[0.14] opacity-50 blur-lg transition duration-500 [clip-path:polygon(46%_0,54%_0,100%_100%,0_100%)] group-hover/card:opacity-100 lg:block"
            />

            <div className="animate-fade-up" style={{ animationDelay: `${150 + i * 110}ms` }}>
              <div className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/10 transition duration-500 group-hover/card:ring-coral/70 group-hover/card:shadow-[0_20px_60px_rgba(241,91,67,0.35)] [-webkit-box-reflect:below_6px_linear-gradient(transparent_72%,rgba(255,255,255,0.14))]">
                <div className="relative aspect-[300/284]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 190px, (min-width: 640px) 30vw, 45vw"
                    className="object-cover transition duration-700 group-hover/card:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-4 text-center lg:mt-10">
                <span className="inline-block rounded-full border border-coral/40 bg-coral/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-coral">
                  {p.role}
                </span>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-white sm:text-base">{p.name}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
