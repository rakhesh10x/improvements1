import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-black z-20 overflow-hidden py-16 md:py-28 border-t border-white/5 px-4 md:px-8">
      {/* Immersive Cinematic Image Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1200px] aspect-[16/10] flex items-center justify-center relative pointer-events-none"
      >
        {/* Subtle Atmospheric float animation */}
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center relative"
        >
          {/* Hardware Render Image */}
          <img 
            src="/resolution changed hardware image.png"
            alt="LUCA Hardware Showcase"
            className="w-full h-full object-contain filter brightness-[0.95] contrast-[1.05] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
          />

          {/* Soft Vignette Blending Layer (Feathers edges softly into pure black page background) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
