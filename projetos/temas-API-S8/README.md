# {reprograma} projeto Jogos, Músicas e Séries

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

#### Jogos

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

#### Contratos entregues

| Recurso      | Descrição                         |
| ------------ | --------------------------------- |
| `/jogos`     | Retorna todos os jogos            |
| `/jogos/:id` | Retorna apenas um jogo específico |

---

### Músicas

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

#### Contratos entregues

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |

#### Opcionais entregues

| Recurso         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |

| Recurso                   | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album |
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

---

### Séries

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

#### Contratos entregues

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |