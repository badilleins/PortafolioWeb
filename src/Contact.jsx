import React from 'react';

const socialLinks = [
  {
    label: 'Connect with me on',
    url: 'https://www.linkedin.com/in/stalinbadillo/',
    img: 'https://user-images.githubusercontent.com/88904952/234979284-68c11d7f-1acc-4f0c-ac78-044e1037d7b0.png',
    alt: 'LinkedIn',
  },
  {
    label: 'See a piece of my life on',
    url: 'https://x.com/badilleins',
    img: 'https://static.vecteezy.com/system/resources/previews/034/716/139/non_2x/x-new-twitter-logo-free-png.png',
    alt: 'X',
  },
  {
    label: 'Check my portfolio on',
    url: 'https://github.com/badilleins',
    img: 'https://cdn-icons-png.flaticon.com/512/2111/2111425.png',
    alt: 'Portfolio',
  },
  {
    label: 'Check my learnings on',
    url: 'https://platzi.com/p/Badilleins/',
    img: 'https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png',
    alt: 'Platzi',
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative py-20 px-6 overflow-hidden text-white"
    style={{ background: 'linear-gradient(to bottom, #041f33, #02121f)' }}
  >
   
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t to-transparent z-10 pointer-events-none">
      <div
        className="absolute left-4 bottom-0 w-24 h-24 bg-[url('https://media.tenor.com/Nc_9RoDqg2gAAAAj/dolphin.gif')] bg-contain bg-no-repeat animate-floatFish"
      />
    </div>

   
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-cyan-100 rounded-full opacity-20 animate-bubble pointer-events-none"
        style={{
          width: `${Math.random() * 6 + 4}px`,
          height: `${Math.random() * 6 + 4}px`,
          left: `${Math.random() * 100}%`,
          bottom: `-${Math.random() * 100}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`,
        }}
      />
    ))}

    <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-xl z-20 relative">
Let's talk underwater! 🌊    </h2>

    <div className="mt-14 max-w-4xl mx-auto flex flex-wrap justify-center gap-10 z-20 relative">
      {socialLinks.map(({ label, url, img, alt }) => (
        <a
          key={alt}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center w-[140px]"
        >
          <p className="font-semibold text-center text-blue-900 mb-3 text-sm">{label}</p>
          <img src={img} alt={alt} className="h-14 w-14 object-contain" />
        </a>
      ))}
    </div>

   
    <style>{`
      @keyframes bubble {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 0.3; }
        100% { transform: translateY(-100vh); opacity: 0; }
      }

      @keyframes floatFish {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .animate-bubble {
        animation: bubble 10s ease-in-out infinite;
      }

      .animate-floatFish {
        animation: floatFish 4s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default Contact;
