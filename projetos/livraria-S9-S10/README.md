# {reprograma} - [s9/s10] - Projeto livraria

## Estrutura do projeto

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   ├── views
│   └── index.js
├── server.js
├── package.json
```

#### Contratos entregues para o funcionamento da livraria

#### LIVROS

| Verbo        | Recurso             | Descrição                          |
| ------------ | --------------------| -----------------------------------|
| GET          | `/livros`            | Retornar todos os livros            |
| GET          | `/livros/:categoria` | Retornar apenas um livro por categoria |
| GET          | `/livros/disponiveis` | Retornar todos os livros disponíveis |
| POST         | `/livros`            | Cadastrar novo livro                |
| PUT          | `/livros/:id`        | Atualizar um livro específico       |
| DELETE       | `/livros/:id`        | Deletar uma livro específico        |
| PATCH        | `/livros/:id`  | Atualizar campo específico de um livro específico |      

#### FUNCIONÁRIOS

| Verbo        | Recurso             | Descrição                          |
| ------------ | --------------------| -----------------------------------|
| GET          | `/funcionarios`            | Retornar todos os funcionarios            |
| GET          | `/funcionarios/:categoria` | Retornar apenas um funcionario por categoria |
| POST         | `/funcionarios`            | Cadastrar novo funcionario                |
| PUT          | `/funcionarios/:id`        | Atualizar um funcionario específico       |
| DELETE       | `/funcionarios/:id`        | Deletar um funcionario específico        |
| PATCH        | `/funcionarios/:id`  | Atualizar dado específico de um funcionario específico |      
