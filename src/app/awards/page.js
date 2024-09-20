import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, 
  faMedal, 
  faAward, 
  faRobot, 
  faFutbol, 
  faLightbulb, 
  faGlobeAsia 
} from '@fortawesome/free-solid-svg-icons';

export default function Awards() {
  const awards = [
    { 
      name: "Digital Bangladesh Mela", 
      position: "1st position", 
      date: "27 January 2023",
      icon: faTrophy 
    },
    { 
      name: "BUET EEE Day 2023 (project Showcasing)", 
      position: "2nd position", 
      date: "16-17 February 2023",
      icon: faMedal 
    },
    { 
      name: "Beyond The Metrics 2023 (project Showcasing)", 
      position: "2nd Position", 
      date: "22 March 2023",
      icon: faAward 
    },
    { 
      name: "Project Showcasing Competition (Robo Soccer)", 
      position: "1st position", 
      date: "04 August 2023",
      icon: faRobot 
    },
    { 
      name: "1st Intra Robo Soccer Competition", 
      position: "2nd position", 
      date: "19 August 2023",
      icon: faFutbol 
    },
    { 
      name: "Chaldal Present Business Idea Competition", 
      position: "3rd position", 
      date: "3 June 2023",
      icon: faLightbulb 
    },
    { 
      name: "The Young Achiever Submit & Award 2024", 
      location: "Bangkok, Thailand", 
      date: "",
      icon: faGlobeAsia 
    }
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white px-4 py-12">
      <div className="max-w-6xl w-full p-5">
        <h1 className="text-4xl sm:text-5xl font-bold mb-14 text-center text-blue-300">
          Participations & Awards
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="flex items-start mb-3">
                <FontAwesomeIcon icon={award.icon} className="w-5 h-5 mr-3 text-yellow-400" />
                <h2 className="text-xl font-semibold text-amber-300">{award.name}</h2>
              </div>
              <p className="font-medium text-gray-200">{award.position}</p>
              <p className="text-sm text-gray-400 mt-2">{award.date}</p>
              {award.location && <p className="text-sm text-gray-400">{award.location}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}