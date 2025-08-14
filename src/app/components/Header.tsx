// File: src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-700 text-neutral-50 border-b border-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold hover:text-brand-600">
          Little Jet Transport
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/services" className="hover:text-brand-600">Services</Link>
          <Link href="/about" className="hover:text-brand-600">About</Link>
          <Link href="/contact" className="hover:text-brand-600">Contact</Link>
          <Link
            href="/quote"
            className="px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white"
          >
            Get a Quote
          </Link>
        </nav>

        <a href="tel:+17782453549" className="md:ml-6 text-sm underline hover:text-brand-600">
          Call (778) 245-3549
        </a>
      </div>
    </header>
  );
}
