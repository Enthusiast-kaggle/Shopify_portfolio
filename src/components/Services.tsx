import React from 'react';
import { Code, Smartphone, ShoppingCart, Palette, Zap, HeadphonesIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Custom Shopify Development',
      description: 'Build unique, high-converting Shopify stores tailored to your brand and business needs.',
      icon: Code,
      features: ['Custom theme development', 'App integrations', 'Performance optimization', 'SEO implementation']
    },
    {
      id: 2,
      title: 'Mobile-First Design',
      description: 'Create responsive, mobile-optimized stores that provide seamless experiences across all devices.',
      icon: Smartphone,
      features: ['Responsive design', 'Touch-friendly interfaces', 'Fast loading speeds', 'Mobile checkout optimization']
    },
    {
      id: 3,
      title: 'E-commerce Setup',
      description: 'Complete store setup from initial configuration to launch, including payment and shipping setup.',
      icon: ShoppingCart,
      features: ['Store configuration', 'Payment gateway setup', 'Shipping configuration', 'Product catalog setup']
    },
    {
      id: 4,
      title: 'Brand & UI Design',
      description: 'Design beautiful, conversion-focused user interfaces that reflect your brand identity.',
      icon: Palette,
      features: ['Brand identity design', 'Custom UI/UX design', 'Logo and graphics', 'Color scheme development']
    },
    {
      id: 5,
      title: 'Performance Optimization',
      description: 'Optimize your store for speed, conversions, and search engine rankings.',
      icon: Zap,
      features: ['Speed optimization', 'Conversion rate optimization', 'SEO improvements', 'Analytics setup']
    },
    {
      id: 6,
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance and support to keep your store running smoothly and up-to-date.',
      icon: HeadphonesIcon,
      features: ['Regular updates', 'Bug fixes', 'Feature additions', '24/7 support availability']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Services
          </h2>
          <div className="w-24 h-1 bg-[#691ead] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to ongoing support, I provide comprehensive Shopify development services to help your business thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#691ead]/10 rounded-2xl mb-6 group-hover:bg-[#691ead]/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#691ead]" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#691ead] rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">Ready to start your project?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#691ead] text-white px-8 py-4 rounded-full hover:bg-[#5a1693] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;