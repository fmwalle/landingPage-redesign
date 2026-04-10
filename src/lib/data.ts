import { IconName } from "@/components/ui/III";

export const NAV_LINKS = ["Products", "Why Messer", "MyMFG", "Resources"];

export const STATS = [
  { value: "50+",    label: "Carrier Contracts" },
  { value: "5,000+", label: "Active Agents"     },
  { value: "$0",     label: "Fees to Join"      },
  { value: "24hr",   label: "Support Response"  },
];

export const CARRIERS = [
  "Aetna", "Cigna", "Humana", "BCBS", "Ambetter",
  "WellCare", "UnitedHealth", "Molina", "Centene", "Oscar", "Anthem", "CVS Health",
];

export const FEATURES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "zap",      title: "Quote & Enroll in Minutes",  desc: "MyMFG lets you compare plans across Medicare, ACA, and life products — then submit enrollments without switching tools." },
  { icon: "shield",   title: "Uncapped Commissions",        desc: "No caps, no tiers. The more you sell, the more you earn. Your success is fully yours to define." },
  { icon: "trending", title: "Lead Generation Programs",    desc: "Tap into proven lead programs designed to expand your reach and fill your pipeline with qualified prospects." },
  { icon: "users",    title: "Online Contracting (SureLC)", desc: "Get appointed with top carriers in days, not weeks — all from a single online portal." },
  { icon: "chart",    title: "Commission Tracking",         desc: "Real-time visibility into every commission across every carrier. No spreadsheets, no guesswork." },
  { icon: "globe",    title: "Training & Webinars",         desc: "Hours of free training, live webinars, and a dedicated support team that's always reachable." },
];

export const MYMFG_FEATURES = [
  "Quote & compare plans across all product lines",
  "Submit enrollments directly to carriers",
  "Track every commission in real time",
  "Access MyMFG+ for enhanced features",
  "Shop the MyMFG Marketplace",
];

export const MOCK_STATS = [
  { value: "$24,810", label: "YTD Commissions", delta: "↑12%"       },
  { value: "47",      label: "Enrollments",     delta: "This Month"  },
  { value: "12",      label: "Carriers",        delta: "Active"      },
];

export const MOCK_ENROLLMENTS = [
  { plan: "Medicare Advantage", carrier: "Humana",   amount: "$420/mo", status: "Submitted" },
  { plan: "ACA Silver",         carrier: "Ambetter", amount: "$310/mo", status: "Approved"  },
  { plan: "Dental + Vision",    carrier: "Cigna",    amount: "$52/mo",  status: "Active"    },
];

export const STEPS = [
  { n: "01", title: "Contract Online", desc: "Get appointed with top carriers in days via our SureLC online contracting portal — no paperwork, no delays." },
  { n: "02", title: "Quote & Enroll",  desc: "Use MyMFG to compare plans across Medicare, ACA, life, and ancillary lines. Submit enrollments in minutes." },
  { n: "03", title: "Grow & Earn",     desc: "Unlock lead programs, marketing support, live training, and uncapped commissions as your business scales." },
];

export const PRODUCTS = [
  { label: "Medicare Advantage",        accent: "#0ea5e9", desc: "Access to top Medicare Advantage plans from the nation's leading carriers." },
  { label: "Medicare Supplement",       accent: "#0284c7", desc: "Medigap plans from the best supplement providers in the country." },
  { label: "ACA / Under 65",            accent: "#38bdf8", desc: "The broadest ACA carrier access of any FMO — all 50 states." },
  { label: "Life & Annuities",          accent: "#06b6d4", desc: "Contract with 20+ life and annuity providers to protect clients' futures." },
  { label: "Ancillary (Dental/Vision)", accent: "#0891b2", desc: "Supplement coverage your clients need to fill the gaps." },
  { label: "Group Insurance",           accent: "#0369a1", desc: "Employer group health plans with ACA expertise built in." },
];

export const TESTIMONIALS = [
  { name: "Joe L.",    quote: "I've found Messer to be an organization that always plays fair with honor and integrity. When I need help, they always deliver." },
  { name: "Sherie S.", quote: "They offer benefits not available anywhere else. They track all my commissions efficiently and they're always there when I need help." },
  { name: "Brad A.",   quote: "They're the best FMO I've ever dealt with. They answer the phones. All my business goes through Messer — that says everything." },
  { name: "Mark S.",   quote: "MyMFG is how I submit all my business. My earnings have gone up since joining Messer. They're there when you need them." },
  { name: "Sonal P.",  quote: "I am so grateful I joined Messer. What I love most is that I get my answers, period. No runaround, no delays." },
];

export const FOOTER_COLS = [
  { title: "Products",  links: ["Medicare Advantage", "Medicare Supplement", "ACA / Under 65", "Life & Annuities", "Ancillary", "Group Insurance"] },
  { title: "Resources", links: ["Online Contracting", "MyMFG Suite", "Marketing Studio", "Webinars", "Events Calendar", "E&O Insurance"] },
  { title: "Company",   links: ["Who We Are", "Why Messer", "Testimonials", "FAQs", "Contact Us", "Agent Login"] },
];
export const COMPANY_STATS = [
  { value: "$2.4B",  label: "In Agent Commissions",  icon: "trending" },
  { value: "15+",    label: "Years in Business",      icon: "shield"   },
  { value: "50+",    label: "Carrier Contracts",      icon: "globe"    },
  { value: "4.9★",   label: "Agent Rating",           icon: "star"     },
  { value: "98%",    label: "Agent Retention Rate",   icon: "users"    },
  { value: "24hr",   label: "Support Response Time",  icon: "zap"      },
];