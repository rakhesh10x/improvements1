import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollYRef.current;

      // Keep the banner stable and visible when inside the top safety zone (<= 50px)
      if (currentScrollY <= 50) {
        setIsBannerVisible(true);
        lastScrollYRef.current = currentScrollY;
      } else if (Math.abs(scrollDiff) > 8) {
        if (scrollDiff > 0) {
          // Scrolling down -> hide banner smoothly
          setIsBannerVisible(false);
        } else {
          // Scrolling up -> show banner smoothly
          setIsBannerVisible(true);
        }
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Premium DeepInfra-style Top Announcement Banner */}
      <div 
        className={`fixed top-0 left-0 right-0 w-full z-40 bg-gradient-to-r from-[#040308] via-[#0d0924] to-[#040308] backdrop-blur-xl border-b border-[#512DA8]/25 h-9 flex items-center justify-center text-center px-4 pointer-events-auto select-none transition-transform duration-500 ease-in-out shadow-[0_4px_30px_rgba(81,45,168,0.20)] ${
          isBannerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Rich Violet Light Diffusion and Premium Gradient Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#512DA8]/0.13 to-transparent pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8a63e5]/40 to-transparent blur-[0.2px] z-10"></div>
        
        {/* Soft bottom atmospheric glow/bloom diffusion */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[55%] h-3 bg-[#512DA8]/12 blur-md pointer-events-none rounded-full z-0"></div>

        <span className="text-[11px] md:text-xs text-zinc-200 font-medium relative z-10 tracking-wide flex items-center justify-center gap-1.5">
          <span>10X Technologies site is still under construction.</span>
          <span className="text-zinc-600 select-none">•</span>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            className="text-white underline hover:text-[#a78bfa] transition-colors duration-300 font-semibold cursor-pointer whitespace-nowrap"
          >
            contact support
          </a>
        </span>
      </div>

      {/* GPU-Accelerated Fixed Navbar Wrapper (Statically top-6, dynamically translated via translateY) */}
      <div 
        className={`fixed w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none top-6 transition-transform duration-500 ease-in-out ${
          isBannerVisible ? 'translate-y-8' : 'translate-y-0'
        }`}
      >
        <nav className="w-full max-w-[1000px] bg-white/[0.01] backdrop-blur-[2px] border border-white/[0.05] px-8 py-1.5 rounded-full flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-auto transition-all">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center cursor-pointer group">
              <img 
                src="https://i.ibb.co/LhBhDPhX/Screenshot-2026-05-11-153816-removebg-preview.png"
                alt="10xTechnologies Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm text-[#A0A0A0]">
              <Link to="/product" className="hover:text-white transition-colors">Product</Link>
              <Link to="/ai" className="hover:text-white transition-colors">AI</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={openContactModal}
              className="bg-[#512da8] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(81,45,168,0.4)] hover:shadow-[0_0_30px_rgba(81,45,168,0.6)] hover:scale-105 active:scale-95 transition-all"
            >
              <span className="relative z-10 tracking-wide">Contact Us</span>
            </button>
          </div>

          <button className="md:hidden text-[#A0A0A0] hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
