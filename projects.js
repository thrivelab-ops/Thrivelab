/**
 * ThriveLab Studio Selected Work Configuration
 * 
 * 4 Primary Featured Homepage Projects + Full Studio Collection
 * Honest positioning: "Selected Work" / "Design & Build" by ThriveLab Studio.
 */

const THRIVELAB_FEATURED_PROJECTS = [
  {
    id: "salonz",
    number: "01",
    title: "SALONZ",
    subtitle: "Luxury Hair Studio & Beauty Lounge",
    tagline: "Quiet luxury, built for the modern salon.",
    category: "BEAUTY & HOSPITALITY",
    url: "https://salonz-mu.vercel.app/",
    services: "Brand Direction · UX · Web Design · Conversion",
    description: "An ultra-premium website experience for a high-end hair studio. Designed with architectural typography, serene imagery, and frictionless booking pathways.",
    accentColor: "#E2C499"
  },
  {
    id: "dnd",
    number: "02",
    title: "DND SALON",
    subtitle: "Atmospheric Wellness & Luxury Spa",
    tagline: "Atmospheric wellness & luxury hair studio.",
    category: "BEAUTY & WELLNESS",
    url: "https://dnd-dusky.vercel.app/",
    services: "Visual Identity · UI / UX · Spatial Aesthetics · Local SEO",
    description: "A dark-mode, sensory web presence for a premium wellness salon & spa. Engineered to communicate surgical cleanliness and high-touch care.",
    accentColor: "#D4AF37"
  },
  {
    id: "de-studio",
    number: "03",
    title: "DE STUDIO",
    subtitle: "Creative Beauty & Hair Artistry",
    tagline: "High-contrast editorial hair & beauty presentation.",
    category: "BEAUTY & ARTISTRY",
    url: "https://de-studio-pi.vercel.app/",
    services: "Creative Direction · Web Experience · Portfolio Grid",
    description: "A bold, gallery-first web presence showcasing transformational hair artistry. Built to attract discerning clients looking for elite styling.",
    accentColor: "#F3A5B1"
  },
  {
    id: "tbc-salon",
    number: "04",
    title: "THE BARBER CLUB (TBC)",
    subtitle: "Executive Grooming & Lifestyle Club",
    tagline: "Sharp, masculine, and sophisticated digital presence.",
    category: "GROOMING & LIFESTYLE",
    url: "https://tbc-salon-web.vercel.app/",
    services: "Brand Positioning · Mobile Design · Service Architecture",
    description: "Executive barbershop interface engineered for instant walk-in clarity, membership presentation, and effortless mobile booking.",
    accentColor: "#C59B27"
  },
  {
    id: "paakashala",
    number: "05",
    title: "PAAKASHALA",
    subtitle: "Artisanal Culinary & Event Catering",
    tagline: "Heritage flavors presented with modern hospitality poise.",
    category: "HOSPITALITY & DINING",
    url: "https://paakashala-three.vercel.app/",
    services: "Culinary Brand · Event Booking · Menu Architecture",
    description: "An elegant digital showcase for an artisanal catering and culinary experience studio. Engineered for high-conversion event inquiries.",
    accentColor: "#D48C46"
  }
];

const THRIVELAB_ALL_PROJECTS = [
  ...THRIVELAB_FEATURED_PROJECTS,
  {
    id: "veda-skin",
    number: "05",
    title: "VEDA SKIN",
    subtitle: "Aesthetic Clinic & Dermatological Care",
    tagline: "Pristine clinical credibility & consultation flow.",
    category: "HEALTH & CLINICAL",
    url: "https://veda-skin.vercel.app/",
    services: "Clinical Trust · UX Research · Consultation Flow",
    description: "A serene, reassuring website for an advanced dermatology clinic. Built around medical trust, treatment breakdown, and direct doctor consultations.",
    accentColor: "#7AA899"
  },
  {
    id: "sero",
    number: "06",
    title: "SERO ATELIER",
    subtitle: "Holistic Wellness & Skincare",
    tagline: "Minimalist skincare storytelling & product showcase.",
    category: "BEAUTY & WELLNESS",
    url: "https://sero-omega.vercel.app/",
    services: "Minimalist UX · E-Commerce Ready · Brand Design",
    description: "Serene, organic digital environment showcasing holistic skincare formulas with ingredient transparency and subtle micro-interactions.",
    accentColor: "#B5A48B"
  },
  {
    id: "ananya",
    number: "07",
    title: "ANANYA ATELIER",
    subtitle: "Bespoke Fashion & Custom Couture",
    tagline: "Tactile luxury translated into a digital lookbook.",
    category: "RETAIL & LIFESTYLE",
    url: "https://ananya-beige.vercel.app/",
    services: "Luxury Retail · Editorial Layout · Lookbook UI",
    description: "An elegant beige-and-charcoal lookbook web experience for a custom couture studio with private appointment scheduling.",
    accentColor: "#D6C7B2"
  },
  {
    id: "cp-sable",
    number: "08",
    title: "CP SABLE STUDIO",
    subtitle: "Architectural Interiors & Design",
    tagline: "Monochrome architectural portfolio for high-value contracts.",
    category: "PROFESSIONAL SERVICES",
    url: "https://cp-sable-nine.vercel.app/",
    services: "Architectural Portfolio · Full-Bleed Media · B2B Credibility",
    description: "Monochrome, high-impact portfolio site putting project photography front-and-center to win premium residential architecture commissions.",
    accentColor: "#8C8C94"
  },
  {
    id: "varun-perfume",
    number: "09",
    title: "VARUN PERFUMES",
    subtitle: "Artisanal Fragrance House",
    tagline: "Moody, tactile storytelling for bespoke fragrance creation.",
    category: "RETAIL & LIFESTYLE",
    url: "https://varun-perfume.vercel.app/",
    services: "Sensory Storytelling · Visual Craft · Brand Experience",
    description: "Dark, atmospheric website for a boutique fragrance creator, emphasizing scent notes, bottle craft, and artisanal heritage.",
    accentColor: "#A67C52"
  },
  {
    id: "nutree",
    number: "10",
    title: "NUTREE",
    subtitle: "Organic Nutrition & Healthy Cafe",
    tagline: "Vibrant nutrition menu & local delivery capture.",
    category: "HEALTH & CLINICAL",
    url: "https://nutree-mu.vercel.app/",
    services: "Fresh UI · Nutrition Menu · Local Delivery Pathways",
    description: "Fresh digital presence for an organic nutrition cafe, designed to capture health-conscious urban professionals.",
    accentColor: "#93C572"
  },
  {
    id: "bbc",
    number: "11",
    title: "BBC GROOMING",
    subtitle: "Classic Men's Barbershop",
    tagline: "Vintage-modern barbershop interface with instant call pathways.",
    category: "BEAUTY & WELLNESS",
    url: "https://bbc-fawn-zeta.vercel.app/",
    services: "Grooming Studio · Local Visibility · Booking UI",
    description: "Classic barbershop interface engineered for instant walk-in clarity, transparent pricing, and online reservations.",
    accentColor: "#D9A05B"
  },
  {
    id: "salon-sam",
    number: "12",
    title: "SAM SALON",
    subtitle: "Urban Hair Salon & Styling",
    tagline: "Fast-loading, stylish urban hair salon showcase.",
    category: "BEAUTY & WELLNESS",
    url: "https://salon-sam-x4pf.vercel.app/",
    services: "Urban Style · Quick Contact · Clean UI",
    description: "A stylish salon website optimized for young urban trendsetters looking for quick haircut bookings near them.",
    accentColor: "#E08DA7"
  },
  {
    id: "paakashala",
    number: "13",
    title: "PAAKASHALA",
    subtitle: "Artisanal Culinary & Event Catering",
    tagline: "Heritage flavors presented with modern hospitality poise.",
    category: "HOSPITALITY & DINING",
    url: "https://paakashala-three.vercel.app/",
    services: "Culinary Brand · Event Booking · Menu Architecture",
    description: "An elegant digital showcase for an artisanal catering and culinary experience studio. Engineered for high-conversion event inquiries.",
    accentColor: "#D48C46"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { THRIVELAB_FEATURED_PROJECTS, THRIVELAB_ALL_PROJECTS };
}
