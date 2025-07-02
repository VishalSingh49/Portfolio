import { useState, useEffect } from 'react';
import { Menu, X, Home, Code, Mail, Briefcase } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
       }
       return false;
        });

      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-105 transition-transform duration-300"
              >
                VS
              </button>
            </div>

            {/* Desktop Navigation */}
       
            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group text-sm font-medium px-4 py-2 transition-all duration-300
                      ${activeSection === item.id
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'}`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    {/* Glowing underline effect */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        activeSection === item.id
                          ? 'bg-cyan-400 scale-x-100'
                          : 'bg-white/30'
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-white/10 text-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Floating navigation dots (desktop only) */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                  : 'bg-white/30 hover:bg-white/50 hover:scale-110'
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;