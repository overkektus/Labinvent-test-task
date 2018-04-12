const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chalk = require('chalk');
const Network = require('./models/network.js');
const Settings = require('./models/settings.js');

const mockNets = require('./mock.json');

const port = 3010;

const app = express();
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../build')));

// connection to DB
mongoose.connect('mongodb://localhost:27017/labinvent-test-task', (err, db) => {
  if(err) return console.log(chalk.bgRed(`Error: failed connect to db (${err.message})`));
  console.log(chalk.bgCyan(`Success connected to MongoDB`))  
});

// save mock networks into DB
Network.remove({}, err => {
  if(err) console.log(chalk.red(err.message));
});
const networks = mockNets.map(el => new Network(el));
networks.forEach(el => el.save());


app.get('/state', (req, res) => {
  Settings.find((err, result) => {
    if(err) console.log(chalk.red(err.message));

    if(result.length === 0) res.send({});
    else {
      const state = Object.assign({}, result[0]._doc);
      delete state._id;
      res.send(state);
    }
  })
});

app.post('/state', (req, res) => {
  console.log(req.body);
  const settings = new Settings(req.body)
  mongoose.connection.collections['settings'].drop((err) => {
    settings.save((err) => {
      if(err) console.log(chalk.red(err.message));
  
      console.log(chalk.green('settings successfully saved'));
      res.sendStatus(200);
    });
  });
});

app.get('/networks', (req, res) => {
  Network.find((err, result) => {
    if(err) console.log(chalk.red(err.message));

    const favorite = result.filter(el => el.favorite === true);
    favorite.sort((a, b) => b.strength - a.strength );
    const noFavorite = result.filter(el => el.favorite === false);
    noFavorite.sort((a, b) => b.strength - a.strength );
    const networks = favorite.concat(noFavorite);
    res.send(networks.map(el => el.name));
  })
});

app.listen(port, () => {
  console.log(chalk.bgGreen(`server up on port: ${port}`));
});