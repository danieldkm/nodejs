# Implementando as rotas

## Requisitos da aplicação

Commit: Implementando rotas - Requisitos da aplicação

Esta aula vai abordar dois aspectos importantes do desenvolvimento de software: requisitos funcionais e regras de negócio.

Os requisitos funcionais são as características do sistema que devem ser atendidas para atingir seus objetivos.

As regras de negócio são os critérios que o sistema deve seguir para suportar a tomada de decisões e garantir a conformidade.

### RF

- [ ] O usuário deve poder criar uma nova transação;
- [ ] O usuário deve poder obter um resumo da sua conta;
- [ ] O usuário deve poder listar todas transações que já ocorreram;
- [ ] O usuário deve poder visualizar uma transação única;

### RN

- [ ] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações o qual ele criou;

## Plugins do Fastify

Commit: Implementando rotas - Plugins do Fastify

Esta aula vai abordar os plugins do Fastify, que são funções adicionais que fornecem recursos ao framework.

Os plugins podem ser usados para adicionar funcionalidades como autenticação, log, validação de dados, gerenciamento de erros, entre outras. A aula vai te ensinar a criar e utilizar um plugin de rotas.

## Criação de transações

Commit: Implementando rotas - Criação de transações

Nessa aula, além de estruturar as rotas de transações, vamos aprender a validar os dados da requisição (request.body) com o Zod para garantir que as informações recebidas sejam válidas e após isso, fazer de fato a inserção no banco de dados.

## Tipagem no Knex

Commit: Implementando rotas - Tipagem no Knex

Esta aula ensinará como integrar o Knex com o TypeScript para ter suporte ao autocomplete de tabelas. Isso significa que, ao digitar o nome de uma tabela, o TypeScript será capaz de sugerir automaticamente as colunas existentes e as tipagens de dados corretas.

## Listagem das transações

Commit: Implementando rotas - Listagem das transações

Nessa aula seguiremos implementando as rotas para listar todas as transações e também outra que deve receber o id para trazer uma única transação.

## Resumo de transações

Commit: Implementando rotas - Resumo de transações

Finalizando a criação de rotas, vamos implementar a rota para calcular (somar) as transações e retornar o total.

## Utilizando cookies no Fastify

Commit: Implementando rotas - Utilizando cookies no Fastify

Nessa aula vamos identificar o usuário que está utilizando a aplicação ao ler e escrever informações em Cookies utilizando o Fastify.

Para isso vamos instalar o pacote

```bash
npm i @fastify/cookie
```

## Validando existência do cookie

Commit: Implementando rotas - Validando existência do cookie

Nesta aula, validaremos o cookie sessionId para identificar o usuário da aplicação.

A busca e validação serão realizadas usando uma função como preHandler (middleware)

## Configurando um hook global

Nessa aula vamos aprender a como registrar hooks no Fastify e em quais rotas eles vão impactar.

- Cuidado para não adicionar como handler global para não afetar outras rotas por exemplo.
