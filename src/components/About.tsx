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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Software Development</h4>
                  <p className="text-gray-300">
                    Building efficient, scalable applications with modern web technologies and frameworks.
                    I enjoy working across the full stack and creating seamless user experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Data Science & ML</h4>
                  <p className="text-gray-300">
                    Exploring data-driven solutions and machine learning models to solve complex problems
                    and extract meaningful insights from data.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">High-Performance Computing</h4>
                  <p className="text-gray-300">
                    Optimizing computational performance and working with large-scale systems
                    to solve resource-intensive problems efficiently.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Open Source</h4>
                  <p className="text-gray-300">
                    Contributing to open-source projects and building tools that benefit the developer
                    community. I believe in the power of collaborative development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
