import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faRobot,
  faFutbol,
  faBalanceScale,
  faCube,
  faDrone,
  faAmbulance,
  faWater,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projects = [
    { name: "Formula 1 Car", icon: faCar },
    { name: "Line Following Robot", icon: faRobot },
    { name: "Soccer Bot", icon: faFutbol },
    { name: "Self Balancing Robot", icon: faBalanceScale },
    { name: "Self Balancing Cube", icon: faCube },
    { name: "AI-Based Agricultural Drone", icon: faDrone },
    { name: "Rescue Rover", icon: faAmbulance },
    { name: "Underwater ROV", icon: faWater },
    { name: "Smart Glass for Drivers", icon: faGlasses },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white px-4 py-12">
      <div className="w-full max-w-screen-xl p-5">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-left text-blue-200">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-70 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-start mb-3">
                <FontAwesomeIcon
                  icon={project.icon}
                  className="w-6 h-6 mr-3 text-yellow-400"
                />
                <h2 className="text-xl font-bold text-amber-300">
                  {project.name}
                </h2>
              </div>
              <p className="text-gray-300 text-sm">
                Click to learn more about this project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
