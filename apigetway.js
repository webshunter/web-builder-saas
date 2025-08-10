
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000; // Port untuk API Gateway

app.use(bodyParser.json());

// Routing khusus untuk /landing (tanpa path tambahan)
app.use('/landing', async (req, res, next) => {
  if (req.originalUrl === '/landing' || req.originalUrl === '/landing/') {
    try {
      const response = await axios({
        method: req.method,
        url: 'http://localhost:3002/',
        data: req.body,
        headers: req.headers,
        params: req.query
      });
      return res.status(response.status).send(response.data);
    } catch (error) {
      return res.status(error.response?.status || 500).send(error.message);
    }
  }
  next();
});


// Routing dinamis ke landing service (semua path dan method)
app.use('/landing/*', async (req, res) => {
  try {
    const targetUrl = 'http://localhost:3002' + req.originalUrl.replace(/^\/landing/, '');
    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: req.headers,
      params: req.query
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

// Endpoint root
app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
