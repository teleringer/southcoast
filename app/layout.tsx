// app/layout.tsx
import "./global.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "South Coast Legal",
  description:
    "Business Law, Real Estate, and Wills & Estates — Florida & Pennsylvania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icons for burger/close/phone */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* Safety net: no horizontal scroll site-wide */}
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
