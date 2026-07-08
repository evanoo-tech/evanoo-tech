import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const nav = [
  { name: "Home", href: "/", external: false },
  { name: "Services", href: "/services", external: false },
  { name: "Hosting", href: "https://hosting.evanoo.in", external: true },
  { name: "Portfolio", href: "/portfolio", external: false },
  { name: "About", href: "/about", external: false },
  { name: "Contact", href: "/contact", external: false },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

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
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground text-muted-foreground"
              >
                {item.name}
              </a>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/"}
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
          )}
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
            {nav.map((item) =>
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
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
