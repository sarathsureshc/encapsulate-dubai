import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <Reveal>
          <p className="eyebrow text-gold-deep">The collection</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
            Six ways to bring the café home.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Every capsule, machine and accessory is chosen by our Dubai tasting panel — and nothing
          ships until it earns its place.
        </Reveal>
      </div>

      <div className="mt-14 grid auto-rows-[300px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Reveal
            key={category.name}
            delay={index * 0.06}
            className={`group relative overflow-hidden rounded-sm ${category.span}`}
          >
            <a href="#products" className="block h-full w-full">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                width={900}
                height={1100}
                className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent" />
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-gold/25 to-transparent [animation:shimmer-sweep_1.4s_ease-out]" />
              </span>
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <span className="min-w-0">
                  <span className="eyebrow block text-[0.55rem] text-gold">{category.count}</span>
                  <span className="mt-2 block font-display text-2xl text-on-espresso">
                    {category.name}
                  </span>
                  <span className="mt-1 block max-w-xs text-xs leading-relaxed text-on-espresso/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {category.blurb}
                  </span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-espresso">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
