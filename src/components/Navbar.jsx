import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollYRef.current;

      // Update scrolled state for premium floating visuals
      setIsScrolled(currentScrollY > 20);

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
        className={`fixed w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none top-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isBannerVisible ? 'translate-y-8' : 'translate-y-0'
        }`}
      >
        <nav className={`w-full flex items-center justify-between pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border rounded-full ${
          isScrolled 
            ? 'max-w-[920px] px-8 py-2 bg-[#04040c]/25 backdrop-blur-[14px] border-white/[0.07] shadow-[0_16px_36px_rgba(0,0,0,0.4),0_0_24px_rgba(124,58,237,0.015)]' 
            : 'max-w-[1040px] px-10 py-3 bg-white/[0.01] backdrop-blur-[4px] border-white/[0.02] shadow-none'
        }`}>
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center cursor-pointer group">
              <img 
                src="https://i.ibb.co/LhBhDPhX/Screenshot-2026-05-11-153816-removebg-preview.png"
                alt="10xTechnologies Logo"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-sm text-[#A0A0A0]">
              <Link to="/product" className="hover:text-white transition-colors duration-300 font-medium tracking-wide">Product</Link>
              <Link to="/ai" className="hover:text-white transition-colors duration-300 font-medium tracking-wide">AI</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={openContactModal}
              className="bg-gradient-to-r from-[#512da8] to-[#4c1d95] border border-purple-500/30 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_20px_rgba(81,45,168,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] hover:border-purple-400/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
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
