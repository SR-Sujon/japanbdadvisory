import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Services_VISA from './sections/Services_VISA';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => (
  <>
    <Header />

    <Routes>
      {/* One-page homepage */}
      <Route
        path="/"
        element={
          <>
            <Hero id="home"/>
            <About id="about"/>
            <Services id="services"/>
            <Gallery id="gallery"/>
            <FAQ id="faq"/>
            <Contact id="contact"/>
          </>
        }
      />

      {/* Services overview page */}
      <Route
        path="/services"
        element={<Services />}
      />

      {/* Visa-only page */}
      <Route
        path="/visa"
        element={<Services_VISA />}
      />
    </Routes>

    <Footer />
  </>
);

export default App;
