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

const ContactPage = () => {
  const socialIcons = [
    { Icon: Facebook, link: "https://facebook.com/numusio", name: "Facebook" },
    { Icon: Twitter, link: "https://twitter.com/numusio", name: "Twitter" },
    { Icon: Linkedin, link: "https://linkedin.com/company/numusio", name: "LinkedIn" },
    { Icon: Instagram, link: "https://instagram.com/numusio", name: "Instagram" },
    { Icon: Youtube, link: "https://youtube.com/@numusIo", name: "YouTube" },
    { Icon: Mail, link: "mailto:contact@numus.io", name: "Email" },
  ];

  const inputClass = "bg-green-700 text-green-100 placeholder-green-300 border-green-500 focus:border-green-400 focus:ring-green-400";

  const FormField = ({ label, name, type = "text", placeholder, required = true }) => (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </div>
  );

  const TextAreaField = ({ label, name, placeholder, rows = 4, required = true }) => (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={inputClass}
      />
    </div>
  );

  const PartnerForm = () => (
    <form className="space-y-4">
      <p className="text-green-100 mb-6">For potential partners: Please provide details about your proposal and we'll get back to you to schedule a call.</p>
      <FormField
        label="Full Name"
        name="fullName"
        placeholder="e.g., John Doe"
      />
      <FormField
        label="Business Email"
        name="email"
        type="email"
        placeholder="e.g., john@company.com"
      />
      <FormField
        label="Company Name"
        name="companyName"
        placeholder="e.g., Tech Innovations Inc."
      />
      <TextAreaField
        label="Partnership Proposal"
        name="proposal"
        placeholder="Describe your partnership proposal (e.g., joint venture for AI development, co-marketing opportunity for fintech solutions)"
      />
      <FormField
        label="Preferred Contact Method"
        name="contactMethod"
        placeholder="e.g., Email, Phone, Video Call"
      />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Partnership Proposal</Button>
    </form>
  );

  const ProjectForm = () => (
    <form className="space-y-4">
      <p className="text-green-100 mb-6">For project submissions: Please provide key details about your project for our initial review.</p>
      <FormField
        label="Project Name"
        name="projectName"
        placeholder="e.g., EcoTech AI"
      />
      <FormField
        label="Primary Contact Email"
        name="contactEmail"
        type="email"
        placeholder="e.g., project-lead@ecotech.com"
      />
      <FormField
        label="Team Size"
        name="teamSize"
        placeholder="e.g., 5-10 members, 20+ developers"
      />
      <TextAreaField
        label="Project Description"
        name="projectDescription"
        placeholder="Brief description of your project (e.g., AI-powered solution for optimizing renewable energy distribution)"
      />
      <FormField
        label="Project Website or GitHub"
        name="projectUrl"
        type="url"
        placeholder="https://your-project-site.com"
        required={false}
      />
      <TextAreaField
        label="Current Traction / Metrics"
        name="traction"
        placeholder="e.g., 10k monthly active users, $50k MRR, 30% month-over-month growth"
      />
      <FormField
        label="Current Funding Stage"
        name="fundingStage"
        placeholder="e.g., Pre-seed, Seed, Series A"
      />
      <TextAreaField
        label="How Can Numus Help?"
        name="assistance"
        placeholder="e.g., Series A funding of $5M, technical expertise in blockchain integration, go-to-market strategy"
      />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Project for Review</Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-green-900">
      <Header />
      <main className="relative py-20">
        <AnimatedBackground>
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </AnimatedBackground>
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-16 flex flex-col items-center space-y-4">
          {socialIcons.slice(0, 3).map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-100 transition-colors duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <item.Icon size={32} />
              <span className="sr-only">{item.name}</span>
            </motion.a>
          ))}
        </div>
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-16 flex flex-col items-center space-y-4">
          {socialIcons.slice(3).map((item, index) => (
            <motion.a
              key={index + 3}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-100 transition-colors duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <item.Icon size={32} />
              <span className="sr-only">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;