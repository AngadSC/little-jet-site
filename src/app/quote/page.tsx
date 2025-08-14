export const metadata = { title: "Get a Quote — Little Jet Transport" };

export default function Quote() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Get a Quote</h1>
      <form action="#" method="POST" className="mt-6 grid gap-4">
        <input className="border rounded-lg p-3" name="name" placeholder="Your name" required />
        <input className="border rounded-lg p-3" type="email" name="email" placeholder="Email" required />
        <input className="border rounded-lg p-3" name="phone" placeholder="Phone" />
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="border rounded-lg p-3" name="pickup" placeholder="Pickup location" required />
          <input className="border rounded-lg p-3" name="dropoff" placeholder="Dropoff location" required />
        </div>
        <textarea className="border rounded-lg p-3" name="details" placeholder="Freight details (weight, pallets, reefer?)" rows={5}></textarea>
        <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
        <button className="px-5 py-3 rounded-xl bg-black text-white" type="submit">Submit</button>
      </form>
    </section>
  );
}
