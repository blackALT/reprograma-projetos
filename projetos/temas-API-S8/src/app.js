// passo a passo

// 1. Importar o expresss
// 2. Declarar a variavel app atribuindo o express
// 3. Importar a rota criada
// 4. Usar a rota criada
// 5. Exportar o app

const express = require('express')
const app = express();

const musicas = require('./routes/musicasRoutes');
const jogos = require('./routes/jogosRoutes');
const series = require('./routes/seriesRoutes');

app.use('/musicas', musicas);
app.use('/jogos', jogos);
app.use('/series', series);

app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname})
})

app.get('*', (req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname})
})

module.exports = app;