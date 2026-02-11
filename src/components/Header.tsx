import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { label: 'Soluções', href: '#solutions' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Casos de Uso', href: '#cases' },
  { label: 'Recursos', href: '#resources' },
  { label: 'Documentação', href: '#docs' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-2xl shadow-glass border-b border-white/20'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-brand-accent via-brand-indigo to-brand-purple shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-accent via-brand-indigo to-brand-purple opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Capitare
              </span>
              <span className="text-xs text-gray-500 font-medium">Infraestrutura de Mercado</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={itemVariants}
                className="gradient-underline px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="px-4 py-2 text-sm font-medium text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-colors duration-300">
              Entrar
            </button>
            <Button size="sm" icon>
              Agendar Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-brand-primary hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-glass">
            <div className="section-container py-6 flex flex-col gap-4">
              <motion.div
                className="flex flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={itemVariants}
                    className="px-4 py-2 text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-colors duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              <div className="divider-line my-2" />

              <motion.div
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <button className="px-4 py-2 text-sm font-medium text-brand-primary border-2 border-brand-accent rounded-lg hover:bg-brand-accent/10 transition-colors duration-300">
                  Entrar
                </button>
                <Button size="md" icon>
                  Agendar Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
