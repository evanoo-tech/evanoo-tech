import { Link } from "react-router-dom";
import {
  Server,
  Globe,
  Mail,
  Lock,
  HardDrive,
  Layers,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    Icon: Server,
    title: "Shared Hosting",
    desc: "Fast, secure shared hosting for blogs, portfolios, and small business sites.",
  },
  {
    Icon: HardDrive,
    title: "VPS Hosting",
    desc: "Dedicated resources, root access, and SSD storage for growing applications.",
  },
  {
    Icon: Layers,
    title: "Reseller Hosting",
    desc: "White-label hosting with WHM/cPanel — launch your own hosting brand.",
  },
  {
    Icon: Globe,
    title: "Domain Registration",
    desc: "Search and register .com, .in, .io, and 300+ TLDs at competitive prices.",
  },
  {
    Icon: Lock,
    title: "SSL Certificates",
    desc: "Free Let's Encrypt and premium SSL — secure every visitor with HTTPS.",
  },
  {
    Icon: Mail,
    title: "Business Email",
    desc: "Professional email @yourdomain.com with anti-spam, calendars, and webmail.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹99",
    period: "/mo",
    desc: "Perfect for a single website or landing page.",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL",
      "5 Email Accounts",
    ],
  },
  {
    name: "Business",
    price: "₹299",
    period: "/mo",
    desc: "Most popular for small business websites and stores.",
    features: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Free Domain (1 yr)",
      "Free SSL",
      "Unlimited Emails",
      "Daily Backups",
    ],
    popular: true,
  },
  {
    name: "Cloud VPS",
    price: "₹899",
    period: "/mo",
    desc: "Dedicated power for high-traffic sites and apps.",
    features: [
      "4 vCPU · 8 GB RAM",
      "120 GB NVMe",
      "Root Access",
      "Free Migration",
      "Priority Support 24/7",
    ],
  },
];

export default function Hosting() {
  return (
    <>
      {/* ---------- HERO : theme-adaptive hosting section ---------- */}
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
            $ evanoo --hosting
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Powerful hosting,{" "}
            <span className="block gradient-text">simple pricing</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-md"
            style={{
              color:
                "color-mix(in oklch, var(--ink-foreground) 60%, transparent)",
            }}
            data-aos="fade-up"
          >
            From your first domain to enterprise infrastructure — Evanoo keeps
            your sites fast, secure, and online.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--ink)]" />
      </section>

      {/* Content section */}
      <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:py-20 lg:pb-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-down">
          {offerings.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-10 sm:py-28 lg:pt-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Simple Pricing
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-5xl">
              Plans for every stage
            </h2>
            <p className="mt-4 text-md text-muted-foreground">
              Choose the perfect hosting plan for your needs. Upgrade or
              downgrade at any time.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3 lg:gap-6 items-center">
            {plans.map((p, i) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${
                  p.popular
                    ? "border-primary/50 shadow-xl ring-1 ring-primary/20 lg:scale-105 z-10 bg-gradient-to-b from-card to-primary/5 transition-all"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-sm">
                      ✨ Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
                    {p.desc}
                  </p>
                </div>

                <div className="mb-6 flex items-end gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground mb-1">
                    {p.period}
                  </span>
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`group w-full mb-8 rounded-lg font-semibold transition-all ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center"
                  >
                    Get started{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground mb-4">
                    What's included:
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                          <Check className="h-3 w-3 text-primary stroke-[3]" />
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
