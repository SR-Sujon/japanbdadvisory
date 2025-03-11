import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero_img_1 from "../assets/images/hero/jp_otera_1.jpg";
import hero_img_2 from "../assets/images/hero/jp_road_1.jpg";
import hero_img_3 from "../assets/images/hero/jp_hana_1.jpg";
import hero_img_4 from "../assets/images/hero/jp_fujisan_2.jpg";
import hero_img_5 from "../assets/images/hero/jp_cuisine_1.jpg";
import hero_img_6 from "../assets/images/hero/bd_forest_1.jpg";
import hero_img_7 from "../assets/images/hero/bd_lalbagh_1.jpg";
import hero_img_8 from "../assets/images/hero/bd_coxs_bazar_1.jpg";
import hero_img_9 from "../assets/images/hero/bd_sylhet_1.jpg";
import hero_img_10 from "../assets/images/hero/bd_kaptai_1.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
    className: "slider-container",
    lazyLoad: 'ondemand', // Lazy load images
    fade: true, // Smooth fade transition between slides
  };

  const slides = [
    // Japan Slides
    {
      image: hero_img_1,
      title: "Discover Japan's Ancient Temples",
      subtitle:
        "Immerse yourself in the rich culture of Japan with a visit to its historical temples. Discover tranquility and spiritual beauty in every corner.",
      buttonText: "Start Your Journey",
    },
    {
      image: hero_img_2,
      title: "Experience Vibrant Tokyo",
      subtitle:
        "From neon lights to bustling streets, Tokyo offers an unforgettable adventure. Explore its modern wonders and cultural delights.",
      buttonText: "Plan Your Trip",
    },
    {
      image: hero_img_3,
      title: "Witness the Cherry Blossom Season",
      subtitle:
        "Japan's cherry blossoms are world-renowned for their beauty. Visit during spring and witness nature's colorful spectacle.",
      buttonText: "Book Now",
    },
    {
      image: hero_img_4, 
      title: "Explore Mount Fuji",
      subtitle:
        "Climb or admire Mount Fuji, Japan’s most iconic mountain. The views and experiences around this majestic peak are unparalleled.",
      buttonText: "Start Your Adventure",
    },
    {
      image: hero_img_5, // Reusing images or can be swapped with other images for variety
      title: "Savor Authentic Japanese Cuisine",
      subtitle:
        "Delight in the flavors of Japan. Taste sushi, ramen, tempura, and other traditional dishes while discovering new culinary experiences.",
      buttonText: "Taste Japan",
    },
  
    // Bangladesh Slides
    {
      image: hero_img_6, // Reusing images or can be swapped with other images for variety
      title: "Explore the Sundarbans",
      subtitle:
        "The Sundarbans is a UNESCO World Heritage Site and home to Bengal tigers and countless species of wildlife. Explore this natural wonder.",
      buttonText: "Start Your Adventure",
    },
    {
      image: hero_img_7, // Reusing images or can be swapped with other images for variety
      title: "Discover Dhaka's Rich History",
      subtitle:
        "Dhaka, the capital of Bangladesh, is full of history. From ancient forts to vibrant markets, there is so much to explore.",
      buttonText: "Visit Dhaka",
    },
    {
      image: hero_img_8, // Reusing images or can be swapped with other images for variety
      title: "Relax at Cox's Bazar",
      subtitle:
        "Cox's Bazar, the longest natural sea beach in the world, offers a perfect getaway to relax and enjoy the beauty of the sea.",
      buttonText: "Plan Your Beach Vacation",
    },
    {
      image: hero_img_9, // Reusing images or can be swapped with other images for variety
      title: "Admire the Tea Gardens of Sylhet",
      subtitle:
        "Sylhet is known for its lush green tea gardens. Visit this beautiful region to experience its serene beauty and rich culture.",
      buttonText: "Explore Sylhet",
    },
    {
      image: hero_img_10, // Reusing images or can be swapped with other images for variety
      title: "Experience the Culture of Chittagong",
      subtitle:
        "Chittagong offers a unique mix of natural beauty and vibrant culture. From the hills to the sea, it is a hidden gem in Bangladesh.",
      buttonText: "Start Your Journey",
    },
  ];

  useEffect(() => {
    const imagePaths = [
      hero_img_1,
      hero_img_2,
      hero_img_3,
      hero_img_4,
      hero_img_5,
      hero_img_6,
      hero_img_7,
      hero_img_8,
      hero_img_9,
      hero_img_10,
    ];

    preloadImages(imagePaths);
  }, []);

  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

    // Toggle menu visibility
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="relative h-[500px] bg-cover bg-center transition-all duration-1000">
            <div
              style={{ backgroundImage: `url(${slide.image})` }}
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4 z-10">
              <h1 className="text-4xl font-bold font-serif mb-4">{slide.title}</h1>
              <p className="text-lg mb-6 font-serif font-semibold">{slide.subtitle}</p>
              <button className="bg-blue-600 text-white font-extrabold px-6 py-3 rounded-md hover:bg-blue-700">
                <a href="#contact">{slide.buttonText}</a>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
