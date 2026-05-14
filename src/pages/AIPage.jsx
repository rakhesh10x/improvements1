import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Starfield from '../components/Starfield';
import FeatureLinks from '../components/FeatureLinks';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import { Sparkles, Layers, Settings2, ArrowUpRight, MessageCircle, Zap, Target, Shield } from 'lucide-react';

const AIPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: 'Point it at a task.',
      desc: 'Pick an open model, describe the task in plain English, ship the endpoint. We handle the eval set, the routing, the autoscaling.',
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: 'Watch every request.',
      desc: 'Live traffic streams into a private, in-region eval store. We auto-cluster confusing inputs and surface where the model is hesitating.',
    },
    {
      icon: <Settings2 className="w-5 h-5 text-purple-400" />,
      title: 'Quietly retrain.',
      desc: 'Once a cluster of confusion is big enough, we kick off a LoRA run on a separate fleet, validate against your evals, and hot-swap the adapter.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative w-full flex flex-col overflow-x-hidden">
      <style>{`
        @keyframes eyeBlink {
          0%, 88%, 100% { transform: scaleY(1); }
          93% { transform: scaleY(0.06); }
        }
        .eye { animation: eyeBlink 5s ease-in-out infinite; transform-origin: center; }
        .eye-right { animation-delay: 0.08s; }

        @keyframes scanMove {
          0%   { top: 14%; }
          100% { top: 82%; }
        }
        .scan-line {
          animation: scanMove 2.4s ease-in-out infinite alternate;
        }
        .scan-glow {
          animation: scanMove 2.4s ease-in-out infinite alternate;
        }

        @keyframes cornerPulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1;   }
        }
        .corner-bracket { animation: cornerPulse 2s ease-in-out infinite; }
      `}</style>

      <div className="bg-noise fixed pointer-events-none z-50"></div>
      <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-40"></div>

      <div className="absolute top-0 left-0 right-0 h-[600px] w-full pointer-events-none z-0 overflow-hidden">
        <Starfield />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar openContactModal={() => setIsContactModalOpen(true)} />

        {/* Hero */}
        <main className="flex-1 flex items-center justify-center px-6 pt-40 pb-24">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">

            {/* Left */}
            <div className="flex flex-col gap-5 lg:gap-6">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3 py-1 w-fit">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span className="text-purple-400 text-[9px] uppercase tracking-[0.35em] font-bold">Introducing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
                <span style={{ color: '#512da8' }}>10X</span>
                <br />
                <span className="text-white">Artificial</span>
                <br />
                <span className="text-white">Intelligence.</span>
              </h1>

              <p className="text-[#888] text-sm leading-relaxed max-w-[280px]">
                10X AI is our core intelligence layer built for real-world communication. It understands nuance, context, intent, and meaning — the way humans do.
              </p>

              <div className="flex items-center gap-5">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn-premium px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-1.5">
                  Explore Docs <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Center Card */}
            <div className="flex justify-center">
              <div
                className="relative w-[300px] md:w-[340px] rounded-[45px] bg-[#04040c] overflow-hidden flex flex-col"
                style={{ aspectRatio: '4/5', boxShadow: '0 0 60px rgba(236,72,153,0.08), 0 0 120px rgba(139,92,246,0.06)' }}
              >
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

                {/* ── Corner brackets ── */}
                {/* top-left */}
                <div className="corner-bracket absolute top-3 left-3 w-5 h-5 border-t-[2px] border-l-[2px] border-pink-400/80 rounded-tl-sm pointer-events-none z-30"></div>
                {/* top-right */}
                <div className="corner-bracket absolute top-3 right-3 w-5 h-5 border-t-[2px] border-r-[2px] border-pink-400/80 rounded-tr-sm pointer-events-none z-30"></div>
                {/* bottom-left */}
                <div className="corner-bracket absolute bottom-3 left-3 w-5 h-5 border-b-[2px] border-l-[2px] border-pink-400/80 rounded-bl-sm pointer-events-none z-30"></div>
                {/* bottom-right */}
                <div className="corner-bracket absolute bottom-3 right-3 w-5 h-5 border-b-[2px] border-r-[2px] border-pink-400/80 rounded-br-sm pointer-events-none z-30"></div>

                {/* ── Scan line ── */}
                <div
                  className="scan-line absolute left-0 right-0 h-[1.5px] z-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent 0%, rgba(236,72,153,0.9) 25%, rgba(167,139,250,1) 50%, rgba(236,72,153,0.9) 75%, transparent 100%)' }}
                ></div>
                {/* Scan glow beneath line */}
                <div
                  className="scan-glow absolute left-0 right-0 h-10 z-20 pointer-events-none -mt-5"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(236,72,153,0.06), transparent)' }}
                ></div>

                {/* Status badge */}
                <div className="relative z-10 flex justify-center pt-5">
                  <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,1)]"></span>
                    <span className="text-white text-xs font-medium tracking-wide">AI Active</span>
                  </div>
                </div>

                {/* Eyes */}
                <div className="relative z-10 flex-1 flex items-center justify-center gap-10">
                  <div className="eye w-[74px] h-[74px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)]"></div>
                  <div className="eye eye-right w-[74px] h-[74px] rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.25),0_0_60px_rgba(255,255,255,0.1)]"></div>
                </div>

                {/* Bottom text */}
                <div className="relative z-10 px-5 pb-5 pt-3 bg-gradient-to-t from-black/80 to-transparent text-center">
                  <p className="text-white/80 text-xs tracking-wide">Understanding. Reasoning. Expressing.</p>
                  <p className="text-purple-400 font-semibold text-sm mt-1">Fluently.</p>
                </div>

                {/* Inset shadow */}
                <div className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)', borderRadius: '45px' }}
                ></div>
              </div>
            </div>

            {/* Right: Features */}
            <div className="flex flex-col gap-7">
              {features.map((feat, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feat.title}</h3>
                    <p className="text-[#666] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>

        {/* Capabilities Section */}
        <section className="relative z-10 px-6 pb-16">
          <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#0d0d18] border border-white/[0.07] p-7 md:p-9">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8 items-start">

              {/* Left label */}
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-xl font-bold leading-snug">
                  Built for fluent<br />intelligence
                </h2>
                <p className="text-[#666] text-xs leading-relaxed">
                  10X AI powers the next generation of applications with human-like understanding and expression.
                </p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors text-xs font-medium flex items-center gap-1.5 w-fit">
                  See all capabilities <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right: 4 capability cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {[
                  {
                    icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
                    title: 'Deep Understanding',
                    desc: 'Grasps nuance, context and intent across languages and domains.',
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-purple-400" />,
                    title: 'Natural Expression',
                    desc: 'Generates responses that feel natural, fluent and human-like.',
                  },
                  {
                    icon: <Target className="w-5 h-5 text-purple-400" />,
                    title: 'Real-world Ready',
                    desc: 'Trained for messy, real-world conversations, not just clean benchmarks.',
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-purple-400" />,
                    title: 'Private & Secure',
                    desc: 'Enterprise-grade privacy with on-prem, VPC and regional control.',
                  },
                ].map((cap, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                      {cap.icon}
                    </div>
                    <h3 className="text-white text-sm font-semibold leading-snug">{cap.title}</h3>
                    <p className="text-[#666] text-xs leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Feature Links */}
        <div className="relative z-10">
          <FeatureLinks mode="ai" />
        </div>

        <Footer openContactModal={() => setIsContactModalOpen(true)} />
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default AIPage;
