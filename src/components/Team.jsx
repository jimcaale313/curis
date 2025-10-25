import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const team = [
    {
      name: 'Shaafi Abokor',
      role: 'Chief Executive Officer (CEO)',
      description: 'Visionary leader driving strategic growth and innovation.',
      image: "https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/056caa6ce4d46fe45c507e1bd4efa969.jpg"
    },
    {
      name: 'Jimale M. Osman',
      role: 'Chief Financial Officer (CFO) & Lead Developer',
      description: 'Financial strategist and technical architect.',
      image: "https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/whatsapp-image-2025-09-16-at-9.06.31-am-kiamP.jpeg"
    },
    {
      name: 'Zekeriye Mohamed',
      role: 'Chief Operating Officer (COO) & Creative Director',
      description: 'Operations excellence and creative vision.',
      image: "https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/6aafb5e078c38833c0ad543efbd1968c.jpg"
    },
    {
      name: 'Mahad Egal',
      role: 'Head of Production',
      description: 'Delivering world-class production quality.',
      image: "https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/e5be8e0823330e542946493c11891b03.jpg"
    },
    {
      name: 'Sacad Colhaye',
      role: 'Chief Technology Officer (CTO)',
      description: 'Leading our tech frontier with cutting-edge solutions.',
      image: "https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/6b4a3fd1c2fe491ec156dd73bac3a659.jpg"
    },
  ];

  return (
    <section id="team" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership <span className="text-[#FFEB3B] glow-text">Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the experts driving innovation at Curis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-800">
                {member.image ? (
                  <img className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" alt={member.name} src={member.image} />
                ) : (
                  <div className="w-full h-80 flex items-center justify-center">
                    <span className="text-gray-500">Image Coming Soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFEB3B] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#FFEB3B] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;