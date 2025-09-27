"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 pb-3">
        {/* CLICKABLE LOGO (same tab) — small on mobile, BIG on desktop */}
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

      {/* FULL-SCREEN MOBILE MENU — matches your screenshot */}
      {open && (
        <div className="fixed inset-0 z-50 w-screen h-svh bg-[#173b8c] text-white overflow-hidden">
          <div className="flex h-svh flex-col">
            {/* Top bar with LARGER logo + close icon */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-5 pb-2">
              <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
                <img src="/scl-footer-logo-white.png" alt="South Coast Legal" className="h-20 w-auto" />
              </a>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <i className="ri-close-line text-3xl" />
              </button>
            </div>

            {/* Small-caps name centered under logo */}
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="[font-variant-caps:small-caps] tracking-[.08em] text-white/95 text-base text-center">
                Marianne M. Stivala, Esq.
              </div>
            </div>

            {/* Big uppercase links with separators; no page scroll; no side movement */}
            <nav className="mx-auto w-full max-w-7xl px-6 flex-1">
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

            {/* Bottom CTA — big pill, no scroll needed */}
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
