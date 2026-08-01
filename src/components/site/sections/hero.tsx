import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroMachine from "@/assets/hero-machine.jpg";
import { Magnetic, TextReveal } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

const beans = [
  { left: "8%", top: "22%", size: 10, delay: 0 },
  { left: "18%", top: "68%", size: 7, delay: 1.4 },
  { left: "36%", top: "16%", size: 6, delay: 2.6 },
  { left: "72%", top: "74%", size: 9, delay: 0.8 },
  { left: "88%", top: "34%", size: 7, delay: 2 },
  { left: "58%", top: "88%", size: 5, delay: 3.2 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden bg-espresso text-on-espresso"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <img
          src={heroMachine}
          alt="Matte black capsule espresso machine with a gold capsule suspended in steam"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="size-full scale-110 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/60" />
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0">
        {beans.map((bean) => (
          <span
            key={`${bean.left}-${bean.top}`}
            className="absolute rounded-full bg-gold/40"
            style={{
              left: bean.left,
              top: bean.top,
              width: bean.size,
              height: bean.size * 1.4,
              animation: `bean-drift ${9 + bean.delay}s ease-in-out ${bean.delay}s infinite`,
            }}
          />
        ))}
        <span className="steam-plume left-[62%] top-[46%] h-24 w-16" />
        <span className="steam-plume left-[68%] top-[52%] h-28 w-20" style={{ animationDelay: "2.4s" }} />
        <span className="steam-plume left-[57%] top-[58%] h-20 w-14" style={{ animationDelay: "4.1s" }} />
      </div>

      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-28 pt-32 lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-gold"
        >
          Dubai · Since 2019
        </motion.p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.94] tracking-[-0.02em]">
          <TextReveal text="Coffee Worth" delay={1} />
          <br />
          <span className="text-gold-gradient">
            <TextReveal text="Every Sip." delay={1.25} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-on-espresso/70 sm:text-lg"
        >
          Premium coffee &amp; tea capsules compatible with Nespresso&reg; and Dolce Gusto&reg;
          machines. Roasted in small batches, delivered across the UAE the same day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Button
              size="lg"
              className="group min-h-13 rounded-none bg-gold px-8 text-espresso hover:bg-gold-soft"
              onClick={() =>
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Shop Capsules
              <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              size="lg"
              variant="outline"
              className="min-h-13 rounded-none border-on-espresso/30 bg-transparent px-8 text-on-espresso hover:bg-on-espresso/10 hover:text-on-espresso"
              onClick={() =>
                document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Browse Machines
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="eyebrow text-[0.55rem] text-on-espresso/50">Scroll</span>
        <span className="h-14 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
