import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Little Jet Transport",
  description:
    "Our story, approach, and principles. Reliable regional trucking built for Western Canada.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-900 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
          <span className="h-2 w-2 rounded-full bg-brand-600" />
          Little Jet Transport
        </div>
        <h1 className="mt-3 text-3xl sm:text-5xl font-bold">About Us</h1>
        <p className="mt-4 max-w-3xl text-white/80">
          Built for Canadian roads. We focus on dependable timelines, clear communication, and
          professional drivers—so your freight arrives when it should, without surprises.
        </p>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="space-y-10">
          {/* Who We Are */}
          <div>
            <h2 className="text-2xl font-semibold">Who we are</h2>
            <p className="mt-3 leading-7 text-white/80">
              Little Jet started with a simple promise: deliver on time, every time. We grew from a
              single unit to a dependable regional carrier by obsessing over the details—proactive
              updates, careful handling, and routes that make sense for customers who value
              reliability over flash.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="text-2xl font-semibold">What we do</h2>
            <p className="mt-3 leading-7 text-white/80">
              We move freight across Western Canada with flexible options that fit real-world
              schedules—from one pallet to full trailers. Our dispatch keeps things straightforward:
              confirm, pick up, roll, deliver.
            </p>
            <ul className="mt-4 grid gap-2 text-white/80">
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                FTL &amp; LTL on core regional lanes
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                Time-sensitive moves with realistic ETAs
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                Clear check-calls and simple paperwork
              </li>
            </ul>
          </div>

          {/* How We Work */}
          <div>
            <h2 className="text-2xl font-semibold">How we work</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                {
                  t: "Book",
                  d: "Share pickup, delivery, and constraints—no forms required. We confirm the plan and ETA.",
                },
                {
                  t: "Move",
                  d: "Professional drivers, sensible routes, and proactive updates at key points.",
                },
                {
                  t: "Deliver",
                  d: "On-time drop, tidy paperwork, and proof of delivery sent back promptly.",
                },
              ].map(({ t, d }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    {t}
                  </div>
                  <p className="mt-2 text-white/80">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div>
            <h2 className="text-2xl font-semibold">Our principles</h2>
            <ul className="mt-3 grid gap-3 text-white/80">
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                Reliability first — honest timelines and consistent follow-through.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                Respect for freight — careful loading, securement, and handling.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600 mt-1">●</span>
                Communication that’s useful — what you need to know, when you need it.
              </li>
            </ul>
          </div>

          
        </div>
      </section>
    </div>
  );
}
