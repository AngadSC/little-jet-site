// File: src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-sm backdrop-blur-lg bg-opacity-95">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-neutral-900 dark:text-white hover:text-brand-600 transition-colors">
          Little Jet Transport
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/wego" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 transition-colors">
            Where We Go
          </Link>
          <Link href="/about" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 transition-colors">
            Contact
          </Link>
          <Link
            href="/quote"
            className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base transition-all hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </nav>

        <a 
          href="tel:+17782453549" 
          className="md:ml-6 text-base font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="hidden sm:inline">(778) 245-3549</span>
        </a>
      </div>
    </header>
  );
}