import { about } from "@/content/home";

// Section 3: speakers video.
export function VideoSection() {
  return (
    <section aria-label="IRCC speakers video" className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-black shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/10">
          <video controls preload="metadata" playsInline className="aspect-video w-full bg-black">
            <source src={about.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
