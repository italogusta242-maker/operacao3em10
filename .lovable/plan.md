

## Correção: Remover scripts de rastreamento duplicados do index.html

### Problema
A página está disparando eventos continuamente porque existem scripts de rastreamento carregados diretamente no `index.html` que conflitam com tags equivalentes configuradas no Google Tag Manager (GTM):

1. **Google Analytics (gtag.js)** carregado diretamente no HTML + provavelmente uma tag GA4 no GTM -- isso cria conflito no `dataLayer` e pode causar loops de disparo
2. **Microsoft Clarity** carregado diretamente no HTML + possivelmente configurado no GTM

O GTM (`GTM-MHKX7VRQ`) deveria ser o **unico orquestrador** de todas as tags de rastreamento.

### Solução

Remover do `index.html` os scripts de:
- **Google Analytics (gtag.js)** -- linhas 27-34
- **Microsoft Clarity** -- linhas 36-43

Manter **apenas** o Google Tag Manager (GTM), que deve gerenciar todas as tags centralizadamente.

### Alteracao

**Arquivo: `index.html`**
- Remover o bloco do Google Analytics (`gtag.js` com ID `G-GCJ3P33ZT3`)
- Remover o bloco do Microsoft Clarity (ID `vg0dx56k9b`)
- Manter apenas o GTM (script + noscript)

O arquivo ficara assim:

```text
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" ... />
  ... metas ...

  <!-- Google Tag Manager (unico script de rastreamento) -->
  <script>(...GTM...)</script>
</head>
<body>
  <!-- GTM noscript -->
  <noscript>...</noscript>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

### Pre-requisito importante
Confirme que no painel do GTM existem tags configuradas para:
- Google Analytics 4 com ID `G-GCJ3P33ZT3`
- Microsoft Clarity com ID `vg0dx56k9b`
- Meta Pixel com ID `1558200545293720`

Se alguma dessas tags nao estiver no GTM, ela precisa ser adicionada antes de publicar esta alteracao.

### Resultado esperado
- Cada evento disparado apenas 1 vez
- Sem reloads ou loops de disparo
- GTM como unica fonte de rastreamento

