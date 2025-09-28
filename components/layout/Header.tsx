// components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock background scroll & horizontal wiggle when the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevX = document.documentElement.style.overflowX;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overflowX = prevX;
    };
  }, [open]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // ONE source of truth so closed/open mobile headers match exactly
  const mobileLogoHeightRem = 8; // 8rem = Tailwind h-32

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 pb-3">
        <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
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
            aria-label="Call (954) 995-3306"
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

        {/* Mobile burger (right) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white drop-shadow-lg"
          aria-label="Open menu"
        >
          <i className="ri-menu-line text-2xl" />
        </button>
      </div>

      {/* FULL-SCREEN MOBILE MENU (no gaps, covers entire screen) */}
      {open && (
        <div
          className="
            fixed top-0 left-0 right-0 bottom-0 z-[100]
            w-full min-w-full overflow-hidden
            bg-[#1E3B8B] text-white
            transition-opacity duration-200
          "
          style={{ height: "100dvh" }}   // robust on iOS/Android
          aria-modal="true"
          role="dialog"
        >
          <div className="flex w-full flex-col" style={{ minHeight: "100svh" }}>
            {/* Header row in menu: identical to closed header (logo left, X right) */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-4 pb-3">
              <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
                <img
                  src="/scl-footer-logo-white.png"
                  alt="South Coast Legal"
                  style={{ height: `${mobileLogoHeightRem}rem` }}
                  className="w-auto object-contain"
                />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <i className="ri-close-line text-3xl" />
              </button>
            </div>

            {/* Small-caps name line */}
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="[font-variant-caps:small-caps] tracking-[.08em] text-white/95 text-sm text-center">
                Marianne M. Stivala, Esq.
              </div>
            </div>

            {/* Menu list (fits on one page) */}
            <nav className="mx-auto w-full max-w-7xl px-6 flex-1 overflow-hidden">
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
                    aria-label="Call (954) 995-3306"
                  >
                    <i className="ri-phone-line text-2xl" /> (954) 995-3306
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom CTA — short label */}
            <div className="px-6 pb-6">
              <button
                onClick={() => go("contact")}
                className="cursor-pointer w-full rounded-2xl bg-[#1f54d8] px-6 py-4 text-lg font-semibold text-white hover:bg-[#1b49bd]"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
