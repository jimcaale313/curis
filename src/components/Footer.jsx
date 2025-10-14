import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const TiktokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);


const Footer = () => {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Work', href: '#' },
    { name: 'Team', href: '#team' },
  ];

  const companyLinks = [
    { name: 'About', href: '#' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/curis_creative?igsh=MWJjMGd1bWJwc2NuOQ==', 'aria-label': 'Instagram' },
    { icon: TiktokIcon, href: 'https://www.tiktok.com/@curis.creative?_t=ZM-90Uk8fGDouy&_r=1', 'aria-label': 'TikTok' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1FbfbHwqY4/?mibextid=wwXIfr', 'aria-label': 'Facebook' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #FFEB3B 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://horizons-cdn.hostinger.com/f624ca9a-1653-40ab-b3cd-768e6d1fd78e/chatgpt_image_oct_11__2025__05_00_19_am-removebg-preview-chLAw.png" alt="Curis Creative Agency Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">AI-Powered Creativity for Somali Brands</p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FFEB3B]/20 hover:border-[#FFEB3B] border border-gray-700 transition-all text-[#FFEB3B] hover:text-white">
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#FFEB3B] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#FFEB3B] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail size={18} className="text-[#FFEB3B] mt-1 flex-shrink-0" />
                <a href="mailto:info@curisagency.com" className="hover:text-[#FFEB3B] transition-colors">
                  info@curisagency.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Phone size={18} className="text-[#FFEB3B] mt-1 flex-shrink-0" />
                <a href="tel:+252639090452" className="hover:text-[#FFEB3B] transition-colors">
                  +252-63-9090452
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="text-[#FFEB3B] mt-1 flex-shrink-0" />
                <span>Hargeisa, Somaliland</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Curis Creative Agency. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤️</span> for Somali businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;