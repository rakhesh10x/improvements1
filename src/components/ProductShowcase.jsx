import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section className="relative w-full bg-black z-20 overflow-hidden border-t border-white/5 pb-12 lg:pb-20">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Column: Half-page Image Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center relative pointer-events-none"
        >
          <div className="w-full flex items-center justify-center relative p-6 md:p-12 lg:p-16">
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

        {/* Right Column: Empty (Left Black for future text) */}
        <div className="w-full h-full min-h-[100px] lg:min-h-0 bg-black"></div>

      </div>
    </section>
  );
};

export default ProductShowcase;
