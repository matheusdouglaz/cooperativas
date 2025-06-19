# Desafio Front-end - Cooperativas

Uma aplicação web simples e elegante para exibir informações de cooperativas. Desenvolvida com Next.js e TypeScript, essa aplicação consome dados de uma API REST e apresenta as informações de forma organizada e responsiva.

## Como rodar o projeto

### O que você precisa
- Node.js 18 ou superior
- npm ou yarn

### Passo a passo
```bash
# Clone o repositório
git clone [seu-repositorio]
cd desafio-front

# Instala as dependências
npm install

# Roda o projeto
npm run dev
```

Pronto! A aplicação vai estar rodando em `http://localhost:3000`

## Tecnologias que usei

- **Next.js 15** - Framework React moderno com App Router
- **TypeScript** - Para ter mais segurança no código
- **Tailwind CSS** - Para estilizar de forma rápida e consistente
- **shadcn/ui** - Componentes bonitos e prontos para usar
- **Lucide React** - Ícones modernos e leves

## O que a aplicação faz

### Funcionalidades principais

1. **Tabela de cooperativas**
   - Mostra nome, CNPJ, estado e sistema cooperativo
   - Tabela responsiva que funciona bem em qualquer tela

2. **Formatação do CNPJ**
   - Transforma 42898825000115 em 42.898.825/0001-15
   - Fica muito mais fácil de ler!

3. **Paginação**
   - 10 cooperativas por página
   - Navegação simples entre as páginas

4. **Ordenação**
   - Clica no cabeçalho para ordenar
   - Primeiro clique: A-Z, segundo: Z-A, terceiro: volta ao normal
   - Setinhas mostram qual coluna está ordenada

5. **Responsividade**
   - Funciona bem no celular, tablet e computador
   - No celular vira cards, no computador fica tabela

## Como funciona em diferentes telas

### Celular (menos de 640px)
- Cards em vez de tabela (fica mais fácil de usar)
- Paginação simplificada
- Botões maiores para tocar

### Tablet (640px - 768px)
- Você pode escolher entre tabela ou cards
- Tabela com scroll horizontal se precisar
- Cards em duas colunas

### Computador (mais de 768px)
- Sempre mostra a tabela completa
- Paginação completa
- Hover effects nos botões

## 🏗️ Como organizei o código

### Estrutura das pastas
```
src/
├── app/                    # Arquivos do Next.js
├── components/            # Componentes que criei
│   ├── ui/               # Componentes do shadcn/ui
│   ├── CooperativesTable.tsx
│   ├── CooperativeCard.tsx
│   ├── SortableHeader.tsx
│   ├── Pagination.tsx
│   └── ViewToggle.tsx
├── hooks/                # Hooks personalizados
├── lib/                  # Funções utilitárias
└── types/                # Definições do TypeScript
```

### Componentes principais

**CooperativesTable** - O componente principal que controla tudo
**CooperativeCard** - Card bonito para mostrar no celular
**SortableHeader** - Cabeçalho da tabela que pode ordenar
**Pagination** - Navegação entre páginas
**ViewToggle** - Botão para trocar entre tabela e cards

### Hooks que criei

**useCooperatives** - Busca os dados da API e controla loading/erro
**useSorting** - Gerencia a ordenação da tabela

## Por que fiz essas escolhas

### Separação de responsabilidades
Cada componente tem uma função específica. Isso deixa o código mais fácil de entender e manter.

### TypeScript
Ajuda a pegar erros antes de rodar o código. Vale a pena o tempo extra para escrever os tipos!

### Performance
Uso `useMemo` para não recalcular a ordenação desnecessariamente. Paginação client-side para ser mais rápido.

### UX/UI
Estados de loading e erro bem claros. Feedback visual para todas as ações do usuário.

### shadcn/ui
Componentes bonitos e consistentes. Não precisei inventar a roda!

### Responsividade
Pensei primeiro no celular (mobile-first). Cada tamanho de tela tem a melhor experiência possível.

## Desafios que encontrei

### Ordenação de campos aninhados
O campo `coopSystem.name` é um objeto dentro de outro. Tive que criar uma lógica especial para ordenar por ele.

### Formatação do CNPJ
Regex para transformar números em formato brasileiro. Ficou bem legal!

### Paginação com ordenação
Tinha que garantir que a ordenação continuasse funcionando ao trocar de página.

### Responsividade mobile
Tabela não funciona bem no celular. A solução foi usar cards para mobile e manter a tabela para desktop.

## Melhorias Futuras

### Funcionalidades extras
- Filtros por estado e sistema cooperativo
- Busca por nome
- Exportar para Excel
- Modal com detalhes da cooperativa

### Melhorias técnicas
- Testes automatizados
- Cache dos dados
- Lazy loading
- Error boundaries

### Acessibilidade
- Navegação por teclado
- Suporte a screen readers
- Melhor contraste

## Responsividade

A aplicação funciona bem em qualquer dispositivo:

**Celular** - Cards fáceis de tocar
**Tablet** - Você escolhe entre tabela ou cards
**Computador** - Tabela completa com todas as funcionalidades

## Sobre a API

- **URL**: `https://subscribe-api-production.up.railway.app/api/v1/coops`
- **Método**: GET
- **Autenticação**: Não precisa
- **Resposta**: Array de cooperativas em JSON

## Sobre o projeto

Este projeto foi desenvolvido como parte de um teste técnico para vaga de desenvolvedor front-end. Tentei mostrar boas práticas, código limpo e uma experiência de usuário agradável.

---

*Espero que gostem do resultado!*
