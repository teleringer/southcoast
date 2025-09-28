// app/layout.tsx
import "./global.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "South Coast Legal",
  description: "Business Law, Real Estate, and Wills & Estates — Florida & Pennsylvania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Prevent any accidental horizontal scroll across the whole site */}
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
