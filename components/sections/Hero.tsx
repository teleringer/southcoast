"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-x-hidden">
      {/* FULL-BLEED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop video */}
        <div className="hidden md:block">
          <iframe
            title="Gumlet video"
            src="https://play.gumlet.io/embed/68d80d84c997e2c3ed515ab1?autoplay=true&loop=true&muted=true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh]"
            style={{ border: "none" }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        {/* Mobile fallback image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="https://readdy.ai/api/search-image?query=Beautiful%20Florida%20golden%20hour%20beach%20dusk&width=800&height=1200&seq=mobile-hero-dusk-beach&orientation=portrait"
            alt="Florida beach at dusk"
            className="absolute left-1/2 top-1/2 h-[120svh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/30" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* More offset on desktop (~+60px vs prior), tidy mobile centering */}
        <div
          className="
            flex items-center
            min-h-[calc(100svh-140px)] pt-16
            md:min-h-[calc(100vh-140px)] md:pt-40
          "
        >
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Invested In Your Success
            </h1>
            <p className="mb-8 text-base sm:text-lg md:text-xl text-blue-100">
              Attorney Marianne M. Stivala provides personalized legal counsel in Business
              Law, Real Estate, and Wills &amp; Estates across Florida and Pennsylvania.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto rounded-md bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="w-full sm:w-auto rounded-md border-2 border-white px-6 py-3 text-white hover:bg-white hover:text-blue-800 transition"
              >
                Our Services
              </button>
            </div>

            <div className="mx-auto mt-10 sm:mt-12 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white md:text-blue-200">20+</div>
                <div className="text-blue-100 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white md:text-blue-200">2</div>
                <div className="text-blue-100 text-xs sm:text-sm">State Licenses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white md:text-blue-200">3</div>
                <div className="text-blue-100 text-xs sm:text-sm">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
