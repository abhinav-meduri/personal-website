'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Calendar, Users, FileText } from 'lucide-react';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const publications = [
    {
      title: 'Automated Energy Efficiency Assessment for Residential HVAC Systems',
      authors: 'A. Meduri, S. Wilson, L. Brown',
      journal: 'Energy and Buildings',
      year: '2025',
      description: 'Development of automated assessment tools for HVAC energy efficiency in residential properties using machine learning and DOE SEED API integration.',
      link: 'https://doi.org/example',
      type: 'Conference Paper',
      status: 'Published'
    },
    {
      title: 'Machine Learning Applications in Energy Systems: A Comprehensive Review',
      authors: 'A. Meduri, R. Davis, K. Lee',
      journal: 'Journal of Energy Informatics',
      year: '2024',
      description: 'Comprehensive review of machine learning applications in energy systems, focusing on recent advances in predictive modeling and optimization.',
      link: 'https://doi.org/example2',
      type: 'Review Paper',
      status: 'Published'
    }
  ];

  const presentations = [
    {
      title: 'Machine Learning in Energy Systems',
      event: 'IEEE Energy Conference',
      date: 'February 2025',
      location: 'Virtual',
      type: 'Poster Presentation'
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Publications
          </h3>
          
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      <Users className="inline w-4 h-4 mr-1" />
                      {pub.authors}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <FileText className="inline w-4 h-4 mr-1" />
                      {pub.journal}
                    </p>
                    <p className="text-gray-600 mb-3">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      {pub.year}
                    </p>
                  </div>
                  
                  <div className="flex flex-col lg:items-end space-y-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pub.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {pub.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {pub.description}
                </p>
                
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Publication
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Presentations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {presentations.map((presentation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {presentation.title}
                </h4>
                
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Event:</strong> {presentation.event}
                  </p>
                  <p>
                    <strong>Date:</strong> {presentation.date}
                  </p>
                  <p>
                    <strong>Location:</strong> {presentation.location}
                  </p>
                  <p>
                    <strong>Type:</strong> {presentation.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Research Interests
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Machine Learning',
                description: 'Generative models, active learning, and Bayesian optimization for system design'
              },
              {
                title: 'Energy Systems',
                description: 'HVAC efficiency, energy modeling, and sustainable technology applications'
              },
              {
                title: 'Software Engineering',
                description: 'Full-stack development, API design, and scalable system architecture'
              }
            ].map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg p-6 text-center"
              >
                <h4 className="text-lg font-bold text-white mb-3">
                  {interest.title}
                </h4>
                <p className="text-gray-300">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;

