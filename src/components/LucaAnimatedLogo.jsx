import React from 'react';
import { motion } from 'framer-motion';

const LucaAnimatedLogo = () => {
  // Path Drawing Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({
      pathLength: 1,
      opacity: custom.opacity || 1,
      transition: {
        pathLength: { delay: custom.delay, duration: 2.2, ease: "easeInOut" },
        opacity: { delay: custom.delay, duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none">
      {/* Final Glow Stabilization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 3.8 }}
        className="absolute inset-0 bg-white/[0.03] blur-[110px] rounded-full"
      />
      
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 overflow-visible">
        {/* Interior Base - Tilted Oval matches the logo geometry */}
        <g transform="rotate(-15 250 250)">
          <motion.ellipse
            cx="250"
            cy="250"
            rx="205"
            ry="188"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1.2, delay: 0.1 }}
          />
        </g>

        {/* The Tilted Rings - Synchronized Flowing Sketch */}
        <g transform="rotate(-15 250 250)">
          {/* 1. Main Outer Ring (Tilted Oval) */}
          <motion.path
            d="M 250, 62 A 205, 188 0 1, 1 249.9, 62"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 0 }}
            initial="hidden"
            animate="visible"
          />

          {/* 2. Parallel Inner Ring - Synchronized Drawing with small lag */}
          <motion.path
            d="M 250, 72 A 195, 178 0 1, 1 249.9, 72"
            fill="none"
            stroke="white"
            strokeWidth="1.1"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 0.2, opacity: 0.5 }}
            initial="hidden"
            animate="visible"
          />
        </g>

        {/* Eyes - Positioned relative to the tilted axis */}
        <g transform="rotate(-15 250 250)">
          {/* Left Eye Path & Fill */}
          <motion.path
            d="M 185, 222 A 18, 18 0 1, 1 184.9, 222"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 2.4 }}
            initial="hidden"
            animate="visible"
          />
          <motion.circle 
            cx="185" 
            cy="240" 
            r="18" 
            fill="white" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 3.2 }} 
            className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          />

          {/* Right Eye Path & Fill */}
          <motion.path
            d="M 285, 222 A 18, 18 0 1, 1 284.9, 222"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={pathVariants}
            custom={{ delay: 2.8 }}
            initial="hidden"
            animate="visible"
          />
          <motion.circle 
            cx="285" 
            cy="240" 
            r="18" 
            fill="white" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 3.6 }} 
            className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          />
        </g>

        {/* Subtle Bottom Dynamic Highlight */}
        <g transform="rotate(-15 250 250)">
          <motion.path
            d="M 150, 410 Q 250, 435 350, 410"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, delay: 3.4 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default LucaAnimatedLogo;
