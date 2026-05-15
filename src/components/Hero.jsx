import { motion } from 'framer-motion';
import Logo10X from './Logo10X';
const Hero = () => {
  return (
    <section className="relative px-6 pt-40 pb-12 max-w-[1200px] mx-auto overflow-visible z-10 min-h-[70svh] flex items-center">
      
      {/* Background is purely black */}

      <div className="flex flex-col items-center justify-center w-full relative z-10">
        
        {/* Centered Column: Text & CTA */}
        <div className="w-full flex flex-col items-center text-center z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 w-full max-w-6xl mx-auto"
          >
            <div className="flex justify-center items-center w-full">
              <Logo10X className="h-14 md:h-20 lg:h-28 w-auto" fetchpriority="high" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-lg md:text-xl font-medium tracking-wide mb-6 max-w-2xl mx-auto opacity-90"
          >
            Building AI that feels less artificial and more human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="px-10 py-3.5 rounded-full bg-white/5 border border-[#512DA8]/30 text-white font-bold tracking-widest text-xs hover:bg-[#512DA8] hover:border-[#512DA8] hover:shadow-[0_0_40px_rgba(81,45,168,0.4)] active:scale-95 transition-all duration-500">
              TRY LUCA
            </button>
          </motion.div>
        </div>

        {/* Image removed as requested */}

      </div>
    </section>
  );
};

export default Hero;
