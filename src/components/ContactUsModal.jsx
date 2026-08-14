import React, { useEffect, useState } from "react";

const ContactUsModal = ({ isOpen, onClose, onSkip, children }) => {
  // State to manage presence in DOM for exit animation
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  const ANIMATION_DURATION = 250; // Match duration-250 in CSS

  // Handle open/close state transitions
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setShouldRender(true);
      // Slight delay to trigger CSS transition on mount
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, ANIMATION_DURATION);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  // Handle ESC key press & background scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  const handleSkip = onSkip || onClose;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-250 ease-out ${
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-lg rounded-2xl bg-white shadow-2xl transition-all duration-250 ease-out dark:bg-zinc-900 dark:text-white ${
          isAnimating
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-3"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
      >
        {/* Top-Right Action Bar */}
        <div className="absolute z-10 top-4 right-4 flex items-center gap-2">
          {/* Skip Button */}
          <button
            type="button"
            onClick={handleSkip}
            className="rounded-md px-3 py-1 text-xs font-semibold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 active:scale-95 transition-all dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white cursor-pointer"
          >
            Skip &rarr;
          </button>
        </div>

        {/* Modal Body: Your Contact Form */}
        <div className="[&_[custom-attr='form-input']]:overflow-y-auto [&_[custom-attr='form-input']]:max-h-[calc(100vh-380px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
