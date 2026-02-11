# Capitare 2.0

Site institucional da Capitare - Infraestrutura de Mercado de Capitais.

## 🚀 Tecnologias

- **Astro** 5.x - Framework web moderno
- **React** 19.x - Componentes interativos
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas

## 📦 Estrutura

```
/
├── src/
│   ├── components/     # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Products.tsx
│   │   ├── Cases.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   ├── layouts/        # Layouts Astro
│   ├── pages/          # Páginas
│   └── styles/         # Estilos globais
├── dist/              # Build de produção
└── public/            # Assets estáticos
```

## 🛠️ Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub na Vercel
2. Framework Preset: Astro
3. Deploy automático a cada push

### VPS (Nginx)
```bash
npm run build
# Copiar dist/ para /var/www/html/
```

## 📄 Licença

© 2024 Capitare. Todos os direitos reservados.
