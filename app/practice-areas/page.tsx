export const metadata = {
  title: "Practice Areas — SouthCoast.Legal",
};

const sections = [
  {
    id: "family",
    title: "Family & Divorce",
    points: [
      "Divorce (contested and uncontested)",
      "Custody and parenting time",
      "Child and spousal support",
      "Modifications and enforcement",
      "Prenuptial & postnuptial agreements",
    ],
  },
  {
    id: "probate",
    title: "Probate & Estates",
    points: [
      "Wills and powers of attorney",
      "Probate administration",
      "Small-estate proceedings",
      "Trust coordination with local counsel",
      "Beneficiary guidance and disputes",
    ],
  },
  {
    id: "civil",
    title: "Civil & General Practice",
    points: [
      "Contracts & demand letters",
      "Simple real-estate–adjacent matters",
      "Consumer issues and small claims",
      "Business formation referrals",
      "Local counsel & co-counsel coordination",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">Practice Areas</h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        Every matter is unique. We begin with a focused consultation, scope the work, and align on
        next steps. If a matter is outside our lane, we’ll try to point you to the right resource.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="rounded-xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
