import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

const partners = [
  { name: "Animoca Brands", logo: "/logos/animoca-brands.svg" },
  { name: "Scroll", logo: "/logos/scroll.svg" },
  { name: "Supra Oracles", logo: "/logos/supra-oracles.svg" },
  { name: "Line Next", logo: "/logos/line-next.svg" },
  { name: "Kaia Wave", logo: "/logos/kaia-wave.svg" },
  { name: "TON Foundation", logo: "/logos/ton-foundation.svg" },
  { name: "TonX", logo: "/logos/tonx.svg" },
  { name: "Zilliqa", logo: "/logos/zilliqa.svg" },
  { name: "RocketTech", logo: "/logos/rockettech.svg" },
  { name: "Velocity DAO", logo: "/logos/velocity-dao.svg" },
  { name: "GAMEE", logo: "/logos/gamee.svg" },
  { name: "Foresight Ventures", logo: "/logos/foresight-ventures.svg" },
  { name: "Be In Crypto", logo: "/logos/be-in-crypto.svg" },
  { name: "CoinTelegraph", logo: "/logos/cointelegraph.svg" },
  { name: "OKX", logo: "/logos/okx.svg" },
  { name: "KuCoin", logo: "/logos/kucoin.svg" },
];

const PartnerLogo = ({ name, logo }) => (
  <motion.div
    className="bg-green-800 p-4 rounded-lg shadow-lg flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img src={logo} alt={`${name} logo`} className="h-16 w-auto object-contain" />
  </motion.div>
);

const Partners = () => {
  return (
    <div className="min-h-screen bg-green-900">
      <AnimatedBackground>
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-12 text-green-100 neon-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Partners
            </motion.h1>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {partners.map((partner, index) => (
                <PartnerLogo key={index} name={partner.name} logo={partner.logo} />
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default Partners;