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
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/semi-drawing.jpg"
          alt="Truck on highway"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center text-white max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/90 bg-brand-600/20 px-4 py-2 rounded-full border border-white/20">
              <span className="h-2 w-2 rounded-full bg-brand-600" />
              Professional Transport
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Reliable Freight,<br />
              <span className="text-brand-600">On Time.</span> Every Time.
            </h1>
            <p className="mt-6 text-lg text-neutral-100 max-w-2xl mx-auto">
              FlatBed Trucking • FTL & LTL • Cross-border. Professional drivers and 24/7 dispatch across Western Canada.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-lg transition-colors shadow-lg"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+17782453549"
                className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-semibold text-lg transition-colors"
              >
                Call (778) 245-3549
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT BLURB */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-4">
              About Little Jet
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
              Built for Canadian Roads
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              We focus on dependable service and clear communication—across Alberta and cross-border lanes.
              Safe, on-time delivery with no surprises.
            </p>
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold"
              >
                Learn our story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/semi-drawing.jpg"
              alt="Professional truck driver"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHERE WE GO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-4">
            Where We Go
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Coast to Coast Coverage</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            From Western Canada to cross-border routes, we deliver where you need us most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              region: "Alberta", 
              cities: "Calgary • Edmonton • Red Deer • Lethbridge",
              description: "Complete Alberta coverage with daily routes"
            },
            { 
              region: "British Columbia", 
              cities: "Vancouver • Victoria • Kamloops • Prince George",
              description: "Mountain routes and coastal deliveries"
            },
            { 
              region: "Cross-Border", 
              cities: "Seattle • Portland • Spokane • Montana",
              description: "Fully compliant US cross-border service"
            },
          ].map((location) => (
            <div key={location.region} className="text-center p-6 rounded-2xl border border-neutral-200 bg-white hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 rounded-full bg-brand-600/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{location.region}</h3>
              <p className="text-sm font-medium text-brand-600 mb-3">{location.cities}</p>
              <p className="text-neutral-600">{location.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/coverage" 
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-semibold"
          >
            View full coverage map
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-4">
              Why Choose Little Jet
            </div>
            <h2 className="text-4xl font-bold text-neutral-900">Built on Excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Precision", desc: "Accurate pickup windows, clear ETAs, proactive updates.", icon: "🎯" },
              { title: "24/7 Dispatch", desc: "Reach us nights, weekends, holidays—whenever freight moves.", icon: "📞" },
              { title: "Safe Delivery", desc: "Trained drivers, maintained equipment, insured shipments.", icon: "🛡️" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-600 text-white flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">22,900+</div>
              <div className="text-lg text-slate-200">Successful Deliveries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">99.8%</div>
              <div className="text-lg text-slate-200">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">24/7</div>
              <div className="text-lg text-slate-200">Dispatch Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need Flatbed Transport?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
              From construction materials to heavy machinery, get your flatbed quote today. Our dispatch team is standing by.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-lg transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+17782453549"
                className="px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-slate-800 font-semibold text-lg transition-colors"
              >
                Call (778) 245-3549
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}