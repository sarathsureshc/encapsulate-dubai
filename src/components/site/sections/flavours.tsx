import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { flavours } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";

const meters = ["intensity", "roast", "sweetness", "body", "acidity"] as const;

export function FlavourExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-74%"]);

  return (
    <section id="flavours" ref={ref} className="relative h-[420vh] bg-espresso text-on-espresso">
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <p className="eyebrow text-gold">Flavour experience</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight">
              Nine characters. One tasting library.
            </h2>
          </Reveal>
        </div>

        <motion.ul style={{ x }} className="mt-12 flex gap-6 pl-5 lg:pl-10">
          {flavours.map((flavour) => (
            <li
              key={flavour.name}
              className="group relative w-[78vw] shrink-0 border border-on-espresso/12 bg-espresso-soft/60 p-8 transition-colors duration-500 hover:border-gold/40 sm:w-[420px]"
            >
              <span
                aria-hidden="true"
                className="absolute right-8 top-8 block size-12 rounded-b-full bg-[image:var(--gradient-gold)] opacity-70 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110"
              />
              <p className="eyebrow text-[0.55rem] text-gold">Capsule</p>
              <h3 className="mt-4 font-display text-3xl">{flavour.name}</h3>
              <p className="mt-2 text-sm text-on-espresso/60">{flavour.note}</p>

              <dl className="mt-8 space-y-4">
                {meters.map((meter) => (
                  <div key={meter} className="grid grid-cols-[80px_minmax(0,1fr)_28px] items-center gap-3">
                    <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-on-espresso/50">
                      {meter}
                    </dt>
                    <dd className="h-px w-full bg-on-espresso/15">
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: flavour[meter] / 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block h-px origin-left bg-gold"
                      />
                    </dd>
                    <dd className="text-right text-[0.7rem] tabular-nums text-on-espresso/60">
                      {flavour[meter]}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </motion.ul>

        <p className="mx-auto mt-10 w-full max-w-[1400px] px-5 text-xs text-on-espresso/40 lg:px-10">
          Keep scrolling to travel the flavour wheel →
        </p>
      </div>
    </section>
  );
}
