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
    <div className="min-h-[100svh] bg-black text-white selection:bg-purple-500/30 font-sans relative w-full flex flex-col overflow-x-hidden">

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

        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 pt-4 pb-2 text-center mt-4">
          <span className="text-purple-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-1 block">STAY UPDATED</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Announcements</h2>
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
