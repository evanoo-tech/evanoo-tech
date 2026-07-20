import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import apnaRasoi from "@/assets/apna-rasoi.png";
import saadDashboard from "@/assets/saas-dashboard.png";
import ecommerce from "@/assets/e-commerce.png";
import { Button } from "@/components/ui/button";
// import { useMeta } from "../hooks/useMeta";
import SEO from "@/components/SEO";

const projects = [
  {
    img: apnaRasoi,
    title: "Apna Rasoi",
    tag: "Mobile App · Food Tech",
    desc: "A home-cooked meals marketplace connecting local home chefs with customers seeking authentic, fresh food. We designed and built the consumer mobile app, chef dashboard, and ordering backend.",
    stack: ["React Native", "Spring Boot", "PostgreSQL", "AWS"],
    featured: true,
    link: "https://apna-rasoi.evanoo.in",
  },
  {
    img: saadDashboard,
    title: "Evanoo Hosting Platform",
    tag: "CLOUD HOSTING",
    desc: "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    stack: ["React", "TypeScript", "Node.js", "ClickHouse"],
    link: "https://hosting.evanoo.in/",
  },
  // {
  //   img: saadDashboard,
  //   title: "InsightHub Analytics",
  //   tag: "SaaS · Data Platform",
  //   desc: "A realtime analytics dashboard with custom charting, anomaly detection, and team workspaces. Migrated from a legacy stack with zero downtime.",
  //   stack: ["React", "TypeScript", "Node.js", "ClickHouse"],
  // },
  {
    img: ecommerce,
    title: "Northwind Store",
    tag: "E-commerce · Headless",
    desc: "A high-converting storefront with Stripe checkout, headless CMS, and a custom catalog. Achieved 98+ Lighthouse scores on every page.",
    stack: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
    link: "",
  },
];

export default function Portfolio() {
  // useMeta({
  //   title: "Portfolio — Evanoo",
  //   description:
  //     "Selected projects by Evanoo including Apna Rasoi — a restaurant & cloud kitchen platform, SaaS dashboards, and e-commerce builds.",
  // });

  return (
    <>
      <SEO
        title={"Portfolio — Evanoo"}
        description={
          "Selected projects by Evanoo including Apna Rasoi — a restaurant & cloud kitchen platform, SaaS dashboards, and e-commerce builds."
        }
      />
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Portfolio
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Work we're <span className="gradient-text">proud of</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A peek at recent projects across food tech, SaaS, and e-commerce.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-primary">
                  {p.tag}
                </div>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {p.title}
                  {p.featured && (
                    <span className="ml-3 align-middle rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                </h2>
                <p className="mt-4 text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      Explore Project <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <>
                      Case study coming soon{" "}
                      <ExternalLink className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold">Your project could be next.</h2>
          <p className="mt-2 text-muted-foreground">
            Let's build something memorable together.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90"
          >
            <Link to="/contact">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
