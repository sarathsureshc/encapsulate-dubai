import { faqs } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="bg-card py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold-deep">Questions</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            Everything you might ask before your first box.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
