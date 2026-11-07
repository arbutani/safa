"use client";
import { useEffect, useState } from "react";
import TopBar from "../../../src/components/TopBar";
import Footer from "../../../src/components/Footer";

// Zyada photos ho to yahan add kar do, thumbnails apne aap ban jayenge
const IMAGES = ["/images/1.jpg"];

const FULL_TITLE =
  "BookMyCostume Traditional Rajasthani Safa & Barati Pagdi Collection – Pre-Stitched Ethnic Turbans, Bandhani/Leheriya Headwear For Weddings, Cultural Folk Dance & Festival Pagdi for Adults";

const HIGHLIGHTS = [
  {
    title: "Ready-to-wear, pre-stitched",
    text: "Halke frame par bani hai, cap ki tarah seconds mein pehen sakte hain. Peeche pink-gold fabric ka lamba trail.",
  },
  {
    title: "Pachrangi Marwari / Mewari style",
    text: "Bright yellow, orange aur deep pink ka festive combination.",
  },
  {
    title: "Weddings & baraat ke liye",
    text: "Barati, groom ke family members aur special guests ke liye perfect.",
  },
  {
    title: "Folk dance, stage & festivals",
    text: "Garba, Ghoomar, Dandiya, school functions, Holi, Diwali aur Navratri ke liye.",
  },
  {
    title: "Swagat ke liye respectful gift",
    text: "Elders, groomsmen aur guests ko welcome ceremony, housewarming ya pre-wedding function mein dene ke liye.",
  },
];

const SPECS: [string, string][] = [
  ["Item weight", "400 g"],
  ["Dimensions (L × W × H)", "36 × 30 × 8 cm"],
  ["Included", "1 Turban"],
  ["Suitable for", "Adults"],
  ["Style", "Pachrangi Rajasthani Safa / Barati Pagri"],
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-emerald-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProductPage() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  // Lightbox: Esc se band ho, aur piche page scroll na ho
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <TopBar />
      <main className="mx-auto max-w-6xl px-4 py-6 pb-28 sm:px-6 sm:py-10 md:pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* ---------- Gallery ---------- */}
          <section aria-label="Product images" className="md:sticky md:top-6 md:self-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Image ko bada karke dekhein"
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <img
                src={IMAGES[active]}
                alt="Pachrangi Rajasthani Safa – yellow, orange aur pink pre-stitched pagdi"
                className="h-auto max-h-[34rem] w-full cursor-zoom-in object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                Tap to zoom
              </span>
            </button>

            {IMAGES.length > 1 && (
              <ul className="mt-3 flex gap-2 overflow-x-auto">
                {IMAGES.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Image ${i + 1} dekhein`}
                      className={`h-16 w-16 overflow-hidden rounded-lg border-2 bg-white p-1 ${
                        i === active ? "border-amber-500" : "border-zinc-200"
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-contain" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* ---------- Details ---------- */}
          <section className="space-y-8">
            <header className="space-y-3">
              <h1 className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
                Rajasthani Pachrangi Safa – Pre-Stitched Barati Pagdi
              </h1>
              <p className="text-sm text-zinc-600">
                Weddings, folk dance aur festivals ke liye adult size ethnic turban.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Pre-stitched", "Adult size", "Wedding & Festival", "Folk dance"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </header>

            {/* CTA – desktop */}
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Order on WhatsApp
              </a>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold">About this item</h2>
              <ul className="space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="flex gap-3">
                    <CheckIcon />
                    <p className="text-sm leading-relaxed text-zinc-700">
                      <span className="font-semibold text-zinc-900">{h.title}. </span>
                      {h.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold">Product details</h2>
              <dl className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white text-sm">
                {SPECS.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-3 px-4 py-3">
                    <dt className="col-span-2 text-zinc-500">{k}</dt>
                    <dd className="col-span-3 font-medium text-zinc-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <details className="group rounded-xl border border-zinc-200 bg-white text-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold">
                Manufacturer / Packer / Importer
                <span className="text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className="space-y-1 border-t border-zinc-200 px-4 py-3 text-zinc-600">
                <p className="font-medium text-zinc-900">DISFRAZ ONLINE PRIVATE LIMITED</p>
                <p>A-6/38, Sector 16, Rohini, Delhi, India 110089</p>
                <p>
                  Tel:{" "}
                  <a href="tel:+919999490730" className="text-amber-700 underline">
                    +91 9999490730
                  </a>
                </p>
              </div>
            </details>

            <details className="group rounded-xl border border-zinc-200 bg-white text-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-semibold">
                Full product name
                <span className="text-zinc-400 transition group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <p className="border-t border-zinc-200 px-4 py-3 text-zinc-600">{FULL_TITLE}</p>
            </details>
          </section>
        </div>
      </main>

      {/* CTA – mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href="#"
          className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white active:bg-emerald-700"
        >
          Order on WhatsApp
        </a>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product image"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Band karein"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ×
          </button>
          <img
            src={IMAGES[active]}
            alt="Pachrangi Rajasthani Safa"
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}