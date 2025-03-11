import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gallery_business from "../assets/images/gallery/gallery_business.jpg";
import gallery_networking from "../assets/images/gallery/gallery_networking.jpg";
import gallery_meeting from "../assets/images/gallery/gallery_meeting.jpg";
import gallery_technology from "../assets/images/gallery/gallery_technology.jpg";
import gallery_consulting from "../assets/images/gallery/gallery_consulting.jpg";
import gallery_teamwork from "../assets/images/gallery/gallery_teamwork.jpg";
import gallery_global from "../assets/images/gallery/gallery_global.jpg";
import gallery_marketing from "../assets/images/gallery/gallery_marketing.jpg";
import gallery_strategy from "../assets/images/gallery/gallery_strategy.jpg";

const galleryImages = [
  { src: gallery_networking, label: "Networking" },
  { src: gallery_meeting, label: "Meeting" },
  { src: gallery_technology, label: "Technology" },
  { src: gallery_consulting, label: "Consulting" },
  { src: gallery_teamwork, label: "Teamwork" },
  { src: gallery_global, label: "Global Collaboration" },
  { src: gallery_marketing, label: "Marketing" },
  { src: gallery_strategy, label: "Strategy" },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true); // Trigger animation
          observer.disconnect(); // Stop observing after first animation
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="gallery" className="bg-gray-100 font-serif" ref={containerRef}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <p className="mt-[-20px] mb-12 lg:text-lg md:text-base text-sm text-gray-500 text-center font-serif">
          Explore moments from our initiatives, collaborations, and events
          bridging Japan and Bangladesh.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large Item */}
          <motion.div
            className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src={gallery_business}
              alt="Business Expansion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">
                  Business Expansion
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Smaller Items */}
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              initial={{ scale: 0.25, opacity: 0 }}
              animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
              transition={{
                duration: 1.25,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    {image.label}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
