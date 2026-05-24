import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="relative w-full bg-black z-20 overflow-hidden border-t border-white/5">
      {/* Immersive Cinematic Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-center relative pointer-events-none"
      >
        {/* Static container - no floating movement */}
        <div 
          className="w-full flex items-center justify-center relative"
        >
          {/* Hardware Render Image */}
          <img 
            src="/resolution%20changed%20hardware%20image.png"
            alt="LUCA Hardware Showcase"
            className="w-full h-auto block filter brightness-[0.95] contrast-[1.05] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
          />

          {/* Soft Vignette Blending Layer (Feathers edges softly into pure black page background) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
