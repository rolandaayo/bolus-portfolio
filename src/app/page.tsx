import React from 'react'
import Navbar from './components/Navbar'
// import Hero from './components/Hero'
import Footer from './components/Footer'
import Body from './components/Body'
import Brands from './components/Brands'

export default function page() {
  return (
    <div className=''>
      <Navbar/>
      {/* <Hero/> */}
      <Body/>
      <Brands/>
      <Footer/>
    </div>
  )
}
