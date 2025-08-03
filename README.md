
# Dashboard - Elektos

Este projeto é uma solução desenvolvida para a**Flori Tech**. O objetivo é construir uma aplicação web responsiva, funcional e organizada utilizando **React** e boas práticas de desenvolvimento.

---

## 📌 Sobre o Projeto

O sistema consiste em um **dashboard interativo** com:

- Gráficos de interação mensal, peso e distribuição
- Cards de resumo com ícones
- Player de vídeo informativo
- Página de perfil com edição de dados e segurança
- Diálogos modais de confirmação (exclusão de conta e saída)
- Página de Central de Ajuda
- Página de Visualização de Dados
- Interface responsiva (web e mobile)
- Navegação com barra lateral (sidebar) e superior (navbar)

Todos os dados utilizados são **mockados** com o objetivo de simular a funcionalidade final para avaliação.

---

## 📋 Requisitos Atendidos

| Requisito                                                       | Atendido |
|------------------------------------------------------------------|----------|
| Utilização do framework **React**                                | ✅       |
| Estilização com **Tailwind CSS**                                 | ✅       |
| Componentes com **dados mockados**                               | ✅       |
| Layout **responsivo** (desktop e mobile)                         | ✅       |
| Implementação de **navbar e sidebar**                            | ✅       |
| Implementações adicionais de páginas e modais                    | ✅       |
| Versionamento com **Git + GitFlow**                              | ✅       |
| Repositório público no **GitHub**                                | ✅       |
| Entrega dentro do prazo de **7 dias corridos**                   | ✅       |
| Documentação clara via `README.md`                               | ✅       |

---

## 🗂️ Organização do Código

O projeto segue uma estrutura modular baseada em features:

```
src/
├── features/
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   ├── help/
│   │   └── HelpCenter.jsx
│   ├── profile/
│   │   └── Profile.jsx
│   └── userData/
│       └── UserData.jsx
├── shared/
│   ├── charts/
│   │   ├── MonthlyInteractionsChart.jsx
│   │   ├── WeightChart.jsx
│   │   └── PieChart.jsx
│   └── components/
│       ├── VideoPlayer.jsx
│       ├── Sidebar.jsx
│       ├── Navbar.jsx
├── routes/
│   └── AppRoutes.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/giuliatrevisan/site-dashboard.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:5173
```

---

## 🔁 Fluxo de Versionamento (GitFlow)

O projeto utiliza o padrão GitFlow:

- `main`: código de produção
- `develop`: linha principal de desenvolvimento
- `feature/*`: branches para funcionalidades (ex: `feature/perfil-form`)
- Commits semânticos (`feat`, `fix`, `chore`, `docs`)

---

## 📦 Tecnologias e Bibliotecas

- **React**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**
- **Recharts**
- **ReactPlayer**
- **Material UI (MUI)**
- **React Router DOM**

> As versões específicas de bibliotecas estão no `package.json`.

---

## ✅ Critérios de Avaliação (cumpridos)

- Boas práticas de programação e organização
- Boas práticas de versionamento com GitFlow
- Funcionalidade clara, com gráficos e interatividade
- Documentação clara e objetiva (`README.md`)
- Tempo de carregamento otimizado (Vite)
- Componente reativo e responsivo

---

## 📧 Entrega

O repositório foi disponibilizado de forma pública e enviado conforme solicitado para:

- gabriel@flori.tech  
- rh@flori.tech

---

## 🛡️ Aviso Legal

> Conforme a Lei 9.610/98, é proibida a reprodução total, parcial ou divulgação deste conteúdo sem prévia autorização do remetente.

---

Desenvolvido com dedicação por **Giulia Trevisan** ✨

