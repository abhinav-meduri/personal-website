'use client';

import { motion } from 'framer-motion';

interface CompanyLogoProps {
  company: string;
  size?: number;
  className?: string;
}

const CompanyLogo = ({ company, size = 48, className = '' }: CompanyLogoProps) => {
  const getLogoPath = () => {
    const companyLower = company.toLowerCase();
    
    if (companyLower.includes('reveal')) {
      return `/logos/reveal.png?t=${new Date().getTime()}`;
    } else if (companyLower.includes('systrends')) {
      return '/logos/systrendsnew.png';
    } else if (companyLower.includes('ecolong')) {
      return '/logos/ecolong.png';
    } else if (companyLower.includes('duke')) {
      return '/logos/duke.png';
    } else if (companyLower.includes('ibm')) {
      return '/logos/IBM.png';
    }
    
    return null;
  };

  const logoPath = getLogoPath();

  if (!logoPath) {
    return (
      <div 
        className={`bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-bold ${className}`}
        style={{ width: size, height: size }}
      >
        {company.charAt(0)}
      </div>
    );
  }

  const isReveal = company.toLowerCase().includes('reveal');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={`logo-transparent ${className}`}
    >
      <img
        src={logoPath}
        alt={`${company} logo`}
        width={size}
        height={size}
        className={`object-contain logo-transparent ${isReveal ? 'brightness-0 invert' : ''}`}
        style={{ 
          maxWidth: size, 
          maxHeight: size,
          filter: 'contrast(1.2) brightness(1.1)',
          backgroundColor: 'transparent'
        }}
      />
    </motion.div>
  );
};

export default CompanyLogo;
