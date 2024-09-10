import React, { useState } from 'react';
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
import { useToast } from "@/components/ui/use-toast";

const socialIcons = [
  { Icon: Facebook, link: "https://facebook.com/numusio" },
  { Icon: Twitter, link: "https://twitter.com/numusio" },
  { Icon: Linkedin, link: "https://linkedin.com/company/numusio" },
  { Icon: Instagram, link: "https://instagram.com/numusio" },
  { Icon: Youtube, link: "https://youtube.com/@numusIo" },
  { Icon: Mail, link: "mailto:contact@numus.io" },
];

const inputClass = "bg-green-700 text-green-100 placeholder-green-300 border-green-500 focus:border-green-400 focus:ring-green-400";

const FormField = ({ label, name, type = "text", placeholder, required = true, value, onChange }) => (
  <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
    <Input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      className={`${inputClass} futuristic-border`}
      value={value}
      onChange={onChange}
    />
  </motion.div>
);

const TextAreaField = ({ label, name, placeholder, rows = 4, required = true, value, onChange }) => (
  <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
    <Textarea
      id={name}
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`${inputClass} futuristic-border`}
      value={value}
      onChange={onChange}
    />
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
      </motion.a>
    ))}
  </div>
);

const ContactForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isPartner = type === 'partner';
  return (
    <motion.form 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <FormField
        label={isPartner ? "Full Name" : "Project Name"}
        name="name"
        placeholder={isPartner ? "John Doe" : "EcoTech AI"}
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="email@example.com"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label={isPartner ? "Company" : "Team Size"}
        name="company"
        placeholder={isPartner ? "Tech Innovations Inc." : "5-10 members"}
        value={formData.company}
        onChange={handleChange}
      />
      <TextAreaField
        label={isPartner ? "Partnership Proposal" : "Project Description"}
        name="message"
        placeholder={isPartner ? "Describe your partnership proposal" : "Brief description of your project"}
        value={formData.message}
        onChange={handleChange}
      />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button type="submit" className="w-full futuristic-button">
          {isPartner ? "Submit Proposal" : "Submit Project"}
        </Button>
      </motion.div>
    </motion.form>
  );
};

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    toast({
      title: "Form Submitted",
      description: "Thank you for your submission. We'll get back to you soon!",
      duration: 5000,
    });
  };

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
            <Card className="max-w-2xl mx-auto futuristic-card">
              <CardContent className="p-6">
                <Tabs defaultValue="partner" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="partner" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Partner</TabsTrigger>
                    <TabsTrigger value="project" className="text-green-200 data-[state=active]:bg-green-700 text-lg font-semibold">Project</TabsTrigger>
                  </TabsList>
                  <TabsContent value="partner">
                    <ContactForm type="partner" onSubmit={handleSubmit} />
                  </TabsContent>
                  <TabsContent value="project">
                    <ContactForm type="project" onSubmit={handleSubmit} />
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