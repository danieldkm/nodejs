```bash
npm init -y
```

```bash
npm i -D typescript @types/node tsx tsup
```

```bash
npx tsc --init
```

***framework api rest***

```bash
npm i fastify
```

***variáveis de ambiente***

```bash
npm i dotenv
```

***validações***

```bash
npm i zod
```

```bash
npm i -D eslint @rocketseat/eslint-config
```

***caso não queira usar uma config ja existente***

```bash
npx eslint --init
```

***Prisma ORM CLI***

```bash
npm i -D prisma
```

```bash
npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

***gerar tipagem do schema criado para o prisma mapear a entidade ORM***

```bash
npx prisma generate
```

```bash
npm i @prisma/client
```

***bitnami olha mais para a parte de segurança***

```bash
docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest
```

```bash
docker ps -a
docker start <CONTAINER ID / NAMES>
docker stop <CONTAINER ID / NAMES>
```

***apagar container***

```bash
docker rm <CONTAINER ID / NAMES>
```

******

```bash
npx prisma migrate dev

Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": PostgreSQL database "apisolid", schema "public" at "localhost:5432"

√ Enter a name for the new migration: ... create users
Applying migration `20230503124951_create_users`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20230503124951_create_users/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.13.0 | library) to .\node_modules\@prisma\client in 110ms
```

```bash
npx prisma studio
```

```bash
docker compose up -d
```

```bash
docker compose down
```

```bash
docker compose stop
```

**depois de atualizar o schema do prisma criando tabelas**:

```bash
npx prisma migrate dev

√ Enter a name for the new migration: ... create gyms and check ins
Applying migration `20230504110302_create_gyms_and_check_ins`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20230504110302_create_gyms_and_check_ins/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.13.0 | library) to .\node_modules\@prisma\client in 95ms
```

**depois de atualizar o schema do prisma criando relacionamentos**:

```bash
npx prisma migrate dev

√ Enter a name for the new migration: ... create relationships
Applying migration `20230504111246_create_relationships`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20230504111246_create_relationships/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.13.0 | library) to .\node_modules\@prisma\client in 79m
```

**utilizado para fazer hash de senhas**:

```bash
npm i bcryptjs
```

```bash
npm i -D @types/bcryptjs
```

```js
// salto de 6 rounds, ou seja ele irá gerar um novo hash a partir do primeiro gerado.
// não é possível nas vias normais descriptar este hash
const password_hash = await hash(password, 6)
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```

```bash
```
