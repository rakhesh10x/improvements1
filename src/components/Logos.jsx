import React, { useState, useEffect } from 'react';

const logos = [
  { src: 'https://i.ibb.co/4w7vRPF9/Activate-Logo-color-white-e1601561941855-removebg-preview.png', alt: 'Activate' },
  { src: 'https://i.ibb.co/xVrHgHw/Amazon-Web-Services-Logo-svg-1-removebg-preview.png', alt: 'AWS' },
  { src: 'https://i.ibb.co/pvVYDJmC/Bharat-AI-Mission-Logo-removebg-preview.png', alt: 'Bharat AI Mission', scale: 'h-14 md:h-20' },
  { src: 'https://i.ibb.co/hJYm1Qcq/Copy-of-IMG-20260409-WA0019-removebg-preview.png', alt: 'Partner' },
  { src: 'https://i.ibb.co/BHBFnLGx/DPIIT-header-removebg-preview.png', alt: 'DPIIT' },
  { src: 'https://i.ibb.co/vxZZr3YS/wehub-logo3-removebg-preview.png', alt: 'WeHub' },
];

const LogoGroup = () => (
  <div className="flex items-center gap-14 md:gap-20 flex-shrink-0 px-10">
    {logos.map((logo, i) => (
      <div key={i} className="h-12 md:h-16 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          decoding="async"
          loading="lazy"
          className={`${logo.scale || 'h-8 md:h-10'} w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert`}
        />
      </div>
    ))}
  </div>
);

const Logos = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-32 w-full" />;

  return (
    <section className="relative z-20 mt-24 w-full overflow-hidden">
      <p className="text-[#A0A0A0] text-[10px] font-bold uppercase tracking-[0.3em] mb-3 text-center">
        Officially Collaborated & Backed By
      </p>

      <div className="border-y border-white/10 pt-4 pb-4">
        <div className="relative w-full">
          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee -mb-4 flex">
            <LogoGroup />
            <LogoGroup />
            <LogoGroup />
            <LogoGroup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
