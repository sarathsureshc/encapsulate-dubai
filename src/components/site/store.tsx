import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { products as catalogue, type Product } from "@/data/site";

export type CartLine = { product: Product; qty: number };

type StoreValue = {
  cart: CartLine[];
  wishlist: string[];
  recentlyViewed: Product[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  view: (product: Product) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product: Product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((line) => line.product.id === product.id);
      if (found) {
        return prev.map((line) =>
          line.product.id === product.id ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [...prev, { product, qty }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((line) => line.product.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((line) => line.product.id !== id)
        : prev.map((line) => (line.product.id === id ? { ...line, qty } : line)),
    );
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const view = useCallback((product: Product) => {
    setRecentlyViewed((prev) => [product, ...prev.filter((p) => p.id !== product.id)].slice(0, 4));
  }, []);

  const value = useMemo<StoreValue>(() => {
    const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);
    const cartTotal = cart.reduce((sum, line) => sum + line.qty * line.product.price, 0);
    return {
      cart,
      wishlist,
      recentlyViewed,
      cartCount,
      cartTotal,
      cartOpen,
      setCartOpen,
      addToCart,
      removeFromCart,
      setQty,
      toggleWishlist,
      view,
    };
  }, [cart, wishlist, recentlyViewed, cartOpen, addToCart, removeFromCart, setQty, toggleWishlist, view]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

export const upsellPicks = catalogue.slice(1, 3);
