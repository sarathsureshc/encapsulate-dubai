import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionProps,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Scroll-triggered fade + rise. Honours reduced-motion automatically. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: ElementType;
} & MotionProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as as "div"] ?? motion.div;
  return (
    <Comp
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Word-by-word display text reveal. */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={reduced ? { opacity: 0 } : { y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Cursor-attracted wrapper for primary CTAs. */
export function Magnetic({
  children,
  strength = 18,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength * 2);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.span>
  );
}

/** 3D tilt card that reacts to pointer position. */
export function Tilt({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 });
  const rotateX = useTransform(py, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(px, [-0.5, 0.5], [-max, max]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={(event) => {
        if (reduced || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        px.set((event.clientX - rect.left) / rect.width - 0.5);
        py.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Count-up number that starts when scrolled into view. */
export function Counter({
  to,
  duration = 1800,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
    </span>
  );
}
