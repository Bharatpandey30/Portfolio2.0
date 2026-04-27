import React from 'react'
import avatar from '../../assets/avatar.png'

const Home = () => {
  return (
    <div className='text-white flex flex-col-reverse md:flex-row items-center justify-between 
    w-full px-6 md:px-20 py-10 md:py-20 gap-10'>

      {/* LEFT SECTION */}
      <div className='md:w-1/2'>

        {/* Heading */}
        <h1 className='text-4xl md:text-7xl font-bold leading-tight tracking-tight'>
          Hi, I’m <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400'>
            Bharat
          </span>
        </h1>

        {/* Sub-heading */}
        <h2 className='text-lg md:text-2xl mt-4 text-gray-300 font-medium'>
          AI-Focused Software Engineer
        </h2>

        {/* Description */}
        <p className="text-sm md:text-lg tracking-tight leading-relaxed text-gray-400 
        max-w-xl mt-6">
          I build scalable, intelligent web applications by combining modern full-stack 
          development with Artificial Intelligence. Skilled in React, Node.js, Python, 
          and SQL, I focus on creating efficient, user-centric solutions that solve 
          real-world problems.
        </p>

        {/* Buttons */}
        <div className='flex gap-4 mt-8 flex-wrap'>
          <button className='bg-blue-600 px-6 py-2 rounded-full font-semibold 
          hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg'>
            Contact Me
          </button>

          <button className='border border-gray-500 px-6 py-2 rounded-full font-semibold 
          hover:bg-gray-800 hover:scale-105 transition duration-300'>
            View Projects
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='md:w-1/2 flex justify-center relative'>

        {/* Glow Effect */}
    <div className='relative flex justify-center items-center'>

  {/* Glow Effect */}
 <div className='relative flex justify-center items-center'>

  {/* Rectangular Glow */}
        <div className='absolute w-[500px] h-[380px] 
        bg-gradient-to-r from-blue-500 to-cyan-400 
        opacity-20 blur-2xl rounded-3xl'></div>

        {/* Image */}
        <img 
            className='w-80 h-80 md:w-[550px] md:h-[350px] object-cover 
            relative z-10 rounded-3xl shadow-2xl 
            hover:scale-105 transition duration-500' 
            src={avatar} 
            alt="avatar"
        />

</div>

</div>


      </div>

    </div>
  )
}

export default Home
