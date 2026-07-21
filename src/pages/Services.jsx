import { Link } from "react-router-dom";
import {
  Code2,
  Cloud,
  Layers,
  Plug,
  Boxes,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const services = [
  {
    Icon: Code2,
    title: "Website Development",
    desc: "Marketing sites, portals, and full-stack web apps engineered for performance, accessibility, and SEO.",
    points: [
      "SSR & static generation",
      "Core Web Vitals tuning",
      "CMS integrations",
    ],
  },
  {
    Icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps with native performance and beautiful UX.",
    points: [
      "React Native & Flutter",
      "Push notifications",
      "App Store & Play launch",
    ],
  },
  {
    Icon: Boxes,
    title: "Java Spring Boot",
    desc: "Robust backends, microservices, and enterprise APIs powered by the Spring ecosystem.",
    points: ["Microservices & REST", "JPA / Hibernate", "Security & auth"],
  },
  {
    Icon: Layers,
    title: "React Development",
    desc: "Scalable React applications with clean architecture, type-safe code, and reusable design systems.",
    points: [
      "React 19 / TanStack",
      "Design system & components",
      "State & data layer",
    ],
  },
  {
    Icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud-native architectures on AWS, GCP, and Azure — designed to scale and optimized for cost.",
    points: ["IaC with Terraform", "CI/CD pipelines", "Observability"],
  },
  {
    Icon: Plug,
    title: "API Integration",
    desc: "Connect your systems with payments, messaging, CRMs, and third-party APIs — built to scale.",
    points: ["Payments & messaging", "Webhooks & queues", "Auth & rate limits"],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title={"Services — Evanoo"}
        description={
          "Website development, mobile apps, Java Spring Boot, React, cloud solutions, and API integration services by Evanoo."
        }
      />
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Services
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Everything you need to{" "}
          <span className="gradient-text">build & grow</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          From a single landing page to a multi-region platform, we cover the
          full product lifecycle.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc, points }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border gradient-hero p-10 text-center text-primary-foreground sm:p-14 shadow-elegant">
          <h2 className="text-3xl font-bold">Need something custom?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Tell us about your idea and we'll put together a scope, timeline,
            and quote within 24 hours.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Request a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
