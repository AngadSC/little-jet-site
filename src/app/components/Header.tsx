import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
      {/* Internal nav → Link */}
      <Link href="/" className="text-xl font-semibold">
        Little Jet Transport
      </Link>

      <nav className="flex gap-6 text-sm">
        <Link href="/services">Services</Link>
        <Link href="/quote" className="font-medium">Get a Quote</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
