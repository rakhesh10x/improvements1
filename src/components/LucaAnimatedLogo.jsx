import React from 'react';
import { motion } from 'framer-motion';

const LucaAnimatedLogo = () => {
  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center pointer-events-none">
      {/* Dynamic Glow Background - Appears last as glow stabilizes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-white/[0.03] blur-[120px] rounded-full"
      />
      
      <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        {/* Base Black Interior */}
        <motion.circle
          cx="250"
          cy="250"
          r="198"
          fill="black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Outer Ring 1 (Main Perimeter) */}
        <motion.circle
          cx="250"
          cy="250"
          r="200"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0, rotate: -120 }}
          animate={{ pathLength: 1, opacity: 1, rotate: -120 }}
          transition={{ 
            pathLength: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.3 }
          }}
          style={{ originX: "250px", originY: "250px" }}
        />

        {/* Inner Ring 2 (Offset for 3D Depth Effect) */}
        <motion.circle
          cx="262"
          cy="238"
          r="195"
          fill="none"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0, rotate: 60 }}
          animate={{ pathLength: 1, opacity: 0.4, rotate: 60 }}
          transition={{ 
            pathLength: { duration: 1.8, delay: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.5, delay: 0.4 }
          }}
          style={{ originX: "262px", originY: "238px" }}
        />

        {/* The Eyes (LUCA's Signature Feature) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.9, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          {/* Left Eye */}
          <circle 
            cx="210" 
            cy="240" 
            r="18" 
            fill="white" 
            className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          />
          {/* Right Eye */}
          <circle 
            cx="280" 
            cy="240" 
            r="18" 
            fill="white" 
            className="filter drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          />
        </motion.g>

        {/* Subtle bottom highlight */}
        <motion.path
          d="M 180 420 Q 250 435 320 420"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
      </svg>
    </div>
  );
};

export default LucaAnimatedLogo;
