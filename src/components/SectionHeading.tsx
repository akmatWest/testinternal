import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;