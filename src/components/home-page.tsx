import { AnnouncementSection } from "./announcement-section";
import { HeroSection, type Tone } from "./hero-section";
import { SiteHeader } from "./site-header";
import { VideoSection } from "./video-section";

// The homepage, shared by both versions. Only section 2's tone differs:
// "/" uses the dark stage, "/v2" the light one.
export function HomePage({ heroTone }: { heroTone: Tone }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AnnouncementSection />
        <HeroSection tone={heroTone} />
        <VideoSection />
      </main>
    </>
  );
}
