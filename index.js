const express = require('express');
const app = express();
const port = 3000;

let requestCounter = 0;
app.get('/', (req, res) => {
  if (requestCounter++ > 5) {
    res.status(500).send('Application crashed :(');
    return;
  }
  res.send('Hello World! : ' + Math.random());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
