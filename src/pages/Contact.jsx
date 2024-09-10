import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const socialIcons = [
    { Icon: Facebook, link: "#" },
    { Icon: Twitter, link: "#" },
    { Icon: Linkedin, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Mail, link: "mailto:contact@numus.com" },
    { Icon: Phone, link: "tel:+15551234567" },
  ];

  return (
    <div className="min-h-screen bg-green-900">
      <Header />
      <main>
        <AnimatedBackground>
          <motion.div
            className="py-20 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl font-bold text-center mb-8 text-green-100">Contact Us</h1>
              <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200">
                Ready to revolutionize your project with data-driven insights and cutting-edge technology? Connect with our team of experts at Numus. We're here to collaborate and guide you through the exciting journey of building a successful, innovative startup.
              </p>
            </div>
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="absolute text-green-300 hover:text-green-100 z-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <item.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
          <Contact />
        </AnimatedBackground>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;