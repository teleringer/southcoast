const cards = [
  {
    icon: "ri-family-line",
    title: "Family & Divorce",
    body: "Custody, support, divorce, and modifications—firm, compassionate representation.",
    href: "/practice-areas#family",
  },
  {
    icon: "ri-ancient-gate-line",
    title: "Probate & Estates",
    body: "Estate planning, probate, and administration with meticulous attention to detail.",
    href: "/practice-areas#probate",
  },
  {
    icon: "ri-scales-2-line",
    title: "Civil Matters",
    body: "Contracts, disputes, and general civil practice for individuals and small businesses.",
    href: "/practice-areas#civil",
  },
];

export default function Services() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3">
      {cards.map((c) => (
        <a
          key={c.title}
          href={c.href}
          className="group rounded-xl border border-neutral-200 p-6 transition hover:shadow-sm"
        >
          <i className={`${c.icon} text-3xl text-blue-700`} aria-hidden="true" />
          <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
          <p className="mt-2 text-sm text-neutral-700">{c.body}</p>
          <span className="mt-3 inline-block text-sm text-blue-700 group-hover:underline">
            Learn more →
          </span>
        </a>
      ))}
    </section>
  );
}
