//passo a passo

// 1: importar o JSON de musicas
// 2: criar o método para buscar todas as músicas
// 3: exportar o método

//const artistas = require('../model/artistas.json');
const musicas = require('../model/musicas.json');

// Musicas
const getAllMusicas = (req, res) => {
    console.log(req.url)
    res.status(200).send(musicas);
}

const getMusicasById = (req,res) => {
    console.log(req.url)
    const id = req.params.id;

    res.status(200).send(musicas.find((musica) => musica.id == id))
}

// Artistas
const getAllArtistas = (req, res) => {
   console.log(req.url)
   const artistas = musicas.map(musica => musica.artista)
   res.status(200).send(artistas)
}

const getByArtista = (req,res) => {
    const artista = req.params.artista;
 
    res.status(200).send(musicas.filter((musica) => musica.artista == artista))
   
}

// Albuns

const getAllAlbuns = (req, res) => {
    console.log(req.url)
    const albuns = musicas.map(musica => musica.album)
    res.status(200).send(albuns)
 }
 
 const getByAlbum = (req,res) => {
     const album = req.params.album;
  
     res.status(200).send(musicas.filter((musica) => musica.album == album))    
 }

module.exports = {
    getAllMusicas,
    getMusicasById,
    getAllArtistas,
    getByArtista,
    getAllAlbuns,
    getByAlbum
}