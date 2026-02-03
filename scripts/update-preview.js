#!/usr/bin/env node
/**
 * Updates preview.html (development) and dist/index.html (production)
 *
 * - preview.html: Development React builds, for local debugging
 * - dist/index.html: Production React builds, for GitHub Pages deployment
 */
const fs = require('fs');
const path = require('path');

const distFile = path.resolve(__dirname, '../dist/ProductEngineerProposal.jsx');
const previewFile = path.resolve(__dirname, '../preview.html');
const productionFile = path.resolve(__dirname, '../dist/index.html');

// Read the bundle
let bundle = fs.readFileSync(distFile, 'utf-8');

// Remove the ES module import line - HTML files use UMD globals
bundle = bundle.replace(/^import React.*from ['"]react['"];?\s*$/m, '');
bundle = bundle.replace(/^import.*from ['"]react['"];?\s*$/gm, '');

// Remove the export default line
bundle = bundle.replace(/^export default App;?\s*$/m, '');

// Generate HTML with specified React builds
function generateHTML({ title, reactMode }) {
  const isProd = reactMode === 'production';
  const reactSuffix = isProd ? 'production.min' : 'development';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="The Product Engineer - Preparing McCormick students for the convergence of design, product, and engineering in the age of AI.">
  <meta property="og:title" content="The Product Engineer">
  <meta property="og:description" content="Preparing McCormick students for the convergence of design, product, and engineering in the age of AI.">
  <meta property="og:type" content="article">

  <!-- React ${reactMode} builds -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.${reactSuffix}.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.${reactSuffix}.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect, useRef, useCallback, useMemo } = React;

${bundle}

    // Render the app
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>`;
}

// Write development preview
const devHTML = generateHTML({
  title: 'Product Engineer Proposal - Preview (Dev)',
  reactMode: 'development'
});
fs.writeFileSync(previewFile, devHTML);
console.log('✓ preview.html updated (development build)');

// Write production build for GitHub Pages
const prodHTML = generateHTML({
  title: 'The Product Engineer | John Renaldi',
  reactMode: 'production'
});
fs.writeFileSync(productionFile, prodHTML);
const prodSize = (fs.statSync(productionFile).size / 1024).toFixed(1);
console.log(`✓ dist/index.html updated (production build, ${prodSize} KB)`);
