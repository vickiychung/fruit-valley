const express = require('express');
const fetch = require('node-fetch');
const app = express();
const path = require('path');

app.get('/api/fruit/all', (req, res) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
  .then(response => response.text())
  .then((body)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.send(body);
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})