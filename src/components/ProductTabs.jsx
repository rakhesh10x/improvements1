import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play, Cpu, Layers, Sparkles, AudioWaveform, Globe, Shield, Brain } from 'lucide-react';

const DURATION = 5000;

const tabs = [
  {
    id: 'hardware',
    title: 'Hardware',
    heading: 'Engineered Hardware',
    description: 'Custom-built intelligent hardware designed for natural interaction, spatial awareness, and always-on responsiveness.',
    features: [
      'Spatial audio system',
      'Intelligent sensors',
      'Edge AI processing',
      'Ambient interaction',
      'Premium industrial design'
    ],
    visual: (
      <div className="relative w-full h-full min-h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_80px_rgba(81,45,168,0.2)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/30 blur-[100px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-600/20 blur-[80px] rounded-full" />
        <motion.div
          initial={{ rotate: -5, scale: 0.95 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="relative z-10 w-64 h-64 border border-white/10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl flex flex-col items-center justify-center p-6 shadow-2xl"
        >
          <div className="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center bg-black mb-4 relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
            <AudioWaveform className="w-10 h-10 text-purple-400 relative z-10" />
          </div>
          <div className="w-full flex justify-between px-4 mt-6">
            <div className="w-12 h-2 rounded-full bg-white/10" />
            <div className="w-12 h-2 rounded-full bg-purple-500/40" />
            <div className="w-12 h-2 rounded-full bg-white/10" />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'os',
    title: 'OS',
    heading: 'LUCA OS',
    description: 'A deeply integrated operating system built specifically for AI-native experiences.',
    features: [
      'Voice-first interaction',
      'Real-time intelligence',
      'Adaptive interface system',
      'Context-aware computing',
      'Cross-device ecosystem'
    ],
    visual: (
      <div className="relative w-full h-full min-h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_80px_rgba(59,130,246,0.15)]">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-indigo-600/20 blur-[100px] rounded-full" />
        <div className="relative z-10 w-72 h-48 border border-white/10 rounded-xl bg-[#0a0a0f] overflow-hidden flex flex-col">
          <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3 relative">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><Layers className="w-4 h-4 text-blue-400" /></div>
              <div className="h-2 bg-white/10 rounded-full w-24" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center"><Globe className="w-4 h-4 text-indigo-400" /></div>
              <div className="h-2 bg-white/10 rounded-full w-32" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center"><Shield className="w-4 h-4 text-purple-400" /></div>
              <div className="h-2 bg-white/10 rounded-full w-20" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'ai',
    title: 'AI',
    heading: 'Conversational AI',
    description: 'Human-centered intelligence capable of understanding, assisting, and evolving naturally.',
    features: [
      'Natural conversation',
      'Personalized memory',
      'Multimodal understanding',
      'Real-time reasoning',
      'Emotion-aware interaction'
    ],
    visual: (
      <div className="relative w-full h-full min-h-[400px] flex items-center justify-center rounded-2xl overflow-hidden bg-black border border-white/5 shadow-[inset_0_0_100px_rgba(217,70,239,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-600/30 blur-[100px] rounded-full" />
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10"
        >
          <div className="relative w-40 h-40 border border-fuchsia-500/30 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-1px] rounded-full border border-transparent border-t-fuchsia-400/50 border-r-fuchsia-400/50"
            />
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-fuchsia-600/40 to-purple-600/40 blur-md absolute" />
            <Brain className="w-12 h-12 text-fuchsia-300 relative z-10" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-full h-full"
            >
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-fuchsia-400 rounded-full shadow-[0_0_15px_rgba(232,121,249,0.8)]" />
              <div className="absolute bottom-4 right-2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }
];

const ProductTabs = () => {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [isPaused,  setIsPaused]    = useState(false);
  const [progress,  setProgress]    = useState(0); // 0-100

  const rafRef        = useRef(null);
  const startTimeRef  = useRef(null);
  const pausedAtRef   = useRef(0);
  const isPausedRef   = useRef(false);
  const activeIdxRef  = useRef(0);

  const cancelAnim = () => cancelAnimationFrame(rafRef.current);

  const startAnim = useCallback((fromPct = 0) => {
    cancelAnim();
    startTimeRef.current = performance.now() - (fromPct / 100) * DURATION;

    const tick = (now) => {
      if (isPausedRef.current) return;
      const pct = Math.min(((now - startTimeRef.current) / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setActiveIdx(prev => (prev + 1) % tabs.length);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // Reset & start when tab changes
  useEffect(() => {
    setProgress(0);
    pausedAtRef.current = 0;
    activeIdxRef.current = activeIdx;
    if (!isPausedRef.current) startAnim(0);
    return cancelAnim;
  }, [activeIdx, startAnim]);

  const handlePauseToggle = () => {
    const next = !isPaused;
    isPausedRef.current = next;
    setIsPaused(next);
    if (next) {
      pausedAtRef.current = progress;
      cancelAnim();
    } else {
      startAnim(pausedAtRef.current);
    }
  };

  const handleTabClick = (idx) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  const activeTab = tabs[activeIdx];

  return (
    <section className="py-4 lg:py-6 bg-black relative z-10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Built From the Ground Up
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400"
          >
            LUCA combines hardware, operating system, and conversational AI into one unified ecosystem.
          </motion.p>
        </div>

        {/* Full-width tab bar */}
        <div className="flex items-stretch w-full mb-10 border-b border-white/[0.07]">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(idx)}
              className={`relative flex-1 py-4 text-center text-sm md:text-base font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                activeIdx === idx ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.title}

              {/* Track line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.07]" />

              {/* Progress fill — only on active tab */}
              {activeIdx === idx && (
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-purple-400"
                  style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                />
              )}
            </button>
          ))}

          {/* Pause / Play button */}
          <button
            onClick={handlePauseToggle}
            className="px-5 py-4 text-zinc-500 hover:text-white transition-colors duration-200 shrink-0 cursor-pointer border-b border-white/[0.07]"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused
              ? <Play  className="w-4 h-4" />
              : <Pause className="w-4 h-4" />}
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                  {activeTab.heading}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {activeTab.description}
                </p>
                <ul className="flex flex-col gap-4 mt-4">
                  {activeTab.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="order-1 lg:order-2 w-full h-full">
                {activeTab.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProductTabs;
