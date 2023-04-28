# Testes automatizados

## Entendo testes automatizados

Nesta aula, vamos explorar o mundo dos testes automatizados.

Vamos aprender sobre a importância de realizar testes automatizados na sua aplicação, incluindo os conceitos de testes unitários, testes de integração e testes e2e, assim como a importância da pirâmide de testes para se ter uma estratégia de testes sólida e eficiente.

Uma breve explicação:

Testes unitários são testes que validam o comportamento de uma única unidade de código, como uma função ou método. Eles são úteis para garantir que cada parte da aplicação esteja funcionando corretamente, sem depender de outras partes.

Testes de integração são testes que validam a integração entre várias partes da aplicação, como a integração entre a camada de banco de dados e a camada de serviço. Eles são importantes para garantir que a aplicação esteja funcionando corretamente como um todo.

Testes e2e (end-to-end) são testes que validam o comportamento da aplicação como um todo, simulando a interação do usuário com a aplicação. Eles são importantes para garantir que a aplicação esteja funcionando corretamente em todos os níveis, desde a camada de interface até a camada de banco de dados.

A pirâmide de testes é uma estratégia que se baseia em ter mais testes unitários e menos testes de integração e e2e, pois testes unitários são mais rápidos e fáceis de escrever e manter do que outros tipos de testes.

## Criando primeiro teste

Commit: Testes automatizados - Criando primeiro teste

Esta aula ensina sobre como criar o primeiro arquivo de testes utilizando o vitest, uma ferramenta para escrita e execução de testes automatizados. A aula irá cobrir desde o motivo do uso dessa ferramenta até a instalação, escrita e execução do primeiro teste.

Para isso vamos instalar o pacote

```bash
npm i -D vitest
```

## Testando criação de transação

Commit: Testes automatizados - Testando criação de transação

Esta aula ensina como criar o primeiro teste e2e para testar a rota de criação de transação, utilizando o pacote supertest. Além disso, a aula explica o uso das funções beforeAll, beforeEach, afterAll e afterEach para realizar configurações e limpezas antes e depois dos testes e2e.

Uma breve explicação sobre esses métodos:

beforeAll

É uma função que é executada uma única vez antes de todos os testes. É útil para inicializar recursos compartilhados que serão utilizados pelos testes.

beforeEach

É uma função que é executada antes de cada teste. É útil para preparar o ambiente antes da execução de cada teste, por exemplo, inicializar variáveis ou limpar o banco de dados.

afterAll

É uma função que é executada uma única vez após todos os testes terem sido executados. É útil para limpar recursos compartilhados ou fechar conexões abertas.

afterEach

É uma função que é executada após cada teste. É útil para limpar o ambiente depois da execução de cada teste, por exemplo, limpar variáveis ou fechar conexões com o banco de dados.

Para isso vamos instalar o pacote

```bash
npm i -D @types/supertest supertest
```

## Categorizando os testes

Commit: Testes automatizados - Categorizando os testes

Esta aula irá explicar sobre a organização de testes utilizando a função describe.

A função describe permite agrupar testes relacionados em blocos para melhorar a legibilidade e manutenção dos códigos de testes. Além disso, é possível utilizar a função describe para criar estruturas de testes hierárquicas e repetir o setup em blocos de testes comuns.

Também é explicado sobre o uso da função it para criar cada teste, descrevendo em inglês seguindo o padrão "it should be able".

## Testando listagem de transações

Commit: Testes automatizados - Testando listagem de transações

Nessa aula é explicado como criar um teste e2e para listagem de transações.

É ensinado como recuperar o cookie de uma resposta do supertest e utilizá-lo em outra requisição do supertest, além de validar o corpo da listagem usando as funções expect.toEqual e expect.objectContaining.

## Configurando banco de testes

Commit: Testes automatizados - Configurando banco de testes

Nesta aula, você aprenderá como se deve lidar com o banco de dados durante os testes e2e e como configurar esse processo, utilizando variáveis ambiente de testes e a função beforeEach.

## Finalizando testes da aplicação

Commit: Testes automatizados - Finalizando testes da aplicação

Nessa aula, implementaremos os testes das rotas restantes e concluindo os testes de todas as rotas.