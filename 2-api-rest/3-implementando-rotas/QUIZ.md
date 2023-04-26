# QUIZ

- O que são requisitos funcionais?
  - [x] Características do sistema que devem ser atendidas para atingir seus objetivos
  - [ ] Critérios que o sistema deve seguir para suportar a tomada de decisões
  - [ ] Características de desempenho, segurança, escalabilidade, entre outras

---

- No Fastify, como configuramos rotas com um path em comum?
  - [ ] Utilizando o método route em todas as rotas que compartilham o mesmo path
  - [x] Utilizando o método register para registrar um plugin que contém todas as rotas com o mesmo path
  - [ ] Utilizando o método use para adicionar um middleware que define todas as rotas com o mesmo path
  - [ ] Utilizando o método group para agrupar rotas com o mesmo path e configurá-las de uma única vez

---

- Para que serve o termo declare module no TypeScript?
  - [ ] Para importar bibliotecas externas
  - [ ] Para criar tipos personalizados
  - [ ] Para adicionar comentários no código
  - [x] Para declarar módulos personalizados

---

- Como você pode criar tipos personalizados para representar suas tabelas e colunas no TypeScript?
  - [ ] Utilizando a biblioteca `@types/knex`
  - [x] Escrevendo manualmente as definições de tipos
  - [ ] Adicionando comentários no código
  - [ ] Nenhuma das opções acima

---

- Como podemos acessar os cookies enviados por um cliente no Fastify?
  - [ ] `request.headers.cookie`
  - [ ] `request.headers['set-cookie']`
  - [x] `request.cookies`
  - [ ] `request.headers.set-cookie`

---

- Seguindo as aulas, como podemos definir um cookie no Fastify?
  - [ ] `reply.cookie`
  - [ ] `reply.setHeader('cookie', [cookie])`
  - [x] `reply.setCookie`
  - [ ] `reply.setHeader('set-cookie', [cookie])`

---

- É possível configurar opções para os Cookies, como o tempo de expiração, ao escrever um cookie no Fastify?
  - [ ] Não, não é possível configurar opções para Cookies.
  - [ ] Sim, utilizando a função Fastify.setCookieOptions(opçõesDoCookie)
  - [ ] Não, só é possível configurar opções utilizando a biblioteca `cookies`.
  - [x] Sim, passando um objeto com as opções como terceiro parâmetro da função

---

- O que é o `preHandler` no Fastify?
  - [ ] Uma função que é executada após o tratamento de uma solicitação
  - [ ] Uma função que é executada no meio do tratamento de uma solicitação
  - [x] Uma função que é executada antes de uma rota
  - [ ] Uma função que é executada após o tratamento de uma solicitação e antes de enviar a resposta

---

- Os contextos dentro de um plugin no Fastify são isolados entre eles.
  - [x] Verdadeiro
  - [ ] Falso

---

- O que são Hooks no contexto do Fastify?
  - [ ] Apenas outro nome para rotas
  - [ ] Apenas uma forma de adicionar middleware no Fastify
  - [ ] Funções que são executadas após uma requisição ter sido processada
  - [x] Funções que são executadas de acordo ao hook configurado.