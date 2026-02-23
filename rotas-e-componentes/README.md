# 🚦 Rotas e Componentes em React

## 🎯 Objetivo
Configurar um sistema de navegação utilizando `react-router-dom`, focando em organização de layout e rotas dinâmicas.

## ✅ Funcionalidades Implementadas
- **Navegação SPA**: Uso de `BrowserRouter`, `Routes` e `Route`.
- **Layout Compartilhado**: Header e Footer persistentes em todas as páginas usando `<Outlet />`.
- **Performance (Lazy Loading)**: Implementação de `React.lazy` e `Suspense` para carregar páginas apenas quando necessário.
- **Rotas Dinâmicas**: Captura de parâmetros via URL (ex: `/user/:id`) com o hook `useParams`.
- **Tratamento de Erros**: Página 404 customizada para rotas não encontradas.

## 🛠️ Como rodar
1. `cd rotas-e-componentes`
2. `npm install`
3. `npm start` (ou `npm run dev`)