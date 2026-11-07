import Link from "next/link";
import TopBar from "../src/components/TopBar";
import VantaHero from "../src/components/VantaHero";
import Footer from "../src/components/Footer";

const products = [
  { id: 1, name: "Rajasthani Safa & Barati Pagdi Collection", price: "₹999", img: "/images/1.jpg" },
  { id: 2, name: "Rajasthani Pagdi", price: "₹1,299", img: "/images/2.jpg" },
  { id: 3, name: "Bandhani Turban", price: "₹799", img: "/images/3.jpg" },
  { id: 4, name: "Leheriya Safa", price: "₹1,499", img: "/images/4.jpg" },
  { id: 5, name: "Marwari Pagri", price: "₹699", img: "/images/5.jpg" },
  { id: 6, name: "Mewari Turban", price: "₹1,099", img: "/images/6.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <TopBar />

      <VantaHero />

      <main id="products" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="mb-8 text-2xl font-bold">Featured Products</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-amber-100 via-orange-200 to-pink-200 shadow-sm transition hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl">
              <div className="flex h-60 w-full items-center justify-center bg-zinc-100 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain transition group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <div className="mt-auto flex gap-2 pt-4">
                  {p.id === 1 ? (
                    <Link href="/product/1" className="flex-1 rounded-full bg-zinc-900 py-2 text-center font-medium text-white transition hover:bg-zinc-700">Details</Link>
                  ) : (
                    <button className="flex-1 rounded-full bg-zinc-900 py-2 font-medium text-white transition hover:bg-zinc-700">Details</button>
                  )}
                  <Link href="/contact" className="flex-1 rounded-full border border-zinc-900 py-2 text-center font-medium text-zinc-900 transition hover:bg-zinc-100">Contact Us</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}