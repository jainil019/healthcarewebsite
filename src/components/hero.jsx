import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Healthcare"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[600px] items-center ml-30">

        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">

          <div className="max-w-2xl text-black">

           

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#910795]">  Trust  </span>Yours
              <br />
              Health to Experts
            </h1>

           

            <button className="mt-8 rounded-lg bg-health-green px-6 py-3 font-semibold text-white transition hover:bg-green-700 active:scale-95">
              contact us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;