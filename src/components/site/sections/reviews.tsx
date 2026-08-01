import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star, BadgeCheck } from "lucide-react";
import { reviews } from "@/data/site";
import { Reveal } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section id="reviews" className="bg-card py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <Reveal>
            <p className="eyebrow text-gold-deep">Loved across the UAE</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] tracking-tight">
              4,500 households. One shared verdict.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous review"
              className="min-h-11 min-w-11 rounded-full"
              onClick={() => embla?.scrollPrev()}
            >
              ‹
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next review"
              className="min-h-11 min-w-11 rounded-full"
              onClick={() => embla?.scrollNext()}
            >
              ›
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <ul className="flex gap-6">
            {reviews.map((review) => (
              <li
                key={review.name}
                className="luxe-card w-[85%] shrink-0 rounded-sm p-8 sm:w-[46%] lg:w-[31%]"
              >
                <Quote className="size-6 text-gold-deep" aria-hidden="true" />
                <div className="mt-5 flex gap-1 text-gold-deep" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed">{review.quote}</p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-espresso font-display text-sm text-gold">
                    {review.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 text-sm font-medium">
                      {review.name}
                      <BadgeCheck className="size-3.5 text-gold-deep" aria-hidden="true" />
                    </span>
                    <span className="block text-xs text-muted-foreground">{review.role}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
