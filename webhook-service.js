const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Endpoint webhook
app.post('/webhook', (req, res) => {
  // (Opsional) Verifikasi secret dari GitHub di sini

  // Jalankan git pull di root project (current working directory)
  exec('git pull', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Git pull failed');
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    res.status(200).send('Git pull success');
  });
});

app.get('/', (req, res) => {
  res.send('Webhook service is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
