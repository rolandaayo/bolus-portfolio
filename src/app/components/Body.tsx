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
    image: "/images/project-3.avif?height=400&width=600",
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
    image: "/images/project-3.avif?height=400&width=600",
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

      <div className="min-h-screen bg-amber-800/20 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-0">
          {projects.map((project, index) => (
            <div key={index} className="bg-white">
              <div className="relative h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <div className="bg-slate-700 text-white text-center py-3 px-4 w-32 mx-auto -mt-5 relative z-10">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                </div>
              </div>
              <div className="p-6 text-black pt-8">
                <h2 className="text-2xl font-bold text-center mb-6">{project.title}</h2>
                <ul className="space-y-4">
                  {project.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-black mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
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