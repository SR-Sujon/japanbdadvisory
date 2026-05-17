import React from 'react';
import '../styles/Clients.css';
import clients_adventure from '../assets/images/clients/clients_adventure.png';
import clients_ajinomoto from '../assets/images/clients/clients_ajinomoto.png';
import clients_dreamonline from '../assets/images/clients/clients_dreamonline.png';
import clients_ultra_x from '../assets/images/clients/clients_ultra_x.png';

const clientLogos = [
  { name: 'Adventure', logo: clients_adventure },
  { name: 'Ajinomoto', logo: clients_ajinomoto },
  { name: 'Dream Online', logo: clients_dreamonline },
  { name: 'Ultra X', logo: clients_ultra_x },
];

const Clients = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Our Clients
        </h2>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="flex animate-scroll-rtl">
            {duplicatedLogos.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '200px', height: '100px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
