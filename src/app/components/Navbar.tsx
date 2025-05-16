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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const App: React.FC<Props> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768)
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
        <header className="bg-[#c0aa7b] py-8 fixed w-full top-0 z-50">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base">
              <li>
                <Link href="#hello" className="text-dark hover:text-white transition-colors">
                  HELLO
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-dark hover:text-white transition-colors">
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-dark hover:text-white transition-colors">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-dark hover:text-white transition-colors">
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link href="#brands" className="text-dark hover:text-white transition-colors">
                  BRANDS I&apos;VE WORKED ON
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-dark hover:text-white transition-colors">
                  TESTIMONIALS
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-dark hover:text-white transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          <section id="hello" className="bg-[#A36A53] py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif text-center mb-4">
                Hello,
                <br />
                I&apos;m Boluwatife.
              </h1>
              <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] my-8"></div>

              <div
                className={`flex ${
                  isMobile ? "flex-col" : "flex-row"
                } items-center justify-center gap-8 max-w-5xl mx-auto mt-8`}
              >
                <div className={`w-full ${isMobile ? "" : "md:w-2/5"}`}>
                  <Image
                    src="/images/bolu.jpg"
                    alt="Sarah's profile"
                    width={500}
                    height={600}
                    className="rounded-sm"
                  />
                </div>

                <div className={`w-full ${isMobile ? "" : "md:w-3/5"} text-white text-center`}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">
                    I&apos;m a content writer &<br />
                    social media consultant based
                    <br />
                    in Lagos, Nigeria.
                  </h2>

                  <p className="text-lg">
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