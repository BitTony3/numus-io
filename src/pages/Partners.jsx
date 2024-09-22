import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const partners = [
  { name: "Animoca Brands", logo: "/logos/animoca-brands.svg", description: "A leader in digital entertainment, blockchain, and gamification." },
  { name: "Scroll", logo: "/logos/scroll.svg", description: "Layer 2 solution for Ethereum, focused on scalability and efficiency." },
  { name: "Supra Oracles", logo: "/logos/supra-oracles.svg", description: "Cross-chain oracle providing real-time data for DeFi and Web3." },
  { name: "Line Next", logo: "/logos/line-next.svg", description: "Blockchain arm of LINE, developing next-gen blockchain services." },
  { name: "Kaia Wave", logo: "/logos/kaia-wave.svg", description: "Innovative blockchain solutions for sustainable energy and climate tech." },
  { name: "TON Foundation", logo: "/logos/ton-foundation.svg", description: "Supporting the development of The Open Network blockchain." },
  { name: "TonX", logo: "/logos/tonx.svg", description: "Ecosystem builder for TON blockchain, focusing on DeFi and NFTs." },
  { name: "Zilliqa", logo: "/logos/zilliqa.svg", description: "High-performance, secure blockchain platform for enterprises and developers." },
  { name: "RocketTech", logo: "/logos/rockettech.svg", description: "Cutting-edge blockchain technology solutions for various industries." },
  { name: "Velocity DAO", logo: "/logos/velocity-dao.svg", description: "Decentralized autonomous organization accelerating blockchain adoption." },
  { name: "GAMEE", logo: "/logos/gamee.svg", description: "Mobile gaming platform integrating blockchain and play-to-earn mechanics." },
  { name: "Foresight Ventures", logo: "/logos/foresight-ventures.svg", description: "Venture capital firm focused on blockchain and crypto investments." },
  { name: "Be In Crypto", logo: "/logos/be-in-crypto.svg", description: "Leading news outlet for cryptocurrency and blockchain technology." },
  { name: "CoinTelegraph", logo: "/logos/cointelegraph.svg", description: "Premier media outlet covering fintech, blockchain, and crypto news." },
  { name: "OKX", logo: "/logos/okx.svg", description: "Global cryptocurrency exchange offering a wide range of trading services." },
  { name: "KuCoin", logo: "/logos/kucoin.svg", description: "User-friendly cryptocurrency exchange known for listing emerging tokens." },
];

const PartnerLogo = ({ partner, onClick }) => (
  <motion.div
    className="bg-green-800 p-4 rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(partner)}
  >
    <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-auto object-contain" />
  </motion.div>
);

const PartnerDialog = ({ isOpen, onClose, partner }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-300">{partner?.name}</DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <img src={partner?.logo} alt={`${partner?.name} logo`} className="h-24 w-auto object-contain mx-auto mb-4" />
        <p>{partner?.description}</p>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

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
                <PartnerLogo key={index} partner={partner} onClick={setSelectedPartner} />
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </AnimatedBackground>
      <AnimatePresence>
        {selectedPartner && (
          <PartnerDialog
            isOpen={!!selectedPartner}
            onClose={() => setSelectedPartner(null)}
            partner={selectedPartner}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Partners;
