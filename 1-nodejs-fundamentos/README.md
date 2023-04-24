# NodeJS Fundamentos

## Links

| Descrição | URL |
| --------- | --- |
| Guia: Instalando o Node e o NPM | <https://efficient-sloth-d85.notion.site/Instalando-o-Node-e-o-NPM-d162e2582d5c48499bc6703526912456> |
| Guia: Installation - HTTPie 3.2.1 (latest) docs | <https://httpie.io/docs/cli/installation> |

## 1 Criando um projeto Node.js

Commit: Iniciando com Node.js - Criando um projeto Node.js

Nesta aula prática vamos aprender a criar nosso primeiro projeto utilizando o node.

Vamos conhecer também um pouco sobre o ecossistema dessa ferramenta e nos familiarizar, aprendendo como criar e executar nossos primeiros códigos utilizando node.

```bash
npm init -y
```

## 2 Rotas de criação e listagem (Métodos HTTP)

Commit: Estrutura da aplicação - Rotas de criação e listagem (Métodos HTTP)

Nessa aula prática vamos iniciar com o conceito de rotas HTTP na nossa aplicação, entendo como funciona a comunicação via HTTP e conceitos como métodos HTTP, requisições e respostas.

## 2 Salvando usuários em memória (Headers)

Commit: Estrutura da aplicação - Salvando usuários em memória (Headers)

Nessa aula prática vamos entender o conceito de statefull para podermos adicionar usuários na memória da aplicação.

Vamos refatorar nossas rotas de listagem e criação para que possamos salvar e listar usuários.

Vamos também aprender o que são os cabeçalhos de requisições e respostas e como utilizar para definir o formato de dados que são trafegados pela aplicação.

## 2 Conhecendo HTTP status codes

Commit: Estrutura da aplicação - Conhecendo HTTP status codes

Nessa aula prática vamos aprender o que são os HTTP status codes e como podemos utilizá-los para identificar os tipos de resposta que a nossa aplicação devolve.

## 3 Entendendo Streams no Node

Commit: Streams no Node.js - Entendendo Streams no Node.js

Nessa aula prática vamos conhecer o conteito de streams dentro do Node, mostrando explempos de como essa funcionalidade pode ajudar no dia a dia em nossas aplicações.

Vamos aprender tambéms os conceitos de Readable Streams e Writable Strams.

Apenas uma correção:

Referente aos 10Mb de transferência, ao invés de Mega Bytes, quando é taxa de transferência de internet e roteadores, é Megabits.

Então é 1024 * 8 / 10, que ao invés de 102,4 segundos, seria 819,2 segundos.

Que ao invés de 1 minuto e 42 segundos, vai pra 13 minutos e 40 mais ou menos.

Agradecimentos ao Lucas Estevam Nogueira De Queiroz.

## 3 Criando stream de leitura

Commit: Streams no Node.js - Criando stream de leitura

Nessa aula prática vamos criar nossa primeira stream de leitura, utilizando as funcionalidades de stdin e stdout do Node para exemplificar o funcionamento das streams.

## 3 Stream de escrita e transformação

Commit: Streams no Node.js - Stream de escrita e transformação

Nessa aula prática vamos criar nossa primeira stream de escrita, entendendo como podemos receber os dados de uma stream de leitura e processar esses dados.

Vamos aprender também como utilizar uma stream de transformação, onde podemos recuperar os dados de uma stream de leitura e transformar esses dados. Essa stream funciona como uma função intermediária entre leitura e escrita.

### Explicação: Qual a diferença entre Writable e Transform Stream?

A primeira e principal diferença é que a WriteableStream não consegue enviar dados para outra Stream, ela só RECEBE dados e faz algo com esses dados.
Imagine a seguinte situação:

Você está criando um script de processamento de áudio, a ideia é ler um arquivo de áudio, normalizar o volume do áudio, ou seja, cuidar para não ficar nem muito alto, nem muito baixo e, após a normalização, salvar novamente em um arquivo do sistema.

Utilizando o conceito de Streams logo nos vem a cabeça poder ler/escrever esse arquivo no sistema utilizando Streams, dessa forma evitamos que o arquivo fique salvo em memória poupando recursos.

Se usarmos o `fs.createReadStream` para ler o conteúdo do arquivo, estamos criando uma Stream de leitura, ou seja, podemos ler os dados gradualmente e enviar para alguma outra Stream.

Se enviarmos esses dados para uma Stream de escrita (`WriteableStream`), essa poderá receber os dados aos poucos, normalizar o áudio normalmente, mas não conseguirá enviar os pedacinhos do áudio normalizado para outra Stream porque uma `WriteableStream` sempre é um ponto final, não consigo encaminhar nada dali para frente.

Se eu usar uma `TransformStream`, posso também ler a Stream de leitura do arquivo de áudio, normalizar o volume e reencaminhar os dados processados para fora dessa Stream, para então usar um `fs.createWriteStream` para escrever o arquivo em disco com o áudio normalizado.

## 3.1 Aplicando Streams no módulo HTTP

Na versão mais recente do Node.js, é necessário adicionar uma propriedade a mais no objeto do fetch, segue abaixo:

```js
fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half' // adicione essa linha
})
```

Commit: Streams no Node.js - Aplicando Streams no módulo HTTP

Nessa aula prática vamos aprender como podemos utilizar as Streams do node para receber dados grandes do frontend, simulando uma requisição HTTP utilizando a API de fetch.

Vamos aprender como podemos passar uma stream como body da nossa requisição e processar essa stream.

## 3.2 Consumindo uma stream completa

Commit: Streams no Node.js - Consumindo uma stream completa

Nessa aula prática vamos aprender como podemos utilizar a funcionalidade de for await para percorrer nossa stream e conseguir trabalhar com os dados completos da stream.

O for await vai garantir que nossa aplicação não execute a lógica antes de finalizar a leitura da stream.

## 3.3 Corpo da requisição em JSON (Stream & Buffers)

Commit: Streams no Node.js - Corpo da requisição em JSON (Stream & Buffers)

Nessa aula prática vamos aprender a utilizar as streams do node para podermos repassar e receber informações no formato JSON, em nossas requisições utilizando Buffer.

Vamos também aprender como podemos utilizar aplicações terceiras para realizar requisições HTTP, vamos utilizar o Insomnia.

Link para download do Insomnia: <https://insomnia.rest/download>

## 3 Entendendo Buffers no Node

Commit: Streams no Node.js - Entendendo Buffers no Node.js

Nessa aula prática vamos falar um pouco mais o que são Buffers no Node, aplicando na prática esse conceito.

É a forma mais eficiênte/performatica para escrever e ler da memoria conversando com binários (baixo nível).

## 3 Criando middleware de JSON

Commit: Streams no Node.js - Criando middleware de JSON

Nessa prática vamos conhecer o conceito de middlewares no node, separando a lógica de conversão dos dados em JSON para uma função separada, facilitando e deixando o código mais organizado.

O middleware como um interceptador, que recebe a requisição que lida com essa requisição da melhor forma para a aplicação.

## 4 Criando banco de dados JSON

Commit: Banco de dados - Criando banco de dados JSON

Como nessa aplicação não vamos trabalhar com banco de dados "reais" (PostgreSQL, MySQL, Mongo e etc), a solução mais simples para persistir os dados são arquivos, especificamente arquivos JSON.

Sendo assim, nessa aula vamos iniciar a criação de uma classe para lidar com isso.

O caracter # deixa a propriedade privada

## 4 Persistindo banco de dados

Commit: Banco de dados - Persistindo banco de dados

Dando continuidade ao desenvolvimento da classe Database, para salvar os dados nos arquivos e também fazer a leitura, vamos utilizar o módulo fs (File System) nativo do Node.js.

## 4 Criando ID único e universal (UUID)

Commit: Banco de dados - Criando ID único e universal (UUID)

Utilizando o módulo crypto do Node.js e a função randomUUID, vamos gerar um UUID (Universally unique identifier) para cada usuário criado.

## 5 Separando rotas da aplicação

Commit: Rotas da aplicação - Separando rotas da aplicação

Para organizar as rotas da aplicação e evitar a criação de diversos if, vamos organizar as rotas em um outro arquivo e refatorar a validação para qual roda deve ser executada de acordo com esse novo arquivo.

## 5 Route e Query parameters

Commit: Rotas da aplicação - Route e Query parameters

Existem diversas formas de enviarmos informações para uma API. Nessa aula vamos aprender sobre elas e iniciar o desenvolvimento da estrutura para acessarmos essas informações.

Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
Route Parameters: Identificação de recurso
Request Body: Envio de informações de um formulário (HTTPs)

## 5 Criando regex dos parâmetros

Commit: Rotas da aplicação - Criando regex dos parâmetros

Seguindo o desenvolvimento para acessar os parâmetros das rotas, vamos criar uma função que vai utilizar de uma RegEx para as futuras operações.

RegEx utilizada em aula:

`/:([a-zA-Z]+)/g`

## 5 Rotas com parâmetros (RegEx)

Commit: Rotas da aplicação - Rotas com parâmetros (Regex)

Agora que temos uma RegEx para identificar os locais que devem aceitar parâmetros, vamos construir outra RegEx para aceitar de fato esses parâmetros.

RegEx utilizada:

`(?<$1>[a-z0-9\-_]+)`

## 5 Remoção de registros

Commit: Rotas da aplicação - Remoção de registros

Agora que já concluímos a manipulação da URL por meio das RegEx, vamos obter o id de um usuário e criar a rota para remover ele.

## 5 Atualização de registros

Commit: Rotas da aplicação - Atualização de registros

Seguindo a mesma ideia das rotas POST e DELETE, vamos recuperar o id do usuário por meio de req.params e também as informações de name e email do req.body para atualizar o registro de um usuário.

## 5 Capturando query parameters

Commit: Rotas da aplicação - Capturando query parameters

Anteriormente explicamos sobre 3 diferentes formas de receber informações em uma API. Atualmente estamos tratando e acessando duas delas, Route Params e o Body.

Nessa aula vamos tratar para acessarmos os Query Params.

RegEx utilizada:

`(?<query>\\?(.*))?$`

## 5 Filtrando lista do banco de dados

Commit: Rotas da aplicação - Filtrando lista do banco de dados

Acessando os Query Params, vamos implementar um filtro na listagem de usuários.