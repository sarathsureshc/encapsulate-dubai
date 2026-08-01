import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const systems = [
  {
    name: "Nespresso®",
    subtitle: "Original line",
    points: [
      "42 coffee blends, 12 tea infusions",
      "Aluminium body, nitrogen sealed",
      "9-bar extraction, thick crema",
      "Fits Essenza, Pixie, Citiz, Lattissima, Vertuo Pop*",
    ],
  },
  {
    name: "Dolce Gusto®",
    subtitle: "Capsule system",
    points: [
      "18 coffee & milk recipes",
      "High-pressure sealed rim, zero leaks",
      "Barista-style layered drinks",
      "Fits Genio, Piccolo, Infinissima, Mini Me",
    ],
  },
];

const machineModels = [
  "Nespresso Essenza Mini",
  "Nespresso Pixie",
  "Nespresso Citiz",
  "Nespresso Lattissima",
  "Dolce Gusto Genio S",
  "Dolce Gusto Piccolo XS",
  "Dolce Gusto Infinissima",
  "Other / not sure",
];

export function Compatibility() {
  const [model, setModel] = useState<string>("");

  return (
    <section id="compatibility" className="mx-auto max-w-[1400px] px-5 py-24 lg:px-10 lg:py-36">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-gold-deep">Compatibility</p>
        <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
          Made to click into the machine you already own.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
        {systems.map((system, index) => (
          <Reveal key={system.name} delay={index * 0.1}>
            <article className="luxe-card h-full rounded-sm p-8">
              <p className="eyebrow text-gold-deep">{system.subtitle}</p>
              <h3 className="mt-3 font-display text-3xl">{system.name}</h3>
              <ul className="mt-6 space-y-3">
                {system.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        <Reveal
          delay={0.1}
          className="order-first flex items-center justify-center lg:order-none lg:px-6"
        >
          <div className="relative grid h-56 w-24 place-items-center">
            <span className="absolute inset-x-4 bottom-6 h-24 rounded-sm border border-border bg-card" />
            <motion.span
              aria-hidden="true"
              initial={{ y: -70, opacity: 0 }}
              whileInView={{ y: 42, opacity: [0, 1, 1, 0] }}
              viewport={{ once: false, margin: "-120px" }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" }}
              className="absolute left-1/2 h-9 w-8 -translate-x-1/2 rounded-b-full bg-[image:var(--gradient-gold)]"
            />
            <span className="absolute bottom-2 eyebrow text-[0.5rem] text-muted-foreground">
              Perfect fit
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-10">
        <div className="grid gap-4 rounded-sm border border-gold/30 bg-card p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:p-8">
          <div className="min-w-0">
            <p className="eyebrow text-gold-deep">Compatibility checker</p>
            <h3 className="mt-3 font-display text-2xl">Which machine do you brew with?</h3>
            <div className="mt-5 max-w-sm">
              <label htmlFor="machine-select" className="sr-only">
                Select your coffee machine
              </label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger id="machine-select" className="min-h-12 w-full">
                  <SelectValue placeholder="Choose your machine" />
                  <ChevronDown className="size-4 opacity-0" aria-hidden="true" />
                </SelectTrigger>
                <SelectContent>
                  {machineModels.map((machine) => (
                    <SelectItem key={machine} value={machine}>
                      {machine}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div aria-live="polite" className="text-sm">
            {model ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-medium text-gold-deep"
              >
                <Check className="size-4" aria-hidden="true" />
                {model === "Other / not sure"
                  ? "Send us a photo on WhatsApp — we'll confirm in minutes."
                  : `Compatible. ${model.startsWith("Nespresso") ? "42 blends" : "18 recipes"} available.`}
              </motion.p>
            ) : (
              <p className="text-muted-foreground">Answer in one tap and we'll filter the range.</p>
            )}
          </div>
        </div>
      </Reveal>

      <p className="mt-6 text-xs text-muted-foreground">
        *Encapsulate is an independent brand and is not affiliated with, endorsed by, or sponsored by
        Nespresso&reg; or Dolce Gusto&reg;. Trademarks belong to their respective owners.
      </p>

      <Reveal delay={0.2} className="mt-8">
        <Button
          variant="outline"
          className="min-h-12 rounded-none"
          onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
        >
          See matching capsules
        </Button>
      </Reveal>
    </section>
  );
}
