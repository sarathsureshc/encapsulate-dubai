import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useStore, upsellPicks } from "@/components/site/store";
import { brand, whatsappLink } from "@/data/site";

const FREE_SHIPPING = 150;

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, cartTotal, setQty, removeFromCart, addToCart } = useStore();
  const remaining = Math.max(FREE_SHIPPING - cartTotal, 0);

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="font-display text-2xl">Your selection</SheetTitle>
          <p className="text-xs text-muted-foreground">
            {remaining > 0
              ? `Add AED ${remaining} more for free delivery across the UAE.`
              : "Free delivery unlocked — dispatching today."}
          </p>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gold transition-[width] duration-700"
              style={{ width: `${Math.min((cartTotal / FREE_SHIPPING) * 100, 100)}%` }}
            />
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          {cart.length === 0 ? (
            <div className="grid place-items-center py-16 text-center">
              <ShoppingBag className="size-8 text-muted-foreground" aria-hidden="true" />
              <p className="mt-4 font-display text-xl">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with the Gold Ristretto — our most reordered blend.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {cart.map((line) => (
                <li key={line.product.id} className="flex gap-4">
                  <img
                    src={line.product.image}
                    alt={line.product.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="size-20 shrink-0 rounded-sm object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{line.product.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{line.product.flavour}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label={`Decrease quantity of ${line.product.name}`}
                        onClick={() => setQty(line.product.id, line.qty - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center text-sm tabular-nums">{line.qty}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label={`Increase quantity of ${line.product.name}`}
                        onClick={() => setQty(line.product.id, line.qty + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto size-8"
                        aria-label={`Remove ${line.product.name}`}
                        onClick={() => removeFromCart(line.product.id)}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm tabular-nums">AED {line.product.price * line.qty}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <p className="eyebrow text-gold-deep">Frequently bought together</p>
            <ul className="mt-3 space-y-3">
              {upsellPicks.map((product) => (
                <li key={product.id} className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="size-12 rounded-sm object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm">{product.name}</p>
                    <p className="text-xs text-muted-foreground">AED {product.price}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} added`);
                    }}
                  >
                    Add
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3 border-t border-border p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-xl tabular-nums">AED {cartTotal}</span>
          </div>
          <Button
            className="min-h-12 w-full"
            disabled={cart.length === 0}
            onClick={() => toast.success("Checkout is ready to connect to payments.")}
          >
            Secure checkout
          </Button>
          <Button variant="outline" className="min-h-12 w-full" asChild>
            <a
              href={whatsappLink(`Hi ${brand.name}, I'd like to order: ${cart.map((l) => `${l.qty}x ${l.product.name}`).join(", ") || "capsules"}`)}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
          </Button>
          <p className="text-center text-[11px] text-muted-foreground">
            Promo codes and gift cards are applied at checkout.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
