// utils/reactAssets.js
// Helper untuk mencari file main.*.js dan main.*.css dari public/react
const fs = require('fs');
const path = require('path');

function getReactAssets() {
  // Gunakan process.cwd() agar path selalu dari root project (tempat server dijalankan)
  const reactDir = path.join(process.cwd(), 'public', 'react', 'static');
  let jsFile = null, cssFile = null;
  try {
    // Cari main.*.js
    const jsDir = path.join(reactDir, 'js');
    const jsList = fs.readdirSync(jsDir).filter(f => /^main\..*\.js$/.test(f));
    if (jsList.length > 0) jsFile = '/react/static/js/' + jsList[0];
    // Cari main.*.css
    const cssDir = path.join(reactDir, 'css');
    const cssList = fs.readdirSync(cssDir).filter(f => /^main\..*\.css$/.test(f));
    if (cssList.length > 0) cssFile = '/react/static/css/' + cssList[0];
  } catch (e) {
    // ignore
  }
  return { js: jsFile, css: cssFile };
}

module.exports = { getReactAssets };
