

# Melhorias visuais na secao do Expert

## O que sera feito

### 1. Nome "IGOR CORREA" com fonte em degradê
- Aplicar um gradiente laranja (do laranja claro ao laranja escuro) no texto do nome, similar a imagem de referencia.
- Usar `background-clip: text` com `text-transparent` do Tailwind para criar o efeito de texto com cor em degradê.

### 2. Efeito de pulso/glow na logo (badge circular)
- Adicionar aneis concentricos animados ao redor do badge circular branco com a logo, inspirado na imagem de referencia.
- Criar uma animacao de pulso com circulos expandindo para fora (tipo ondas de radar) usando cores laranja com opacidade decrescente.
- Usar Framer Motion para animar os aneis com escala e opacidade.

### 3. Ajustes gerais
- Leve brilho (glow) laranja sutil atras do nome para dar mais destaque.

---

## Detalhes tecnicos

### Arquivo modificado: `src/components/sections/ExpertSection.tsx`

**Texto em degradê:**
- Substituir a classe `text-[hsl(20_100%_55%)]` por classes de gradiente: `bg-gradient-to-r from-[hsl(30_100%_60%)] to-[hsl(15_100%_45%)] bg-clip-text text-transparent`

**Badge com efeito de pulso:**
- Envolver o badge circular em um container relativo
- Adicionar 2-3 `motion.div` com `border-radius: 50%` posicionados absolutamente atras do badge
- Animar com `scale` e `opacity` em loop infinito, cada anel com delay diferente para criar o efeito de ondas expandindo
- Cores: laranja com opacidade decrescente (40%, 25%, 15%)

