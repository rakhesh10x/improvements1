import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Layers, Radio, Globe, Zap, Sparkles, Volume2 } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative pt-20 pb-20 bg-black z-10 overflow-hidden px-4 md:px-6 lg:px-8">
      {/* Scoped CSS Grid custom areas and mathematical desktop alignments */}
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 18px;
          grid-template-columns: 1.25fr 1fr 1fr 1fr;
          grid-template-areas:
            "top1 top2 top3 top4"
            "left-col hero-col hero-col right-col";
        }

        /* Responsive tablet rules */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              "hero-col hero-col"
              "top1 top2"
              "top3 top4"
              "left-col right-col";
          }
        }

        /* Responsive mobile rules */
        @media (max-width: 767px) {
          .bento-grid-container {
            display: flex;
            flex-direction: column;
            gap: 18px;
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

        {/* Bento Grid Container matching reference layout exactly */}
        <div className="bento-grid-container w-full">
          
          {/* ========================================================
              TOP ROW: 4 Horizontal Cards
              ======================================================== */}
          
          {/* Card 1: Edge AI (top1) - Wider */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'top1' }}
            className="lg:h-[150px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)] order-2 lg:order-none"
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

          {/* Card 2: LUCA OS (top2) - Smaller */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'top2' }}
            className="lg:h-[150px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)] order-2 lg:order-none"
          >
            <div className="flex justify-between items-start">
              <Layers className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">LUCA OS</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Real-time thread-scheduling.</p>
            </div>
          </motion.div>

          {/* Card 3: Spatial Audio (top3) - Medium */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'top3' }}
            className="lg:h-[150px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)] order-2 lg:order-none"
          >
            <div className="flex justify-between items-start">
              <Volume2 className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Spatial Audio</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Room-filling concentric arrays.</p>
            </div>
          </motion.div>

          {/* Card 4: Voice Native (top4) - Smaller */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            style={{ gridArea: 'top4' }}
            className="lg:h-[150px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)] order-2 lg:order-none"
          >
            <div className="flex justify-between items-start">
              <Radio className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Voice Native</h4>
              <p className="text-white/55 leading-relaxed text-[11px] font-light">Sub-100ms on-device voice loop.</p>
            </div>
          </motion.div>

          {/* ========================================================
              LEFT COLUMN: 2 Stacked Vertical Cards
              ======================================================== */}
          
          <div style={{ gridArea: 'left-col' }} className="flex flex-col gap-[18px] order-3 lg:order-none">
            {/* Card 5: Neural Core (left1) - Taller (510px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[510px] md:h-auto min-h-[220px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start mb-4 lg:mb-0">
                <Sparkles className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-2 font-sans">Neural Core</h4>
                <p className="text-white/55 leading-relaxed text-[11px] font-light">Dedicated 45 TOPS NPU engineered for instant cognition, localized model learning, and advanced semantic understanding.</p>
              </div>
            </motion.div>

            {/* Card 6: Real-Time AI (left2) - Shorter (300px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[300px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start mb-4 lg:mb-0">
                <Zap className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-2 font-sans">Real-Time AI</h4>
                <p className="text-white/55 leading-relaxed text-[11px] font-light">Predictive assistance and environmental awareness updating in real-time.</p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              CENTER COLUMN: 1 Large Hero Card + 1 Bottom Center Card
              ======================================================== */}
          
          <div style={{ gridArea: 'hero-col' }} className="flex flex-col gap-[18px] order-1 lg:order-none">
            {/* Card 7: Center Hero Card (hero) - Giant (620px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.08)', boxShadow: '0 15px 35px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[620px] md:h-auto min-h-[360px] rounded-[28px] bg-[#070707] border border-white/5 relative overflow-hidden group cursor-default flex flex-col justify-between p-6 md:p-8 select-none shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
            >
              {/* Soft Ambient Backglow behind hardware */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] bg-gradient-to-r from-purple-950/15 to-indigo-950/15 blur-[75px] rounded-full pointer-events-none z-0 group-hover:scale-105 transition-transform duration-[3000ms]"></div>
              
              {/* Top Badge/Header */}
              <div className="flex justify-between items-center relative z-20 w-full mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">LUCA Physical Grid</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-550 uppercase tracking-wider bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-md">
                  LUCA v1.0
                </div>
              </div>

              {/* Centered Image (Object-Contain, perfect floating containment) */}
              <div className="relative w-full flex-1 min-h-[220px] md:min-h-[280px] lg:min-h-[380px] flex items-center justify-center pointer-events-none z-10 px-8 my-4 overflow-hidden">
                <img 
                  src="/bent box middel image.jpeg"
                  alt="LUCA AI Smart Speaker"
                  className="max-w-[92%] max-h-[88%] object-contain filter brightness-[0.95] contrast-[1.02] drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-[1.02] transition-transform duration-[4000ms] ease-out z-10"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(7,7,7,0.85)_100%)] pointer-events-none z-20"></div>
              </div>

              {/* Bottom typography */}
              <div className="w-full relative z-20 flex justify-between items-end mt-auto">
                <div>
                  <h3 className="text-white font-semibold tracking-wide text-sm md:text-base mb-1 font-sans">LUCA AI Smart Speaker</h3>
                  <p className="text-white/55 leading-relaxed text-[11px] font-light max-w-sm">An elegant ambient intelligence grid receding naturally into your environment.</p>
                </div>
                <Layers className="w-4 h-4 text-purple-400/50 shrink-0 mb-1 ml-4 group-hover:text-purple-300 transition-colors" />
              </div>
            </motion.div>

            {/* Card 8: Bottom Center Card (bottom) - Horizontal (190px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 8px 30px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[190px] md:h-auto min-h-[130px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-7 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start">
                <Shield className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-1 font-sans">Hardware Integrity</h4>
                  <p className="text-white/55 leading-relaxed text-[11px] font-light max-w-lg">Machined acoustic grids matched with premium structural contours and premium tactile glass interfaces.</p>
                </div>
                <div className="text-[9px] font-mono text-zinc-650 uppercase tracking-widest pr-1 font-semibold hidden md:block select-none">
                  GRID SPEC
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: 2 Stacked Vertical Cards
              ======================================================== */}
          
          <div style={{ gridArea: 'right-col' }} className="flex flex-col gap-[18px] order-4 lg:order-none">
            {/* Card 9: Ambient Computing (right1) - Shorter (300px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[300px] md:h-auto min-h-[160px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start mb-4 lg:mb-0">
                <Cpu className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400/80 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10 group-hover:bg-indigo-400/30 transition-colors duration-300"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-2 font-sans">Ambient Computing</h4>
                <p className="text-white/55 leading-relaxed text-[11px] font-light">Fades quietly into your home, responding only when physically addressed.</p>
              </div>
            </motion.div>

            {/* Card 10: Indic Cognition (right2) - Taller (510px) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(255,255,255,0.015)' }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="lg:h-[510px] md:h-auto min-h-[220px] rounded-[28px] bg-[#070707] border border-white/5 p-6 md:p-8 flex flex-col justify-between group cursor-default transition-colors duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start mb-4 lg:mb-0">
                <Globe className="w-5 h-5 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-400 animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold tracking-wide text-xs md:text-sm mb-2 font-sans">Indic Cognition</h4>
                <p className="text-white/55 leading-relaxed text-[11px] font-light">Deeply optimized for regional Indian dialects, semantic cultural contexts, and localized voice synthesis for true linguistic native integration.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductBento;
