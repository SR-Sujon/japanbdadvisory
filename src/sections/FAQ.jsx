const FAQ = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 mt-20">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900 text-center">FAQs</h2>
      <p className="mb-12 text-lg text-gray-500 text-center">Here are some frequently asked questions about our services and operations.</p>
      <div className="w-full lg:ml-4">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">What services do you offer?</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">We offer a range of services to facilitate your business and travel between Japan and Bangladesh, including immigration consultancy, business advisory, and market analysis.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">How do I start my consultation?</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">To begin a consultation, simply contact us through our website or call us to schedule an appointment. We will assign you a specialist to assist with your needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Can you help with visa applications?</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Yes, we specialize in providing assistance with visa applications, including for work, study, and tourism, helping you navigate both Japanese and Bangladeshi immigration processes.</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">How can your advisory services help my business?</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Our advisory services provide expert insights into the business landscape of both Japan and Bangladesh, offering tailored strategies to enhance your operations and expand into new markets.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Do you provide market research services?</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Yes, we offer market research services to help you understand the demand, competition, and potential of your product or service in the Japanese and Bangladeshi markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;