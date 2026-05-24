import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Layers, Radio, Globe, Zap, Sparkles, Volume2 } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative pt-20 pb-20 bg-black z-10 overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Scoped CSS Grid custom areas and mathematical desktop heights */}
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 140px 220px 220px 140px;
          grid-template-areas:
            "t1 t2 t3 t4"
            "clt cm cm crt"
            "clb cm cm crb"
            "b1 b2 b3 b4";
        }

        /* Responsive tablet rules (maintain proportions) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
              "cm cm"
              "t1 t2"
              "t3 t4"
              "clt crt"
              "clb crb"
              "b1 b2"
              "b3 b4";
          }
        }

        /* Responsive mobile rules (clean stacking, main card first) */
        @media (max-width: 767px) {
          .bento-grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              "cm"
              "t1"
              "t2"
              "t3"
              "t4"
              "clt"
              "clb"
              "crt"
              "crb"
              "b1"
              "b2"
              "b3"
              "b4";
          }
        }
      `}</style>

      {/* Subtle Starfield Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-[50%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-15"></div>
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-[10%] right-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-25"></div>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Centered Heading with Premium Typography */}
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

        {/* Mathematically Aligned 13-Box Bento Grid */}
        <div className="bento-grid-container w-full">
          
          {/* ========================================================
              TOP ROW: 4 Equal Horizontal Cards (Area: t1, t2, t3, t4)
              ======================================================== */}
          
          {/* Card 1: Edge Intelligence (t1) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't1' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Cpu className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Edge Intelligence</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Local neural network execution with zero latency.</p>
            </div>
          </motion.div>

          {/* Card 2: Neural Core (t2) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't2' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Neural Core</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Dedicated NPU optimized for real-time cognition.</p>
            </div>
          </motion.div>

          {/* Card 3: Spatial Audio (t3) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't3' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Volume2 className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Spatial Audio</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Concentric acoustic arrays for immersive resonance.</p>
            </div>
          </motion.div>

          {/* Card 4: Voice Native (t4) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 't4' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Radio className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Voice Native</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Sub-100ms conversational processing speeds.</p>
            </div>
          </motion.div>

          {/* ========================================================
              MIDDLE ROW: LEFT COLUMN (Area: clt, clb)
              ======================================================== */}
          
          {/* Card 5: Indic Cognition (clt) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'clt' }}
            className="lg:h-[220px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-4 lg:mb-0">
              <Globe className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1.5 font-sans">Indic Cognition</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Deeply optimized for regional Indian dialects and semantic cultural contexts.</p>
            </div>
          </motion.div>

          {/* Card 6: Real-Time AI (clb) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'clb' }}
            className="lg:h-[220px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-4 lg:mb-0">
              <Zap className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1.5 font-sans">Real-Time AI</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Predictive assistance and environmental awareness updating in real-time.</p>
            </div>
          </motion.div>

          {/* ========================================================
              MIDDLE ROW: CENTER COLUMN MAIN HERO (Area: cm)
              ======================================================== */}
          
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 15px 35px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'cm' }}
            className="lg:h-[458px] md:h-[360px] h-auto min-h-[300px] rounded-[28px] bg-[#070707] border border-white/5 relative overflow-hidden group cursor-default flex flex-col justify-between p-6 md:p-8 select-none shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
          >
            {/* Soft Ambient Backglow behind hardware */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[160px] bg-gradient-to-r from-purple-950/15 to-indigo-950/15 blur-[65px] rounded-full pointer-events-none z-0 group-hover:scale-105 transition-transform duration-[3000ms]"></div>
            
            {/* Centered Image (Object-Contain, perfect containment, no clipping/cropping) */}
            <div className="absolute inset-x-0 top-6 bottom-16 flex items-center justify-center pointer-events-none z-10 px-8">
              <img 
                src="/bent box middel image.jpeg"
                alt="LUCA AI Smart Speaker"
                className="w-full h-full object-contain filter brightness-[0.95] contrast-[1.02] drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-[1.02] transition-transform duration-[4000ms] ease-out z-10"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(7,7,7,0.85)_100%)] pointer-events-none z-20"></div>
            </div>

            {/* Title & Decorative Elements */}
            <div className="flex justify-between items-start relative z-20">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">LUCA Physical Grid</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-md">
                LUCA v1.0
              </div>
            </div>

            {/* Bottom typography and breathing room */}
            <div className="w-full relative z-20 flex justify-between items-end">
              <div>
                <h3 className="text-white font-semibold tracking-wide text-sm md:text-base mb-1 font-sans">LUCA AI Smart Speaker</h3>
                <p className="text-white/55 leading-relaxed text-[11px] font-light max-w-sm">An elegant ambient intelligence grid receding naturally into your environment.</p>
              </div>
              <Layers className="w-4 h-4 text-purple-400/50 shrink-0 mb-1 ml-4 group-hover:text-purple-300 transition-colors" />
            </div>
          </motion.div>

          {/* ========================================================
              MIDDLE ROW: RIGHT COLUMN (Area: crt, crb)
              ======================================================== */}
          
          {/* Card 8: Ambient Computing (crt) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'crt' }}
            className="lg:h-[220px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-4 lg:mb-0">
              <Cpu className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1.5 font-sans">Ambient Computing</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Fades quietly into your home, responding only when physically addressed.</p>
            </div>
          </motion.div>

          {/* Card 9: Ecosystem Core (crb) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'crb' }}
            className="lg:h-[220px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start mb-4 lg:mb-0">
              <Layers className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1.5 font-sans">Ecosystem Core</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Unified acoustics, OS scheduling, and localized model logic working in sync.</p>
            </div>
          </motion.div>

          {/* ========================================================
              BOTTOM ROW: 4 Equal Horizontal Cards (Area: b1, b2, b3, b4)
              ======================================================== */}
          
          {/* Card 10: Hardware Integrity (b1) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'b1' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Shield className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Hardware Integrity</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Machined acoustic grids matched with premium structural contours.</p>
            </div>
          </motion.div>

          {/* Card 11: Privacy Core (b2) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'b2' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Shield className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Privacy Core</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">On-device sandboxed execution with absolute data security.</p>
            </div>
          </motion.div>

          {/* Card 12: Context Mesh (b3) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'b3' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Zap className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Context Mesh</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Multi-room synchronization for continuous ambient interaction.</p>
            </div>
          </motion.div>

          {/* Card 13: Continuous OS (b4) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'b4' }}
            className="lg:h-[140px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
          >
            <div className="flex justify-between items-start">
              <Layers className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Continuous OS</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Lightweight operating system engineered for AI scheduling.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBento;
