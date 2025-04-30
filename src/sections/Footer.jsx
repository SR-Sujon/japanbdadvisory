import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaGlobe, FaInstagram } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6"; // Import plane icon
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Show when footer is in view
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-gray-100 text-gray-800 py-8 relative">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:flex md:justify-between font-serif">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-indigo-600">
            Japan Bangladesh Advisory
          </h3>
          <p className="text-sm mt-2">Expert Guidance, Global Reach</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">
              Resources
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#contact" className="hover:text-indigo-600">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Consulting Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">
              Support
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#faq" className="hover:text-indigo-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">
              Testimonials
            </h4>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#gallery" className="hover:text-indigo-600">
                  Client's Success Stories
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-indigo-600">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-indigo-600">
                  Our Achievements
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t pt-4 flex justify-center space-x-4">
        <a href="https://www.instagram.com/jba_advisory?igsh=bXk0aDNlOGE3NTdy" className="text-gray-500 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.facebook.com/share/1BwaUceaUH/" className="text-gray-500 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={20} />
        </a>
        <a href="https://www.linkedin.com/company/106406180/admin/dashboard/" className="text-gray-500 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={20} />
        </a>
        <a href="#home" className="text-gray-500 hover:text-indigo-600">
          <FaGlobe size={20} />
        </a>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4 font-serif">
        &copy; {new Date().getFullYear()} Japan Bangladesh Advisory. All rights
        reserved.
      </p>

      {/* Plane Button - Only visible when footer is in view */}
      <motion.button
        className="fixed bottom-12 md:bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        aria-label="Scroll to Top"
      >
        <FaPlane size={24} className="transform rotate-[-90deg]"/>
      </motion.button>
    </footer>
  );
};

export default Footer;
