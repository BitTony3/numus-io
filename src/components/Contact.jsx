import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-futuristic-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-futuristic-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Numus
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-futuristic-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in touch with our team to explore how Numus can accelerate your project or investment strategy
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" required className="bg-futuristic-800 border-futuristic-700 focus:border-futuristic-500 focus:ring-futuristic-500 text-futuristic-100" />
              <Input type="email" placeholder="Your Email" required className="bg-futuristic-800 border-futuristic-700 focus:border-futuristic-500 focus:ring-futuristic-500 text-futuristic-100" />
              <Input type="text" placeholder="Project/Company Name" required className="bg-futuristic-800 border-futuristic-700 focus:border-futuristic-500 focus:ring-futuristic-500 text-futuristic-100" />
              <Textarea placeholder="Tell us about your project or investment interests" rows={6} required className="bg-futuristic-800 border-futuristic-700 focus:border-futuristic-500 focus:ring-futuristic-500 text-futuristic-100" />
              <Button type="submit" className="w-full futuristic-button">Submit Inquiry</Button>
            </form>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-futuristic-800 border-futuristic-700">
              <CardHeader>
                <CardTitle className="flex items-center text-futuristic-300">
                  <MapPin className="mr-2 text-futuristic-400" /> Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-futuristic-200">123 Tech Avenue, FutureCity, FC 12345</p>
              </CardContent>
            </Card>
            <Card className="bg-futuristic-800 border-futuristic-700">
              <CardHeader>
                <CardTitle className="flex items-center text-futuristic-300">
                  <Phone className="mr-2 text-futuristic-400" /> Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-futuristic-200">+1 (888) 123-4567</p>
              </CardContent>
            </Card>
            <Card className="bg-futuristic-800 border-futuristic-700">
              <CardHeader>
                <CardTitle className="flex items-center text-futuristic-300">
                  <Mail className="mr-2 text-futuristic-400" /> Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-futuristic-200">contact@numus.io</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;