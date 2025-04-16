# 6 - Controllers & Testes E2E

## JWT - JSON Web Token

Usuário faz login, envia e-mail/senha,, o back-end cria um token único, não modificável e STATELESS

Stateless: Não armazenado em nehuma estrutura de persistência de dados

Back-end: Quando vai criar o token ele usa uma palavra chave (string)

Palavra-chave: asdbfçiawbfçiawebfçkabwefa3h890h23p08f9bnaw9fbdiajbf9p

E-mail/senha -> header.payload.sign
