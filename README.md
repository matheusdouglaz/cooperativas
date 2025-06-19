# Desafio Front-end - Cooperativas

Aplicação web desenvolvida em Next.js para exibir informações de cooperativas obtidas de uma API REST.

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
git clone [seu-repositorio]
cd desafio-front
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones

## 📋 Funcionalidades Implementadas

### ✅ Funcionalidades Obrigatórias

1. **📋 Exibição em Tabela**
   - Tabela responsiva utilizando componentes do shadcn/ui
   - Colunas: Nome, CNPJ, Estado, Sistema Cooperativo

2. **🎭 Formatação de Dados**
   - CNPJ formatado no padrão XX.XXX.XXX/XXXX-XX
   - Exemplo: 42898825000115 → 42.898.825/0001-15

3. **📄 Paginação**
   - 10 registros por página
   - Componente de paginação personalizado
   - Informações sobre página atual e total de páginas

4. **🔄 Ordenação**
   - Ordenação clicável em todos os headers
   - Ciclo: crescente → decrescente → sem ordenação
   - Indicadores visuais (setas) para estado da ordenação

5. **🎨 Interface e UX**
   - Design limpo e profissional
   - Responsividade para diferentes tamanhos de tela
   - Estados de loading durante carregamento
   - Tratamento de erros da API
   - Indicadores visuais para interações

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas
```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── CooperativesTable.tsx
│   ├── SortableHeader.tsx
│   └── Pagination.tsx
├── hooks/                # Hooks personalizados
│   ├── useCooperatives.ts
│   └── useSorting.ts
├── lib/                  # Utilitários
│   ├── utils.ts          # Utilitários do shadcn/ui
│   └── formatters.ts     # Formatadores de dados
└── types/                # Definições TypeScript
    └── cooperative.ts
```

### Componentes Principais

#### `CooperativesTable`
Componente principal que gerencia a exibição da tabela, estados de loading/erro e integração com hooks.

#### `SortableHeader`
Componente para cabeçalhos da tabela com funcionalidade de ordenação e indicadores visuais.

#### `Pagination`
Componente de paginação personalizado com navegação intuitiva.

### Hooks Personalizados

#### `useCooperatives`
Gerencia o estado dos dados das cooperativas, incluindo:
- Fetch de dados da API
- Estados de loading e erro
- Paginação

#### `useSorting`
Gerencia a lógica de ordenação:
- Estado da ordenação atual
- Função de ordenação
- Ciclo de ordenação (asc → desc → null)

## 🎯 Decisões Técnicas

### 1. **Separação de Responsabilidades**
- Hooks personalizados para lógica de negócio
- Componentes reutilizáveis e focados
- Utilitários separados para formatação

### 2. **TypeScript**
- Tipagem completa para todas as interfaces
- Tipos específicos para cooperativas e sistemas
- Melhor DX e prevenção de erros

### 3. **Performance**
- `useMemo` para ordenação otimizada
- Paginação client-side para melhor UX
- Componentes otimizados com React.memo quando necessário

### 4. **UX/UI**
- Estados de loading e erro bem definidos
- Feedback visual para interações
- Design responsivo e acessível

### 5. **shadcn/ui**
- Componentes consistentes e acessíveis
- Customização via CSS variables
- Integração perfeita com Tailwind CSS

## 🔧 Desafios Encontrados

### 1. **Ordenação de Campos Aninhados**
- Desafio: Ordenar por `coopSystem.name`
- Solução: Lógica específica no hook `useSorting`

### 2. **Formatação de CNPJ**
- Desafio: Aplicar máscara XX.XXX.XXX/XXXX-XX
- Solução: Função utilitária com regex

### 3. **Paginação com Ordenação**
- Desafio: Manter ordenação ao navegar entre páginas
- Solução: Ordenação aplicada antes da paginação

## 🚀 Melhorias Futuras

### Funcionalidades Adicionais
1. **Filtros**
   - Filtro por estado
   - Filtro por sistema cooperativo
   - Busca por nome

2. **Exportação**
   - Exportar dados para CSV/Excel
   - Impressão da tabela

3. **Detalhes**
   - Modal com detalhes da cooperativa
   - Histórico de alterações

4. **Performance**
   - Virtualização para grandes datasets
   - Cache de dados com React Query
   - Lazy loading de componentes

### Melhorias Técnicas
1. **Testes**
   - Testes unitários com Jest
   - Testes de integração
   - Testes E2E com Playwright

2. **Monitoramento**
   - Error boundary
   - Analytics de uso
   - Performance monitoring

3. **Acessibilidade**
   - Navegação por teclado
   - Screen reader support
   - Contraste melhorado

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona bem em:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 API

- **Endpoint**: `https://subscribe-api-production.up.railway.app/api/v1/coops`
- **Método**: GET
- **Autenticação**: Não necessária
- **Formato**: JSON

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico.
