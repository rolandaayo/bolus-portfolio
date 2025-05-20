import React from 'react'
import Image from "next/image"
import { Check } from "lucide-react"

const projects = [
  {
    name: "Earth Luxe",
    image: "/images/project-1.avif?height=400&width=600",
    imageAlt: "Earth Luxe essential oils and natural products",
    title: "Social Strategy",
    items: [
      "Crafted brand story for launch",
      "Setup and grew Instagram account from 0 to 10k followers",
      "Published copy, content and implemented paid media",
      "Executed a full scale launch event with key Toronto media & influencers",
      "Ongoing community management"
    ]
  },
  {
    name: "Yo Sox",
    image: "/images/project-2.avif?height=400&width=600",
    imageAlt: "Yo Sox colorful socks",
    title: "Content & Community",
    items: [
      "Marketing lead on new product launches and content strategy for e-commerce website",
      "Set up email marketing purchase funnel & e-blast calendar",
      "Sourced, recruited and managed brand ambassadors & programs",
      "Oversaw brand partnerships"
    ]
  },
  {
    name: "Ivy Rhode",
    image: "/images/project-1.avif?height=400&width=600",
    imageAlt: "Ivy Rhode jewelry",
    title: "Digital Footprint",
    items: [
      "Designed & built Ivy Rhodes launch website",
      "Crafted brand story & founder biography",
      "Wrote product descriptions & web copy",
      "Provided strategic recommendations for improving Instagram account"
    ]
  },
  {
    name: "Project Four",
    image: "/images/project-4.avif?height=400&width=600",
    imageAlt: "Project Four showcase",
    title: "Brand Development",
    items: [
      "Created comprehensive brand guidelines",
      "Developed marketing strategy",
      "Implemented social media campaigns",
      "Managed content creation"
    ]
  },
  {
    name: "Project Five",
    image: "/images/project-2.avif?height=400&width=600",
    imageAlt: "Project Five showcase",
    title: "Digital Marketing",
    items: [
      "Executed PPC campaigns",
      "Optimized SEO strategy",
      "Managed social media presence",
      "Created content calendar"
    ]
  },
  {
    name: "Project Six",
    image: "/images/project-4.avif?height=400&width=600",
    imageAlt: "Project Six showcase",
    title: "Creative Direction",
    items: [
      "Led creative team",
      "Developed visual identity",
      "Managed product photoshoots",
      "Created marketing materials"
    ]
  }
]

export default function Body() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] mb-12"></div>

      <div className="min-h-screen bg-gradient-to-br from-[#A36A53]  p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-3xl">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt} 
                  fill
                  className="object-cover hover:opacity-90 transition-opacity duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white text-center py-3 sm:py-4 px-4 sm:px-5 w-32 sm:w-36 mx-auto -mt-6 relative z-10 rounded-full shadow-lg">
                  <h3 className="text-base sm:text-lg font-semibold">{project.name}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 text-black pt-8 sm:pt-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">{project.title}</h2>
                <ul className="space-y-4 sm:space-y-5">
                  {project.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start group">
                      <Check className="h-5 sm:h-6 w-5 sm:w-6 text-[#A36A53] mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm sm:text-base text-slate-700 group-hover:text-slate-900 transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}