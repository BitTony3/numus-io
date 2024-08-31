import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-green-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Numus
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in touch with our team to explore how Numus can accelerate your eco-friendly project or green investment strategy
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" required className="bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500" />
              <Input type="email" placeholder="Your Email" required className="bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500" />
              <Input type="text" placeholder="Project/Company Name" required className="bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500" />
              <Textarea placeholder="Tell us about your eco-friendly project or green investment interests" rows={6} required className="bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500" />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Submit Green Inquiry</Button>
            </form>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-green-50 border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <MapPin className="mr-2 text-green-600" /> Our Eco-Friendly Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">123 Green Tech Avenue, EcoCity, EC 12345</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Phone className="mr-2 text-green-600" /> Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">+1 (888) 123-GREEN</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Mail className="mr-2 text-green-600" /> Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">greentech@numus.io</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
