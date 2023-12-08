# QUIZ

## Estrutura do projeto

- O que é um alias de importação no TypeScript?
  - [ ] Uma forma de renomear um arquivo TypeScript durante a importação
  - [ ] Uma forma de importar apenas um conjunto específico de funções de um módulo
  - [ ] Uma forma de criar apelidos para caminhos de importação longos e complexos
  - [x] Uma forma de importar arquivos no projeto com um nome mais curto

---

- Qual o benefício de se utilizar um alias de importação no TypeScript?
  - [x] Melhor legibilidade e organização do código, através da utilização de apelidos mais descritivos para caminhos de importação complexos
  - [ ] Aumento de desempenho na importação de módulos, reduzindo o tempo de execução do programa
  - [ ] Melhor suporte a tipos complexos de dados, como arrays multidimensionais e objetos aninhados
  - [ ] Maior segurança na importação de módulos, evitando a importação de módulos maliciosos ou com problemas de segurança

---

- Para que serve o "save-exact" no arquivo .npmrc?
  - [x] Uma opção para salvar a versão exata de um pacote instalado
  - [ ] Uma opção para salvar a versão mais recente de um pacote instalado
  - [ ] Uma opção para atualizar automaticamente todas as dependências do projeto
  - [ ] Nenhuma das alternativas acima

## Integração com Prisma ORM

- O que é o Prisma Client?
  - [ ] Uma ferramenta para geração de código em Python
  - [ ] Um plugin do Visual Studio Code para integração com o Prisma
  - [x] Uma biblioteca de acesso ao banco de dados gerada automaticamente a partir do schema do Prisma
  - [ ] Um módulo Node.js para conexão com bancos de dados MySQL

---

- Qual o comando do Prisma utilizado para gerar um novo arquivo de migração?
  - [ ] prisma init
  - [ ] prisma migrate
  - [ ] prisma deploy
  - [x] prisma migrate dev

---

- Qual o comando do Prisma utilizado para atualizar o esquema do banco de dados de produção?
  - [ ] prisma init
  - [ ] prisma migrate
  - [x] prisma migrate deploy
  - [ ] prisma migrate dev

---

- O que é um contêiner Docker?
  - [ ] Uma máquina virtual
  - [ ] Um serviço web
  - [x] Uma aplicação isolada com suas dependências
  - [ ] Um ambiente de desenvolvimento integrado

---

- Como os contêineres Docker diferem das máquinas virtuais?
  - [x] Os contêineres compartilham o kernel do host, enquanto as máquinas virtuais têm um kernel próprio
  - [ ] Os contêineres usam a mesma quantidade de recursos que as máquinas virtuais
  - [ ] Os contêineres não podem ser movidos entre diferentes hosts
  - [ ] Os contêineres não precisam de um sistema operacional para funcionar

---

- Qual comando é usado para criar um novo contêiner Docker a partir de uma imagem?
  - [x] docker run
  - [ ] docker build
  - [ ] docker start
  - [ ] docker create

---

- O que é o Docker Compose?
  - [ ] Uma ferramenta para criar redes virtuais para containers Docker
  - [ ] Uma ferramenta de orquestração de containers que substitui o Docker Swarm
  - [x] Uma ferramenta de gerenciamento de containers que faz parte do Docker
  - [ ] Uma ferramenta para monitorar a performance de containers Docker

---

- Qual comando é usado para criar os containers pela primeira vez pelo Docker Compose?
  - [ ] docker-compose start
  - [x] docker-compose up
  - [ ] docker-compose run
  - [ ] docker-compose deploy

---

- Como é representado um relacionamento N para N em um banco de dados relacional?
  - [ ] Com uma chave estrangeira em cada uma das tabelas que se relacionam.
  - [ ] Com uma chave primária em cada uma das tabelas que se relacionam.
  - [x] Com uma tabela intermediária que registra as associações entre os registros nas duas tabelas.
  - [ ] Com uma única tabela que contém os registros das duas tabelas que se relacionam.

---

## Caso de uso e design patterns

- Para que servem os casos de uso?
  - [x] Para orquestrar as entidades e regras da aplicação
  - [ ] Para gerenciar controllers e views
  - [ ] Para gerenciar contêineres e injeções de dependência
  - [ ] Nenhuma das alternativas acima

---

- Quais a principais responsabilidades dos Controllers?
  - [ ] Validar dados da requisição e criar regras de negócio
  - [x] Intermediar a requisição, repassar os dados para os casos de uso e retornar dados quando necessário.
  - [ ] Criar uma requisição, validar dados, criar regra de negócio e gerenciar views.
  - [ ] Validar qual a View mais a propriedade para o retorno da requisição e validar regras da aplicação

---

- Qual é o fator de custo no Bcrypt?
  - [ ] O tamanho da senha original
  - [ ] O número de usuários registrados no sistema
  - [ ] O tamanho do hash gerado
  - [x] O número de iterações usadas na função de hash

---

- O que é um "salt" no contexto de hashing de senha?
  - [ ] Uma sequência de caracteres que representa o hash gerado
  - [ ] Um valor fixo que é usado em todos os hashes gerados pelo sistema
  - [x] Um valor aleatório adicionado à senha antes de gerar o hash
  - [ ] Um valor adicionado à senha após a geração do hash

---

- Para que serve o padrão Repository?
	- [ ] Para guardar instâncias de objetos
	- [x] Para abstrair a persistência de dados
	- [ ] Para tornar possível a aplicação do padrão Singleton
	- [ ] Para orquestrar instâncias de entidades

---

- No SOLID, para que serve a Inversão de dependência?
	- [ ] Para não dependermos de pacotes externos
	- [ ] Para orquestrar a persistência de dados e criar acoplamento
	- [x] Para evitar acoplamento e tornar a aplicação mais flexível
	- [ ] Todas as respostas acima

---

- Qual é o principal benefício da utilização de interfaces de contrato na inversão de dependência?
	- [ ] Facilitar a implementação de testes unitários
	- [ ] Tornar o código mais abstrato e difícil de entender
	- [x] Permitir a substituição de implementações sem modificar o código cliente
	- [ ] Facilitar a injeção de dependência em classes concretas

---

- Ao utilizarmos uma interface para um repositório, é correto afirmar que:
	- [ ] Nossa aplicação não dependerá de uma abstração e isso a tornará menos flexível e mais acoplada
	- [ ] Nossa aplicação dependerá de uma concreção e isso a tornará mais flexível e menos acoplada
	- [x] Nossa aplicação dependerá de uma abstração e isso a tornará mais flexível e menos acoplada
	- [ ] Nenhuma das alternativas acima.

---

- No Fastify, qual o método que nos auxilia a criarmos erros globais?
	- [ ] setGlobalError
	- [ ] setGlobalErrorHandler
	- [x] setErrorHandler
	- [ ] createErrorHandler

---

## Design Patterns & Testes
