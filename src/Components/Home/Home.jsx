import React from 'react'
import avatar from '../../assets/avatar.png'
const Home = () => {
  return (
    <div className=' text-white flex w-full justify-between items-start p-10 md:p-20'>
     <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'> Hi, I’m Bharat </h1>
       <p className="text-sm md:text-xl tracking-tight leading-relaxed text-gray-300 max-w-2xl mt-4">
         I am an AI-focused Software Engineer passionate about building scalable, intelligent web applications. I work with technologies like JavaScript, React, Node.js, Python, and SQL to develop efficient, user-centric solutions. Currently based in Canada, I am focused on growing in Artificial Intelligence and modern full-stack development while contributing to impactful real-world projects.
        </p>
         <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 bg-blue-600 rounded-3xl font-semibold hover:opacity-85 hover:scale-105 duration-300 transition-all'>
                Contact Me
            </button>
    </div>
        <div>
            <img className='w-3xl' src={avatar} alt=""/>
         </div>
  </div>
)
}

export default Home;