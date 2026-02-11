import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O que é tokenização de ativos?',
    answer: 'Tokenização é o processo de converter um ativo tangível ou intangível em um token digital na blockchain. Isso permite fractionalização, negociação facilitada e maior liquidez para ativos tradicionais como imóveis e projetos de infraestrutura.'
  },
  {
    question: 'Como funciona o compliance CVM?',
    answer: 'Nossa plataforma segue todas as regulações da CVM brasileira. Todos os contratos inteligentes são auditados, os investimentos são registrados e rastreáveis, e mantemos conformidade total com as normas de oferta de valores mobiliários.'
  },
  {
    question: 'Qual é o tempo médio de captação?',
    answer: 'Com nossa plataforma, o tempo médio de captação é de aproximadamente 45 dias, 23 dias mais rápido que o método tradicional. Isso graças à automação de processos e acesso a uma rede de 50 mil investidores pré-qualificados.'
  },
  {
    question: 'Quais setores podem usar a plataforma?',
    answer: 'A plataforma suporta múltiplos setores: Real Estate, Energia Renovável, Infraestrutura, Indústria, Agronegócio e outros. Cada setor tem templates e integrações específicas.'
  },
  {
    question: 'Como é feito o suporte e integração?',
    answer: 'Oferecemos suporte técnico 24/7, documentação completa em português, SDKs para as principais linguagens de programação, e um time dedicado para ajudar na integração.'
  },
  {
    question: 'Qual é a segurança da plataforma?',
    answer: 'Utilizamos smart contracts auditados por empresas de segurança independentes, criptografia de nível enterprise, multi-signature wallets e segregação total de fundos. Realizamos auditorias de segurança contínuas.'
  },
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden section-padding" id="faq">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-1/4 -right-40 w-80 h-80 gradient-blob-success"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
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
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img
              src="/logo_light.png"
              alt="Capitare Logo"
              className="h-20 w-auto"
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-primary">Dúvidas</span>{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Respostas rápidas para as perguntas mais comuns sobre nossa plataforma
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/40 transition-colors duration-300"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              >
                <span className="text-lg font-semibold text-brand-primary text-left">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-brand-accent" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-t border-white/20 bg-white/20">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas?{' '}
            <a href="#" className="text-brand-accent font-semibold hover:underline">
              Entre em contato com nosso time
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
