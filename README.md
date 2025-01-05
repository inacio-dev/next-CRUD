# CRUD em Next.js

Este projeto implementa um CRUD (Create, Read, Update, Delete) utilizando **Next.js**, uma framework web moderna baseada em React para construção de aplicações web full-stack. O projeto utiliza **TypeScript** e ferramentas modernas de estilização como **TailwindCSS**.

## O que é Next.js?

**Next.js** é um framework React que permite o desenvolvimento de aplicações com renderização no lado do servidor (SSR) e no lado do cliente (CSR), suporte a rotas dinâmicas, e APIs integradas. É conhecido por sua performance e por facilitar a criação de aplicações escaláveis.

Principais características:

- **Renderização híbrida**: SSR, CSR e renderização estática.
- **Desempenho otimizado**: Suporte a código dividido e pré-renderização.
- **Roteamento dinâmico**: Baseado na estrutura de pastas.
- **Extensível**: Suporte para plugins, middleware e mais.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
next-CRUD-main/
├── public/               # Arquivos públicos e estáticos
├── src/                  # Código-fonte principal
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas do Next.js (rotas)
│   ├── services/         # Lógica para chamadas API
│   └── styles/           # Estilos globais e utilitários
├── Dockerfile            # Configuração para container Docker
├── docker-compose.yml    # Orquestração de contêineres Docker
├── tailwind.config.ts    # Configuração do TailwindCSS
├── tsconfig.json         # Configuração do TypeScript
└── next.config.ts        # Configuração do Next.js
```

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- **Node.js 18+**
- **npm**, **pnpm** ou **yarn** (gerenciador de pacotes)
- **Docker** e **Docker Compose** (opcional, mas recomendado)

## Configuração e Execução

### 1. Clone este repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd next-CRUD-main
```

### 2. Instale as dependências

Utilizando **pnpm**:

```bash
pnpm install
```

Ou **npm**:

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de exemplo:

```env
# URL da API
NEXT_PUBLIC_BACKEND_URL=

# Configuração para o React Query Dev Tools
NEXT_PUBLIC_DEBUG=dev
```

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

Ou com npm:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000).

## Usando o Docker (opcional)

Para rodar toda a aplicação com Docker:

1. **Build e inicialização dos serviços**:

   ```bash
   docker-compose up --build
   ```

2. **Acesse a aplicação**:
   Acesse [http://localhost:3000](http://localhost:3000).

## Rotas disponíveis

A aplicação inclui as seguintes rotas principais:

- **GET** `/items`: Lista todos os itens.
- **POST** `/items`: Cria um novo item.
- **GET** `/items/[id]`: Detalhes de um item pelo ID.
- **PUT** `/items/[id]`: Atualiza um item pelo ID.
- **DELETE** `/items/[id]`: Exclui um item pelo ID.

## Testes

Para executar os testes automatizados:

```bash
pnpm test
```

Ou com npm:

```bash
npm run test
```

Certifique-se de configurar as variáveis de ambiente para os testes no arquivo `.env.test.local`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Este projeto segue o [Código de Conduta](https://www.contributor-covenant.org/).
