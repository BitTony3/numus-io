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
        <h2 className="text-4xl font-bold text-center mb-4">Contact Numus</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Get in touch with our team to explore how Numus and CeDeFiAi can accelerate your project or investment strategy</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Project/Company Name" required />
              <Textarea placeholder="Tell us about your project or investment interests" rows={6} required />
              <Button type="submit" className="w-full">Submit Inquiry</Button>
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
                <p>789 Blockchain Boulevard, CryptoCity, CC 67890</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>+1 (888) 555-NUMUS</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>info@numus.io</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
