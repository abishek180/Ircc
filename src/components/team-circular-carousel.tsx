"use client";

import dynamic from "next/dynamic";
import type { CircularCarouselProps } from "./CircularCarousel";

// CircularCarousel renders 3D float math into inline styles, which the server
// and browser serialise differently (hydration mismatch). Render it client-only.
const CircularCarousel = dynamic(() => import("./CircularCarousel"), { ssr: false });

export function TeamCircularCarousel(props: CircularCarouselProps) {
  return <CircularCarousel {...props} />;
}
