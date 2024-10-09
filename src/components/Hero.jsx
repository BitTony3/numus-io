import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Layers, Lightbulb, TrendingUp, Users } from 'lucide-react';
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
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen holographic-bg overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="w-16 h-16 text-futuristic-300 mr-4" />
            </motion.div>
            <HeroTitle title={title} />
          </motion.div>
          <HeroDescription description={description} />
          <HeroButtons />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;