import React from 'react';
import { Server } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-neutral-800';
  
  return (
    <div className="flex items-center">
      <Server size={30} className="text-primary-500 mr-2" />
      <span className={`font-bold text-xl ${textColor}`}>
        IT<span className="text-secondary-500">Solutions</span>
      </span>
    </div>
  );
};

export default Logo;