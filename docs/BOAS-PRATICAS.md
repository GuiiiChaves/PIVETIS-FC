# Boas Práticas do Projeto

## Estrutura de Arquivos

```
ProClubs/
├── src/
│   ├── app/              # Pages do Next.js (App Router)
│   ├── components/       # Componentes React reutilizáveis
│   ├── data/            # Dados estáticos (players, config)
│   └── types/           # Definições TypeScript
├── public/
│   ├── players/
│   │   ├── hero/        # Imagens 400x400px (carousel)
│   │   └── cards/       # Imagens 300x300px (cards)
│   └── logo.png
└── docs/                # Documentação
```

## Organização de Código

### 1. Separação de Responsabilidades

- **Dados**: Sempre em `src/data/` (ex: `players.ts`)
- **Tipos**: Sempre em `src/types/` (ex: `player.ts`)
- **Componentes**: Em `src/components/` com nome em PascalCase
- **Páginas**: Em `src/app/` seguindo estrutura do Next.js

### 2. Nomenclatura

**Arquivos:**
- Componentes: `PlayerCard.tsx` (PascalCase)
- Páginas: `page.tsx`, `layout.tsx` (lowercase)
- Tipos: `player.ts` (lowercase)
- Dados: `players.ts` (lowercase, plural)

**Variáveis/Constantes:**
- Constantes exportadas: `FEATURED_PLAYERS` (UPPER_SNAKE_CASE)
- Variáveis locais: `isAuthenticated` (camelCase)
- Componentes: `PlayerCard` (PascalCase)

**Imagens:**
- Sempre lowercase, sem acentos
- Exemplo: `oracio.png`, `trossard.png`

### 3. Importações

Ordenação recomendada:
```tsx
// 1. React e Next.js
import { useState } from "react";
import Image from "next/image";

// 2. Componentes
import PlayerCard from "@/components/PlayerCard";

// 3. Tipos
import { Player } from "@/types/player";

// 4. Dados
import { TEAM_PLAYERS } from "@/data/players";

// 5. Estilos (se necessário)
```

### 4. TypeScript

- **Sempre tipar props de componentes**
  ```tsx
  interface PlayerCardProps {
    player: Player;
  }
  ```

- **Usar tipos importados ao invés de definir inline**
  ```tsx
  // ✅ BOM
  import { Player } from "@/types/player";
  
  // ❌ EVITAR
  const player: { name: string, overall: number } = ...
  ```

- **Exportar tipos apenas de `src/types/`**

### 5. Componentes

**Estrutura recomendada:**
```tsx
import Image from "next/image";
import { Player } from "@/types/player";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  // 1. Hooks (useState, useEffect)
  
  // 2. Funções auxiliares
  const getCardGradient = (overall: number) => { ... };
  
  // 3. Variáveis derivadas
  const textColor = getTextColor(player.overall);
  
  // 4. Return JSX
  return (
    <div>...</div>
  );
}
```

### 6. Comentários

**Quando comentar:**
- ✅ Seções de layout (ex: `{/* Header */}`)
- ✅ Lógica complexa que precisa explicação
- ✅ TODOs e melhorias futuras

**Quando NÃO comentar:**
- ❌ Código auto-explicativo
- ❌ Cada linha de JSX
- ❌ Imports padrão

**Exemplos:**
```tsx
// ✅ BOM - Seção clara
{/* Carousel com navegação */}
<div className="carousel">...</div>

// ✅ BOM - Lógica não óbvia
// Posiciona CAM mais à frente para formação ofensiva
<div className="-mt-6">

// ❌ EVITAR - Óbvio demais
// Botão de logout
<button onClick={handleLogout}>Sair</button>
```

### 7. Tailwind CSS

**Classes customizadas:**
- Sempre em `globals.css` com `@layer utilities`
- Usar nomes descritivos: `glass-effect`, `scrollbar-hide`

**Ordenação de classes:**
1. Layout (flex, grid, absolute)
2. Tamanho (w-, h-)
3. Espaçamento (p-, m-, gap-)
4. Cores (bg-, text-, border-)
5. Efeitos (hover:, transition-, transform)

```tsx
// ✅ BOM
<div className="flex justify-center gap-4 w-full p-6 bg-black text-white hover:bg-gray-900 transition-all">

// ❌ EVITAR (desordenado)
<div className="text-white bg-black p-6 hover:bg-gray-900 w-full gap-4 flex transition-all justify-center">
```

### 8. Dados e Constantes

**Centralização:**
```tsx
// src/data/players.ts
export const FEATURED_PLAYERS: FeaturedPlayer[] = [...];
export const TEAM_PLAYERS: Player[] = [...];
```

**Uso:**
```tsx
import { TEAM_PLAYERS } from "@/data/players";

// Não redefinir os dados, sempre importar
```

### 9. Images Next.js

**Sempre usar Next Image:**
```tsx
<Image
  src="/players/cards/oracio.png"
  alt="Oracio"
  width={160}
  height={160}
  className="object-cover"
  onError={(e) => e.currentTarget.style.display = 'none'}
/>
```

**Fallback para imagens:**
```tsx
{/* Emoji de fallback caso imagem não carregue */}
<div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
  {player.position === "GK" ? "🧤" : "⚽"}
</div>
```

## Git

### .gitignore
Sempre excluir:
- `node_modules/`
- `.next/`
- `.env*`
- `.vscode/`
- `.DS_Store`

### Commits
Mensagens claras:
```
✅ "Adiciona carousel de jogadores com navegação"
✅ "Refatora PlayerCard para usar tipos centralizados"
✅ "Corrige layout 4-3-3 ofensivo"

❌ "fix"
❌ "updates"
❌ "teste"
```

## Performance

### Images
- **hero/**: 400x400px para carousel
- **cards/**: 300x300px para cards do dashboard
- Sempre usar Next Image com `width` e `height`

### Código
- Evitar `any` em TypeScript
- Usar `.map()` ao invés de repetir JSX
- Separar lógica em funções auxiliares

## Próximos Passos

1. **Autenticação real**: Implementar NextAuth.js
2. **API Integration**: Conectar com backend
3. **Testes**: Adicionar Jest + React Testing Library
4. **CI/CD**: GitHub Actions para deploy automático
5. **Analytics**: Google Analytics ou similar
