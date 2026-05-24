import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Layers, Radio, Globe, Zap, Sparkles, Volume2, Lock, Eye } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-10 pb-8 bg-[#000000] z-10 overflow-hidden px-[22px]">
      {/* Scope bento custom grid template areas and exact responsive behavior */}
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 135px 135px 171px 135px;
          grid-template-areas:
            "top1 top2 top3 top4"
            "left1 hero hero right1"
            "left1 hero hero right2"
            "left2 bottom bottom right2";
        }

        /* Responsive tablet rules: 2-column balanced grid */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
              "hero hero"
              "top1 top2"
              "top3 top4"
              "left1 right1"
              "left2 right2"
              "bottom bottom";
          }
          .bento-card-height {
            height: auto !important;
            min-height: 160px;
          }
          .bento-hero-height {
            height: auto !important;
            min-height: 300px;
          }
        }

        /* Responsive mobile rules: single column stack */
        @media (max-width: 767px) {
          .bento-grid-container {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .bento-card-height {
            height: auto !important;
            min-height: 140px;
          }
          .bento-hero-height {
            height: auto !important;
            min-height: 300px;
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

      <div className="max-w-[1560px] mx-auto relative z-10 w-full">
        {/* Centered Heading with Premium Typography */}
        <div className="text-center mb-8 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-[30px] md:text-[40px] lg:text-[52px] font-bold tracking-tight text-white mb-2 uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] font-sans"
          >
            WORLD’S FIRST AI SMART SPEAKER
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.12 }}
            className="text-[13px] md:text-[15px] text-zinc-500 font-light tracking-wide max-w-[620px] mx-auto"
          >
            Built with LUCA Hardware, LUCA OS, and Real-Time AI Intelligence.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="bento-grid-container w-full">
          
          {/* ========================================================
              ROW 1: 4 Small Horizontal Cards (135px height)
              ======================================================== */}

          {/* Card 1: SPATIAL AUDIO (top1) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top1' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Volume2 className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">SPATIAL AUDIO</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">Concentric acoustic arrays for immersive resonance.</p>
            </div>
          </motion.div>

          {/* Card 2: EDGE AI (top2) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top2' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Cpu className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">EDGE AI</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">On-device local model execution with zero latency.</p>
            </div>
          </motion.div>

          {/* Card 3: LUCA OS (top3) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top3' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Layers className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">LUCA OS</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">Low-level OS scheduled for real-time threads.</p>
            </div>
          </motion.div>

          {/* Card 4: VOICE NATIVE (top4) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top4' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Radio className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">VOICE NATIVE</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">Speech-to-speech engine running entirely locally.</p>
            </div>
          </motion.div>

          {/* ========================================================
              ROW 2 & 3: CENTER HERO AND SIDE CARDS
              ======================================================== */}

          {/* Card 5: NEURAL PROCESSING (left1) - Tall vertical card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left1' }}
            className="bento-card-height h-[320px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Sparkles className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-1.5 font-sans">NEURAL PROCESSING</h4>
              <p className="text-zinc-500 leading-relaxed text-[11px] font-light">
                High-performance NPUs executing deep neural network nodes on the edge for real-time model synthesis.
              </p>
            </div>
          </motion.div>

          {/* Card 6: LARGE CENTER FEATURE CARD (hero) - Giant Center Card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.2)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'hero' }}
            className="bento-hero-height h-[320px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] relative overflow-hidden group cursor-default flex flex-col justify-between p-6 select-none"
          >
            {/* Subtle Purple Ambient Glow Behind Image */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[180px] bg-gradient-to-r from-purple-800/15 to-indigo-800/15 blur-[60px] rounded-full pointer-events-none z-0 group-hover:scale-110 transition-transform duration-[3000ms]"></div>
            
            {/* Top-left small badge */}
            <div className="flex justify-between items-center relative z-20 w-full mb-1">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">LUCA AI SYSTEM</span>
              </div>
              <div className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-md">
                CORE
              </div>
            </div>

            {/* Perfect Floating Centered Image with aspect ratio scaling */}
            <div className="relative w-full flex-1 aspect-[1.8/1] flex items-center justify-center pointer-events-none z-10 px-4 overflow-hidden">
              <img 
                src="/bent box middel image.jpeg"
                alt="LUCA AI Smart Speaker"
                className="max-w-[92%] max-h-[92%] object-contain filter brightness-[0.96] contrast-[1.02] drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out z-10"
              />
              {/* Radial vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(7,7,7,0.75)_100%)] pointer-events-none z-20"></div>
            </div>

            {/* Bottom text */}
            <div className="w-full relative z-20 flex justify-between items-end mt-1">
              <div>
                <h3 className="text-white font-semibold tracking-wide text-sm mb-0.5 font-sans">LUCA AI Smart Speaker</h3>
                <p className="text-zinc-500 leading-relaxed text-[10px] font-light max-w-md">
                  Adaptive ambient intelligence powered by LUCA OS and real-time neural processing.
                </p>
              </div>
              <Layers className="w-4 h-4 text-purple-400/50 shrink-0 mb-1 ml-4 group-hover:text-purple-300 transition-colors" />
            </div>
          </motion.div>

          {/* Card 7: REAL-TIME AI (right1) - Medium vertical card (right side row 2) (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right1' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Zap className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">REAL-TIME AI</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">Predictive action execution responding instantly to ambient cues.</p>
            </div>
          </motion.div>

          {/* Card 8: PRIVACY FIRST (right2) - Tall bottom-right card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right2' }}
            className="bento-card-height h-[320px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Lock className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/15 group-hover:bg-purple-400 animate-pulse"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-1.5 font-sans">PRIVACY FIRST</h4>
              <p className="text-zinc-500 leading-relaxed text-[11px] font-light">
                Encrypted sandboxed loops to safeguard your local voice patterns and telemetry logs with absolute protection.
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              ROW 4: BOTTOM SECTION
              ======================================================== */}

          {/* Card 9: AMBIENT INTELLIGENCE (left2) - Small vertical bottom-left card (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left2' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Eye className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div>
              <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">AMBIENT INTEL</h4>
              <p className="text-zinc-500 leading-relaxed text-[10px] font-light">Fades quietly, responding only when contextually triggered.</p>
            </div>
          </motion.div>

          {/* Card 10: INDIAN AI ECOSYSTEM (bottom) - Wide bottom-center card (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.25)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'bottom' }}
            className="bento-card-height h-[135px] rounded-[26px] bg-[#070707] border border-white/[0.05] shadow-[0_0_40px_rgba(120,80,255,0.04)] p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <Globe className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/10 group-hover:bg-purple-400/30 transition-colors duration-300"></div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h4 className="text-white font-semibold tracking-wide text-xs uppercase mb-0.5 font-sans">INDIAN AI ECOSYSTEM</h4>
                <p className="text-zinc-500 leading-relaxed text-[10px] font-light max-w-xl">
                  Deeply integrated into regional Indian contexts, dialect semantics, and localized voice synthesis nodes.
                </p>
              </div>
              <div className="text-[9px] font-mono text-zinc-650 uppercase tracking-widest pr-1 font-semibold hidden md:block select-none">
                REGIONAL SYNC
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductBento;
