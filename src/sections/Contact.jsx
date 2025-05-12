import { motion } from "framer-motion";

const Contact = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="mt-20 text-gray-600 body-font relative ">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Contact Us
      </h2>
      <p className="mt-2 lg:text-lg md:text-base text-sm text-gray-500 text-center font-serif ">
        What are you waiting for then? Let us know your queries here.
      </p>
      <div className="mt-[-48px] container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap font-serif">
        {/** Animated Map Section */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-25% 0% -25% 0%" }}
          className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative font-sans"
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9884085804006!2d90.42610499999999!3d23.783427099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79687c86865%3A0x459500ce41b72ddb!2sHossain%20Market%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sjp!4v1745228159035!5m2!1sen!2sjp"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md font-serif">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 lg:text-lg md:text-base text-sm">Level 9, Ridge Dale Complex, 75/2 Progoti Sarani, Gulshan, Dhaka 1212, Bangladesh</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed lg:text-lg md:text-base text-sm">hello@jbadvisory.org</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                WHATSAPP
              </h2>
              <p className="leading-relaxed lg:text-lg md:text-base text-sm">+8801511-400505</p>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                CONTACT
              </h2>
              <p className="leading-relaxed lg:text-lg md:text-base text-sm">+8801916-400505</p>
            </div>
          </div>
        </motion.div>

        {/** Animated Form Section */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-25% 0% -25% 0%" }}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-t-2 border-gray-400 shadow-lg rounded-lg p-6 font-sans"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-bold title-font font-serif">
            Let's Talk!
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 lg:text-lg md:text-base text-sm font-serif">
            Message us your queries, our representatives will get back to you soon.
          </p>
          <form action="https://formspree.io/f/mjkwabgg"
            method="POST">
            <div className="form-group my-2 font-serif">
              <label htmlFor="name" className="form-label fw-bolder lg:text-lg md:text-base text-sm">
                Name
              </label>
              <input
                className="form-control w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group my-2 font-serif">
              <label htmlFor="email" className="form-label fw-bolder lg:text-lg md:text-base text-sm">
                Email
              </label>
              <input
                className="form-control w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group my-2 font-serif">
              <label htmlFor="message" className="form-label fw-bolder lg:text-lg md:text-base text-sm">
                Message
              </label>
              <textarea
                className="form-control w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              className="mt-4 text-white font-extrabold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-lg lg:text-lg md:text-base text-sm"
              type="submit"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3 font-serif">
            Please wait for a few seconds after clicking the send button. Thank you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
