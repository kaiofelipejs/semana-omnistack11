# Semana OmniStack 11.0

## Anotações

### Métodos HTTP

- GET: Buscar/listar info no backend
- POST: Criar uma info no backend
- PUT: alterar uma info no backend
- DELETE: deletar uma info no backend

### Tipos de parâmetros

- Query Params: parametros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
- Route Params: parametros utilizados para identificar recursos
- Request Body: Corpo da requisição utilizado para criar ou alterar recursos

### Banco de dados

- SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
- NoSQL: MongoDB, CouchDB, DynamoDB, etc.

#### Modos de usar:

- Driver: SELECT \* FROM users
- Query Builder: table('users).select('\*').where()

### Nossa aplicação:

##### Entidades:

- ONG
- Caso (Incident)

##### Funcionalidades:

- Login
- Logout
- Cadastro de ONG
- Cadastrar novos casos
- Deletar casos
- Listar casos esepecíficos de uma ONG
- Listar todos os casos
- Entrar em contato com a ONG

## Testes

### Por que?

- Garantir que independete da quantidade de arquivos ou tamanho do app, tudo esteja funcionando como deveria.

### TDD (Test-Driven Development)

- Criar os testes antes de desenvolver a funcionalidade.
- Bem resumido: O teste funciona como um guia/mapa para a funcionalidade nesse caso. Primeiro faz as validações e ele mostra o que ainda falta. Quando finalizar a funcionalidade, os testes passarão.

### Testes unitários

- Testa um pedaço da app de forma bem isolada. Não vai bater em outras ferramentas (Banco de dados, APIs externas...). Ele acontece dentro da nossa app.

### Testes de integração

- Vão testar os fluxos inteiros de uma funcionalidade/rota.
- Precisamos configurar um banco direcionado para testes.

## Deploy

### Backend

- Para coisas mais simples/testes: Heroku por conta do plano free (tem vídeo no canal sobre)
- Para aplicações pequenas: Digital Ocean por ser barato (tem vídeo no canal sobre)

### Frontend

- Netlify: é focado em frontend. Basicamente conecta com o repo no github e faz tudo sozinho.
