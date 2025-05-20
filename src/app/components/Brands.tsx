import Image from "next/image"

export default function BrandExperience() {
  const brandRows = [
    [
      { name: "Reeses", image: "/images/brand-1.avif", placeholder: false },
      { name: "Cutler", image: "/images/brand-2.avif", placeholder: false },
      { name: "SallyHansen", image: "/images/brand-3.avif", placeholder: false },
      { name: "Beck", image: "/images/brand-4.avif", placeholder: false },
    ],
    [
      { name: "MolsonCanadian", image: "/images/brand-5.avif", placeholder: false },
      { name: "AlbertaPure", image: "/images/brand-6.avif", placeholder: false },
      { name: "GE", image: "/images/brand-7.avif", placeholder: false },
      { name: "GreatGulf", image: "/images/brand-8.avif", placeholder: false },
    ],
    [
      { name: "Schwarzkopf", image: "/images/brand-9.avif", placeholder: false },
      { name: "EarthLuxe", image: "/images/brand-10.avif", placeholder: false },
      { name: "YOSox", image: "/images/brand-11.avif", placeholder: false },
      { name: "Chrysler", image: "/images/brand-12.avif", placeholder: false },
    ],
  ]

  return (
    <div className="bg-gradient-to-b from-brand-brown to-[#2c2418] text-white py-16 sm:py-24 px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#c0aa7b] to-transparent mb-12 sm:mb-16"></div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-center mb-8 sm:mb-10 tracking-wider animate-fade-in">Brand Experience</h1>

        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto px-4">
          <p className="text-lg sm:text-xl mb-4 leading-relaxed text-white/90">
            In my years on both agency and client side I have worked with noteworthy brands in various categories.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90">I have versatile category experience on both the B2C & B2B side.</p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
              {row.map((brand, brandIndex) => (
                <div key={brandIndex} className="group flex items-center justify-center h-16 sm:h-20 transition-transform hover:scale-105">
                  {brand.placeholder ? (
                    <div className="bg-white/10 backdrop-blur-sm w-full h-full flex items-center justify-center rounded-lg shadow-lg">
                      <p className="text-sm text-white/70">{brand.name} logo placeholder</p>
                    </div>
                  ) : (
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      width={140}
                      height={70}
                      className="object-contain w-full h-full filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 pt-12 border-t border-white/20">
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-light text-center mb-8 sm:mb-10 tracking-wider">Contact Me</h2>
                  <div className="w-full max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#c0aa7b] to-transparent mb-12 sm:mb-16"></div>
                  <form className="max-w-2xl mx-auto px-4">
                    <div className="space-y-6 sm:space-y-8">
                      <div className="transform transition-transform hover:scale-[1.02]">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c0aa7b] focus:ring-2 focus:ring-[#c0aa7b]/20 transition-all duration-300 text-base"
                        />
                      </div>
                      <div className="transform transition-transform hover:scale-[1.02]">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c0aa7b] focus:ring-2 focus:ring-[#c0aa7b]/20 transition-all duration-300 text-base"
                        />
                      </div>
                      <div className="transform transition-transform hover:scale-[1.02]">
                        <textarea
                          placeholder="Your Message"
                          rows={5}
                          className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c0aa7b] focus:ring-2 focus:ring-[#c0aa7b]/20 transition-all duration-300 text-base resize-none"
                        ></textarea>
                      </div>
                      <div>
                        <button 
                          type="submit" 
                          className="w-full px-8 py-4 bg-gradient-to-r from-[#c0aa7b] to-[#a89162] text-white rounded-lg hover:from-[#a89162] hover:to-[#8f7a4f] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c0aa7b]/20 text-lg font-medium"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
        </div>
      </div>
    </div>
  )
}