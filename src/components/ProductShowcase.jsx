import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <section className="relative pt-16 pb-24 bg-black z-20 overflow-hidden px-6 border-t border-white/5">
      <div className="max-w-[1360px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Product Image (Visually dominates, occupying 7/12 columns or ~58% width on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-1 lg:col-span-7 flex justify-center items-center relative group order-1 lg:order-1"
          >
            
            {/* 
              Slow, Luxurious Holographic Float Container
              Using translateY keyframes [-4px, 4px, -4px] over 8 seconds for a highly subtle, almost subconscious motion.
            */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-xl aspect-square flex items-center justify-center pointer-events-none z-10"
            >
              {/* Hardware Render Image */}
              <img 
                src="/resolution changed hardware image.png"
                alt="LUCA Hardware Concept"
                className="w-full h-full object-contain filter brightness-[0.9] contrast-[1.05] drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-10"
              />

              {/* Soft Vignette Blending Layer (Feathers edges softly into pure black page background) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20"></div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Minimal Content Block (Occupies 5/12 columns or ~42% width on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="col-span-1 lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-2 z-10"
          >
            {/* Cinematic Fuchsia Spec Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-widest font-semibold">
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>THE PHYSICAL INTEGRATION</span>
            </div>

            {/* Elegant, Confident Split Header */}
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-white mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              Built to feel natural.<br />
              Designed to think ahead.
            </h2>

            {/* Short 3-Line Copy */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8 max-w-md font-sans">
              Engineered as one intelligent ecosystem, LUCA merges custom acoustics with on-device silicon execution. A calm, confident physical presence designed to seamlessly recede into your environment, responding ambiently without visual noise.
            </p>

            {/* High-Fidelity Specs Bullet checklist */}
            <ul className="space-y-3.5 mb-10 relative z-10">
              {["Machined acoustic driver grids", "On-device local intelligence core", "Calm zero-indicator glass interfaces"].map((text, i) => (
                <li key={i} className="flex items-start gap-3.5 text-xs md:text-sm text-zinc-400 font-light font-sans">
                  <div className="mt-0.5"><Check className="w-4 h-4 text-purple-500/70" /></div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Subtle Glassmorphic CTA Button */}
            <button 
              onClick={() => window.open('https://huggingface.co/spaces/shesettipavankumarswamy/luca-telugu', '_blank')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] text-white text-[12px] uppercase tracking-widest font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-500 group/btn shadow-[0_4px_15px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <span>Explore mechanics</span>
              <div className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 font-bold">&rarr;</div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
