import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';
import { Button } from './Button';

const performanceData = [
  {
    region: 'Indústria',
    percentage: 94,
    insight: 'Taxa de aprovação 6% acima da média. Estruturas de CRI/CRA performam melhor.'
  },
  {
    region: 'Energia',
    percentage: 91,
    insight: 'Projetos de energia solar com garantia real aprovam 15% mais rápido.'
  },
  {
    region: 'Real Estate',
    percentage: 88,
    insight: 'Tokenização de recebíveis reduz tempo de captação em 23 dias.'
  }
];

const stats = [
  { value: 'R$ 2.5B+', label: 'Captados em 2024', icon: TrendingUp },
  { value: '15K+', label: 'Investidores Ativos', icon: Shield },
  { value: '45', label: 'Dias Médio de Captação', icon: Clock },
];

export const Hero: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-success/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-brand-primary">
                Nova: Integração com CVM 175
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-primary leading-tight mb-6">
              Infraestrutura de{' '}
              <span className="gradient-text">Mercado de Capitais</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Tokenização inteligente de ativos com compliance CVM, smart contracts e distribuição para milhares de investidores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" icon>
                Simular Captação
              </Button>
              <Button variant="outline" size="lg" icon>
                Agendar Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <stat.icon className="w-4 h-4 text-brand-accent" />
                    <span className="text-2xl sm:text-3xl font-bold text-brand-primary font-mono">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-brand-primary">Performance por Setor</h3>
                <span className="text-sm text-gray-500">Atualizado em tempo real</span>
              </div>

              <div className="space-y-6">
                {performanceData.map((item, index) => (
                  <motion.div
                    key={item.region}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{item.region}</span>
                      <span className="text-2xl font-bold text-brand-primary font-mono">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-brand-accent to-brand-success rounded-full"
                      />
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-brand-primary transition-colors">
                      {item.insight}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Volume tokenizado (30 dias)</p>
                    <p className="text-2xl font-bold text-brand-primary font-mono">R$ 847.3M</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Variação</p>
                    <p className="text-lg font-semibold text-brand-success flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      +23.5%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-success/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Compliance CVM</p>
                  <p className="text-xs text-gray-500">100% validado</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Tempo médio</p>
                  <p className="text-xs text-gray-500">45 dias de captação</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
