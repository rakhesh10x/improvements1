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
        <div className="text-center mb-6 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-[30px] md:text-[40px] lg:text-[52px] font-bold tracking-tight text-white mb-0 uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] font-sans"
          >
            WORLD’S FIRST AI SMART SPEAKER
          </motion.h2>
        </div>

        {/* Bento Grid Container */}
        <div className="bento-grid-container w-full mt-0">
          
          {/* ========================================================
              ROW 1: 4 Small Horizontal Cards (135px height)
              ======================================================== */}

          {/* Card 1: SPATIAL AUDIO (top1) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top1' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">SPATIAL AUDIO</span>
              <Volume2 className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Room Resonance</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Concentric acoustic arrays for immersive room-scale projection.</p>
            </div>
          </motion.div>

          {/* Card 2: EDGE AI (top2) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top2' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">EDGE AI</span>
              <Cpu className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Local Inference</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">On-device neural network execution with zero cloud latency latency.</p>
            </div>
          </motion.div>

          {/* Card 3: LUCA OS (top3) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top3' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">LUCA OS</span>
              <Layers className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Real-Time Core</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Low-level OS scheduled dynamically for sub-millisecond threads.</p>
            </div>
          </motion.div>

          {/* Card 4: VOICE NATIVE (top4) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'top4' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">VOICE NATIVE</span>
              <Radio className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Instant Voice</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Continuous hardware speech-to-speech loop running locally.</p>
            </div>
          </motion.div>

          {/* ========================================================
              ROW 2 & 3: CENTER HERO AND SIDE CARDS
              ======================================================== */}

          {/* Card 5: NEURAL PROCESSING (left1) - Tall vertical card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left1' }}
            className="bento-card-height h-[320px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">NEURAL CORPS</span>
              <Sparkles className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">Neural Processing</h3>
              <p className="text-[#888] text-xs leading-relaxed font-light mb-2">
                High-performance NPUs executing deep neural network nodes on the edge for real-time model synthesis and local cognition.
              </p>
            </div>
          </motion.div>

          {/* Card 6: LARGE CENTER FEATURE CARD (hero) - Giant Center Card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.2)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'hero' }}
            className="bento-hero-height h-[320px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md relative overflow-hidden group cursor-default flex flex-col justify-between p-6 select-none"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.06) 0%, transparent 70%)' }}></div>
            
            {/* Top-left small badge */}
            <div className="flex justify-between items-center relative z-20 w-full mb-1">
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">LUCA AI SYSTEM</span>
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
                <h3 className="text-white text-base font-bold tracking-tight mb-1">LUCA AI Smart Speaker</h3>
                <p className="text-[#888] leading-relaxed text-xs font-light max-w-md">
                  Adaptive ambient intelligence powered by LUCA OS and real-time neural processing.
                </p>
              </div>
              <Layers className="w-4 h-4 text-purple-400/50 shrink-0 mb-1 ml-4 group-hover:text-purple-300 transition-colors" />
            </div>
          </motion.div>

          {/* Card 7: REAL-TIME AI (right1) - Medium vertical card (right side row 2) (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right1' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">REAL-TIME AI</span>
              <Zap className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Predictive Loops</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Predictive action execution responding instantly to environmental triggers.</p>
            </div>
          </motion.div>

          {/* Card 8: PRIVACY FIRST (right2) - Tall bottom-right card (320px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right2' }}
            className="bento-card-height h-[320px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">PRIVACY</span>
              <Lock className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">Privacy First</h3>
              <p className="text-[#888] text-xs leading-relaxed font-light mb-2">
                Encrypted sandboxed loops to safeguard your local voice patterns and telemetry logs with absolute hardware-level protection.
              </p>
            </div>
          </motion.div>

          {/* ========================================================
              ROW 4: BOTTOM SECTION
              ======================================================== */}

          {/* Card 9: AMBIENT INTELLIGENCE (left2) - Small vertical bottom-left card (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left2' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">AMBIENT</span>
              <Eye className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Ambient Intel</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Fades quietly, responding only when contextually triggered by presence.</p>
            </div>
          </motion.div>

          {/* Card 10: INDIAN AI ECOSYSTEM (bottom) - Wide bottom-center card (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'bottom' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">ECOSYSTEM SYNC</span>
              <Globe className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <div>
                <h3 className="text-white text-sm font-bold tracking-tight mb-1">Indian AI Ecosystem</h3>
                <p className="text-[#888] text-[10px] leading-relaxed max-w-xl">
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
