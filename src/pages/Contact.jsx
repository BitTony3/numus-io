import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Youtube, Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const socialIcons = [
  { Icon: Facebook, link: "https://facebook.com/numusio" },
  { Icon: Twitter, link: "https://twitter.com/NumusApp" },
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

const FileUploadField = ({ label, name, accept, multiple = false, onChange }) => (
  <motion.div className="mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Label htmlFor={name} className="block text-green-200 mb-2">{label}</Label>
    <div className="relative">
      <Input
        type="file"
        id={name}
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        className="hidden"
      />
      <Label htmlFor={name} className="cursor-pointer flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
        <Upload className="mr-2" size={20} />
        Choose Files
      </Label>
    </div>
  </motion.div>
);

const SocialIcons = ({ icons }) => (
  <motion.div 
    className="flex justify-center space-x-4 mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {icons.map((item, index) => (
      <motion.a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-300 hover:text-green-100 transition-colors duration-300"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <item.Icon size={24} />
      </motion.a>
    ))}
  </motion.div>
);

const ContactForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', pitchDeck: '' });
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, files });
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
      <FileUploadField
        label="Branding Kit (Logos and Banners)"
        name="brandingKit"
        accept=".png,.svg"
        multiple={true}
        onChange={handleFileChange}
      />
      {!isPartner && (
        <>
          <FormField
            label="Pitch Deck Link"
            name="pitchDeck"
            placeholder="https://example.com/pitch-deck"
            required={false}
            value={formData.pitchDeck}
            onChange={handleChange}
          />
          <FileUploadField
            label="Or Upload Pitch Deck"
            name="pitchDeckFile"
            accept=".pdf,.pptx"
            onChange={handleFileChange}
          />
        </>
      )}
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
            <SocialIcons icons={socialIcons} />
          </motion.div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default ContactPage;
