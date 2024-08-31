import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    { 
      title: "DeFiYield", 
      description: "Automated yield farming and liquidity management platform leveraging CeDeFiAi's advanced features.",
      tags: ["DeFi", "Yield Farming", "CeDeFiAi"],
      status: "Acceleration"
    },
    { 
      title: "BlockChainOfCustody", 
      description: "Blockchain-based chain of custody solution for legal and supply chain applications.",
      tags: ["Blockchain", "Supply Chain", "Legal Tech"],
      status: "Incubation"
    },
    { 
      title: "AIGovernance", 
      description: "AI-powered DAO governance platform for decentralized decision-making in organizations.",
      tags: ["AI", "DAO", "Governance"],
      status: "Integration"
    },
    { 
      title: "CryptoInsure", 
      description: "Decentralized insurance protocol for crypto assets and DeFi investments.",
      tags: ["InsurTech", "DeFi", "Risk Management"],
      status: "Acceleration"
    },
    { 
      title: "EcoToken", 
      description: "Tokenized carbon credits and sustainability incentives built on CeDeFiAi infrastructure.",
      tags: ["Green Tech", "Tokenization", "Sustainability"],
      status: "Incubation"
    },
    { 
      title: "QuantumLedger", 
      description: "Quantum-resistant blockchain solution for future-proof data security and transactions.",
      tags: ["Quantum Computing", "Blockchain", "Cybersecurity"],
      status: "Discovery"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Discover the innovative projects powered by Numus and CeDeFiAi technology</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{project.title}</span>
                  <Badge variant="secondary">{project.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
