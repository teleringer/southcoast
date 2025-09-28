// app/page.tsx
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      {/* If any of these don’t exist in your repo yet, comment them out */}
      <About />
      <Services />
      <Contact />
    </main>
  );
}
