function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Brand/Copyright */}
        <div>
          <p className="font-semibold text-stone-200">© 2026 Workspace Essentials.</p>
          <p className="text-xs text-stone-500 mt-1">Curated tools for the modern developer.</p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;