export const metadata = { title: "Services — Little Jet Transport" };

const SERVICES = [
  { h: "Flatbed", p: "Open-deck for machines, steel & building materials." },
  { h: "Hot Shot", p: "Expedited, time-critical smaller loads." },
  { h: "Step Deck", p: "Drop-deck for tall/oversize cargo." },
  { h: "Dry Van (Heated)", p: "Protected general freight and temperature-sensitive goods." },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Freight Services</h1>
      <p className="mt-3 text-gray-600">Capacity for Alberta and cross-border lanes.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {SERVICES.map(({h, p}) => (
          <div key={h} className="rounded-xl border p-6">
            <h2 className="font-semibold">{h}</h2>
            <p className="mt-2 text-gray-600">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
