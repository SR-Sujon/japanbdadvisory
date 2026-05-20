import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import ServicesVISA from './sections/ServicesVISA';
import ServicesBusinessSetup from './sections/ServicesBusinessSetup';
import ServicesRecruitment from './sections/ServicesRecruitment';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ServicesExpatManagement from './sections/ServicesExpatManagement';
import ServicesTravelHospitality from './sections/ServicesTravelHospitality';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <>
    <ScrollToTop />
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
            <Clients id="clients"/>
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

      {/* Recruitment & Staffing page */}
      <Route
        path="/services/recruitment-staffing"
        element={<ServicesRecruitment />}
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
