

## Plano: Ajustes de Scripts, CTA e Visual da Landing Page

Este plano aborda as 4 areas do relatorio em ordem de prioridade.

---

### 1. Scripts de Rastreamento no index.html

**GA4 (G-GCJ3P33ZT3)** -- NAO sera adicionado manualmente. Nos o removemos intencionalmente porque estava duplicando eventos com o GTM. A tag GA4 deve ser gerenciada exclusivamente dentro do painel do GTM. Adicionar de volta causaria o mesmo problema de loop/duplicacao que corrigimos.

**Clarity (vg0dx56k9b)** -- Sera adicionado no `<head>` do index.html. Clarity nao conflita com GTM pois usa seu proprio mecanismo de coleta.

**Utmify** -- Sera adicionado antes do `</body>` no index.html com os atributos `data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids`.

**Arquivo: `index.html`**
- Inserir script do Clarity no `<head>` apos o GTM
- Inserir script do Utmify antes do `</body>`

---

### 2. Remover CTA da HeroSection

**Arquivo: `src/components/sections/HeroSection.tsx`**
- Remover o bloco do CTAButton (linhas 27-30)
- Remover o import do CTAButton (linha 2)
- Manter a seta de scroll para guiar o usuario para baixo

Os CTAs permanecem apenas na OfferSection e FinalCTASection.

---

### 3. Redesign Visual da Lead (Hero + Pain)

**Arquivo: `src/components/sections/HeroSection.tsx`**
- Destacar "Voce acumulou INFLAMACAO" com fundo de alerta sutil (badge com background vermelho/laranja e texto em destaque)
- Melhorar contraste geral da headline

**Arquivo: `src/components/sections/PainSection.tsx`**
- Transformar os 3 cards (Inflamacao, Retencao, Glicogenio) em estilo glassmorphism: fundo semi-transparente com `backdrop-blur`, borda sutil branca, sombra suave
- Trocar as cores de vermelho puro para um gradiente mais sofisticado mantendo o tom de alerta
- Adicionar icones com cores mais vibrantes e fundo com gradiente
- Adicionar um divisor visual (linha decorativa ou elemento grafico) entre a PainSection e a proxima secao para criar a "quebra de padrao"

---

### 4. Evento Purchase (Meta Pixel)

A edge function `meta-conversions` ja aceita o evento `Purchase` no whitelist. Porem, como a compra acontece no Kiwify (dominio externo), o disparo do Purchase **nao pode** ser feito pelo nosso front-end -- ele precisa vir de uma das seguintes formas:

- **Webhook do Kiwify**: Configurar um webhook no painel do Kiwify que chame a edge function `meta-conversions` com o evento Purchase (requer criar um endpoint dedicado)
- **GTM no thank-you page**: Se o Kiwify redireciona para uma pagina de obrigado no seu dominio, o GTM pode disparar o Purchase la

Isso esta fora do escopo deste plano porque depende de configuracao no painel do Kiwify. Recomendo tratar separadamente.

---

### Resumo das alteracoes

| Arquivo | Alteracao |
|---|---|
| `index.html` | Adicionar Clarity + Utmify |
| `HeroSection.tsx` | Remover CTA, destacar "INFLAMACAO" visualmente |
| `PainSection.tsx` | Cards glassmorphism, icones vibrantes, divisor visual |

