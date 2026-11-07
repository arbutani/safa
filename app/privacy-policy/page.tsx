import TopBar from "../../src/components/TopBar";
import Footer from "../../src/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <TopBar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-zinc-700">We respect your privacy. This is a placeholder privacy policy page.</p>
      </main>
      <Footer />
    </div>
  );
}