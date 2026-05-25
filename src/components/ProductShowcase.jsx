import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = ({ openContactModal }) => {
  return (
    <section className="relative w-full bg-black z-20 overflow-hidden py-4 lg:py-6">
      {/* Immersive Full-Width Cinematic Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center relative"
      >
        {/* Static container - no floating movement */}
        <div className="w-full flex items-center justify-center relative">
          {/* Hardware Render Image */}
          <img 
            src="/resolution%20changed%20hardware%20image.png"
            alt="LUCA Hardware Showcase"
            className="w-full h-auto block filter brightness-[0.95] contrast-[1.05] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
          />

          {/* Soft Vignette Blending Layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20"></div>

          {/* Sign Up Button ABSOLUTELY overlayed inside the violet glow */}
          {openContactModal && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute bottom-[6%] md:bottom-[8%] left-1/2 -translate-x-1/2 z-30"
            >
              <button 
                onClick={openContactModal}
                className="relative group overflow-hidden px-10 py-3.5 rounded-full border border-purple-400/40 bg-black/60 text-white text-[12px] uppercase tracking-[0.25em] font-bold hover:border-purple-300 hover:text-white transition-all duration-500 shadow-[0_0_35px_rgba(168,85,247,0.25)] hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] cursor-pointer hover:scale-105 active:scale-[0.98] flex items-center gap-2.5 backdrop-blur-md"
              >
                {/* Button inner glow */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <span>Sign Up</span>
                <div className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 font-bold">&rarr;</div>
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
