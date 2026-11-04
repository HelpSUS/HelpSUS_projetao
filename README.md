# HelpSUS

O HelpSUS é uma aplicação web para comunicação interna em atendimentos de
emergência. O sistema possui interfaces diferentes para atendentes/socorristas
e médicos, permitindo registrar solicitações, consultar atendimentos e indicar
a disponibilidade de ambulâncias e hospitais.

Este projeto foi desenvolvido na disciplina de Projeto de Desenvolvimento de
Software da UFRPE.

## Tecnologias

- Next.js 14 com React 18 e TypeScript
- Tailwind CSS e Material Tailwind
- Axios para requisições HTTP
- JSON Server como API local de desenvolvimento

## Pré-requisitos

Instale antes de começar:

- Node.js 18 ou superior
- npm (instalado junto com o Node.js)

Confira as versões instaladas:

```bash
node --version
npm --version
```

## Instalação

Clone o repositório, entre na pasta do projeto e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd HelpSUS_projetao
npm install
```

Para uma instalação reproduzível usando exatamente as versões do
`package-lock.json`, também é possível executar:

```bash
npm ci
```

## Executando em desenvolvimento

A aplicação usa o JSON Server na porta `8080`. Abra dois terminais na pasta do
projeto.

No primeiro terminal, inicie a API local:

```bash
npm run dev:server
```

No segundo terminal, inicie o Next.js:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

O comando `dev:server` carrega os dados de [`server.json`](./server.json) e
disponibiliza a rota `http://localhost:8080/users`. Se a porta `3000` ou
`8080` estiver ocupada, encerre o processo que a utiliza antes de iniciar o
projeto.

## Usuários de teste

Os usuários abaixo são mocks de cadastros e estão no arquivo [`server.json`](./server.json):

| Perfil | CPF | Senha |
|---|---|---|
| Atendente/socorrista | `12312312312` | `senha123` |
| Médico | `12312312311` | `senha123` |

## Funcionalidades implementadas

- Tela inicial integrada ao fluxo de login.
- Autenticação local por CPF e senha, consultando a API mock do JSON Server.
- Contexto global de autenticação com usuário, token, perfil, login e logout.
- Redirecionamento da interface conforme o perfil:
  - **Atendente/socorrista:** formulário para registrar quem solicita o
    atendimento, quantidade de vítimas, situação, endereço, faixa etária e
    sexo; também exibe médicos e atendimentos pendentes.
  - **Médico:** lista de solicitações de atendimento, informações de vítimas,
    disponibilidade de ambulâncias e hospitais, além de ações para aceitar ou
    recusar um atendimento.
- Tela de cadastro com dados pessoais, seleção de perfil e CRM.
- Componentes reutilizáveis de entradas, botões, cards de atendimento,
  disponibilidade e modais de confirmação.
- Layout responsivo baseado em classes utilitárias do Tailwind CSS.

> **Estado atual:** as telas e os fluxos principais estão implementados como
> protótipo. O JSON Server fornece apenas os usuários para autenticação; os
> atendimentos, ambulâncias e hospitais exibidos nas telas ainda são dados
> estáticos, e as ações de cadastro/encaminhamento usam a interface visual sem
> persistência em uma API real.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o Next.js em modo de desenvolvimento |
| `npm run dev:server` | Inicia a API mock com JSON Server na porta 8080 |
| `npm run build` | Gera a build de produção |
| `npm run start` | Inicia a aplicação já compilada |
| `npm run lint` | Executa o ESLint |

Para testar a execução de produção:

```bash
npm run build
npm run start
```

## Estrutura principal

```text
src/
├── api/          # Funções de comunicação com a API
├── app/          # Páginas e rotas do Next.js
├── components/   # Componentes reutilizáveis da interface
├── contexts/     # Estado global de autenticação
├── lib/          # Configuração do Axios
└── types/        # Tipos TypeScript compartilhados
```

## Equipe

- Eduardo de Almeida
- Fernanda de Pinho
- Lucas Venancio
- Mel Santos
- Vinicius Diniz
