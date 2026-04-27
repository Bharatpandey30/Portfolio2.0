import React from 'react'
import AboutImg from '../../assets/AboutImg.png'
import { HiComputerDesktop } from 'react-icons/hi2'
import { FaBrain, FaDatabase, FaCode, FaCloud } from 'react-icons/fa'

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center 
    bg-[#000000] shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-2xl p-10'>

      <div>
        <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center md:text-left'>
          About Me
        </h2>

        <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-10'>

          {/* Image */}
          <img 
            className='md:h-80 rounded-xl shadow-lg hover:scale-105 transition duration-300' 
            src={AboutImg} 
            alt="About" 
          />

          {/* Skills Section */}
          <div className='space-y-6'>

            {/* Frontend */}
            <div className='flex gap-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition'>
              <FaCode size={30} className="mt-1 text-cyan-400" />
              <div className='max-w-md'>
                <h1 className='text-xl font-semibold'>Frontend Development</h1>
                <p className='text-gray-400'>
                  React.js, JavaScript, Tailwind CSS, responsive UI design, 
                  component-based architecture, performance optimization.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className='flex gap-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition'>
              <FaDatabase size={30} className="mt-1 text-green-400" />
              <div className='max-w-md'>
                <h1 className='text-xl font-semibold'>Backend Development</h1>
                <p className='text-gray-400'>
                  Node.js, Express.js, REST APIs, authentication, database design 
                  (MongoDB, SQL), server-side logic.
                </p>
              </div>
            </div>

            {/* AI / ML */}
            <div className='flex gap-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition'>
              <FaBrain size={30} className="mt-1 text-purple-400" />
              <div className='max-w-md'>
                <h1 className='text-xl font-semibold'>AI / Machine Learning</h1>
                <p className='text-gray-400'>
                  Python, NumPy, Pandas, Scikit-learn, TensorFlow, model building, 
                  data preprocessing, supervised & unsupervised learning, NLP basics.
                </p>
              </div>
            </div>

            {/* Cloud / Tools */}
            <div className='flex gap-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition'>
              <FaCloud size={30} className="mt-1 text-yellow-400" />
              <div className='max-w-md'>
                <h1 className='text-xl font-semibold'>Cloud & Tools</h1>
                <p className='text-gray-400'>
                  Git, GitHub, Docker, basic AWS/Azure, CI/CD pipelines, 
                  version control, deployment strategies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
