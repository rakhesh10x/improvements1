import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Radio, Globe, Zap, Sparkles, Volume2, Lock, Eye } from 'lucide-react';

const ProductBento = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-10 pb-8 bg-black z-10 overflow-hidden px-[22px]">
      <style>{`
        .bento-grid-container {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto 215px 61px 135px;
          grid-template-areas:
            "top-row top-row top-row top-row"
            "left1 hero hero right1"
            "left2 hero hero right2"
            "left2 bottom bottom right2";
        }
        .bento-top-row-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
              "hero hero" "top-row top-row"
              "left1 right1" "left2 right2" "bottom bottom";
          }
          .bento-top-row-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-card-height  { height: auto !important; min-height: 160px; }
          .bento-hero-height  { height: auto !important; min-height: 300px; }
        }
        @media (max-width: 767px) {
          .bento-grid-container, .bento-top-row-grid {
            display: flex; flex-direction: column; gap: 14px;
          }
          .bento-card-height { height: auto !important; min-height: 140px; }
          .bento-hero-height { height: auto !important; min-height: 300px; }
        }
      `}</style>

      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-20" />
        <div className="absolute top-[50%] right-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-15" />
        <div className="absolute bottom-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-20" />
        <div className="absolute bottom-[10%] right-[8%] w-0.5 h-0.5 bg-white rounded-full opacity-25" />
      </div>

      <div className="max-w-[1560px] mx-auto relative z-10 w-full">

        {/* Heading */}
        <div className="text-center mb-6 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-[30px] md:text-[40px] lg:text-[52px] font-bold tracking-tight text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] font-sans"
          >
            WORLD'S FIRST AI SMART SPEAKER
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid-container w-full">

          {/* ── ROW 1: 4 top cards ── */}
          <div style={{ gridArea: 'top-row' }} className="bento-top-row-grid w-full">
            {[
              { label: 'SPATIAL AUDIO', title: 'Room Resonance',  desc: 'Concentric acoustic arrays for immersive room-scale projection.',   Icon: Volume2 },
              { label: 'EDGE AI',       title: 'Local Inference', desc: 'On-device neural network execution with zero latency.',              Icon: Cpu     },
              { label: 'LUCA OS',       title: 'Real-Time Core',  desc: 'Low-level OS scheduled dynamically for sub-millisecond threads.',   Icon: Layers  },
              { label: 'VOICE NATIVE',  title: 'Instant Voice',   desc: 'Continuous hardware speech-to-speech loop running locally.',        Icon: Radio   },
            ].map(({ label, title, desc, Icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bento-card-height h-[165px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">{label}</span>
                  <Icon className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-white text-sm font-bold tracking-tight mb-1">{title}</h3>
                  <p className="text-[#888] text-[10px] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── left1 ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left1' }}
            className="bento-card-height h-[215px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">NEURAL CORPS</span>
              <Sparkles className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Neural Processing</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">NPUs executing deep neural nodes on the edge for real-time model synthesis.</p>
            </div>
          </motion.div>

          {/* ── HERO card: center image ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.2)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'hero' }}
            className="bento-hero-height h-[290px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.07)0%,transparent 70%)' }} />
            <img
              src="/resolution%20changed%20bento%20box%20image.png"
              alt="LUCA AI"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              draggable={false}
            />
          </motion.div>

          {/* ── right1 ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right1' }}
            className="bento-card-height h-[215px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">REAL-TIME AI</span>
              <Zap className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Predictive Loops</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Predictive action execution responding instantly to environmental triggers.</p>
            </div>
          </motion.div>

          {/* ── right2 ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right2' }}
            className="bento-card-height h-[210px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">PRIVACY</span>
              <Lock className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">Privacy First</h3>
              <p className="text-[#888] text-xs leading-relaxed font-light">
                Encrypted sandboxed loops to safeguard your local voice patterns and telemetry logs with absolute hardware-level protection.
              </p>
            </div>
          </motion.div>

          {/* ── left2 ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left2' }}
            className="bento-card-height h-[210px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">AMBIENT</span>
              <Eye className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">Ambient Intel</h3>
              <p className="text-[#888] text-xs leading-relaxed font-light">
                Fades quietly into the background, responding only when contextually triggered by presence models.
              </p>
            </div>
          </motion.div>

          {/* ── bottom ── */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'bottom' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center,rgba(120,80,255,0.05)0%,transparent 70%)' }} />
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
              <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest pr-1 font-semibold hidden md:block select-none">
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
