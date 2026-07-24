import { Link } from "react-router-dom";
import {
  ChefHat,
  Users,
  GraduationCap,
  Receipt,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    Icon: ChefHat,
    title: "Apna Rasoi",
    tag: "Restaurant & Cloud Kitchen",
    desc: "End-to-end management for restaurants and cloud kitchens — menus, orders, KOTs, delivery, and analytics in one app.",
    features: [
      "POS & KOT printing",
      "Menu & inventory",
      "Online orders & delivery",
      "Sales analytics",
    ],
  },
  {
    Icon: Users,
    title: "Evanoo CRM",
    tag: "Sales & Customer Success",
    desc: "A modern CRM that helps your team capture leads, nurture pipelines, and close more deals.",
    features: [
      "Lead & deal pipelines",
      "Email & WhatsApp",
      "Task automation",
      "Reports & forecasts",
    ],
  },
  {
    Icon: GraduationCap,
    title: "School Management",
    tag: "Education",
    desc: "Run your entire school online — admissions, attendance, timetables, fees, exams, and parent communication.",
    features: [
      "Admissions & fees",
      "Attendance & timetable",
      "Online exams",
      "Parent app",
    ],
  },
  {
    Icon: Receipt,
    title: "Billing & Inventory",
    tag: "Retail & Wholesale",
    desc: "GST-ready billing, inventory tracking, and multi-store management for shops and distributors.",
    features: [
      "GST invoicing",
      "Stock & barcodes",
      "Multi-store sync",
      "Profit reports",
    ],
  },
];

export default function Saas() {
  return (
    <>
      {/* ---------- HERO : theme-adaptive saas products section ---------- */}
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
            $ evanoo --saas --list
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Software that{" "}
            <span className="block gradient-text">
              runs your business
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
            A growing suite of cloud-based products built by Evanoo — designed
            for Indian businesses, ready for the world.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--ink)]" />
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-4" data-aos="fade-up">
          {products.map(({ Icon, title, tag, desc, features }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-primary">
                    {tag}
                  </div>
                  <h2 className="truncate text-xl font-bold">{title}</h2>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/contact">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
