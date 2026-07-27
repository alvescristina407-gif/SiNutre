# SiNutre

Sistema de gerenciamento nutricional desenvolvido em React, permitindo o cadastro e gerenciamento de alimentos, autenticação de usuários via GitHub e gerenciamento de dados pessoais.

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- daisyUI v5 (plugin do Tailwind)
- @phosphor-icons/react para os ícones
- Node.js + Express
- Prisma ORM
- SQLite
- ESLint 9 (flat config) + typescript-eslint

## Estrutura

```text
src/
├── components/
│   ├── cards/      # Componentes reutilizáveis
│   ├── forms/      # Campos e formulários
│   ├── layout/     # Sidebar, Header e navegação
│   ├── modal/      # AddFoodModal, EditFoodModal
│   └── ui/         # Componentes visuais
├── constants/      # Constantes da aplicação
├── contexts/       # AuthContext
├── hooks/          # Hooks customizados
├── pages/          # Login, DietFood, ProfilePage
├── routes/         # Configuração das rotas
├── services/       # FoodService, HealthService
├── styles/         # Tailwind + tema SiNutre
├── types/          # Tipos da aplicação
├── App.tsx
└── main.tsx
```

## Funcionalidades

- Login com GitHub
- Logout
- Cadastro de alimentos
- Edição de alimentos
- Exclusão de alimentos
- Gerenciamento de dados do usuário
- Interface responsiva
- Tema personalizado SiNutre

## Scripts

```bash
npm install     # instala dependências
npm run dev     # servidor de desenvolvimento (vite)
npm run build   # build de produção
npm run lint    # ESLint em todo o projeto
npm run preview # preview do build
```

## Tema

O tema customizado `sinutre` utiliza tons quentes e acolhedores, definidos em `src/styles/theme.css`, utilizando a sintaxe `@plugin 'daisyui/theme'` do daisyUI v5.

Cor principal utilizada:

- `#C85C5C`

## Autora

- Cristina Alves

## Status do Projeto

- Finalizado em julho de 2026.