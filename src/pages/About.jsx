import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title={"About — Evanoo"}
        description={
          "Learn about Evanoo — one platform bringing together hosting, digital services, SaaS products, and financial solutions for businesses."
        }
      />
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          About Us
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          A small team with <span className="gradient-text">big ambitions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We partner with founders, product teams, and enterprises to design and
          build software that ships — and scales.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Evanoo started with a simple belief: businesses deserve one
              trusted partner for everything digital. What began as a handful of
              engineers helping local businesses go online has grown into a
              platform spanning hosting, custom development, SaaS products, and
              financial services.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we work with founders launching their first MVP and
              enterprises modernizing legacy systems — bringing the same rigor,
              taste, and ownership to every engagement.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Target className="h-7 w-7 text-primary" />
              <h2 className="mt-4 text-xl font-bold">Mission</h2>
              <p className="mt-3 text-muted-foreground">
                To empower businesses with elegant, reliable digital products
                that drive real outcomes — faster time-to-market, lower cost,
                and delighted users.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <Eye className="h-7 w-7 text-accent" />
              <h2 className="mt-4 text-xl font-bold">Vision</h2>
              <p className="mt-3 text-muted-foreground">
                To be the trusted technology partner for ambitious organizations
                worldwide — known for craft, integrity, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built on principles, proven on projects
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: ShieldCheck,
                t: "Quality first",
                d: "Test-driven, code-reviewed, and production-hardened by default.",
              },
              {
                Icon: Rocket,
                t: "Speed to ship",
                d: "We move fast without breaking things, with weekly demos and tight loops.",
              },
              {
                Icon: Users,
                t: "True partnership",
                d: "We act as an extension of your team — transparent and accountable.",
              },
              {
                Icon: HeartHandshake,
                t: "Long-term focus",
                d: "We build systems your team can own and evolve for years to come.",
              },
            ].map(({ Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90"
            >
              <Link to="/contact">Work with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
