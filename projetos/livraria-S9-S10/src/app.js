const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const index = require("./routes/index");
const employees = require("./routes/employeesRoute");
const books = require("./routes/booksRoute");

mongoose.connect("mongodb://localhost:27017/livraria", {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

app.use(bodyParser.json());

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/livros", books)
app.use("/funcionarios", employees)

module.exports = app