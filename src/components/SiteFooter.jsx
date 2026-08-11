import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FloatingSocialSidebar } from "./FloatingSocialSidebar";
import iSo_certified from "@/assets/certified.png";
import iso_2015 from "@/assets/iso-2015.png";
import iso_2022 from "@/assets/iso-2022.png";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  ArrowRight,
  ArrowUp,
  Building2,
  BriefcaseBusiness,
  MapPinned,
  CalendarCheck,
  AlarmClock,
  Flag,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function SiteFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const certifications = [
    // {
    //   title: "ISO/IEC 27001:2022 Certified",
    //   subtitle: "Information Security Management System (ISMS)",
    //   img: iSo_certified,
    // },
    {
      title: "ISO 9001:2015 Certified",
      subtitle: "Quality Management System (QMS)",
      img: iso_2015,
    },
    {
      title: "ISO 27001:2022 Certified",
      subtitle: "Information Security Management System (ISMS)",
      img: iso_2022,
    },
  ];
  return (
    <footer className="border-t border-border/40 bg-primary/7">
      <FloatingSocialSidebar />

      {/* Floating WhatsApp */}
      {/* <a
        href="https://wa.me/918083506050?text=Hi%20Evanoo,%20I%20want%20to%20discuss%20my%20project."
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-32 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-float hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a> */}
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`group cursor-pointer fixed bottom-4 md:bottom-15 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-500 ease-out hover:shadow-xl hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-20 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5 animate-bounce" />

        {/* Continuous pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
      </button>

      {/* Trusted Certificate section */}
      <div className="border-b border-primary/15 bg-primary/5">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <h4 className="flex items-center gap-2 text-lg font-semibold">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Trusted &amp; Certified
            </h4>
            <div className="h-1 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
            <p className="max-w-md text-xs text-muted-foreground">
              Recognized standards that back our security and quality
              commitments.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {certifications.map(({ title, subtitle, img }) => (
              <div
                key={title}
                className="group rounded-2xl bg-gradient-to-r from-cyan-500 via-primary to-orange-400 p-[1.5px] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 rounded-2xl bg-background p-2 shadow-elegant">
                  <div className="grid h-17 w-17 place-items-center rounded-full bg-gradient-to-br from-cyan-500/15 to-orange-400/15 overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    {/* <ShieldCheck className="h-6 w-6 text-primary" /> */}
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-foreground">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Company */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl font-bold"
          >
            <img
              src={logo}
              alt="Evanoo Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            Evanoo
          </Link>

          <p className="mt-5 text-sm leading-6 text-black dark:text-muted-foreground">
            Evanoo is a technology company delivering web development, mobile
            applications, cloud hosting, SaaS platforms, AI solutions,
            enterprise software, and digital transformation services for
            startups and businesses.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              {
                Icon: Github,
                href: "https://github.com/evanoo",
              },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/company/evanoo",
              },
              {
                Icon: Facebook,
                href: "https://facebook.com",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com",
              },
              {
                Icon: Mail,
                href: "mailto:contact@evanoo.in",
              },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-black dark:text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-1"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-base font-semibold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Company
          </h4>
          <div className="mt-2 h-1 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="link-label group">
                <ArrowRight className="arrow-icon" />

                <span className="text-label">About Us</span>
              </Link>
            </li>

            <li>
              <Link to="/portfolio" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Portfolio</span>
              </Link>
            </li>

            <li>
              <Link to="/contact" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Contact</span>
              </Link>
            </li>

            <li>
              <Link to="/careers" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Careers</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold flex items-center gap-2">
            <BriefcaseBusiness className="w-5 h-5 text-primary" />
            Services
          </h4>
          <div className="mt-2 h-1 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="#" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Website Development</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Mobile App Development</span>
              </Link>
            </li>

            <li>
              <a
                // href="https://hosting.evanoo.in"
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className="link-label group"
              >
                <ArrowRight className="arrow-icon" />
                <span className="text-label">Cloud Hosting</span>
              </a>
            </li>

            <li>
              <Link to="/saas" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">SaaS Solutions</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">API Integration</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">AI Solutions</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold flex items-center gap-2">
            <MapPinned className="w-5 h-5 text-primary" />
            Get in Touch
          </h4>
          <div className="mt-2 h-1 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:contact@evanoo.in" className="link-label group">
                <ArrowRight className="arrow-icon" />
                <span className="text-label">contact@evanoo.in</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/918083506050"
                target="_blank"
                rel="noopener noreferrer"
                className="link-label group"
              >
                <ArrowRight className="arrow-icon" />
                <span className="text-label">WhatsApp Chat</span>
              </a>
            </li>

            <li className="flex items-center gap-2 font-medium text-black dark:text-muted-foreground">
              <CalendarCheck className="w-4 h-4 text-primary" />
              Monday – Friday
            </li>

            <li className="flex items-center gap-2 font-medium text-black dark:text-muted-foreground">
              <AlarmClock className="w-4 h-4 text-primary" />
              10:00 AM – 7:00 PM
            </li>

            <li className="flex items-center gap-2 font-medium text-black dark:text-muted-foreground">
              <Flag className="w-4 h-4 text-primary" />
              India
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/15">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 p-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p className="text-black dark:text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <span className="gradient-text">Evanoo Private Limited</span>. All
            rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="flex items-center gap-2 text-black dark:text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              to="/terms"
              className="flex items-center gap-2 text-black dark:text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
