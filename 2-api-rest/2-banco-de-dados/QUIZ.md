# QUIZ

- Qual é a principal vantagem de usar um query builder em vez de um driver nativo no Node.js?
  - [ ] Um query builder é mais rápido e eficiente em termos de recursos do que um driver nativo
  - [x] Um query builder é mais fácil de usar e oferece uma API mais intuitiva
  - [ ] Ambas as alternativas A e B são verdadeiras

---

- Com um query builder é possível trocar de banco de dados sem modificar as querys?
  - [ ] Sim, basta mudar a configuração do banco de dados para usar outro banco de dados.
  - [ ] Não, seria necessário refazer todas as consultas para se adequarem ao novo banco de dados.
  - [x] Depende da documentação e da compatibilidade do query builder com outros bancos de dados.
  - [ ] Não, é necessário usar um ORM para mudar de banco de dados.

---

- O que são migrations?
  - [ ] São bibliotecas que ajudam a gerenciar o ciclo de vida do banco de dados
  - [ ] São ferramentas de backup e restauração de banco de dados
  - [x] São scripts que modificam o esquema do banco de dados
  - [ ] São bibliotecas de validação de dados
  - [ ] São ferramentas de otimização de banco de dados

---

- Por que é importante usar migrations ao invés de modificar diretamente o esquema do banco de dados?
  - [ ] Porque migrations ajudam a manter a integridade dos dados
  - [ ] Porque migrations permitem rollback de modificações
  - [ ] Porque migrations tornam o processo de atualização do banco de dados mais fácil
  - [ ] Porque migrations são mais rápidas que modificações diretas
  - [x] Todas as opções acima

---

- Qual é o comando do Knex para criar uma nova migration?
  - [ ] knex migrate:run
  - [x] knex migrate:make
  - [ ] knex migrate:rollback
  - [ ] knex migrate:latest

---

- Qual é o comando do Knex para rodar todas as migrations pendentes?
  - [ ] knex migrate:run
  - [ ] knex migrate:create
  - [ ] knex migrate:rollback
  - [x] knex migrate:latest

---

- Qual é o comando do Knex para reverter a última migration aplicada?
  - [ ] knex migrate:run
  - [ ] knex migrate:create
  - [x] knex migrate:rollback
  - [ ] knex migrate:latest

---

- Qual é o método do Knex para realizar uma query de inserção em uma tabela?
  - [ ] knex...select()
  - [ ] knex...from()
  - [ ] knex...update()
  - [x] knex...insert()

---

- Qual é o método do Knex para realizar uma query de seleção de todos os registros de uma tabela?
  - [ ] knex...from()
  - [ ] knex...update()
  - [x] knex...select()
  - [ ] knex...insert()

---

- O que são variáveis ambiente?
  - [ ] Variáveis que são acessíveis em todos os ambientes, independentemente do sistema operacional ou da plataforma
  - [ ] Variáveis que só existem na memória RAM do computador
  - [x] Variáveis que só existem em determinado ambiente, como o desenvolvimento ou produção
  - [ ] Variáveis que são acessíveis apenas pelo usuário logado no sistema operacional

---

- Em que situações é importante usar variáveis ambiente?
  - [ ] Quando há informações sensíveis, como senhas ou tokens, que precisam ser mantidas em segredo
  - [ ] Quando há configurações que precisam ser alteradas entre diferentes ambientes sem modificar o código-fonte
  - [ ] Apenas para informações de conexão com o banco de dados
  - [x] Alternativa A e B estão corretas

---

- Como é possível acessar uma variável ambiente em um programa escrito em JavaScript?
  - [ ] Acessando o arquivo .env diretamente
  - [x] Usando a variável global process.env
  - [ ] Modificando as configurações do registro do Windows
  - [ ] Usando o comando export na linha de comando

---

- Qual é o principal objetivo da biblioteca Zod?
  - [ ] Realizar cálculos matemáticos
  - [ ] Gerar documentação de código
  - [x] Validar tipos e formatos de dados
  - [ ] Compilar código TypeScript