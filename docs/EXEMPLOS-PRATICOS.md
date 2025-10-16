# 💡 EXEMPLOS PRÁTICOS DE EDIÇÃO

## Exemplo 1: Novo jogador "Pedro" entra no time

### Situação:
Pedro é um novo atacante (ST) e quer adicionar-se ao site.

### ✅ Passo a passo:

#### 1. Preparar foto
```
Arquivo: pedro.png (PNG com fundo transparente)
Tamanho: 400x400px para hero, 300x300px para cards
```

#### 2. Colocar nos locais corretos
```
public/players/hero/pedro.png
public/players/cards/pedro.png
```

#### 3. Editar `src/data/players.ts`
```typescript
export const TEAM_PLAYERS: Player[] = [
  { id: 1, name: "Castela", position: "GK", ... },
  { id: 2, name: "Henry", position: "LB", ... },
  // ... outros jogadores ...
  { id: 11, name: "Ammon", position: "RW", ... },
  
  // NOVO JOGADOR PEDRO
  { 
    id: 12,                  // ← Próximo ID disponível
    name: "Pedro", 
    position: "ST",          // ← Atacante
    overall: 82, 
    pace: 88, 
    shooting: 85, 
    dribbling: 80, 
    passing: 72, 
    defending: 38, 
    physical: 76 
  },
];
```

#### 4. Salvar e testar
```bash
npm run dev
# Acesse http://localhost:3000/dashboard
```

---

## Exemplo 2: Oracio quer aumentar seus stats

### Situação:
Oracio evoluiu e quer atualizar suas estatísticas.

### ✅ Editar `src/data/players.ts`:
```typescript
// ANTES
{ 
  id: 7,
  name: "Oracio",
  position: "CAM",
  overall: 91,
  pace: 85,
  shooting: 92,
  dribbling: 93,
  passing: 90,
  defending: 45,
  physical: 75
},

// DEPOIS (overall 91 → 93, shooting 92 → 94)
{ 
  id: 7,
  name: "Oracio",
  position: "CAM",
  overall: 93,        // ← Aumentou
  pace: 85,
  shooting: 94,       // ← Aumentou
  dribbling: 93,
  passing: 90,
  defending: 45,
  physical: 75
},
```

---

## Exemplo 3: Time quer fotos maiores nos cards

### Situação:
Os jogadores acharam as fotos pequenas e querem aumentar.

### ✅ Editar `src/components/PlayerCard.tsx`:
```tsx
// ANTES (linha ~29)
<div className="relative h-40">    // h-40 = 160px

// DEPOIS (aumentar para 192px)
<div className="relative h-48">    // h-48 = 192px
```

### ✅ Ajustar altura total do card também:
```tsx
// ANTES (linha ~15)
<div className="w-48 h-[340px] ...">

// DEPOIS (aumentar proporcionalmente)
<div className="w-48 h-[380px] ...">
```

---

## Exemplo 4: Castela mudou de posição (GK → CB)

### Situação:
Castela agora joga como zagueiro.

### ✅ Editar `src/data/players.ts`:
```typescript
// ANTES
{ 
  id: 1,
  name: "Castela",
  position: "GK",     // ← Goleiro
  overall: 84,
  pace: 58,
  shooting: 57,
  passing: 89,
  dribbling: 45,
  defending: 85,
  physical: 85
},

// DEPOIS
{ 
  id: 1,
  name: "Castela",
  position: "CB",     // ← Agora é zagueiro
  overall: 84,
  pace: 72,           // ← Ajustar stats de zagueiro
  shooting: 50,
  passing: 75,
  dribbling: 65,
  defending: 88,      // ← Aumentar defesa
  physical: 85
},
```

---

## Exemplo 5: Adicionar 3 novos jogadores de uma vez

### Situação:
3 novos jogadores: "Lucas" (LB), "Rafael" (CM), "João" (RW)

### ✅ Passo 1: Fotos
```
public/players/hero/lucas.png
public/players/hero/rafael.png
public/players/hero/joao.png

public/players/cards/lucas.png
public/players/cards/rafael.png
public/players/cards/joao.png
```

### ✅ Passo 2: Editar `src/data/players.ts`
```typescript
export const TEAM_PLAYERS: Player[] = [
  // ... jogadores existentes (id 1-11) ...
  
  { 
    id: 12,
    name: "Lucas",
    position: "LB",
    overall: 78,
    pace: 85,
    shooting: 60,
    dribbling: 74,
    passing: 72,
    defending: 79,
    physical: 76
  },
  { 
    id: 13,
    name: "Rafael",
    position: "CM",
    overall: 82,
    pace: 73,
    shooting: 76,
    dribbling: 80,
    passing: 84,
    defending: 70,
    physical: 72
  },
  { 
    id: 14,
    name: "João",
    position: "RW",
    overall: 80,
    pace: 89,
    shooting: 81,
    dribbling: 85,
    passing: 74,
    defending: 40,
    physical: 68
  },
];
```

---

## Exemplo 6: Trocar foto do Oracio

### Situação:
Oracio tirou uma foto melhor e quer trocar.

### ✅ Passo a passo:
1. Preparar nova foto: `oracio-nova.png`
2. Renomear para: `oracio.png`
3. Substituir arquivos:
   - `public/players/hero/oracio.png` (sobrescrever)
   - `public/players/cards/oracio.png` (sobrescrever)
4. Recarregar página: `Ctrl + Shift + R` (limpar cache)

**⚠️ IMPORTANTE:** Nome do arquivo DEVE permanecer igual ao campo `name`!

---

## Exemplo 7: Erro comum - Nome não bate

### ❌ ERRADO:
```typescript
// Código
name: "Oracio"

// Arquivo
orácio.png    ← Tem acento!
```

### ✅ CORRETO:
```typescript
// Código
name: "Oracio"

// Arquivo
oracio.png    ← Sem acento, tudo minúsculo
```

---

## Exemplo 8: Time quer cards mais largos

### Situação:
Cards ficaram estreitos, time quer aumentar largura.

### ✅ Editar `src/components/PlayerCard.tsx`:
```tsx
// ANTES (linha ~15)
<div className="w-48 h-[340px] ...">    // w-48 = 192px

// DEPOIS
<div className="w-52 h-[340px] ...">    // w-52 = 208px (16px mais largo)
```

---

## 🎯 DICAS FINAIS

### ✅ FAÇA:
- Sempre use nomes sem acentos nos arquivos PNG
- Coloque foto em AMBOS os locais (hero/ e cards/)
- IDs únicos e sequenciais
- Stats entre 0-99
- Teste localmente antes de commitar

### ❌ NÃO FAÇA:
- Não repita IDs
- Não use acentos nos nomes de arquivo
- Não esqueça de adicionar foto nas 2 pastas
- Não use espaços no nome do arquivo (use hífen: `de-silva.png`)
- Não mude o ID de jogadores existentes

---

## 🚀 COMANDOS ÚTEIS

```bash
# Ver mudanças localmente
npm run dev

# Verificar erros antes de commitar
npm run build

# Se der erro, verificar sintaxe em:
src/data/players.ts    # Vírgulas, chaves, parênteses
```

---

## ❓ SOLUÇÃO DE PROBLEMAS

### Foto não aparece?
1. Verifique nome do arquivo (minúsculo, sem acento)
2. Verifique se está nas 2 pastas (hero/ e cards/)
3. Limpe cache: `Ctrl + Shift + R`

### Erro ao salvar players.ts?
1. Verifique vírgulas entre objetos
2. Verifique se fechou todas as chaves `{}`
3. Verifique IDs únicos

### Card ficou quebrado?
1. Veja se todos os campos existem (id, name, position, etc.)
2. Veja se os valores são números (não texto)
3. Veja se a posição é válida (GK, LB, CB, RB, CM, CAM, LW, ST, RW)

---

**💡 Copiar e colar um jogador existente é a forma mais segura de adicionar novos!**
