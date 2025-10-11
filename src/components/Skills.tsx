'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'C', level: 80 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 75 },
        { name: 'Assembly', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Technologies',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React/Next.js', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'ASP.NET Core', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Linux/Unix', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'PyTorch', level: 90 }
      ]
    },
    {
      title: 'Core Skills',
      skills: [
        { name: 'Object-Oriented Programming', level: 95 },
        { name: 'AI/ML', level: 90 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Full-Stack Development', level: 95 },
        { name: 'High-Performance Computing', level: 80 },
        { name: 'Unit Testing', level: 85 },
        { name: 'Git/GitHub', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
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
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        className="bg-gradient-to-r from-gray-400 to-gray-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Machine Learning', 'Data Science', 'Cloud Computing', 'DevOps',
              'Database Design', 'API Development', 'Microservices', 'Agile/Scrum',
              'Version Control', 'Code Review', 'Documentation', 'Problem Solving'
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

