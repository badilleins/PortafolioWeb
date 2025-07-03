import React from 'react';

const projects = [
  {
    title: 'Badiblog 🌊🎨',
Description: 'Personal blog with AI and integrated portfolio. Includes a featured post about AI.'    ,
tech: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2IzNTI4M3I1bHZ2M3pkd21rbmk1Nzc0NjF4c2libTcxaXV3d2FkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cqj61hZOIXiwNc1hx0/giphy.gif',
    website: 'https://badilleins.github.io/BadiBlog/',
    repo: 'https://github.com/badilleins/BadiBlog'
  },
  {
    title: 'Ecuabus App 🚍',
description: 'App to manage routes, drivers, and tickets for transport cooperatives.',   
 tech: ['Angular', 'Ionic', 'TypeScript', 'JavaScript', 'HTML'],
    image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZxYzBvM3dhc2JoaWcwNjZndXc2anBldGlrNDllczk4Z2V3MDdvZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I3xUZzX4u2k1cn7ajm/giphy.gif',
    website: 'http://foodtrackr.me/BadiBlog/',
    repo: 'https://github.com/badilleins/EcuabusApp'
  },
  {
    title: 'NataTrack 🏊‍♀️📈',
description: 'Mobile app for swimmers that offers statistics, alerts, and training recommendations.' ,   
tech: ['Kotlin'],
    image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWZveW5hZ2w3dDAxODE0bXczbHpyNm5pOTRoMHQ4cW1sc2VjZ3p5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fBLh2kxp9W2T3FfWFE/giphy.gif',
    website: 'https://youtu.be/xBjfY5Xqwyg',
    repo: 'https://github.com/badilleins/NataTrack.git'
  },
  {
    title: 'Trevis Store App 🛒📱',
description: 'App to automate sales in local businesses. Allows login, sales, statistics, and product management.'  ,
 tech: ['Kotlin'],
    image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHE5dDF1djJvdm56NXplM3ZqNWc3ZHU3bzhmYnQyc3RidnBnZXkyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lec7Wu5DMWEiTAfiWo/giphy.gif',
    website: 'http://foodtrackr.me/BadiBlog/',
    repo: 'https://github.com/badilleins/TrevisStoreApp'
  }
];
const Projects = () => (
  <section
    id="project"
    className="py-20 px-6"
    style={{
      background: 'linear-gradient(to bottom, #072b45, #041f33)', 
    }}
  >
    <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
Projects in the Sea of ​​Code 🌐    </h2>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {projects.map((proj, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden"
        >
          <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">{proj.title}</h3>
            <p className="mb-2 text-sm">{proj.description}</p>
            <p className="text-sm italic text-blue-600">{proj.tech.join(', ')}</p>
            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-700 font-semibold underline"
            >
              Go to repo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
