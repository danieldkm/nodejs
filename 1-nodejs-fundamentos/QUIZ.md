# Questões

- O prefixo node: na importação de um módulo serve para informar que esse módulo é interno do Node.js:
  - [x] Verdadeiro
  - [] Falso

- Para que serve o módulo http do Node.js?
  - [] Unicamente para lidar com conexão do tipo WebSocket
  - [x] Para criar e lidar com as requisições HTTP em uma porta específica
  - [] Realizar requisições HTTP para outros endpoints
  - [] Nenhuma das anteriores

- Sobre o parâmetro request é possível afirmar que: através desse objeto é possível obter todas as informações presente na requisição, como dados enviados em JSON, parâmetros de rota nomeados e não nomeados, entre outros.
  - [x] Verdadeiro
  - [] Falso

- Qual a resposta que melhor define os Headers em uma requisição HTTP?
  - [] Informações adicionais enviadas pelo cliente com uma solicitação HTTP
  - [] Informações adicionais enviadas pelo servidor com uma resposta HTTP
  - [x] Metadados da requisição HTTP que podem incluir informações adicionais da requisição e resposta
  - [] Um tipo de método de solicitação HTTP

- Qual é o Header (Cabeçalho) HTTP usado para especificar o tipo de conteúdo da resposta?
  - [] Accept
  - [] Authorization
  - [x] Content-Type
  - [] User-Agent

- O que são Streams?
  - [] Tipos de arquivos no sistema de arquivos do Node.js
  - [x] Mecanismos para ler e escrever dados de forma assíncrona, controlada e em partes
  - [] Formas de se comunicar com o banco de dados
  - [] Todas as opções acima

- O que o método .pipe faz quando é chamado em uma Stream?
  - [] Escreve os dados de uma stream em um arquivo
  - [] Pausa a leitura de uma stream
  - [] Finaliza a leitura de uma stream
  - [x] Encaminha os dados provindos de uma stream para outra

- Qual é o método usado para criar um Buffer a partir de uma string no Node.js?
  - [] new Buffer()
  - [] Buffer.alloc()
  - [] Buffer.create()
  - [x] Buffer.from()

- O que são Chunks em Streams no Node.js?
  - [x] Pedaços de dados que são lidos e escritos em uma stream de forma assíncrona
  - [] Métodos usados para controlar o fluxo de dados em uma stream
  - [] Eventos emitidos por uma stream quando os dados são lidos ou escritos
  - [] Todas as opções acima

- O que são middlewares?
  - [] Camadas adicionais de segurança em uma API REST
  - [] Métodos de autenticação em uma API REST
  - [x] Funções que interceptam e manipulam a requisição e a resposta de uma rota
  - [] Todas as opções acima