import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PageGateways = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const gateways = [
    {
      title: 'Hardware',
      description: 'Specialized silicon and embedded systems designed to run AI with zero latency.',
      image: '/hardware_gateway_card.png',
      link: '/product',
      buttonText: 'Know more'
    },
    {
      title: 'AI',
      description: 'State-of-the-art foundation models and architectures built for the future of intelligence.',
      image: '/luca-telugu.png',
      link: '/ai',
      buttonText: 'Know more'
    }
  ];

  const handleMouseEnter = (index) => {
    if (index === 1 && !hasPlayed) {
      setHasPlayed(true);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = (index) => {
    if (index === 1) {
      setHasPlayed(false);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gateways.map((gateway, i) => (
          <div 
            key={i} 
            className="group relative"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            {/* Border Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative h-full bg-[#04040c] border border-white/10 rounded-[32px] overflow-hidden flex flex-col">
              {/* Image/Video Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#04040c] flex items-center justify-center">
                {i === 1 ? (
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Static LUCA Eyes (Always visible by default) */}
                    <div className={`flex items-center justify-center gap-8 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)]"></div>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)]"></div>
                    </div>

                    {/* Video for AI Card (Overlay during animation) */}
                    <video
                      ref={videoRef}
                      src="/eye video.mp4"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                      muted
                      playsInline
                      onEnded={handleVideoEnd}
                    />
                  </div>
                ) : (
                  <img 
                    src={gateway.image} 
                    alt={gateway.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04040c] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col items-start flex-grow">
                <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">{gateway.title}</h3>
                <p className="text-[#999] text-[15px] leading-relaxed mb-8 max-w-sm">
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
