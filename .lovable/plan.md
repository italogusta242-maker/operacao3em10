

## Restaurar HeroSection com logo + texto

Voltar ao layout anterior do header, onde havia o icone + texto lado a lado, mas substituindo a plantinha (Leaf icon) pela nova logo enviada (com fundo transparente).

### Mudancas

**1. Copiar a nova logo (fundo transparente) para o projeto**
- Copiar `user-uploads://logo_operacao_3em10_v1-removebg-preview.png` para `src/assets/logo-operacao-3em10.png` (substituindo a atual)

**2. Atualizar `src/components/sections/HeroSection.tsx`**
- Manter o import da logo como imagem
- Restaurar o texto "Operacao 3 em 10" ao lado da logo, como era antes
- Layout final: logo (tamanho icone ~8-10) + texto bold "Operacao 3 em 10"

O resultado sera:

```
[logo img] Operação 3 em 10
```

Em vez do antigo `[Leaf icon] Operação 3 em 10`, agora tera a logo real no lugar do icone.

