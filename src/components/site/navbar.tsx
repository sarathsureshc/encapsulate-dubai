import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { brand, categories, flavours, products } from "@/data/site";
import { useStore } from "@/components/site/store";
import { Magnetic } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Shop", href: "#categories" },
  { label: "Flavours", href: "#flavours" },
  { label: "Compatibility", href: "#compatibility" },
  { label: "Coffee Club", href: "#subscription" },
  { label: "Story", href: "#about" },
];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("enc-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("enc-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen } = useStore();
  const { dark, toggle } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 40));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-90 transition-all duration-500",
          scrolled ? "surface-glass py-3" : "border-b border-transparent py-5",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[1fr_auto_1fr] lg:px-10"
        >
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Encapsulate home">
            <img src={logoMark} alt="" width={40} height={40} className="h-9 w-9 shrink-0" />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-none tracking-tight">
                {brand.name}
              </span>
              <span className="eyebrow block text-[0.55rem] text-muted-foreground">
                Coffee &amp; Tea Capsules
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="relative"
            >
              <button
                onClick={() => go("#categories")}
                aria-expanded={megaOpen}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                Shop
              </button>
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="surface-glass absolute left-1/2 top-full w-[640px] -translate-x-1/2 rounded-lg p-7 shadow-[var(--shadow-luxe)]"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2 grid grid-cols-2 gap-x-6 gap-y-4">
                        {categories.map((category) => (
                          <button
                            key={category.name}
                            onClick={() => go("#categories")}
                            className="group text-left"
                          >
                            <span className="block text-sm font-medium transition-colors group-hover:text-gold-deep">
                              {category.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {category.count}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="border-l border-border pl-6">
                        <span className="eyebrow text-gold-deep">Featured</span>
                        <p className="mt-3 font-display text-lg leading-snug">
                          Discovery Collection
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          12 blends, one tasting journal. Limited to 200 boxes.
                        </p>
                        <button
                          onClick={() => go("#products")}
                          className="mt-4 text-xs tracking-widest uppercase text-gold-deep underline-offset-4 hover:underline"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.slice(1).map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search products"
              onClick={() => setSearchOpen(true)}
              className="min-h-11 min-w-11"
            >
              <Search className="size-[18px]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggle}
              className="min-h-11 min-w-11"
            >
              {dark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={`Wishlist, ${wishlist.length} items`}
              onClick={() => go("#products")}
              className="relative hidden min-h-11 min-w-11 sm:inline-flex"
            >
              <Heart className="size-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-semibold text-espresso">
                  {wishlist.length}
                </span>
              )}
            </Button>
            <Magnetic strength={6}>
              <Button
                variant="ghost"
                size="icon"
                aria-label={`Open cart, ${cartCount} items`}
                onClick={() => setCartOpen(true)}
                className="relative min-h-11 min-w-11"
              >
                <ShoppingBag className="size-[18px]" />
                {cartCount > 0 && (
                  <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-gold text-[10px] font-semibold text-espresso">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Magnetic>
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="min-h-11 min-w-11 lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="surface-glass fixed inset-x-0 top-[72px] z-89 px-6 pb-8 pt-4 lg:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className="w-full border-b border-border/60 py-4 text-left font-display text-2xl"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search blends, machines, flavours…" />
        <CommandList>
          <CommandEmpty>Nothing matched. Try “espresso” or “matcha”.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                value={product.name}
                onSelect={() => {
                  setSearchOpen(false);
                  go("#products");
                }}
              >
                {product.name} · AED {product.price}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Flavours">
            {flavours.map((flavour) => (
              <CommandItem
                key={flavour.name}
                value={flavour.name}
                onSelect={() => {
                  setSearchOpen(false);
                  go("#flavours");
                }}
              >
                {flavour.name} · {flavour.note}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
