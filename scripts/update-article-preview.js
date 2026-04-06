#!/usr/bin/env node
/**
 * Generates the article HTML page for GitHub Pages deployment.
 * Same approach as update-preview.js but for the article bundle.
 *
 * Output: market-sizing/index.html
 */
const fs = require('fs');
const path = require('path');

const distFile = path.resolve(__dirname, '../dist/MarketSizingGuide.jsx');
const outputFile = path.resolve(__dirname, '../market-sizing/index.html');

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read the bundle
let bundle = fs.readFileSync(distFile, 'utf-8');

// Remove ES module syntax for UMD/browser globals
bundle = bundle.replace(/^import React.*from ['"]react['"];?\s*$/m, '');
bundle = bundle.replace(/^import.*from ['"]react['"];?\s*$/gm, '');
bundle = bundle.replace(/^export default App;?\s*$/m, '');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Market Sizing &amp; Beachhead Strategy Guide | MPD-409</title>
  <meta name="description" content="A practical guide to TAM analysis and beachhead strategy for Masters of Product Development & Design students.">
  <meta property="og:title" content="Market Sizing & Beachhead Strategy Guide">
  <meta property="og:description" content="From customer discovery to market sizing: TAM, SAM, SOM, bottom-up analysis, and beachhead selection.">
  <meta property="og:type" content="article">

  <!-- React production builds -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
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

fs.writeFileSync(outputFile, html);
const size = (fs.statSync(outputFile).size / 1024).toFixed(1);
console.log(`✓ market-sizing/index.html updated (${size} KB)`);
