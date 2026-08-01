import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { StoreProvider } from "@/components/site/store";
import { LoadingVeil, ScrollProgress, SmoothScroll } from "@/components/site/chrome";
import { Navbar } from "@/components/site/navbar";
import { CartDrawer } from "@/components/site/cart-drawer";
import { ExitIntentOffer, FloatingActions, SocialProofToasts } from "@/components/site/floating";
import { Hero } from "@/components/site/sections/hero";
import { TrustBar } from "@/components/site/sections/trust-bar";
import { Categories } from "@/components/site/sections/categories";
import { WhyEncapsulate } from "@/components/site/sections/why";
import { Compatibility } from "@/components/site/sections/compatibility";
import { FeaturedProducts } from "@/components/site/sections/products";
import { FlavourExperience } from "@/components/site/sections/flavours";
import { Subscription } from "@/components/site/sections/subscription";
import { Reviews } from "@/components/site/sections/reviews";
import { InstagramFeed } from "@/components/site/sections/instagram";
import { About } from "@/components/site/sections/about";
import { Delivery } from "@/components/site/sections/delivery";
import { Faq } from "@/components/site/sections/faq";
import { FinalCta } from "@/components/site/sections/final-cta";
import { Footer } from "@/components/site/sections/footer";
import { faqs } from "@/data/site";

const title = "Encapsulate | Premium Coffee & Tea Capsules in Dubai";
const description =
  "Luxury coffee and tea capsules compatible with Nespresso® and Dolce Gusto® machines. Small-batch roasts, same-day delivery across Dubai and the UAE.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Encapsulate Coffee & Tea Capsules",
          description,
          address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          areaServed: "United Arab Emirates",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "36" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <StoreProvider>
      <LoadingVeil />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <WhyEncapsulate />
        <Compatibility />
        <FeaturedProducts />
        <FlavourExperience />
        <Subscription />
        <Reviews />
        <InstagramFeed />
        <About />
        <Delivery />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingActions />
      <ExitIntentOffer />
      <SocialProofToasts />
      <Toaster position="bottom-left" />
    </StoreProvider>
  );
}
