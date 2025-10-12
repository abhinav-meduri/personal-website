'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'R', 'Assembly']
  },
  {
    title: 'Frameworks & Technologies',
    skills: ['Angular', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS', 'PyTorch', 'TensorFlow']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'VSCode', 'Jira', 'Postman', 'Figma', 'Heroku', 'Netlify', 'Vercel']
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-700 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-gray-600">
                      <Image 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} 
                        alt={skill}
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        onError={(e) => {
                          // Fallback to a generic icon if the specific one doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-plain.svg`;
                        }}
                      />
                    </div>
                    <span className="text-xs mt-1 text-center text-gray-300">
                      {skill}
                    </span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-700 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-gray-600">
                      <Image 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} 
                        alt={skill}
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        onError={(e) => {
                          // Fallback to a generic icon if the specific one doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-plain.svg`;
                        }}
                      />
                    </div>
                    <span className="text-xs mt-1 text-center text-gray-300">
                      {skill}
                    </span>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="h-2 rounded-full bg-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-700 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-gray-600">
                      <Image 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`} 
                        alt={skill}
                        width={32}
                        height={32}
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        onError={(e) => {
                          // Fallback to a generic icon if the specific one doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-plain.svg`;
                        }}
                      />
                    </div>
                    <span className="text-xs mt-1 text-center text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to handle special cases for devicon paths
function getSkillIconPath(skill: string): string {
  const skillLower = skill.toLowerCase();
  
  // Handle special cases where the icon name doesn't match the skill name
  const specialCases: Record<string, string> = {
    'next.js': 'nextjs/nextjs-original',
    'node.js': 'nodejs/nodejs-original',
    'express': 'express/express-original',
    'c++': 'cplusplus/cplusplus-original',
    'c#': 'csharp/csharp-original',
    'html': 'html5/html5-original',
    'css': 'css3/css3-original',
    'vscode': 'vscode/vscode-original',
    'postman': 'postman/postman-original',
    'figma': 'figma/figma-original',
    'github': 'github/github-original',
    'aws': 'amazonwebservices/amazonwebservices-original',
    'tensorflow': 'tensorflow/tensorflow-original',
    'pytorch': 'pytorch/pytorch-original',
    'git': 'git/git-original',
    'docker': 'docker/docker-original',
    'linux': 'linux/linux-original',
    'jira': 'jira/jira-original',
    'heroku': 'heroku/heroku-original',
    'netlify': 'netlify/netlify-original',
    'vercel': 'vercel/vercel-original'
  };

  if (specialCases[skillLower]) {
    return specialCases[skillLower];
  }
  
  // Default case
  return `${skillLower}/${skillLower}-original`;
}

export default Skills;

