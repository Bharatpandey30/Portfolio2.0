import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contacts = () => {
  return (
    <div id="Contact" className="text-white p-10 md:p-24">

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row gap-12">

        {/* LEFT - INFO */}
        <div className="md:w-1/2 space-y-6">

          <p className="text-gray-400 text-lg">
            I’m currently open to Full Stack and AI Engineer opportunities.
            Feel free to reach out if you want to collaborate or hire me.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4">

            <div className="flex md:text-xl items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <a href="URL"><span className="text-gray-300"> bharatpandey361@gmail.com</span></a>
            </div>

            <div className="flex md:text-xl items-center gap-3">
              <FaGithub className="text-white" />
               <a href="https://www.github.com/Bharatpandey30"><span className="text-gray-300"> github.com/Bharatpandey30</span></a>
            
            </div>

            <div className="flex md:text-xl items-center gap-3">
              <FaLinkedin className="text-blue-500" />
              <a href="https://www.linkedin.com/in/bharatpandey94/"><span className="text-gray-300">linkedin</span></a>
        
            </div>

          </div>

        </div>

        {/* RIGHT - FORM */}
        <div className="md:w-1/2">

          <form className="space-y-4 bg-zinc-900 p-6 rounded-2xl border border-white/10">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg font-semibold 
              hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Contacts
