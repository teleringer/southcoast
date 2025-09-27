// components/layout/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-200">
      {/* Top grid (logo + blurb + contact • quick links • practice areas) */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
        {/* Brand + blurb + contact (6/12) */}
        <div className="md:col-span-6">
          {/* Logo */}
          <img
            src="/scl-footer-logo.png"  // <- replace with your actual filename in /public
            alt="South Coast Legal PLLC"
            className="h-16 w-auto"
          />

          {/* Blurb */}
          <p className="mt-4 max-w-xl text-slate-300">
            Experienced legal representation in Business Law, Real Estate,
            and Wills &amp; Estates. Licensed in Florida and Pennsylvania.
            <br />
            Invested in Your Success.
          </p>

          {/* Contact lines */}
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-center gap-3">
              <i className="ri-phone-line text-blue-300" aria-hidden="true" />
              <a href="tel:+19549953306" className="hover:text-white">(954) 995-3306</a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-map-pin-line text-blue-300" aria-hidden="true" />
              <span>Hollywood, Florida 33019</span>
            </li>
          </ul>
        </div>

        {/* Quick Links (3/12) */}
        <nav className="md:col-span-3">
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#about" className="hover:text-white">About Attorney Stivala</a></li>
            <li><a href="#services" className="hover:text-white">Legal Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </nav>

        {/* Practice Areas (3/12) */}
        <nav className="md:col-span-3">
          <h4 className="mb-4 font-semibold text-white">Practice Areas</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#services" className="hover:text-white">Business Law</a></li>
            <li><a href="#services" className="hover:text-white">Real Estate</a></li>
            <li><a href="#services" className="hover:text-white">Wills &amp; Estates</a></li>
            <li><a href="#services" className="hover:text-white">Contract Review</a></li>
            <li><a href="#services" className="hover:text-white">Entity Formation</a></li>
          </ul>
        </nav>

        {/* Divider matching screenshot */}
        <div className="md:col-span-12 mt-4 h-px bg-white/10" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>© {year} South Coast Legal PLLC. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <span>Licensed in Florida &amp; Pennsylvania</span>
          <a
            href="https://teleringer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-slate-500 underline-offset-4 hover:text-white"
          >
            Web Design by Teleringer
          </a>
        </div>
      </div>
    </footer>
  );
}
