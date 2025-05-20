import Image from "next/image"

export default function BrandExperience() {
  // Brand logos organized in rows
  const brandRows = [
    // Row 1
    [
      { name: "Reeses", image: "/images/brand-1.avif", placeholder: false },
      { name: "Cutler", image: "/images/brand-2.avif", placeholder: false },
      { name: "SallyHansen", image: "/images/brand-3.avif", placeholder: false },
      { name: "Beck", image: "/images/brand-4.avif", placeholder: false },
    ],
    // Row 2
    [
      { name: "MolsonCanadian", image: "/images/brand-5.avif", placeholder: false },
      { name: "AlbertaPure", image: "/images/brand-6.avif", placeholder: false },
      { name: "GE", image: "/images/brand-7.avif", placeholder: false },
      { name: "GreatGulf", image: "/images/brand-8.avif", placeholder: false },
    ],
    // Row 3
    [
      { name: "Schwarzkopf", image: "/images/brand-9.avif.png", placeholder: false },
      { name: "EarthLuxe", image: "/images/brand-10.avif", placeholder: false },
      { name: "YOSox", image: "/images/brand-11.avif", placeholder: false },
      { name: "Chrysler", image: "/images/brand-12.avif", placeholder: false },
    ],
  ]

  return (
    <div className="bg-brand-brown text-white py-16 px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] mb-12"></div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-center mb-8">Brand Experience</h1>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg mb-2">
            In my years on both agency and client side I have worked with noteworthy brands in various categories.
          </p>
          <p className="text-lg">I have versatile category experience on both the B2C & B2B side.</p>
        </div>

        <div className="space-y-16">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {row.map((brand, brandIndex) => (
                <div key={brandIndex} className="flex items-center justify-center h-16">
                  {brand.placeholder ? (
                    <div className="bg-white/10 w-full h-full flex items-center justify-center rounded">
                      <p className="text-xs text-white/70">{brand.name} logo placeholder</p>
                    </div>
                  ) : (
                    <Image
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      width={120}
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/30">
        
                  <h2 className="text-5xl md:text-6xl font-light text-center mb-8">Contact Me</h2>
                  <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] mb-12"></div>
                  <form className="max-w-2xl mx-auto">
                    <div className="space-y-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/10 rounded border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/10 rounded border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-3 bg-white/10 rounded border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                        ></textarea>
                      </div>
                      <div>
                        <button type="submit" className="w-full px-6 py-3 bg-[#c0aa7b] text-white rounded hover:bg-[#a89162] transition-colors">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>        </div>
      </div>
    </div>
  )
}