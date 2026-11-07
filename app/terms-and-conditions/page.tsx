import TopBar from "../../src/components/TopBar";
import Footer from "../../src/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <TopBar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-zinc-700">These are the terms and conditions. Placeholder content.</p>
      </main>
      <Footer />
    </div>
  );
}