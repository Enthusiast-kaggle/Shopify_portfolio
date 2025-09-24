import React from 'react';
import profilePic from '../assets/profile.jpg'; 

import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#691ead] to-[#5a1693] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src={profilePic}
                alt="Ayush Singh - Professional Shopify Developer"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto"
              />

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white/10"></div>
              {/* Online Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-3 border-white shadow-lg">
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ayush Singh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Professional Shopify Developer
          </p>
          <p className="text-lg mb-12 text-purple-200 max-w-2xl mx-auto leading-relaxed">
            I create high-converting, visually stunning Shopify stores that drive sales and provide exceptional user experiences for e-commerce businesses.
          </p>

          {/* Proof Section */}
          <div className="mb-12">
            <p className="text-purple-200 mb-6 text-sm uppercase tracking-wider font-semibold">
              Proven Track Record
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <a
                href="https://flippa.com/users/4553847"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#691ead] font-bold text-sm">F</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">Flippa Sales</div>
                  <div className="text-purple-200 text-xs">Verified Store Sales</div>
                </div>
                <svg className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="https://www.sideprojectors.com/user/profile/21217/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#691ead] font-bold text-sm">SP</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">SideProjectors</div>
                  <div className="text-purple-200 text-xs">Project Marketplace</div>
                </div>
                <svg className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <button
            onClick={scrollToPortfolio}
            className="bg-white text-[#691ead] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto group"
          >
            View My Work
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
