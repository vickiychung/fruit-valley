const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
// const PORT = process.env.PORT || 8000; 

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/fruit/all', (request, response) => {
  fetch('https://www.fruityvice.com/api/fruit/all')
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      console.log(results)   
      response.send(results) 
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})