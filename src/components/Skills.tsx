import React, { useState, useEffect } from 'react';
import { Code, Users, Lightbulb, Calendar, TrendingUp  } from 'lucide-react';
import { SiPython } from 'react-icons/si';
 
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [rotation, setRotation] = useState(0);

  const skills = [
    {
      name: 'Web Development',
      icon: Code,
      description: 'Full-stack development with modern frameworks and technologies',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Python',
      icon: SiPython,
      description: 'Data analysis, automation, and backend development',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Leadership',
      icon: Users,
      description: 'Team management and strategic project leadership',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Event Management',
      icon: Calendar,
      description: 'Organizing and executing successful events and conferences',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Startup Ideation',
      icon: Lightbulb,
      description: 'Identifying opportunities and developing innovative business ideas',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'DSA',
      icon: TrendingUp,
      description: 'Data Structures and Algorithms',
      color: 'from-pink-400 to-purple-500'
    }
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's `lg:` breakpoint
      };

      checkScreenSize(); // Initial check
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);



  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
      setActiveSkill(prev => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const handleSkillClick = (index: number) => {
    setActiveSkill(index);
    setRotation(index * 60);
  };

  return (
    <section id="skills" className="min-h-screen  py-20 relative overflow-hidden">
      {/* Animated Background Circles 
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving circles 
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full animate-float animation-delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Medium moving circles 
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-400/15 to-cyan-400/15 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-10 w-18 h-18 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full animate-float animation-delay-4000"></div>
        
        {/* Small moving circles 
        <div className="absolute top-20 right-1/3 w-8 h-8 bg-gradient-to-br from-yellow-400/25 to-orange-400/25 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-10 h-10 bg-gradient-to-br from-green-400/25 to-emerald-400/25 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/2 left-10 w-14 h-14 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full animate-float animation-delay-4000"></div>
      </div> */}

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 pb-2">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse set of skills that enable me to tackle challenges across technology, business, and leadership domains.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Skills Circle */}
          <div className="relative">
            <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] relative">

              {/* Central hub */}
             <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isLargeScreen ? 'w-28 h-28' : 'w-20 h-20'} bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center z-10 shadow-lg shadow-cyan-400/25`}>
                <span className="text-white font-bold text-lg">Skills</span>
              </div>


              {/* Skill nodes */}
              {skills.map((skill, index) => {
                const angle = (index * 60) - rotation;
                const radius = isLargeScreen ? 180 : 100;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;


                const Icon = skill.icon;
                const isActive = index === activeSkill;

                return (
                  <div
                    key={skill.name}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 cursor-pointer ${
                      isActive ? 'scale-125 z-20' : 'scale-100 z-10'
                    }`}
                    style={{
                      transform: `translate(${x - 32}px, ${y - 32}px)`,
                    }}
                    onClick={() => handleSkillClick(index)}
                  >
                    <div
                          className={`rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl ${
                            isActive ? 'animate-pulse' : ''
                          } ${isLargeScreen ? 'w-20 h-20' : 'w-12 h-12'}`}
                        >
                          <Icon className={`${isLargeScreen ? 'w-10 h-10' : 'w-6 h-6'} text-white`} />
                        </div>


                    
                    {/* Skill name */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap hidden sm:block">
                      <span className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-cyan-400' : 'text-gray-400'
                      }`}>
                        {skill.name}
                      </span>
                    </div>

                  </div>
                );
              })}

              {/* Connection lines *
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: `rotate(${-rotation}deg)` }}>
                {skills.map((_, index) => {
                  const angle = index * 60;
                  const x1 = 192; // center
                  const y1 = 192; // center
                  const x2 = 192 + Math.cos((angle * Math.PI) / 180) * 140;
                  const y2 = 192 + Math.sin((angle * Math.PI) / 180) * 140;

                  return (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="2"
                      className="transition-all duration-1000"
                    />
                  );
                })}
              </svg> */}
            </div>
          </div>

          {/* Skill Details */}
          <div className="max-w-md">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skills[activeSkill].color} flex items-center justify-center`}>
                  {React.createElement(skills[activeSkill].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white">{skills[activeSkill].name}</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {skills[activeSkill].description}
              </p>

              <div className="mt-6 flex gap-2">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSkillClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSkill ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;