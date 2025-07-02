import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/wizard1949', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/vishal-singh-800421323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/half_stone_veins?igsh=MWVlajduNTJxOXE5eg==', 
      label: 'Instagram',
      color: 'hover:text-pink-400'
    },
    { 
      icon: Mail, 
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=vishalsingh80014@gmail.com&su=Hello&body=Hi Vishal,',   
      label: 'Email',
      color: 'hover:text-cyan-400'
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="  py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo and tagline */}
          <div className="mb-8">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 hover:scale-105 transition-transform duration-300"
            >
              Vishal Singh
            </button>
            <p className="text-gray-400 text-lg">
              Aspiring Entrepreneur | Tech Enthusiast | E-Cell Core Member
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:border-white/20 ${link.color}`}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm">
            <p>© {currentYear} Vishal Singh. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> using React & Tailwind CSS
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-cyan-400 rounded-full hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-purple-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;