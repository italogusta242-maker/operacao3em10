

## Proteção de Imagens contra Cópia

Existem algumas técnicas que podemos aplicar no frontend para dificultar a cópia das imagens. Nenhuma é 100% infalível (um usuário técnico sempre pode capturar a tela ou inspecionar o código), mas juntas criam uma barreira significativa.

### Técnicas que serão aplicadas:

1. **Desabilitar clique direito** nas imagens (previne "Salvar imagem como...")
2. **Desabilitar arrastar** as imagens (`draggable="false"`)
3. **CSS `pointer-events: none`** nas imagens, com o slider interativo por cima
4. **CSS `user-select: none`** para impedir seleção
5. **Overlay transparente** sobre as imagens para interceptar interações diretas

### Arquivos alterados:
- `src/components/quiz/BodySlider.tsx` — adicionar proteções nas tags `<img>` e um overlay transparente

### Limitações (importante saber):
- Screenshot da tela sempre será possível
- DevTools do navegador permite acessar qualquer imagem
- Essas técnicas bloqueiam **usuários casuais**, não técnicos

