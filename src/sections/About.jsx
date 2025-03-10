import { motion } from "framer-motion";
import gif_1 from "../assets/gif/Agreement.gif";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:mt-[-16rem] grid max-w-7xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-100%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20% 0% -20% 0%" }} 
          style={{ willChange: "transform, opacity" }} // Performance boost
          className="mr-auto place-self-center lg:col-span-7"
        >
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Japan Bangladesh Advisory: Expert Guidance, Global Reach
          </h1>
          <p className="max-w-2xl mb-6 font-light font-serif text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
            Japan Bangladesh Advisory (JBA) is a premier consultancy firm dedicated to facilitating seamless 
            business operations between Japan and Bangladesh. With a strong commitment to professionalism, 
            efficiency, and cultural integration, we provide comprehensive services, including visa processing, 
            expat management, recruitment, business setup, rent-a-car services, hotel booking, and Japanese 
            language training. Our expertise in cross-border business operations ensures smooth market entry, 
            regulatory compliance, and sustainable growth for foreign companies looking to establish or expand 
            in Bangladesh.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-extrabold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to an Expert
          </a>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, transform: "translateX(100%)" }}
          whileInView={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20% 0% -20% 0%" }} 
          style={{ willChange: "transform, opacity" }} // Performance boost
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
        >
          <img src={gif_1} alt="Speak to an Expert" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
