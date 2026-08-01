import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Lenis-powered smooth scrolling, disabled for reduced-motion users. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | undefined;
    let frame = 0;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}

/** Thin gold reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-gold"
    />
  );
}

/** Brand loading veil shown on first paint. */
export function LoadingVeil() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none fixed inset-0 z-101 flex items-center justify-center bg-espresso ${
        done ? "hidden" : ""
      }`}
      onAnimationComplete={() => setDone(true)}
    >
      <div className="text-center">
        <span className="eyebrow text-gold">Encapsulate</span>
        <div className="mt-4 h-px w-40 overflow-hidden bg-on-espresso/15">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full bg-gold"
          />
        </div>
      </div>
    </motion.div>
  );
}
