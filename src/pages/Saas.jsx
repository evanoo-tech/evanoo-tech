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
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          SaaS Products
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Software that{" "}
          <span className="gradient-text">runs your business</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A growing suite of cloud-based products built by Evanoo — designed for
          Indian businesses, ready for the world.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
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
              <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-5 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/contact">
                  Request a demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
