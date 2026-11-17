import { AnnouncementSection } from "@/components/announcement-section";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";
import { VideoSection } from "@/components/video-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AnnouncementSection />
        <HeroSection />
        <VideoSection />
      </main>
    </>
  );
}
