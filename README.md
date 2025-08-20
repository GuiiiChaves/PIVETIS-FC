# Pivetis FC — Next.js (TypeScript)

Interface web do time de Pro Clubs “Pivetis FC”, construída em Next.js (App Router) com TypeScript, tema verde e preto inspirado no EAFC 25, home com banner/carousel de jogadores e página de login com UI própria. O acesso ao “time” é controlado por um arquivo local de usuários permitido(a)s.

## Destaques

- Next.js (App Router) + TypeScript
- Tema EAFC 25: verde + preto
- Navbar com botão de Login estilizado
- Home com banner carousel de jogadores (fotos + seleção por nome)
- Página de Login com UI própria em src/app/login/ui
- Autenticação baseada em arquivo local (somente usuários listados conseguem entrar)
- Estrutura modular para evoluir com API e rotas protegidas

---

## Requisitos

- Node.js 18.17+ (ou 20+)
- npm, yarn ou pnpm
- Opcional (para hash de senha): bcryptjs

---

## Estrutura de Pastas (sugerida)

A sua árvore pode variar. Abaixo, uma proposta alinhada ao que você já tem:

```
pivetisfc/
├─ public/
│  ├─ Real_Madrid.png                # Logo atual (use este arquivo no header)
│  └─ players/                       # Fotos dos jogadores (ex.: /players/mid_10.png)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                  # Layout do App Router
│  │  ├─ page.tsx                    # Home (importa PlayerCarousel)
│  │  ├─ components/
│  │  │  └─ PlayerCarousel.tsx       # Componente do banner/carousel
│  │  ├─ login/
│  │  │  ├─ page.tsx                 # Página de Login
│  │  │  └─ ui/                      # UI própria do login
│  │  │     ├─ Branding.tsx
│  │  │     ├─ AuthCard.tsx
│  │  │     ├─ LoginForm.tsx
│  │  │     ├─ Input.tsx
│  │  │     ├─ PasswordInput.tsx
│  │  │     ├─ SubmitButton.tsx
│  │  │     └─ login.module.css      # Estilos do login (verde/preto)
│  │  └─ api/
│  │     └─ auth/
│  │        └─ login/
│  │           └─ route.ts           # (Opcional) Handler de login por arquivo
│  ├─ data/
│  │  └─ users.json                  # Arquivo local com usuários autorizados
│  ├─ lib/
│  │  ├─ auth.ts                     # Funções de autenticação/validação (opcional)
│  │  └─ validators.ts               # Schemas de validação (opcional)
│  └─ styles/
│     └─ theme.css                   # Variáveis de tema (ou use globals.css)
├─ .env.local                        # Segredos locais (JWT, cookie, etc.)
└─ package.json
```

Caminhos no seu Windows (referência):  
C:\Users\Usuário\Desktop\Pivetis PROJECT\pivetisfc\...

Use imports relativos no código (por exemplo, "@/app/components/PlayerCarousel" se estiver com baseUrl configurado) ou caminhos relativos normais.

---

## Configuração Inicial

1) Instale dependências
- Com npm:
```
npm install
```
- Com yarn:
```
yarn
```
- Com pnpm:
```
pnpm install
```

2) Variáveis de ambiente (.env.local)
Crie um arquivo .env.local na raiz do projeto com, por exemplo:
```
AUTH_SECRET=coloque-uma-string-aleatoria-bem-grande
COOKIE_NAME=pivetisfc_session
NODE_ENV=development
```

Gerando um segredo forte rapidamente:
```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

3) Arquivo de usuários (src/data/users.json)
Este arquivo define quem pode logar. Use senhas com hash (recomendado).

Exemplo:
```json
[
  {
    "username": "capitao",
    "passwordHash": "$2a$12$coloqueOHashGeradoAqui",
    "roles": ["admin", "player"]
  },
  {
    "username": "goleiro",
    "passwordHash": "$2a$12$coloqueOHashGeradoAqui",
    "roles": ["player"]
  }
]
```

Como gerar um hash de senha:
- Instale a lib:
```
npm i bcryptjs
```
- Gere via Node (troque "minhaSenha" pela senha real):
```
node -e "const bcrypt=require('bcryptjs'); (async()=>{ const h=await bcrypt.hash('minhaSenha',12); console.log(h); })()"
```
Copie o hash impresso e cole no users.json.

4) Imagens
- Logo: coloque em public/Real_Madrid.png (já existe).
- Fotos dos jogadores: public/players/...
- No código, referencie como:
```
<Image src="/players/nome-do-arquivo.png" ... />
```

---

## Rodando o Projeto

- Ambiente de desenvolvimento:
```
npm run dev
```
Acesse http://localhost:3000

- Build de produção:
```
npm run build
npm start
```

---

## Home (Banner Carousel)

- Componente: src/app/components/PlayerCarousel.tsx
- Importado em: src/app/page.tsx
- Tema verde/preto, responsivo e preparado para receber:
  - Array de jogadores (nome, posição, imagem, número, etc.)
  - Navegação por setas/teclado/toque
  - Lista lateral de nomes clicáveis para focar o slide

Como adicionar/editar jogadores:
- Coloque as fotos em public/players
- Atualize o array utilizado pelo PlayerCarousel (se o componente aceitar props, passe-as via page.tsx; se o componente já tiver os dados dentro, edite o array diretamente nele)

Exemplo de item (ajuste conforme seu componente):
```ts
type Player = {
  id: string;
  name: string;
  number?: number;
  position?: string;
  image: string; // "/players/fulano.png"
};
```

Dicas de UX:
- Use imagens 16:9 ou 4:5 consistentes para visual coeso.
- Comprima as imagens (tinyPNG, Squoosh) para manter o site rápido.

---

## Navbar e Cores (EAFC 25)

- Botões de login/ação no header estão na paleta verde/preto.
- Caso use CSS Modules, centralize as cores em variáveis CSS (ex.: src/styles/theme.css ou src/app/globals.css):

Exemplo de variáveis:
```css
:root {
  --ea-green: #00ff5f;   /* ajuste o tom que preferir */
  --ea-green-700: #00cc4b;
  --ea-black: #0b0d0e;
  --ea-gray-800: #15181a;
  --ea-text: #e6fcef;
}

.btn-primary {
  background: var(--ea-green);
  color: var(--ea-black);
}

.btn-primary:hover {
  background: var(--ea-green-700);
}
```

Se preferir Tailwind, configure as cores em tailwind.config.js (theme.extend.colors) e aplique classes como bg-emerald-400, text-black, hover:bg-emerald-500 etc.

---

## Página de Login (UI própria)

- Local: src/app/login/page.tsx
- UI: src/app/login/ui/*
  - Branding.tsx: logo e título “Pivetis FC”
  - AuthCard.tsx: container visual do formulário
  - LoginForm.tsx: formulário com username/password
  - Input.tsx e PasswordInput.tsx: campos com acessibilidade e feedback de erro
  - SubmitButton.tsx: botão de enviar com estado de loading
  - login.module.css: estilos com tema verde/preto

Fluxo padrão:
1) Usuário digita username + senha
2) Requisição POST para /api/auth/login
3) Se o usuário existir no arquivo e a senha bater (hash), cria-se um cookie HttpOnly (nome em COOKIE_NAME) e redireciona-se (ex.: para /)

Erros comuns:
- 401: credenciais inválidas
- 400: payload inválido
- 500: erro interno (verifique logs e se o users.json está nos conformes)

Ajustes que você pode querer:
- Mensagens de erro amigáveis no formulário
- Redirecionar para uma rota específica pós-login (ex.: /elenco, /dashboard)
- Mostrar aviso de “somente membros do time” para quem não está na lista

---

## Endpoint de Login (opcional, caso ainda não tenha)

Sugerido em src/app/api/auth/login/route.ts:

- Entrada: JSON { username: string, password: string }
- Processo: carrega src/data/users.json, encontra o usuário, compara o hash, assina um token (JWT ou um session token) com AUTH_SECRET, seta cookie HttpOnly
- Saída: 200 { ok: true } ou 401/400/500

Exemplo minimalista (resumo do fluxo, não é o código completo):
```ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";
import users from "@/data/users.json";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const found = users.find(u => u.username === username);
  if (!found) return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });

  const ok = await bcrypt.compare(password, found.passwordHash);
  if (!ok) return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });

  const token = sign({ sub: found.username, roles: found.roles }, process.env.AUTH_SECRET!, { expiresIn: "7d" });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(process.env.COOKIE_NAME || "pivetisfc_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });
  return res;
}
```

Observações:
- Ajuste import de users.json conforme o seu setup (às vezes precisa de assert ou caminho relativo).
- Em produção, use HTTPS para proteger o cookie.
- Se preferir não usar JWT, você pode assinar um token próprio (ex.: crypto) e guardar claims mínimas.

---

## Rotas Protegidas (opcional)

Se quiser restringir páginas (ex.: /elenco, /dashboard) para logados:

1) Crie middleware.ts na raiz do src (ou raiz do projeto):
```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

const COOKIE = process.env.COOKIE_NAME || "pivetisfc_session";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(COOKIE)?.value;

  // Rotas públicas
  const publicPaths = ["/", "/login", "/api/auth/login", "/_next", "/public"];
  if (publicPaths.some(p => req.nextUrl.pathname.startsWith(p))) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    verify(token, process.env.AUTH_SECRET!);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/elenco", "/dashboard", "/configuracoes/:path*"] // adicione aqui as rotas privadas
};
```

2) Ajuste o matcher para as rotas que deseja proteger.

---

## Estilo e Tema

- Verde/Preto como base:
  - Verde principal: #00ff5f (ajuste para um tom mais sóbrio se preferir)
  - Preto base: #0b0d0e
  - Cinza escuro: #15181a
  - Texto claro: #e6fcef

- Onde definir:
  - CSS global (globals.css/theme.css) com variáveis CSS, ou
  - Tailwind (theme.extend.colors) se você estiver usando Tailwind

- Aplique as variáveis nas classes dos botões da navbar e do formulário de login.

---

## Scripts úteis (exemplos)

No package.json, você pode ter (ajuste conforme seu setup):
```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  }
}
```

Para rodar o typecheck:
```
npm run typecheck
```

---

## Dicas de Performance

- Comprima imagens do players/ para reduzir o LCP
- Use next/image com sizes adequados
- Evite CSS bloqueante grande; prefira módulos por página
- Cache leve de usuário (apenas claims mínimas no cookie)

---

## Deploy

- Vercel (recomendado para Next.js) ou qualquer host Node
- Defina as variáveis AUTH_SECRET e COOKIE_NAME no ambiente de produção
- Certifique-se de que /public/players e a logo estejam presentes
- Garanta HTTPS para cookies HttpOnly “secure”

---

## Contribuição

- Padronize via lint e typecheck
- Commits pequenos e descritivos
- Abra issues para novas features (ex.: placar, estatísticas, galeria, agenda de jogos)

---

## Roadmap (ideias)

- Integração com NextAuth com provider de credenciais (reaproveitando users.json como adapter simples)
- Página “/elenco” gerada automaticamente do array do Carousel
- Painel do time (dashboard) com estatísticas
- Upload de fotos com validação
- Modo escuro/claro com toggle
- Internacionalização (pt-BR/en)

---

## Licença

Defina a licença do projeto (ex.: MIT, Apache 2.0, ou privada).

---

## Suporte

Se algo não funcionar:
- Verifique o .env.local (AUTH_SECRET e COOKIE_NAME)
- Confirme se o users.json está no formato correto e com hashes válidos
- Cheque o console/terminal por erros do route.ts
- Garanta que as imagens existem em public/players e que os paths estão corretos
