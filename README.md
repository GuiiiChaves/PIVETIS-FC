# Pivetis FC - Dashboard Pro Clubs

Dashboard informativo moderno do time **Pivetis FC** no Pro Clubs do EA FC.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)

## 🎮 Sobre

Dashboard web com design profissional:
- 🏠 **Home**: Carousel com elenco completo
- 🔐 **Login**: Sistema de autenticação
- 📊 **Dashboard**: Formação 4-3-3 tática em campo verde
- ⚽ **Cards Dourados**: Estatísticas completas estilo FIFA Ultimate Team

## 📚 Documentação para Jogadores

### 🎯 Guias Rápidos
- **[📝 Como Adicionar/Editar Jogadores](docs/COMO-ADICIONAR-JOGADOR.md)** - Guia completo passo a passo
- **[⚡ Guia Rápido de Edição](docs/GUIA-RAPIDO-EDICAO.md)** - Resumo visual
- **[📁 Estrutura do Projeto](docs/ESTRUTURA-PROJETO.md)** - Onde está cada arquivo

### Para adicionar-se ao site:
1. Adicione sua foto PNG em `public/players/hero/` e `public/players/cards/`
2. Edite seus dados em `src/data/players.ts`
3. Veja o resultado em `http://localhost:3000/dashboard`

👉 **Consulte os guias acima para instruções detalhadas!**

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-first CSS

## 📦 Instalação

```bash
npm install
```

## 🎯 Uso

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

### Produção

```bash
npm run build
npm start
```

## 📁 Estrutura

```
ProClubs/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   │   ├── dashboard/    # Dashboard 4-3-3
│   │   ├── login/        # Autenticação
│   │   ├── page.tsx      # Home + Carousel
│   │   └── globals.css   # Tailwind + Custom CSS
│   ├── components/       # React Components
│   │   └── PlayerCard.tsx
│   ├── data/            # Dados estáticos
│   │   └── players.ts   # FEATURED_PLAYERS, TEAM_PLAYERS
│   └── types/           # TypeScript
│       └── player.ts    # Player, FeaturedPlayer
├── public/
│   ├── logo.png
│   └── players/
│       ├── hero/        # 400x400px (carousel)
│       └── cards/       # 300x300px (dashboard)
├── docs/                # Documentação
│   ├── BOAS-PRATICAS.md
│   └── IMAGENS.md
└── .gitignore
```

## 🖼️ Adicionando Imagens

1. **Hero** (400x400px): `public/players/hero/nome.png`
2. **Cards** (300x300px): `public/players/cards/nome.png`
3. 2. **Site Util** : https://www.footyrenders.com/

**Importante**: Nomes em **minúsculas**, sem acentos.

📖 Veja [`docs/IMAGENS.md`](docs/IMAGENS.md)



```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm start        # Servidor produção
npm run lint     # ESLint
```

## 🎨 Personalização

### Jogadores
Edite `src/data/players.ts`:
```typescript
export const TEAM_PLAYERS: Player[] = [
  { id: 1, name: "Nome", position: "POS", overall: 85, ... }
];
```

### Cores
Ajuste em `src/components/PlayerCard.tsx`:
```typescript
const getCardGradient = (overall: number) => {
  if (overall >= 90) return "from-white via-gray-100 to-gray-200";
  // ...
};
```

## 📚 Documentação

- [**Boas Práticas**](docs/BOAS-PRATICAS.md) - Convenções de código
- [**Imagens**](docs/IMAGENS.md) - Estrutura de imagens

## 🔮 Próximos Passos

- [ ] NextAuth.js (autenticação real)
- [ ] API integration (dados dinâmicos)
- [ ] Histórico de partidas
- [ ] Gráficos de performance
- [ ] Upload de imagens
- [ ] Modo dark/light
- [ ] Mobile responsivo

## 📄 Licença

Uso pessoal - **Pivetis FC** ⚽

---

**Desenvolvido com** ⚽ para o Pivetis FC
