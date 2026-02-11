import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden section-padding">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 via-transparent to-transparent" />
      </div>

      {/* Animated Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 gradient-blob-accent opacity-30"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 gradient-blob-success opacity-20"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-white">
              Junte-se aos líderes de mercado
            </span>
          </motion.div>

          {/* Logo - Centered and Large */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src="/IconOnly_NoBuffer.png"
              alt="Capitare Logo"
              className="h-16 w-16"
            />
          </motion.div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu modelo de{' '}
            <span className="bg-gradient-to-r from-brand-accent via-brand-indigo to-brand-success bg-clip-text text-transparent">
              captação
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Comece a tokenizar seus ativos hoje e reduza o tempo de captação em até 50%. Compliance CVM garantido, integração em minutos.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.button
              className="relative px-10 py-4 bg-white text-brand-primary font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-indigo opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                Começar Agora
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Agendar Demo</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 pt-12 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Certificado por</p>
              <p className="text-white font-semibold">CVM Brasil</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Smart Contracts Auditados</p>
              <p className="text-white font-semibold">Segurança de Nível Enterprise</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-white/60 text-sm mb-2">Suporte 24/7</p>
              <p className="text-white font-semibold">Em Português</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
