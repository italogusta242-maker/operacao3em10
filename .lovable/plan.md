

## Plano: Aplicar Design System Dark do Shape Insano

### O que muda

A página atual usa tema **claro** (fundo branco, verde primário, laranja accent). O design system de referência do Shape Insano é **dark-first** com alto contraste: fundo obsidian (#050505), laranja vibrante (#FF6600) como CTA, dourado como accent premium, e tipografia Sora.

**Decisão importante:** Manter a identidade da marca (verde = saúde, laranja = urgência) mas migrar para o estilo dark e a intensidade visual da referência.

### Arquivos afetados

**1. `src/index.css`** — Tokens do design system
- Background: `0 0% 2%` (obsidian escuro)
- Foreground: `0 0% 95%` (texto claro)
- Card: `0 0% 7%` (#111111)
- Primary mantém verde mas mais saturado para contraste em fundo escuro: `122 60% 50%`
- Accent mantém laranja: `24 100% 50%`
- Muted: `240 5% 65%` (zinc-400)
- Border: `240 4% 16%` (zinc-800)
- Adicionar tokens customizados: `--surface-elevated`, `--glow-primary`
- Remover font import do Google Fonts (Montserrat/Inter já estão), ou trocar body para Sora se desejado
- Atualizar utilitários de gradiente para funcionar no tema dark

**2. `src/components/sections/HeroSection.tsx`**
- Fundo: gradiente dark com blur orbs em verde/laranja com mais opacidade
- Texto headline em branco com gradiente laranja no destaque
- Subtítulo em `text-gray-400`

**3. `src/components/sections/PainSection.tsx`**
- Fundo: `bg-secondary` (agora será #0A0A0A)
- Cards: `bg-card` (#111) com border zinc-800, sem glassmorphism branco
- Textos em foreground claro, destaques em `text-destructive`

**4. `src/components/sections/ErrorSection.tsx`**
- Fundo: `bg-background` (obsidian)
- Blockquote: border laranja com bg card escuro em vez de gradiente claro

**5. `src/components/sections/MechanismSection.tsx`**
- Fundo: gradiente dark sutil em vez de azul/verde claro
- Timeline cards: `bg-card` escuro com border sutil
- Dot da timeline: verde brilhante com glow

**6. `src/components/sections/TestimonialsSection.tsx`**
- Fundo dark, carousel com cards escuros

**7. `src/components/sections/SolutionSection.tsx`**
- Product cards: `bg-card` escuro
- Bonus cards: já estão em tom escuro, ajustar borders

**8. `src/components/sections/OfferSection.tsx`**
- Já usa tons escuros, manter/refinar para ficar coeso com novo sistema

**9. `src/components/sections/ExpertSection.tsx`**
- Já está dark, verificar coesão

**10. `src/components/sections/GuaranteeSection.tsx`**
- Migrar de fundo azul claro para dark com accent azul/trust em glow

**11. `src/components/sections/FAQSection.tsx`**
- Cards accordion: `bg-card` escuro

**12. `src/components/sections/UrgencySection.tsx`**
- Migrar de fundo vermelho claro para dark com borda/glow vermelho

**13. `src/components/sections/FinalCTASection.tsx`**
- Já usa verde escuro, refinar para novo sistema

**14. `src/components/sections/PostScriptSection.tsx`**
- Fundo dark, texto muted claro

**15. `src/components/sections/FooterSection.tsx`**
- Já está dark, ajustar tokens

**16. `src/components/CTAButton.tsx`**
- Variant accent usa laranja vibrante, adicionar glow effect (`box-shadow` com hsl laranja)

**17. `tailwind.config.ts`**
- Nenhuma mudança estrutural necessária (tokens já vêm do CSS)

### Resumo da migração
- Tema global muda de claro para **dark**
- Todas as seções que usam fundos claros (`bg-background`, `bg-secondary`, gradientes pastéis) passam a usar tons escuros
- Textos mudam de escuro-sobre-claro para claro-sobre-escuro
- Cards ganham bordas sutis zinc-800 em vez de sombras claras
- Blur orbs ganham mais opacidade para brilhar no fundo escuro
- CTAs ganham glow effects (box-shadow com cor primária/accent)

