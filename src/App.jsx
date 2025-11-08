import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ModernMarquee from './components/Marquee'
import WhyChooseVa from './components/WhyChooseVa'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Packages from './components/Packages'

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <ModernMarquee/>
        <About />
        <WhyChooseVa />
        <Services />
        <Pricing />
        <Packages />
      </div>
    </>
  )
}

export default App
