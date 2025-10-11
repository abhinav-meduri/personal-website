'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code, Database, Cpu } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'FERC Filing Automation System',
      description: 'Enterprise Angular application with ASP.NET Core backend for automating utility regulatory filings, reducing processing time by 70%.',
      image: '/projects/ferc-system.png',
      technologies: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'TypeScript'],
      github: 'https://github.com/abhinavmeduri/ferc-automation',
      demo: 'https://ferc-demo.vercel.app',
      category: 'Enterprise Software',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Energy Efficiency Assessment Platform',
      description: 'JavaScript application for automated HVAC energy-efficiency assessments, processing 1000+ residential properties.',
      image: '/projects/energy-platform.png',
      technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Swagger'],
      github: 'https://github.com/abhinavmeduri/energy-assessment',
      demo: 'https://energy-demo.vercel.app',
      category: 'Energy Tech',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Polymer Design ML Pipeline',
      description: 'Machine learning pipeline using denoising diffusion models for inverse design of polymer-grafted nanoparticles.',
      image: '/projects/ml-pipeline.png',
      technologies: ['Python', 'PyTorch', 'TorchDiff', 'HOOMD-blue', 'Bayesian Methods'],
      github: 'https://github.com/abhinavmeduri/polymer-ml',
      demo: 'https://polymer-demo.vercel.app',
      category: 'Machine Learning',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with Next.js, featuring smooth animations and interactive elements.',
      image: '/projects/portfolio.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/abhinavmeduri/personal-website',
      demo: 'https://abhinavmeduri.dev',
      category: 'Web Development',
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="text-6xl text-white opacity-90 relative z-10">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
