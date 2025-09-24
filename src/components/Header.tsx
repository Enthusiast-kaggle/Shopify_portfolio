import React from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[#691ead]">Ayush Singh</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#691ead] transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-[#691ead] transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#691ead] transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#691ead] text-white px-6 py-2 rounded-full hover:bg-[#5a1693] transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#691ead] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#691ead] transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-[#691ead] transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#691ead] transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#691ead] text-white px-6 py-2 rounded-full hover:bg-[#5a1693] transition-all duration-200 flex items-center gap-2 w-fit"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;