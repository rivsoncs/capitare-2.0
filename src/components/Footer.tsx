import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  solucoes: [
    { label: 'Tokenização', href: '#' },
    { label: 'Securitização', href: '#' },
    { label: 'Distribuição', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
  mercados: [
    { label: 'Indústria', href: '#' },
    { label: 'Agronegócio', href: '#' },
    { label: 'Real Estate', href: '#' },
    { label: 'Energia', href: '#' },
  ],
  recursos: [
    { label: 'Documentação', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Webinars', href: '#' },
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
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-success rounded-xl flex items-center justify-center">
                <span className="text-brand-primary font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl">Capitare</span>
            </a>
            <p className="text-blue-200 mb-6 max-w-sm">
              Infraestrutura de mercado de capitais para tokenização e securitização de ativos com total compliance regulatório.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Mercados</h4>
            <ul className="space-y-3">
              {footerLinks.mercados.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <a href="mailto:contato@capitare.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                contato@capitare.com
              </a>
              <a href="tel:+551140004500" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +55 11 4000-4500
              </a>
              <span className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                São Paulo, SP - Brasil
              </span>
            </div>
            <p className="text-blue-200 text-sm">
              © 2024 Capitare. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-blue-300 text-xs leading-relaxed">
            <strong>Disclaimer Regulatório:</strong> A Capitare Tecnologia em Mercado de Capitais Ltda.
            atua como facilitadora de operações de tokenização e securitização de ativos,
            estando em processo de registro perante a CVM. As operações de oferta pública
            são estruturadas em conformidade com as Instruções CVM 88, 400 e demais normas aplicáveis.
            Investimentos em valores mobiliários possuem riscos e podem resultar em perdas patrimoniais.
            Consulte um profissional habilitado antes de investir. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};
