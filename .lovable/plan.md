

# Alteracoes da Pagina -3kg em 10 Dias

Baseado no PDF enviado, aqui estao todas as mudancas necessarias:

---

## 1. Sessao de Dor (PainSection)

**Arquivo:** `src/components/sections/PainSection.tsx`

- Alterar o terceiro ponto de dor de: *"culpa que parece nao sair de jeito nenhum"* para: **"culpa por estar insatisfeito(a) com seu corpo"**
- Alterar o quarto ponto de dor de: *"passar 3 meses na academia e comendo alface pra voltar ao normal"* para: **"passar 3 meses na academia e comendo so salada pra voltar ao normal"**
- Alterar o texto de transicao de *"E tudo isso pode ser eliminado..."* para: **"Porque o que voce esta sentindo agora NAO e gordura acumulada. E o conjunto de 3 elementos:"** (movendo a frase que ja existe para antes dos cards, reformulada)

## 2. Sessao de Erros (ErrorSection)

**Arquivo:** `src/components/sections/ErrorSection.tsx`

- Alterar item *"Voltar pra academia todo dia as 5h da manha"* para: **"Voltar pra academia todo dia de manha"**

## 3. Sessao de Solucao (SolutionSection)

**Arquivo:** `src/components/sections/SolutionSection.tsx`

- Adicionar um **quarto produto** aos cards principais: **"Plataforma de aulas estilo Netflix"** com descricao: *"Aulas curtas e diretas ao ponto para te ensinar tudo que voce precisa saber para nunca mais ficar refem de reacoes metabolicas."*
- Ajustar o grid para acomodar 4 cards (2x2 em mobile, 4 colunas em desktop)

## 4. Sessao de FAQ (FAQSection)

**Arquivo:** `src/components/sections/FAQSection.tsx`

- Alterar a resposta de **"Preciso treinar todo dia?"** de *"NAO. O protocolo funciona SEM exercicio fisico..."* para: **"Sim. 30 minutos por dia e o suficiente. Faz sentido investir so esse pequeno tempo do seu dia para se sentir muito mais autoconfiante e bonito ao se olhar no espelho?"**

## 5. Nova Sessao de Depoimentos

**Novo arquivo:** `src/components/sections/TestimonialsSection.tsx`

- Criar uma nova sessao de depoimentos com cards de prova social
- Como nao ha depoimentos especificos no PDF, serao criados placeholders com estrutura pronta para receber depoimentos reais (nome, foto, texto, resultado)
- Posicionar entre a sessao de FAQ e a sessao de Urgencia

**Arquivo modificado:** `src/pages/Index.tsx` - adicionar o import e posicionamento da nova sessao

## 6. Sessao de Urgencia (UrgencySection)

**Arquivo:** `src/components/sections/UrgencySection.tsx`

Reescrever completamente o conteudo:

- **Novo texto principal:** "Essa operacao tem como objetivo desinchar o corpo do maior numero de pessoas. Porem, o valor promocional de R$ 47,00 ficara disponivel apenas para os primeiros 2.000 membros."
- **Segunda frase:** "Assim que essa meta for alcancada, o valor subira automaticamente para R$ 147,00."
- **Barra de progresso:** Alterar de 412/500 para **1.783/2.000** (89.15%)
- **Texto final:** "Se voce esta lendo isso agora, a oferta ainda esta ativa no valor promocional. Que podera ser alterado a qualquer momento."
- Alinhar o texto da esquerda para a direita (text-left) conforme solicitado no PDF

---

## Detalhes Tecnicos

### Arquivos modificados:
1. `src/components/sections/PainSection.tsx` - textos dos pain points
2. `src/components/sections/ErrorSection.tsx` - texto de um item
3. `src/components/sections/SolutionSection.tsx` - novo card + ajuste de grid
4. `src/components/sections/FAQSection.tsx` - resposta do FAQ
5. `src/components/sections/UrgencySection.tsx` - reescrita completa do conteudo
6. `src/pages/Index.tsx` - adicionar TestimonialsSection

### Novo arquivo:
7. `src/components/sections/TestimonialsSection.tsx` - sessao de depoimentos

### Icone para o novo card:
- Usar `MonitorPlay` ou `PlayCircle` do lucide-react para representar a plataforma de aulas estilo Netflix

