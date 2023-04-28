# Preparando app p/ deploy

## Preparando para deploy

Commit: Preparando app p/ deploy - Preparando para deploy

Nessa aula, você vai aprender sobre o que é deploy e como preparar a aplicação para ir ao ar. Abordaremos configurações importantes como a de build e o uso de tsup.

### TSUP

É uma ferramenta para trabalhar com TS, para fazer o processo de build

Para isso vamos instalar o pacote

```bash
npm i -D tsup
```

Script para buildar

```bash
tsup <src path> --out-dir <build path>
```

## Deploy do app no Render

[Render](https://render.com/)

Commit: Preparando app p/ deploy - Deploy do app no Render

Nessa aula você aprenderá como configurar a aplicação para suportar dois bancos de dados: SQLite (para desenvolvimento) e PostgreSQL (para produção). Além disso, você verá como fazer o deploy na plataforma Render, configurando o banco de dados PostgreSQL e variáveis ambiente.

Obs.: Na plataforma Render, a variável ambiente para identificar a porta da aplicação precisa ser exatamente PORT e não pode ser definida nas configurações do serviço, pois é a própria plataforma que adiciona esse valor (não é visível).

Build Command: npm install && npm run knex -- migrate:latest && npm run build
Start Command: node build/server.js

1. Criar banco de dados PostgreSQL
  - 90 dias para teste

Para isso no projeto vamos instalar o pacote

```bash
npm i pg
```

2. Criar webservice para a api
  - setar o projeto no github
  - adicionar o root directory

## Deploy do app no fly

[Fly](https://fly.io/)

## Deploy do app no railway

[Railway](https://railway.app/)
