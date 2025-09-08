import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Little Jet Transport
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Professional flatbed trucking services across Western Canada and cross-border. 
              Reliable freight delivery with 24/7 dispatch support.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:dispatch@littlejettransport.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+17782453549"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/wego" className="text-base text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
                  Where We Go
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-base text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">
                    Abbotsford, BC<br />
                    Canada
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-base font-medium text-neutral-900 dark:text-white">
                    Business Hours
                  </p>
                  <p className="text-base text-neutral-600 dark:text-neutral-400">
                    Mon–Fri: 8am–5pm<br />
                    24/7 Dispatch Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-100 dark:bg-neutral-950 px-6 py-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Little Jet Transport. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-brand-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}