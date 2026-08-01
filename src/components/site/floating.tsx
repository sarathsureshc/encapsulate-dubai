import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { brand, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/components/site/store";
import { toast } from "sonner";

const socialProof = [
  "Layla in Dubai Marina just ordered Gold Ristretto",
  "An office in DIFC reordered 40 sleeves",
  "Noor in Abu Dhabi joined the Coffee Club",
  "Rahul in Business Bay bought the Discovery Collection",
];

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const { setCartOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-24 right-4 z-80 flex flex-col items-end gap-3 sm:bottom-6">
        <AnimatePresence>
          {showTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Button
                variant="outline"
                size="icon"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="min-h-11 min-w-11 rounded-full shadow-[var(--shadow-luxe)]"
              >
                <ArrowUp className="size-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={whatsappLink(`Hi ${brand.name}, I'd like to know more about your capsules.`)}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Encapsulate on WhatsApp"
          className="group relative grid size-14 place-items-center rounded-full bg-espresso text-on-espresso shadow-[var(--shadow-luxe)] transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/25" aria-hidden="true" />
          <MessageCircle className="relative size-6 text-gold" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-80 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <div className="flex gap-2">
          <Button
            className="min-h-12 flex-1"
            onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Shop capsules
          </Button>
          <Button variant="outline" className="min-h-12 flex-1" onClick={() => setCartOpen(true)}>
            View cart
          </Button>
        </div>
      </div>
    </>
  );
}

export function SocialProofToasts() {
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      toast(socialProof[index % socialProof.length], { description: "Verified order · moments ago" });
      index += 1;
    }, 22000);
    return () => clearInterval(timer);
  }, []);
  return null;
}

export function ExitIntentOffer() {
  const [open, setOpen] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("enc-offer-seen")) return;
    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("enc-offer-seen", "1");
      }
    };
    const fallback = setTimeout(() => {
      if (!sessionStorage.getItem("enc-offer-seen")) {
        setOpen(true);
        sessionStorage.setItem("enc-offer-seen", "1");
      }
    }, 45000);
    document.addEventListener("mouseout", onLeave);
    return () => {
      document.removeEventListener("mouseout", onLeave);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-95 grid place-items-center bg-espresso/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-title"
        >
          <motion.div
            initial={{ y: 24, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md border border-gold/30 bg-card p-8 text-center shadow-[var(--shadow-luxe)]"
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close offer"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 min-h-11 min-w-11"
            >
              <X className="size-4" />
            </Button>
            <p className="eyebrow text-gold-deep">First order</p>
            <h2 id="offer-title" className="mt-3 font-display text-3xl">
              Take 15% off your first box
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Join 4,500 UAE households drinking better coffee. Code lands in your inbox instantly.
            </p>
            {claimed ? (
              <p className="mt-6 font-display text-2xl text-gold-deep">Use code ENCAP15</p>
            ) : (
              <form
                className="mt-6 flex flex-col gap-2 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  setClaimed(true);
                }}
              >
                <label htmlFor="offer-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="offer-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="min-h-12"
                />
                <Button type="submit" className="min-h-12">
                  Claim 15%
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
