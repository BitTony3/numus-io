import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const UserProfile = () => {
  const location = useLocation();
  const { address, signature } = location.state || {};

  // Placeholder data for user stats
  const userStats = {
    tokensHeld: 1000,
    projectsParticipated: 5,
    totalInvestment: '$10,000',
  };

  return (
    <Layout title="User Profile" description="View your profile and stats">
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-futuristic-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          User Profile
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-futuristic-800 border-futuristic-700">
              <CardHeader>
                <CardTitle className="text-futuristic-300">Wallet Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-futuristic-200">Address: {address}</p>
                <p className="text-futuristic-200 mt-2">Authentication: {signature ? 'Verified' : 'Not Verified'}</p>
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
                <CardTitle className="text-futuristic-300">User Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-futuristic-200">Tokens Held: {userStats.tokensHeld}</p>
                <p className="text-futuristic-200">Projects Participated: {userStats.projectsParticipated}</p>
                <p className="text-futuristic-200">Total Investment: {userStats.totalInvestment}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;