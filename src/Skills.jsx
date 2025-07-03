import React, { useState } from 'react';

const categories = {
  Frontend: [
    { name: 'HTML5', url: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
    { name: 'CSS3', url: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
    { name: 'SASS', url: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' },
    { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
    { name: 'Bootstrap', url: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white' },
    { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
    { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'React Native', url: 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'Kotlin', url: 'https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white' },
    { name: 'Figma', url: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
    { name: 'UX/UI', url: 'https://img.shields.io/badge/UX%2FUI--Design-blueviolet?style=for-the-badge' },
  ],
  Backend: [
    { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' },
    { name: 'NestJS', url: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white' },
    { name: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Java', url: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'Postman', url: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
    { name: 'Jest', url: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white' },
    { name: 'Pytest', url: 'https://img.shields.io/badge/Pytest-3776AB?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'JUnit', url: 'https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=java&logoColor=white' },
    { name: 'JWT', url: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white' },
  ],
  Databases: [
    { name: 'MySQL', url: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white' },
    { name: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white' },
    { name: 'MariaDB', url: 'https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white' },
    { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
    { name: 'TypeORM', url: 'https://img.shields.io/badge/TypeORM-262626?style=for-the-badge&logo=typeorm&logoColor=white' },
    { name: 'Firebase', url: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
    { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
  ],
  'Data Analysis': [
    { name: 'Power BI', url: 'https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black' },
    { name: 'Excel', url: 'https://img.shields.io/badge/Microsoft%20Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white' },
    { name: 'Microsoft SQL Server', url: 'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white' },
    { name: 'Hadoop', url: 'https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apache-hadoop&logoColor=black' },
    { name: 'Hive', url: 'https://img.shields.io/badge/Apache%20Hive-FDEE21?style=for-the-badge&logo=apache-hive&logoColor=black' },
  ],
  Accessories: [
    { name: 'Visual Studio Code', url: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
    { name: 'Visual Studio', url: 'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=for-the-badge&logo=visual-studio&logoColor=white' },
    { name: 'Git', url: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
    { name: 'GitHub', url: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' },
    { name: 'VirtualBox', url: 'https://img.shields.io/badge/VirtualBox-183A61?style=for-the-badge&logo=virtualbox&logoColor=white' },
    { name: 'Google Cloud', url: 'https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white' },
    { name: 'Azure', url: 'https://img.shields.io/badge/Microsoft%20Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white' },
    { name: 'Jira', url: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white' },
    { name: 'Jenkins', url: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white' },
    { name: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
return (
  <section id='skills'
    className="py-20 px-6 text-center"
    style={{
      background: 'linear-gradient(to bottom, #0c4a6e, #072b45)', // degradado personalizado
      color: 'white',
    }}
  >
    <h2 className="text-4xl font-bold text-white mb-12 tracking-wide drop-shadow-md">
      My technical skills🎯
    </h2>

    <div className="flex justify-center flex-wrap gap-4 mb-10">
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-5 py-2 rounded-full font-semibold transition 
            ${activeTab === category 
              ? 'bg-white text-blue-900 shadow-lg shadow-white/50' 
              : 'bg-blue-100 text-blue-900 border border-white hover:bg-blue-200'}`}
        >
          {category}
        </button>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
      {categories[activeTab].map(({ name, url }, index) => (
        <img
          key={index}
          src={url}
          alt={name}
          title={name}
          className="h-10"
        />
      ))}
    </div>
  </section>

);

}

export default Skills;