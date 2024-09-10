import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  const socialIcons = [
    { Icon: Facebook, link: "https://facebook.com/numusio", name: "Facebook" },
    { Icon: Twitter, link: "https://twitter.com/numusio", name: "Twitter" },
    { Icon: Linkedin, link: "https://linkedin.com/company/numusio", name: "LinkedIn" },
    { Icon: Instagram, link: "https://instagram.com/numusio", name: "Instagram" },
    { Icon: Youtube, link: "https://youtube.com/@numusIo", name: "YouTube" },
    { Icon: Mail, link: "mailto:contact@numus.io", name: "Email" },
  ];

  const inputClass = "text-gray-700 placeholder-gray-500";

  const PartnerForm = () => (
    <form className="space-y-4">
      <p className="text-green-100 mb-4">For potential partners: Please provide details about your proposal and schedule a call with us.</p>
      <Input type="text" placeholder="Your full name (e.g., John Doe)" required className={inputClass} />
      <Input type="email" placeholder="Your business email (e.g., john@company.com)" required className={inputClass} />
      <Input type="text" placeholder="Your company name (e.g., Tech Innovations Inc.)" required className={inputClass} />
      <Textarea placeholder="Describe your partnership proposal (e.g., joint venture for AI development, co-marketing opportunity for fintech solutions)" rows={4} required className={inputClass} />
      <Input type="url" placeholder="Your scheduling link (e.g., Calendly or Google Meet URL)" required className={inputClass} />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Partnership Proposal</Button>
    </form>
  );

  const ProjectForm = () => (
    <form className="space-y-4">
      <p className="text-green-100 mb-4">For project submissions: Please provide key details about your project for our initial review.</p>
      <Input type="text" placeholder="Project name (e.g., EcoTech AI)" required className={inputClass} />
      <Input type="email" placeholder="Primary contact email (e.g., project-lead@ecotech.com)" required className={inputClass} />
      <Input type="text" placeholder="Team size (e.g., 5-10 members, 20+ developers)" required className={inputClass} />
      <Textarea placeholder="Brief project description (e.g., AI-powered solution for optimizing renewable energy distribution)" rows={3} required className={inputClass} />
      <Input type="url" placeholder="Project website or GitHub repository URL (if available)" className={inputClass} />
      <Textarea placeholder="Current traction / metrics (e.g., 10k monthly active users, $50k MRR, 30% month-over-month growth)" rows={3} required className={inputClass} />
      <Input type="text" placeholder="Current funding stage (e.g., Pre-seed, Seed, Series A)" required className={inputClass} />
      <Textarea placeholder="How can Numus help? (e.g., Series A funding of $5M, technical expertise in blockchain integration, go-to-market strategy)" rows={3} required className={inputClass} />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Project for Review</Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-green-900">
      <Header />
      <main className="relative">
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
                Ready to revolutionize your project with data-driven insights and cutting-edge technology? Connect with our team of experts at Numus.
              </p>
              <Card className="max-w-2xl mx-auto bg-green-800 shadow-lg">
                <CardContent className="p-6">
                  <Tabs defaultValue="partner" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="partner" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Partner Contact</TabsTrigger>
                      <TabsTrigger value="project" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Project Submission</TabsTrigger>
                    </TabsList>
                    <TabsContent value="partner">
                      <PartnerForm />
                    </TabsContent>
                    <TabsContent value="project">
                      <ProjectForm />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatedBackground>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none">
          {socialIcons.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-green-300 hover:text-green-100"
              style={{
                top: `${(index + 1) * 25}%`,
                left: '10px',
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
              }}
              transition={{ 
                duration: 1,
                delay: index * 0.2,
              }}
            >
              <item.Icon size={40} />
              <span className="sr-only">{item.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none">
          {socialIcons.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="absolute text-green-300 hover:text-green-100"
              style={{
                top: `${(index + 1) * 25}%`,
                right: '10px',
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
              }}
              transition={{ 
                duration: 1,
                delay: (index + 3) * 0.2,
              }}
            >
              <item.Icon size={40} />
              <span className="sr-only">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;