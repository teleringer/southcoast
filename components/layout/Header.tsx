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
        {/* CLICKABLE LOGO (same-tab) */}
        <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
          {/* mobile ≈64px tall, desktop ≈150–170px tall */}
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
              className="text-white drop-shadow-lg text-sm font-bold tracking-wide hover:text-blue-200"
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
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
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

      {/* FULL-SCREEN MOBILE MENU (solid overlay, no page bleed) */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#0f172a] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="https://southcoast.legal" aria-label="South Coast Legal — Home" className="flex items-center">
              <img src="/scl-footer-logo-white.png" alt="South Coast Legal" className="h-12 w-auto" />
            </a>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
              <i className="ri-close-line text-3xl" />
            </button>
          </div>

          <nav className="mx-auto mt-6 max-w-7xl px-6">
            <ul className="grid gap-3">
              {[
                ["HOME", "home"],
                ["ABOUT", "about"],
                ["SERVICES", "services"],
                ["CONTACT", "contact"],
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="w-full rounded-md bg-white/10 px-4 py-4 text-left text-lg font-semibold"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a href="tel:+19549953306" className="block rounded-md bg-white/10 px-4 py-4 text-lg font-semibold">
                  (954) 995-3306
                </a>
              </li>
              <li>
                <button
                  onClick={() => go("contact")}
                  className="w-full rounded-md bg-blue-700 px-4 py-4 text-lg font-semibold"
                >
                  Schedule Consultation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
