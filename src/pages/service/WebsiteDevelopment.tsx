import { ArrowRight, IndianRupee, Star, Check, Clock, Sparkles, X, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import saadDashboard from "@/assets/saas-dashboard.png";
import SEO from "@/components/SEO";
import type { ReactNode } from "react";

import { features, packages, comparisonRows, comparisonColumns, processSteps, technologies, faqs } from "./data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";

const WebsiteDevelopment = () => {
    const stats = [{ k: "120+", v: "Projects delivered" }, { k: "5–7 d", v: "Fastest launch" }, { k: "99.9%", v: "Uptime hosting" },];
    return (
        <>
            {/* SEO Section */}
            <SEO
                title={"Website Development Services — Evanoo"}
                description={
                    "High-performance, responsive, SEO-friendly website development by Evanoo. Static sites from ₹4,999, dynamic from ₹19,999, e-commerce from ₹29,999 and custom web apps."
                }
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden hero-glow">
                {/* Ambient background glow */}
                <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />

                <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />

                <div className="container mx-auto grid items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <span
                            data-aos="fade-down"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />

                            <Star className="h-3.5 w-3.5 text-primary" />

                            Trusted by 120+ growing businesses
                        </span>

                        {/* Heading */}
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl"
                        >
                            Website Development{" "}
                            <span className="gradient-text-1">Services</span>
                        </h1>

                        {/* Description */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
                        >
                            We build high-performance, responsive, and SEO-friendly
                            websites that help businesses establish a strong online
                            presence and generate more customers.
                        </p>

                        {/* Buttons */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full gradient-surface-strong px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.03]"
                            >
                                Get Free Consultation

                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:bg-primary/10"
                            >
                                <IndianRupee className="h-4 w-4 text-primary" />

                                View Pricing
                            </a>
                        </div>

                        {/* Stats */}
                        <dl
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6"
                        >
                            {stats.map((s, i) => (
                                <div
                                    key={s.k}
                                    data-aos="fade-up"
                                    data-aos-delay={450 + i * 100}
                                >
                                    <dt className="text-xl font-bold text-primary">
                                        {s.k}
                                    </dt>

                                    <dd className="text-xs text-muted-foreground">
                                        {s.v}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Hero Image */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] gradient-surface-strong opacity-20 blur-3xl" />

                        {/* Browser-like card */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className="group overflow-hidden rounded-3xl border border-border bg-surface p-2 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.3)]"
                        >
                            {/* Image wrapper */}
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={saadDashboard}
                                    alt="Evanoo website development dashboard mockup with analytics"
                                    width={1200}
                                    height={1008}
                                    className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="container mx-auto px-4 pb-6 text-xs text-muted-foreground sm:px-6 lg:px-8"
                >
                    <Link
                        to="/"
                        className="transition-colors hover:text-foreground"
                    >
                        Home
                    </Link>

                    <span className="px-2">/</span>

                    <span className="text-foreground">
                        Website Development
                    </span>
                </div>
            </section>
            {/* Why chose Section */}
            <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8" id="why-evanoo">
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                    <SectionHeading
                        eyebrow="Why Evanoo"
                        title={
                            <>
                                More than a website — a{" "}
                                <span className="gradient-text-1">growth engine</span>
                            </>
                        }
                        subtitle="We combine engineering discipline with design craft, so your site loads fast, ranks well and converts visitors into customers."
                    />
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, description }, index) => (
                        <article
                            key={title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="700"
                            className="glass-card rounded-2xl p-6"
                        >
                            <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                            </span>

                            <h3 className="mt-4 text-lg font-semibold">{title}</h3>

                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
            {/* Packages Section */}
            <section id="pricing" className="relative py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Website Packages"
                        title={
                            <>
                                Transparent pricing,{" "}
                                <span className="gradient-text-1">no surprises</span>
                            </>
                        }
                        subtitle="Fixed starting prices, clear deliverables and a defined timeline for every package."
                    />

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {packages.map((pkg, index) => (
                            <article
                                key={pkg.name}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={`glass-card relative flex flex-col rounded-3xl p-6 ${pkg.highlight
                                    ? "border-primary/45 ring-1 ring-primary/25"
                                    : ""
                                    }`}
                            >
                                {pkg.highlight ? (
                                    <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full gradient-surface-strong px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-foreground">
                                        <Sparkles className="h-3 w-3" /> Most Popular
                                    </span>
                                ) : null}

                                <h3 className="text-lg font-semibold">{pkg.name}</h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {pkg.tagline}
                                </p>

                                <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                                    Starting From
                                </p>

                                <p className="text-3xl font-bold gradient-text-1">
                                    {pkg.price}
                                </p>

                                {pkg.bestFor ? (
                                    <div className="mt-5">
                                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                            {pkg.bestForLabel}
                                        </p>

                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {pkg.bestFor.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}

                                <div className="mt-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        Features
                                    </p>

                                    <ul className="mt-3 space-y-2">
                                        {pkg.features.map((f) => (
                                            <li
                                                key={f}
                                                className="flex items-start gap-2 text-sm"
                                            >
                                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                                                <span className="text-muted-foreground">
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6">
                                    {pkg.delivery ? (
                                        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
                                            <Clock className="h-3.5 w-3.5 text-primary" />
                                            Delivery: {pkg.delivery}
                                        </p>
                                    ) : null}

                                    <a
                                        href="#contact"
                                        className={`flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${pkg.highlight
                                            ? "gradient-surface-strong text-brand-foreground shadow-[var(--shadow-glow)]"
                                            : "border border-border bg-surface-elevated text-foreground hover:border-primary/50"
                                            }`}
                                    >
                                        {pkg.cta}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            {/* Compare plans Section */}
            <section
                className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
                id="compare"
            >
                <SectionHeading
                    eyebrow="Compare Plans"
                    title={
                        <>
                            Find the <span className="gradient-text-1">right fit</span>
                        </>
                    }
                    subtitle="A side-by-side look at what is included in each website type."
                />

                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface backdrop-blur"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[620px] border-collapse text-sm">
                            <caption className="sr-only">
                                Website package feature comparison
                            </caption>

                            <thead>
                                <tr className="border-b border-border bg-secondary/40">
                                    <th
                                        scope="col"
                                        className="px-5 py-4 text-left font-semibold"
                                    >
                                        Feature
                                    </th>

                                    {comparisonColumns.map((c) => (
                                        <th
                                            key={c}
                                            scope="col"
                                            className="px-5 py-4 text-center font-semibold"
                                        >
                                            {c}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr
                                        key={row.feature}
                                        className="border-b border-border/60 transition-colors last:border-0 hover:bg-primary/5"
                                    >
                                        <th
                                            scope="row"
                                            className="px-5 py-4 text-left font-medium text-foreground"
                                        >
                                            {row.feature}
                                        </th>

                                        {row.values.map((v, i) => (
                                            <td
                                                key={`${row.feature}-${comparisonColumns[i]}`}
                                                className="px-5 py-4 text-center"
                                            >
                                                <Cell value={v} />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Process Section */}
            <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8" id="process">
                <SectionHeading
                    eyebrow="How We Work"
                    title={
                        <>
                            Our <span className="gradient-text-1">development process</span>
                        </>
                    }
                    subtitle="A transparent, milestone-driven workflow — you always know what happens next."
                />

                <ol
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <span
                        aria-hidden
                        className="absolute left-0 top-[3.25rem] hidden h-px w-full gradient-surface-strong opacity-25 lg:block"
                    />

                    {processSteps.map(
                        ({ icon: Icon, title, description }, i) => (
                            <li
                                key={title}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                data-aos-duration="700"
                                className="glass-card relative rounded-2xl p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" />
                                    </span>

                                    <span className="text-2xl font-bold text-muted-foreground/25">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-base font-semibold">
                                    {title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {description}
                                </p>
                            </li>
                        )
                    )}
                </ol>
            </section>
            {/* Tech Stack Section */}
            <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8" id="tech">
                <SectionHeading
                    eyebrow="Our Stack"
                    title={
                        <>
                            Technologies <span className="gradient-text-1">we use</span>
                        </>
                    }
                    subtitle="Battle-tested, scalable tooling chosen to fit your product — not the other way round."
                />

                <ul className="mt-12 flex flex-wrap justify-center gap-3">
                    {technologies.map((tech, index) => (
                        <li
                            key={tech}
                            data-aos="fade-up"
                            data-aos-delay={index * 75}
                            data-aos-duration="600"
                            className="glass-card rounded-full px-5 py-2.5 text-sm font-medium"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </section>
            {/* Faq Section */}
            <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8" id="faq">
                <SectionHeading
                    eyebrow="FAQ"
                    title={
                        <>
                            Frequently asked{" "}
                            <span className="gradient-text-1">questions</span>
                        </>
                    }
                />

                <div className="mx-auto mt-12 max-w-3xl">
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((item, i) => (
                            <AccordionItem
                                key={item.q}
                                value={`item-${i}`}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                                data-aos-duration="600"
                                className="glass-card rounded-2xl border-b-0 px-5"
                            >
                                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                                    {item.q}
                                </AccordionTrigger>

                                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            {/* Final Cta Section */}
            <section id="contact" className="container mx-auto px-4 pb-20 pt-4 sm:px-6 lg:px-8">
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] gradient-surface-strong p-[1px]"
                >
                    <div className="relative overflow-hidden rounded-[2rem] bg-background/85 px-6 py-14 text-center backdrop-blur-xl sm:px-14">
                        <span
                            aria-hidden
                            className="absolute inset-0 -z-10 gradient-surface-strong opacity-[0.16]"
                        />

                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Ready to Build Your Website?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
                            Let's turn your idea into a fast, modern, and scalable website.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a
                                href="mailto:hello@evanoo.com?subject=Free%20Consultation"
                                className="group inline-flex items-center gap-2 rounded-full gradient-surface-strong px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                            >
                                Get Free Consultation

                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <Link
                                to="/contact?scroll=form"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary/50 hover:bg-primary/10"
                            >
                                <PhoneCall className="h-4 w-4 text-primary" />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WebsiteDevelopment

function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "center",
}: {
    eyebrow: string;
    title: ReactNode;
    subtitle?: string;
    align?: "center" | "left";
}) {
    return (
        <Reveal
            className={
                align === "center"
                    ? "mx-auto max-w-2xl text-center"
                    : "max-w-2xl text-left"
            }
        >
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
            {subtitle ? (
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
            ) : null}
        </Reveal>
    );
}

export function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
            className={className}
        >
            {children}
        </div>
    );
}

function Cell({ value }: { value: string }) {
    if (value === "yes") {
        return (
            <span
                className="inline-flex items-center justify-center"
                aria-label="Included"
            >
                <Check className="h-4 w-4 text-primary" />
            </span>
        );
    }

    if (value === "no") {
        return (
            <span
                className="inline-flex items-center justify-center"
                aria-label="Not included"
            >
                <X className="h-4 w-4 text-muted-foreground/60" />
            </span>
        );
    }

    return (
        <span className="text-xs font-medium text-muted-foreground">
            {value}
        </span>
    );
}