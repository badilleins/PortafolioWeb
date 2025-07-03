import React from 'react';
import { motion } from 'framer-motion';
import './App.css'; 

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-gradient-to-b from-sky-300 to-blue-100 text-white flex flex-col justify-center items-center px-4 text-center overflow-hidden">
      
<div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
  <div className="bubble w-4 h-4 left-[5%] bottom-0" style={{ animationDelay: '0s' }} />
  <div className="bubble w-3 h-3 left-[10%] bottom-0" style={{ animationDelay: '0.2s' }} />
  <div className="bubble w-6 h-6 left-[20%] bottom-0" style={{ animationDelay: '0.4s' }} />
  <div className="bubble w-4 h-4 left-[30%] bottom-0" style={{ animationDelay: '0.6s' }} />
  <div className="bubble w-5 h-5 left-[40%] bottom-0" style={{ animationDelay: '0.8s' }} />
  <div className="bubble w-7 h-7 left-[50%] bottom-0" style={{ animationDelay: '1s' }} />
  <div className="bubble w-2 h-2 left-[60%] bottom-0" style={{ animationDelay: '1.2s' }} />
  <div className="bubble w-5 h-5 left-[70%] bottom-0" style={{ animationDelay: '1.4s' }} />
  <div className="bubble w-6 h-6 left-[80%] bottom-0" style={{ animationDelay: '1.6s' }} />
  <div className="bubble w-4 h-4 left-[90%] bottom-0" style={{ animationDelay: '1.8s' }} />
  <div className="bubble w-3 h-3 left-[95%] bottom-0" style={{ animationDelay: '2s' }} />
</div>


      <motion.h1 className="text-5xl text-blue-500 font-bold mb-4 z-10" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
        Stalin Badillo
      </motion.h1>

      <motion.p className="text-xl text-blue-500 max-w-xl mb-6 z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      Gliding into the code, as well as into the water
      </motion.p>

      <a href="#project" className="z-10 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition">
        Go to Portfolio
      </a>

  
<div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden leading-none" style={{ pointerEvents: 'none' }}>

<svg viewBox="0 0 1440 320" className="w-full h-[80px] block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#0ea5e9"
      d="
        M0,160
        C60,149.3 120,139 240,133.3
        C360,128 480,128 600,160
        C720,192 840,224 960,224
        C1080,224 1200,192 1320,170.7
        C1380,160 1440,160 1440,160
        L1440,320
        L0,320
        Z
      "
    />
  </svg>
</div>
    </section>
  );
};

export default Hero;
