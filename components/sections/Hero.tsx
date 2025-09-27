"use client";

export default function Hero() {
  const jump = (id: string) => {
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

        {/* Mobile: your uploaded image */}
        <div className="absolute inset-0 md:hidden">
          <img
            src="/mobile-hero.jpg"  /* <-- file you uploaded to /public */
            alt="Florida beach at dusk"
            className="absolute left-1/2 top-1/2 h-[120svh] w-[120vw] -translate-x-1/2 -translate-y-1/2 object-cover"
          />
          {/* subtle top-to-bottom tint like your screenshot */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/35 via-transparent to-blue-900/20" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* Centered; extra push on desktop (~+60px) and comfy on mobile */}
        <div className="
          flex items-center
          min-h-[calc(100svh-200px)] pt-24
          md:min-h-[calc(100vh-140px)] md:pt-40 md:translate-y-[60px]
        ">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h1 className="mb-6 font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Invested In Your Success
            </h1>
            <p className="mb-8 text-base sm:text-lg md:text-xl text-blue-100">
              Attorney Marianne M. Stivala provides personalized legal counsel in Business
              Law, Real Estate, and Wills &amp; Estates across Florida and Pennsylvania.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => jump("contact")}
                className="w-full sm:w-auto rounded-md bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => jump("services")}
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
