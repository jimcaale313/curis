import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Globe, Award, HeartHandshake as Handshake, Rocket } from 'lucide-react';

const WhyCuris = () => {
  const reasons = [
    {
      icon: Brain,
      title: 'AI at the Core',
      description: 'We leverage cutting-edge AI technology to deliver smarter, faster, and more effective creative solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Thinking',
      description: 'Strategic approach that scales with your business, from startup to enterprise level.',
    },
    {
      icon: Globe,
      title: 'Somali Market Mastery',
      description: 'Deep understanding of Somali culture, business practices, and market dynamics.',
    },
    {
      icon: Award,
      title: 'Premium Production',
      description: 'World-class quality that meets international standards while respecting local values.',
    },
    {
      icon: Handshake,
      title: 'Long-Term Partnership',
      description: 'We invest in your success with ongoing support and strategic guidance.',
    },
    {
      icon: Rocket,
      title: 'We Don’t Sell Services — We Sell Results',
      description: 'Growth-Driven Strategy: We focus on real business impact, crafting strategies that generate measurable growth — not just activity.',
    },
  ];

  return (
    <section id="why-curis" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#FFEB3B] glow-text">Curis</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just another agency — we're your strategic partner in growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-[#FFEB3B]/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 bg-[#FFEB3B]/10 rounded-xl group-hover:bg-[#FFEB3B]/20 transition-colors glow-border">
                <reason.icon className="text-[#FFEB3B]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#FFEB3B] transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCuris;