const books = require("../model/books");
const fs = require("fs");

const getAllBooks = (req, res) => {
  console.log(req.url);
  books.find(function (err, books){
  if (err) {
      res.status(500).send({ message: err.message })
      } else {
      res.status(200).send(books)
      }
  })
}

const postBooks = (req, res) => {
      console.log(req.body);
      books.countDocuments((err, count) => {
        if (err) {
            res.status(424).send({message: err.message});
        } else {
            let book = new books(req.body);
            book.id = count +1;
            book.save(function (err) {
                if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(201).send({
                        message: "Livro cadastrado com sucesso",
                        status: "true"
                    });
                }
            });
        }
    });
  };

const deleteBook = (req, res) => {
    const id = req.params.id
    books.deleteMany({ id}, function (err, curso){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({
            message: "Livro excluido com sucesso",
            status: "true"
        })
        }
    })
  };

const getBookByCategory = (req, res) => {
    const categoria = req.params.categoria;
    books.find({ categoria }, function (err, books) {
      if (err) {
        res.status(500).send({ message: err.message })
      } else {
        res.status(200).send(books);
      }
    })
}

const getAllBooksAvailable = (req, res) => {
    console.log(req.url);
    books.find({ available: true }, function (err, books) {
      if (err) {
        res.status(500).send({ message: err.message })
      } else {
        res.status(200).send(books);
      }
    })
}

/*
1 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

2 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH.
*/

const putBooks = (req, res) => {
  const id = req.params.id
  books.updateMany({ id },{ $set: req.body },{ upsert: true },function (err) {
      if (err) { 
          res.status(500).send(err) 
      } else { 
          res.status(200).send({ 
              mensagem: "Livro atualizado com sucesso!" 
          }) 
      }
  })
}

const patchBooks = (req, res) => {
  const id = req.params.id;
  const updateBook = req.body;
  console.log(updateBook)

  try {
    const bookToUpdate = books.find((book) => book.id == id);

    Object.keys(updateBook).forEach((key) => {
      bookToUpdate[key] = updateBook[key]
    })

  fs.writeFile("./src/model/books.json", JSON.stringify(books), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Livro atualizado com sucesso!");
  });

  res.status(201).send(books);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}

module.exports = {
    getAllBooks,
    postBooks,
    deleteBook,
    getBookByCategory,
    getAllBooksAvailable,
    putBooks,
    patchBooks
}