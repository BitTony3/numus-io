import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const UserDashboard = () => {
  const [userType, setUserType] = useState(null);

  const handleQualification = (type) => {
    setUserType(type);
    // Here you would typically send this information to your backend
    console.log(`User qualified as: ${type}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-futuristic-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        User Dashboard
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-futuristic-800 border-futuristic-700">
            <CardHeader>
              <CardTitle className="text-futuristic-300">User Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-futuristic-200">Connected Address: {/* Add user's Ethereum address here */}</p>
              <p className="text-futuristic-200">User Type: {userType || 'Not Qualified'}</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-futuristic-800 border-futuristic-700">
            <CardHeader>
              <CardTitle className="text-futuristic-300">Qualify As</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => handleQualification('investor')} 
                className="w-full futuristic-button"
              >
                Qualify as Investor
              </Button>
              <Button 
                onClick={() => handleQualification('builder')} 
                className="w-full futuristic-button"
              >
                Qualify as Builder
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default UserDashboard;