
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #FFEB3B 25%, transparent 25%, transparent 75%, #FFEB3B 75%, #FFEB3B), linear-gradient(45deg, #FFEB3B 25%, transparent 25%, transparent 75%, #FFEB3B 75%, #FFEB3B)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FFEB3B] glow-text">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#FFEB3B]/50 transition-all duration-300"
          >
            <div className="mb-6 inline-block p-4 bg-[#FFEB3B]/10 rounded-xl glow-border">
              <Target className="text-[#FFEB3B]" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFEB3B]">Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering Somali businesses with cutting-edge AI solutions to compete globally while preserving cultural values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#FFEB3B]/50 transition-all duration-300"
          >
            <div className="mb-6 inline-block p-4 bg-[#FFEB3B]/10 rounded-xl glow-border">
              <Eye className="text-[#FFEB3B]" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFEB3B]">Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading AI-powered creative agency bridging traditional Somali commerce with modern digital innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#FFEB3B]/50 transition-all duration-300"
          >
            <div className="mb-6 inline-block p-4 bg-[#FFEB3B]/10 rounded-xl glow-border">
              <Heart className="text-[#FFEB3B]" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFEB3B]">Values</h3>
            <p className="text-gray-300 leading-relaxed">
              Authentic Somali entrepreneurship + world-class technology + unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
  