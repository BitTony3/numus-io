import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ContactPage = () => {
  const [formType, setFormType] = useState('partner');

  const socialIcons = [
    { Icon: Facebook, link: "https://facebook.com/numusio", name: "Facebook" },
    { Icon: Twitter, link: "https://twitter.com/numusio", name: "Twitter" },
    { Icon: Linkedin, link: "https://linkedin.com/company/numusio", name: "LinkedIn" },
    { Icon: Instagram, link: "https://instagram.com/numusio", name: "Instagram" },
    { Icon: Youtube, link: "https://youtube.com/@numusIo", name: "YouTube" },
    { Icon: Mail, link: "mailto:contact@numus.io", name: "Email" },
  ];

  const PartnerForm = () => (
    <form className="space-y-6">
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <Input type="text" placeholder="Company Name" required />
      <Textarea placeholder="Tell us about your proposal" rows={6} required />
      <Input type="url" placeholder="Calendly or Google Meet link" required />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Proposal</Button>
    </form>
  );

  const ProjectForm = () => (
    <form className="space-y-6">
      <Input type="text" placeholder="Project Name" required />
      <Input type="email" placeholder="Contact Email" required />
      <Input type="text" placeholder="Team Size" required />
      <Textarea placeholder="Project Description" rows={4} required />
      <Input type="url" placeholder="Project Website or GitHub" />
      <Textarea placeholder="Current Traction / Metrics" rows={4} required />
      <Input type="text" placeholder="Funding Stage" required />
      <Textarea placeholder="How can Numus help?" rows={4} required />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Project</Button>
    </form>
  );

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
              <div className="max-w-2xl mx-auto bg-green-800 p-8 rounded-lg shadow-lg">
                <RadioGroup defaultValue="partner" className="mb-6 flex justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner" id="partner" onClick={() => setFormType('partner')} />
                    <Label htmlFor="partner">Partner Contact</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="project" id="project" onClick={() => setFormType('project')} />
                    <Label htmlFor="project">Project Submission</Label>
                  </div>
                </RadioGroup>
                {formType === 'partner' ? <PartnerForm /> : <ProjectForm />}
              </div>
            </div>
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute text-green-300 hover:text-green-100 z-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <item.Icon size={48} />
                <span className="sr-only">{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </AnimatedBackground>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;