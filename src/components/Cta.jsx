import {
  Rocket,
  Calendar,
  MessageCircle,
  ArrowRight,
  Star,
  BadgeCheck,
  MessageSquare,
  Tag,
  Headset,
  ShieldCheck,
  Users,
  Trophy,
  Cloud,
  Code2,
  BrainCircuit,
  Database,
  Atom,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="container mx-auto">
      <div className="relative overflow-hidden gradient-bg-cta p-8 text-center shadow-elegant dark:shadow-none sm:p-14">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[110px]" />

        {/* Dot-grid corner accents */}
        <div
          className="pointer-events-none absolute left-8 top-8 h-24 w-24 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />
        <div
          className="pointer-events-none absolute right-8 top-8 h-24 w-24 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Orbiting decorative icons — hidden on small screens */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 items-center lg:flex">
          <div className="relative h-72 w-full">
            <div className="absolute left-50 top-2 grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              <Atom className="h-6 w-6" />
            </div>
            <div className="absolute left-40 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
              <Cloud className="h-6 w-6" />
            </div>
            <div className="absolute bottom-2 left-60 grid h-14 w-14 place-items-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-[0_0_25px_rgba(139,92,246,0.25)]">
              <Code2 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-40 items-center lg:flex">
          <div className="relative h-72 w-full">
            <div className="absolute right-50 top-2 grid h-14 w-14 place-items-center rounded-2xl border border-orange-400/30 bg-orange-500/10 text-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.25)]">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <div className="absolute right-40 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-2xl border border-amber-400/30 bg-amber-500/10 text-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.25)]">
              <Database className="h-6 w-6" />
            </div>
            <div className="absolute bottom-2 right-60 grid h-14 w-14 place-items-center rounded-2xl border border-teal-400/30 bg-teal-500/10 text-teal-300 shadow-[0_0_25px_rgba(45,212,191,0.25)]">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-orange-400" />
            Let's Build the Future
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Whether you need a website, mobile app, cloud hosting, custom
            software, or AI-powered solutions, our team is ready to help.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="border-0 bg-gradient-to-r from-cyan-500 to-orange-400 text-white shadow-[0_10px_30px_rgba(34,211,238,0.25)] hover:opacity-90"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-400/40 bg-emerald-400/10 text-white hover:bg-emerald-400/10"
            >
              <a
                href="https://wa.me/918083506050"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-emerald-400" />
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Avatars + rating + trusted by */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-3">
              {/* <div className="flex -space-x-3">
                {["A", "S", "R"].map((initial, i) => (
                  <div
                    key={i}
                    className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-xs font-semibold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div> */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-1 text-sm text-white/80">4.9/5 Rating</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/80">
              <BadgeCheck className="h-4 w-4 text-cyan-400" />
              Trusted by{" "}
              <span className="font-semibold text-emerald-400">25+</span>{" "}
              Clients
            </div>
          </div>

          {/* Feature strip */}
          <div className="max-w-4xl m-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm text-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-purple-400" />
              Free Consultation
            </div>
            <span className="hidden sm:hidden md:hidden lg:block">|</span>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-pink-400" />
              No Hidden Charges
            </div>
            <span className="hidden sm:hidden md:hidden lg:block">|</span>
            <div className="flex items-center gap-2">
              <Headset className="h-4 w-4 text-orange-400" />
              24/7 Support
            </div>
            <span className="hidden sm:hidden md:hidden lg:block">|</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-400" />
              5+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
