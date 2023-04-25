# Banco de dados

## Estratégias de acesso ao banco

No mundo da programação é muito comum haver diversas formas para ter um mesmo resultado, então nessa aula você vai conhecer 3 formas de trabalhar com banco de dados e qual vamos utilizar nesse módulo.

Neste projeto iremos utilizar sqlite apenas para aprendizado;

- Não precisa instalar nada
- É possível utilizar a mesma para outra ferramenta de sql

Iremos utilizar também um `query builder` para executar as sql´s

## Configurando o Knex

[Knex](https://knexjs.org/)

Commit: Banco de dados - Configurando o Knex

Nada muito além, mas nada muito simples. Vamos configurar o Knex na aplicação e realizar a primeira consulta ao banco.

### Instalação

```bash
npm i knex sqlite3
```

## Criando primeira migration

Commit: Banco de dados - Criando primeira migration

Vamos aprender o que é uma migration, como ela pode ajudar em um desenvolvimento em times, além de criar e aplicar a primeira no código da aplicação.

### Criando migration

Irá dar erro pois o knex não reconhece as configs do projeto atual

```bash
npx knex migrate:make create-documents
```

### Rodando a criação migration com script

No linux:

```bash
npm run knex -- migrate:make create-documents
```

No Windows:

```bash
npm run knex:win -- migrate:make create-documents
```

## Criando tabela de transações

Commit: Banco de dados - Criando tabela de transações

Seguindo o fluxo da aula anterior, vamos implementar os métodos up e down da migration que irá criar a tabela transactions

### Rodando a migration com script

```bash
npm run knex -- migrate:latest
```

```bash
npm run knex -- migrate:rollback
```