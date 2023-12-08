# Prisma: Configurando extensão no VSCode

1. Instale a extensão [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) no seu Visual Studio Code.
2. Abra a Paleta de Comandos:
    1. Se estiver no Windows ou Linux: `CTRL + SHIFT + P`
    2. Se estiver no macOS: `CMD + SHIFT + P`
3. Abra as configurações em JSON buscando por:
    1. Se o seu VSCode estiver em português: `Abrir as Configurações do usuário (JSON)`
    2. Se o seu VSCode estiver em inglês: `Open User Settings (JSON)`
4. Adicione dentro do JSON o código abaixo:

```jsx
"[prisma]": {
  "editor.defaultFormatter": "Prisma.prisma",
  "editor.formatOnSave": true
},
```

```bash
npx prisma studio
```
