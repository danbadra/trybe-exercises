const { error } = require('console');
const express = require('express');
const fs  = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    movies.find((movie) => movie.id === Number(req.params.id))
  } catch(error) {
    res.status(500).send({message: error.message});
  }
});

// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch(err) {
    res.status(500).send({message: err.message});
  }
})

module.exports = app;