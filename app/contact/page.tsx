import TopBar from "../../src/components/TopBar";
import Footer from "../../src/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <TopBar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-zinc-700">Reach us at:</p>
        <ul className="mt-4 space-y-2 text-zinc-700">
          <li>Phone: +91 9999490730</li>
          <li>Email: info@safastore.com</li>
          <li>Address: A-6/38, Sector 16, Rohini, Delhi 110089</li>
        </ul>
        <a href="https://wa.me/919999490730" className="mt-6 inline-block rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700">Inquiry with WhatsApp</a>
      </main>
      <Footer />
    </div>
  );
}