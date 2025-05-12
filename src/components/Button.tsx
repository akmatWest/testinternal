import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  fullWidth = false,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-accent-500 hover:bg-accent-600 text-gray-900 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;