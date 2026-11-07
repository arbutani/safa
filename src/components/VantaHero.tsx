"use client";
import { useEffect, useRef } from "react";

const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_FOG_SRC = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.fog.min.js";

// Same script do baar load na ho (React strict mode / re-mount safe)
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error(`Failed: ${src}`)));
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => {
      s.dataset.loaded = "true";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed: ${src}`));
    document.head.appendChild(s);
  });
}

export default function VantaHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vanta: any;
    let cancelled = false;

    (async () => {
      try {
        const w = window as any;
        if (!w.THREE) await loadScript(THREE_SRC);
        if (!w.VANTA?.FOG) await loadScript(VANTA_FOG_SRC);
        // Agar load hote waqt component unmount ho gaya to effect na banayein
        if (cancelled || !ref.current || !w.VANTA?.FOG) return;

        vanta = w.VANTA.FOG({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          // Warm "safa" palette: gold, saffron-red, deep pink, cream
          highlightColor: 0xffc300,
          midtoneColor: 0xff5a1f,
          lowlightColor: 0xc2185b,
          baseColor: 0xfff4e6,
          blurFactor: 0.6,
          zoom: 1.0,
          speed: 1.0,
        });
      } catch {
        // CDN fail ho jaye to CSS gradient fallback dikhta rahega
      }
    })();

    return () => {
      cancelled = true;
      vanta?.destroy?.();
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Welcome"
      // Gradient = loading ke dauraan aur fallback background (blank flash nahi)
      className="relative flex min-h-[26rem] items-center justify-center overflow-hidden bg-gradient-to-br from-amber-200 via-orange-300 to-pink-400 px-4 py-16 sm:min-h-[32rem] sm:py-24"
    >
      {/* Frosted card: fog ke upar text hamesha padhne layak rahe */}
      <div className="relative z-10 mx-auto max-w-2xl rounded-3xl bg-white/55 px-6 py-10 text-center shadow-xl backdrop-blur-md sm:px-12 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700 sm:text-sm">
          Rajasthani &amp; Barati Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
          Welcome to Safa Store
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-zinc-700 sm:text-lg">
          Best products at best prices. Weddings, festivals aur folk dance ke liye
          ready-to-wear safa aur pagdi.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 sm:w-auto"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-900/20 bg-white px-7 py-3 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 sm:w-auto"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}