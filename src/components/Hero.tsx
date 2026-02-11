import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Clock, Zap, BarChart3 } from 'lucide-react';
import { Button } from './Button';

const performanceData = [
  {
    sector: 'Real Estate',
    percentage: 94,
    insight: 'Tokenização de recebíveis e ativos imobiliários'
  },
  {
    sector: 'Energia',
    percentage: 91,
    insight: 'Projetos de energia renovável com garantias reais'
  },
  {
    sector: 'Infraestrutura',
    percentage: 88,
    insight: 'Concessões e projetos de infraestrutura'
  }
];

const stats = [
  { value: 'R$ 2.5B+', label: 'Em tokenização', icon: TrendingUp },
  { value: '50K+', label: 'Investidores', icon: BarChart3 },
  { value: '45', label: 'Dias médios', icon: Clock },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-24 overflow-hidden">
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50" />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 gradient-blob-accent"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -left-40 w-96 h-96 gradient-blob-indigo"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-32 right-1/3 w-96 h-96 gradient-blob-success"
        animate={{ y: [0, 20, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 badge-primary"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="w-2 h-2 bg-brand-success rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">Nova: Integração CVM 175</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-brand-primary">Infraestrutura</span>
                <br />
                <span className="gradient-text">de Mercado de Capitais</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Tokenização inteligente de ativos com compliance CVM, smart contracts auditados e distribuição segura para milhares de investidores.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" icon>
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="px-8 py-3 rounded-lg font-semibold text-brand-primary border-2 border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 flex items-center justify-center gap-2 group">
                Agendar Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <stat.icon className="w-5 h-5 text-brand-accent" />
                    <span className="text-3xl font-bold text-brand-primary font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Card */}
            <div className="glass-card p-8">
              <motion.div
                className="flex items-center justify-between mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-1">Performance</h3>
                  <p className="text-sm text-gray-500">Setores em tokenização</p>
                </div>
                <motion.div
                  className="p-2 rounded-lg bg-brand-accent/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-brand-accent" />
                </motion.div>
              </motion.div>

              {/* Performance Bars */}
              <div className="space-y-8">
                {performanceData.map((item, index) => (
                  <motion.div
                    key={item.sector}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                    className="group"
                  >
                    <div className="flex items-end justify-between mb-3">
                      <span className="font-semibold text-gray-900">{item.sector}</span>
                      <motion.span
                        className="text-2xl font-bold gradient-text font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      >
                        {item.percentage}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-indigo to-brand-success rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.9 + index * 0.15,
                          ease: 'easeOut'
                        }}
                      />
                    </div>

                    {/* Insight */}
                    <p className="text-sm text-gray-500 mt-2 group-hover:text-brand-primary transition-colors duration-300">
                      {item.insight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Footer Stats */}
              <motion.div
                className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div>
                  <p className="text-sm text-gray-500 mb-1">Volume em 30 dias</p>
                  <p className="text-3xl font-bold text-brand-primary font-mono">R$ 847.3M</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Crescimento</p>
                  <p className="text-lg font-bold text-brand-success flex items-center gap-2 justify-end">
                    <TrendingUp className="w-5 h-5" />
                    +23.5%
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating Info Cards */}
            <motion.div
              className="absolute -top-6 -right-6 glass-card p-4 rounded-xl"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-success/10">
                  <Shield className="w-5 h-5 text-brand-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">100% Compliance</p>
                  <p className="text-xs text-gray-500">Certificado CVM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl"
              animate={{ y: [5, -15, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-accent/10">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">45 dias</p>
                  <p className="text-xs text-gray-500">Captação média</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
    </section>
  );
};
