import React from 'react';
import { Check, Mic, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  return (
    <section id="product" className="relative z-20 w-full max-w-[1260px] mx-auto px-6 py-6 lg:py-8">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 group">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden group">
            <img 
              src="/luca-telugu.png" 
              alt="LUCA AI conversational speaker" 
              className="w-full h-full transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 object-contain p-6"
            />
          </div>
        </div>
        
        {/* Text Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span className="text-[#888] text-[12px] uppercase tracking-[0.2em] font-bold mb-4">PRODUCT</span>
          <h2 className="text-white text-2xl md:text-3xl lg:text-[38px] font-bold mb-4 tracking-tight leading-tight transition-colors group-hover:text-white">
            LUCA AI
          </h2>
          <p className="text-[#999] text-base lg:text-[17px] leading-relaxed mb-8 max-w-lg">
            Emotionally aware & OS integration. Interacts naturally, feels more like a companion than an AI device.
          </p>
          
          <ul className="space-y-4 mb-10 relative z-10">
            {["Understands your tone, mood & context", "Natively embedded to control on-device functions", "Runs efficiently on-device, reducing latency"].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-[#A0A0A0]">
                <div className="mt-1"><Check className="w-4 h-4 text-purple-400" /></div>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <a 
            href="https://huggingface.co/spaces/shesettipavankumarswamy/luca-telugu"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://huggingface.co/spaces/shesettipavankumarswamy/luca-telugu', '_blank');
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-[13px] font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
          >
            <span>Try LUCA</span>
            <div className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1">&rarr;</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
