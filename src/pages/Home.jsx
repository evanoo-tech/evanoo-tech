import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Cloud,
  Layers,
  Palette,
  Wrench,
  Plug,
  Boxes,
  Quote,
  Star,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
// import apnaRasoiImg from "@/assets/apnaRasoiImg.png";
// import dashboard from "@/assets/portfolio-dashboard.jpg";
import ecommerce from "@/assets/portfolio-ecommerce.jpg";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import apnaRasoi from "@/assets/apna-rasoi.png";
import eCommerce from "@/assets/e-commerce.png";
import saadDashboard from "@/assets/saas-dashboard.png";

const services = [
  {
    Icon: Code2,
    title: "Website Development",
    desc: "Professional business websites, landing pages, e-commerce stores, and custom web applications.",
  },
  {
    Icon: Cloud,
    title: "Cloud Hosting",
    desc: "Reliable shared hosting, VPS, dedicated servers, SSL certificates, domains, and business email.",
    link: "https://hosting.evanoo.in",
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

const projects = [
  {
    title: "Apna Rasoi",
    tag: "FOOD DELIVERY",
    desc: "Cloud kitchen platform with online ordering, menu management, WhatsApp ordering, and responsive design.",
    img: apnaRasoi,
    tech: ["React", "Spring Boot", "PostgreSQL"],
    link: "https://apna-rasoi.evanoo.in",
  },
  {
    title: "Insurance Management Platform",
    tag: "ENTERPRISE SOFTWARE",
    desc: "Insurance platform with quotation, policy management, API integration, and claims workflow.",
    img: eCommerce,
    tech: ["Java", "Spring Boot", "REST API"],
    link: "",
  },
  {
    title: "Evanoo Hosting Platform",
    tag: "CLOUD HOSTING",
    desc: "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    img: saadDashboard,
    tech: ["React", "Node.js", "Linux"],
    link: "https://hosting.evanoo.in/",
  },
];

const testimonials = [
  {
    quote:
      "Evanoo turned our idea into a polished product in weeks. Outstanding craft and communication.",
    name: "Priya Sharma",
    role: "Founder, NestCart",
  },
  {
    quote:
      "Their Spring Boot team rebuilt our API and cut response times by 60%. Highly recommended.",
    name: "Daniel Okafor",
    role: "CTO, LedgerOne",
  },
  {
    quote:
      "The UI/UX work elevated our brand. Conversion is up across the board.",
    name: "Meera Iyer",
    role: "Head of Product, BrightFin",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title={"Evanoo — Hosting, Digital Services, SaaS & Finance"}
        description={
          "Evanoo is one platform for hosting, digital services, SaaS products, and financial solutions — web & mobile development, cloud, CRM, loans, and credit cards."
        }
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50 dark:opacity-70"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now taking new projects for 2026
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building <span className="gradient-text">Digital Products</span>{" "}
              That Power Modern Businesses
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From websites and mobile apps to SaaS platforms, cloud hosting,
              and AI-powered solutions—Evanoo helps businesses launch, scale,
              and grow.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              WHY EVANOO
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Building Technology That Helps Businesses Grow.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Evanoo helps startups, entrepreneurs, and growing businesses build
              modern digital solutions. From websites and mobile apps to cloud
              hosting, SaaS platforms, AI automation, and custom software—we
              provide everything needed to launch, scale, and succeed.{" "}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "10+", l: "Projects shipped" },
                { n: "100%", l: "Client-Focused" },
                { n: "24/7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold gradient-text">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl gradient-hero opacity-20 blur-3xl" />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "24/7 Support",
                  "99.9% Uptime",
                  "Fast Delivery",
                  "Secure Solutions",
                ].map((p, i) => (
                  <div
                    key={p}
                    className="rounded-2xl border border-border bg-background p-5"
                  >
                    <div className="text-xs text-muted-foreground">
                      0{i + 1}
                    </div>
                    <div className="mt-1 font-semibold">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technology Solutions for Every Stage of Your Business
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, desc, link, external }) => (
              <div
                key={title}
                onClick={() => {
                  if (!link) return;

                  if (external) {
                    window.location.href = link;
                  } else {
                    window.location.href = link;
                  }
                }}
                className="group cursor-pointer rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                {" "}
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/services">
                All services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio highlights */}
      {/* Portfolio */}
      <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              OUR PORTFOLIO
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Digital Solutions We've Built
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Explore some of our recent projects across web development,
              enterprise software, cloud hosting, and modern business solutions.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="text-primary font-semibold hover:underline"
          >
            View All Projects →
          </Link>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_60px_rgba(0,255,255,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
                    >
                      View Project
                    </a>
                  ) : (
                    <div className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 cursor-default">
                      Coming soon
                    </div>
                  )}
                </div>
              </div>

              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.tag}
                </span>

                <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                    >
                      Explore Project →
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3 cursor-default">
                      Coming soon →
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by founders & teams</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border gradient-hero p-10 text-center text-primary-foreground sm:p-16 shadow-elegant">
          <Wrench className="mx-auto h-10 w-10 opacity-80" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Whether you need a website, mobile app, cloud hosting, custom
            software, or AI-powered solutions, our team is ready to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gradient-hero border-0 text-primary-foreground shadow-elegant hover:opacity-90"
            >
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="secondary">
              <a
                href="https://wa.me/918083506050"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
