const Navbar = () => (
  <header className="absolute inset-x-0 top-0 z-50">
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 text-white font-bold text-xl">
          LOGO
        </a>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {["Product", "Features", "Marketplace", "Company"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Log in <span aria-hidden="true">---</span>
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
