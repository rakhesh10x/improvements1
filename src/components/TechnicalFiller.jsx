import React from 'react';

const TechnicalFiller = () => {
  return (
    <div 
      className="w-full max-w-[1200px] mx-auto h-[120px] overflow-hidden my-8 md:my-12"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}dotlnes-v2.svg)`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    />
  );
};

export default TechnicalFiller;
