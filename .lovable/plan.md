

## Correção: Remover disparo client-side duplicado do trackMetaEvent

### Problema
O PageView está duplicado porque:
1. O **GTM** dispara o Meta Pixel (client-side) automaticamente
2. A função `trackMetaEvent` **também** dispara `fbq("track", ...)` manualmente (client-side)
3. E depois envia via CAPI (server-side)

Isso gera 2 eventos client-side + 1 server-side para cada chamada.

### Solução

Remover a chamada `fbq` de dentro de `trackMetaEvent`, mantendo apenas o envio server-side (CAPI). O GTM continua responsável pelo disparo client-side do pixel.

### Alteração

**Arquivo: `src/lib/meta-pixel.ts`**

Remover as linhas 10-13 que fazem o disparo manual do pixel:

```typescript
// REMOVER:
if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
  (window as any).fbq("track", eventName, customData, { eventID: eventId });
}
```

A função ficará responsável apenas pelo envio via Conversions API (server-side), evitando qualquer duplicação com o GTM.

### Observação sobre deduplicação

O `event_id` (UUID) continua sendo enviado no payload da CAPI. Para que a deduplicação funcione corretamente entre GTM (client) e CAPI (server), seria necessário que o GTM também enviasse o mesmo `event_id` -- porém como são chamadas independentes, cada uma terá seu próprio ID. O Meta tratará como eventos separados (1 client + 1 server), o que é o comportamento correto e esperado para a estratégia híbrida.

