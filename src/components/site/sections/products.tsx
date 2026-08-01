import { Heart, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { products } from "@/data/site";
import { useStore } from "@/components/site/store";
import { Reveal, Tilt } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedProducts() {
  const { addToCart, toggleWishlist, wishlist, view, recentlyViewed } = useStore();

  return (
    <section id="products" className="bg-card py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal>
            <p className="eyebrow text-gold-deep">Most reordered</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
              The four our customers can't stop reordering.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-sm text-muted-foreground">
            Free delivery above AED 150 · Same-day in Dubai
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const wished = wishlist.includes(product.id);
            return (
              <Reveal key={product.id} delay={index * 0.07}>
                <Tilt max={6}>
                  <article
                    onMouseEnter={() => view(product)}
                    className="luxe-card group flex h-full flex-col rounded-sm"
                  >
                    <div className="relative overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={`${product.name} coffee capsule`}
                        loading="lazy"
                        width={1000}
                        height={1000}
                        className="aspect-square w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute left-4 top-4 bg-espresso px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-gold">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={() => {
                          toggleWishlist(product.id);
                          toast(wished ? "Removed from wishlist" : "Saved to wishlist");
                        }}
                        aria-label={
                          wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`
                        }
                        aria-pressed={wished}
                        className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-background/85 backdrop-blur transition-transform duration-300 hover:scale-110"
                      >
                        <Heart
                          className={cn("size-4", wished ? "fill-gold text-gold" : "text-foreground")}
                        />
                      </button>
                      {product.stock <= 8 && (
                        <span className="absolute bottom-3 left-4 rounded-full bg-destructive/90 px-3 py-1 text-[0.6rem] uppercase tracking-widest text-destructive-foreground">
                          Only {product.stock} left
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-1.5 text-gold-deep">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "size-3.5 transition-transform duration-500",
                              i < Math.round(product.rating) ? "fill-current" : "opacity-30",
                            )}
                            style={{ transitionDelay: `${i * 40}ms` }}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-1 text-xs text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl">{product.name}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {product.flavour}
                      </p>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                        {product.system} compatible
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                        <p className="font-display text-2xl">
                          AED {product.price}
                          {product.compareAt && (
                            <span className="ml-2 align-middle text-sm text-muted-foreground line-through">
                              {product.compareAt}
                            </span>
                          )}
                        </p>
                        <Button
                          size="icon"
                          aria-label={`Add ${product.name} to cart`}
                          onClick={() => {
                            addToCart(product);
                            toast.success(`${product.name} added to cart`);
                          }}
                          className="min-h-11 min-w-11 rounded-full"
                        >
                          <Plus className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        {recentlyViewed.length > 0 && (
          <div className="mt-14 border-t border-border pt-8">
            <p className="eyebrow text-muted-foreground">Recently viewed</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {recentlyViewed.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-3 rounded-full border border-border py-1.5 pl-1.5 pr-5"
                >
                  <img
                    src={product.image}
                    alt=""
                    loading="lazy"
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover"
                  />
                  <span className="text-xs">{product.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
