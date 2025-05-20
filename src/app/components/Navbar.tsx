// src/app/components/Navbar.tsx
"use client"

import { Inter, DM_Serif_Display } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

// Font setup
const serif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

type Props = object;

const App: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>Sarah McCain | Content Writer & Social Media Consultant</title>
        <meta name="description" content="Professional content writer and social media consultant based in Toronto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen flex flex-col ${inter.variable} ${serif.variable}`}>

        <header className="bg-[#c0aa7b] py-4 md:py-8 fixed w-full top-0 z-50">
          <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <ul className={`flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-8 text-sm md:text-base
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'block fixed left-0 right-0 top-[4.5rem] bg-[#c0aa7b] p-6 space-y-6 border-t border-[#a57b63]' : 'hidden md:flex'}`}>
                <li className="text-center md:text-left">
                  <Link href="#hello" className="text-dark hover:text-white transition-colors block">
                    HELLO
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link href="#about" className="text-dark hover:text-white transition-colors block">
                    ABOUT ME
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link href="#skills" className="text-dark hover:text-white transition-colors block">
                    SKILLS
                  </Link>
                </li>
                <li className="text-center md:text-left">
                  <Link href="#portfolio" className="text-dark hover:text-white transition-colors block">
                    PORTFOLIO
                  </Link>
                </li>
              </ul>

              <div className="animate-spin md:order-last">
                <button className="bg-[#A36A53] hover:bg-[#8b5744] text-white rounded-full p-3 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-black hover:text-white transition-colors"
                >
                  {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow mt-20 md:mt-24">
          <section id="hello" className="bg-[#A36A53] py-12 md:py-24">
            <div className="container mx-auto px-4">

              <h1 className="text-white text-4xl md:text-7xl lg:text-8xl font-serif text-center mb-4">
                Hello,
                <br />
                I&apos;m Boluwatife.
              </h1>

              <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] my-6 md:my-8"></div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-5xl mx-auto mt-6 md:mt-8">
                <div className="w-full md:w-2/5">
                  <Image
                    src="/images/bolu.jpg"
                    alt="Sarah's profile"
                    width={500}
                    height={600}
                    className="rounded-sm w-full"
                  />
                </div>

                <div className="w-full md:w-3/5 text-white text-center">
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">
                    I&apos;m a content writer &<br />
                    social media consultant based
                    <br />
                    in Lagos, Nigeria.
                  </h2>

                  <p className="text-base md:text-lg px-4 md:px-0">
                    For the last decade I have produced strategic digital content for businesses and brands who want to
                    cultivate communities online. I began my career in journalism and have since expanded my expertise
                    to include social media strategy, content creation, and brand development.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* <footer className="bg-[#c0aa7b] py-4 text-center text-sm text-dark">
          <div className="container mx-auto px-4">© 2025 by Boluwatife.</div>
        </footer>

        <div className="fixed bottom-6 right-6">
          <button className="bg-[#c0aa7b] hover:bg-[#a57b63] transition-colors p-3 rounded-full">
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
        </div> */}
      </div>
    </>
  )
}

export default App