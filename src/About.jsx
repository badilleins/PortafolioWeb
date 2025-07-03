import React from 'react';

const About = () => {
  return (
    <section id="about"
      className="relative py-20 px-6 text-center text-blue-50 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0ea5e9, #0c4a6e)',
      }}
    >
      
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-8 tracking-wide text-white drop-shadow-md z-10 relative">
      Immerse yourself in my world 🌊      
</h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto z-10 relative">
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">🏊‍♂️ Fullstack Style</h3>
        <p>Versatility in frontend, backend, and software architecture. I'm adaptable.</p>
        </div>
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">🎓 Technical Training </h3>
        <p>Software Engineer from the Technical University of Ambato, trained to compete with excellence.</p>        </div>
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">📚 Constant Training</h3>
<p>I improve every day with platforms like Platzi and Cisco, keeping my mental stamina at its peak.</p>        </div>
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">🤝 TeamWork</h3>
<p>As a well-coordinated replacement, I bring communication, trust, and synchronicity to the team.</p>        </div>
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">🚀  Espíritu innovado</h3>
<p>I always seek to swim beyond expectations, building solutions with real impact.</p>        </div>
        <div className="bg-blue-800/30 p-6 rounded-xl backdrop-blur-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">🌐 Navegación completa</h3>
<p>From the calm waters of UI design to the depths of the backend, I've mastered all the lanes.</p>        </div>
      </div>


      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0c4a6e"
          fillOpacity="1"
          d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,202.7C1120,171,1280,149,1360,138.7L1440,128V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
        ></path>
      </svg>


      <style>{`
        @keyframes bubble {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
