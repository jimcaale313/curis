import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Curis', href: '#why-curis' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg glow-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <img src="https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/chatgpt_image_oct_11__2025__05_00_19_am-removebg-preview-ORLdM.png" alt="Curis Creative Agency Logo" className="h-10 w-auto" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#FFEB3B] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleBookCall}
              className="bg-[#FFEB3B] text-black hover:bg-[#FFEB3B]/90 glow-border font-semibold"
            >
              Book Strategy Call
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white hover:text-[#FFEB3B] transition-colors duration-300 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={handleBookCall}
              className="w-full bg-[#FFEB3B] text-black hover:bg-[#FFEB3B]/90 glow-border font-semibold"
            >
              Book Strategy Call
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;