import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SmartSpeakerHero from '../components/SmartSpeakerHero';
import OSShowcase from '../components/OSShowcase';
import EmotionalAI from '../components/EmotionalAI';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const ProductPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100svh] bg-black text-white selection:bg-purple-500/30 font-sans relative w-full flex flex-col overflow-x-hidden">
      <style>{`
        /* Scoped override to ensure no grid on product page */
        .bg-grid { display: none !important; }
        body { background-color: black !important; }
      `}</style>
      <div className="bg-noise fixed pointer-events-none z-50"></div>

      
      <div className="absolute top-0 left-0 right-0 h-[800px] w-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[20%] bg-purple-900/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />
        
        <SmartSpeakerHero />
        
        <OSShowcase />
        
        <EmotionalAI />

        {/* Technical Specs Section */}
        <section className="py-24 bg-[#050505] border-t border-white/5">
          <div className="max-w-[1360px] mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { label: "Display", value: "Circular High-Res Touch Display" },
                  { label: "OS", value: "LUCA-OS V-1.0 (LIBRE Based)" },
                  { label: "Compute", value: "Specialized AI Silicon (NVIDIA Optimized)" },
                  { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.2" },
                  { label: "Audio", value: "High-Fidelity Mono / Expandable" },
                  { label: "Language", value: "Native Telugu Tokenizer Integrated" },
                  { label: "Privacy", value: "100% On-Device Processing" },
                  { label: "Battery", value: "Integrated Portable Power" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Footer minimal={true} openContactModal={() => setIsContactModalOpen(true)} />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default ProductPage;
