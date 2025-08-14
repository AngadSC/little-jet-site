export const metadata = { title: "Contact — Little Jet Transport" };

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-4 space-y-2">
        <p>Phone: <a className="underline" href="tel:+15551234567">555-123-4567</a></p>
        <p>Email: <a className="underline" href="mailto:dispatch@littlejettransport.com">dispatch@littlejettransport.com</a></p>
        <p>Base: Abbotsford, BC</p>
      </div>
      <div className="mt-6 aspect-video rounded-xl overflow-hidden border">
        <iframe className="w-full h-full" loading="lazy" allowFullScreen
          src="https://www.google.com/maps?q=Abbotsford,BC&output=embed" />
      </div>
    </section>
  );
}
