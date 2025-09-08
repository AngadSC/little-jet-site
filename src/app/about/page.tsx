import Image from "next/image";

export const metadata = {
  title: "About Us | Little Jet Transport",
  description:
    "Our story, mission, and values. Reliable FTL & LTL across Western Canada and Central US.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-700">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
          {/* Bigger image */}
          <div className="relative h-[360px] sm:h-[480px] lg:h-[640px] overflow-hidden rounded-3xl ring-1 ring-border-200">
            <Image
              src="/semi-drawing.jpg"
              alt="Little Jet Transport operations"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Text (kept exactly; adjust as needed) */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Our Journey
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-700">
              Built for speed. Obsessed with reliability.
            </h1>
            <p className="mt-4 leading-7">
              Little Jet Transport started with a simple promise:{" "}
              <span className="font-medium">deliver on time, every time</span>. We grew from a
              single truck to a province-wide network by focusing on the details—clear
              communication, proactive tracking, and professional drivers who care.
            </p>
            <p className="mt-4 leading-7">
              Today, we support businesses of all sizes with{" "}
              <span className="font-medium">FTL and LTL</span> solutions, same-day options on
              core lanes, and dependable coverage across Western North America.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
