import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faLightbulb, faBook, faRobot } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-blue-950 text-white px-4 py-12">
      <div className="w-full max-w-4xl bg-gray-700 bg-opacity-80 rounded-lg shadow-2xl p-8 backdrop-blur-md transition-transform transform hover:scale-105">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-left text-blue-200">
          About Me
        </h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          I'm a dedicated student of electrical and electronic engineering with
          a passion for innovation and robotics. Currently on a journey of
          exploration and growth at University Of Scholars, I've actively
          engaged in a diverse range of projects that have enriched my technical
          skills and problem-solving abilities.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-left text-blue-300">
          Skills & Interests
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faRobot} className="text-yellow-400 w-8 h-8 mr-2" />
            <span>Robotics</span>
          </div>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faBook} className="text-yellow-400 w-8 h-8 mr-2" />
            <span>Research</span>
          </div>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-400 w-8 h-8 mr-2" />
            <span>Innovation</span>
          </div>
          <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={faUserGraduate} className="text-yellow-400 w-8 h-8 mr-2" />
            <span>Learning</span>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
