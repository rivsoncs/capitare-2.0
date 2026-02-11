import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, Building2 } from 'lucide-react';

const cases = [
  {
    company: 'TechParts',
    sector: 'Indústria',
    amount: 'R$ 3.2M',
    metric: '847 investidores',
    description: 'Tokenização de recebíveis para expansão de linha de produção de componentes eletrônicos.',
    testimonial: 'A Capitare reduziu nosso tempo de captação de 6 meses para 45 dias.',
    author: 'Carlos Mendes',
    role: 'CFO',
    icon: Building2,
    color: 'bg-blue-500',
  },
  {
    company: 'AgroVerde',
    sector: 'Agronegócio',
    amount: 'R$ 1.8M',
    metric: 'CDI + 4%',
    description: 'CRA para financiamento de safra de soja com garantia de câmbio.',
    testimonial: 'Estruturação impecável e distribuição rápida para nossa rede de investidores.',
    author: 'Ana Paula Silva',
    role: 'Diretora Financeira',
    icon: TrendingUp,
    color: 'bg-green-500',
  },
  {
    company: 'LogiExpress',
    sector: 'Logística',
    amount: 'R$ 5.5M',
    metric: 'Valuation R$ 28M',
    description: 'Tokenização de equity para expansão de frota e novos centros de distribuição.',
    testimonial: 'A plataforma nos deu acesso a investidores que nunca teríamos alcançado.',
    author: 'Roberto Tanaka',
    role: 'CEO',
    icon: Users,
    color: 'bg-purple-500',
  },
];

export const Cases: React.FC = () => {
  return (
    <section id="cases" className="section-padding bg-gradient-to-br from-brand-primary via-brand-primary to-blue-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-4">
            Cases de Sucesso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Empresas que já captaram
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Conheça as empresas que transformaram sua captação com a Capitare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${case_.color} rounded-xl flex items-center justify-center`}>
                  <case_.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{case_.company}</h3>
                  <p className="text-blue-300 text-sm">{case_.sector}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold text-white font-mono">{case_.amount}</p>
                  <p className="text-sm text-blue-300">Captados</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-lg font-bold text-white">{case_.metric}</p>
                  <p className="text-sm text-blue-300">Métrica</p>
                </div>
              </div>

              <p className="text-blue-100 mb-6">{case_.description}</p>

              <div className="border-t border-white/20 pt-6">
                <Quote className="w-8 h-8 text-brand-accent mb-3" />
                <p className="text-white italic mb-4">"{case_.testimonial}"</p>
                <div>
                  <p className="text-white font-semibold">{case_.author}</p>
                  <p className="text-blue-300 text-sm">{case_.role}, {case_.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20">
            <div className="text-center">
              <p className="text-3xl font-bold text-white font-mono">R$ 10.5B+</p>
              <p className="text-blue-300">Total Captado</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white font-mono">200+</p>
              <p className="text-blue-300">Ofertas Realizadas</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white font-mono">98%</p>
              <p className="text-blue-300">Taxa de Sucesso</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
