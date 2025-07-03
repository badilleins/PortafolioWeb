import React from 'react';
import './App.css'; 

const levels = {
  deep: '🐬 deep',
  middle: '🤿 medium depth ',
  surface: '🏖️ Surface',
};

const languages = [
  { name: 'Spanish 🇪🇸', level: 'deep' },
  { name: 'English 🇬🇧', level: 'middle' },
];

const Resume = () => (
  <section
    id="resume"
    className="relative py-16 px-6 text-center text-white overflow-hidden"
    style={{ backgroundColor: '#0c4a6e' }}
  >
   
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t  to-transparent z-10 pointer-events-none">
      <div className="absolute left-4 bottom-0 w-24 h-24 bg-[url('https://cdn.pixabay.com/animation/2025/03/01/15/15/15-15-40-567_512.gif')] bg-contain bg-no-repeat animate-slowfloat" />
      <div className="absolute right-4 bottom-0 w-28 h-28 bg-[url('https://cdn.pixabay.com/animation/2025/03/09/10/16/10-16-17-65_512.gif')] bg-contain bg-no-repeat animate-slowfloat" />
    </div>

   
    <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg z-20 relative">Languages 🧭</h2>

    <ul className="text-lg mb-6 space-y-4 z-20 relative">
      {languages.map((lang, index) => (
        <li key={index} className="font-semibold">
          {lang.name} — <span className="font-normal">{levels[lang.level]}</span>
        </li>
      ))}
    </ul>

    
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-cyan-100 rounded-full opacity-20 animate-bubble pointer-events-none"
        style={{
          width: `${Math.random() * 6 + 4}px`,
          height: `${Math.random() * 6 + 4}px`,
          left: `${Math.random() * 100}%`,
          bottom: `-${Math.random() * 100}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`,
        }}
      />
    ))}

    
    <style>{`
      @keyframes bubble {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 0.3; }
        100% { transform: translateY(-100vh); opacity: 0; }
      }

      .animate-bubble {
        animation-name: bubble;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
      }

      @keyframes slowfloat {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }

      .animate-slowfloat {
        animation: slowfloat 5s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default Resume;
