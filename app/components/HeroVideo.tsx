"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;              // Gumlet URL (or direct MP4)
  poster?: string;          // e.g., /poster.jpg
  children?: React.ReactNode;
};

export default function HeroVideo({ src, poster = "/poster.jpg", children }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = async () => {
      try { await v.play(); } catch {}
    };
    tryPlay();
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        aria-label="Background video"
      />
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) { video { display: none; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="text-white">{children}</div>
      </div>
    </section>
  );
}
