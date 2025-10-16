# 📋 Como Adicionar/Editar Jogadores

## 🎮 Para cada integrante do time adicionar-se ao site:

### 1️⃣ ADICIONAR SUA FOTO

#### Passos:
1. Prepare sua foto no formato **PNG** (fundo transparente recomendado)
2. Nomeie o arquivo com seu **nome em letras minúsculas** (ex: `oracio.png`, `castela.png`)
3. Coloque a foto em **DUAS** pastas:
   - `public/players/hero/` → Foto maior (400x400px recomendado)
   - `public/players/cards/` → Foto para card (300x300px recomendado)

#### Exemplo:
```
public/
  players/
    hero/
      oracio.png
      trossard.png
    cards/
      oracio.png
      trossard.png
```

---

### 2️⃣ EDITAR SEUS DADOS NO CÓDIGO

#### Arquivo: `src/data/players.ts`

Localize seu jogador na lista `TEAM_PLAYERS` e edite os valores:

```typescript
{ 
  id: 7,                    // ⚠️ NÃO MUDE O ID
  name: "Oracio",           // 📝 SEU NOME (igual ao arquivo da foto)
  position: "CAM",          // 🎯 SUA POSIÇÃO (GK, LB, CB, RB, CM, CAM, LW, ST, RW)
  overall: 91,              // ⭐ OVERALL GERAL (0-99)
  pace: 85,                 // 🏃 VELOCIDADE (0-99)
  shooting: 92,             // ⚽ FINALIZAÇÃO (0-99)
  dribbling: 93,            // 🎨 DRIBLE (0-99)
  passing: 90,              // 🎯 PASSE (0-99)
  defending: 45,            // 🛡️ DEFESA (0-99)
  physical: 75              // 💪 FÍSICO (0-99)
}
```

---

### 3️⃣ POSIÇÕES DISPONÍVEIS

| Código | Posição | Descrição |
|--------|---------|-----------|
| `GK` | Goleiro | Goalkeeper |
| `LB` | Lateral Esquerdo | Left Back |
| `CB` | Zagueiro Central | Center Back |
| `RB` | Lateral Direito | Right Back |
| `CM` | Meio-campo Central | Center Midfielder |
| `CAM` | Meia Atacante | Central Attacking Midfielder |
| `LW` | Ponta Esquerda | Left Winger |
| `ST` | Centroavante | Striker |
| `RW` | Ponta Direita | Right Winger |

---

### 4️⃣ TAMANHOS DE IMAGEM DOS CARDS

#### Para ajustar o tamanho das fotos nos cards:

**Arquivo:** `src/components/PlayerCard.tsx`

```tsx
{/* Área da foto - EDITE AQUI O TAMANHO */}
<div className="relative h-40">  {/* ← h-40 = 160px, h-48 = 192px, h-52 = 208px */}
  <Image
    src={`/players/cards/${player.name.toLowerCase()}.png`}
    alt={player.name}
    fill
    className="object-contain"
  />
</div>
```

#### Opções de altura (Tailwind):
- `h-32` = 128px
- `h-36` = 144px
- `h-40` = 160px (atual)
- `h-48` = 192px
- `h-52` = 208px
- `h-56` = 224px

---

### 5️⃣ TAMANHO TOTAL DO CARD

**Arquivo:** `src/components/PlayerCard.tsx`

```tsx
<div className="w-48 h-[340px] ...">  {/* ← Largura e altura do card */}
```

#### Ajustes possíveis:
- **Largura:** `w-40`, `w-44`, `w-48`, `w-52`, `w-56`
- **Altura:** `h-[300px]`, `h-[340px]`, `h-[380px]`, `h-[400px]`

---

### 6️⃣ EXEMPLO COMPLETO: Adicionar novo jogador

#### 1. Prepare a foto:
- `meuNome.png` → Coloque em `public/players/hero/` e `public/players/cards/`

#### 2. Adicione no `src/data/players.ts`:
```typescript
export const TEAM_PLAYERS: Player[] = [
  // ... jogadores existentes ...
  
  // NOVO JOGADOR
  { 
    id: 12,              // Próximo ID disponível
    name: "MeuNome",     // Igual ao nome do arquivo PNG
    position: "ST",      // Sua posição
    overall: 85, 
    pace: 90, 
    shooting: 88, 
    dribbling: 82, 
    passing: 75, 
    defending: 40, 
    physical: 78 
  },
];
```

#### 3. Salve o arquivo e recarregue o site! 🎉

---

### 7️⃣ DICAS IMPORTANTES

✅ **Nome do arquivo** deve ser exatamente igual ao campo `name` (mas em minúsculas)
- `name: "Oracio"` → arquivo: `oracio.png`

✅ **IDs únicos** - nunca repita o mesmo ID

✅ **Fotos PNG** com fundo transparente ficam melhores

✅ **Resoluções recomendadas:**
- Hero: 400x400px
- Cards: 300x300px

✅ **Após editar** o arquivo `players.ts`, o site atualiza automaticamente (em desenvolvimento)

---

### 📂 ESTRUTURA DE ARQUIVOS IMPORTANTES

```
ProClubs/
├── public/
│   └── players/
│       ├── hero/          ← Fotos grandes (400x400)
│       └── cards/         ← Fotos dos cards (300x300)
├── src/
│   ├── components/
│   │   └── PlayerCard.tsx ← Tamanho dos cards
│   ├── data/
│   │   └── players.ts     ← DADOS DOS JOGADORES (EDITE AQUI!)
│   └── types/
│       └── player.ts      ← Tipos TypeScript (não mexer)
```

---

## 🚀 TESTAR SUAS MUDANÇAS

1. Abra o terminal
2. Execute: `npm run dev`
3. Acesse: `http://localhost:3000/dashboard`
4. Veja suas mudanças ao vivo!

---

## ❓ PRECISA DE AJUDA?

Entre em contato com o administrador do projeto! 🎮⚽
