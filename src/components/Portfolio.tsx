import React from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const stores: Store[] = [
    {
      id: 1,
      name: 'Gadget Store',
      description: 'PASS:1 A modern tech store with a custom gadget configurator and seamless checkout experience.',
      image: 'https://i.pinimg.com/736x/45/86/5d/45865d2d0f6ea8b70e0bc5c4dfec5593.jpg',
      liveUrl: 'https://gadgetoc.store/',
      category: 'Gadget'
    },
    {
      id: 2,
      name: 'Kitchen Essentials',
      description: 'PASS:demo Kitchen store with custom product configurator, seamless checkout, and smart bundles.',
      image: 'https://s.tmimgcdn.com/scr/800x500/99900/kitchmall-kitchen-store-opencart-responsive-template_99912-2-original.jpg',
      liveUrl: 'https://kitchenfull.shop/',
      category: 'Kitchen'
    },
    {
      id: 5,
      name: 'Fashion Hub',
      description: 'Fashion store with custom outfit configurator, virtual try-on, and seamless checkout',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*jHuZ50ZTDJQmdylt3D8LGg.jpeg',
      liveUrl: 'https://profashion-theme.myshopify.com/',
      category: 'Fashion'
    },
    {
      id: 3,
      name: 'Beauty Co',
      description: 'PASS:1 Clean beauty brand with ingredient transparency and subscription management system.',
      image: 'https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://trurelix.myshopify.com/',
      category: 'Beauty'
    },
    {
      id: 4,
      name: 'Home Decor Studio',
      description: 'Interior design store with AR visualization and custom furniture configurator.',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://minery-store-demo.myshopify.com/',
      category: 'Home & Garden'
    },
    
    {
      id: 6,
      name: 'Watch Marketplace',
      description: 'Watch store with custom dial configurator, strap options, and seamless checkout.',
      image: 'https://chrono-dial.myshopify.com/cdn/shop/files/slider2-bg.jpg?v=1621578873',
      liveUrl: 'Watch store with custom dial configurator, strap options, and seamless checkout',
      category: 'Handmade'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#691ead] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the Shopify stores I've crafted with precision, creativity, and a focus on driving results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#691ead] px-3 py-1 rounded-full text-sm font-semibold">
                    {store.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-[#691ead]/0 group-hover:bg-[#691ead]/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBag className="w-5 h-5 text-[#691ead]" />
                  <h3 className="text-xl font-bold text-gray-900">{store.name}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{store.description}</p>
                
                <a
                  href={store.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#691ead] font-semibold hover:text-[#5a1693] transition-colors duration-200 group/link"
                >
                  View Live Store
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to see your store featured here?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#691ead] text-white px-8 py-4 rounded-full hover:bg-[#5a1693] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
