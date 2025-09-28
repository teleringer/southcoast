// app/page.tsx
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
