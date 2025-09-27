// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center space-x-3">
            <a
              href="https://southcoast.legal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SouthCoast.Legal (opens in a new tab)"
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/66fd2c49f1a26e0a041e332c/77c6c605-05a5-4264-abe7-e902f8aad150/SCL_LOGO+copy.png?format=1500w"
                alt="SouthCoast.Legal"
                className="h-16 w-auto brightness-0 invert"
              />
            </a>
          </div>
          <p className="mb-4 max-w-md text-gray-300">
            Experienced counsel for Business Law, Real Estate, and Wills &amp; Estates across
            Florida and Pennsylvania.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="tel:+19549953306" className="hover:text-white">(954) 995-3306</a></li>
            <li><a href="mailto:southcoast@teleringer.com" className="hover:text-white">southcoast@teleringer.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-gray-400 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} SouthCoast.Legal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
