import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState(""); // Tracks active alert message

  // Add qty parameter with a fallback default of 1
  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });

    // Update message text based on quantity
    const messageText = qty > 1
        ? `Added ${qty}x ${product.name} to cart!`
        : `Added ${product.name} to cart!`;
        
    setToastMessage(messageText);
    
    // Auto-clear the toast notification after 2.5 seconds
    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
      
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-stone-900 text-stone-100 text-sm font-medium px-5 py-3.5 rounded-xl shadow-xl z-50 flex items-center gap-2 border border-stone-800 animate-fade-in-up">
          <span className="text-emerald-400">✓</span> {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}