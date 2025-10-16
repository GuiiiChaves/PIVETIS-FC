# 📁 ESTRUTURA DE PASTAS DO PROJETO

## 🎯 Onde está cada coisa

```
ProClubs/
│
├── 📂 public/                      ← ARQUIVOS PÚBLICOS (IMAGENS)
│   ├── logo.png                   ← Logo do time
│   └── 📂 players/                ← PASTA DOS JOGADORES
│       ├── 📂 hero/               ← ⭐ FOTOS GRANDES (400x400px)
│       │   ├── castela.png
│       │   ├── oracio.png
│       │   ├── trossard.png
│       │   ├── ammon.png
│       │   ├── brandt.png
│       │   └── ...
│       │
│       └── 📂 cards/              ← ⭐ FOTOS DOS CARDS (300x300px)
│           ├── castela.png
│           ├── oracio.png
│           ├── trossard.png
│           ├── ammon.png
│           ├── brandt.png
│           └── ...
│
├── 📂 src/                        ← CÓDIGO FONTE
│   │
│   ├── 📂 app/                    ← PÁGINAS DO SITE
│   │   ├── page.tsx               ← Página inicial (/)
│   │   ├── layout.tsx             ← Layout geral
│   │   ├── globals.css            ← Estilos globais
│   │   ├── 📂 login/
│   │   │   └── page.tsx           ← Página de login (/login)
│   │   └── 📂 dashboard/
│   │       └── page.tsx           ← Dashboard com formação (/dashboard)
│   │
│   ├── 📂 components/             ← COMPONENTES REUTILIZÁVEIS
│   │   └── PlayerCard.tsx         ← ⭐ CARD DO JOGADOR (tamanhos)
│   │
│   ├── 📂 data/                   ← ⭐⭐⭐ DADOS DOS JOGADORES
│   │   └── players.ts             ← EDITE AQUI SEUS DADOS!
│   │
│   └── 📂 types/                  ← TIPOS TYPESCRIPT
│       └── player.ts              ← Definição de tipos
│
├── 📂 docs/                       ← 📚 DOCUMENTAÇÃO
│   ├── COMO-ADICIONAR-JOGADOR.md  ← Guia completo
│   ├── GUIA-RAPIDO-EDICAO.md      ← Guia rápido
│   ├── BOAS-PRATICAS.md
│   ├── IMAGENS.md
│   └── ...
│
├── package.json                   ← Dependências do projeto
├── tsconfig.json                  ← Configuração TypeScript
├── tailwind.config.ts             ← Configuração Tailwind CSS
└── README.md                      ← Documentação principal
```

---

## 🎯 ARQUIVOS MAIS IMPORTANTES PARA VOCÊ

### 1. **Adicionar/Editar Jogador**
```
src/data/players.ts        ← SEUS DADOS AQUI! 🎮
```

### 2. **Suas Fotos**
```
public/players/hero/seu-nome.png    ← Foto grande
public/players/cards/seu-nome.png   ← Foto do card
```

### 3. **Tamanho do Card**
```
src/components/PlayerCard.tsx       ← Ajustar tamanhos
```

---

## 📸 EXEMPLO: Adicionando o jogador "Silva"

### Passo 1: Criar as fotos
```
public/
  players/
    hero/
      silva.png          ← 400x400px
    cards/
      silva.png          ← 300x300px
```

### Passo 2: Adicionar dados em `src/data/players.ts`
```typescript
export const TEAM_PLAYERS: Player[] = [
  // ... jogadores existentes ...
  
  { 
    id: 12,
    name: "Silva",      ← Nome igual ao arquivo (mas com maiúscula)
    position: "CM",
    overall: 83,
    pace: 75,
    shooting: 78,
    dribbling: 80,
    passing: 85,
    defending: 68,
    physical: 72
  },
];
```

### Passo 3: Salvar e testar!
```bash
npm run dev
# Acesse: http://localhost:3000/dashboard
```

---

## 🔍 ONDE PROCURAR CADA COISA

| Quero... | Vou em... |
|----------|-----------|
| Mudar meus stats | `src/data/players.ts` |
| Adicionar minha foto | `public/players/hero/` e `/cards/` |
| Mudar tamanho da foto | `src/components/PlayerCard.tsx` |
| Mudar tamanho do card | `src/components/PlayerCard.tsx` |
| Ver o site | `npm run dev` → `localhost:3000` |
| Ler documentação | `docs/` |

---

## ⚠️ REGRAS IMPORTANTES

1. **Nome do arquivo PNG = name no código** (mas minúsculo)
   - Código: `name: "Oracio"`
   - Arquivo: `oracio.png`

2. **Sempre coloque foto em 2 lugares:**
   - `public/players/hero/`
   - `public/players/cards/`

3. **ID único** - nunca repita números

4. **Posições válidas:**
   - GK, LB, CB, RB, CM, CAM, LW, ST, RW

5. **Stats entre 0-99**

---

## 🎨 PERSONALIZAÇÕES RÁPIDAS

### Aumentar foto no card
```tsx
// src/components/PlayerCard.tsx (linha ~29)
<div className="relative h-40">    ← Mude para h-48
```

### Aumentar card inteiro
```tsx
// src/components/PlayerCard.tsx (linha ~15)
<div className="w-48 h-[340px] ...">  ← Mude para h-[380px]
```

---

## 🚀 COMANDOS ÚTEIS

```bash
# Rodar o site em desenvolvimento
npm run dev

# Buildar para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar erros
npm run lint
```

---

**📌 Lembre-se:** Após editar qualquer arquivo `.ts` ou `.tsx`, salve e o site atualiza automaticamente (se estiver com `npm run dev` rodando)!
