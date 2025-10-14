
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Curis elevated our brand and content quality to a new level. Their AI-driven approach saved us countless hours while delivering exceptional results.",
      author: "Ahmed Hassan",
      company: "Tech Solutions Somalia",
      role: "CEO",
    },
    {
      quote: "Working with Curis was transformative. They understood our vision and brought it to life with creativity and precision that exceeded our expectations.",
      author: "Fatima Mohamed",
      company: "Hargeisa Retail Group",
      role: "Marketing Director",
    },
    {
      quote: "The team at Curis combines technical excellence with cultural understanding. They're not just service providers, they're true partners in our growth.",
      author: "Omar Ali",
      company: "Somali Enterprises Ltd",
      role: "Founder",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #FFEB3B 2px, transparent 2px)',
          backgroundSize: '50px 50px',
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
            Client <span className="text-[#FFEB3B] glow-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-700 relative"
            >
              <Quote className="absolute top-8 left-8 text-[#FFEB3B] opacity-20" size={60} />
              
              <div className="relative z-10">
                <p className="text-2xl text-gray-200 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#FFEB3B]/20 rounded-full flex items-center justify-center border-2 border-[#FFEB3B]">
                    <span className="text-[#FFEB3B] font-bold text-xl">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{testimonials[currentIndex].author}</p>
                    <p className="text-[#FFEB3B]">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-800 hover:bg-[#FFEB3B]/20 border border-gray-700 hover:border-[#FFEB3B] rounded-full transition-all duration-300"
            >
              <ChevronLeft className="text-[#FFEB3B]" size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#FFEB3B] w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-gray-800 hover:bg-[#FFEB3B]/20 border border-gray-700 hover:border-[#FFEB3B] rounded-full transition-all duration-300"
            >
              <ChevronRight className="text-[#FFEB3B]" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
  