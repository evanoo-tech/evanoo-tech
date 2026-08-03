import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
  Plus,
} from "lucide-react";

const links = [
  {
    Icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
    hover: "hover:text-[#1877f2] hover:border-[#1877f2]",
  },
  {
    Icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
    hover: "hover:text-[#e1306c] hover:border-[#e1306c]",
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com/company/evanoo",
    label: "LinkedIn",
    hover: "hover:text-[#0a66c2] hover:border-[#0a66c2]",
  },
  //   {
  //     Icon: Github,
  //     href: "https://github.com/evanoo",
  //     label: "GitHub",
  //     hover: "hover:text-foreground hover:border-foreground",
  //   },
  {
    Icon: MessageCircle,
    href: "https://wa.me/918083506050?text=Hi%20Evanoo,%20I%20want%20to%20discuss%20my%20project.",
    label: "WhatsApp",
    hover: "hover:text-[#25D366] hover:border-[#25D366]",
  },
  {
    Icon: Mail,
    href: "mailto:contact@evanoo.in",
    label: "Email",
    hover: "hover:text-primary hover:border-primary",
  },
];

function SocialIcon({ Icon, href, label, hover, delay = "0ms" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ transitionDelay: delay }}
      className={`group relative grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-black shadow-elegant transition-all duration-300 ease-out hover:-translate-x-1 dark:text-muted-foreground ${hover}`}
    >
      <Icon className="h-5 w-5" />

      {/* Tooltip with the name, shown on hover — hidden on touch/mobile */}
      <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-elegant transition-all duration-200 group-hover:opacity-100 sm:block">
        {label}
      </span>
    </a>
  );
}

export function FloatingSocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop / tablet (sm and up): always visible, no button ===== */}
      <div className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex">
        {links.map(({ Icon, href, label, hover }) => (
          <SocialIcon key={label} Icon={Icon} href={href} label={label} hover={hover} />
        ))}
      </div>

      {/* ===== Mobile (below sm): hidden behind a single toggle button ===== */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col items-center gap-3 sm:hidden">
        <div
          className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {links.map(({ Icon, href, label, hover }, i) => (
            <SocialIcon
              key={label}
              Icon={Icon}
              href={href}
              label={label}
              hover={hover}
              delay={open ? `${i * 60}ms` : "0ms"}
            />
          ))}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close social menu" : "Open social menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform hover:scale-110"
        >
          <Plus
            className={`h-5 w-5 transition-transform duration-300 ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </>
  );
}