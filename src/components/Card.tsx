import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, icon, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
      hover:translate-y-[-5px] group ${className}`}
    >
      {icon && (
        <div className="mb-4 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;