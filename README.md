# AGC Capital — Site Institucional

Site institucional + área do cliente para gestão de apólices, vencimentos e documentos.

Stack: **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **React 18**

---

## 🚀 Como rodar localmente

### 1. Pré-requisitos
- Node.js **18.17+** (recomendado: 20.x)
- npm, yarn ou pnpm

### 2. Instalação

```bash
npm install
```

### 3. Modo desenvolvimento

```bash
npm run dev
```

Acesse: **http://localhost:3000**

### 4. Build de produção

```bash
npm run build
npm start
```

---

## 📁 Estrutura

```
agc-next/
├── app/
│   ├── globals.css         # CSS global + design tokens + utilitárias
│   ├── layout.tsx          # Layout raiz + Google Fonts (next/font)
│   └── page.tsx            # Router de views (landing/login/client)
├── components/
│   ├── landing/            # Componentes da home institucional
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── QuemSomos.tsx
│   │   ├── Ecossistema.tsx
│   │   ├── Solucoes.tsx
│   │   ├── Parceiros.tsx
│   │   ├── Consultoria.tsx
│   │   ├── Plataformas.tsx
│   │   ├── LivrosIPC.tsx
│   │   ├── ParaQuem.tsx
│   │   ├── FabioSantos.tsx
│   │   ├── CTAFinal.tsx
│   │   └── Footer.tsx
│   ├── client/             # Componentes da área do cliente
│   │   ├── ClientArea.tsx  # Shell principal (sidebar + topbar)
│   │   ├── LoginScreen.tsx
│   │   ├── Dashboard.tsx
│   │   ├── PoliciesView.tsx
│   │   ├── RemindersView.tsx
│   │   ├── CalendarView.tsx
│   │   ├── DocumentsView.tsx
│   │   ├── ProfileView.tsx
│   │   └── PolicyForm.tsx
│   └── ui/                 # Primitivas reutilizáveis
│       ├── Icon.tsx        # Biblioteca SVG inline
│       ├── Reveal.tsx      # Animação ao scroll
│       ├── SectionHeader.tsx
│       └── Field.tsx
├── lib/
│   ├── storage.ts          # Wrapper localStorage (SSR-safe)
│   ├── constants.ts        # Categorias de produto
│   └── helpers.ts          # Formatação de data, status, seed
├── types/
│   └── index.ts            # Tipos TypeScript compartilhados
├── tailwind.config.ts      # Tokens de design (cores, fonts, animações)
├── postcss.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design Tokens

**Cores** (tailwind config + CSS vars):
- `ink` `#05070C` — fundo principal
- `night` `#0A0F1C` — fundo secundário
- `deep` `#0F1729` — superfícies
- `navy` `#162038` — destaques escuros
- `gold` `#D4A437` — accent principal (+ `gold-light`, `gold-deep`)
- `paper` `#F5F1E8` — texto principal
- `mist` `#C9CFD9` — texto secundário

**Fontes** (via `next/font`, sem CDN):
- `font-serif`: Fraunces (display/headings)
- `font-sans`: Inter (corpo)
- `font-mono`: JetBrains Mono (markers/eyebrows)

---

## 🗄️ Sobre o armazenamento (demo)

Esta versão usa **localStorage** para tudo (usuário, apólices, documentos em base64).  
Funciona 100% no navegador, sem backend — ideal para validar UX antes de plugar produção.

### Limitações da demo
- Documentos: máx **4MB** por arquivo (limite prático do localStorage).
- Sem multi-dispositivo (dados ficam só no navegador local).
- Sem autenticação real (login apenas captura nome + email).

### Migração para produção

Para virar produção, **basta substituir `lib/storage.ts`** por chamadas a uma API. Sugestões:

| Necessidade | Stack sugerido |
|---|---|
| Auth real | NextAuth + provider (Google/Email) |
| Banco | Supabase / Postgres + Prisma |
| Documentos | Supabase Storage / AWS S3 |
| Deploy | Vercel (1-click) |

Todos os componentes da área do cliente **já consomem `lib/storage`** — então a migração não exige mexer em UI, só na camada de dados.

---

## ⚠️ TODO antes de publicar

1. **WhatsApp** — trocar `5511999999999` em:
   - `components/landing/CTAFinal.tsx`
   - `components/landing/Nav.tsx` (se houver)
   - `components/client/ProfileView.tsx`
   - `components/client/ClientArea.tsx` (sidebar)

2. **E-mail** — trocar `contato@agccapital.com.br` e `fabio@agccapital.com.br` (Footer, ProfileView).

3. **Imagens Unsplash** — substituir por fotos próprias da AGC (Hero, FabioSantos, CTAFinal). Configuradas em `next.config.js`.

4. **Telefone** — atualizar `+55 (11) 9 9999-9999` no Footer.

5. **Instagram** — confirmar handle `@fabiosantos.protectconstru` em FabioSantos e Footer.

6. **SEO** — revisar `metadata` em `app/layout.tsx` (title, description, og:image).

7. **Favicon** — adicionar `app/favicon.ico` e `app/apple-icon.png`.

---

## 🚢 Deploy na Vercel

```bash
# 1. Instale a CLI
npm i -g vercel

# 2. Deploy
vercel
```

Ou conecte o repositório Git em [vercel.com/new](https://vercel.com/new) — deploy automático a cada push.

---

## 📝 Licença

© AGC Capital — Todos os direitos reservados.
