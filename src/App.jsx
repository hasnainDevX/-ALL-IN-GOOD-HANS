import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ModernMarquee from './components/Marquee'
import WhyChooseVa from './components/WhyChooseVa'
import Services from './components/Services'
import SignsSection from './components/SignsSection'
import Pricing from './components/Pricing'
import Packages from './components/Packages'
import Getstarted from './components/Getstarted'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import ScrollToTop from './components/ScrollToTop' // Add this import

function App() {
  return (
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <ModernMarquee/>
              <About />
              <SignsSection />
              <WhyChooseVa />
              <Services />
              <Pricing />
              <Packages />
              <Getstarted/>
              <Contact />
              <Footer/>
              <ScrollToTop /> {/* Add this component */}
            </>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App