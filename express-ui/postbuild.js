// postbuild.js
// 1. Copy build to ../public/react
// 2. Update index.html for cache busting
// 3. Remove build folder

const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const buildDir = path.join(__dirname, 'react-app', 'build');
const publicDir = path.join(__dirname, 'public', 'react');
const indexHtml = path.join(publicDir, 'index.html');

async function main() {
  // 1. Copy build to public/react (overwrite)
  await fse.remove(publicDir);
  await fse.copy(buildDir, publicDir);

  // 2. Update index.html for cache busting
  const now = Date.now();
  let html = await fse.readFile(indexHtml, 'utf8');
  html = html.replace(/(main\.[\w]+\.js)([^"]*)/g, `$1?v=build-${now}`);
  html = html.replace(/(main\.[\w]+\.css)([^"]*)/g, `$1?v=build-${now}`);
  await fse.writeFile(indexHtml, html, 'utf8');

  // 3. Remove build folder
  await fse.remove(buildDir);
  console.log('Build copied, cache busted, and build folder removed.');
}

main().catch(e => { console.error(e); process.exit(1); });
