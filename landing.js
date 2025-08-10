const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send('Landing website service is running!');
});

app.listen(PORT, () => {
  console.log(`Landing website service listening on port ${PORT}`);
});
