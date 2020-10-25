# {reprograma} - [s11] - Projeto: API de Músicas

### Estrutura do projeto

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

```
* Esqueleto do projeto
* Models
* Controllers
* Rotas
* App.js
* Server.js
```

#### Músicas

```json
{
    "id": 1,
    "title": "Evidências",
    "duration": "04:39",
    "launchYear": "1990",
    "favorited" : true,
    "artists": ["Chitãozinho","Chororó"]
}
```

#### Contratos entregues

| Verbo        | Recurso                  | Descrição                              |
| ------------ | ------------------------ | -------------------------------------- |
| GET          | `/musics`                | Retornar todas as músicas              |
| GET          | `/musics/:id`            | Retornar apenas uma música específica  |
| POST         | `/musics`                | Cadastrar nova música                  |
| PUT          | `/musics/:id`            | Atualizar uma música específica        |
| DELETE       | `/musics/:id`            | Deletar uma música específica          |
| PATCH        | `/musics/:id/favorited`  | Favoritar/desfavoritar música          |

---

#### Opcionais entregues

- [ ] Criar uma rota com filtro, para mostrar somente músicas da Sandy.
- [ ] Mostrar somente músicas mais novas, lançadas depois de 2010.

| Verbo        | Recurso                  | Descrição                              |
| ------------ | ------------------------ | -------------------------------------- |
| GET          | `/musics/sandy`          | Retornar somente músicas da Sandy      |
| GET          | `/musics/decade`         | Retornar apenas músicas lançadas depois de 2010  |

#### Extras entregues

- [ ] Rota para mostrar apenas músicas marcadas como favoritas.


| Verbo        | Recurso                  | Descrição                              |
| ------------ | ------------------------ | -------------------------------------- |
| GET          | `/musics/favorite`       | Retornar somente músicas favoritas     |

