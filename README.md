# Semana OmniStack 11.0

## Anotações Backend

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
