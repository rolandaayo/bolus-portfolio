import React from 'react'

export default function Hero() {
    const services = [
      {
        title: "Social Strategy",
        description: "Curious about how to set yourself up on social? I'll lay the foundation by providing tools & best practices you'll need to successfully run your social accounts. I provide all the support & expertise required for a turnkey social media solution. We'll start by establishing a strong strategy with a follow up plan for how best to use social to support your business goals.",
        forClient: "Great for: clients who want initial launch support & strategic consulting."
      },
      {
        title: "Content Creation",
        description: "Looking for engaging content that resonates with your audience? I'll create compelling content that aligns with your brand voice and business objectives. From eye-catching visuals to engaging copy, I'll ensure your social media presence stands out.",
        forClient: "Great for: businesses seeking professional content creation and brand consistency."
      },
      {
        title: "Community Management",
        description: "Need help managing your social media community? I'll handle day-to-day engagement, respond to comments and messages, and build meaningful relationships with your followers. I'll ensure your brand maintains an active and positive presence online.",
        forClient: "Great for: brands wanting to build and maintain strong community engagement."
      },
      {
        title: "Analytics & Reporting",
        description: "Want to understand your social media performance? I'll track key metrics, analyze trends, and provide detailed reports on your social media success. I'll help you understand what's working and where there's room for improvement.",
        forClient: "Great for: data-driven businesses seeking measurable results."
      },
      {
        title: "Social Media Training",
        description: "Want to manage your own social media but need guidance? I'll provide comprehensive training sessions tailored to your needs. Learn best practices, content creation tips, and strategic approaches to social media management.",
        forClient: "Great for: teams looking to build internal social media capabilities."
      }
    ]

    return (
      <div className="py-16">
        <div className="w-full max-w-4xl mx-auto h-1 bg-[#c0aa7b] mb-12"></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Skills & Services</h2>
          </div>

          <div className='grid gap-12 mx-auto w-[70%]'>
            {services.map((service, index) => (
              <div key={index} className='flex flex-col items-center md:flex-row gap-8 rounded-lg p-8 '>
                <div className='md:w-1/4'>
                  <h2 className='text-2xl font-semibold text-white mb-4'>{service.title}</h2>
                </div>
                <div className='md:w-3/4'>
                  <p className='text-white mb-4 text-20px font-light leading-[24px]'>
                    {service.description}
                  </p>
                  <p className='text-sm font-medium text-white'>{service.forClient}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}