# Landing Page — Protocolo Reset 10D

## Visão Geral

Landing page de vendas de alta conversão para o Protocolo Reset 10D, um produto digital de emagrecimento a R$ 47,00. Página single-page scroll, mobile-first, com copy persuasiva e design profissional no estilo clean/médico-acessível.

## Design & Identidade Visual

- **Paleta:** Verde vibrante (#4CAF50) como cor principal, laranja (#FF6B35) para CTAs, azul (#1976D2) para confiança/garantia, vermelho (#D32F2F) para urgência
- **Tipografia:** Montserrat/Poppins para títulos (bold), Inter para corpo de texto
- **Estilo:** Clean, moderno, espaçamento generoso, ícones Lucide para ilustrações
- **Animações:** Fade-in e slide-up ao scroll, hover com scale nos botões, pulse nos CTAs principais

## Estrutura da Página (13 Seções)

### 1. Hero (Tela cheia)

Headline principal com destaque na palavra "INFLAMAÇÃO" em laranja. Sub-headline com as 3 promessas (sem fome, sem academia, sem complicação). Botão CTA verde grande. Fundo gradiente verde-claro → branco.

### 2. Identificação da Dor

Lista com checkmarks verdes dos sintomas que o público reconhece (roupa não fecha, rosto inchado, sensação de peso). 3 cards explicativos: Inflamação Celular, Retenção Líquida, Glicogênio Estocado.

### 3. O Erro (Dietas Tradicionais)

Lista com X vermelhos dos métodos que não funcionam. Box destacado com borda laranja explicando que o problema é inflamação, não falta de força de vontade.

### 4. Mecanismo Único (Como Funciona)

Seção visual diferenciada com fundo gradiente azul-verde. Timeline vertical com 3 etapas: Dias 1-3 (Choque Anti-Inflamatório), Dias 4-7 (Esvaziamento de Glicogênio), Dias 8-10 (Reset Metabólico). Box resultado em verde.

### 5. O Que Você Recebe

Grid com 3 cards dos produtos inclusos (Guia 10D, Lista de Compras, Shot Matinal). 2 cards de bônus com destaque laranja (Guia Manutenção R$47, Protocolo SOS R$37).

### 6. Oferta Irresistível (Preço)

Comparação de custos riscados. Box gigante com preço: 12x R$3,91 ou R$47 à vista. Comparações âncora (menos que um McDonald's). CTA laranja gigante com animação pulse.

### 7. Garantia de 7 Dias

Ícone de escudo azul. Box com borda azul explicando a garantia incondicional. Tom empático e direto.

### 8. FAQ / Objeções

5 perguntas em accordion expansível: fome, ingredientes caros, efeito rebote, exercício, homens e mulheres. Respostas claras e tranquilizadoras.

### 9. Urgência e Escassez

Alerta visual com fundo vermelho suave. Menção ao limite de 500 membros e retorno ao preço de R$97. Barra de progresso visual.

### 10. CTA Final

Fundo gradiente verde escuro. Duas opções lado a lado (fechar a página vs. investir R$47). Botão CTA final gigante branco com texto verde e efeito glow.

### 11. Pós-Escrito (P.S.)

Texto intimista em itálico com P.S. e P.P.S. reforçando a urgência e a garantia sem risco.

### 12. Rodapé / Disclaimers

Fundo escuro com avisos legais completos, CNPJ 62.56 placeholder, email de suporte, links para Termos/Privacidade/FAQ.

## Funcionalidades Técnicas

- **CTAs:** Link placeholder (#checkout) em todos os botões, prontos para substituir pelo link Hotmart
- **Tracking:** Estrutura preparada com placeholders para Google Analytics e Meta Pixel
- **Scroll suave** entre seções
- **Responsividade total:** Mobile-first com breakpoints para tablet e desktop
- **Acessibilidade:** Contraste WCAG AA, alt texts, estrutura semântica HTML5, focus states
- **SEO:** Meta tags (title, description, og:image) configuradas
- **Performance:** Lazy loading, fontes otimizadas

## Componentes React

A página será construída com componentes modulares (um por seção), usando Tailwind CSS para estilização, ícones Lucide, e o Accordion do shadcn/ui para o FAQ. Animações via CSS com classes utilitárias do Tailwind.   
  
