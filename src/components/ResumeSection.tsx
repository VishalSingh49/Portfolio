import { Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Resume
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            A snapshot of my skills, achievements & journey.
          </p>
        </div>

        <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-6 text-center">
          {/* Animated Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {['Full-Stack Developer', 'Leadership', 'Hackathons', 'Startup Ideation', 'Tech Events'].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1 rounded-full bg-white/10 text-cyan-300 text-sm font-medium border border-cyan-500/20 hover:scale-105 transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Glowing Download Area */}
          <div className="relative w-full max-w-md p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/30 transition duration-300">
            <p className="text-gray-300 mb-4 text-lg">Download a beautifully designed PDF copy of my resume:</p>

            <a
              href="/others/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition duration-300"
            >
              <Download className="w-5 h-5 animate-bounce" />
              Download Resume
            </a>

            <div className="absolute -inset-1 blur-2xl opacity-30 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
