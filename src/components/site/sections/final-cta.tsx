import ctaSteam from "@/assets/cta-steam.jpg";
import { MessageCircle } from "lucide-react";
import { brand, whatsappLink } from "@/data/site";
import { Magnetic, Reveal } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-espresso py-28 text-on-espresso lg:py-40">
      <img
        src={ctaSteam}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <span aria-hidden="true" className="steam-plume left-[20%] top-1/2 h-32 w-24" />
      <span
        aria-hidden="true"
        className="steam-plume right-[24%] top-1/2 h-40 w-28"
        style={{ animationDelay: "3s" }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Ready when you are</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.03] tracking-tight">
            Ready to Upgrade Your Coffee Experience?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-on-espresso/70">
            Order before 4pm and your capsules arrive today. Or message us — we'll build the perfect
            box for your machine in under five minutes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Button
                size="lg"
                className="min-h-13 rounded-none bg-gold px-10 text-espresso hover:bg-gold-soft"
                onClick={() =>
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Shop Now
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                size="lg"
                variant="outline"
                className="min-h-13 rounded-none border-on-espresso/30 bg-transparent px-10 text-on-espresso hover:bg-on-espresso/10 hover:text-on-espresso"
                asChild
              >
                <a
                  href={whatsappLink(`Hi ${brand.name}, I'd like help choosing capsules.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
