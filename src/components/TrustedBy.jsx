
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = [
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/311f7d642daec6575d6a583c0bb95689.jpg', alt: 'Off-To Cafe Logo' },
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/88b18f8171bdff2134d33d820198e4e1.png', alt: 'Green Optics Logo' },
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/89cb0b8b4f560ba894bd2ae1e8e4bf5b.jpg', alt: 'Care Counseling Services Logo' },
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/311f7d642daec6575d6a583c0bb95689.jpg', alt: 'Off-To Cafe Logo' },
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/88b18f8171bdff2134d33d820198e4e1.png', alt: 'Green Optics Logo' },
    { src: 'https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/89cb0b8b4f560ba894bd2ae1e8e4bf5b.jpg', alt: 'Care Counseling Services Logo' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg font-medium">Trusted by Leading Somali Enterprises</p>
        </motion.div>

        <div className="relative overflow-hidden group">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 25,
                ease: 'linear',
              },
            }}
            className="flex"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-32 mx-6 bg-gray-800/50 rounded-lg flex items-center justify-center p-4 border border-gray-700 hover:border-[#FFEB3B]/50 transition-colors"
              >
                <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
