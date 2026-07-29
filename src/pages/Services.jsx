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
    path: "services/web.build",
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
    path: "services/mobile.native",
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
    path: "services/backend.springboot",
    title: "Java Spring Boot",
    desc: "Robust backends, microservices, and enterprise APIs powered by the Spring ecosystem.",
    points: ["Microservices & REST", "JPA / Hibernate", "Security & auth"],
  },
  {
    Icon: Layers,
    path: "services/frontend.react",
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
    path: "services/cloud.infra",
    title: "Cloud Solutions",
    desc: "Cloud-native architectures on AWS, GCP, and Azure — designed to scale and optimized for cost.",
    points: ["IaC with Terraform", "CI/CD pipelines", "Observability"],
  },
  {
    Icon: Plug,
    path: "services/integrations.api",
    title: "API Integration",
    desc: "Connect your systems with payments, messaging, CRMs, and third-party APIs — built to scale.",
    points: ["Payments & messaging", "Webhooks & queues", "Auth & rate limits"],
  },
];

// Reusable blueprint dot-grid background
const gridBg = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

export default function Services() {
  return (
    <>
      <SEO
        title={"Services — Evanoo"}
        description={
          "Website development, mobile apps, Java Spring Boot, React, cloud solutions, and API integration services by Evanoo."
        }
      />

      {/* ---------- HERO : theme-adaptive services section ---------- */}
      <section
        className="relative overflow-hidden bg-background text-foreground"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-25">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-xs tracking-tight text-primary"
            data-aos="fade-down"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            $ evanoo --services --list
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Everything you need to
            <span className="block gradient-text">build &amp; grow</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-md text-muted-foreground"
            data-aos="fade-up"
          >
            From a single landing page to a multi-region platform, we cover the
            full product lifecycle — planned, shipped, and maintained.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* ---------- SERVICES : light paper section ---------- */}
      <section className="py-20 lg:py-20">
        {" "}
        {/* bg-[#F7F7F5] */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-down"
          >
            {services.map(({ Icon, path, title, desc, points }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card/95 shadow-[0_1px_2px_color-mix(in_oklch,var(--foreground)_8%,transparent)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--primary)_40%,transparent)] hover:shadow-[0_18px_40px_-18px_color-mix(in_oklch,var(--foreground)_18%,transparent)]"
              >
                {/* terminal-window chrome */}
                <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#F5A623]/70" />
                    <span className="h-2 w-2 rounded-full bg-black/25 dark:bg-white/25" />
                    <span className="h-2 w-2 rounded-full bg-[#38BDF8]/70" />
                  </div>
                  <span className="font-mono text-[11px] text-card-foreground">
                    {path}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-lg gradient-hero text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-[Space_Grotesk,sans-serif] text-lg font-semibold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA : theme-adaptive bookend ---------- */}
      <section
        className="relative overflow-hidden bg-background text-foreground"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
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
            services/custom.scope
          </div>

          <h2
            className="mt-5 font-[Space_Grotesk,sans-serif] text-3xl font-semibold tracking-tight sm:text-4xl"
            data-aos="fade-up"
          >
            Need something custom?
          </h2>

          <p
            className="mx-auto mt-3 max-w-xl text-md text-muted-foreground"
            data-aos="fade-up"
          >
            Tell us about your idea and we'll put together a scope, timeline,
            and quote within 24 hours.
          </p>

          <div className="mt-8" data-aos="fade-up">
            <Button asChild size="lg" className="gradient-hero">
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
