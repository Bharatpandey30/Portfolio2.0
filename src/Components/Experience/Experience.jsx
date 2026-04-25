import React from 'react'
import { FaCss3, FaFigma, FaHtml5, FaJs, FaPython, FaDatabase, FaDocker, FaReact, FaGit, FaNodeJs} from 'react-icons/fa'
import { FaAmazon } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'
import { SiAccenture } from 'react-icons/si'


const Experience = () => {
  return (

    <div id='Experience' className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'> Experience </h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaHtml5 color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaCss3 color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaFigma color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaJs color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaPython color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaDatabase color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaDocker color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaGit color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaReact color="#E34F26" size={50}/>
                </span>
                <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                    <FaNodeJs color="#E34F26" size={50}/>
                </span>    

            </div>
         </div>
     </div>
  )
}

export default Experience