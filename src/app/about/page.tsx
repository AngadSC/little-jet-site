import Image from "next/image";

export const metadata = {
  title: "About Us | Little Jet Transport",
  description:
    "Our story, mission, and values. Reliable FTL & LTL across Western Canada and Central US.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-800">
      {/* FULL-BLEED IMAGE */}
      <section
        className="
          relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        "
      >
        <div className="relative h-[45vh] sm:h-[60vh] lg:h-[75vh]">
          <Image
            src="/semi-drawing.jpg" // replace when you swap images
            alt="Little Jet Transport"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* TEXT BELOW */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Little Jet
        </div>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900">
          Built for Canadian Roads
        </h1>
        <p className="mt-4 leading-7 text-neutral-700">
          We focus on dependable service and clear communication—across Alberta
          and cross-border lanes. Safe, on-time delivery with no surprises.
        </p>
      </section>
    </div>
  );
}
