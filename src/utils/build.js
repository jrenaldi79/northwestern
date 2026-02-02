#!/usr/bin/env node
/**
 * Build Script
 * Bundles all components into a single JSX file for Claude artifact rendering
 *
 * Usage: node src/utils/build.js
 * Output: dist/ProductEngineerProposal.jsx
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(__dirname, '../../dist');
const OUTPUT_FILE = path.join(DIST_DIR, 'ProductEngineerProposal.jsx');

// Read all component files
function readComponent(name) {
  const filePath = path.join(SRC_DIR, 'components', `${name}.jsx`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Component ${name} not found`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf-8');
}

// Read content file
function readContent() {
  const filePath = path.join(SRC_DIR, 'content.js');
  if (!fs.existsSync(filePath)) {
    console.error('Error: content.js not found. Run parser.js first.');
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

// Read App component
function readApp() {
  const filePath = path.join(SRC_DIR, 'App.jsx');
  if (!fs.existsSync(filePath)) {
    console.error('Error: App.jsx not found.');
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf-8');
}

// Extract component code (remove imports/exports for inline bundling)
function extractComponentCode(source, componentName) {
  // Remove import statements
  let code = source.replace(/^import.*$/gm, '');

  // Remove export default
  code = code.replace(/export default \w+;?\s*$/gm, '');

  // Remove named exports at end
  code = code.replace(/export \{[^}]+\};?\s*$/gm, '');

  return code.trim();
}

// Build the single-file bundle
function build() {
  console.log('Building production bundle...\n');

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // Component order matters for dependencies
  const components = [
    'RichText',
    'Header',
    'StatsGrid',
    'Chart',
    'Convergence',
    'QuoteCarousel',
    'PullQuote',
    'CardGrid',
    'Credentials',
    'Timeline',
    'Testimonials',
    'Table',
    'Section',
    'Citations',
  ];

  // Read all components
  const componentCode = components.map(name => {
    console.log(`  Reading ${name}...`);
    const source = readComponent(name);
    return extractComponentCode(source, name);
  }).join('\n\n');

  // Read content
  console.log('  Reading content...');
  let content = readContent();
  // Remove the export line
  content = content.replace(/export default CONTENT;?\s*$/gm, '');

  // Read App
  console.log('  Reading App...');
  let app = readApp();
  // Remove imports and convert to inline
  // Handle single-line imports: import X from 'y';
  app = app.replace(/^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm, '');
  // Handle multi-line imports: import { ... } from 'y';
  app = app.replace(/^import\s*\{[\s\S]*?\}\s*from\s*['"][^'"]+['"];?\s*/gm, '');
  // Remove any remaining 'import X from' or standalone import lines
  app = app.replace(/^import\s+\w+\s+from\s+['"][^'"]+['"];?\s*$/gm, '');
  app = app.replace(/export default App;?\s*$/gm, '');

  // Build the final bundle
  const bundle = `/**
 * Product Engineer Proposal - Single File Bundle
 * Generated: ${new Date().toISOString()}
 *
 * This file is auto-generated. Do not edit directly.
 * To modify, edit the source files and run: node src/utils/build.js
 */

import React, { useState } from 'react';

// ============================================================================
// CONTENT DATA
// ============================================================================

${content}

// ============================================================================
// COMPONENTS
// ============================================================================

${componentCode}

// ============================================================================
// MAIN APPLICATION
// ============================================================================

${app}

// Default export for Claude artifact
export default App;
`;

  // Write the bundle
  fs.writeFileSync(OUTPUT_FILE, bundle);
  console.log(`\n✓ Bundle written to ${OUTPUT_FILE}`);
  console.log(`  Size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
}

// Run build
build();
