export const metadata = {
  title: "About — SouthCoast.Legal",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold">About Marianne M. Stivala, Esq.</h1>
      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-neutral-700">
            Practicing since 2001, Marianne serves clients across the South Coast with a
            straightforward, practical approach. Clients value clear communication, realistic
            expectations, and prompt follow-through—values that guide every matter we accept.
          </p>
          <p className="mt-4 text-neutral-700">
            The firm focuses on family and probate matters, and select civil issues for individuals
            and small businesses. When a case calls for a different specialist, we help you find the
            right fit through our local professional network.
          </p>
          <p className="mt-4 text-neutral-700">
            Initial consultations are designed to understand your goals, outline options, and map
            next steps so you can move forward with confidence.
          </p>
        </div>
        <aside className="rounded-xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">At a Glance</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Admitted to practice: 2001</li>
            <li>• Focus: Family, Probate, Civil</li>
            <li>• Client-first communication</li>
            <li>• Local referrals when needed</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
