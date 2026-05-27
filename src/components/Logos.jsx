import React, { useState, useEffect } from 'react';

const logos = [
  { src: `${import.meta.env.BASE_URL}slider-logos/moreyeahs.png`, alt: 'MoreYeahs' },
  { src: `${import.meta.env.BASE_URL}slider-logos/ggu-new-logo.png`, alt: 'GGU' },
  { src: `${import.meta.env.BASE_URL}slider-logos/ah-logo.png`, alt: 'AH Logo' },
  { src: `${import.meta.env.BASE_URL}slider-logos/meity-startup-hub-meity-startup-hub-01-01.png`, alt: 'MeitY Startup Hub' },
  { src: `${import.meta.env.BASE_URL}slider-logos/dpiit-header.png`, alt: 'DPIIT' },
  { src: `${import.meta.env.BASE_URL}slider-logos/7292-nvidia.png`, alt: 'NVIDIA' },
  { src: `${import.meta.env.BASE_URL}slider-logos/activate-logo_color-white-e1601561941855.png`, alt: 'AWS Activate' },
  { src: `${import.meta.env.BASE_URL}slider-logos/bharat_ai_mission_logo.png`, alt: 'Bharat AI Mission' },
];

const LogoGroup = () => (
  <div className="flex items-center gap-8 md:gap-14 flex-shrink-0 px-6">
    {logos.map((logo, i) => (
      <div key={i} className="h-12 md:h-16 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          decoding="async"
          loading="lazy"
          className="w-24 md:w-32 h-8 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
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
      <p className="text-tagline-02 text-[#A0A0A0] uppercase mb-3 text-center">
        COLLABORATED & BACKED BY
      </p>

      <div className="border-y border-white/10 pt-4 pb-4">
        <div className="relative w-full">
          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex">
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
