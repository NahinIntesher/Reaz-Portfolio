import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faUsers, 
  faFlask, 
  faRocket, 
  faChalkboardTeacher, 
  faGraduationCap, 
  faMicrochip, 
  faSatellite, 
  faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
  const experiences = [
    {
      title: "President",
      organization: "University Of Scholars Mechatronics Club",
      icon: faUsers
    },
    {
      title: "Co-Research Assistant",
      organization: "University Of Scholars Research Lab",
      icon: faFlask
    },
    {
      title: "Founder",
      organization: "Team Orbit",
      icon: faRocket
    },
    {
      title: "Joint Secretary Project Development",
      organization: "Dhaka College Science Club",
      period: "2019-2020",
      icon: faChalkboardTeacher
    },
    {
      title: "Campus Ambassador",
      organization: "National Steam Olympiad",
      icon: faGraduationCap
    },
    {
      title: "Campus Ambassador",
      organization: "Interactive CARES",
      icon: faBriefcase
    },
    {
      title: "Campus Ambassador",
      organization: "IEEE Branch Fest-2023",
      icon: faMicrochip
    },
    {
      title: "Campus Ambassador",
      organization: "DUET TechFest",
      icon: faSatellite
    },
    {
      title: "Campus Ambassador",
      organization: "Esonance",
      icon: faLaptopCode
    },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white px-4 py-12">
      <div className="p-5 max-w-6xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-blue-300">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-start mb-3">
                <FontAwesomeIcon icon={exp.icon} className="w-6 h-6 mr-3 text-yellow-400" />
                <h2 className="text-lg sm:text-xl font-semibold text-amber-300">{exp.title}</h2>
              </div>
              <p className="font-medium text-gray-200">{exp.organization}</p>
              {exp.period && <p className="text-sm text-gray-400 mt-2">{exp.period}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}