import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SouthCoast.Legal — Marianne M. Stivala, Esquire",
  description:
    "Client-focused representation on the South Coast. Since 2001: family, probate, and general civil practice.",
  metadataBase: new URL("https://southcoast.legal"),
  openGraph: {
    title: "SouthCoast.Legal — Marianne M. Stivala, Esquire",
    description:
      "Client-focused representation on the South Coast. Since 2001: family, probate, and general civil practice.",
    url: "https://southcoast.legal",
    siteName: "SouthCoast.Legal",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-neutral-900 antialiased">
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              SouthCoast.<span className="text-blue-700">Legal</span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/practice-areas" className="hover:text-blue-700">Practice Areas</Link>
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} SouthCoast.Legal. All rights reserved.</p>
              <div className="opacity-75">
                This site is for informational purposes and does not constitute legal advice.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
