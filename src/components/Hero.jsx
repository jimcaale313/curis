import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
const Hero = () => {
  const handleBookCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handlePackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }} transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse'
      }} className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #FFEB3B 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFEB3B]/10 border border-[#FFEB3B]/30 rounded-full text-[#FFEB3B] text-sm font-medium glow-border">
              <Sparkles size={16} />
              AI-Powered Creative Agency
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Strategy, design, media, and AI — </span>
            <span className="text-[#FFEB3B] glow-text">built to scale Somali companies.</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empowering Somali businesses with cutting-edge AI solutions to compete globally while preserving cultural values.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleBookCall} size="lg" className="bg-[#FFEB3B] text-black hover:bg-[#FFEB3B]/90 glow-border font-semibold text-lg px-8 py-6 group">
              Book Strategy Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button onClick={handlePackages} size="lg" variant="outline" className="border-[#FFEB3B] text-[#FFEB3B] hover:bg-[#FFEB3B]/10 font-semibold text-lg px-8 py-6">
              See Our Packages
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1
        }} className="mt-16">
            <img className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl glow-border" alt="Curis Creative Agency showcase" src="https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/chatgpt-image-oct-11-2025-05_04_14-am-JeCIZ.png" />
          </motion.div>
        </div>
      </div>

      <motion.div animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#FFEB3B] rounded-full flex items-start justify-center p-2">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 bg-[#FFEB3B] rounded-full" />
        </div>
      </motion.div>
    </section>;
};
export default Hero;