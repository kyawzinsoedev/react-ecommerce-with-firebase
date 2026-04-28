function App() {
  return (
    <>
      {/* Hero Section - Using Palette #091413 */}
      <section className="bg-primary-deep text-white py-24 px-4 relative overflow-hidden ">
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-deep/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Elevate Your <span className="text-primary-light">Style.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for the
            modern individual.
          </p>
          <button className="bg-primary-light text-primary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-primary-light/10">
            Shop Collection
          </button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-2">
              New Arrivals
            </h2>
            <div className="h-1.5 w-20 bg-primary-medium rounded-full"></div>
          </div>
          <button className="text-primary-deep font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              {/* Product Card Placeholder */}
              <div className="h-80 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-slate-50 animate-pulse group-hover:hidden"></div>
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-primary-dark text-primary-light text-[10px] font-bold px-3 py-1 rounded-full z-10">
                  NEW
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
                <div className="h-4 w-1/4 bg-slate-50 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
