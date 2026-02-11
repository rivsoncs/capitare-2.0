import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  solucoes: [
    { label: 'Tokenização', href: '#' },
    { label: 'Securitização', href: '#' },
    { label: 'Distribuição', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
  mercados: [
    { label: 'Real Estate', href: '#' },
    { label: 'Energia', href: '#' },
    { label: 'Infraestrutura', href: '#' },
    { label: 'Indústria', href: '#' },
  ],
  recursos: [
    { label: 'Documentação', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Contato', href: '#' },
    { label: 'Imprensa', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export const Footer: React.FC = () => {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-primary to-brand-dark" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 gradient-blob-accent opacity-20"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="section-container section-padding relative z-10">
        <motion.div
          className="grid lg:grid-cols-6 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6 group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/IconOnly_NoBuffer.png"
                alt="Capitare"
                className="h-8 w-8"
              />
            </motion.a>

            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Infraestrutura moderna para tokenização de ativos com compliance regulatório completo e segurança de nível enterprise.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent hover:text-brand-dark transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Sections */}
          {[
            { title: 'Soluções', links: footerLinks.solucoes },
            { title: 'Mercados', links: footerLinks.mercados },
            { title: 'Recursos', links: footerLinks.recursos },
            { title: 'Empresa', links: footerLinks.empresa },
          ].map((section, idx) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-white/60 hover:text-white group flex items-center gap-2 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Contact & Copyright */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6">
            <a
              href="mailto:contato@capitare.com"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">contato@capitare.com</span>
            </a>
            <a
              href="tel:+551140004500"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+55 11 4000-4500</span>
            </a>
            <span className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">São Paulo, SP</span>
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/60 text-sm text-right">
            © 2024 Capitare. Todos os direitos reservados.
          </motion.p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-xs leading-relaxed">
            <strong>Disclaimer Regulatório:</strong> A Capitare Tecnologia em Mercado de Capitais Ltda. atua como facilitadora de operações de tokenização e securitização de ativos, estando em processo de registro perante a CVM. As operações de oferta pública são estruturadas em conformidade com as Instruções CVM 88, 400 e demais normas aplicáveis. Investimentos em valores mobiliários possuem riscos e podem resultar em perdas patrimoniais. Consulte um profissional habilitado antes de investir.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
