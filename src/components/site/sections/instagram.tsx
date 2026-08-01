import { Instagram } from "lucide-react";
import catCoffee from "@/assets/cat-coffee.jpg";
import catTea from "@/assets/cat-tea.jpg";
import catGift from "@/assets/cat-gift.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import product1 from "@/assets/product-1.jpg";
import product4 from "@/assets/product-4.jpg";
import { brand } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

const posts = [
  { image: catCoffee, caption: "Morning ritual, perfected" },
  { image: product1, caption: "Gold Ristretto close-up" },
  { image: catGift, caption: "Corporate gifting season" },
  { image: catTea, caption: "Imperial Matcha drop" },
  { image: product4, caption: "Discovery Collection" },
  { image: catAccessories, caption: "Brass details" },
];

export function InstagramFeed() {
  return (
    <section id="instagram" className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <Reveal>
          <p className="eyebrow text-gold-deep">{brand.instagramHandle}</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-tight">
            Straight from our Dubai studio.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Button variant="outline" className="min-h-12 rounded-none" asChild>
            <a href={brand.instagram} target="_blank" rel="noreferrer">
              <Instagram className="size-4" aria-hidden="true" />
              Follow us
            </a>
          </Button>
        </Reveal>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {posts.map((post, index) => (
          <Reveal as="li" key={post.caption} delay={index * 0.05} className="group relative overflow-hidden">
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="block">
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-espresso/70 p-3 text-center text-xs text-on-espresso opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {post.caption}
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
