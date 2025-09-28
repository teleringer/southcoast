// components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prevBody = document.body.style.overflow;
    const prevHtmlX = document.documentElement.style.overflowX;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflowX = prevHtmlX;
    };
  }, [open]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // same on mobile open/closed
  const mobileLogoHeightRem = 8; // 8rem ≈ 128px

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 pb-3">
        <a
          href="https://southcoast.legal"
          aria-label="South Coast Legal — Home"
          className="flex items-center"
        >
          <img
            src="/scl-footer-logo-white.png"
            alt="South Coast Legal"
            style={{ height: `${mobileLogoHeightRem}rem` }}
            className="w-auto md:h-[150px] lg:h-[170px] md:w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["HOME", "home"],
            ["ABOUT", "about"],
            ["SERVICES", "services"],
            ["CONTACT", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="cursor-pointer text-white drop-shadow-lg text-sm font-bold tracking-wide hover:text-blue-200"
            >
              {label}
            </button>
          ))}
          <a
            href="tel:+19549953306"
            className="text-white/90 hover:text-white drop-shadow-lg font-semibold"
          >
            (954) 995-3306
          </a>
          <button
            onClick={() => go("contact")}
            className="cursor-pointer rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Schedule Consultation
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white drop-shadow-lg"
          aria-label="Open menu"
        >
          <i className="ri-menu-line text-2xl" />
        </button>
      </div>

      {/* FULL-SCREEN MOBILE MENU */}
      {open && (
        <div
          className="fixed inset-0 z-[100] min-h-[100svh] max-h-[100svh] w-full overflow-y-auto overscroll-contain bg-[#1E3B8B] text-white"
          aria-modal="true"
          role="dialog"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-4 pb-3">
            <a
              href="https://southcoast.legal"
              aria-label="South Coast Legal — Home"
              className="flex items-center"
            >
              <img
                src="/scl-footer-logo-white.png"
                alt="South Coast Legal"
                style={{ height: `${mobileLogoHeightRem}rem` }}
                className="w-auto object-contain"
              />
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <i className="ri-close-line text-3xl" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="[font-variant-caps:small-caps] tracking-[.08em] text-white/95 text-sm text-center">
              Marianne M. Stivala, Esq.
            </div>
          </div>

          <nav className="mx-auto w-full max-w-7xl px-6 pt-2 pb-6">
            <ul className="divide-y divide-white/25">
              {[
                ["HOME", "home"],
                ["ABOUT", "about"],
                ["SERVICES", "services"],
                ["CONTACT", "contact"],
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="cursor-pointer w-full py-4 text-left text-xl font-bold tracking-wide uppercase"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="tel:+19549953306"
                  className="flex items-center gap-3 py-4 text-lg font-semibold"
                >
                  <i className="ri-phone-line text-2xl" /> (954) 995-3306
                </a>
              </li>
            </ul>

            <button
              onClick={() => go("contact")}
              className="mt-4 w-full cursor-pointer rounded-2xl bg-[#1f54d8] px-6 py-3 text-lg font-semibold text-white hover:bg-[#1b49bd]"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
