import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X, House, BriefcaseBusiness, ServerCog, FolderKanban, CircleUserRound, Phone, ChevronDown, Code2, Smartphone, AppWindow, } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const nav = [
  { name: "Home", href: "/", icon: House, external: false },
  { name: "Services", href: "/services", icon: BriefcaseBusiness, external: false },
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
  { name: "Hosting", href: "https://hosting.evanoo.in", icon: ServerCog, external: true },
  { name: "Portfolio", href: "/portfolio", icon: FolderKanban, external: false },
  { name: "About", href: "/about", icon: CircleUserRound, external: false },
  { name: "Contact", href: "/contact", icon: Phone, external: false },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            ) : (
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
          <nav className="container mx-auto flex flex-col px-4 py-3">
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
              return item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </a>
              ) : (
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
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
