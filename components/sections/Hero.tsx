"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-40 overflow-hidden">
      {/* Desktop video */}
      <div className="absolute inset-0 hidden md:block">
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
          <iframe
            loading="lazy"
            title="Gumlet video player"
            src="https://play.gumlet.io/embed/68d80d84c997e2c3ed515ab1?autoplay=true&loop=true&muted=true"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: "scale(1.1)",
              transformOrigin: "center center",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/40" />
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Beautiful%20Florida%20golden%20hour%20beach%20dusk&width=800&height=1200&seq=mobile-hero-dusk-beach&orientation=portrait"
          alt="Florida beach at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30" />
      </div>

      {/* Copy */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-16">
        <div className="flex justify-center">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl font-serif">
              Invested In Your Success
            </h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">
              Attorney Marianne M. Stivala provides personalized legal counsel in Business Law, Real
              Estate, and Wills &amp; Estates across Florida and Pennsylvania.
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
                <div className="text-3xl font-bold text-white md:text-blue-600">20+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white md:text-blue-600">2</div>
                <div className="text-blue-100">State Licenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white md:text-blue-600">3</div>
                <div className="text-blue-100">Practice Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
