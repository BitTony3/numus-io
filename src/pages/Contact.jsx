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
import { Label } from "@/components/ui/label";

const socialIcons = [
  { Icon: Facebook, link: "https://facebook.com/numusio", name: "Facebook" },
  { Icon: Twitter, link: "https://twitter.com/numusio", name: "Twitter" },
  { Icon: Linkedin, link: "https://linkedin.com/company/numusio", name: "LinkedIn" },
  { Icon: Instagram, link: "https://instagram.com/numusio", name: "Instagram" },
  { Icon: Youtube, link: "https://youtube.com/@numusIo", name: "YouTube" },
  { Icon: Mail, link: "mailto:contact@numus.io", name: "Email" },
];

const inputClass = "bg-green-700 text-green-100 placeholder-green-300 border-green-500 focus:border-green-400 focus:ring-green-400";

const FormField = ({ label, name, type = "text", placeholder, required = true, description }) => (
  <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
    <Input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      className={`${inputClass} futuristic-border`}
    />
    {description && <p className="mt-1 text-sm text-green-300">{description}</p>}
  </motion.div>
);

const TextAreaField = ({ label, name, placeholder, rows = 4, required = true, description }) => (
  <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
    <Textarea
      id={name}
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`${inputClass} futuristic-border`}
    />
    {description && <p className="mt-1 text-sm text-green-300">{description}</p>}
  </motion.div>
);

const SocialIcons = ({ icons, position }) => (
  <div className={`fixed ${position}-0 top-1/2 transform -translate-y-1/2 w-16 flex flex-col items-center space-y-4`}>
    {icons.map((item, index) => (
      <motion.a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-300 hover:text-green-100 transition-colors duration-300"
        initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
      >
        <item.Icon size={32} />
        <span className="sr-only">{item.name}</span>
      </motion.a>
    ))}
  </div>
);

const ContactForm = ({ type }) => {
  const isPartner = type === 'partner';
  return (
    <motion.form 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-green-100 mb-6">
        {isPartner
          ? "For potential partners: Please provide details about your proposal and we'll get back to you to schedule a call."
          : "For project submissions: Please provide key details about your project for our initial review."}
      </p>
      <FormField
        label={isPartner ? "Full Name" : "Project Name"}
        name={isPartner ? "fullName" : "projectName"}
        placeholder={isPartner ? "e.g., John Doe" : "e.g., EcoTech AI"}
        description={isPartner ? "Enter your full name as it appears on official documents." : "Enter a concise name that describes your project."}
      />
      <FormField
        label={isPartner ? "Business Email" : "Primary Contact Email"}
        name="email"
        type="email"
        placeholder={isPartner ? "e.g., john@company.com" : "e.g., project-lead@ecotech.com"}
        description="We'll use this email for all communications regarding your submission."
      />
      {isPartner ? (
        <FormField
          label="Company Name"
          name="companyName"
          placeholder="e.g., Tech Innovations Inc."
          description="The official name of your company or organization."
        />
      ) : (
        <FormField
          label="Team Size"
          name="teamSize"
          placeholder="e.g., 5-10 members, 20+ developers"
          description="Provide an estimate of your current team size."
        />
      )}
      <TextAreaField
        label={isPartner ? "Partnership Proposal" : "Project Description"}
        name={isPartner ? "proposal" : "projectDescription"}
        placeholder={isPartner
          ? "Describe your partnership proposal (e.g., joint venture for AI development, co-marketing opportunity for fintech solutions)"
          : "Brief description of your project (e.g., AI-powered solution for optimizing renewable energy distribution)"}
        description="Provide a clear and concise overview of your proposal or project."
      />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button type="submit" className="w-full futuristic-button">
          {isPartner ? "Submit Partnership Proposal" : "Submit Project for Review"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-green-900">
      <AnimatedBackground>
        <Header />
        <main className="relative py-20">
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8 text-green-100 neon-text">Contact Us</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200">
              Ready to revolutionize your project with data-driven insights and cutting-edge technology? Connect with our team of experts at Numus.
            </p>
            <Card className="max-w-2xl mx-auto futuristic-card">
              <CardContent className="p-6">
                <Tabs defaultValue="partner" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="partner" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Partner Contact</TabsTrigger>
                    <TabsTrigger value="project" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Project Submission</TabsTrigger>
                  </TabsList>
                  <TabsContent value="partner">
                    <ContactForm type="partner" />
                  </TabsContent>
                  <TabsContent value="project">
                    <ContactForm type="project" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </main>
        <SocialIcons icons={socialIcons.slice(0, 3)} position="left" />
        <SocialIcons icons={socialIcons.slice(3)} position="right" />
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default ContactPage;