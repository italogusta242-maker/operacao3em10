
# Ajuste de responsividade e animações de scroll reveal

## Resumo

A landing page já está bem estruturada para mobile (usa classes responsivas como `sm:grid-cols-3`, `md:text-3xl`, etc.) e já possui um hook `useScrollAnimation` com animações CSS de fade-up via IntersectionObserver. O plano é refinar pontos específicos de responsividade e substituir o sistema atual de animações por Framer Motion para um efeito mais suave e profissional.

---

## O que será feito

### 1. Instalar Framer Motion
- Adicionar `framer-motion` como dependência do projeto.

### 2. Criar componente reutilizavel de scroll reveal
- Criar um componente `ScrollReveal` que encapsula a logica do Framer Motion (`motion.div` com `whileInView`).
- Configuracao: fade-in de baixo para cima (translateY de 40px para 0), opacidade de 0 para 1, duracao de ~0.6s, ease suave.
- Vai aceitar props opcionais de delay para escalonar elementos.

### 3. Atualizar todas as secoes principais
Substituir o uso de `useScrollAnimation` + classes CSS (`animate-fade-up` / `opacity-0`) pelo novo componente `ScrollReveal` nas seguintes secoes:

- **HeroSection** - manter animacoes inline (ja visivel no load)
- **PainSection** - envolver conteudo + cards individuais com delay escalonado
- **ErrorSection** - envolver conteudo
- **MechanismSection** - envolver conteudo + steps com delay
- **SolutionSection** - envolver conteudo + cards/bonus com delay
- **OfferSection** - envolver conteudo
- **ExpertSection** - envolver conteudo
- **GuaranteeSection** - envolver conteudo
- **FAQSection** - envolver conteudo
- **UrgencySection** - envolver conteudo
- **FinalCTASection** - envolver conteudo + cards com delay
- **PostScriptSection** - envolver conteudo

### 4. Ajustes de responsividade mobile
- Revisar padding lateral em todas as secoes (garantir minimo de `px-4` ou `px-5` em mobile)
- Garantir que fontes de titulos nao fiquem excessivamente grandes em telas pequenas (revisar `text-3xl` e maiores)
- Verificar que grids com `sm:grid-cols-3` e `md:grid-cols-2` empilham corretamente em mobile (ja o fazem, mas confirmar)
- Ajustar a secao do Expert para nao cortar a imagem em mobile

---

## Detalhes tecnicos

### Componente ScrollReveal (novo arquivo: `src/components/ScrollReveal.tsx`)
```tsx
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, delay = 0, className }: ScrollRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
```

### Padrao de migracao em cada secao
Antes:
```tsx
const { ref, isVisible } = useScrollAnimation();
// ...
<div ref={ref} className={`... ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
```

Depois:
```tsx
<ScrollReveal>
  <div className="...">
```

### Arquivos modificados
- `package.json` - adicionar framer-motion
- `src/components/ScrollReveal.tsx` - novo componente
- Todas as 12 secoes em `src/components/sections/` - trocar useScrollAnimation por ScrollReveal
- `src/index.css` - manter as animacoes CSS existentes (usadas no Hero), apenas as secoes migram para Framer Motion
- Pequenos ajustes de padding/fonte onde necessario
