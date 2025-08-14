import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">Little Jet Transport</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/quote" className="px-4 py-2 rounded-lg bg-black text-white">Get a Quote</Link>
        </nav>
        <a href="tel:+15551234567" className="md:ml-6 text-sm underline">Call (778) 245-3549</a>
      </div>
    </header>
  );
}
