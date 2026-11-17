import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "International Research Conference for Children | IRCC (Version 2)",
};

// Version 2: identical to "/" except section 2 is light.
export default function HomeV2() {
  return <HomePage heroTone="light" />;
}
