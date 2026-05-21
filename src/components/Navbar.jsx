import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  return (
    <>
      {/* Premium Violet Announcement Banner (DeepInfra-inspired) */}
      <div className="fixed top-0 left-0 right-0 w-full z-50 bg-[#050409]/80 backdrop-blur-md border-b border-[#512DA8]/20 h-9 flex items-center justify-center text-center px-4 pointer-events-auto select-none">
        {/* Subtle Violet Light Diffusion Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#512DA8]/[0.08] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#512DA8]/[0.3] to-transparent blur-[1px]"></div>
        
        <span className="text-[11px] md:text-xs text-gray-300 font-medium relative z-10 tracking-wide">
          10X raises seed round to scale native ambient intelligence —{' '}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            className="text-white underline hover:text-[#512DA8] transition-all duration-300 font-semibold cursor-pointer whitespace-nowrap"
          >
            read the announcement
          </a>
        </span>
      </div>

      <div className="fixed top-14 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
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
