"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen">
      {/* FULL-BLEED BACKGROUND (covers side gutters) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop: Gumlet iframe */}
        <div className="hidden md:block">
          <iframe
            title="Gumlet video"
            src="https://play.gumlet.io/embed/68d80d84c997e2c3ed515ab1?autoplay=true&loop=true&muted=true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh]"
            style={{ border: "none" }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
          />
          {/* overlay tint */}
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        {/* Mobile: fallback image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20Florida%20golden%20hour%20beach%20dusk&width=800&height=1200&seq=mobile-hero-dusk-beach&orientation=portrait"
            alt="Florida beach at dusk"
            className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>
      </div>

      {/* CONTENT (centered roughly mid-screen, below big header logo) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
        {/* Use a wrapper whose height is viewport minus header (~140px) so text sits mid-screen */}
        <div className="flex min-h-[calc(100vh-140px)] items-center">
          <div className="text-white text-center mx-auto max-w-4xl">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Invested In Your Success
            </h1>
            <p className="mb-8 text-lg md:text-xl text-blue-100">
              Attorney Marianne M. Stivala provides personalized legal counsel in Business
              Law, Real Estate, and Wills &amp; Estates across Florida and Pennsylvania.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-md bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="rounded-md border-2 border-white px-6 py-3 text-white hover:bg-white hover:text-blue-800 transition"
              >
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white md:text-blue-200">20+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white md:text-blue-200">2</div>
                <div className="text-blue-100">State Licenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white md:text-blue-200">3</div>
                <div className="text-blue-100">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
