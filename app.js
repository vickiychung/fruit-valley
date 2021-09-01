// const express = require("express");
// const app = express();

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

const axios = require("axios");

axios.get('https://www.fruityvice.com/api/fruit/all')
  .then(function (response) {
    console.log(response.data);
  })