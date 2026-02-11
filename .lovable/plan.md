

## Correção do erro de parse do HTML

### Problema
O Vite usa o parse5 para processar o HTML, e ele rejeita a tag `<noscript>` com `<img>` dentro dela, causando o erro "disallowed-content-in-noscript-in-head" que impede a página de carregar.

### Solução
Remover a linha 43 do `index.html` que contém a tag `<noscript>` do Meta Pixel. Essa tag é apenas um fallback para navegadores sem JavaScript e não afeta o tracking, pois o pixel principal já funciona via script.

### Detalhes técnicos
- Arquivo: `index.html`
- Remover: `<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=894388872511780&ev=PageView&noscript=1"/></noscript>`
- O script do Meta Pixel na tag `<head>` (linhas 28-39) continua funcionando normalmente
- A Conversions API (server-side) também continua ativa via edge function
