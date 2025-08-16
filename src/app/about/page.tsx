import Image from "next/image";

export const metadata = {
  title: "About Us | Little Jet Transport",
  description: "Our story, mission, and values. Reliable FTL & LTL across Western Canada and Central US.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-700">
      {/* HERO */}
      <section className="relative bg-neutral-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            <span className="h-2 w-2 rounded-full bg-brand-600" />
            Little Jet Transport
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-3 max-w-3xl text-white/80">
            We deliver fast, safe, and dependable freight across Western Canada. From single pallets
            to full truckloads, our team treats every shipment like mission-critical.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-border-200">
            <Image
              src="/semi-drawing.jpg"
              alt="Little Jet Transport operations"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Our Journey
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-neutral-700">
              Built for speed. Obsessed with reliability.
            </h2>
            <p className="mt-4 leading-7">
              Little Jet Transport started with a simple promise: <span className="font-medium">deliver on
              time, every time</span>. We grew from a single truck to a province-wide network by focusing on
              the details—clear communication, proactive tracking, and professional drivers who care.
            </p>
            <p className="mt-4 leading-7">
              Today, we support businesses of all sizes with <span className="font-medium">FTL and LTL</span> solutions,
              same-day options on core lanes, and dependable coverage across Western North America.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 sm:pb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-neutral-700">Our Principles</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Mission", desc: "Make shipping effortless with dependable timelines, proactive updates, and a human touch.", icon: "🎯" },
            { title: "Vision", desc: "Be Alberta’s most trusted regional carrier by pairing speed with uncompromising safety.", icon: "👁️" },
            { title: "Values", desc: "Reliability, communication, and accountability—doing what we say, when we say it.", icon: "🏁" },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="rounded-2xl border border-border-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-brand-600 text-white grid place-items-center">{icon}</div>
                <h4 className="text-lg font-semibold text-neutral-700">{title}</h4>
              </div>
              <p className="mt-3 text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL + METRIC */}
      <section className="bg-neutral-50 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-border-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600">★★★★★ Client Feedback</div>
            <blockquote className="mt-3 text-lg leading-7 text-neutral-700">
              “Little Jet has been rock-solid for our Alberta routes. Clear updates, careful handling, and they hit the ETA.”
            </blockquote>
            <div className="mt-4 flex items-center gap-3 text-sm text-neutral-500">
              <div className="h-8 w-8 rounded-full bg-neutral-100" />
              Jasmin T., Ops Manager
            </div>
          </div>
          <div className="rounded-2xl border border-border-200 bg-white p-6 shadow-sm">
            <div className="text-4xl font-bold text-neutral-700">22,900+</div>
            <div className="mt-1 text-neutral-500">Successful deliveries</div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
        <h3 className="text-center text-xl sm:text-2xl font-bold text-neutral-700">
          Trusted by teams across Alberta
        </h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {[
            "/lil-truck.svg",
            "/lil-truck.svg",
            "/lil-truck.svg",
            "/lil-truck.svg",
            "/lil-truck.svg",
            "/lil-truck.svg",
          ].map((src) => (
            <div key={src} className="grid place-items-center rounded-xl border border-border-200 bg-white p-4 grayscale hover:grayscale-0 transition">
              <Image src={src} alt="Partner logo" width={120} height={40} className="h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-neutral-900 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Cost Calculator", desc: "Fast ballpark in minutes." },
            { title: "Quick Tracking", desc: "Live status on your load." },
            { title: "Cargo Insurance", desc: "Options that fit risk." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-white font-semibold">{title}</h4>
              <p className="mt-1 text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
