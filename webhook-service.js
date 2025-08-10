const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint webhook
app.post('/webhook', (req, res) => {
  // Jalankan service.sh saja, semua proses update dilakukan di dalamnya
  exec('git fetch --all && git reset --hard origin/main && git pull && sh ./service.sh', (err, so, se) => {
    if (err) {
      console.error(`service.sh error: ${err.message}`);
      return res.status(500).send('service.sh failed');
    }
    if (se) {
      console.error(`service.sh stderr: ${se}`);
    }
    console.log(`service.sh stdout: ${so}`);
    res.status(200).send('service.sh success');
  });
});

app.get('/', (req, res) => {
  res.send('Webhook service is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
