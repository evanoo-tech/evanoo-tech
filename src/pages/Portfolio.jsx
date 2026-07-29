import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import apnaRasoi from "@/assets/apna-rasoi.png";
import saadDashboard from "@/assets/saas-dashboard.png";
import ecommerce from "@/assets/e-commerce.png";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const projects = [
  {
    img: apnaRasoi,
    path: "projects/apna-rasoi",
    title: "Apna Rasoi",
    tag: "Mobile App · Food Tech",
    desc: "A home-cooked meals marketplace connecting local home chefs with customers seeking authentic, fresh food. We designed and built the consumer mobile app, chef dashboard, and ordering backend.",
    stack: ["React Native", "Spring Boot", "PostgreSQL", "AWS"],
    featured: true,
    link: "https://apna-rasoi.evanoo.in",
  },
  {
    img: saadDashboard,
    path: "projects/evanoo-hosting",
    title: "Evanoo Hosting Platform",
    tag: "Cloud Hosting",
    desc: "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    stack: ["React", "TypeScript", "Node.js", "ClickHouse"],
    link: "https://hosting.evanoo.in/",
  },
  {
    img: ecommerce,
    path: "projects/northwind-store",
    title: "Northwind Store",
    tag: "E-commerce · Headless",
    desc: "A high-converting storefront with Stripe checkout, headless CMS, and a custom catalog. Achieved 98+ Lighthouse scores on every page.",
    stack: ["Next.js", "Stripe", "Sanity CMS", "Vercel"],
    link: "",
  },
];

const gridBg = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

function hostnameOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

export default function Portfolio() {
  return (
    <>
      <SEO
        title={"Portfolio — Evanoo"}
        description={
          "Selected projects by Evanoo including Apna Rasoi — a restaurant & cloud kitchen platform, SaaS dashboards, and e-commerce builds."
        }
      />

      {/* ---------- HERO : theme-adaptive portfolio section ---------- */}
      <section
        className="relative overflow-hidden bg-background text-foreground"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-28">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-xs tracking-tight text-primary"
            data-aos="fade-down"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            $ evanoo --portfolio --list
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Work we're <span className="gradient-text">proud of</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-md text-muted-foreground"
            data-aos="fade-down"
          >
            A peek at recent builds across food tech, cloud infrastructure, and
            e-commerce.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* ---------- PROJECTS : ambient light section ---------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* ambient gradient blobs for depth */}
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-accent/15 blur-[110px]" />

        <div
          className="relative container mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-down"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const host = hostnameOf(p.link);
              return (
                <article key={p.title} className="group relative">
                  {/* gradient glow ring, revealed on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-[calc(1.5rem+1px)] bg-gradient-to-br from-[#38BDF8]/60 via-transparent to-[#F5A623]/60 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/95 text-card-foreground shadow-[0_1px_2px_color-mix(in_oklch,var(--foreground)_8%,transparent)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_-15px_color-mix(in_oklch,var(--foreground)_18%,transparent)]">
                    {/* oversized ghost index number */}
                    <span className="pointer-events-none absolute -right-2 -top-4 select-none font-[Space_Grotesk,sans-serif] text-7xl font-bold leading-none text-[color-mix(in_oklch,var(--foreground)_6%,transparent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* project shown inside a browser-window frame */}
                    <div className="relative overflow-hidden border-b border-border">
                      <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#F5A623]/70" />
                          <span className="h-2 w-2 rounded-full bg-black/25 dark:bg-white/25" />
                          <span className="h-2 w-2 rounded-full bg-[#38BDF8]/70" />
                        </div>
                        <div className="flex-1 truncate rounded-full bg-primary/10 px-3 py-1 text-center font-mono text-[11px] text-card-foreground">
                          {host ?? "case-study — coming soon"}
                        </div>
                      </div>
                      <div className="overflow-hidden bg-muted">
                        <img
                          src={p.img}
                          alt={p.title}
                          width={1280}
                          height={960}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        />
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs text-[#38BDF8]">
                          {p.path}
                        </span>
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          {p.tag}
                        </span>
                      </div>

                      <h2 className="mt-3 flex flex-wrap items-center gap-2 font-[Space_Grotesk,sans-serif] text-xl font-semibold text-foreground">
                        {p.title}
                        {p.featured && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623]/15 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[#B9740A]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
                            Featured
                          </span>
                        )}
                      </h2>

                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-border/70 bg-background/70 px-2 py-1 font-mono text-[11px] text-foreground/70 transition-colors duration-200 group-hover:border-primary/40 group-hover:text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 border-t border-black/[0.06] pt-4">
                        {p.link ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            Explore project
                            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                            Case study coming soon{" "}
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
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
            projects/your-project.next
          </div>

          <h2
            className="mt-5 font-[Space_Grotesk,sans-serif] text-3xl font-semibold tracking-tight sm:text-4xl"
            data-aos="fade-up"
          >
            Your project could be next.
          </h2>

          <p
            className="mx-auto mt-3 max-w-xl text-muted-foreground"
            data-aos="fade-up"
          >
            Let's build something memorable together.
          </p>

          <Button asChild size="lg" className="mt-8 gradient-hero">
            <Link to="/contact">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
