"use client";

import { useEffect, useRef } from "react";
import Button from "../base/Button"; // path from components/sections -> components/base

export default function Hero() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden">
      {/* FULL-BLEED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop video (oversized so no gutters) */}
        <video
          ref={ref}
          className="absolute left-1/2 top-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 object-cover hidden md:block"
          src="https://gumlet.tv/watch/68d80d84c997e2c3ed515ab1/"
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.jpg"
          aria-label="Background video"
        />
        <div className="absolute inset-0 hidden md:block bg-blue-900/40" />

        {/* Mobile: your uploaded image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/mobile-hero.jpg"   /* make sure this exists in /public */
            alt="Florida beach at dusk"
            className="absolute left-1/2 top-1/2 h-[120svh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/35 via-transparent to-blue-900/20" />
        </div>
      </div>

      {/* CONTENT (centered; offset lower on desktop) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="flex items-center min-h-[calc(100svh-200px)] pt-24 md:min-h-[calc(100vh-140px)] md:pt-40">
          <div className="mx-auto max-w-4xl text-white text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Marianne M. Stivala, Esq.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100">
              Since 2001 • Family, Probate, and General Civil Practice
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button onClick={() => jump("contact")} className="cursor-pointer">
                <Button className="cursor-pointer">Request a Consultation</Button>
              </button>
              <a href="/practice-areas" className="cursor-pointer">
                <Button variant="ghost" className="cursor-pointer">
                  View Practice Areas
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
