# Passo a passo

- [x] Instalando todas as dependencias utilizadas até o momento
- [x] Inicializando o projeto com ts
- [x] Configurar todos os scripts
- [x] Configurar/Criar config do knex
- [x] Mapeandos as entidades e criando as migrations
- [x] Criando/configurando a estrutura do projeto
- [x] Mapeando todas as rotas
- [x] Criando as rotas
- [x] Criando todos os casos de uso

## Comandos utilizados

### Iniciando o projeto

```bash
npm init -y
```

### Instalando as dependencias

```bash
npm i @fastify/cookie fastify dotenv knex zod
```

```bash
npm i -D sqlite3 @rocketseat/eslint-config @types/node @types/supertest eslint supertest tsup tsx typescript vitest
```

### Inicializando a config do TS

```bash
npx tsc --init
```

### Criando migration do usuário

```bash
npm run knex:win -- migrate:make create-users
```

### Criando migration da refeição

```bash
npm run knex:win -- migrate:make create-meals
```

### Rodando migrations

```bash
npm run knex:win -- migrate:latest
```


### Regras da aplicação

- [x] Deve ser possível criar um usuário
- [x] Deve ser possível identificar o usuário entre as requisições
- [x] Deve ser possível registrar uma refeição feita, com as seguintes informações:

    *As refeições devem ser relacionadas a um usuário.*

    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
- [x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [x] Deve ser possível apagar uma refeição
- [x] Deve ser possível listar todas as refeições de um usuário
- [x] Deve ser possível visualizar uma única refeição
- [ ] Deve ser possível recuperar as métricas de um usuário
    - [x] Quantidade total de refeições registradas
    - [x] Quantidade total de refeições dentro da dieta
    - [x] Quantidade total de refeições fora da dieta
    - [x] Melhor sequência por dia de refeições dentro da dieta
- [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou
