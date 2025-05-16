import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Footer from './components/Footer'
import Body from './components/Body'

export default function page() {
  return (
    <div className=''>
      <Navbar/>
      {/* <Hero/> */}
      <Body/>
      <Footer/>
    </div>
  )
}
