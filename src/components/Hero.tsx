import React from 'react';
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Ayush Singh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Professional Shopify Developer
          </p>
          <p className="text-lg mb-12 text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Creating high-converting, beautiful Shopify stores that drive sales and deliver exceptional user experiences.
          </p>
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