# 💎 Website Cinematográfico - Dia dos Namorados

Um website premium e emocionalmente impactante criado com Next.js 14+, React, TypeScript, Tailwind CSS, Framer Motion e Three.js.

## ✨ Características

- 🎬 **Experiência cinematográfica** com animações fluidas e transições elegantes
- 💕 **Contador em tempo real** mostrando anos, meses, dias, horas, minutos e segundos de relacionamento
- 🎨 **Design minimalista luxuoso** com paleta de cores premium
- 🌟 **Partículas interativas** que reagem ao movimento do mouse
- 💖 **Coração 3D animado** usando Three.js e React Three Fiber
- 🎁 **Seção de surpresa** com modal e animações de corações
- 📱 **100% responsivo** - funciona perfeitamente em todos os dispositivos
- ⚡ **Performance otimizada** com Next.js 14+ App Router
- 🎯 **Smooth scroll** usando Lenis
- 💫 **Microinterações premium** em todos os elementos

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone ou baixe o projeto:**
```bash
cd valentines-margarida
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## 🎨 Personalização

### 1. Editar Configurações Principais

Abra o arquivo `lib/config.ts` e personalize:

```typescript
export const CONFIG = {
  // Nome da pessoa amada
  name: "Margarida Gauper",
  
  // Data de início (formato: YYYY-MM-DD)
  relationshipStartDate: "2023-08-01",
  
  // Link da surpresa (GitHub ou qualquer URL)
  surpriseLink: "https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO",
  
  // Mensagens personalizadas
  messages: {
    loader1: "Para Margarida Gauper…",
    loader2: "Uma história que começou em Agosto de 2023.",
    heroTitle: "Feliz Dia dos Namorados, Margarida Gauper ❤️",
    // ... outras mensagens
  }
};
```

### 2. Alterar a Data do Contador

No arquivo `lib/config.ts`, modifique:
```typescript
relationshipStartDate: "2023-08-01", // YYYY-MM-DD
```

### 3. Alterar o Nome

No arquivo `lib/config.ts`, modifique:
```typescript
name: "SEU_NOME_AQUI",
```

### 4. Alterar o Link da Surpresa

No arquivo `lib/config.ts`, modifique:
```typescript
surpriseLink: "https://github.com/SEU-USUARIO/SEU-REPOSITORIO",
```

### 5. Personalizar Mensagens

Todas as mensagens estão no objeto `messages` dentro de `lib/config.ts`. Edite-as como desejar!

### 6. Alterar Cores (Opcional)

As cores principais estão definidas em:
- `tailwind.config.ts` - Configuração do Tailwind
- `app/globals.css` - Variáveis CSS
- `lib/config.ts` - Cores no objeto config

Cores atuais:
- `dark-deep`: #0b0b0f (Preto profundo)
- `pink-vibrant`: #ff2e63 (Rosa vibrante)
- `gold-elegant`: #f5c16c (Dourado elegante)
- `white-soft`: #f2f2f2 (Branco suave)

## 📁 Estrutura do Projeto

```
valentines-margarida/
├── app/
│   ├── globals.css          # Estilos globais e animações
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Counter.tsx          # Contador de tempo
│   ├── Declaration.tsx      # Seção de declaração
│   ├── Final.tsx            # Seção final cinematográfica
│   ├── Heart3D.tsx          # Coração 3D animado
│   ├── HeroSection.tsx      # Seção hero
│   ├── Loader.tsx           # Tela de carregamento
│   ├── Particles.tsx        # Partículas interativas
│   ├── SmoothScroll.tsx     # Scroll suave
│   └── Surprise.tsx         # Seção de surpresa
├── lib/
│   ├── config.ts            # ⭐ ARQUIVO PRINCIPAL DE CONFIGURAÇÃO
│   └── utils.ts             # Funções utilitárias
├── public/                  # Arquivos estáticos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Seções do Website

1. **Loader Emocional** - Introdução animada com texto digitando
2. **Hero Section** - Título impactante com botão CTA
3. **Contador de Amor** - Tempo real desde o início do relacionamento
4. **Declaração Profunda** - Mensagens românticas com parallax
5. **Coração 3D** - Modelo 3D interativo pulsando
6. **Surpresa** - Modal com link personalizável
7. **Final Cinematográfico** - Encerramento emocionante

## 🛠️ Tecnologias Utilizadas

- **Next.js 14+** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações fluidas
- **Three.js** - Gráficos 3D
- **React Three Fiber** - Three.js para React
- **GSAP** - Animações avançadas
- **Lenis** - Smooth scroll

## 📦 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! Seu site estará online

### Netlify

1. Crie uma conta em [Netlify](https://netlify.com)
2. Arraste a pasta do projeto ou conecte ao GitHub
3. Configure o build command: `npm run build`
4. Output directory: `.next`
5. Deploy!

### Build para produção local

```bash
npm run build
npm start
```

## 🎨 Customizações Avançadas

### Adicionar Música de Fundo

1. Coloque o arquivo de áudio em `public/music.mp3`
2. Adicione um componente de player de áudio
3. Configure autoplay (com interação do usuário)

### Modificar Animações

Edite os componentes em `components/` e ajuste:
- Duração: `duration` prop
- Delay: `delay` prop
- Tipo de easing: `ease`, `easeIn`, `easeOut`, etc.

### Adicionar Novas Seções

1. Crie um novo componente em `components/`
2. Importe em `app/page.tsx`
3. Adicione na ordem desejada

## 🐛 Solução de Problemas

### O contador não está atualizando
- Verifique se a data em `lib/config.ts` está no formato correto (YYYY-MM-DD)
- Verifique o console do navegador para erros

### Partículas não aparecem
- Certifique-se de que JavaScript está habilitado
- Verifique a GPU do dispositivo

### Animações lentas
- Reduza o número de partículas em `components/Particles.tsx`
- Desabilite algumas animações em dispositivos móveis

### Build error
- Delete a pasta `.next`
- Execute `npm install` novamente
- Execute `npm run build`

## 💝 Créditos

Criado com ❤️ usando as melhores tecnologias web modernas.

## 📄 Licença

Este é um projeto pessoal. Use-o como quiser para criar suas próprias declarações de amor!

---

**Dica:** Personalize cada detalhe para tornar ainda mais especial! 💕✨

## 🎁 Como Presentear

1. Personalize todas as configurações
2. Faça o deploy na Vercel/Netlify
3. Compartilhe o link com sua pessoa especial
4. Veja a mágica acontecer! ✨

---

**Feito com amor infinito** 💖
