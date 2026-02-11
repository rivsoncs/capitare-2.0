import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparison = [
  {
    feature: 'Tempo de Captação',
    capitare: '45 dias',
    traditional: '60+ dias'
  },
  {
    feature: 'Conformidade CVM',
    capitare: 'Automática e contínua',
    traditional: 'Manual e demorada'
  },
  {
    feature: 'Acesso a Investidores',
    capitare: '50K+ pré-qualificados',
    traditional: 'Redes limitadas'
  },
  {
    feature: 'Custo de Integração',
    capitare: 'API simples, integrável em dias',
    traditional: 'Alto, em meses'
  },
  {
    feature: 'Transparência em Tempo Real',
    capitare: 'Dashboard 24/7',
    traditional: 'Relatórios manuais'
  },
  {
    feature: 'Segurança',
    capitare: 'Smart contracts auditados',
    traditional: 'Processos tradicionais'
  },
];

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

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const Diferencial: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden section-padding">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-1/2 -left-32 w-80 h-80 gradient-blob-indigo"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
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
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src="/logo_light.png"
              alt="Capitare Logo"
              className="h-20 w-auto"
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-primary">Por que</span>{' '}
            <span className="gradient-text">escolher Capitare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comparação com os métodos tradicionais de captação de recursos
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={rowVariants} />
          <motion.div variants={rowVariants} className="text-center">
            <div className="glass-card p-6 rounded-lg border-2 border-brand-accent shadow-glow">
              <h3 className="text-2xl font-bold gradient-text mb-2">Capitare</h3>
              <p className="text-sm text-gray-600">Inovação financeira</p>
            </div>
          </motion.div>
          <motion.div variants={rowVariants} className="text-center">
            <div className="glass-card p-6 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Métodos Tradicionais</h3>
              <p className="text-sm text-gray-500">Processos obsoletos</p>
            </div>
          </motion.div>

          {/* Rows */}
          {comparison.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={rowVariants}
                className="flex items-center py-4 border-b border-gray-200"
              >
                <p className="font-semibold text-gray-900">{item.feature}</p>
              </motion.div>

              <motion.div
                variants={rowVariants}
                className="flex items-center justify-center py-4 border-b border-brand-accent/30"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex-shrink-0 p-1 bg-brand-success/10 rounded-full"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="w-5 h-5 text-brand-success" />
                  </motion.div>
                  <p className="text-sm text-gray-700 font-medium">{item.capitare}</p>
                </div>
              </motion.div>

              <motion.div
                variants={rowVariants}
                className="flex items-center justify-center py-4 border-b border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex-shrink-0 p-1 bg-gray-200 rounded-full"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </motion.div>
                  <p className="text-sm text-gray-500">{item.traditional}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-card rounded-lg">
            <div>
              <p className="text-sm text-gray-600 font-medium">Começe sua transformação</p>
              <p className="text-lg font-bold text-brand-primary">50% mais rápido que a concorrência</p>
            </div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="p-3 bg-brand-accent rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
