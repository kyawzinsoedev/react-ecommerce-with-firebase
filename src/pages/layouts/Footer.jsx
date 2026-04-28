const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">LUXESTORE</h3>
          <p className="text-gray-400 text-sm">
            High-quality products for your modern lifestyle.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-white text-navy px-4 py-2 rounded-r-md font-bold text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-gray-500 text-xs">
        &copy; 2026 LUXESTORE. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
