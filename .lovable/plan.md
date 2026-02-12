
## Correção: Duplicação de Eventos do Meta Pixel

### Problema
O PageView do Meta Pixel está sendo disparado múltiplas vezes. Isso acontece porque o mesmo pixel está sendo carregado/disparado por mais de uma fonte:

1. **Script direto no `index.html`** -- inicializa o pixel e dispara `fbq('track', 'PageView')`
2. **Google Tag Manager (GTM)** -- se houver uma tag do Meta Pixel configurada no GTM, ela também inicializa o pixel e dispara PageView

Resultado: cada PageView é registrado 2x ou mais.

### Solução

Remover o script direto do Meta Pixel do `index.html` e deixar **apenas o GTM** gerenciá-lo. Isso centraliza todo o rastreamento no GTM e elimina a duplicação.

### Alterações

**Arquivo: `index.html`**
- Remover o bloco inteiro do Meta Pixel (linhas que contêm `fbevents.js`, `fbq('init', ...)` e `fbq('track', 'PageView')`)
- Manter todos os outros scripts (GTM, Clarity, Utmify)

**Arquivo: `src/lib/meta-pixel.ts`**
- Manter como está -- a chamada `fbq("track", eventName)` client-side funciona porque o GTM já terá carregado o `fbq`. O `event_id` garante deduplicação com a Conversions API (CAPI).

### Pré-requisito importante
Certifique-se de que o GTM tem uma tag do Meta Pixel configurada com o ID `1558200545293720` que dispara no evento "All Pages". Sem isso, o pixel não será carregado e nenhum evento será rastreado.

### Resultado esperado
- PageView disparado apenas 1x (via GTM)
- InitiateCheckout disparado 1x client-side (via `fbq` no React) + 1x server-side (via CAPI), com deduplicação por `event_id`
