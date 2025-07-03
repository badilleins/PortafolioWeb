
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ExperienceSection = () => {
  const [openDiploma, setOpenDiploma] = useState(null);
  const [openMedia, setOpenMedia] = useState(null);

 
const education = [
  {
    institution: 'Universidad Técnica de Ambato',
    logo: 'https://cdn.goconqr.com/uploads/media/image/38554318/desktop_193fc17c-e7d8-4513-ab06-1294216f4097.png',
    degree: "Engineer's degree, Computer Software Engineering",
    dates: 'Sep 2020 - Jun 2026',
    activities: 'Swimming club',
    description:
      'Business Intelligence (BI), Web Development, AI, Git y Github, Mobile Development, and more.',
    courses: [
    ],
  },
  {
    institution: 'Platzi',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEOTcHh0HnWwQ/company-logo_100_100/company-logo_100_100/0/1677870818259/platzi_inc_logo?e=1756944000&v=beta&t=_NEwABf4g5_mkHO7e7yTvy9CODgCTWARfRtMHt-CLG0',
    degree: 'Web development, Frontend',
    dates: '2020',
    activities: 'Key web projects, active student',
    description:
      'Studied frontend development, focused on JavaScript, React, and performance optimization.',
courses: [
{
name: 'Closures and Scope in JavaScript',
diploma: 'https://platzi.com/Badilleins/course/1807-course/diploma-og/og.jpeg',
},
{
name: 'Asynchronicity with JavaScript',
diploma: 'https://platzi.com/Badilleins/course/3175-course/diploma-og/og.jpeg',
},
{
name: 'Practical Frontend Developer',
diploma: 'https://platzi.com/Badilleins/course/2477-course/diploma-og/og.jpeg',
},
{
name: 'Interface Design - Android Studio',
diploma: 'https://platzi.com/Badilleins/course/1825-course/diploma-og/og.jpeg',
},
{
name: 'Kotlin', 
diploma: 'https://platzi.com/Badilleins/curso/2245-course/diploma-og/og.jpeg', 
}, 
],
  },
{
    institution: 'Cisco Networking Academy',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGo0LANKsqgCg/company-logo_100_100/B56ZaSzDOOGoAQ-/0/1746219578583/cisco_logo?e=1756944000&v=beta&t=CtOyUGwWtgWkvjnYNXNbUytzQ-JICtrJ0SOFx37vbRs',
    degree: "",
    dates: 'May - June 2025',
    activities: 'coding excercises, reading materials',
    description:
      'Studied Python and C++ programming, focusing on data structures, algorithms, and software development best practices.',
    courses: [
      {
        name: 'Python',
        diploma: '/assets/cursoPython.png',
      },
      {
        name: 'C++',
        diploma: '/assets/cursoC.png',
      },
    ],
  },
];


const jobs = [
  {
    title: 'Mobile Developer',
    company: 'TrevisStore · Freelance',
    date: 'Jul 2023 - Oct 2023 · 4 mos',
    location: 'Remote',
    description:
      'I developed a mobile app designed to solve the difficulty of managing a bazaar’s operations.',
    details: [
      'Structured data in Firebase with real-time backend.',
      'Created Sales, Inventory, Break-even, and Statistics modules.',
      'Automated profit calculation and product pricing.',
    ],
    skills: ['Kotlin', 'Firebase', 'UX Design', 'Business Analysis'],
    media: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTNjczRtOWQyMXR4ejBrNnYya3l6NTB0eGljNmtldTJhd2JxN2ZjaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lec7Wu5DMWEiTAfiWo/giphy.gif',
  },
  {
    title: 'Back End Developer',
    company: 'GADM Píllaro · Part-time',
    date: 'Apr 2025 - Jun 2025 · 3 mos',
    location: 'Pillaro, Tungurahua, Ecuador · Remote',
    description:
      'Worked on the digitalization of cemetery and niche management modules.',
    details: [
      'Participated in requirement gathering and analysis.',
      'Developed modules for Niches, Inhumations, Owners, and Heirs.',
      'Implemented PDF generation and full CRUD systems.',
    ],
    skills: ['NestJS', 'PostgreSQL', 'Node.js'],
    media:'https://media.licdn.com/dms/image/v2/D4E2DAQEjoOwm_qYc_w/profile-treasury-image-shrink_800_800/B4EZe9phP_HYAY-/0/1751233468855?e=1751958000&v=beta&t=qWYq51tigUhMPKYKTNtVuwXJNopzuT-Qyuvy80fJw2o'
  },
  {
    title: 'Community Manager and Web Support',
    company: 'TurismoEcuador24 · Full-time',
    date: 'Jun 2022 - Jun 2023 · 1 yr 1 mo',
    location: 'Baños, Tungurahua, Ecuador · On-site',
    description:
      'Key role in digital marketing, content creation, and web support.',
    details: [
      'Grew Instagram to 10k followers and increased Facebook engagement.',
      'Implemented post automation across platforms.',
      'Created content based on tourist interest and SEO.',
      'Proposed and collaborated on web improvements.',
      'Improved online reputation via campaigns and multimedia.',
      'Boosted conversion rates with media and strategic communication.',
    ],
    skills: ['SEO', 'Social Media Marketing', 'Content Creation', 'Photography', 'Video Editing'],
    media:'https://media.licdn.com/dms/image/v2/D4E2DAQEm8PEGSpoXQw/profile-treasury-image-shrink_1280_1280/B4EZe37g2bHwAQ-/0/1751137522459?e=1751958000&v=beta&t=VPsly5NBigGZ7AsKPja09zqvN1rOqR4CBx1NNE3sNZ4'
  },
];

  return (
    <section id="experience" className="relative px-6 py-24 text-white overflow-hidden bg-[#02121f]">
      {/* Efecto de luz del mar */}

      {/* Burbujas animadas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cyan-200 rounded-full opacity-20 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Decoración fondo marino */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black-900 to-transparent z-0">
        <div className="absolute right-4 bottom-0 w-28 h-28 bg-[url('https://media.tenor.com/W8DEn7xld8YAAAAi/jellyfish-pixel.gif')] bg-contain bg-no-repeat"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-16 z-10 relative">
Exploring the Depths of My Journey 🌊🧜‍♂️      </h2>

      
      {openDiploma && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-[500px] h-[650px] relative flex items-center justify-center">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setOpenDiploma(null)}
            >
              ✕
            </button>
            <img
              src={openDiploma}
              alt="Diploma"
              className="max-w-full max-h-full object-contain rounded"
            />
          </div>
        </div>
      )}
      {openMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-[500px] h-[650px] relative flex items-center justify-center">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setOpenMedia(null)}
            >
              ✕
            </button>
            <img
              src={openMedia}
              alt="Media"
              className="max-w-full max-h-full object-contain rounded"
            />
          </div>
        </div>
      )}

      {/* Educación */}
      <div className="mb-24 max-w-6xl mx-auto z-10 relative">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">🏫 Academic training</h3>
        <Swiper spaceBetween={30} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 2.3 } }}>
          {education.map((edu, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#0c4a6e]/80 p-6 rounded-xl shadow-lg backdrop-blur-md relative h-full">
                <h4 className="text-xl font-bold">{edu.institution}</h4>
                <p className="italic text-sm">{edu.degree} — {edu.dates}</p>
                <p className="mt-2 text-sm">{edu.description}</p>
                <p className="mt-2 text-xs text-cyan-200">Activities: {edu.activities}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <button
                      key={idx}
                      onClick={() => setOpenDiploma(course.diploma)}
                      className="bg-white text-blue-900 px-4 py-1 rounded-full text-sm shadow hover:bg-cyan-200 transition"
                    >
                      {course.name}
                    </button>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Experiencia Profesional */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">💼 Work experience</h3>
        <Swiper spaceBetween={30} slidesPerView={1.2} breakpoints={{ 768: { slidesPerView: 2 } }}>
          {jobs.map((job, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#0c4a6e]/80 p-6 rounded-xl shadow-lg backdrop-blur-md h-full">
                <h4 className="text-xl font-bold">{job.title}</h4>
                <p className="italic text-sm">{job.company} — {job.date} | {job.location}</p>
                <p className="mt-2 text-sm">{job.description}</p>
                <ul className="list-disc list-inside mt-3 text-xs space-y-1">
                  {job.details.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-blue-900 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {job.media && (
                  <div className="mt-4">
                    <button
                      onClick={() => setOpenMedia(job.media)}
                      className="bg-cyan-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-cyan-300 transition"
                    >
                      More
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-12 z-10 relative">
  <a
    href="/assets/BadilloStalinCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-cyan-300 hover:bg-cyan-500 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
  >
    📄 View My CV
  </a>
</div>


      <style>{`
        @keyframes bubble {
          0% { transform: translateY(100%); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes oceanLight {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }

        .animate-bubble {
          animation-name: bubble;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-oceanLight {
          animation: oceanLight 15s linear infinite;
        }
      `}</style>

      <section id="thanks" className="mt-32 text-center z-10 relative">
  <h2 className="text-3xl font-bold text-cyan-300 mb-4">Thank You for Visiting</h2>
  <p className="text-cyan-100 text-sm max-w-xl mx-auto">
    I truly appreciate your time exploring my portfolio. I hope you found something inspiring here. Feel free to reach out anytime!
  </p>
</section>

    </section>
    
  );
};

export default ExperienceSection;
