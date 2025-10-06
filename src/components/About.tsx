import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, number: '50+', label: 'Stores Built' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Zap, number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#691ead] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Shopify developer with years of experience creating stunning, high-converting e-commerce stores. My expertise spans from custom theme development to complex app integrations, helping businesses of all sizes succeed online.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in creating seamless user experiences, optimizing for conversions, and ensuring every store I build is mobile-responsive and lightning-fast. Whether you're launching your first store or scaling an existing business, I'm here to bring your vision to life.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {['Shopify', 'Liquid', 'JavaScript', 'CSS/SCSS', 'React', 'Node.js'].map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-[#691ead] px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {stats.map(({ icon: Icon, number, label }) => (
              <div key={label} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Icon className="w-8 h-8 text-[#691ead] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
                <div className="text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;