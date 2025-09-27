"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          SouthCoast.<span className="text-blue-700">Legal</span>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/practice-areas" className="hover:text-blue-700">Practice Areas</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800"
        >
          Schedule Consultation
        </a>
      </div>
    </header>
  );
}
