import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeatureLinks = ({ mode = 'all' }) => {
  const allCards = [
    {
      category: 'Product',
      title: 'LUCA AI',
      description: 'Emotionally aware & OS integration. Interacts naturally, feels more like a companion than an AI device.',
      image: '/luca-telugu.png',
      link: '#',
      buttonText: 'Try LUCA'
    },
    {
      category: 'Product',
      title: 'Try Our Foundation Models',
      description: "We're launching open access to our native models for fine-tuning, inferencing, and deployment.",
      image: '/foundation-models.png.png',
      link: 'https://shesettipavankumarswamy-luca-telugu.hf.space/',
      buttonText: 'Try Now'
    },
    {
      category: 'Developer',
      title: 'Advanced Tokenizer & APIs',
      description: 'The future belongs to models with architectures crafted, optimized, and deployed for focused, low-latency tasks.',
      image: '/akshara_tokenizer_ui.png',
      link: 'https://10xtechnologies.tech/akshara.html',
      buttonText: 'Try Now'
    },
    {
      category: 'Research',
      title: 'The Architecture Behind LUCA',
      description: 'The research behind our custom OS, where fine-tuning SLM becomes a closed loop.',
      image: '/research_data.png',
      link: '#',
      buttonText: 'Blog',
      features: [
        "Custom OS architecture for SLM optimization",
        "Closed-loop fine-tuning infrastructure",
        "Native Telugu tokenizer integration"
      ]
    }
  ];

  const cards = mode === 'home' 
    ? [allCards[3]] 
    : mode === 'ai' 
      ? allCards.slice(0, 3) 
      : allCards;

  return (
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-8 lg:py-12">
      <div className="flex flex-col gap-12 lg:gap-16">
        {cards.map((card, i) => {
          // Calculate the original index to preserve alternating logic and card 4's unique style
          const originalIndex = allCards.findIndex(c => c.title === card.title);
          
          return (
            <div
              key={i}
              className={originalIndex === 3 ? "glass-card group relative overflow-hidden rounded-[32px] p-8 md:p-10 hover:border-purple-500/30 transition-colors" : "py-8"}
            >
              {originalIndex === 3 && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image Section */}
                <div className={`relative aspect-[16/10] rounded-[28px] overflow-hidden group md:max-w-[80%] ${
                  (originalIndex === 3) ? 'md:order-1 mx-auto' : (originalIndex === 1) ? 'md:order-1 md:mr-auto' : 'md:order-2 md:ml-auto'
                } bg-[#08080f] border border-white/[0.07]`}
                  style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.4) inset' }}
                >
                  {/* Image */}
                  <img
                    src={`${import.meta.env.BASE_URL}${card.image.startsWith('/') ? card.image.slice(1) : card.image}`}
                    alt={card.title}
                    className="w-full h-full transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 object-cover relative z-10"
                  />

                  {/* Gloss reflection — diagonal highlight from top-left */}
                  <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent"></div>

                  {/* Top edge shimmer line */}
                  <div className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.18) 40%, rgba(255,255,255,0.18) 60%, transparent)' }}
                  ></div>

                  {/* Hover purple glow */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
                  ></div>

                  {/* Bottom fade into page */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Text Content Section */}
                <div className={`flex flex-col ${
                  (originalIndex === 3) ? 'md:order-2 items-end text-right' : (originalIndex === 1) ? 'md:order-2 items-start text-left md:pl-12 lg:pl-16' : 'md:order-1 items-start text-left md:pr-12 lg:pr-16'
                }`}>
                  <span className="text-[#888] text-[12px] uppercase tracking-[0.2em] font-bold mb-4">{card.category}</span>
                  <h2 className="text-white text-2xl md:text-3xl lg:text-[38px] font-bold mb-4 tracking-tight leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-[#999] text-base lg:text-[17px] leading-relaxed mb-6 max-w-lg">
                    {card.description}
                  </p>

                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-[13px] font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureLinks;
