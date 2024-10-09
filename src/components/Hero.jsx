import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useThreeAnimation } from '../hooks/useThreeAnimation';
import { heroContent } from '../data/heroContent';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';

const Hero = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, icon: Icon } = heroContent[currentIndex];

  useThreeAnimation(containerRef, currentIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen holographic-bg overflow-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-6 md:py-20 relative z-10 flex-grow flex flex-col">
        <motion.div
          className="text-center flex flex-col h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <div className="mb-2 md:mb-6">
            <motion.div className="flex flex-col md:flex-row items-center justify-center mb-2 md:mb-6">
              <motion.div
                className="mb-2 md:mb-0 md:mr-4"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              >
                <Icon className="w-12 h-12 md:w-20 md:h-20 text-futuristic-300" />
              </motion.div>
              <HeroTitle title={title} />
            </motion.div>
            <HeroDescription description={description} />
          </div>
          
          <div 
            ref={containerRef} 
            className="flex-grow mb-2 md:mb-8 h-48 md:h-72 transform scale-90 -translate-y-[calc(70%+40px)] md:scale-100 md:-translate-y-[calc(55%+40px)]"
          />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 pb-6 md:pb-10 relative z-10">
        <HeroButtons />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;