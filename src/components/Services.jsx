
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Palette, Code, Video } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic content creation and community management that drives engagement and builds your brand presence across all platforms.',
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      description: 'Comprehensive brand development from logo design to complete visual identity systems that resonate with your audience.',
    },
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom-built websites and applications with cutting-edge technology, optimized for performance and user experience.',
    },
    {
      icon: Video,
      title: 'Media Production',
      description: 'Professional video production, photography, and multimedia content that tells your story with cinematic quality.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FFEB3B] glow-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive creative solutions powered by AI to elevate your brand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#FFEB3B]/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 bg-[#FFEB3B]/10 rounded-xl group-hover:bg-[#FFEB3B]/20 transition-colors glow-border">
                <service.icon className="text-[#FFEB3B]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FFEB3B] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
  