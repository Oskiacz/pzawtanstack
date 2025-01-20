const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors);

app.get('/', (req, res) => {
  res.send('hello world')
});

app.post('/users/register', (req, res) => {
  console.log(req);
  res.statusCode(200);
  res.send("good");

})

app.listen(8080);
