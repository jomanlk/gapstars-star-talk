const express = require('express');
const uuid = require('uuid');
const app = express();
const port = 3000;

let requestCounter = 0;
const maxCount = 5;
const uid = uuid.v4();

app.get('/health', (req, res) => {
  res.send('ok');
});

app.get('/', (req, res) => {
  requestCounter++;

  if (requestCounter > maxCount) {
    process.exit(1);
  }

  res.send(`
    Process UUID :  ${uid} <br>
    Requests left : ${maxCount - requestCounter + 1}
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
