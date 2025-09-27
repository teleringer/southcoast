"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      {/* more top padding so the larger logo breathes */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 pb-6">
        {/* BIG WHITE LOGO */}
        <Link href="/" aria-label="South Coast Legal — Home" className="flex items-center">
          <img
            src="/scl-footer-logo-white.png"   // same file you're using in the footer
            alt="South Coast Legal"
            width={225}
            height={150}
            className="w-[225px] h-[150px] md:w-[260px] md:h-[170px] object-contain"
          />
        </Link>

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
              onClick={() => scrollTo(id)}
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
            onClick={() => scrollTo("contact")}
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Schedule Consultation
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white drop-shadow-lg"
          aria-label="Open menu"
        >
          <i className="ri-menu-line text-2xl" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="mx-4 rounded-lg border border-white/20 bg-black/80 px-4 py-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <img
                src="/scl-footer-logo-white.png"
                alt="South Coast Legal"
                width={180}
                height={120}
                className="w-[180px] h-[120px] object-contain"
              />
              <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
                <i className="ri-close-line text-2xl" />
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              {[
                ["HOME", "home"],
                ["ABOUT", "about"],
                ["SERVICES", "services"],
                ["CONTACT", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="w-full rounded-md bg_WHITE/10 px-4 py-3 text-left text-white font-semibold"
                >
                  {label}
                </button>
              ))}

              <a
                href="tel:+19549953306"
                className="rounded-md bg-white/10 px-4 py-3 text-white font-semibold"
              >
                (954) 995-3306
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="rounded-md bg-blue-700 px-4 py-3 text-white font-semibold"
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
