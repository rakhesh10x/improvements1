import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "World's 1st Emotional AI Hardware",
    description: "Technology that understands you beyond commands.",
    icon: "/smart-icon.png"
  },
  {
    title: "Specialized Silicon for AI",
    description: "Built for zero-latency, high-performance ambient computing.",
    icon: "/icons.svg"
  },
  {
    title: "100% On-Device Processing",
    description: "Your data never leaves the device. Absolute privacy by design.",
    icon: "/favicon.svg"
  },
  {
    title: "Native Telugu Support",
    description: "The first hardware with a built-in Native Telugu Tokenizer.",
    icon: "/luca-telugu.png"
  }
];

const WorldsFirstSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">World's 1st</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] border border-white/5 p-10 rounded-3xl flex items-start gap-8 group hover:border-purple-500/30 transition-all"
            >
              <div className="w-20 h-20 shrink-0">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldsFirstSection;
