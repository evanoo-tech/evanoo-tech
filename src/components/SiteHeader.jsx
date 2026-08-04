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
  AppWindow,
} from "lucide-react";
import { useEffect, useRef, forwardRef, useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const services = [
  {
    title: "Website Development",
    description: "Modern responsive business websites",
    href: "#",
  },
  {
    title: "Mobile App Development",
    description: "Android & iOS applications",
    href: "#",
  },
  {
    title: "Java Spring Boot",
    description: "Enterprise backend development",
    href: "#",
  },
  {
    title: "React Development",
    description: "Fast scalable React applications",
    href: "#",
  },
  {
    title: "Cloud Solutions",
    description: "AWS, Azure & deployment",
    href: "#",
  },
  {
    title: "API Integration",
    description: "REST API & third-party integrations",
    href: "#",
  },
];

const portfolio = [
  {
    title: "Apna Rasoi",
    description:
      "A home-cooked meals marketplace connecting local home chefs with customers seeking authentic, fresh food. We designed and built the consumer mobile app, chef dashboard, and ordering backend.",
    href: "https://apna-rasoi.evanoo.in/",
  },
  {
    title: "Evanoo Hosting Platform",
    description:
      "Hosting platform offering shared hosting, VPS, domains, SSL certificates, and business email.",
    href: "#",
  },
  {
    title: "Northwind Store",
    description:
      "A high-converting storefront with Stripe checkout, headless CMS, and a custom catalog. Achieved 98+ Lighthouse scores on every page.",
    href: "#",
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
  // {
  //   name: "Services",
  //   href: "/services",
  //   icon: BriefcaseBusiness,
  //   external: false,
  //   children: [
  //     {
  //       name: "Software Development",
  //       href: "/services/software-development",
  //       icon: Code2,
  //     },
  //     {
  //       name: "Mobile App Development",
  //       href: "/services/mobile-app-development",
  //       icon: Smartphone,
  //     },
  //     {
  //       name: "Application Development",
  //       href: "/services/application-development",
  //       icon: AppWindow,
  //     },
  //   ],
  // },
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
  const [openSubmenu, setOpenSubmenu] = useState(null);

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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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

            // Parent item with a dropdown (e.g. Services)
            // if (item.children) {
            //   return (
            //     <div key={item.name} className="group relative">
            //       <NavLink
            //         to={item.href}
            //         className={({ isActive }) =>
            //           `flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
            //             isActive
            //               ? "bg-secondary text-foreground"
            //               : "text-muted-foreground"
            //           }`
            //         }
            //       >
            //         {({ isActive }) => (
            //           <>
            //             <Icon
            //               className={`h-4 w-4 ${
            //                 isActive ? "text-primary" : "text-muted-foreground"
            //               }`}
            //             />
            //             {item.name}
            //             <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:rotate-180" />
            //           </>
            //         )}
            //       </NavLink>

            //       {/* Invisible bridge so the dropdown doesn't close when moving the cursor down */}
            //       <div className="absolute left-0 top-full h-2 w-full" />

            //       {/* Dropdown panel */}
            //       <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-xl border border-border bg-background p-2 opacity-0 shadow-elegant transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            //         {item.children.map((child) => {
            //           const ChildIcon = child.icon;
            //           return (
            //             <NavLink
            //               key={child.name}
            //               to={child.href}
            //               className={({ isActive }) =>
            //                 `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
            //                   isActive
            //                     ? "bg-secondary text-foreground"
            //                     : "text-muted-foreground"
            //                 }`
            //               }
            //             >
            //               <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
            //                 <ChildIcon className="h-4 w-4" />
            //               </span>
            //               {child.name}
            //             </NavLink>
            //           );
            //         })}
            //       </div>
            //     </div>
            //   );
            // }

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
              <div className="group relative" key={item.name}>
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
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-md lg:hidden hover:bg-secondary cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-3 max-h-[calc(100vh-66px)] overflow-y-auto">
            {/* {nav.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ),
            )} */}

            {nav.map((item) => {
              const Icon = item.icon;
              // Parent item with children -> accordion
              // if (item.children) {
              //   const isSubOpen = openSubmenu === item.name;
              //   return (
              //     <div key={item.name}>
              //       <button
              //         onClick={() =>
              //           setOpenSubmenu(isSubOpen ? null : item.name)
              //         }
              //         className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              //       >
              //         <div className="flex items-center gap-2">
              //           <Icon className="h-4 w-4" />
              //           {item.name}
              //         </div>
              //         <ChevronDown
              //           className={`h-4 w-4 transition-transform duration-200 ${
              //             isSubOpen ? "rotate-180" : ""
              //           }`}
              //         />
              //       </button>

              //       {isSubOpen && (
              //         <div className="ml-3 flex flex-col border-l border-border/40 pl-3">
              //           {item.children.map((child) => (
              //             <NavLink
              //               key={child.name}
              //               to={child.href}
              //               onClick={() => {
              //                 setOpen(false);
              //                 setOpenSubmenu(null);
              //               }}
              //               className={({ isActive }) =>
              //                 `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground ${
              //                   isActive
              //                     ? "bg-secondary text-foreground"
              //                     : "text-muted-foreground"
              //                 }`
              //               }
              //             >
              //               {({ isActive }) => (
              //                 <div className="flex items-center gap-2">
              //                   <Icon
              //                     className={`h-4 w-4 ${
              //                       isActive ? "text-primary" : "text-muted-foreground"
              //                     }`}
              //                   />
              //                   {child.name}
              //                 </div>
              //               )}
              //             </NavLink>
              //           ))}
              //         </div>
              //       )}
              //     </div>
              //   );
              // }
              // Regular item
              const isOpen = openItems.includes(item.name);
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
                <div key={item.name}>
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
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
                              isActive
                                ? "text-primary"
                                : "text-muted-foreground"
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
                    {item.subItems.map((subItem) =>
                      subItem?.title === "Apna Rasoi" ? (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-md px-3 py-2 transition-all duration-200 hover:bg-secondary"
                        >
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary">
                            {subItem.title}
                          </h4>

                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {subItem.description}
                          </p>
                        </a>
                      ) : (
                        <NavLink
                          key={subItem.title}
                          to={subItem.href}
                          className="block rounded-md px-3 py-2 transition-all duration-200 hover:bg-secondary"
                        >
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary">
                            {subItem.title}
                          </h4>

                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {subItem.description}
                          </p>
                        </NavLink>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

const SubMenu = ({ item }, ref) => {
  // if (item?.length > 0) return;
  const subMenuRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!groupRef.current || !subMenuRef.current) return;

      const group = groupRef.current.getBoundingClientRect();
      const container = groupRef.current
        .closest(".container")
        ?.getBoundingClientRect();

      if (!container) return;

      subMenuRef.current.style.width = `${item.length > 0 ? container.width : 0}px`;
      subMenuRef.current.style.left = `${item.length > 0 ? container.left - group.left : 0}px`;
      if (item.length === 0) {
        subMenuRef.current.style.height = 0;
        subMenuRef.current.style.opacity = 0;
      }
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div ref={groupRef}>
      <div
        className={`absolute invisible opacity-0 left-0 top-full z-50 pt-3 transition-all duration-200 group-hover:visible group-hover:opacity-100`}
        ref={subMenuRef}
      >
        <div className="mx-auto max-w-7xl rounded-2xl border bg-background shadow-2xl">
          <div className="grid grid-cols-4 gap-6 p-8">
            {item.map((subItem) => (
              <NavLink
                key={subItem.title}
                to={subItem.href}
                className="group rounded-xl p-4 transition-all duration-200 hover:bg-secondary"
              >
                <h4 className="text-base font-semibold text-foreground group-hover:text-primary">
                  {subItem.title}
                </h4>

                <p className="mt-2 text-sm text-muted-foreground">
                  {subItem.description}
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
