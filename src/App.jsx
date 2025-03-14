import React from 'react'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import FAQ from './sections/FAQ.jsx'
import Services from './sections/Services.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Gallery from './sections/Gallery.jsx'
const App = () => {
  return (
    <div className='app overflow-hidden'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App