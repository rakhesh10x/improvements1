import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  {
    title: "Local Inference Pipelines",
    text: "Execute complex reasoning tasks directly on secure, on-premise hardware without exposing sensitive data to external networks. Predictable latency for mission-critical operations.",
    image: "/workflow_local.png"
  },
  {
    title: "Secure Knowledge Retrieval",
    text: "Connect your private enterprise documents to a highly optimized retrieval-augmented generation (RAG) system. Ensure proprietary knowledge stays strictly within your perimeter.",
    image: "/workflow_secure.png"
  },
  {
    title: "Enterprise Intelligence",
    text: "Deploy customized intelligence layers across departments. From legal analysis to automated compliance, embed specialized AI agents directly into your daily workflows.",
    image: "/workflow_intel.png"
  }
];

const WorkflowShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full min-h-screen py-24 bg-[#050505] flex items-center justify-center border-t border-white/5">
      <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-6 items-start">
        
        {/* Left Side: Cards (40%) */}
        <div className="lg:col-span-5 flex flex-col gap-3 z-20 sticky top-32">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Intelligence embedded in<br/>your core operations.
          </h2>
          
          <div className="flex flex-col gap-3">
            {cards.map((card, idx) => {
              const isActive = activeIndex === idx;
              const isPast = activeIndex > idx;
              
              return (
                <div 
                  key={idx}
                  className="relative p-5 lg:p-7 rounded-3xl border border-white/5 bg-[#0a0a0f] overflow-hidden flex flex-col justify-center transition-colors duration-500 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPaused(true);
                  }}
                >
                  {/* Faint Background Track */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/[0.03]"></div>
                  
                  {/* Active Animated Progress Bar */}
                  <motion.div 
                    className="absolute left-0 top-0 w-1 bg-[#512da8] origin-top"
                    initial={{ height: "0%" }}
                    animate={{ 
                      height: isActive ? "100%" : isPast ? "100%" : "0%" 
                    }}
                    transition={{ 
                      duration: isActive && !isPaused ? 4 : 0.3, 
                      ease: isActive && !isPaused ? "linear" : "easeInOut" 
                    }}
                    onAnimationComplete={() => {
                      if (isActive && !isPaused) {
                        setActiveIndex((activeIndex + 1) % cards.length);
                      }
                    }}
                  />

                  <div className="pl-5">
                    <h3 className={`text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#666]'}`}>
                      {card.title}
                    </h3>
                    
                    {/* Height-animated text container */}
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0,
                        marginTop: isActive ? 12 : 0
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#888] text-sm leading-relaxed font-light">
                        {card.text}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image Container (60%) */}
        <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden border border-white/5 bg-[#050505] z-10 sticky top-32">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ y: "15%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-15%", opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60 pointer-events-none"></div>
              <img 
                src={cards[activeIndex].image} 
                alt={cards[activeIndex].title}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default WorkflowShowcase;
