'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
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
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center">
                  <CompanyLogo company={exp.company} size={exp.company.toLowerCase().includes('duke') ? 56 : 44} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                  <p className="text-gray-300 text-sm">{exp.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">{exp.duration}</div>
                  <div className="text-gray-500 text-xs">{exp.location}</div>
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
