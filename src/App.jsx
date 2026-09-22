import { useState } from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Skills from './sections/Skills'
import Footer from './Footer'
import Services from './sections/Services'
import { Analytics } from "@vercel/analytics/react"

function App() {
 

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Analytics/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
