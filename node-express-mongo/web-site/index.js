console.log("Oh Yeah!")
const express = require('express')
const database = require('./database')
const app = express()

database.initializeMongo();

app.get('/', function (req, res) {
  res.send('Hello World!')
  console.log('Loading index.js file....');
})

app.get('/testFind', function (req, res) {
  database.Kitten.find(function (err, kittens) {
    if (err) res.status(500).send({ error: err });
    console.log(kittens.name);
    res.json(kittens);
  })
})


app.get('/addData', function (req, res) {
  database.addData();
  database.Kitten.find(function (err, kittens) {
    if (err) res.status(500).send({ error: err });
    console.log('Sukses menambah data');
    res.json(kittens);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
