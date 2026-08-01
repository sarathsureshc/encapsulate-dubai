import { BadgeCheck, Star, Truck, Users } from "lucide-react";
import { stats } from "@/data/site";
import { Counter, Reveal } from "@/components/site/motion-primitives";

const icons = {
  users: Users,
  star: Star,
  truck: Truck,
  check: BadgeCheck,
};

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, index) => {
          const Icon = icons[stat.icon];
          return (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="group flex flex-col items-center gap-3 text-center lg:border-r lg:border-border lg:last:border-none"
            >
              <Icon
                className="size-5 text-gold-deep transition-transform duration-500 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <p className="font-display text-4xl tracking-tight lg:text-5xl">
                <Counter to={stat.value} />
                <span className="text-gold-deep">{stat.suffix}</span>
              </p>
              <p className="eyebrow text-[0.6rem] text-muted-foreground">{stat.label}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
