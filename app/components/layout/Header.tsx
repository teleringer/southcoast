"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevX = document.documentElement.style.overflowX;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden"; // kill horizontal wiggle
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

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 pb-3">
        {/* CLICKABLE LOGO (same tab) — compact on mobile, BIG on desktop */}
        <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
          <img
            src="/scl-footer-logo-white.png"
            alt="South Coast Legal"
            className="h-16 w-auto md:h-[150px] lg:h-[170px] object-contain"
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

      {/* FULL-SCREEN MOBILE MENU (solid blue, 2× logo, name line, no side scroll) */}
      {open && (
        <div
          className="
            fixed inset-0 z-50 h-svh w-full
            bg-[#173B8C]  /* ← brand blue; tweak if you have the exact hex */
            text-white overflow-hidden
          "
        >
          <div className="flex h-svh flex-col">
            {/* Top bar with MUCH larger logo + close icon */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-5 pb-2">
              <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
                {/* 2× bigger than before */}
                <img src="/scl-footer-logo-white.png" alt="South Coast Legal" className="h-40 w-auto" />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <i className="ri-close-line text-3xl" />
              </button>
            </div>

            {/* Small-caps name centered under the logo */}
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="[font-variant-caps:small-caps] tracking-[.08em] text-white/95 text-base text-center">
                Marianne M. Stivala, Esq.
              </div>
            </div>

            {/* Big uppercase links with separators */}
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
                      className="cursor-pointer w-full py-5 text-left text-2xl font-extrabold tracking-wide uppercase"
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="tel:+19549953306"
                    className="flex items-center gap-3 py-5 text-xl font-semibold"
                  >
                    <i className="ri-phone-line text-2xl" /> (954) 995-3306
                  </a>
                </li>
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-6">
              <button
                onClick={() => go("contact")}
                className="cursor-pointer w-full rounded-2xl bg-[#1f54d8] px-6 py-4 text-xl font-semibold text-white hover:bg-[#1b49bd]"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
