import { useState } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";
import { brand } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const columns = [
  {
    title: "Shop",
    links: ["Coffee Capsules", "Tea Capsules", "Coffee Machines", "Bundles", "Gift Boxes"],
  },
  { title: "Company", links: ["Our Story", "Coffee Club", "Corporate Gifting", "Wholesale"] },
  { title: "Support", links: ["Delivery & Returns", "Compatibility", "Privacy Policy", "Terms"] },
];

export function Footer() {
  const [signed, setSigned] = useState(false);

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,0.7fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="" width={40} height={40} loading="lazy" className="size-9" />
              <span className="font-display text-xl">{brand.name}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium coffee &amp; tea capsules, roasted in small batches and delivered across the
              UAE from our Dubai studio.
            </p>
            <form
              className="mt-7 flex max-w-sm flex-col gap-2 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                setSigned(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                className="min-h-12"
              />
              <Button type="submit" className="min-h-12 rounded-none">
                {signed ? "Subscribed" : "Subscribe"}
              </Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground" aria-live="polite">
              {signed ? "Welcome in — your 15% code is on its way." : "New blends and members-only drops. No spam."}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="eyebrow text-gold-deep">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-gold-deep" aria-hidden="true" />
              <a href={`tel:${brand.phoneDisplay.replace(/\s/g, "")}`}>{brand.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-gold-deep" aria-hidden="true" />
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-gold-deep" aria-hidden="true" />
              Al Quoz, {brand.city}
            </li>
          </ul>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Encapsulate on Instagram"
            className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-gold"
          >
            <Instagram className="size-4" />
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brand.legalName}. Nespresso® and Dolce Gusto® are trademarks
          of their respective owners; Encapsulate is an independent brand.
        </p>
      </div>
    </footer>
  );
}
