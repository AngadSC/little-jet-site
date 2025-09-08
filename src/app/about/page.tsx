import Image from "next/image";

export const metadata = {
  title: "About Us | Little Jet Transport",
  description:
    "Our story, mission, and values. Reliable FTL & LTL across Western Canada and Central US.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-900 text-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Heavier left column for the image */}
        <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Large, non-cropped image */}
          <div className="relative h-[380px] sm:h-[520px] lg:h-[720px] overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 p-2">
            <Image
              src="/semi-drawing.jpg"
              alt="Little Jet Transport operations"
              fill
              priority
              className="object-contain"
              sizes="(min-width:1024px) 62vw, 100vw"
            />
          </div>

          {/* Text block (kept minimal) */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Little Jet
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              Built for Canadian Roads
            </h1>
            <p className="mt-4 leading-7 text-white/80">
              We focus on dependable service and clear communication—across Alberta and
              cross-border lanes. Safe, on-time delivery with no surprises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
