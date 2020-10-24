//passo a passo

// 1: importar o JSON de jogos
// 2: criar o método para buscar todas os jogos
// 3: exportar o método

const jogos = require('../model/jogos.json')

const getAllJogos = (req, res) => {
    res.status(200).send(jogos)
}

const getJogosById = (req, res) => {
    console.log(req.url);
    const id = req.params.id;

    res.status(200).send(jogos.find((jogo) => jogo.id == id)
)}

module.exports = {
    getAllJogos,
    getJogosById
}