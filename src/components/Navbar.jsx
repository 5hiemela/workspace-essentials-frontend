function Navbar() {
  return (
    <nav className="bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo - Changed text-amber-500 to text-emerald-500 */}
        <div className="text-xl font-bold tracking-wide text-emerald-500 flex items-center gap-2">
          💻 WORKSPACE ESSENTIALS
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors">Catalog</a>
          <a href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            🛒 Cart <span className="bg-emerald-600 text-xs px-2 py-0.5 rounded-full text-white">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;