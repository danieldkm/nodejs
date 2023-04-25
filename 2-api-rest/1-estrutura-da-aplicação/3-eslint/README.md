# Configurando ESLint

Commit: Estrutura da aplicação - Configurando ESLint

Ainda configurando o projeto, vamos adicionar o ESLint para forçar uma padronização no projeto.

- ecma script lint
- Padronizar e automatizar

## Configurando

```bash
npm i -D eslint
```

### Padrão da RocketSeat

```bash
npm i -D @rocketseat/eslint-config
```

### VS code - habilitar o auto format

Adicione no setting json.

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  // "source.organizeImports": true
},
```