const musics = require("../models/musics.json")
const fs = require("fs")

const getAllMusics = (req, res) => {
    console.log(req.url);
    res.status(200).send(musics);
}

const getMusicById = (req, res) => {
    const musicId = req.params.id
    const musicFound = musics.find(music => music.id == musicId)

    if (musicFound) {
        res.status(200).send(musicFound)
    } else {
        
        res.status(404).send({ message: "Música não encontrada" })
    }
}

const createMusic = (req, res) => {
    const { id, title, duration, launchYear, favorited, artists } = req.body
    musics.push({ id, title, duration, launchYear, favorited, artists }) 
    fs.writeFile("./src/models/musics.json", JSON.stringify(musics), 'utf8', function (err) {
        if (err) {
            res.status(500).send({ message: err })
        } else {
            console.log("A música foi gravada no arquivo com sucesso!")
            const musicFound = musics.find(music => music.id == id)
            res.status(200).send(musicFound)
        }
    })
}


const updateMusic = (req, res) => {
    const musicId = req.params.id
    const musicToUpdate = req.body

    const musicFound = musics.find(music => music.id == musicId) 
    const musicIndex = musics.indexOf(musicFound) 

    if (musicIndex >= 0) {
 
        musics.splice(musicIndex, 1, musicToUpdate) 
        fs.writeFile("./src/models/musics.json", JSON.stringify(musics), 'utf8', function (err) {
            if (err) {
                res.status(500).send({ message: err }) 
            } else {
                console.log("Arquivo de música foi atualizado com sucesso!")
                const musicUpdated = musics.find(music => music.id == musicId)
                res.status(200).send(musicUpdated)
            }
        })
    } else {
       
        res.status(404).send({ message: "Música não encontrada para ser atualizada!" })
    }
}

const deleteMusic = (req, res) => {
    try {
        const musicId = req.params.id
        const musicsFound = musics.filter(music => music.id == musicId) 

        if (musicsFound) {

            for (let position = 0; position < musicsFound.length; position++) {
                console.log(`Posição: ${position}`)
                console.log(musicsFound[position]) 

                if ( musicsFound.length == 1 || (musicsFound.length > 1 && position > 0)) { 

                    const musicIndex = musics.indexOf(musicsFound[position])
                    musics.splice(musicIndex, 1)
                }
            }
            fs.writeFile("./src/models/musics.json", JSON.stringify(musics), 'utf8', function (err) {
                if (err) {
                    res.status(500).send({ message: err })
                } else {
                    console.log("Música deletada com sucesso do arquivo!")
                    res.sendStatus(204)
                }
            })
        } else {
          
            res.status(400).send({ message: "Música não encontrada para deletar" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Erro ao deletar música" })
    }
}

const updateFavoritedStatus = (req, res) => {
    try {
        const musicId = req.params.id
        const newWatched = req.body.favorited 

        const musicToUpdate = musics.find(music => music.id == musicId) 
        const musicIndex = musics.indexOf(musicToUpdate)

        if (musicIndex >= 0) {
            musicToUpdate.favorited = newWatched 
            musics.splice(musicIndex, 1, musicToUpdate) 
            fs.writeFile("./src/models/musics.json", JSON.stringify(musics), 'utf8', function (err) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    console.log("Arquivo de música foi atualizado com sucesso!")
                    const musicUpdated = musics.find(music => music.id == musicId)
                    res.status(200).send(musicUpdated)
                }
            })
        } else {
            
            res.status(400).send({ message: "Música não encontrada para atualizar o status de asssistido" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Erro na api")
    }

}

// Contratos para ir ao infinito e além

const getMusicByArtist = (req, res) => {
    console.log("Minha query string:")
    console.log(req.query)
    const artist = req.query.artists
    if (artist) { 
        const musicByArtist = musics.filter(music => music.artists.includes(artist))
        res.status(200).send(musicByArtist)
    } else { 
        res.status(200).send(musics)
    }
}

const getMusicsAfter2010 = (req, res) => {
    console.log("Minha query string:")
    console.log(req.query)
    const year = req.query.launchYear
    if (year) { 
        const musicByYear = musics.filter(music => music.launchYear.includes(year))
        res.status(200).send(musicByYear)
    } else { 
        res.status(200).send(musics)
    }
}

module.exports = {
    getAllMusics,
    getMusicById,
    createMusic,
    updateMusic,
    deleteMusic,
    updateFavoritedStatus,
    getMusicByArtist,
    getMusicsAfter2010
}