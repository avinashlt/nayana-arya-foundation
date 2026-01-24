
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
    primary: 'bg-warm-amber-500 text-white hover:bg-warm-amber-600 focus:ring-warm-amber-500',
    secondary: 'bg-ocean-blue-600 text-white hover:bg-ocean-blue-700 focus:ring-ocean-blue-600',
    outline: 'bg-transparent border-2 border-ocean-blue-600 text-ocean-blue-600 hover:bg-ocean-blue-600 hover:text-white focus:ring-ocean-blue-600',
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
