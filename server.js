let state = {
  fewestGuesses: null
}

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

app.get('/fewest-guesses', (req, res) => res.json(state.fewestGuesses));
app.post('/fewest-guesses', jsonParser, (req, res) => {
  state.fewestGuesses = req.body.fewestGuesses;
  res.status(201).end();
})

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
