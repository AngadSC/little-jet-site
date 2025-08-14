import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} Little Jet Transport • Edmonton, AB
        </span>

        <div className="flex gap-4">
          {/* Internal link → Link */}
          <Link href="/contact" className="underline">Contact</Link>
          {/* External actions → <a> is correct */}
          <a className="underline" href="tel:+15551234567">Call 555-123-4567</a>
          <a className="underline" href="mailto:dispatch@littlejettransport.com">Email dispatch</a>
        </div>
      </div>
    </footer>
  );
}
