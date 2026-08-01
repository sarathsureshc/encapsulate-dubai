import aboutStory from "@/assets/about-story.jpg";
import { Reveal } from "@/components/site/motion-primitives";
import { deliveryOptions } from "@/data/site";

export function About() {
  return (
    <section id="about" className="bg-espresso py-24 text-on-espresso lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal className="relative">
          <img
            src={aboutStory}
            alt="A hand placing a gold capsule into a black coffee machine in a sunlit Dubai kitchen"
            loading="lazy"
            width={1400}
            height={1200}
            className="w-full rounded-sm object-cover"
          />
          <span className="absolute -bottom-6 left-6 bg-gold px-5 py-3 text-[0.6rem] uppercase tracking-[0.25em] text-espresso">
            Women-owned · Dubai
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow text-gold">Our story</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            “Bring café-quality coffee into every home.”
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-on-espresso/70">
            Encapsulate began in a Jumeirah kitchen in 2019, when our founder grew tired of paying
            café prices for coffee she could taste better at home. She spent two years with Italian
            roasters perfecting a capsule that fits the machines people in the UAE already own — and
            tastes like it cost far more.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-on-espresso/70">
            Today we roast in small batches, seal within hours, and deliver across all seven emirates
            from our Al Quoz studio. Every box is packed by hand, by a team that drinks what it sells.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-on-espresso/10 bg-on-espresso/10">
            {deliveryOptions.slice(0, 4).map((option) => (
              <div key={option.title} className="bg-espresso p-5">
                <dt className="font-display text-lg">{option.title}</dt>
                <dd className="mt-1 text-xs text-on-espresso/55">{option.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
