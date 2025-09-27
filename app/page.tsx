import HeroVideo from "@/components/HeroVideo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroVideo src="https://gumlet.tv/watch/68d80d84c997e2c3ed515ab1/">
        <div>
          <h1 className="text-3xl font-semibold md:text-5xl">Marianne M. Stivala, Esq.</h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg">
            Since 2001 • Client-focused representation on the South Coast.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/practice-areas"
              className="rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white"
            >
              View Practice Areas
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </HeroVideo>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold">Practical. Responsive. Local.</h2>
        <p className="mt-4 max-w-3xl text-neutral-700">
          SouthCoast.Legal delivers clear counsel and steady advocacy. We help you understand your
          options, set a strategy, and move forward with confidence.
        </p>
      </section>

      {/* Quick cards */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3">
        {[
          {
            title: "Family & Divorce",
            body:
              "Custody, support, divorce, and modifications—firm, compassionate representation.",
            href: "/practice-areas#family",
          },
          {
            title: "Probate & Estates",
            body:
              "Estate planning, probate, and administration with meticulous attention to detail.",
            href: "/practice-areas#probate",
          },
          {
            title: "Civil Matters",
            body:
              "Contracts, disputes, and general civil practice for individuals and small businesses.",
            href: "/practice-areas#civil",
          },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-xl border border-neutral-200 p-6 transition hover:shadow-sm"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{c.body}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
