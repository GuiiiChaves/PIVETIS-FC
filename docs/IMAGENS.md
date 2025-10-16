# 📸 Guia de Imagens - Pivetis FC

## Estrutura de Pastas

```
public/
├── logo.png
└── players/
    ├── hero/          # Imagens 400x400px para carousel (Home)
    └── cards/         # Imagens 300x300px para cards (Dashboard)
```

## Como Adicionar Fotos

### 1. Preparar Imagens
- **Hero**: 400x400px - para carousel na home
- **Cards**: 300x300px - para cards no dashboard
- **Formato**: PNG (preferencialmente com fundo transparente)

### 2. Nomenclatura
⚠️ **IMPORTANTE**: Use nomes em minúsculo, sem acentos

```
✅ Correto:
- oracio.png
- trossard.png
- ammon.png

❌ Errado:
- Oracio.png (maiúscula)
- ORACIO.PNG (maiúsculas)
- orácio.png (com acento)
```

### 3. Localização
- Hero: `public/players/hero/nome-jogador.png`
- Card: `public/players/cards/nome-jogador.png`

### 4. Lista de Jogadores

**Prioridade Home (Carousel):**
- oracio.png ✅
- trossard.png
- ammon.png
- brandt.png
- castela.png

**Dashboard:**
- henry.png
- simakan.png
- konsa.png
- baku.png
- schlager.png
- martins.png

## Sistema Automático

O código busca automaticamente as imagens pelo nome do jogador.
Se a imagem não existir, aparece um emoji placeholder.

**Não é necessário alterar código!**
