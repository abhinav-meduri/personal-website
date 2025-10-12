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

  // Helper function to handle special cases for devicon paths
  const getSkillIconPath = (skill: string): string => {
    const skillLower = skill.toLowerCase();
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
      'vercel': 'vercel/vercel-original',
      'assembly': 'assemblyscript/assemblyscript-original',
      'r': 'r/r-original'
    };

    return specialCases[skillLower] || `${skillLower}/${skillLower}-original`;
  };

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-gray-700 pb-3">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, skillIndex) => {
                  const iconPath = getSkillIconPath(skill);
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.03) 
                      }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-gray-600 group-hover:shadow-md">
                        <Image 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}.svg`}
                          alt={skill}
                          width={32}
                          height={32}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-xs mt-2 text-center text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
