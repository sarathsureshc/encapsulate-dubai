import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { deliveryOptions } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";

const emirates = [
  { name: "Dubai", x: 58, y: 46 },
  { name: "Sharjah", x: 63, y: 38 },
  { name: "Ajman", x: 67, y: 33 },
  { name: "Umm Al Quwain", x: 72, y: 28 },
  { name: "Ras Al Khaimah", x: 78, y: 18 },
  { name: "Fujairah", x: 86, y: 32 },
  { name: "Abu Dhabi", x: 30, y: 66 },
];

export function Delivery() {
  return (
    <section id="delivery" className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow text-gold-deep">Delivery</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
            All seven emirates. Often the same afternoon.
          </h2>
          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {deliveryOptions.map((option, index) => (
              <motion.li
                key={option.title}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-gold" />
                <p className="font-display text-xl">{option.title}</p>
                <p className="text-xs text-muted-foreground">{option.detail}</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-gold-deep">
                  {option.eta}
                </p>
              </motion.li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-4/3 w-full rounded-sm border border-border bg-card p-6">
            <svg
              viewBox="0 0 100 100"
              className="size-full"
              role="img"
              aria-label="Map of the United Arab Emirates showing Encapsulate delivery coverage"
            >
              <path
                d="M14 62 L26 52 L36 54 L46 44 L58 40 L64 30 L72 24 L82 12 L92 26 L88 40 L80 48 L72 58 L58 66 L44 74 L28 76 Z"
                className="fill-muted stroke-border"
                strokeWidth="0.6"
              />
              {emirates.map((emirate, index) => (
                <motion.circle
                  key={emirate.name}
                  cx={emirate.x}
                  cy={emirate.y}
                  r="1.6"
                  className="fill-gold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                />
              ))}
            </svg>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-gold-deep" aria-hidden="true" />
              Studio &amp; pickup counter · Al Quoz, Dubai
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
