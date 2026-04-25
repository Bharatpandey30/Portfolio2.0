import React from 'react'
import AboutImg from '../../assets/AboutImg.png'
import { IoArrowForward } from 'react-icons/io5'
import { HiComputerDesktop } from 'react-icons/hi2'
const About = () => {
  return (
    <div className=' text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#000000] shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'> 
    <div>
        <h2 className='text-2xl md:text-4xl font-bold'> About me   </h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
         <img className='md:h-80' src={AboutImg} alt=" " />

            <ul>
                <div className='flex gap-3 py-6'>
                    <HiComputerDesktop size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1> FrontEnd Developer</h1> 
                        <p> I have to wirte something here later:) </p>
                    </span>
                </div>
                <div className='flex gap-3 py-6'>
                     <HiComputerDesktop size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1> BackEnd Developer </h1> 
                        <p> I have to wirte something here later:) </p>
                    </span>
                </div>
                <div className='flex gap-3 py-6'>
                    <HiComputerDesktop size={30} className="mt-1" />
                    <span className='w-96'>
                        <h1> Gen AI </h1> 
                        <p> I have to wirte something here later:) </p>
                    </span>
                </div>
            </ul>
         </div>
    </div>

    </div>
  )
}

export default About;