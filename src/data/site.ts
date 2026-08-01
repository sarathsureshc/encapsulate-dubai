import catCoffee from "@/assets/cat-coffee.jpg";
import catTea from "@/assets/cat-tea.jpg";
import catMachines from "@/assets/cat-machines.jpg";
import catBundles from "@/assets/cat-bundles.jpg";
import catGift from "@/assets/cat-gift.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

/** Single source of truth for brand contact details — swap these for the live ones. */
export const brand = {
  name: "Encapsulate",
  legalName: "Encapsulate Coffee & Tea Capsules",
  city: "Dubai",
  country: "United Arab Emirates",
  phoneDisplay: "+971 50 123 4567",
  whatsapp: "971501234567",
  email: "hello@encapsulate.ae",
  instagram: "https://instagram.com/encapsulate.ae",
  instagramHandle: "@encapsulate.ae",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;

export const stats = [
  { value: 4500, suffix: "+", label: "Happy Customers", icon: "users" },
  { value: 36, suffix: "+", label: "Five Star Reviews", icon: "star" },
  { value: 24, suffix: "/7", label: "Delivery Across UAE", icon: "truck" },
  { value: 100, suffix: "%", label: "Machine Compatible", icon: "check" },
] as const;

export const categories = [
  {
    name: "Coffee Capsules",
    blurb: "Italian-roasted intensity, sealed at peak aroma.",
    count: "42 blends",
    image: catCoffee,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "Tea Capsules",
    blurb: "Whole-leaf infusions, from matcha to Earl Grey.",
    count: "18 infusions",
    image: catTea,
    span: "",
  },
  {
    name: "Coffee Machines",
    blurb: "Compact, quiet, beautifully engineered.",
    count: "9 machines",
    image: catMachines,
    span: "",
  },
  {
    name: "Bundles",
    blurb: "Curated boxes that cost less than the sum.",
    count: "12 bundles",
    image: catBundles,
    span: "",
  },
  {
    name: "Gift Boxes",
    blurb: "Ribbon-wrapped, corporate-ready, unforgettable.",
    count: "7 boxes",
    image: catGift,
    span: "",
  },
  {
    name: "Accessories",
    blurb: "Holders, cups and brass finishing touches.",
    count: "23 pieces",
    image: catAccessories,
    span: "lg:col-span-2",
  },
] as const;

export const pillars = [
  {
    title: "Premium Ingredients",
    copy: "Single-origin arabica sourced from award-winning estates and roasted in small batches.",
    icon: "sparkles",
  },
  {
    title: "Italian Inspired",
    copy: "Blends developed with Milanese roasters for a crema-rich, unmistakably Italian pull.",
    icon: "coffee",
  },
  {
    title: "Rich Aroma",
    copy: "Nitrogen-flushed aluminium capsules lock in aroma from the roastery to your cup.",
    icon: "wind",
  },
  {
    title: "Fast Delivery",
    copy: "Same-day across Dubai, next-day to every emirate. Free above AED 150.",
    icon: "truck",
  },
  {
    title: "Affordable Luxury",
    copy: "Café-grade coffee from AED 2.4 a cup — a fraction of the drive-through price.",
    icon: "gem",
  },
  {
    title: "Eco Friendly",
    copy: "Fully recyclable aluminium capsules with a free return-and-recycle pouch.",
    icon: "leaf",
  },
  {
    title: "Machine Compatible",
    copy: "Engineered to seal, pierce and extract perfectly in Nespresso® and Dolce Gusto® systems.",
    icon: "settings",
  },
] as const;

export type Product = {
  id: string;
  name: string;
  flavour: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stock: number;
  system: "Nespresso" | "Dolce Gusto";
};

export const products: Product[] = [
  {
    id: "gold-ristretto",
    name: "Gold Ristretto",
    flavour: "Dark chocolate · Toasted hazelnut",
    price: 39,
    compareAt: 49,
    rating: 4.9,
    reviews: 214,
    image: product1,
    badge: "Best Seller",
    stock: 6,
    system: "Nespresso",
  },
  {
    id: "midnight-espresso",
    name: "Midnight Espresso",
    flavour: "Cocoa nib · Black cardamom",
    price: 42,
    rating: 4.8,
    reviews: 168,
    image: product2,
    badge: "Trending",
    stock: 24,
    system: "Nespresso",
  },
  {
    id: "imperial-matcha",
    name: "Imperial Matcha",
    flavour: "Grassy sweetness · Cream finish",
    price: 45,
    rating: 4.7,
    reviews: 92,
    image: product3,
    badge: "New",
    stock: 11,
    system: "Dolce Gusto",
  },
  {
    id: "discovery-collection",
    name: "Discovery Collection",
    flavour: "12 blends · Tasting journal included",
    price: 129,
    compareAt: 165,
    rating: 5,
    reviews: 77,
    image: product4,
    badge: "Limited Edition",
    stock: 4,
    system: "Nespresso",
  },
];

export const flavours = [
  { name: "Chocolate", note: "Velvet cocoa, long finish", intensity: 8, roast: 7, sweetness: 6, body: 8, acidity: 3 },
  { name: "Caramel", note: "Burnt sugar, salted butter", intensity: 6, roast: 5, sweetness: 9, body: 6, acidity: 4 },
  { name: "Hazelnut", note: "Toasted praline, warm nut", intensity: 7, roast: 6, sweetness: 7, body: 7, acidity: 3 },
  { name: "Vanilla", note: "Madagascan pod, soft cream", intensity: 5, roast: 4, sweetness: 8, body: 5, acidity: 4 },
  { name: "Espresso", note: "Classic Italian crema", intensity: 10, roast: 9, sweetness: 3, body: 9, acidity: 5 },
  { name: "Arabic Coffee", note: "Cardamom, saffron, dates", intensity: 7, roast: 5, sweetness: 5, body: 6, acidity: 6 },
  { name: "Tea", note: "Bergamot, citrus peel", intensity: 3, roast: 2, sweetness: 4, body: 3, acidity: 6 },
  { name: "Matcha", note: "Umami green, silk texture", intensity: 4, roast: 2, sweetness: 5, body: 6, acidity: 3 },
  { name: "Lavender", note: "Floral honey, calm finish", intensity: 3, roast: 3, sweetness: 7, body: 4, acidity: 4 },
] as const;

export const reviews = [
  {
    name: "Layla A.",
    role: "Dubai Marina",
    initials: "LA",
    quote:
      "The Gold Ristretto genuinely tastes better than the boutique capsules I used to buy. My guests always ask where it's from.",
    rating: 5,
  },
  {
    name: "Omar K.",
    role: "Office Manager, DIFC",
    initials: "OK",
    quote:
      "We order 40 boxes a month for the office. Delivery has never once been late and the team handles everything on WhatsApp.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Jumeirah",
    initials: "SM",
    quote:
      "I switched our whole household onto the Coffee Club. Cheaper than my daily café run and the packaging feels like a gift.",
    rating: 5,
  },
  {
    name: "Rahul S.",
    role: "Business Bay",
    initials: "RS",
    quote:
      "Fits my Dolce Gusto perfectly, no leaks, proper crema. The Arabic Coffee capsule is a masterpiece.",
    rating: 5,
  },
  {
    name: "Noor H.",
    role: "Abu Dhabi",
    initials: "NH",
    quote:
      "Ordered a gift box for a client and got a thank-you call the same evening. That says everything.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "Will these capsules fit my machine?",
    a: "Our coffee and tea capsules are engineered for original-line Nespresso® machines and for Dolce Gusto® systems. Each product page states the system clearly, and our compatibility checker above confirms your exact model in one tap. Encapsulate is not affiliated with Nespresso® or Dolce Gusto®.",
  },
  {
    q: "How fast is delivery in the UAE?",
    a: "Orders placed before 4pm are delivered the same day across Dubai and Sharjah. Every other emirate receives next-day delivery. Free shipping applies to orders above AED 150, and pickup from our Al Quoz counter is available daily.",
  },
  {
    q: "Can I return capsules if I don't like the blend?",
    a: "Yes. Unopened sleeves can be returned within 14 days for a full refund or exchange. If a blend isn't right for you, message us on WhatsApp and we'll recommend an alternative and cover the swap.",
  },
  {
    q: "How does the Coffee Club subscription work?",
    a: "Choose your blends and a delivery rhythm — every 2, 4 or 8 weeks. You save 15% on every order, get priority dispatch and early access to limited releases. Pause, skip or cancel any time from your account or by WhatsApp.",
  },
  {
    q: "Are the capsules recyclable?",
    a: "Our aluminium capsules are 100% recyclable. Every order includes a return pouch — fill it, hand it back to any delivery driver, and we credit AED 10 to your next purchase.",
  },
  {
    q: "Do you supply offices and corporate gifting?",
    a: "We supply over 120 offices across the UAE with monthly capsule contracts, machines on loan and branded gift boxes. Message us on WhatsApp for a same-day corporate quote.",
  },
] as const;

export const deliveryOptions = [
  { title: "Same Day", detail: "Dubai & Sharjah · order before 4pm", eta: "3–5 hours" },
  { title: "Next Day", detail: "Abu Dhabi, Ajman, RAK, Fujairah, UAQ", eta: "24 hours" },
  { title: "Pickup", detail: "Al Quoz counter · daily 9am – 9pm", eta: "30 minutes" },
  { title: "Live Tracking", detail: "WhatsApp updates from dispatch to door", eta: "Real time" },
] as const;
