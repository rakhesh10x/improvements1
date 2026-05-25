import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import vid from '../assets/vid.mp4';

const LucaFeatureSection = ({ openContactModal }) => {
  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.055]"
          style={{ background: 'radial-gradient(circle, rgba(147,90,255,1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, rgba(120,80,255,1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-12 lg:px-[72px] py-4 lg:py-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* ── LEFT: text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[36%] flex flex-col gap-5 shrink-0"
          style={{ paddingLeft: '50px' }}
        >
          {/* Label */}
          <span className="text-purple-400 text-[10px] uppercase tracking-[0.3em] font-bold">
            LUCA INTELLIGENCE
          </span>

          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl lg:text-[36px] font-extrabold tracking-tight leading-[1.15] font-sans">
            Watch our{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)' }}
            >
              Announcement
            </span>
          </h2>

          {/* Body */}
          <p className="text-[#777] text-[13px] leading-[1.75] font-light max-w-[340px]">
            An ambient intelligence platform built for Indian homes and dialects — powered by on-device AI with no lag and no compromise on privacy.
          </p>

          {/* Know More button */}
          <div className="mt-2">
            <button
              onClick={openContactModal}
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-full border border-purple-500/40 bg-transparent text-white text-[11px] uppercase tracking-[0.22em] font-bold transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(147,90,255,0.3)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              Know More
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: video ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full lg:w-[64%]"
          style={{ marginLeft: '-27px', marginRight: '49px', width: 'calc(64% + 137px)' }}
        >
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(147,90,255,0.06)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(147,90,255,0.4), transparent)' }}
            />
            <video
              src={vid}
              controls
              playsInline
              className="w-full h-auto block bg-black"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LucaFeatureSection;
