 import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const socialLinks = [
  { icon: Github, url: 'https://github.com/VishalSingh49' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/vishal-singh-800421323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: Instagram, url: 'https://www.instagram.com/half_stone_veins?igsh=MWVlajduNTJxOXE5eg==' },
];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-12"
    >

     {/*  Optional Animated Background Blobs
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
          >
             
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 leading-tight pb-3"
            >
              Vishal Singh
            </motion.h1>
            

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-light mb-6"
            >
              Aspiring Entrepreneur | Tech Enthusiast
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto lg:mx-0 mb-8"
            />

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed"
            >
              Passionate about building innovative solutions and leading teams to create meaningful
              impact. Currently exploring the intersection of technology and entrepreneurship while
              developing cutting-edge web applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start mb-8"
                  >
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
              </motion.div>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => scrollToSection('skills')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
              >
                Explore My Skills
                <ArrowDown className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="relative">
             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]  rounded-full border-4 border-white/10 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/others/image.jpg"
                    alt="Vishal Singh"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>
              <div className="hidden lg:flex absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full items-center justify-center animate-bounce">
                <span className="text-white font-bold text-xl">VS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
