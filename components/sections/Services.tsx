const services = [
  {
    icon: "ri-building-line",
    title: "Business Law",
    description:
      "Helping entrepreneurs and small businesses with entity formation, contracts, and ongoing legal needs.",
    features: [
      "Business Formation (LLCs, Corporations, Partnerships)",
      "Commercial Contract Review & Drafting",
      "Business Purchases and Sales",
      "Shareholder Agreements",
      "Asset Purchase Agreements",
    ],
    image:
      "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/8601d85c40fce6a23277721ffc45de8e.jfif",
  },
  {
    icon: "ri-home-line",
    title: "Real Estate",
    description:
      "Representing clients in the purchase and sale of residential and commercial properties.",
    features: [
      "Residential Real Estate Transactions",
      "Commercial Real Estate Transactions",
      "Contract Review and Negotiation",
      "Title Coordination and Closing Preparation",
      "Lease Drafting and Review",
    ],
    image:
      "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/99aaf3d3242539fed4a4ec038fec98e3.png",
  },
  {
    icon: "ri-file-text-line",
    title: "Wills & Estates",
    description:
      "Preparing for the future with personalized guidance to help you protect what matters most.",
    features: [
      "Drafting Wills and Trusts",
      "Powers of Attorney & Healthcare Directives",
      "Probate and Estate Administration",
      "Asset Protection Strategy",
      "Guidance for families after the loss of a loved one",
    ],
    image:
      "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/4eab6a2a210057fcb73aeee14ff9fd1d.jfif",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Comprehensive Legal Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            I focus my practice on three core areas, providing clear, personalized legal guidance
            grounded in years of practical experience.
          </p>
        </div>

        {/* Mobile cards */}
        <div className="space-y-12 lg:hidden">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{s.title}</h3>
              <p className="mx-auto mb-4 max-w-xl text-gray-600">{s.description}</p>
              <img src={s.image} alt={s.title} className="mx-auto h-64 w-full max-w-xl rounded-lg object-cover" />
              <ul className="mx-auto mt-6 max-w-xl list-disc space-y-1 px-6 text-left text-gray-700">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desktop split rows */}
        <div className="hidden flex-col gap-24 lg:flex">
          {services.map((s, i) => (
            <div key={s.title} className="grid grid-cols-2 items-center gap-12">
              <div className={i % 2 ? "order-2" : ""}>
                <h3 className="mb-3 text-3xl font-bold text-gray-900">{s.title}</h3>
                <p className="mb-4 text-gray-600">{s.description}</p>
                <ul className="ml-5 list-disc space-y-1 text-gray-700">
                  {s.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 ? "order-1" : ""}>
                <img src={s.image} alt={s.title} className="h-80 w-full rounded-lg object-cover shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
