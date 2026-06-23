import { Link } from "react-router-dom";
import { useCart } from "../services/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-stone-900 text-stone-100 shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide text-emerald-500 flex items-center gap-2 hover:opacity-90 transition-opacity">
          💻 WORKSPACE ESSENTIALS
        </Link>

        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Catalog</Link>
          <Link to="/cart" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            🛒 Cart 
            {cartCount > 0 && (
              <span className="bg-emerald-600 text-xs px-2 py-0.5 rounded-full text-white font-bold animate-fade-in">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;