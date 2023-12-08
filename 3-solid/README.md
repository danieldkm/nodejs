# API NodeJS com SOLID

## SOLID

D - Dependency Inversion Principle

## Start

```bash
docker compose up -d
```

```bash
docker compose down
```

```bash
docker compose stop
```

```bash
npm run start:dev
```

```bash
npx prisma studio
```

## App

GymPass style app

### RFs (Requisitos funcionais)

funcionalidades em si, oque um usuário por exemplo poderá fazer no sistema.

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check0in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio)

Condições que são aplicadas para cada regra de negócio.
Sempre deve estar associado ao requisito funcional.

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais)

Não partem do cliente.
Requisitos técnicos.
Qual bd, estrategia de paginação, estrutura, cache, etc.

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

---

## Estrutura do projeto

### Criando projeto Node.js

Nesta aula, é apresentado como criar a estrutura inicial de um projeto, instalando os pacotes básicos necessários e estruturando os scripts de desenvolvimento e build para compilar e executar a aplicação.

Commit: Estrutura do projeto - Definindo requisitos e regras

### Usando versões exatas do NPM

Nesta aula, será explicado como configurar a opção save-exact no arquivo .npmrc, que permite fixar as versões exatas das dependências instaladas em um projeto. Isso garante a estabilidade e consistência do ambiente de desenvolvimento e produção, prevenindo problemas de compatibilidade e incompatibilidade entre as versões das dependências. Além disso, esta configuração ajuda a evitar problemas de segurança, pois impede a instalação de versões vulneráveis das dependências.

Commit: Estrutura do projeto - Usando versões exatas do NPM

### Carregando variáveis ambiente

Nessa aula é explicado como utilizar o dotenv para carregar as variáveis ambiente no projeto e o zod para fazer a validação dessas variáveis, garantindo assim que elas estejam em um formato correto e seguro.

Commit: Estrutura do projeto - Carregando variáveis ambiente

### Configurando ESLint

Essa aula ensina como configurar o ESLint, uma ferramenta que ajuda a manter a consistência do código em projetos de software, e utiliza a configuração pré-existente @rocketseat/eslint-config.

Commit: Estrutura do projeto - Configurando ESLint

### Criando aliases de importação

Nessa aula, você aprenderá como configurar aliases de importação para melhorar a organização e legibilidade do seu código. Essa configuração pode ser feita por meio dos paths do TypeScript e será explicada de forma simples e prática.

Commit: Estrutura do projeto - Criando aliases de importação

---

## Integração com Prisma ORM

### Fundamentos do Prisma ORM

Nesta aula, será explicado o que é um ORM e suas vantagens em relação aos drivers nativos e query builders. Em seguida, será apresentado o Prisma ORM, suas vantagens e como configurá-lo para ser utilizado no projeto.

Prisma: Configurando extensão no VSCode

Commit: Integração com Prisma ORM - Fundamentos do Prisma ORM

- Integração boa com typescript.
- Intuitivo com banco de dados.
- Migrations automatizados.

### Fundamentos do Docker

Essa aula é uma introdução ao Docker, explicando o que é, como funciona e quais são os benefícios de utilizá-lo para rodar serviços como PostgreSQL, Redis, Mongo e outros.

O que é o Docker?

Docker é uma plataforma de software que permite criar, implantar e executar aplicativos em contêineres virtuais. Ele permite que as aplicações e seus componentes sejam empacotados em um contêiner isolado e portátil, que pode ser executado em qualquer ambiente que tenha o Docker instalado, sem a necessidade de instalar dependências adicionais ou fazer grandes configurações. Com o Docker, é possível ter ambientes de desenvolvimento, teste e produção consistentes, seguros e escaláveis, aumentando a eficiência e a produtividade do desenvolvimento de software.

### PostgreSQL com Docker

Nessa aula, você vai aprender a utilizar comandos básicos do Docker para criar um container do Postgres, iniciá-lo, pará-lo e removê-lo. Com isso, você poderá utilizar o banco de dados dentro do container em sua aplicação local, sem precisar instalá-lo diretamente na sua máquina.

Commit: Integração com Prisma ORM - PostgreSQL com Docker

### Utilizando o Docker Compose

Essa aula ensina a criar o arquivo do Docker Compose, que é um arquivo YAML, para definir os serviços da aplicação e suas configurações, como a imagem do Postgres a ser usada, as portas a serem expostas, as variáveis ambiente, entre outros. Com isso, é possível iniciar o container do Postgres com apenas um comando, que utiliza as configurações do arquivo do Docker Compose.

**[Commit: Integração com Prisma ORM - Utilizando o Docker Compose](https://github.com/rocketseat-education/ignite-nodejs-03-api-solid-nodejs/commit/e101385c0f94c45c0a480c334fd2f5d8942d4361)**

```yml
version: '3'

services:
  api-solid-pg:
    image: bitnami/postgresql
    ports:
      - 5432:5432
    environment:
      - POSTGRESQL_USERNAME=docker
      - POSTGRESQL_PASSWORD=docker
      - POSTGRESQL_DATABASE=ignitenode03

```

### Criando schema do Prisma

Nessa aula, serão criados os models CheckIn e Gym no arquivo de schema do Prisma.

Commit: Integração com Prisma ORM - Criando schema do Prisma

### Relacionamentos entre tabelas

Nessa aula, serão explicados os conceitos básicos de relacionamentos em bancos de dados, incluindo os tipos 1 para 1, 1 para N e N para N. Em seguida, será mostrado como configurar esses relacionamentos no arquivo de schema do Prisma para as entidades User, CheckIn e Gym.

Commit: Integração com Prisma ORM - Relacionamentos entre tabelas

---

## Caso de uso e design patterns

### Criação de um usuário

Ainda de forma bem simples, será criado uma rota para a inserção de usuários.

Commit: Caso de Uso e Design Patterns - Criação de um usuário

### Controller de registro

Nesta aula, será criado um controller para receber as requisições HTTP e tratar as informações, podendo realizar ações como validar dados, buscar informações do banco de dados e enviar uma resposta ao cliente. O controller é uma parte importante da arquitetura de um servidor web, e ajuda a manter as regras de negócio separadas do restante da aplicação.

Commit: Caso de Uso e Design Patterns - Controller de registro

### Hash da senha e validação

Nesta aula, será ensinado como utilizar o pacote bcryptjs para criar um hash da senha do usuário antes de inserir no banco de dados. Também será explicado como realizar a validação do email recebido na requisição antes de inserir o usuário.

Commit: Caso de Uso e Design Patterns - Hash da senha e validação

### Caso de uso de registro

Nessa aula será explicado o conceito de Use Case Pattern e como ele pode ser aplicado em um projeto Node.js. Será criado um Use Case para a criação de usuário, onde a lógica de negócio será separada do controller.

Commit: Caso de Uso e Design Patterns - Caso de uso de registro

### Repository Pattern

Nessa aula, vamos entender o que é o Repository Pattern e seus benefícios na organização do código. Em seguida, vamos implementar o repositório de usuários utilizando o Prisma para realizar as operações no banco de dados.

Commit: Caso de Uso e Design Patterns - Repository Pattern

### Inversão de dependências

Nessa aula, você aprenderá sobre o princípio da inversão de dependência (DIP) do SOLID e como implementá-lo no use-case de registro de usuário, sobre a dependência do usersRepository.

O DIP propõe que as camadas mais altas de uma aplicação não dependam diretamente das camadas mais baixas, mas sim de uma abstração entre elas. Isso permite maior flexibilidade e facilidade de manutenção do código.

Commit: Caso de Uso e Design Patterns - Inversão de dependências

### Interface do repositório

Nessa aula, vamos criar a interface de contrato do repositório de usuários, que definirá quais métodos deverão ser implementados pela classe concreta de repositório. Essa interface será utilizada para realizar a inversão de dependência no use-case de registro de usuário, seguindo o princípio da Dependency Inversion do SOLID.

Commit: Caso de Uso e Design Patterns - Interface do repositório

### Lidando com erros do use case

Nesta aula, você aprenderá a criar um arquivo de erro personalizado para o caso de um e-mail já existente ao criar um usuário. Dessa forma, a resposta da API será mais clara e amigável para o usuário final.

Commit: Caso de Uso e Design Patterns - Lidando com erros do use case

### Handler de erros global

Nessa aula será ensinado como criar um Error Handler global na aplicação utilizando o método setErrorHandler do Fastify. Isso permitirá tratar erros de maneira centralizada, melhorando a manutenção e legibilidade do código.

Commit: Caso de Uso e Design Patterns - Handler de erros global

## Design Patterns & Testes

### Configurando Vitest

Nessa aula, você aprenderá como configurar o Vite e o plugin vite-tsconfig-paths na aplicação para permitir que o Vite entenda os paths definidos no arquivo tsconfig.json.

Commit: Design Patterns & Testes - Configurando Vitest
