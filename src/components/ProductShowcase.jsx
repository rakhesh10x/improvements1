import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = ({ openContactModal }) => {
  return (
    <section className="relative w-full bg-black z-20 overflow-hidden border-t border-white/5 pt-16 pb-24 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center gap-14 relative">
        
        {/* Immersive Full-Width Cinematic Image Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center relative pointer-events-none"
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
          </div>
        </motion.div>

        {/* Base CTA: Premium Sign Up Button */}
        {openContactModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="z-30 relative mt-4"
          >
            <button 
              onClick={openContactModal}
              className="relative group overflow-hidden px-12 py-4 rounded-full border border-purple-500/30 bg-[#0c051a]/60 text-white text-[13px] uppercase tracking-[0.25em] font-bold hover:border-purple-400 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] cursor-pointer hover:scale-105 active:scale-[0.98] flex items-center gap-3"
            >
              {/* Button inner glow */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <span>Sign Up</span>
              <div className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 font-bold">&rarr;</div>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProductShowcase;
