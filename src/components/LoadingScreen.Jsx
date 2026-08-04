import { useEffect, useState } from "react";

const LETTERS = "EVANOO".split("");

export function LoadingScreen({ isLoading }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
      document.body.style.overflow = "auto";
      const timer = setTimeout(() => setVisible(false), 700);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      setVisible(true);
      setFadeOut(false);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex gap-1 tracking-[0.2em] sm:gap-2">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="evanoo-letter font-display text-4xl font-bold sm:text-6xl"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-border/40 sm:w-56">
        <div className="evanoo-bar h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400" />
      </div>

      <style>{`
        .evanoo-letter {
          display: inline-block;
          background: linear-gradient(90deg, #06b6d4, #fb923c, #06b6d4);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          opacity: 0;
          transform: translateY(16px);
          animation:
            evanoo-reveal 0.6s ease-out forwards,
            evanoo-shimmer 2.5s linear infinite;
        }

        @keyframes evanoo-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes evanoo-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .evanoo-bar {
          animation: evanoo-slide 1.3s ease-in-out infinite;
        }

        @keyframes evanoo-slide {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
          100% { transform: translateX(-120%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .evanoo-letter,
          .evanoo-bar {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
