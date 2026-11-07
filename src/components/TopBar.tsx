export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-black">Safa Store</a>
        <nav className="flex flex-wrap gap-4 text-sm font-medium sm:gap-6">
          <a href="/" className="hover:text-indigo-600">Home</a>

        </nav>
      </div>
    </header>
  );
}
