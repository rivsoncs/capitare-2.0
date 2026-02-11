import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon = false,
  children,
  className,
  ...props
}) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-primary shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-brand-accent text-brand-primary hover:bg-brand-success',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Carregando...
        </>
      ) : (
        <>
          {children}
          {icon && <ArrowRight className="w-5 h-5" />}
        </>
      )}
    </button>
  );
};
