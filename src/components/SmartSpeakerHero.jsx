// Vercel Sync Commit: Latest Alignment Fixes
import { motion } from 'framer-motion';
import Logo10X from './Logo10X';

const SmartSpeakerHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Side: Matter (Text) - Spanning 6 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-6 flex flex-col items-start"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
                LUCA HARDWARE
              </span>
            </div>

            <div className="mb-2 h-16 md:h-24 flex items-center">
              <Logo10X className="h-full w-auto" />
            </div>

            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
              We are building LUCA
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
              A smart speaker powered by our own operating system and conversational AI.
            </p>
          </motion.div>

          {/* Right Side: Image - Spanning 6 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-12 md:col-span-6 flex justify-end relative"
          >
            <div className="absolute inset-0 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <img 
              src={`${import.meta.env.BASE_URL}product home page.png`} 
              alt="10X Technologies Product" 
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-[0_0_50px_rgba(147,51,234,0.1)] rounded-[80%]"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
    </section>
  );
};

export default SmartSpeakerHero;
