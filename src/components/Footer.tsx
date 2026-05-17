'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Abhinav Meduri</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/abhinav-meduri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhinav-meduri/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:abhinav.meduri@duke.edu"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://researchgate.net/profile/abhinav-meduri"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>avm29@duke.edu</p>
              <p>Durham, NC</p>
              <p>Available for opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Abhinav Meduri. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
