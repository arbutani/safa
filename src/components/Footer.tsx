export default function Footer() {
  return (
    <footer className="border-t bg-white py-10 text-zinc-600">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-black">Safa Store</h4>
            <p className="mt-1 text-sm">Best products at best prices</p>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-zinc-500 hover:text-indigo-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.6v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-zinc-500 hover:text-indigo-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-zinc-500 hover:text-indigo-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="#" aria-label="X" className="text-zinc-500 hover:text-indigo-600">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <a href="/contact" className="hover:text-indigo-600">Contact Us</a>
          <a href="/privacy-policy" className="hover:text-indigo-600">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-indigo-600">Terms & Conditions</a>
          <a href="/refund-policy" className="hover:text-indigo-600">Refund Policy</a>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-400">
          © 2026 Safa Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
