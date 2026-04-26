# Portal Viagens

Aplicação web desenvolvida com Next.js para exibir destinos de viagem em formato de catálogo.

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Como copiar o projeto para sua máquina](#como-copiar-o-projeto-para-sua-máquina)
- [Como instalar e rodar](#como-instalar-e-rodar)
- [Scripts disponíveis](#scripts-disponíveis)
- [Rotas da aplicação](#rotas-da-aplicação)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como o projeto funciona](#como-o-projeto-funciona)
- [Como adicionar novos destinos](#como-adicionar-novos-destinos)
- [Build e execução em produção](#build-e-execução-em-produção)
- [Solução de problemas comuns](#solução-de-problemas-comuns)

## Visão geral

O Portal Viagens tem uma página inicial com destaque visual e uma área de listagem de destinos.
Cada destino possui uma página de detalhes acessada por rota dinâmica.

Principais características:

- Layout global com cabeçalho e rodapé reutilizáveis.
- Catálogo de destinos com cartões.
- Página de detalhes por destino usando parâmetro de rota.
- Estilização com CSS Modules.
- Estrutura organizada no padrão App Router do Next.js.

## Tecnologias utilizadas

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- CSS Modules
- Tailwind CSS v4 (configurado no projeto)

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (recomendado: versão LTS 20 ou superior)
- npm (normalmente já vem com o Node.js)
- Git (para clonar o repositório)

Para conferir as versões:

```bash
node -v
npm -v
git --version
```

## Como copiar o projeto para sua máquina

Você pode copiar o projeto de duas formas.

### Opção 1: Clonar com Git (recomendado)

```bash
git clone <URL_DO_REPOSITORIO>
cd portal-viagens
```

### Opção 2: Baixar ZIP

1. Baixe o arquivo ZIP do repositório na plataforma onde ele está hospedado.
2. Extraia os arquivos em uma pasta da sua preferência.
3. Abra um terminal dentro da pasta `portal-viagens`.

## Como instalar e rodar

Com a pasta do projeto aberta no terminal:

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

No projeto, os scripts principais são:

- `npm run dev`: inicia em modo desenvolvimento.
- `npm run build`: gera a build de produção.
- `npm run start`: inicia a aplicação em modo produção (após build).

## Rotas da aplicação

- `/`: página inicial com banner e botão para destinos.
- `/destinos`: lista de destinos em grid.
- `/destinos/[id]`: página dinâmica de detalhes do destino.

Exemplo:

- `/destinos/1`
- `/destinos/7`

## Estrutura de pastas

```text
portal-viagens/
├─ public/                     # imagens estáticas
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  ├─ Card/
│  │  │  ├─ Footer/
│  │  │  ├─ Grid/
│  │  │  ├─ Header/
│  │  │  └─ Title/
│  │  ├─ destinos/
│  │  │  ├─ page.tsx
│  │  │  └─ [id]/
│  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ lib/
│  │  └─ destinos.js           # fonte de dados dos destinos
│  ├─ styles/
│  │  └─ globals.css
│  └─ types/
│     └─ types.ts
├─ next.config.ts
├─ package.json
└─ tsconfig.json
```

## Como o projeto funciona

### 1) Layout global

O arquivo `src/app/layout.tsx` define a estrutura compartilhada da aplicação (`html`, `body`, `Header`, conteúdo da rota e `Footer`).

### 2) Página inicial

Em `src/app/page.tsx`, a home exibe uma área de destaque e um botão de navegação para a lista de destinos.

### 3) Lista de destinos

Em `src/app/destinos/page.tsx`, os dados são carregados de `src/lib/destinos.js` e renderizados no componente `Grid`.

### 4) Detalhes por rota dinâmica

Em `src/app/destinos/[id]/page.tsx`, o parâmetro `id` da URL é usado para localizar o destino correspondente e renderizar seus detalhes.

### 5) Tipagem

A interface `Destino` fica em `src/types/types.ts` e é utilizada para tipar props e listas.

## Como adicionar novos destinos

Para incluir um novo destino:

1. Abra `src/lib/destinos.js`.
2. Adicione um novo objeto no array `Items` com:
   - `id` (número único)
   - `name`
   - `description`
   - `image` (caminho da imagem dentro de `public`)
3. Coloque a imagem correspondente em `public/`.

Exemplo:

```js
{
	id: 15,
	name: 'Salvador',
	description: 'Centro histórico, praias e cultura baiana vibrante.',
	image: '/salvador.jpg'
}
```

## Build e execução em produção

Para gerar e testar localmente em modo de produção:

```bash
npm run build
npm run start
```

Por padrão, a aplicação em produção também sobe em `http://localhost:3000`.

## Solução de problemas comuns

### Porta 3000 já está em uso

Use outra porta no desenvolvimento:

```bash
npm run dev -- -p 3001
```

### Erro após atualizar dependências

Faça uma instalação limpa:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problemas com cache do Next

Limpe a pasta de build local:

```bash
rm -rf .next
npm run dev
```

---

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python
