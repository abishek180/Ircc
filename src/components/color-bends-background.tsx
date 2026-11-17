"use client";

import dynamic from "next/dynamic";
import type { ColorBendsProps } from "./ColorBends";

// WebGL can't render on the server, so load ColorBends in the browser only.
const ColorBends = dynamic(() => import("./ColorBends"), { ssr: false });

export function ColorBendsBackground(props: ColorBendsProps) {
  return <ColorBends {...props} />;
}
