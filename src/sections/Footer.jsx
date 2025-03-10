import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:flex md:justify-between">
        <div className="mb-6 md:mb-0 font-sans">
          <h3 className="text-xl font-bold text-indigo-600">Japan Bangladesh Advisory</h3>
          <p className="text-sm mt-2">Expert Guidance, Global Success</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-sans">
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">Resources</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Insights</a></li>
              <li><a href="#" className="hover:text-indigo-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600">Consulting Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">Support</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-indigo-600">FAQs</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold text-indigo-600">Testimonials</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-indigo-600">Client's Success Stories</a></li>
              <li><a href="#" className="hover:text-indigo-600">Case Studies</a></li>
              <li><a href="#" className="hover:text-indigo-600">Our Achievements</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t pt-4 flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-indigo-600"><FaTwitter size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-indigo-600"><FaFacebookF size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-indigo-600"><FaLinkedinIn size={20} /></a>
        <a href="#" className="text-gray-500 hover:text-indigo-600"><FaGlobe size={20} /></a>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4 font-sans">&copy; {new Date().getFullYear()} Japan Bangladesh Advisory. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
