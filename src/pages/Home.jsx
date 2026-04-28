const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-primary-dark">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.deep),theme(colors.primary.dark))] opacity-30" />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:flex">
        {/* Left Side: Shopping Content */}
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Elevate Your Style with{" "}
            <span className="text-primary-medium">Luxe Collections</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-light/80">
            Discover our curated selection of premium products designed for the
            modern lifestyle. Experience quality craftsmanship and timeless
            design in every piece.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#shop"
              className="rounded-md bg-primary-medium px-6 py-3 text-sm font-bold text-primary-dark shadow-sm hover:bg-primary-light transition-all duration-300"
            >
              Shop Now
            </a>
            <a
              href="#collections"
              className="text-sm font-semibold leading-6 text-white hover:text-primary-light transition-colors"
            >
              New Arrivals <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Product Image Tiles */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="flex gap-4">
              <div className="w-44 flex-none space-y-4 pt-32">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80"
                  alt="Premium Watch"
                  className="aspect-[2/3] w-full rounded-xl bg-primary-deep/10 object-cover shadow-2xl ring-1 ring-primary-medium/20"
                />
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80"
                  alt="Headphones"
                  className="aspect-[2/3] w-full rounded-xl bg-primary-deep/10 object-cover shadow-2xl ring-1 ring-primary-medium/20"
                />
              </div>
              <div className="w-44 flex-none space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281303f?auto=format&fit=crop&q=80"
                  alt="Sunglasses"
                  className="aspect-[2/3] w-full rounded-xl bg-primary-deep/10 object-cover shadow-2xl ring-1 ring-primary-medium/20"
                />
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                  alt="Sneakers"
                  className="aspect-[2/3] w-full rounded-xl bg-primary-deep/10 object-cover shadow-2xl ring-1 ring-primary-medium/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Product Scroll */}
      <div className="mx-auto max-w-7xl py-5 overflow-hidden bg-primary-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-primary-light/60">
            Check out our top picks, sliding through for your inspiration.
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative flex overflow-hidden">
          {/* First set of products */}
          <div className="flex animate-scroll gap-8 flex-none">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-[250px] group relative cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl bg-primary-deep/10 ring-1 ring-primary-light/10">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1500000000000}?auto=format&fit=crop&q=80&w=300&h=400`}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                    alt="Product"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-white">
                    Luxe Item {item}
                  </h3>
                  <p className="text-xs text-primary-light/60">$299.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
