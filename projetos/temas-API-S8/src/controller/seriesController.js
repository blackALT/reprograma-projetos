//passo a passo

// 1: importar o JSON de series
// 2: criar o método para buscar todas as series
// 3: exportar o método

const series = require('../model/series.json')

const getAllSeries = (req, res) => {
    res.status(200).send(series);
}

const getSeriesById = (req, res) => {
    const id = req.params.id
    res.status(200).send(series.find((serie) => serie.id == id)
)}

module.exports = {
    getAllSeries,
    getSeriesById
}