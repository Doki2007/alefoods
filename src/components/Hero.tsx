import backgroundImage from "#assets/images/background-1.jpeg"


const Hero = () => {
  return (
    <section className="relative w-full py-10 px-4 sm:px-6 lg:px-12">
      <div className="relative h-[55vh] md:h-[65vh] lg:h-[75vh] rounded-4xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-4xl"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
          <img src={backgroundImage.src} alt='Background image.' className="w-full h-auto object-cover" />
        </div>

        <div className="absolute inset-0 bg-black/40 rounded-4xl" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto font-bold">
              Peruvian nutrition that inspires your well-being.
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl">
              Discover the natural power of Peruvian ingredients in every
              product we create.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-full bg-green-600 border-2 border-green-600 px-6 py-3 font-semibold text-black cursor-pointer transition-all ease-in-out duration-250  hover:bg-green-500 hover:border-2 hover:border-green-600 hover:text-white">
                <a href="/products">
                  View Products →
                </a>
              </button>
              <button className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:text-black">
                <a href="/recipes">
                  Explore Recipes
                  </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero