import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Layers, Radio, Globe, Zap, Sparkles, Volume2, Lock, Eye, X } from 'lucide-react';

const ProductBento = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [isSectionFullyVisible, setIsSectionFullyVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const sectionRef = useRef(null);
  const videoBRef = useRef(null);
  const cardRef = useRef(null);
  const mediaContainerRef = useRef(null);

  // 1. Detect if the section is fully visible
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Check if section occupies the screen correctly:
            // If section height is larger than viewport, it must fill the screen.
            // If section height is smaller than viewport, it must be fully in view.
            const isVisible = rect.height >= viewportHeight
              ? (rect.top <= 100 && rect.bottom >= viewportHeight - 100)
              : (rect.top >= -100 && rect.bottom <= viewportHeight + 100);
            setIsSectionFullyVisible(isVisible);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1b. Measure card dimensions dynamically and calculate recommended resolutions
  useEffect(() => {
    if (!cardRef.current) return;

    const measure = () => {
      const element = cardRef.current;
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      
      const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      
      const contentWidth = rect.width - paddingX;
      const contentHeight = rect.height - paddingY;
      
      setDimensions({ width: contentWidth, height: contentHeight });
      
      const retinaWidth = contentWidth * 2;
      const retinaHeight = contentHeight * 2;
      
      console.log(
        `%c[LUCA Container Dimensions]%c\n` +
        `- Exact Content Width: ${contentWidth.toFixed(2)}px\n` +
        `- Exact Content Height: ${contentHeight.toFixed(2)}px\n` +
        `- Recommended Retina Export Resolution (2x): ${(retinaWidth).toFixed(0)}px x ${(retinaHeight).toFixed(0)}px`,
        'color: #9d4edd; font-weight: bold; font-size: 13px;',
        'color: #ffffff; font-size: 12px;'
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });
    resizeObserver.observe(cardRef.current);
    
    measure();

    return () => resizeObserver.disconnect();
  }, []);

  // 1c. Timeout fallback to ensure isAnimationDone is set after the 0.8s transition completes
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setIsAnimationDone(true);
      }, 850); // 850ms to match the 0.8s transition duration plus a tiny buffer
      return () => clearTimeout(timer);
    } else {
      setIsAnimationDone(false);
    }
  }, [isExpanded]);

  // 2. Intercept scroll wheel events to trigger expansion when fully visible and block page scroll during morph
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isSectionFullyVisible) return;

      if (!isExpanded) {
        // Trigger expansion on scroll UP only (deltaY < 0)
        if (e.deltaY < 0) {
          e.preventDefault();
          setIsExpanded(true);
        }
      } else if (!isAnimationDone) {
        // Block scrolling during expansion animation
        e.preventDefault();
      }
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    // Also handle window-level scroll block during animation
    const preventWindowScroll = (e) => {
      if (isExpanded && !isAnimationDone) {
        e.preventDefault();
      }
    };
    
    window.addEventListener('wheel', preventWindowScroll, { passive: false });

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleWheel);
      }
      window.removeEventListener('wheel', preventWindowScroll);
    };
  }, [isSectionFullyVisible, isExpanded, isAnimationDone]);

  // 3. Intercept touch drag events for mobile compatibility
  useEffect(() => {
    let touchStart = 0;

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isSectionFullyVisible) return;

      if (!isExpanded) {
        const touchCurrent = e.touches[0].clientY;
        const diff = touchStart - touchCurrent;
        
        // diff < -5 is scroll UP (swipe down, content moves down)
        if (diff < -5) {
          e.preventDefault();
          setIsExpanded(true);
        }
      } else if (!isAnimationDone) {
        e.preventDefault();
      }
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      sectionElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    const preventWindowTouch = (e) => {
      if (isExpanded && !isAnimationDone) {
        e.preventDefault();
      }
    };
    
    window.addEventListener('touchmove', preventWindowTouch, { passive: false });

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('touchstart', handleTouchStart);
        sectionElement.removeEventListener('touchmove', handleTouchMove);
      }
      window.removeEventListener('touchmove', preventWindowTouch);
    };
  }, [isSectionFullyVisible, isExpanded, isAnimationDone]);

  // 4. Play video when animation finishes or expands
  useEffect(() => {
    let active = true;
    let timer1, timer2, timer3;
    const video = videoBRef.current;

    const playVideo = async () => {
      if (!video) return;

      // Ensure properties are configured correctly to bypass modern browser autoplay rules
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.loop = true;

      try {
        await video.play();
        console.log("Video started playing successfully.");
      } catch (err) {
        console.warn("Autoplay blocked or failed, waiting for user event...", err);
        
        const forcePlay = async () => {
          if (!active || !video) return;
          try {
            await video.play();
            console.log("Video played successfully via user gesture.");
            window.removeEventListener('click', forcePlay);
            window.removeEventListener('touchstart', forcePlay);
          } catch (clickErr) {
            console.error("Gesture play attempt failed:", clickErr);
          }
        };
        window.addEventListener('click', forcePlay);
        window.addEventListener('touchstart', forcePlay);
      }
    };

    if (isExpanded) {
      // Try playing immediately, plus retry multiple times to handle React render commits
      playVideo();
      timer1 = setTimeout(playVideo, 50);
      timer2 = setTimeout(playVideo, 150);
      timer3 = setTimeout(playVideo, 500);

      return () => {
        active = false;
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      if (video) {
        video.pause();
      }
    }
  }, [isExpanded, isAnimationDone]);

  // 5. Dispatch custom event for navbar hiding/showing
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('luca-bento-expand', { detail: { expanded: isExpanded } }));
  }, [isExpanded]);

  const handleClose = () => {
    setIsAnimationDone(false);
    setIsExpanded(false);
    
    // Smoothly scroll back to the bento section so the user is properly centered
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center pt-10 pb-8 bg-[#000000] z-10 overflow-hidden px-[22px]">
      {/* Scope bento custom grid template areas and exact responsive behavior */}
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

        /* Responsive tablet rules: 2-column balanced grid */
        @media (min-width: 768px) and (max-width: 1023px) {
          .bento-grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas:
              "hero hero"
              "top-row top-row"
              "left1 right1"
              "left2 right2"
              "bottom bottom";
          }
          .bento-top-row-grid {
            grid-template-columns: repeat(2, 1fr);
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
          .bento-top-row-grid {
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
        <motion.div 
          animate={{ opacity: isExpanded ? 0.25 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bento-grid-container w-full mt-0"
        >
          
          {/* ========================================================
              ROW 1: 4 Small Horizontal Cards with 1.4fr 1fr 1fr 1fr (150px height)
              ======================================================== */}
          <div style={{ gridArea: 'top-row' }} className="bento-top-row-grid w-full">
            {/* Card 1: SPATIAL AUDIO (top1) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bento-card-height h-[165px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
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
              className="bento-card-height h-[165px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">EDGE AI</span>
                <Cpu className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
              </div>
              <div className="relative z-10">
                <h3 className="text-white text-sm font-bold tracking-tight mb-1">Local Inference</h3>
                <p className="text-[#888] text-[10px] leading-relaxed">On-device neural network execution with zero latency.</p>
              </div>
            </motion.div>

            {/* Card 3: LUCA OS (top3) */}
            <motion.div
              whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bento-card-height h-[165px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
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
              className="bento-card-height h-[165px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
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
          </div>

          {/* ========================================================
              ROW 2 & 3: CENTER HERO AND SIDE CARDS
              ======================================================== */}

          {/* Card 5: NEURAL PROCESSING (left1) - Shorter vertical card (230px height, Row 2) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left1' }}
            className="bento-card-height h-[215px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">NEURAL CORPS</span>
              <Sparkles className="w-4 h-4 text-zinc-500 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Neural Processing</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">NPUs executing deep neural nodes on the edge for real-time model synthesis.</p>
            </div>
          </motion.div>

          {/* Card 6: LARGE CENTER FEATURE CARD (hero) - Giant Center Card (305px height) */}
          <motion.div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.2)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'hero' }}
            className="bento-hero-height h-[290px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md relative overflow-hidden group cursor-default flex items-center justify-center p-6 select-none"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.06) 0%, transparent 70%)' }}></div>
            
            {/* Clean Premium Media Container */}
            <div 
              style={{
                width: dimensions.width ? `${dimensions.width}px` : '100%',
                height: dimensions.height ? `${dimensions.height}px` : '100%',
              }}
              className="flex items-center justify-center pointer-events-none z-10 overflow-hidden"
            >
              {!isExpanded && (
                <motion.div
                  layoutId="luca-media-container"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.img 
                    src="/resolution%20changed%20bento%20box%20image.png"
                    alt="LUCA AI"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    className="filter brightness-[0.96] contrast-[1.02] drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Card 7: REAL-TIME AI (right1) - Medium vertical card (right side row 2) (230px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right1' }}
            className="bento-card-height h-[215px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">REAL-TIME AI</span>
              <Zap className="w-4 h-4 text-zinc-555 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-sm font-bold tracking-tight mb-1">Predictive Loops</h3>
              <p className="text-[#888] text-[10px] leading-relaxed">Predictive action execution responding instantly to environmental triggers.</p>
            </div>
          </motion.div>

          {/* Card 8: PRIVACY FIRST (right2) - Tall bottom-right card (210px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'right2' }}
            className="bento-card-height h-[210px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">PRIVACY</span>
              <Lock className="w-4 h-4 text-zinc-555 group-hover:text-purple-400/80 transition-colors duration-300" />
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

          {/* Card 9: AMBIENT INTELLIGENCE (left2) - Tall vertical bottom-left card (210px height, Row 3 & 4) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'left2' }}
            className="bento-card-height h-[210px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-6 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">AMBIENT</span>
              <Eye className="w-4 h-4 text-zinc-555 group-hover:text-purple-400/80 transition-colors duration-300" />
            </div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold tracking-tight mb-3">Ambient Intel</h3>
              <p className="text-[#888] text-xs leading-relaxed font-light mb-2">
                Fades quietly into the background, responding only when contextually triggered by presence models.
              </p>
            </div>
          </motion.div>

          {/* Card 10: INDIAN AI ECOSYSTEM (bottom) - Wide bottom-center card (135px height) */}
          <motion.div
            whileHover={{ y: -4, borderColor: 'rgba(120,80,255,0.3)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ gridArea: 'bottom' }}
            className="bento-card-height h-[135px] rounded-[28px] border border-white/[0.05] bg-white/[0.01] backdrop-blur-md p-5 flex flex-col justify-between group cursor-default transition-all overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(120,80,255,0.05) 0%, transparent 70%)' }}></div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold">ECOSYSTEM SYNC</span>
              <Globe className="w-4 h-4 text-zinc-555 group-hover:text-purple-400/80 transition-colors duration-300" />
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

        </motion.div>
      </div>

      {/* Scroll Spacer for Expanded State */}
      {isExpanded && (
        <div className="w-full flex items-center justify-center h-[55vh] bg-black select-none mt-16 mb-12">
          <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto px-8">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#a78bfa] text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold"
            >
              LUCA OS
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
              className="text-white text-3xl md:text-5xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              Building the Future of Ambient Intelligence
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-zinc-400 text-sm md:text-base font-light tracking-wide leading-relaxed max-w-xl mx-auto font-sans"
            >
              Designed to blend seamlessly into everyday life through adaptive AI, real-time intelligence, and immersive ambient computing.
            </motion.p>
          </div>
        </div>
      )}

      {/* Cinematic Modal Video Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <div className="absolute inset-x-0 top-0 h-[100vh] flex items-center justify-center pointer-events-none z-50">
            {/* Dark backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto cursor-pointer"
              onClick={handleClose}
            />

            {/* Cinematic Player */}
            <motion.div
              layoutId="luca-media-container"
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                setIsAnimationDone(true);
              }}
              className="relative w-[90vw] md:w-[85vw] max-w-[1200px] aspect-[16/9] rounded-[24px] border border-white/10 bg-black shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto z-10 flex items-center justify-center"
            >
              {/* Static image shown during morph */}
              <motion.img
                src="/resolution%20changed%20bento%20box%20image.png"
                alt="LUCA AI"
                initial={false}
                animate={{ opacity: isAnimationDone ? 0 : 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              />

              {/* Video layer */}
              <video
                ref={(el) => {
                  videoBRef.current = el;
                  if (el) {
                    el.muted = true;
                    el.defaultMuted = true;
                    el.playsInline = true;
                    el.loop = true;
                    el.play().catch(err => {
                      console.log("Muted autoplay on mount callback failed:", err);
                    });
                  }
                }}
                src="/bento%20box%20middle%20image%20playback%20video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  opacity: isAnimationDone ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
                className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
              />

              {/* Clean Minimal Close Button */}
              {isAnimationDone && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-35 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductBento;
