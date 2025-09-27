export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-lg font-semibold">SouthCoast.Legal</div>
            <p className="mt-2 text-neutral-700">
              Practical, client-focused counsel for Family, Probate, and Civil matters.
            </p>
          </div>
          <div className="md:text-right">
            <div className="text-neutral-600">
              This website is informational only and does not create an attorney–client relationship.
            </div>
          </div>
        </div>
        <div className="mt-6 text-neutral-500">© {new Date().getFullYear()} SouthCoast.Legal</div>
      </div>
    </footer>
  );
}
