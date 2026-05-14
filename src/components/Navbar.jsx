import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ openContactModal }) => {
  return (
    <div className="fixed top-6 w-full z-50 flex justify-center px-4 md:px-6 pointer-events-none">
      <nav className="w-full max-w-[1000px] bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-1.5 rounded-full flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] pointer-events-auto transition-all">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center cursor-pointer group">
            <img 
              src="https://i.ibb.co/LhBhDPhX/Screenshot-2026-05-11-153816-removebg-preview.png"
              alt="10xTechnologies Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-5 text-sm text-[#A0A0A0]">
            <Link to="/product" className="hover:text-white transition-colors">Product</Link>
            <Link to="/ai" className="hover:text-white transition-colors">AI</Link>
          </div>
        </div>
        
        <div className="hidden md:block">
          <button 
            onClick={openContactModal}
            className="bg-[#512da8] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(81,45,168,0.4)] hover:shadow-[0_0_30px_rgba(81,45,168,0.6)] hover:scale-105 active:scale-95 transition-all"
          >
            <span className="relative z-10 tracking-wide">Contact Us</span>
          </button>
        </div>

        <button className="md:hidden text-[#A0A0A0] hover:text-white transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
