import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, TrendingUp, Shield, Clock, BarChart3, Code2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Smart Contracts Auditados',
    description: 'Contratos inteligentes validados por auditores de segurança independentes',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Compliance CVM 100%',
    description: 'Certificação completa com regulações da Comissão de Valores Mobiliários',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Múltiplos Setores',
    description: 'Real Estate, Energia, Infraestrutura e muito mais em uma única plataforma',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Integração Rápida',
    description: 'APIs modernas e bem documentadas para integração simples e rápida',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: BarChart3,
    title: 'Dashboard em Tempo Real',
    description: 'Visualize todos os dados de tokenização com análises avançadas',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Plataforma completamente responsiva para acessar de qualquer dispositivo',
    color: 'from-indigo-500 to-blue-500'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const Features: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden section-padding" id="solutions">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 gradient-blob-accent"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 gradient-blob-indigo"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-primary">Soluções</span>{' '}
            <span className="gradient-text">Completas e Integradas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Infraestrutura de mercado de capitais com todas as ferramentas necessárias para tokenizar ativos e alcançar investidores
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="feature-card group"
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg mb-4 flex items-center justify-center group-hover:shadow-glow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-accent to-brand-indigo rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
