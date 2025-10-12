'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: 'Reveal Genomics',
      position: 'Machine Learning Engineer',
      duration: 'Oct 2025 – Present',
      location: 'Barcelona, Spain (Remote)'
    },
    {
      company: 'Systrends, Inc.',
      position: 'Software Engineer Intern',
      duration: 'Jun 2025 – Present',
      location: 'Phoenix, AZ (Remote)'
    },
    {
      company: 'EcoLong',
      position: 'Software Engineer Intern',
      duration: 'May 2025 – Aug 2025',
      location: 'Albany, NY (Remote)'
    },
    {
      company: 'Duke University Materials Initiative',
      position: 'Machine Learning Engineer',
      duration: 'Mar 2025 – Present',
      location: 'Durham, NC'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-3">Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-800/50 hover:bg-gray-750/70 transition-colors duration-200 rounded-lg p-4 border-l-2 border-gray-600 hover:border-gray-400 max-w-3xl mx-auto w-full"
            >
              <div className="flex items-start">
                <div className={`${exp.company.includes('Reveal') ? 'w-14 h-14' : 'w-10 h-10'} bg-transparent rounded flex-shrink-0 flex items-center justify-center mr-3`}>
                  <CompanyLogo company={exp.company} size={exp.company.includes('Reveal') ? 44 : 32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-medium text-white truncate">{exp.position}</h3>
                    <div className="text-sm text-gray-400 whitespace-nowrap sm:ml-2">{exp.duration}</div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
