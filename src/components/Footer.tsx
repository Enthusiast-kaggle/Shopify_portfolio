import React from 'react';
import { Heart, Mail, MessageCircle, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:aboutstore00@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/917462957337', label: 'WhatsApp' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayush-kumar-7248031ab', label: 'LinkedIn' }
  ];

  return ( 
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#691ead] mb-2">Ayush Singh</h3> 
            <p className="text-gray-300">Professional Shopify Developer</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-2">Building amazing Shopify stores</p>
            <div className="flex items-center justify-center gap-1 text-sm text-gray-400">
              Made with <Heart size={16} className="text-red-500 mx-1" /> for e-commerce success
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-[#691ead] transition-colors duration-200"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ayush Singh. All rights reserved. | Crafting exceptional Shopify experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

