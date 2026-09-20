import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Cloud,
  Layers,
  Palette,
  Plug,
  Boxes,
  FolderKanban,
  Headset,
  ShieldCheck,
  Zap,
  Lock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Portfolio from "@/components/Portfolio";
import Cta from "@/components/Cta";
import HeroBackground from "@/components/HeroBackground";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/schemas";

const services = [
  {
    Icon: Code2,
    title: "Website Development",
    desc: "Professional business websites, landing pages, e-commerce stores, and custom web applications.",
    link: "/services/website-development",
  },
  {
    Icon: Cloud,
    title: "Cloud Hosting",
    desc: "Reliable shared hosting, VPS, dedicated servers, SSL certificates, domains, and business email.",
    link: "#",
    // link: "https://hosting.evanoo.in",
    external: true,
  },
  {
    Icon: Palette,
    title: "Mobile App Development",
    desc: "Native and cross-platform Android & iOS applications built for performance and scalability.",
  },
  {
    Icon: Layers,
    title: "Custom Software & SaaS",
    desc: "Business software, CRM, ERP, dashboards, booking systems, and scalable SaaS platforms.",
  },
  {
    Icon: Plug,
    title: "API Integration",
    desc: "Payment gateways, WhatsApp, travel, insurance, SMS, email, and third-party API integrations.",
  },
  {
    Icon: Boxes,
    title: "AI Solutions & Automation",
    desc: "AI chatbots, workflow automation, virtual assistants, and intelligent business solutions.",
  },
];
export default function Home() {
  return (
    <>
      <SEO
        title={"Kolkata’s #1 IT & Software Services offered by Evanoo India"}
        description={
          "Evanoo Offers Web Development, Mobile App Development, Cloud Hosting, SaaS Solutions, API Integration, AI Solutions in Kolkata, WB.Get a free consultation today."
        }
        schema={[organizationSchema, professionalServiceSchema, websiteSchema]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* <div
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-70"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        /> */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" /> */}
        <HeroBackground />

        <div className="container max-w-full relative z-10 mx-auto px-4 py-24 sm:px-20 lg:py-26">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
              data-aos="fade-down"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now taking new projects for 2026
            </span>
            <h1
              className="mt-6 font-display text-4xl font-bold tracking-tight lg:leading-19 sm:text-6xl lg:text-7xl"
              data-aos="fade-up"
            >
              Building <span className="gradient-text">Digital Products</span>{" "}
              That Power Modern Businesses
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-md text-muted-foreground"
              data-aos="fade-up"
            >
              From websites and mobile apps to SaaS platforms, cloud hosting,
              and AI-powered solutions—Evanoo helps businesses launch, scale,
              and grow.
            </p>
            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
              data-aos="fade-up"
            >
              <Button
                asChild
                size="lg"
                className="gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90"
              >
                <Link to="/contact">
                  Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">
                  <FolderKanban className="ml-2 h-4 w-4" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container max-w-full mx-auto px-4 py-20 sm:px-20"
        data-aos="fade-up"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <TrendingUp className="h-4 w-4" />
              Why Evanoo
            </div>
            <div className="mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
              Building Technology That Helps
              <br />
              <span className="gradient-text">Businesses Grow</span>
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              Evanoo helps startups, entrepreneurs, and growing businesses build
              modern digital solutions. From websites and mobile apps to cloud
              hosting, SaaS platforms, AI automation, and custom software—we
              provide everything needed to launch, scale, and succeed.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { n: "10+", l: "Projects shipped" },
                { n: "100%", l: "Client-focused" },
                { n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold gradient-text">{s.n}</div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="absolute max-md:-inset-y-6 max-md:-inset-x-1 -inset-6 -z-10 rounded-3xl gradient-hero opacity-20 blur-3xl" />
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Headset,
                    title: "24/7 Support",
                    desc: "Always here to help",
                  },
                  {
                    icon: ShieldCheck,
                    title: "99.9% Uptime",
                    desc: "Reliable infrastructure",
                  },
                  {
                    icon: Zap,
                    title: "Fast Delivery",
                    desc: "On-time, every time",
                  },
                  {
                    icon: Lock,
                    title: "Secure Solutions",
                    desc: "Built with security first",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    data-aos="flip-left"
                    key={title}
                    className="group rounded-2xl border border-border bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/10 to-orange-400/10 text-primary transition-colors group-hover:from-cyan-500/20 group-hover:to-orange-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-semibold">{title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="relative overflow-hidden border-y border-border/40 bg-card/10"
        data-aos="fade-up"
      >
        <div className="pointer-events-none absolute right-0 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-orange-400 opacity-15 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 -z-10 h-[350px] w-[350px] rounded-full bg-sky-400 opacity-15 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container  max-w-full relative mx-auto px-4 py-20 sm:px-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              What we do
            </p>
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technology Solutions for Every Stage of Your Business
            </h2>
          </div>

          <div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            {services.map(({ Icon, title, desc, link, external }) => {
              const CardInner = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </>
              );

              const cardClass =
                "group relative block h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

              return external ? (
                <a key={title} href={link} className={cardClass}>
                  {CardInner}
                </a>
              ) : (
                <Link key={title} to={link || "#"} className={cardClass}>
                  {CardInner}
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/services">
                All services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <div data-aos="fade-up">
        <Portfolio />
      </div>

      {/* Contact CTA */}
      <div data-aos="fade-up">
        <Cta />
      </div>
    </>
  );
}
