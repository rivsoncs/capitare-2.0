import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'gradient';
  animated?: boolean;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
};

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 'md',
  variant = 'gradient',
  animated = true,
}) => {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const shapeVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: 'linear' },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Determina as cores baseado na variante
  const getDiamondColor = () => {
    switch (variant) {
      case 'light':
        return '#FFFFFF';
      case 'dark':
        return '#0F172A';
      case 'gradient':
      default:
        return 'url(#gradientDiamond)';
    }
  };

  const getRectColor = () => {
    switch (variant) {
      case 'light':
        return '#E0E7FF';
      case 'dark':
        return '#1E293B';
      case 'gradient':
      default:
        return '#6366F1';
    }
  };

  const getTriangleColor = () => {
    switch (variant) {
      case 'light':
        return '#F8FAFC';
      case 'dark':
        return '#0A0F1F';
      case 'gradient':
      default:
        return '#0F172A';
    }
  };

  return (
    <motion.div
      className={`${sizeMap[size]} relative`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="gradientDiamond" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Animated background circle - only for gradient variant */}
        {variant === 'gradient' && animated && (
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="0.5"
            opacity="0.2"
            variants={rotateVariants}
            animate="animate"
          />
        )}

        {/* Diamond shape */}
        <motion.path
          d="M 32 12 L 44 24 L 32 36 L 20 24 Z"
          fill={getDiamondColor()}
          variants={shapeVariants}
          animate={animated ? 'animate' : 'initial'}
          transition={{ delay: 0.1 }}
          whileHover={animated ? { scale: 1.1, rotate: 5 } : {}}
        />

        {/* Rectangle shape */}
        <motion.rect
          x="46"
          y="20"
          width="10"
          height="24"
          fill={getRectColor()}
          rx="1"
          variants={shapeVariants}
          animate={animated ? 'animate' : 'initial'}
          transition={{ delay: 0.2 }}
          whileHover={animated ? { scale: 1.1, y: -2 } : {}}
        />

        {/* Triangle shape */}
        <motion.path
          d="M 18 44 L 26 24 L 34 44 Z"
          fill={getTriangleColor()}
          variants={shapeVariants}
          animate={animated ? 'animate' : 'initial'}
          transition={{ delay: 0.3 }}
          whileHover={animated ? { scale: 1.1, rotate: -5 } : {}}
        />
      </svg>

      {/* Floating glow effect - only for gradient */}
      {variant === 'gradient' && animated && (
        <motion.div
          className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-brand-accent to-brand-indigo opacity-30 -z-10"
          variants={floatVariants}
          animate="animate"
        />
      )}
    </motion.div>
  );
};
