import React from 'react';
import { motion } from 'framer-motion';
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
    primary: 'relative bg-gradient-to-r from-brand-accent to-brand-indigo text-white font-semibold shadow-glow hover:shadow-glow-lg active:scale-95 overflow-hidden group',
    secondary: 'bg-brand-accent/10 text-brand-accent border-2 border-brand-accent hover:bg-brand-accent/20',
    outline: 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-brand-purple opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      )}

      <span className="relative flex items-center justify-center gap-2">
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Carregando...
          </>
        ) : (
          <>
            {children}
            {icon && (
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            )}
          </>
        )}
      </span>
    </motion.button>
  );
};
