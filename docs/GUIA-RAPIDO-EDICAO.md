# 🎯 GUIA RÁPIDO - Edição de Jogadores

## 📝 DADOS DOS JOGADORES
**Arquivo:** `src/data/players.ts`

### Para editar seu jogador:
1. Abra o arquivo `src/data/players.ts`
2. Procure seu nome na lista
3. Edite os valores

```typescript
// EXEMPLO: Como o Oracio editaria seus dados
{ 
  id: 7,                    // ⚠️ NÃO MEXER
  name: "Oracio",           // ✏️ Seu nome (igual à foto PNG)
  position: "CAM",          // ✏️ Sua posição
  overall: 91,              // ✏️ Overall (0-99)
  pace: 85,                 // ✏️ Velocidade
  shooting: 92,             // ✏️ Finalização  
  dribbling: 93,            // ✏️ Drible
  passing: 90,              // ✏️ Passe
  defending: 45,            // ✏️ Defesa
  physical: 75              // ✏️ Físico
}
```

---

## 📸 ADICIONAR SUA FOTO

### Passo 1: Prepare a imagem
- Formato: **PNG**
- Fundo: Transparente (recomendado)
- Nome: **seu-nome-minusculo.png** (ex: `oracio.png`)

### Passo 2: Coloque nos locais corretos
```
public/players/hero/oracio.png      ← Foto grande (400x400px)
public/players/cards/oracio.png     ← Foto do card (300x300px)
```

### Passo 3: Confira o nome
O campo `name` no código **DEVE** ser igual ao nome da foto:
- Código: `name: "Oracio"`
- Arquivo: `oracio.png` (tudo minúsculo)

---

## 🎨 TAMANHO DA FOTO NO CARD
**Arquivo:** `src/components/PlayerCard.tsx` (linha ~29)

```tsx
<div className="relative h-40">    ← EDITE AQUI
```

### Valores disponíveis:
```
h-32  →  128px (pequeno)
h-36  →  144px
h-40  →  160px (ATUAL)
h-44  →  176px  
h-48  →  192px (grande)
h-52  →  208px (muito grande)
```

---

## 📐 TAMANHO DO CARD INTEIRO
**Arquivo:** `src/components/PlayerCard.tsx` (linha ~15)

```tsx
<div className="w-48 h-[340px] ...">    ← EDITE AQUI
```

### Largura (w-):
- `w-40` = 160px (estreito)
- `w-44` = 176px
- `w-48` = 192px (ATUAL)
- `w-52` = 208px (largo)

### Altura (h-):
- `h-[300px]` = 300px (baixo)
- `h-[340px]` = 340px (ATUAL)
- `h-[380px]` = 380px (alto)

---

## 🎮 POSIÇÕES NO JOGO

| Código | Nome Completo | Onde fica no campo |
|--------|---------------|-------------------|
| **GK** | Goleiro | Última linha |
| **LB** | Lateral Esquerdo | Defesa esquerda |
| **CB** | Zagueiro | Defesa centro |
| **RB** | Lateral Direito | Defesa direita |
| **CM** | Meio-campo | Centro do campo |
| **CAM** | Meia Atacante | Meio de ataque |
| **LW** | Ponta Esquerda | Ataque esquerda |
| **ST** | Centroavante | Ataque centro |
| **RW** | Ponta Direita | Ataque direita |

---

## ✅ CHECKLIST ANTES DE SALVAR

- [ ] Nome no código igual ao nome do arquivo PNG (minúsculo)
- [ ] Foto colocada em `public/players/hero/`
- [ ] Foto colocada em `public/players/cards/`
- [ ] ID único (não repetido)
- [ ] Posição correta (GK, LB, CB, RB, CM, CAM, LW, ST, RW)
- [ ] Stats entre 0-99

---

## 🚀 VER RESULTADO

```bash
# No terminal, execute:
npm run dev

# Depois acesse:
http://localhost:3000/dashboard
```

---

## 📋 RESUMO DOS ARQUIVOS

| O que você quer | Arquivo para editar |
|-----------------|---------------------|
| **Mudar dados do jogador** | `src/data/players.ts` |
| **Tamanho da foto** | `src/components/PlayerCard.tsx` (linha 29) |
| **Tamanho do card** | `src/components/PlayerCard.tsx` (linha 15) |
| **Adicionar foto** | `public/players/hero/` e `public/players/cards/` |

---

**💡 DICA:** Copie as linhas de outro jogador e edite os valores - é mais fácil!
