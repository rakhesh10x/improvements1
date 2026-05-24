import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Layout, ShieldCheck, Layers, Globe, Zap } from 'lucide-react';

const ProductBento = () => {
  const bentoItems = [
    {
      id: 'hardware',
      title: 'Hardware',
      subtitle: 'Built for Performance',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: <Cpu className="w-6 h-6 text-fuchsia-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Subtle physical frame contour */}
          <div className="absolute w-24 h-24 rounded-full border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent shadow-[inset_0_4px_12px_rgba(255,255,255,0.03)] flex items-center justify-center">
            {/* Pulsing Acoustic concentric waves */}
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.05, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-16 h-16 rounded-full border border-fuchsia-500/15"
            />
            <motion.div 
              animate={{ scale: [1.2, 1.6, 1.2], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute w-16 h-16 rounded-full border border-purple-500/10"
            />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-purple-500/20 blur-md animate-pulse"></div>
            {/* Center smart emitter */}
            <div className="w-4 h-4 rounded-full bg-[#1b082e] border border-fuchsia-500/30 flex items-center justify-center shadow-[0_0_8px_rgba(240,79,252,0.2)]">
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div>
            </div>
          </div>
          <div className="absolute bottom-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Contour & Audio Driver</div>
        </div>
      )
    },
    {
      id: 'centerpiece',
      isCenterpiece: true,
      title: 'LUCA',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
      rowSpan: 'row-span-1 md:row-span-2 lg:row-span-2',
      orderClass: 'order-first md:order-none lg:order-none',
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Intense Radial Glows */}
          <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] bg-purple-600/15 blur-[80px] rounded-full"></div>
          <div className="absolute w-[180px] h-[180px] bg-blue-600/10 blur-[70px] rounded-full animate-pulse"></div>

          {/* Glowing Coordinate Ring grid */}
          <div className="absolute w-[260px] h-[260px] border border-white/[0.02] rounded-full"></div>
          <div className="absolute w-[190px] h-[190px] border border-white/[0.03] rounded-full"></div>

          {/* Orbital Bands representing pillars */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[230px] h-[230px] border border-purple-500/15 rounded-full border-dashed"
          >
            <div className="absolute top-0 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
          </motion.div>

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[150px] h-[150px] border border-blue-400/20 rounded-full"
          >
            <div className="absolute bottom-0 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.7)]"></div>
          </motion.div>

          {/* Holographic cage (Glass Facet Octagon) */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#160c28] via-[#04010a] to-[#0d041e] border border-purple-500/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.2)] overflow-hidden"
          >
            {/* Mirror Bevel Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none"></div>

            {/* Pulsing Core neural glow */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-60 animate-pulse"></div>

            <Layers className="w-10 h-10 text-white relative z-10 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] animate-pulse" />

            <div className="absolute inset-1.5 border border-white/5 rounded-2xl border-dashed"></div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'ai',
      title: 'AI',
      subtitle: 'Real-time Cognition',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Neural mesh glow */}
          <div className="absolute w-20 h-20 bg-blue-500/5 blur-lg rounded-full"></div>

          {/* Connected neural net visualization */}
          <div className="relative w-24 h-20 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
            {/* Central thought nodes */}
            <motion.div 
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-[2px] shadow-[0_0_8px_rgba(96,165,250,0.8)]"
            />
            
            {/* Floating synapses */}
            <div className="absolute left-4 top-4 w-2 h-2 rounded-full bg-white/20"></div>
            <div className="absolute right-4 top-6 w-2 h-2 rounded-full bg-white/20"></div>
            <div className="absolute left-6 bottom-4 w-2 h-2 rounded-full bg-white/20"></div>
            <div className="absolute right-6 bottom-4 w-2 h-2 rounded-full bg-white/20"></div>

            {/* Connecting laser paths */}
            <svg className="absolute inset-0 w-full h-full stroke-blue-500/25 stroke-[1px] fill-none">
              <line x1="48" y1="40" x2="16" y2="16" />
              <line x1="48" y1="40" x2="80" y2="24" />
              <line x1="48" y1="40" x2="24" y2="64" />
              <line x1="48" y1="40" x2="74" y2="64" />
            </svg>
          </div>
          <div className="absolute bottom-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Ambient Synapses</div>
        </div>
      )
    },
    {
      id: 'os',
      title: 'OS',
      subtitle: 'AI-Native Interface',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Glassmorphic mini-dashboard card layout */}
          <div className="w-[80%] h-[55%] rounded-xl border border-white/5 bg-white/[0.01] shadow-2xl relative overflow-hidden mt-6">
            <div className="h-5 border-b border-white/5 flex items-center px-2 bg-black/40">
              <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
              </div>
            </div>
            
            <div className="p-2 flex flex-col gap-1.5 opacity-60">
              {/* Progress bar simulation */}
              <div className="h-1.5 w-1/3 bg-indigo-500/30 rounded-full relative overflow-hidden">
                <motion.div 
                  animate={{ left: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 bottom-0 w-1/2 bg-indigo-400"
                />
              </div>
              
              {/* Fake UI panels */}
              <div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
              <div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
            </div>

            {/* Glowing bottom-right indicator */}
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-indigo-500/10 blur-md"></div>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy First',
      subtitle: 'On-Device Security',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Secure scanning grid */}
          <div className="absolute w-20 h-20 border border-emerald-500/10 rounded-full flex items-center justify-center">
            <div className="absolute w-16 h-16 border border-emerald-500/5 rounded-full"></div>
            {/* Pulse Scanner grid */}
            <motion.div 
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-20 h-20 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02]"
            />
            {/* Sweeping laser line */}
            <motion.div
              animate={{ top: ['15%', '85%', '15%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.5)]"
            />
            <div className="w-6 h-6 rounded-lg bg-emerald-950/20 border border-emerald-500/25 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 filter drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'why-luca',
      isWhyLuca: true,
      title: 'Why LUCA?',
      subtitle: 'A unified premium ambient intelligence platform built in India. By seamlessly fusing bespoke hardware, localized AI cognition, and a fluid operating system, LUCA delivers a single integrated consciousness for your spaces.',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-4',
      rowSpan: 'row-span-1',
      icon: <Globe className="w-6 h-6 text-amber-400" />,
      visual: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
          {/* Intense center backdrop glow */}
          <div className="absolute w-[240px] h-[240px] bg-amber-500/[0.03] blur-2xl rounded-full"></div>

          {/* India-First Lotus Mandala Visual */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="relative w-36 h-36 border border-amber-500/5 rounded-full flex items-center justify-center"
          >
            {/* Concentric rotating geometry nodes (Lotus style petals) */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-28 h-10 border border-amber-500/10 rounded-full"
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
            
            {/* Glowing Lotus Core */}
            <div className="w-10 h-10 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center relative shadow-[0_0_12px_rgba(245,158,11,0.1)]">
              <Zap className="w-4 h-4 text-amber-400/80 animate-pulse" />
            </div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="pt-16 pb-12 bg-[#020202] relative z-10 border-t border-white/5 px-6">
      <div className="max-w-[1360px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[45px] font-extrabold tracking-tight text-center text-white bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.1)]"
          >
            Hardware. AI. OS. One Intelligent Ecosystem.
          </motion.h2>
        </div>

        {/* Asymmetrical Cinematic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bentoItems.map((item, index) => {
            // Render the Centerpiece card
            if (item.isCenterpiece) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className={`group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0c051a] via-[#020005] to-[#04010a] border border-purple-500/20 backdrop-blur-md overflow-hidden hover:-translate-y-1 hover:border-purple-500/35 hover:shadow-[0_25px_50px_rgba(147,51,234,0.12)] transition-all duration-500 cursor-default ${item.colSpan} ${item.rowSpan} ${item.orderClass}`}
                >
                  {/* Left content block */}
                  <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full">
                    <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-wider font-semibold w-fit">
                      <Layers className="w-3.5 h-3.5" />
                      <span>The Nucleus</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 leading-none">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed font-light mb-6">
                      A unified intelligence platform engineered in India. By seamlessly fusing custom acoustics and silicon hardware, localized AI cognition models, and a fluid ambient operating system, LUCA delivers a single integrated consciousness for modern living.
                    </p>
                    
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(240,79,252,0.8)]"></div>
                        <span>Contoured Hardware & Speaker Drivers</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                        <span>Generative Cognitive Machine Intelligence</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        <span>Fluid, Responsive Ambient Operating System</span>
                      </div>
                    </div>
                  </div>

                  {/* Right visual block */}
                  <div className="relative w-full md:w-1/2 h-[260px] md:h-full flex items-center justify-center overflow-hidden pointer-events-none mt-6 md:mt-0">
                    {item.visual}
                  </div>

                  {/* Mirror shine reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-3xl"></div>
                </motion.div>
              );
            }

            // Render "Why LUCA?" bottom banner
            if (item.isWhyLuca) {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className={`group relative flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-md overflow-hidden hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-default ${item.colSpan} ${item.rowSpan}`}
                >
                  {/* Left content block */}
                  <div className="relative z-10 w-full md:w-[60%] flex flex-col justify-center h-full">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase tracking-wider font-semibold w-fit">
                      <Globe className="w-3.5 h-3.5" />
                      <span>Designed & Built in India</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Right visual block */}
                  <div className="relative w-full md:w-[40%] h-[180px] md:h-full flex items-center justify-center overflow-hidden pointer-events-none mt-6 md:mt-0">
                    {item.visual}
                  </div>

                  {/* Shimmer reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-3xl"></div>
                </motion.div>
              );
            }

            // Render normal supporting cards
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`group relative flex flex-col justify-between p-6 h-[220px] rounded-3xl bg-white/[0.01] border border-white/5 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-default ${item.colSpan} ${item.rowSpan}`}
              >
                <div className="relative z-10 max-w-[80%]">
                  <div className="mb-4 inline-flex p-2 rounded-xl bg-white/5 border border-white/5 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 font-light">
                    {item.subtitle}
                  </p>
                </div>

                {/* Coded interactive visual renders */}
                {item.visual}

                {/* Shimmer reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none rounded-3xl"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductBento;
