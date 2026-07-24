import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Rocket,
  HeartHandshake,
  BriefcaseBusiness
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

/**
 * Same type system as Services.jsx / Portfolio.jsx — add once to index.html <head>:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 * <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
 */

const values = [
  {
    Icon: ShieldCheck,
    path: "values/quality.first",
    t: "Quality first",
    d: "Test-driven, code-reviewed, and production-hardened by default.",
  },
  {
    Icon: Rocket,
    t: "Speed to ship",
    path: "values/ship.fast",
    d: "We move fast without breaking things, with weekly demos and tight loops.",
  },
  {
    Icon: Users,
    path: "values/partnership.true",
    t: "True partnership",
    d: "We act as an extension of your team — transparent and accountable.",
  },
  {
    Icon: HeartHandshake,
    path: "values/focus.longterm",
    t: "Long-term focus",
    d: "We build systems your team can own and evolve for years to come.",
  },
];

const gridBg = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
};

export default function About() {
  return (
    <>
      <SEO
        title={"About — Evanoo"}
        description={
          "Learn about Evanoo — one platform bringing together hosting, digital services, SaaS products, and financial solutions for businesses."
        }
      />

      {/* ---------- HERO : theme-adaptive ink section ---------- */}
      <section
        className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--ink-foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-25">
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
            $ evanoo --about
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
          data-aos="fade-up">
            A small team with
            <span className="block gradient-text">
              big ambitions
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
            We partner with founders, product teams, and enterprises to design
            and build software that ships — and scales.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--ink)]" />
      </section>

      {/* ---------- STORY + MISSION/VISION : light paper section ---------- */}
      <section className="py-20 lg:py-25">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* story card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(11,18,32,0.04)]"
            data-aos="fade-up">
              <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#F5A623]/70" />
                  <span className="h-2 w-2 rounded-full bg-black/25 dark:bg-white/25" />
                  <span className="h-2 w-2 rounded-full bg-[#38BDF8]/70" />
                </div>
                <span className="font-mono text-[11px] text-card-foreground">
                  about/story.md
                </span>
              </div>
              <div className="flex-1 p-8" >
                <h2 className="font-[Space_Grotesk,sans-serif] text-2xl font-semibold text-black dark:text-white">
                  Our Story
                </h2>
                <p className="mt-4 text-black/70 dark:text-muted-foreground">
                  Evanoo started with a simple belief: businesses deserve one
                  trusted partner for everything digital. What began as a
                  handful of engineers helping local businesses go online has
                  grown into a platform spanning hosting, custom development,
                  SaaS products, and financial services.
                </p>
                <p className="mt-4 text-black/70 dark:text-muted-foreground">
                  Today we work with founders launching their first MVP and
                  enterprises modernizing legacy systems — bringing the same
                  rigor, taste, and ownership to every engagement.
                </p>
              </div>
            </div>

            {/* mission / vision */}
            <div className="grid gap-6">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)]" data-aos="flip-up">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg gradient-hero text-white">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#38BDF8]">
                    about/mission
                  </span>
                </div>
                <h2 className="mt-4 font-[Space_Grotesk,sans-serif] text-xl font-semibold text-black dark:text-white">
                  Mission
                </h2>
                <p className="mt-3 text-black/70 dark:text-muted-foreground">
                  To empower businesses with elegant, reliable digital products
                  that drive real outcomes — faster time-to-market, lower cost,
                  and delighted users.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)]" data-aos="flip-up">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg gradient-hero text-white">
                    <Eye className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-[#F5A623]">
                    about/vision
                  </span>
                </div>
                <h2 className="mt-4 font-[Space_Grotesk,sans-serif] text-xl font-semibold text-black dark:text-white">
                  Vision
                </h2>
                <p className="mt-3 text-black/70 dark:text-muted-foreground">
                  To be the trusted technology partner for ambitious
                  organizations worldwide — known for craft, integrity, and
                  measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US + CTA : theme-adaptive ink bookend ---------- */}
      <section
        className="relative overflow-hidden bg-[var(--ink)] text-[var(--ink-foreground)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--ink-foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--ink-foreground)_15%,transparent)] bg-[color-mix(in_oklch,var(--ink-foreground)_5%,transparent)] px-4 py-1.5 font-mono text-xs tracking-tight text-[var(--ink-accent)]" data-aos="fade-down">
              why-choose-us
            </div>
            <h2 className="mt-4 font-[Space_Grotesk,sans-serif] text-3xl font-semibold tracking-tight sm:text-4xl" data-aos="fade-up">
              Built on principles, proven on projects
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, path, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-[color-mix(in_oklch,var(--ink-foreground)_10%,transparent)] bg-[color-mix(in_oklch,var(--ink-foreground)_4%,transparent)] p-6 transition-colors duration-200 hover:border-[color-mix(in_oklch,var(--ink-accent)_40%,transparent)] hover:bg-[color-mix(in_oklch,var(--ink-foreground)_6%,transparent)]"
                data-aos="flip-down"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[color-mix(in_oklch,var(--ink-foreground)_10%,transparent)] text-[var(--ink-accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-mono text-[11px] text-[color-mix(in_oklch,var(--ink-foreground)_35%,transparent)]">
                  {path}
                </div>
                <h3 className="mt-1.5 font-[Space_Grotesk,sans-serif] font-semibold">
                  {t}
                </h3>
                <p className="mt-2 text-sm text-[color-mix(in_oklch,var(--ink-foreground)_55%,transparent)]">
                  {d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="gradient-hero"
            >
              <Link to="/contact" className="flex items-cenetr gap-2">
                <BriefcaseBusiness className="w-4 h-4"/>
                Work with us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}