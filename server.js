let state = {
  fewestGuesses: null
}

const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/fewest-guesses', (req, res) => res.json(state));
app.post('/fewest-guesses', jsonParser, (req, res) => {
  state.fewestGuesses = req.body.fewestGuesses;
  res.status(201).end();
})

app.listen(process.env.PORT || 3000, () => console.log(`Your app is listening on port ${process.env.PORT || 3000}`));
