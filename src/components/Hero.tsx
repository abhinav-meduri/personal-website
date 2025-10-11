'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12">
          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left flex-1 max-w-2xl"
          >
            <p className="text-lg text-gray-300">
              I&apos;m a student at <span className="text-blue-400">Duke University</span> studying <span className="text-blue-400">Computer Science & Statistical Science</span>, passionate about software, automation, and high-performance computing.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-gray-400 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-start gap-4 mt-8"
            >
              <motion.a
                href="https://github.com/abhinavmeduri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/abhinavmeduri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://researchgate.net/profile/abhinav-meduri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 0-.339.006-.508.016-.169-.01-.339-.016-.508-.016-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.169 0 .339-.006.508-.016.169.01.339.016.508.016 2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Left side - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/logos/headshot.jpeg" 
                alt="Abhinav Meduri"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
