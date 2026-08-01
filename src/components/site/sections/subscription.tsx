import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Magnetic, Reveal, Tilt } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import { brand, whatsappLink } from "@/data/site";

const benefits = [
  "Save 15% on every single delivery",
  "Priority same-day dispatch across the UAE",
  "Members-only limited micro-lots",
  "Free machine descaling kit twice a year",
  "Pause, skip or cancel in one message",
];

export function Subscription() {
  return (
    <section id="subscription" className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow text-gold-deep">Monthly Coffee Club</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
            Never run out. Never overpay.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Choose your blends and a rhythm — every 2, 4 or 8 weeks. We handle the rest, and your
            price drops the moment you join.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="flex items-center gap-3 text-sm"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-deep">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {benefit}
              </motion.li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Button className="min-h-12 rounded-none px-8" asChild>
                <a
                  href={whatsappLink(`Hi ${brand.name}, I'd like to join the Monthly Coffee Club.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the Coffee Club
                </a>
              </Button>
            </Magnetic>
            <Button
              variant="outline"
              className="min-h-12 rounded-none px-8"
              onClick={() => document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" })}
            >
              How it works
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Tilt max={9}>
            <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-lg bg-espresso p-8 shadow-[var(--shadow-luxe)]">
              <span
                aria-hidden="true"
                className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/25 blur-3xl"
              />
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-gold/20 to-transparent [animation:shimmer-sweep_5s_ease-in-out_infinite]"
              />
              <div className="relative flex h-full flex-col justify-between text-on-espresso">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[0.55rem] text-gold">Encapsulate</p>
                    <p className="mt-1 font-display text-2xl">Coffee Club</p>
                  </div>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.6rem] uppercase tracking-widest text-gold">
                    Member
                  </span>
                </div>
                <div>
                  <p className="font-display text-4xl tracking-wide text-gold-gradient">15% OFF</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-on-espresso/50">
                    Every delivery · Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
