import React from 'react';
import { motion } from 'framer-motion';

const LucaAnimatedLogo = () => {
  // Path Drawing Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: 1.8, ease: "easeInOut" },
        opacity: { delay, duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none">
      {/* Final Stabilization Glow - Appears after all drawing is done */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="absolute inset-0 bg-white/[0.03] blur-[100px] rounded-full"
      />
      
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 overflow-visible">
        {/* Interior Base - Fades in softly at the start */}
        <motion.circle
          cx="250"
          cy="250"
          r="198"
          fill="black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* 1. First Outer Circular Line - VISIBLE DRAWING */}
        <motion.path
          d="M 250, 50 A 200, 200 0 1, 1 249.9, 50"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={0}
          initial="hidden"
          animate="visible"
        />

        {/* 2. Second Circular Line (Depth Ring) - VISIBLE DRAWING */}
        <motion.path
          d="M 262, 43 A 195, 195 0 1, 1 261.9, 43"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={0.8}
          initial="hidden"
          animate="visible"
          style={{ opacity: 0.4 }}
        />

        {/* 3. Left Eye Path - VISIBLE DRAWING */}
        <motion.path
          d="M 205, 222 A 18, 18 0 1, 1 204.9, 222"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2.2}
          initial="hidden"
          animate="visible"
        />
        {/* Fill Left Eye after drawing */}
        <motion.circle 
          cx="205" 
          cy="240" 
          r="18" 
          fill="white" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 3.0 }} 
          className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        />

        {/* 4. Right Eye Path - VISIBLE DRAWING */}
        <motion.path
          d="M 295, 222 A 18, 18 0 1, 1 294.9, 222"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          custom={2.6}
          initial="hidden"
          animate="visible"
        />
        {/* Fill Right Eye after drawing */}
        <motion.circle 
          cx="295" 
          cy="240" 
          r="18" 
          fill="white" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 3.4 }} 
          className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        />

        {/* Subtle Bottom Highlight Trace */}
        <motion.path
          d="M 180, 420 Q 250, 440 320, 420"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, delay: 3.2 }}
        />
      </svg>
    </div>
  );
};

export default LucaAnimatedLogo;
