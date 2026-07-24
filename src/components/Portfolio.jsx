import { useState } from "react";
import {
  ArrowRight,
  UtensilsCrossed,
  Briefcase,
  Cloud,
  Layers,
  Smile,
  Rocket,
  Trophy,
  LayoutGrid,
  Globe,
  SquareArrowOutUpRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import apnaRasoi from "@/assets/apna-rasoi.png";
import eCommerce from "@/assets/e-commerce.png";
import saadDashboard from "@/assets/saas-dashboard.png";

const categories = [
  {
    label: "All Projects",
    icon: LayoutGrid,
  },
  {
    label: "Web Development",
    icon: Globe,
  },
  {
    label: "Enterprise Software",
    icon: Briefcase,
  },
  {
    label: "Cloud Services",
    icon: Cloud,
  },
];

const stats = [
  {
    icon: Layers,
    value: "35+",
    label: "Projects Completed",
    tint: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Smile,
    value: "25+",
    label: "Happy Clients",
    tint: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Rocket,
    value: "5+",
    label: "Years Experience",
    tint: "bg-amber-100 text-amber-600",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Client Satisfaction",
    tint: "bg-blue-100 text-blue-600",
  },
];

const projects = [
  {
    title: "Apna Rasoi",
    tag: "Food Delivery",
    category: "Web Development",
    icon: UtensilsCrossed,
    desc: "Cloud kitchen platform with online ordering, menu management, WhatsApp ordering, and responsive design.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    img: apnaRasoi,
    link: "https://apna-rasoi.evanoo.in",
  },
  {
    title: "Insurance Management Platform",
    tag: "Enterprise Software",
    category: "Enterprise Software",
    icon: Briefcase,
    desc: "Insurance platform with quotation, policy management, API integration, and claims workflow.",
    tech: ["Java", "Spring Boot", "REST API"],
    img: eCommerce,
    link: null,
  },
  {
    title: "Evanoo Hosting Platform",
    tag: "Cloud Hosting",
    category: "Cloud Services",
    icon: Cloud,
    desc: "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    tech: ["React", "Node.js", "Linux"],
    img: saadDashboard,
    link: "https://hosting.evanoo.in/",
  },
];

{
  /* Portfolio */
}
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
    console.log("projects:", projects);
    console.log("filteredProjects:", filteredProjects);
  return (
    <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Portfolio
          </p>
          <div className="mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Digital Solutions We've <span className="gradient-text">Built</span>
          </h2>

          <p className="mt-5 text-md text-muted-foreground">
            Explore some of our recent projects across web development,
            enterprise software, cloud hosting, and modern business solutions.
          </p>
        </div>

        <Link
          to="/portfolio"
          className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          View All Projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Filter tabs */}
      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === label
                ? "bg-primary text-primary-foreground shadow-md border border-border"
                : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_60px_rgba(0,255,255,0.12)]"
          >
            <div className="relative overflow-hidden">
              {project.icon && (
                <div className="absolute left-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <project.icon className="h-4.5 w-4.5" />
                </div>
              )}

              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-primary-foreground transition hover:scale-105"
                  >
                    <SquareArrowOutUpRight className="h-6 w-6" />
                  </a>
                ) : (
                  <div className="cursor-default px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-105">
                    Coming soon
                  </div>
                )}
              </div>
            </div>

            <div className="p-7 py-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
                {project.tag}
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <p className="mt-3 leading-6 text-sm text-muted-foreground">
                {project.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="mt-8">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    Explore Project <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="inline-flex cursor-default items-center gap-2 text-sm font-semibold text-primary">
                    Coming soon <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

