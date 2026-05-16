import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PartnerModal from './PartnerModal';

const BackingCards = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const backers = [
    {
      name: 'AWS',
      tagline: 'CLOUD INFRASTRUCTURE',
      heroImage: 'https://i.ibb.co/7xm7tHpW/10-X-AWS-Announcement.png',
      description: 'Leveraging AWS global cloud infrastructure for high-performance model training and secure, scalable deployment.',
      fullContent: 'Our partnership with Amazon Web Services powers the full lifecycle of our AI models — from large-scale distributed training to low-latency global inference. AWS provides the backbone for our secure data pipelines, model versioning, and the APIs that developers use to access Akshara and our Telugu foundation models at scale.',
      highlights: [
        'Distributed model training on AWS EC2 P-series instances',
        'Scalable inference endpoints via Amazon SageMaker',
        'Secure data storage and versioning with S3 and DynamoDB',
        'Global CDN delivery for low-latency API responses',
      ],
      accentColor: '#ff9900',
      borderHover: 'hover:border-orange-400/30',
      gradientRgba: '255,153,0',
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS Logo"
          decoding="async"
          loading="lazy"
          className="h-16 w-auto object-contain opacity-100 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,153,0,0.8)]"
        />
      )
    },
    {
      name: 'Govt of India',
      tagline: 'MEITY STARTUP HUB',
      heroImage: '/MeitY.jpg',
      description: 'Supported and backed by the Ministry of Electronics and Information Technology through the MeitY Startup Hub.',
      fullContent: '10X Technologies is officially recognized and funded by the Government of India through the MeitY Startup Hub under the EiR-2 (Entrepreneur in Residence) program. This backing validates our mission to build indigenous AI hardware and language models tailored for India\'s linguistic diversity, and provides us with the resources, network, and credibility to scale nationally and globally.',
      highlights: [
        'Selected under MeitY GENESIS EiR-2 cohort',
        'Grant funding for AI hardware R&D',
        'Access to government pilot programs and testbeds',
        'Recognition as a deep-tech startup of national interest',
      ],
      accentColor: '#1e90ff',
      borderHover: 'hover:border-blue-500/30',
      gradientRgba: '30,144,255',
      logo: (
        <img
          src="/govt of india-remove.bg.png"
          alt="Govt of India"
          decoding="async"
          loading="lazy"
          className="h-16 w-auto object-contain opacity-100 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(30,144,255,0.8)]"
        />
      )
    },
    {
      name: 'NVIDIA',
      tagline: 'INCEPTION PROGRAM',
      heroImage: '/nvidia1.jpg',
      description: 'Collaborating through NVIDIA Inception for advanced AI compute and hardware-level optimization for our Telugu models.',
      fullContent: '10X Technologies is proud to be part of the NVIDIA Inception Program — a program designed to nurture startups revolutionizing industries with advances in AI and data science. Through this collaboration, we gain access to NVIDIA\'s cutting-edge GPU infrastructure, technical expertise, and go-to-market support to accelerate our foundation model training and on-device inference capabilities.',
      highlights: [
        'Access to NVIDIA DGX Cloud compute for model training',
        'Hardware-level optimization for Telugu LLM inference',
        'Technical mentorship from NVIDIA AI engineers',
        'Priority access to new GPU architectures and SDKs',
      ],
      accentColor: '#76b900',
      borderHover: 'hover:border-[#76b900]/30',
      gradientRgba: '118,185,0',
      logo: (
        <img
          src="/nvidia-remove.bg.png"
          alt="NVIDIA Logo"
          decoding="async"
          loading="lazy"
          className="h-20 w-auto object-contain opacity-100 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(118,185,0,0.8)] scale-110"
        />
      )
    }
  ];

  return (
    <>
    <section className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-4 lg:py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
        {backers.map((backer, i) => (
          <div 
            key={i} 
            className={`relative flex flex-col rounded-[28px] p-10 overflow-hidden border border-white/[0.05] bg-white/[0.01] backdrop-blur-md ${backer.borderHover} transition-all duration-500 group`}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, rgba(${backer.gradientRgba},0.05) 0%, transparent 70%)` }}
            />
            <div className="relative z-10 h-24 flex items-center justify-center mb-10 transition-transform duration-700 group-hover:scale-110">
              {backer.logo}
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="text-purple-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-3">{backer.tagline}</span>
              <h3 className="text-white text-xl font-bold mb-4 tracking-tight">{backer.name}</h3>
              <p className="text-[#888] text-sm leading-relaxed mb-8">{backer.description}</p>
              <button
                onClick={() => openModal(backer)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-white text-[12px] font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
              >
                <span>Read more</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} partner={selectedPartner} />
    </>
  );
};

export default BackingCards;
