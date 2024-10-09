import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { partnerData } from '../data/partnerData';

const PartnerLogo = ({ partner, onClick }) => (
  <motion.div
    className="bg-futuristic-800 p-4 rounded-lg shadow-lg flex items-center justify-center cursor-pointer h-24"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onClick(partner)}
  >
    {partner.logo ? (
      <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-auto object-contain" />
    ) : (
      <div className="text-futuristic-300 font-bold text-lg">{partner.name}</div>
    )}
  </motion.div>
);

const PartnerDialog = ({ partner, onClose }) => (
  <div>
    <h2 className="text-2xl font-bold text-futuristic-300 mb-4">{partner?.name}</h2>
    {partner?.logo && <img src={partner.logo} alt={`${partner.name} logo`} className="h-24 w-auto object-contain mx-auto mb-4" />}
    <p className="text-futuristic-200">{partner?.description}</p>
  </div>
);

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  return (
    <div className="min-h-screen bg-futuristic-900 text-futuristic-100">
      <AnimatedBackground>
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-12 text-futuristic-300"
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
              {partnerData.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} onClick={setSelectedPartner} />
              ))}
            </motion.div>
          </div>
        </main>
        <Footer />
      </AnimatedBackground>
      <Modal isOpen={!!selectedPartner} onClose={() => setSelectedPartner(null)}>
        {selectedPartner && <PartnerDialog partner={selectedPartner} onClose={() => setSelectedPartner(null)} />}
      </Modal>
    </div>
  );
};

export default Partners;