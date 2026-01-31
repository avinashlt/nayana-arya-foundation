
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  // Fix: Made onClick optional to support submit buttons within forms that don't need a click handler.
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  // Fix: Added 'type' property to allow specifying button type (e.g., 'submit').
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', size = 'md', className = '', type = 'button' }) => {
  const baseStyles = 'font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-0.5';
  
  const variantStyles = {
    primary: 'bg-primary-red-600 text-white hover:bg-primary-red-700 focus:ring-primary-red-500',
    secondary: 'bg-neutral-700 text-white hover:bg-neutral-800 focus:ring-neutral-600',
    outline: 'bg-transparent border-2 border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-white focus:ring-neutral-600',
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    // Fix: Pass the 'type' property to the underlying HTML button element.
    <button onClick={onClick} className={combinedClassName} type={type}>
      {children}
    </button>
  );
};

export default Button;
