const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-16 border-t border-primary-deep/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-4 tracking-tight text-primary-light">
            LUXESTORE
          </h3>
          <p className="text-primary-light/60 text-sm leading-relaxed">
            High-quality products for your modern lifestyle. Designed with
            nature in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">
            Company
          </h4>
          <ul className="text-primary-light/70 space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                Store Locator
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">
            Support
          </h4>
          <ul className="text-primary-light/70 space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-medium transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-semibold mb-6 text-white uppercase tracking-wider text-xs">
            Newsletter
          </h4>
          <p className="text-primary-light/60 text-sm mb-4">
            Get the latest updates on new arrivals.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-primary-deep/20 text-white px-4 py-2.5 rounded-l-md w-full border border-primary-deep/50 focus:outline-none focus:border-primary-medium transition-all"
              />
              <button className="bg-primary-medium text-primary-dark px-5 py-2.5 rounded-r-md font-bold text-sm hover:bg-primary-light transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-primary-deep/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-primary-light/40 text-[10px] md:text-xs">
          &copy; 2026 LUXESTORE. Developed by Kyaw Zin Soe.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-primary-light/40 hover:text-primary-medium transition-colors"
          >
            <span className="sr-only">Facebook</span>
            {/* Icon placeholder */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
