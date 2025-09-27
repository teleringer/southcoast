import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SouthCoast.Legal — Marianne M. Stivala, Esquire",
  description:
    "Client-focused representation on the South Coast. Since 2001: family, probate, and general civil practice.",
  metadataBase: new URL("https://southcoast.legal"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Remix Icons */}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
        {/* Playfair (headings) + Inter (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
