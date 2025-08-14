import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default'; // Add other variants as needed
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'default', className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium";
  const variantStyles = {
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent",
    // default: "bg-blue-500 text-white hover:bg-blue-600",
  };

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
