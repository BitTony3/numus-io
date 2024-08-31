import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Get in touch with our team to explore how we can help bring your startup vision to life</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Subject" required />
              <Textarea placeholder="Your Message" rows={6} required />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>123 Innovation Street, Tech City, TC 12345</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>info@venturehaven.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
