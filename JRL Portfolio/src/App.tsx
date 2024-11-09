// import { useState } from 'react'
import Navbar from './components/Navbar'
import CTANewsletter from './components/ctaNewsletter'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Portfolio />
      <Testimonials />
      <CTANewsletter />
      <Contact />
      <Footer />
    </>
  )
}

export default App
