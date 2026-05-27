import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Team from '../components/Team';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Starfield from '../components/Starfield';
import FeatureLinks from '../components/FeatureLinks';
import BackingCards from '../components/BackingCards';
import PageGateways from '../components/PageGateways';
import TechnicalFiller from '../components/TechnicalFiller';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-purple-500/30 font-sans relative w-full flex flex-col">

      {/* Global Noise Overlay */}
      <div className="bg-noise fixed pointer-events-none z-50"></div>

      {/* Blueprint Grid Overlay Removed */}

      {/* Starfield */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] w-full pointer-events-none z-0 overflow-hidden">
        <Starfield />
      </div>





      {/* Main Content Container */}
      <div className="relative z-10">
<Navbar openContactModal={() => setIsContactModalOpen(true)} />
        <Hero />
        <Logos />

        <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 pt-4 pb-2 text-center mt-4">
          <span className="text-tagline-02 text-purple-400 uppercase mb-1 block">OUR LATEST</span>
          <h2 className="text-heading-03 md:text-heading-02 text-white">Announcements</h2>
        </div>

        <BackingCards />
        <TechnicalFiller />

        <FeatureLinks mode="home" />
        <TechnicalFiller />

        <PageGateways />
        <TechnicalFiller />

        <Team />
        <TechnicalFiller />

        <Footer openContactModal={() => setIsContactModalOpen(true)} />
      </div>

      {/* Global Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default Home;
