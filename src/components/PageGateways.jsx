import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PageGateways = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = 5;
      videoRef.current.play().catch(err => console.log("Video play interrupted", err));
    }
  };

  const handleVideoEnded = () => {
    setShowVideo(false);
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const gateways = [
    {
      title: 'Hardware',
      description: 'Specialized silicon and embedded systems designed to run AI with zero latency.',
      image: `${import.meta.env.BASE_URL}resolution changed hardware image.png`,
      link: '/product',
      buttonText: 'Know more'
    },
    {
      title: 'AI',
      description: 'State-of-the-art foundation models and architectures built for the future of intelligence.',
      image: `${import.meta.env.BASE_URL}luca eye image.png`,
      link: '/ai',
      buttonText: 'Know more'
    }
  ];

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-6 py-4 lg:py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {gateways.map((gateway, i) => (
          <div 
            key={i} 
            className="group relative h-full"
            onMouseEnter={i === 1 ? handleMouseEnter : undefined}
            onMouseLeave={i === 1 ? handleMouseLeave : undefined}
          >
            <div className="relative h-full bg-white/[0.01] backdrop-blur-md border border-white/[0.05] group-hover:border-white/20 rounded-[32px] overflow-hidden flex flex-col transition-colors duration-500">
              {/* Image/Video Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#04040c] flex items-center justify-center">
                {i === 1 ? (
                  <div 
                    className="relative w-full h-full overflow-hidden bg-[#04040c]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
                    }}
                  >
                    <img 
                      src={gateway.image} 
                      alt={gateway.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${showVideo ? 'opacity-0' : 'opacity-100'}`}
                    />
                    
                    <video
                      ref={videoRef}
                      src={`${import.meta.env.BASE_URL}LUCA blink logo WhiteBG.mp4`}
                      muted
                      playsInline
                      preload="auto"
                      onEnded={handleVideoEnded}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${showVideo ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                ) : (
                  <div 
                    className="relative w-full h-full overflow-hidden bg-[#04040c]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
                    }}
                  >
                    {/* Internal Premium Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(81,45,139,0.15)_0%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                    {/* Image with Fade and Glow Sync */}
                    <img 
                      src={gateway.image} 
                      alt={gateway.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] z-10"
                    />

                    {/* Gloss reflection */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-white/[0.03] via-transparent to-transparent"></div>

                    {/* Top edge shimmer */}
                    <div className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08) 50%, transparent)' }}
                    ></div>
                    
                    {/* Cinematic Darkening / Ambient Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-25 pointer-events-none"></div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#04040c] to-transparent z-20 pointer-events-none opacity-30"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col items-start flex-grow">
                <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">{gateway.title}</h3>
                <p className="text-[#888] text-[15px] leading-relaxed mb-8 max-w-sm">
                  {gateway.description}
                </p>
                
                <Link 
                  to={gateway.link}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span>{gateway.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageGateways;
