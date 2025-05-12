import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import ServicesVISA from './sections/ServicesVISA';
import ServicesBusinessSetup from './sections/ServicesBusinessSetup';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ServicesExpatManagement from './sections/ServicesExpatManagement';
import ServicesTravelHospitality from './sections/ServicesTravelHospitality';

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
        path="/services/visa"
        element={<ServicesVISA />}
      />

      {/* Business page */}
      <Route
        path="/services/busines-setup"
        element={<ServicesBusinessSetup />}
      />

      {/* Expat Management page */}
      <Route
        path="/services/expat-management"
        element={<ServicesExpatManagement />}
      />

      {/* Travel ^ Hospitality page */}
      <Route
        path="/services/travel-hospitality"
        element={<ServicesTravelHospitality />}
      />
    </Routes>

    <Footer />
  </>
);

export default App;
