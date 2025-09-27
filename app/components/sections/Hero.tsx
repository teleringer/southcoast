"use client";

import { useEffect, useRef } from "react";
import Button from "@/../components/base/Button"; // adjust path if needed (see note below)

export default function Hero() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src="https://gumlet.tv/watch/68d80d84c997e2c3ed515ab1/"
        autoPlay
        loop
        muted
        playsInline
        poster="/poster.jpg"
        aria-label="Background video"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="text-white">
          <h1 className="font-serif text-3xl md:text-5xl">Marianne M. Stivala, Esq.</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            Since 2001 • Family, Probate, and General Civil Practice
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact">
              <Button>Request a Consultation</Button>
            </a>
            <a href="/practice-areas">
              <Button variant="ghost">View Practice Areas</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
