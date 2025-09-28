// components/sections/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Button from "../base/Button";

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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Desktop/Laptop video (must be a real media file) */}
        <video
          ref={ref}
          className="absolute left-1/2 top-1/2 hidden h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover md:block"
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.jpg"
          aria-label="Background video"
        >
          {/* Option A: put your MP4 at /public/hero.mp4 */}
          <source src="/hero.mp4" type="video/mp4" />
          {/* Option B: if staying on Gumlet, replace with their *direct* .mp4 or .m3u8 URL (not /watch/...) */}
          {/* <source src="https://cdn.gumlet.com/your-file.mp4" type="video/mp4" /> */}
          {/* <source src="https://cdn.gumlet.com/your-hls.m3u8" type="application/x-mpegURL" /> */}
        </video>
        <div className="absolute inset-0 hidden bg-blue-900/40 md:block" />

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/mobile-hero.jpg"
            alt="Florida beach at dusk"
            className="absolute left-1/2 top-1/2 h-[120svh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/35 via-transparent to-blue-900/20" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* push down on mobile so it clears the large logo; normal on md+ */}
        <div className="flex items-center min-h-[calc(100svh-220px)] pt-[11rem] md:min-h-[calc(100vh-140px)] md:pt-40">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl">
              Invested In Your Success
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-base text-blue-100 sm:text-lg md:text-xl">
              Attorney Marianne M. Stivala provides personalized legal counsel in
              Business Law, Real Estate, and Wills &amp; Estates across Florida and
              Pennsylvania.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button onClick={() => jump("contact")} className="cursor-pointer">
                <Button className="cursor-pointer">Schedule Consultation</Button>
              </button>
              <button onClick={() => jump("services")} className="cursor-pointer">
                <Button variant="ghost" className="cursor-pointer">
                  Our Services
                </Button>
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-2 text-white/90">
              <div>
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold">2</div>
                <div className="text-sm">State Licenses</div>
              </div>
              <div>
                <div className="text-4xl font-bold">3</div>
                <div className="text-sm">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
