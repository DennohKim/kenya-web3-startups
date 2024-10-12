"use client";

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: '⚡', name: 'All Categories', id: 'all' },
  { icon: '$', name: 'Payments', id: 'payments' },
  { icon: '👁', name: 'Blinks', id: 'blinks' },
  { icon: '📱', name: 'Consumer dApps', id: 'dapps' },
  { icon: '🖼', name: 'NFTs', id: 'nfts' },
  { icon: '📱', name: 'Mobile', id: 'mobile' },
  { icon: '💰', name: 'DeFi', id: 'defi' },
  { icon: '🔗', name: 'DePIN', id: 'depin' },
  { icon: '🏗', name: 'Infrastructure', id: 'infrastructure' },
  { icon: '🛠', name: 'Developer Tooling', id: 'dev-tools' },
  { icon: '🌐', name: 'Web3 Social', id: 'web3-social' },
  { icon: '👥', name: 'DAOs and Communities', id: 'daos' },
];

const projects = [
  { name: 'Vibhu', difficulty: 'EASY', category: 'nfts' },
  { name: 'Underdog Protocol', difficulty: 'INTERMEDIATE', category: 'nfts' },
  { name: 'Provenance of Digital Assets', description: 'The digital art and music industry lacks a comprehensive solution to track and preserve the history of digital asset...', author: 'Underdog Protocol', difficulty: 'ADVANCED', category: 'nfts' },
  { name: 'A Better Ticketmaster', description: 'You have been buying tickets to your favorite artists\' concerts since ages. Despite your dedication, you are n...', author: 'Nico', difficulty: 'EASY', category: 'nfts' },
  { name: 'Webapp Game with TipLink prizes', description: 'Games are an ideal means of introducing individuals to Web3 technology. However, the current wallet creation...', author: 'TipLink', difficulty: 'EASY', category: 'dapps' },
  { name: 'Composable NFT Loyalty', description: 'Be it Web3-native or Web2 brands, enabling them to launch a tokenized loyalty program powered by NFTs,...', author: 'Yash Agarwal', difficulty: 'ADVANCED', category: 'nfts' },
];

export default function NFTDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-purple-900 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">ST Build</div>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Ideas</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Grants</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6" />
          <Button variant="secondary" className="bg-purple-700 text-white">
            Submit your project
          </Button>
        </div>
      </header>

      <main className="flex">
        <aside className="w-64 space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className={`w-full justify-start ${selectedCategory === category.id ? 'bg-purple-800' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </aside>

        <div className="flex-1 ml-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              {categories.find(cat => cat.id === selectedCategory)?.icon} {' '}
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <Button variant="outline" className="text-white border-white">
              Sort: Relevance <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-purple-800 border-none">
                <CardHeader className="flex flex-row justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                    <span>{project.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    project.difficulty === 'EASY' ? 'bg-green-700' :
                    project.difficulty === 'INTERMEDIATE' ? 'bg-blue-700' :
                    'bg-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </CardHeader>
                <CardContent>
                  {project.description && (
                    <>
                      <p className="text-sm mb-4">{project.description}</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                        <span className="text-sm">{project.author}</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}