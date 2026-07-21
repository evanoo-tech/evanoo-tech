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
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Finance
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Loans, cards & insurance{" "}
          <span className="gradient-text">made simple</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Compare offers from leading banks and NBFCs, apply online in minutes,
          and get approved fast.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ Icon, title, desc, points }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full">
                <Link to="/contact">
                  Apply now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-sm transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
