 import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/project';
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Radial background effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_600px_at_50%_200px,#3e3e3e,transparent)]">
          <div></div>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Project />
          <ResumeSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
