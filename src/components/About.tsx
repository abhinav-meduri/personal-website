'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science and Statistics student at Duke University with a 
              strong foundation in software engineering and machine learning. My journey in tech 
              began with a curiosity about how systems work and has evolved into a deep passion 
              for building solutions that make a real impact.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm working as a Software Engineer Intern at Systrends, Inc., where I've 
              developed Angular Material UIs and ASP.NET Core Web APIs that have significantly 
              improved efficiency for utility companies. I'm also contributing to machine learning 
              research at Duke University Materials Initiative, working on denoising diffusion 
              generative models for polymer design.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or diving deep into the latest research in machine learning 
              and materials science.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-white">Duke University</h4>
                  <p className="text-gray-300">Bachelor of Science, Computer Science and Statistics</p>
                  <p className="text-sm text-gray-400">Expected: May 2028 • GPA: 3.93</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Relevant Coursework</h4>
                  <p className="text-sm text-gray-300">
                    Data Structures & Algorithms, Computer Architecture, Database Systems, 
                    Applied Machine Learning, Linear Algebra, Probability, Regression Analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Machine Learning & AI
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  High-Performance Computing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Materials Science Applications
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

