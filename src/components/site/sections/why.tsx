import { Coffee, Gem, Leaf, Settings2, Sparkles, Truck, Wind } from "lucide-react";
import { pillars } from "@/data/site";
import { Reveal, Tilt } from "@/components/site/motion-primitives";

const icons = {
  sparkles: Sparkles,
  coffee: Coffee,
  wind: Wind,
  truck: Truck,
  gem: Gem,
  leaf: Leaf,
  settings: Settings2,
};

export function WhyEncapsulate() {
  return (
    <section id="why" className="relative overflow-hidden bg-espresso py-24 text-on-espresso lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-10 size-[420px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 size-[360px] rounded-full bg-mocha/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Why Encapsulate</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
            Obsessive about the sixty seconds that make your morning.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-on-espresso/10 bg-on-espresso/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <Tilt max={5}>
                  <article className="group relative h-full bg-espresso p-8 transition-colors duration-500 hover:bg-espresso-soft">
                    <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                    <Icon
                      className="size-6 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6"
                      aria-hidden="true"
                    />
                    <h3 className="mt-6 font-display text-xl">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-espresso/60">{pillar.copy}</p>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
          <Reveal delay={0.35} className="hidden lg:block">
            <div className="flex h-full flex-col justify-center bg-gold p-8 text-espresso">
              <p className="font-display text-3xl leading-tight">From AED 2.4 a cup.</p>
              <p className="mt-3 text-sm">Roughly a fifth of a Dubai café latte.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
