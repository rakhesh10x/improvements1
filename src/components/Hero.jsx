import { motion } from 'framer-motion';
import Logo10X from './Logo10X';
const Hero = () => {
  return (
    <section className="relative px-6 pt-40 pb-24 max-w-[1200px] mx-auto overflow-visible z-10 min-h-[70vh] flex items-center">
      
      {/* Background is purely black */}

      <div className="flex flex-col items-center justify-center w-full relative z-10">
        
        {/* Centered Column: Text & CTA */}
        <div className="w-full flex flex-col items-center text-center z-20">
          
<motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 w-full max-w-6xl mx-auto"
          >
            <div className="flex justify-center items-center w-full">
              <Logo10X className="h-14 md:h-20 lg:h-28 w-auto" />
            </div>
          </motion.div>
        </div>

        {/* Image removed as requested */}

      </div>
    </section>
  );
};

export default Hero;
