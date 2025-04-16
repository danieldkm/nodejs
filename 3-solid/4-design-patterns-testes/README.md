# Design Patterns & Testes

- Escreva testes
- Inicie o projeto com testes
- Não deve testar a conexão com BD por exemplo ou qualquer infra.

## Configurando Vitest

```sh
npm i vitest vite-tsconfig-paths -D
```

vite.config.js

```ts
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
})

```

Como não vamos testar se está salvando no banco de dados real, existe um pattern para isso, que é o in memory test database.

- Implemente a interface do repositorio ou qualquer outra infra.
- Nos testes injete este adapter

Referencia
https://martinfowler.com/bliki/InMemoryTestDatabase.html

Scripts para rodar

```json
"test": "vitest run --dir src/use-cases",
"test:watch": "vitest --dir src/use-cases",
"pretest:e2e": "run-s test:create-prisma-environment test:install-prisma-environment",
"test:e2e": "vitest run --dir src/http",
"test:e2e:watch": "vitest --dir src/http",
"test:coverage": "vitest run --coverage",
"test:ui": "vitest --ui"
```

Utilizando UI do Vitest

```sh
npm i -D @vitest/ui
```