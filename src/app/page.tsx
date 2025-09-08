import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Little Jet Transport — Reliable Trucking Across Canada & US",
  description: "FTL, LTL, Reefer, Dry Van • 24/7 dispatch • Cross-border compliant.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/semi-drawing.jpg"
          alt="Truck on highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center text-white">
            <p className="text-xs tracking-wide uppercase">Truckload Transport</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Reliable Freight, On Time. Every Time.</h1>
            <p className="mt-4 text-gray-200">
              Reefer & Dry Van • FTL & LTL • Cross-border. Professional drivers and 24/7 dispatch.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link href="/quote" className="px-6 py-3 rounded-xl bg-black text-white">
                Get a Quote
              </Link>
              <a
                href="tel:+17782453549"
                className="px-6 py-3 rounded-xl border border-white text-white"
              >
                Call (778) 245-3549
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT BLURB */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Built for Canadian Roads</h2>
            <p className="mt-3 text-gray-600">
              We focus on dependable service and clear communication—across Alberta and cross-border lanes.
              Safe, on-time delivery with no surprises.
            </p>
          </div>
          <div className="md:text-right">
            <Link href="/services" className="inline-block px-5 py-3 rounded-xl bg-black text-white">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / KPI STRIP */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-semibold">1M+</p>
            <p className="text-sm text-gray-300">Km Covered</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">2+</p>
            <p className="text-sm text-gray-300">Countries Served</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">99%</p>
            <p className="text-sm text-gray-300">On-time Rate</p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Freight Services</h2>
          <Link href="/services" className="text-sm underline">
            View more
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { title: "Flatbed", img: "/svc-flatbed.jpg", desc: "Open-deck for machines & materials." },
            { title: "Hot Shot", img: "/svc-hotshot.jpg", desc: "Expedited, smaller-capacity runs." },
            { title: "Step Deck", img: "/svc-stepdeck.jpg", desc: "Drop-deck for taller cargo." },
            { title: "Dry Van (Heated)", img: "/svc-dryvan.jpg", desc: "General freight, temp protection." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl overflow-hidden border">
              <div className="aspect-[4/3] bg-gray-100">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Precision</h3>
              <p className="mt-2 text-gray-600">
                Accurate pickup windows, clear ETAs, proactive updates.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">24/7 Dispatch</h3>
              <p className="mt-2 text-gray-600">
                Reach us nights, weekends, holidays—whenever freight moves.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Safe Delivery</h3>
              <p className="mt-2 text-gray-600">
                Trained drivers, maintained equipment, insured shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready for a fast quote?</h3>
            <p className="text-gray-600 mt-2">
              Send us your lane, dates, and freight details—we’ll respond promptly.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/quote" className="px-5 py-3 rounded-xl bg-black text-white">
              Get a Quote
            </Link>
            <a href="mailto:dispatch@littlejettransport.com" className="px-5 py-3 rounded-xl border">
              Email Dispatch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
//testing 