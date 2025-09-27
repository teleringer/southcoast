export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <img
            src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/3b1a145ac1231ba3af32a7f3b26ef7e8.webp"
            alt="Attorney Marianne M. Stivala"
            className="h-96 w-full rounded-lg object-cover object-top shadow-lg"
          />
        </div>
        <div>
          <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Attorney Marianne M. Stivala
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              I've been an attorney since 2001, licensed in Pennsylvania where I spent over two
              decades advising clients, solving problems and guiding individuals and businesses
              through important legal decisions.
            </p>
            <p>
              In 2025, after raising my family and embracing the “empty-nest” chapter, I relocated
              to the South Coast and expanded my practice to focus on Business Law, Real Estate, and
              Wills &amp; Estates.
            </p>
            <p>
              My approach is practical and straightforward: clear options, steady communication, and
              attention to the details that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
