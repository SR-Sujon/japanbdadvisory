const Contact = () => {
  return (
    <section className="mt-20 text-gray-600 body-font relative">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Contact Us
      </h2>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative font-sans">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5824453862188!2d90.42093887504974!3d23.797878986952504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700205d5d5d%3A0xcaea09635c6458be!2sNotun%20Bazar%20Bus%20Stop.!5e0!3m2!1sen!2sbd!4v1741549080983!5m2!1sen!2sbd"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                29/E, Notunbazar Bus Stop, Dhaka, Bangladesh
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+88(019)16400505</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-t-2 border-gray-400 shadow-lg rounded-lg p-6 font-sans">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Lets Talk!
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Message us your queries, our representatives will get back to you soon.
          </p>
          <form action="https://formspree.io/f/mqakojka" method="POST">
            <div className="form-group my-2">
              <label htmlFor="name" className="form-label fw-bolder">
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
            <div className="form-group my-2">
              <label htmlFor="email" className="form-label fw-bolder">
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
            <div className="form-group my-2">
              <label htmlFor="message" className="form-label fw-bolder">
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
              className="mt-4 text-white font-extrabold bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-lg text-lg"
              type="submit"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Please wait for a few seconds after clicking the send button. Thank you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;