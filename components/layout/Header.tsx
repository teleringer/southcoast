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

  // Single source of truth for MOBILE logo height (closed + open)
  const mobileLogoHeightRem = 8; // 8rem == Tailwind h-32

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 pb-3">
        {/* CLICKABLE LOGO (same-tab) — same size on mobile whether menu is closed or open */}
        <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
          <img
            src="/scl-footer-logo-white.png"
            alt="South Coast Legal"
            style={{ height: `${mobileLogoHeightRem}rem` }}      // mobile size (same as open menu)
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

      {/* FULL-SCREEN MOBILE MENU (identical header row, bg #1E3B8B, phone visible, no scroll) */}
      {open && (
        <div
          className="fixed inset-0 z-50 w-screen overflow-hidden bg-[#1E3B8B] text-white transition-opacity duration-200"
          style={{ height: "100dvh" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="flex w-full flex-col" style={{ minHeight: "100dvh" }}>
            {/* Top bar — EXACT same layout/size as closed header (logo left, X right) */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-4 pb-3">
              <a
                href="https://southcoast.legal"
                aria-label="South Coast Legal — Home"
                className="flex items-center"
              >
                <img
                  src="/scl-footer-logo-white.png"
                  alt="South Coast Legal"
                  style={{ height: `${mobileLogoHeightRem}rem` }}  // same as closed header
                  className="w-auto object-contain"
                />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <i className="ri-close-line text-3xl" />
              </button>
            </div>

            {/* Small-caps name centered under the logo */}
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="[font-variant-caps:small-caps] tracking-[.08em] text-white/95 text-sm text-center">
                Marianne M. Stivala, Esq.
              </div>
            </div>

            {/* Menu (fits on one page: reduced font + spacing) */}
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

                {/* Phone row (clearly visible, clickable) */}
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

            {/* Bottom CTA — shorter label for mobile menu */}
            <div className="px-6 pb-6">
              <button
                onClick={() => go("contact")}
                className="cursor-pointer w-full rounded-2xl bg-[#1f54d8] px-6 py-4 text-lg font-semibold text-white hover:bg-[#1b49bd]"
                aria-label="Book Consultation"
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
