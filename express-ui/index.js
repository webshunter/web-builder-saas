const express = require('express');
const path = require('path');
const { getReactAssets } = require('./utils/reactAssets');

const app = express();
const PORT = 3003;

// Serve static files from public (for EJS/tailwind, React build, etc)
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Main route: render EJS and inject React assets
app.get('/', (req, res) => {
  const assets = getReactAssets();
  console.log('Assets for /:', assets);
  res.render('index', {
    reactCss: assets.css,
    reactJs: assets.js
  });
});

// Fallback: for all other routes, serve EJS (SPA style)
app.get('*', (req, res) => {
  const assets = getReactAssets();
  console.log('Assets for *:', assets);
  res.render('index', {
    reactCss: assets.css,
    reactJs: assets.js
  });
});

app.listen(PORT, () => {
  console.log(`Express UI server running at http://localhost:${PORT}`);
});
