import { motion } from "framer-motion";
import service_business from "../assets/images/services/service_business_setup.jpg";
import service_expat from "../assets/images/services/service_expat.jpg";
import service_jplang from "../assets/images/services/service_jp_language.jpg";
import service_rentacar from "../assets/images/services/service_rentacar.jpg";
import service_visa from "../assets/images/services/service_visa.jpg";

const servicesData = [
  {
    title: "Expat Management",
    description:
      "Navigating a new country can be challenging for expatriates. At JBA, we provide end-to-end expat management services, ensuring a smooth transition for foreign professionals and businesses. From relocation support and cultural orientation to administrative assistance, we help expatriates integrate seamlessly into the Bangladeshi business environment.",
    imgUrl: service_expat,
  },
  {
    title: "Japanese Language Course",
    description:
      "Effective communication is key to professional success, especially in global markets. Our Japanese language courses cater to individuals and businesses looking to enhance their language proficiency. Whether for career advancement, business communication, or cultural adaptation, our structured training programs equip learners with essential linguistic skills for thriving in Japanese corporate settings.",
    imgUrl: service_jplang,
  },
  {
    title: "VISA Process",
    description:
      "We simplify the complexities of visa applications for professionals, businesses, and expatriates. Our expert team ensures a hassle-free visa processing experience, handling documentation, approvals, and compliance with local regulations. Whether it’s work permits, business visas, or dependent visas, we streamline the process to save time and effort.",
    imgUrl: service_visa,
  },
  {
    title: "Travel & Hospitality Services",
    description:
      "Corporate travel should be convenient and stress-free. Our rent-a-car and hotel booking services provide tailored travel solutions for business professionals, expatriates, and visiting delegations. From comfortable accommodations to reliable transportation, we ensure a seamless travel experience for our clients in Bangladesh.",
    imgUrl: service_rentacar,
  },
  {
    title: "Business Setup",
    description:
      "Entering a new market requires expert guidance. We assist foreign enterprises in establishing and expanding their business operations in Bangladesh. Our services include legal compliance, financial structuring, company registration, and operational support, ensuring a smooth and efficient business setup process. With our expertise, businesses can confidently establish a strong presence in the Bangladeshi market.",
    imgUrl: service_business,
  },
];

const Services = () => {
  return (
    <section className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 mt-10 text-center overflow-x-hidden">
      {/* Title & Description */}
      <h2 className="mt-10 mb-5 text-3xl font-extrabold text-gray-900">
        Our Services
      </h2>
      <p className="lg:mx-12 md:mx-8 mb-6 md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-serif text-justify">
        At JBA, we offer hassle-free immigration support, talent acquisition,
        business setup, and corporate solutions. We ensure seamless transitions
        for expatriates, professionals, and businesses, providing expert
        guidance in the Japanese and Bangladeshi markets.
      </p>

      {/* Services List */}
      <div className="w-full scale-85 flex flex-col items-center md:py-4 py-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              transform: `translateX(${index % 2 === 0 ? "-100%" : "100%"})`,
            }}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Reduce duration
            viewport={{ once: true, margin: "-25% 0% -25% 0%" }} // Keeps trigger at center
            className={`xl:w-[90%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Service Image */}
            <img
              className="md:w-[50%] w-full md:rounded-t-lg rounded-md"
              src={service.imgUrl}
              alt={service.title}
            />
            {/* Service Description */}
            <div className="md:w-[50%] w-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg p-8 md:p-4 rounded-md">
              <h3 className="text-3xl mt-8 mb-4 font-semibold font-serif text-white dark:text-white">
                {service.title}
              </h3>
              <p className="lg:text-lg md:text-sm mt-4 mb-4 px-4 font-serif font-medium text-justify text-white">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
