import React from 'react'
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
  FaPython, FaDatabase, FaDocker, FaGit, FaFigma
} from 'react-icons/fa'

import { FaAmazon } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'
import { SiAccenture } from 'react-icons/si'

const Experience = () => {
  const skills = [
    FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs,
    FaPython, FaDatabase, FaDocker, FaGit, FaFigma
  ]

  return (
    <div id='Experience' className='p-10 md:p-24 text-white'>

      {/* TITLE */}
      <h1 className='text-4xl md:text-6xl font-bold mb-14'>
        Experience
      </h1>

      <div className='flex flex-col md:flex-row gap-12'>

        {/* ================= LEFT: SKILLS ================= */}
        <div className='md:w-2/5 space-y-10'>

          <h2 className='text-2xl font-semibold text-gray-300'>
            Technical Skills
          </h2>

          {/* Skill Grid */}
          <div className='flex flex-wrap gap-4'>
            {skills.map((Icon, index) => (
              <div
                key={index}
                className='w-16 h-16 flex items-center justify-center 
                bg-zinc-900 rounded-2xl border border-white/10
                hover:scale-110 hover:bg-zinc-800 transition duration-300'
              >
                <Icon size={26} className='text-gray-300 hover:text-cyan-400 transition' />
              </div>
            ))}
          </div>

          {/* AI SKILLS (TEXT BASED - PROFESSIONAL STYLE) */}
          <div>
            <h2 className='text-xl font-semibold mt-8 mb-4 text-gray-300'>
              AI / Data Science
            </h2>

            <div className='flex flex-wrap gap-3'>
              {[
                "Python",
                "Machine Learning",
                "Deep Learning",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "NLP",
                "Data Analysis",
                "Model Training"
              ].map((skill, i) => (
                <span
                  key={i}
                  className='px-3 py-2 bg-zinc-900 border border-white/10 
                  rounded-xl text-sm text-gray-300 
                  hover:bg-zinc-800 transition'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ================= RIGHT: EXPERIENCE ================= */}
        <div className='md:w-3/5 space-y-8'>

          {/* UPWORK */}
          <div className='bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition'>

            <div className='flex items-center gap-3'>
              <FaUpwork size={25} color="#14a800" />
              <h2 className='text-xl font-semibold'>
                Full Stack Developer — Upwork
              </h2>
            </div>

            <p className='text-gray-400 mt-2'>
              Jan 2024 – Present
            </p>

            <ul className='text-gray-300 mt-3 list-disc ml-5 space-y-2'>
              <li>Developed and deployed full-stack web applications using React.js, Node.js, and REST APIs.</li>
              <li>Built responsive UI components with modern design systems using Tailwind CSS.</li>
              <li>Integrated authentication systems (JWT, session-based auth) for secure user access.</li>
              <li>Designed and optimized backend APIs for performance and scalability.</li>
              <li>Collaborated with international clients to gather requirements and deliver production-ready solutions.</li>
            </ul>
          </div>

          {/* ACCENTURE */}
          <div className='bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition'>

            <div className='flex items-center gap-3'>
              <SiAccenture size={25} color="#a100ff" />
              <h2 className='text-xl font-semibold'>
                AI Enterprise Analyst — Accenture
              </h2>
            </div>

            <p className='text-gray-400 mt-2'>
              April 2026 – Present
            </p>

            <ul className='text-gray-300 mt-3 list-disc ml-5 space-y-2'>
              <li>Developing AI-driven enterprise solutions to improve business decision-making.</li>
              <li>Analyzing large datasets to identify patterns, trends, and predictive insights.</li>
              <li>Assisting in building and deploying machine learning models for real-world business problems.</li>
              <li>Working with cross-functional teams to integrate AI solutions into existing systems.</li>
              <li>Improving data pipelines and ensuring data quality for model training.</li>
            </ul>
          </div>

          {/* AMAZON */}
          <div className='bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition'>

            <div className='flex items-center gap-3'>
              <FaAmazon size={25} color="#FF9900" />
              <h2 className='text-xl font-semibold'>
                SDE – Quality Engineer — Amazon
              </h2>
            </div>

            <p className='text-gray-400 mt-2'>
              Aug 2021 – Dec 2022
            </p>

            <ul className='text-gray-300 mt-3 list-disc ml-5 space-y-2'>
              <li>Designed and executed automated test cases for large-scale distributed systems.</li>
              <li>Improved software reliability by identifying critical bugs and performance issues.</li>
              <li>Worked on regression testing, API testing, and system validation workflows.</li>
              <li>Collaborated with developers to ensure high-quality software delivery.</li>
              <li>Participated in CI/CD pipeline testing and deployment validation.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience
