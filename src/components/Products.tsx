import React from 'react';
import { motion } from 'framer-motion';
import { Coins, FileText, Users, Zap, ArrowRight, Check } from 'lucide-react';

const products = [
  {
    icon: Coins,
    title: 'Tokenização Inteligente',
    subtitle: 'CVM 88',
    description: 'Tokenize ativos reais com total compliance regulatório e segurança blockchain.',
    features: ['Smart Contracts auditados', 'KYC/AML integrado', 'Multi-custódia', 'Governança on-chain'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: FileText,
    title: 'Securitização End-to-End',
    subtitle: 'CRI, CRA, Debêntures',
    description: 'Estruture e distribua títulos de renda fixa corporativa de forma digital.',
    features: ['Emissão digital', 'Escrow automatizado', 'Pagamentos programáveis', 'Rating integrado'],
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    icon: Users,
    title: 'Hub de Distribuição',
    subtitle: '15K+ Investidores',
    description: 'Acesso à maior rede de investidores qualificados do Brasil.',
    features: ['Matching inteligente', 'Onboarding digital', 'Comunicação automatizada', 'Relatórios em tempo real'],
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    icon: Zap,
    title: 'Flow Automation',
    subtitle: '100% Automatizado',
    description: 'Automatize toda a operação de mercado de capitais com workflows inteligentes.',
    features: ['Workflows customizáveis', 'Integração bancária', 'Reconciliação automática', 'Alertas em tempo real'],
    gradient: 'from-orange-500 to-amber-400',
  },
];

export const Products: React.FC = () => {
  return (
    <section id="produtos" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-primary/5 rounded-full text-sm font-medium text-brand-primary mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Produtos que escalam sua captação
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para cada etapa do processo de tokenização e securitização de ativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-brand-accent">{product.subtitle}</span>
                  <h3 className="text-2xl font-bold text-brand-primary mt-1">{product.title}</h3>
                </div>

                <p className="text-gray-600 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-success/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-brand-success" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors group/link"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
