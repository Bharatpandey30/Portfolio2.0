import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projectData = [
    {
    title: "Social Blogging Platform (Full Stack)",
    type: "Full Stack",
    desc: "Built a full-stack social blogging platform inspired by Instagram/Facebook where users can create posts, follow other users, and view personalized feeds based on their network. Includes authentication, user profiles, real-time feed updates, and secure REST APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Tailwind"],
    github: "#",
    live: "#"
    }
,
    {
      title: "AI Chatbot (NLP-Based)",
      type: "AI Project",
      desc: "An intelligent chatbot built using NLP techniques that can answer user queries, perform intent classification, and simulate human-like conversation.",
      tech: ["Python", "NLP", "Scikit-learn", "Flask"],
      github: "#",
      live: "#"
    },
  {
  title: "AI Document Processing System (AWS)",
  type: "AI + Cloud",
  desc: "Built a serverless AI system on AWS that processes and extracts structured data from unstructured documents such as PDFs and images. Uses AWS Textract and Lambda for automated text extraction, classification, and data storage. Designed for scalable enterprise use cases like finance, HR, and healthcare document automation.",
  tech: ["AWS S3", "AWS Lambda", "AWS Textract", "Python", "NLP", "DynamoDB"],
  github: "#",
  live: "#"
}

  ]

  return (
    <div id="Projects" className="text-white p-10 md:p-24">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12">
        Most Recent Projects
      </h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl border border-white/10 
            hover:scale-105 hover:bg-zinc-800 transition duration-300 shadow-lg"
          >

            {/* TYPE */}
            <span className="text-sm text-blue-400 font-medium">
              {project.type}
            </span>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mt-2">
              {project.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-zinc-800 rounded-md text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 mt-5">
              <a href={project.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
                <FaGithub /> Code
              </a>

              <a href={project.live} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition">
                <FiExternalLink /> Live
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
