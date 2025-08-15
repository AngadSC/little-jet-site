import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">Little Jet Transport</div>
          <p className="text-gray-600 mt-2">Abbotsford, BC • 24/7 Dispatch</p>
          <p className="mt-2"><a className="underline" href="mailto:dispatch@littlejettransport.com">dispatch@littlejettransport.com</a></p>
          <p className="mt-1"><a className="underline" href="tel:+7782453549">(778) 245-3549</a></p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-2">
            <li><Link href="/services" className="underline">Services</Link></li>
            <li><Link href="/quote" className="underline">Get a Quote</Link></li>
            <li><Link href="/contact" className="underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Hours</div>
          <p className="text-gray-600 mt-2">Mon–Fri 8am–5pm</p>
        </div>
      </div>
      <div className="px-6 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Little Jet Transport • All rights reserved
      </div>
    </footer>
  );
}
