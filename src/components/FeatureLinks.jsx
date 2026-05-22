import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ShineBorder from './ShineBorder';

const FeatureLinks = ({ mode = 'all' }) => {
  const navigate = useNavigate();

  const allCards = [
    {
      category: 'Product',
      title: 'LUCA AI',
      description: 'Emotionally aware & OS integration. Interacts naturally, feels more like a companion than an AI device.',
      image: '/resolution changed luca ai  image.png',
      link: 'https://shesettipavankumarswamy-luca.hf.space/',
      buttonText: 'Try LUCA'
    },
    {
      category: 'Product',
      title: 'Try Our Foundation Models',
      description: "We're launching open access to our native models for fine-tuning, inferencing, and deployment.",
      image: '/resolution changed lfm image.png',
      link: 'https://huggingface.co/spaces/shesettipavankumarswamy/lif-v1',
      route: '/models',
      buttonText: 'Try Now'
    },
    {
      category: 'Developer',
      title: 'Advanced Tokenizer & APIs',
      description: 'The future belongs to models with architectures crafted, optimized, and deployed for focused, low-latency tasks.',
      image: '/resolution chnaged tokenization.png',
      link: 'https://shesettipavankumarswamy-lif-v1.hf.space',
      buttonText: 'Try Now'
    },
    {
      category: 'Research',
      title: 'The Architecture Behind LUCA',
      description: 'The research behind our custom OS, where fine-tuning SLM becomes a closed loop.',
      image: '/resolution changed reserach container.png',
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

  const handleTryClick = (e, card) => {
    e.preventDefault();
    if (!card.link || card.link === '#') return;
    if (card.route) {
      navigate(card.route);
    } else {
      navigate('/try', { state: { url: card.link, title: card.title } });
    }
  };

  return (
    <section className="relative z-20 w-full max-w-[1360px] mx-auto px-6 py-4 lg:py-6">
        <div className="flex flex-col gap-12 lg:gap-16">
          {cards.map((card, i) => {
            // Calculate the original index to preserve alternating logic and card 4's unique style
            const originalIndex = allCards.findIndex(c => c.title === card.title);

            return (
              <div
                key={i}
                className={originalIndex === 3 ? "group relative overflow-hidden rounded-[32px] bg-white/[0.01] backdrop-blur-md border border-white/[0.05] group-hover:border-transparent transition-all duration-500" : "py-8"}
              >
                {originalIndex === 3 && (
                  <>
                    <ShineBorder 
                      borderWidth={1}
                      duration={8}
                      shineColor={['#a78bfa', '#c084fc']}
                      className="opacity-[0.12] group-hover:opacity-[0.85] transition-opacity duration-500 z-30"
                    />
                    {/* Internal Premium Glows */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(167,139,250,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-2 ${originalIndex === 3 ? 'gap-0 items-stretch' : 'gap-16 lg:gap-24 items-center'} relative z-10`}>
                  {/* Image Section */}
                  <div className={`relative ${originalIndex === 3 ? 'w-full h-full min-h-[250px] md:min-h-0 flex items-center justify-center' : 'aspect-[16/10] rounded-[24px] overflow-hidden group w-full bg-[#08080f] border border-white/[0.05] hover:border-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500'} ${
                    (originalIndex === 3) ? 'md:order-1' : (originalIndex === 1) ? 'md:order-1 md:mr-auto' : 'md:order-2 md:ml-auto'
                  }`}
                  >
                    {originalIndex !== 3 && (
                      <ShineBorder 
                        borderWidth={1}
                        duration={8}
                        shineColor={
                          originalIndex === 0 
                            ? ['#a78bfa', '#7c3aed'] 
                            : originalIndex === 1 
                              ? ['#a78bfa', '#6366f1'] 
                              : ['#8b5cf6', '#a78bfa']
                        }
                        className="opacity-[0.12] group-hover:opacity-[0.85] transition-opacity duration-500 z-30"
                      />
                    )}

                    {/* Internal Premium Glow */}
                    {originalIndex !== 3 && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(81,45,139,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                    )}

                    {/* Image with Smoother Fade Sync */}
                    <img
                      src={`${import.meta.env.BASE_URL}${card.image.startsWith('/') ? card.image.slice(1) : card.image}`}
                      alt={card.title}
                      decoding="async"
                      loading="lazy"
                      className={originalIndex === 3 ? "w-full h-full object-cover object-left opacity-100 relative z-10" : "w-full h-full transition-all duration-1000 opacity-80 group-hover:opacity-100 object-contain object-center relative z-10"}
                      style={originalIndex === 3 ? {
                        maskImage: 'linear-gradient(to right, black 95%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 95%, transparent 100%)'
                      } : {}}
                    />

                    {/* Gloss reflection - removed for research card to avoid artifacts */}
                    {originalIndex !== 3 && (
                      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-br from-white/[0.05] via-transparent to-transparent"></div>
                    )}

                    {/* Top edge shimmer - removed for research card to avoid artifacts */}
                    {originalIndex !== 3 && (
                      <div className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 50%, transparent)' }}
                      ></div>
                    )}
                  </div>

                  {/* Text Content Section */}
                  <div className={`flex flex-col h-full justify-center ${
                    (originalIndex === 3) ? 'md:order-2 items-start text-left p-8 md:p-12' : (originalIndex === 1) ? 'md:order-2 items-start text-left md:pl-12 lg:pl-16' : 'md:order-1 items-start text-left md:pr-12 lg:pr-16'
                  }`}>
                    {originalIndex === 3 ? (
                      <div className="flex flex-col items-start w-full max-w-sm ml-0">
                        <span className="text-purple-400 text-[10px] uppercase tracking-[0.5em] font-black mb-1 opacity-60">
                          {card.category}
                        </span>
                        <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold mb-6 tracking-tighter leading-[1.05]">
                          <span className="whitespace-nowrap">The Architecture Behind</span> <br />
                          <span className="text-white">LUCA</span>
                        </h2>
                        <p className="text-[#888] text-[15px] lg:text-[15px] leading-relaxed mb-8 max-w-[340px] font-medium">
                          The research behind our custom OS, <br /> where fine-tuning SLM becomes a closed loop.
                        </p>

                        <a
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 group/btn"
                        >
                          <span>{card.buttonText}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      </div>
                    ) : (
                      <>
                        <span className="text-[#888] text-[12px] uppercase tracking-[0.2em] font-bold mb-4">{card.category}</span>
                        <h2 className="text-white text-2xl md:text-3xl lg:text-[38px] font-bold mb-4 tracking-tight leading-tight">
                          {card.title}
                        </h2>
                        <p className="text-[#999] text-base lg:text-[17px] leading-relaxed mb-6 max-w-lg">
                          {card.description}
                        </p>

                        <button
                          onClick={(e) => handleTryClick(e, card)}
                          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white text-[12px] font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-500 group/btn"
                        >
                          <span>{card.buttonText}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </button>
                      </>
                    )}
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
