import { Link } from "react-router-dom";
import {
  Wallet,
  Briefcase,
  Home,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const products = [
  {
    Icon: Wallet,
    title: "Personal Loans",
    desc: "Up to ₹40 Lakh for weddings, travel, medical, or any personal need.",
    points: [
      "Rates from 10.5% p.a.",
      "Tenure up to 60 months",
      "Disbursal in 24 hours",
    ],
  },
  {
    Icon: Briefcase,
    title: "Business Loans",
    desc: "Working capital and growth loans for SMEs, startups, and shopkeepers.",
    points: [
      "Up to ₹2 Crore",
      "Minimal documentation",
      "Collateral-free options",
    ],
  },
  {
    Icon: Home,
    title: "Home Loans",
    desc: "Buy, build, or renovate your dream home with attractive interest rates.",
    points: [
      "Rates from 8.4% p.a.",
      "Tenure up to 30 years",
      "Balance transfer available",
    ],
  },
  {
    Icon: CreditCard,
    title: "Credit Cards",
    desc: "Lifetime-free and rewards cards from leading banks, matched to your profile.",
    points: [
      "Cashback & travel rewards",
      "Lifetime-free options",
      "Instant approval",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Insurance",
    desc: "Health, term life, motor, and travel insurance from trusted insurers.",
    points: [
      "Compare top plans",
      "Tax savings under 80C/80D",
      "Cashless claims",
    ],
  },
];

const faqs = [
  {
    q: "Does Evanoo charge for loan applications?",
    a: "No. Our comparison and application service is completely free for customers — we earn from our banking partners.",
  },
  {
    q: "How fast can a loan be approved?",
    a: "Personal loans can be disbursed in as little as 24 hours, subject to verification and bank policy.",
  },
  {
    q: "What documents do I need?",
    a: "PAN, Aadhaar, recent payslips or bank statements, and address proof. Business loans may require GST and ITR.",
  },
];

export default function Finance() {
  return (
    <>
      <SEO
        title={"Loans, Credit Cards & Insurance — Evanoo"}
        description={
          "Compare and apply for personal, business, and home loans, credit cards, and insurance through Evanoo's financial partners — quick approval and competitive rates."
        }
      />
      {/* ---------- HERO : theme-adaptive finance section ---------- */}
      <section
        className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--ink-foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs tracking-tight text-[var(--ink-accent)]"
            style={{
              borderColor:
                "color-mix(in oklch, var(--ink-foreground) 15%, transparent)",
              backgroundColor:
                "color-mix(in oklch, var(--ink-foreground) 5%, transparent)",
            }}
            data-aos="fade-down"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink-accent)] animate-pulse" />
            $ evanoo --finance
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Loans, cards &amp; insurance{" "}
            <span className="block gradient-text">
              made simple
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-md"
            style={{
              color:
                "color-mix(in oklch, var(--ink-foreground) 60%, transparent)",
            }}
            data-aos="fade-up"
          >
            Compare offers from leading banks and NBFCs, apply online in
            minutes, and get approved fast.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--ink)]" />
      </section>
      {/* Content Area */}
      <section className="container mx-auto px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Financial solutions for every need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the right financial products tailored to your goals. Compare, choose, and apply seamlessly.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {products.map(({ Icon, title, desc, points }, i) => (
            <article
              key={title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              
              <h2 className="relative z-10 mt-6 text-xl font-bold transition-colors group-hover:text-primary">{title}</h2>
              <p className="relative z-10 mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              
              <ul className="relative z-10 mt-6 space-y-3 border-t border-border/50 pt-6 text-sm text-muted-foreground">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Check className="h-3 w-3 text-primary stroke-[3]" />
                    </div>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-8 max-w-[130px]">
                <Link to="/contact" className="flex items-center justify-center">
                  Apply now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative overflow-hidden border-t border-border/40 bg-card/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-3">
              FAQ
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about our financial products and services.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-card hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold transition-colors group-hover:text-primary">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
                    <span className="text-xl leading-none -mt-0.5">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed pr-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
