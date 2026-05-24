import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Layers, Radio, Globe, Zap, Sparkles, Volume2 } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative pt-20 pb-20 bg-black z-10 overflow-hidden px-4 md:px-6">
      {/* Scope bento custom grid template areas */}
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
            "t1 t2 t3 t4"
            "clt cm cm crt"
            "clb cmb cmb crb";
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "cm cm"
              "t1 t2"
              "t3 t4"
              "clt crt"
              "clb crb"
              "cmb cmb";
          }
        }

        @media (max-width: 767px) {
          .bento-grid-container {
            grid-template-columns: 1fr;
            grid-template-areas:
              "cm"
              "t1"
              "t2"
              "t3"
              "t4"
              "clt"
              "clb"
              "cmb"
              "crt"
              "crb";
          }
        }
      `}</style>

      {/* Subtle Space Stars & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-[45%] right-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-15"></div>
        <div className="absolute bottom-[25%] left-[35%] w-1 h-1 bg-white rounded-full opacity-25"></div>
        <div className="absolute bottom-[15%] right-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">
        {/* Section Heading - Exact New Copy Centered and Premium */}
        <div className="text-center mb-16 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-3xl md:text-5xl lg:text-[42px] font-black tracking-widest text-center text-white mb-4 uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.06)] font-sans"
          >
            WORLD’S FIRST AI SMART SPEAKER
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.12 }}
            className="text-xs md:text-sm text-zinc-500 font-light tracking-wide max-w-xl mx-auto"
          >
            Built with LUCA Hardware, LUCA OS, and Real-Time AI Intelligence.
          </motion.p>
        </div>

        {/* 10-Box Bento Grid Container */}
        <div className="bento-grid-container w-full">
          
          {/* ========================================================
              TOP ROW: 4 Small Horizontal Boxes (Area: t1, t2, t3, t4)
              ======================================================== */}
          
          {/* Card 1: Edge AI (t1) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(124,58,237,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't1' }}
            className="lg:h-[140px] md:h-[130px] h-[120px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Cpu className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1 font-sans">Edge Intelligence</h4>
              <p className="text-zinc-500 text-[10px] leading-normal font-light">Local neural network execution with zero latency.</p>
            </div>
          </motion.div>

          {/* Card 2: Neural Core (t2) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(99,102,241,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't2' }}
            className="lg:h-[140px] md:h-[130px] h-[120px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1 font-sans">Neural Core</h4>
              <p className="text-zinc-500 text-[10px] leading-normal font-light">Dedicated NPU optimized for real-time cognition.</p>
            </div>
          </motion.div>

          {/* Card 3: Spatial Audio (t3) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(124,58,237,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't3' }}
            className="lg:h-[140px] md:h-[130px] h-[120px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Volume2 className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1 font-sans">Spatial Audio</h4>
              <p className="text-zinc-500 text-[10px] leading-normal font-light">Concentric acoustic arrays for immersive resonance.</p>
            </div>
          </motion.div>

          {/* Card 4: Voice Native (t4) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(99,102,241,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't4' }}
            className="lg:h-[140px] md:h-[130px] h-[120px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Radio className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1 font-sans">Voice Native</h4>
              <p className="text-zinc-500 text-[10px] leading-normal font-light">Sub-100ms conversational processing speeds.</p>
            </div>
          </motion.div>

          {/* ========================================================
              CENTER SECTION: LEFT COLUMN (Area: clt, clb)
              ======================================================== */}
          
          {/* Card 5: Indic Cognition (clt) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(124,58,237,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'clt' }}
            className="lg:h-[220px] md:h-[180px] h-auto min-h-[160px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-3 lg:mb-0">
              <Globe className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans">Indic Cognition</h4>
              <p className="text-zinc-500 text-[10px] leading-relaxed font-light">Optimized for regional dialect semantics and cultural nuances.</p>
            </div>
          </motion.div>

          {/* Card 6: Real-Time AI (clb) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(99,102,241,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'clb' }}
            className="lg:h-[220px] md:h-[180px] h-auto min-h-[160px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-3 lg:mb-0">
              <Zap className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans">Real-Time AI</h4>
              <p className="text-zinc-500 text-[10px] leading-relaxed font-light">Instant answers and predictive environmental awareness.</p>
            </div>
          </motion.div>

          {/* ========================================================
              CENTER SECTION: MAIN HERO SPEAKER (Area: cm)
              ======================================================== */}
          
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 20px 40px rgba(139,92,246,0.03)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'cm' }}
            className="lg:h-[302px] md:h-[260px] h-[220px] rounded-[28px] bg-[#060606] border border-white/5 relative overflow-hidden group cursor-default flex flex-col justify-between p-7 select-none shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
          >
            {/* Extremely Subtle Purple Ambient Backglow behind hardware */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[160px] bg-gradient-to-r from-purple-950/15 to-indigo-950/15 blur-[65px] rounded-full pointer-events-none z-0 group-hover:scale-105 transition-transform duration-[3000ms]"></div>
            
            {/* Centered speaker hardware image with soft vignette edges */}
            <div className="absolute inset-x-0 top-6 bottom-16 flex items-center justify-center pointer-events-none z-10 px-6">
              <img 
                src="/resolution changed hardware image.png"
                alt="LUCA Smart Speaker Hardware Render"
                className="w-full h-full object-contain filter brightness-[0.93] contrast-[1.03] drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] scale-110 group-hover:scale-[1.12] transition-transform duration-[4000ms] ease-out z-10"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(6,6,6,0.85)_100%)] pointer-events-none z-20"></div>
            </div>

            {/* Title & Decorative Elements */}
            <div className="flex justify-between items-start relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">LUCA Physical Grid</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-md">
                LUCA v1.0
              </div>
            </div>

            {/* Bottom metadata copy */}
            <div className="w-full relative z-20 flex justify-between items-end">
              <div>
                <h3 className="text-white text-[15px] font-black tracking-wide font-sans mb-0.5">LUCA AI Smart Speaker</h3>
                <p className="text-zinc-500 text-[10px] leading-relaxed font-light">An elegant ambient intelligence grid receding naturally into your environment.</p>
              </div>
              <Layers className="w-4 h-4 text-purple-400/60 shrink-0 mb-1 ml-4 group-hover:text-purple-300 transition-colors" />
            </div>
          </motion.div>

          {/* ========================================================
              CENTER SECTION: CENTER BOTTOM (Area: cmb)
              ======================================================== */}
          
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 24px rgba(124,58,237,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'cmb' }}
            className="lg:h-[140px] md:h-[130px] h-[120px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Shield className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-350"></div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1 font-sans">Hardware Integrity</h4>
                <p className="text-zinc-500 text-[10px] leading-normal font-light max-w-lg">Machined acoustic grids paired with structural premium contours.</p>
              </div>
              <div className="text-[9px] font-mono text-zinc-650 uppercase tracking-widest pr-1 font-semibold hidden md:block select-none">
                GRID SPEC
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              CENTER SECTION: RIGHT COLUMN (Area: crt, crb)
              ======================================================== */}
          
          {/* Card 9: Ambient Computing (crt) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(99,102,241,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'crt' }}
            className="lg:h-[220px] md:h-[180px] h-auto min-h-[160px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-3 lg:mb-0">
              <Cpu className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-350"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans">Ambient Computing</h4>
              <p className="text-zinc-500 text-[10px] leading-relaxed font-light">Fades quietly into your home, responding only when addressed.</p>
            </div>
          </motion.div>

          {/* Card 10: Ecosystem Core (crb) */}
          <motion.div
            whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(124,58,237,0.02)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'crb' }}
            className="lg:h-[220px] md:h-[180px] h-auto min-h-[160px] rounded-[28px] bg-[#060606] border border-white/5 p-6 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-3 lg:mb-0">
              <Layers className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-350" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans">Ecosystem Core</h4>
              <p className="text-zinc-500 text-[10px] leading-relaxed font-light">Unified acoustics, OS scheduling, and localized model logic.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBento;
