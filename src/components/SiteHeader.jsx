import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Moon,
  Sun,
  X,
  House,
  BriefcaseBusiness,
  ServerCog,
  FolderKanban,
  CircleUserRound,
  Phone,
  ChevronDown,
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cable,
  Utensils,
  Server,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const services = [
  {
    title: "Website Development",
    description: "Modern responsive business websites",
    href: "/services/website-development",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Android & iOS applications",
    href: "#",
    icon: Smartphone,
  },
  {
    title: "Java Spring Boot",
    description: "Enterprise backend development",
    href: "#",
    icon: Database,
  },
  {
    title: "React Development",
    description: "Fast scalable React applications",
    href: "#",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    description: "AWS, Azure & deployment",
    href: "#",
    icon: Cloud,
  },
  {
    title: "API Integration",
    description: "REST API & third-party integrations",
    href: "#",
    icon: Cable,
  },
];
const portfolio = [
  {
    title: "Apna Rasoi",
    description:
      "A home-cooked meals marketplace connecting local home chefs with customers seeking authentic, fresh food. We designed and built the consumer mobile app, chef dashboard, and ordering backend.",
    href: "https://apna-rasoi.evanoo.in/",
    icon: Utensils,
    external: true,
  },
  {
    title: "Evanoo Hosting Platform",
    description:
      "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    href: "#",
    icon: Server,
    external: false,
  },
  {
    title: "Northwind Store",
    description:
      "A high-converting storefront with Stripe checkout, headless CMS, and a custom catalog. Achieved 98+ Lighthouse scores on every page.",
    href: "#",
    icon: ShoppingCart,
    external: false,
  },
];

const nav = [
  {
    name: "Home",
    href: "/",
    icon: House,
    external: false,
    dropDown: false,
    subItems: [],
  },
  {
    name: "Services",
    href: "/services",
    icon: BriefcaseBusiness,
    external: false,
    dropDown: false,
    subItems: services,
  },
  {
    name: "Hosting",
    // href: "https://hosting.evanoo.in",
    href: "#",
    icon: ServerCog,
    external: true,
    dropDown: false,
    subItems: [],
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: FolderKanban,
    external: false,
    dropDown: true,
    subItems: portfolio,
  },
  {
    name: "About",
    href: "/about",
    icon: CircleUserRound,
    external: false,
    dropDown: false,
    subItems: [],
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Phone,
    external: false,
    dropDown: false,
    subItems: [],
  },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const [openItems, setOpenItems] = useState([]);

  const toggleAccordion = (name) => {
    setOpenItems((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name],
    );
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container max-w-full relative mx-auto flex h-16 items-center justify-between px-4 lg:px-8 xl:px-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold"
        >
          <img
            src={logo}
            alt="Evanoo Logo"
            className="h-9 w-9 rounded-full object-cover shadow-elegant"
          />
          <span>Evanoo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const Icon = item.icon;
            // Regular nav item (no children)
            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                // target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            ) : (
              <div className="group" key={item.name}>
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`h-4 w-4 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      {item.name}
                      {item.subItems?.length > 0 && (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </>
                  )}
                </NavLink>

                <SubMenu item={item.subItems} />
              </div>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <button
            onClick={toggle}
            aria-label="Toggle Theme"
            className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* CTA */}
          <Button
            asChild
            size="sm"
            className="hidden lg:inline-flex gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90"
          >
            <Link to="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative grid h-9 w-9 place-items-center rounded-md hover:bg-secondary cursor-pointer"
          >
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`fixed inset-x-0 top-16 z-50 lg:hidden
    overflow-hidden border-t border-border/40 bg-background
    transform-gpu
    transition-all duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${
      open
        ? "max-h-[calc(100vh-4rem)] translate-y-0 opacity-100"
        : "max-h-0 -translate-y-3 opacity-0"
    }
  `}
      >
        <nav className="container mx-auto flex flex-col gap-2 px-4 py-3 max-h-[calc(100vh-66px)] overflow-y-auto">
          {nav.map((item) => {
            const Icon = item.icon;
            // Regular item
            const isOpen = openItems.includes(item.name);
            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                // target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground text-muted-foreground"
                onClick={() => {
                  setOpen(false);
                  setOpenItems([]);
                }}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            ) : (
              <div key={item.name}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => {
                    setOpen(false);
                    setOpenItems([]);
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`h-4 w-4 ${
                            isActive ? "text-primary" : "text-muted-foreground"
                          }`}
                        />
                        {item.name}
                      </div>
                      {item.subItems?.length > 0 && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent the NavLink from being triggered
                            e.preventDefault(); // Prevent the default link behavior
                            toggleAccordion(item.name);
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.subItems.map((subItem) => {
                    const SubIcon = subItem.icon;
                    return subItem?.title === "Apna Rasoi" ? (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 rounded-md px-3 py-2 transition-all duration-200 hover:bg-secondary"
                        onClick={() => {
                          setOpen(false);
                          setOpenItems([]);
                        }}
                      >
                        {SubIcon && (
                          <SubIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                        )}
                        <div>
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary">
                            {subItem.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {subItem.description}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <NavLink
                        key={subItem.title}
                        to={subItem.href}
                        className="group flex items-start gap-3 rounded-md px-3 py-2 transition-all duration-200 hover:bg-secondary"
                        onClick={() => {
                          setOpen(false);
                          setOpenItems([]);
                        }}
                      >
                        {SubIcon && (
                          <SubIcon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                        )}
                        <div>
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary">
                            {subItem.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {subItem.description}
                          </p>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

const SubMenu = ({ item }) => {
  if (!item || item.length === 0) return null;
  return (
    <div className="absolute invisible opacity-0 left-0 top-full z-50 w-full transition-all duration-200 group-hover:visible group-hover:opacity-100">
      <div className="mx-auto max-w-7xl rounded-lg border bg-background shadow-md">
        <div className="grid grid-cols-3 gap-3 p-8">
          {item.map((subItem) => {
            const SubIcon = subItem.icon;
            return subItem.external ? (
              <a
                key={subItem.title}
                href={subItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 rounded-xl p-4 transition-all duration-200 hover:bg-secondary"
              >
                {SubIcon && (
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <SubIcon className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <h4 className="text-base font-semibold text-foreground group-hover:text-primary">
                    {subItem.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {subItem.description}
                  </p>
                </div>
              </a>
            ) : (
              <NavLink
                key={subItem.title}
                to={subItem.href}
                className="group flex gap-3 rounded-xl p-4 transition-all duration-200 hover:bg-secondary"
              >
                {SubIcon && (
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <SubIcon className="h-5 w-5" />
                  </div>
                )}
                <div>
                  <h4 className="text-base font-semibold text-foreground group-hover:text-primary">
                    {subItem.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {subItem.description}
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
