const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/api/fruit/all', (req, res) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
  .then(response => response.text())
  .then((body)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.send(body);
  })
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})