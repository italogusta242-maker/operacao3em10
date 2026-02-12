

## Corrigir Meta Conversions API (Erro 400)

### Problema
A Conversions API do Meta esta retornando erro 400 porque o campo `user_data` esta sendo enviado vazio (`{}`). O Meta exige pelo menos um identificador do usuario para aceitar o evento server-side.

### Causa raiz
O Meta requer parametros minimos de identificacao do cliente:
- `client_ip_address` (IP do visitante)
- `client_user_agent` (user agent do navegador)

Sem esses dados, o Meta rejeita o evento com a mensagem: "Voce nao adicionou dados de parametros do cliente suficientes para esse evento".

### Solucao

**1. Atualizar `src/lib/meta-pixel.ts`**
- Capturar o `navigator.userAgent` do navegador
- Enviar dentro do campo `user_data`

**2. Atualizar `supabase/functions/meta-conversions/index.ts`**
- Extrair o IP do cliente a partir do header da request (`x-forwarded-for` ou `x-real-ip`)
- Adicionar `client_ip_address` e `client_user_agent` ao `user_data` do evento enviado ao Meta
- Gerar um `event_id` unico para deduplicacao entre pixel frontend e CAPI

### Detalhes tecnicos

**Arquivo: `src/lib/meta-pixel.ts`**
- Adicionar `client_user_agent: navigator.userAgent` ao payload enviado para a edge function
- Gerar um `event_id` unico (usando `crypto.randomUUID()`) e compartilhar entre o `fbq()` e a chamada server-side para deduplicacao

**Arquivo: `supabase/functions/meta-conversions/index.ts`**
- Extrair IP: `req.headers.get('x-forwarded-for')` ou `req.headers.get('x-real-ip')`
- Incluir no `user_data`:
  - `client_ip_address` (do header)
  - `client_user_agent` (recebido do frontend)
- Adicionar `event_id` ao evento para deduplicacao com o pixel frontend

### Resultado esperado
- Eventos server-side aceitos pelo Meta (status 200)
- Deduplicacao correta entre pixel frontend e CAPI
- Melhor match rate para otimizacao de campanhas

