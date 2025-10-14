
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import WhyCuris from '@/components/WhyCuris';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Curis Creative Agency - AI-Powered Creativity for Somali Brands</title>
        <meta name="description" content="Strategy, design, media, and AI solutions built to scale Somali companies. Premium creative agency based in Hargeisa, Somaliland." />
      </Helmet>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar scrolled={scrolled} />
        <Hero />
        <TrustedBy />
        <Services />
        <Packages />
        <WhyCuris />
        <Mission />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
  