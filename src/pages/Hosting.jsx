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
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Hosting
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Powerful hosting,{" "}
          <span className="gradient-text">simple pricing</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          From your first domain to enterprise infrastructure — Evanoo keeps
          your sites fast, secure, and online.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Plans for every stage
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border bg-card p-8 transition-all ${
                  p.popular
                    ? "border-primary shadow-elegant"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-hero px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold gradient-text">
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-7 w-full ${p.popular ? "gradient-hero text-primary-foreground border-0 hover:opacity-90" : ""}`}
                  variant={p.popular ? "default" : "outline"}
                >
                  <Link to="/contact">
                    Get started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
