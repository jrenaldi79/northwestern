#!/usr/bin/env node
/**
 * Build Pipeline for Product Engineer Proposal
 *
 * 1. Runs conversion script to generate content from markdown
 * 2. Injects content into JSX template
 * 3. Outputs final JSX file ready for artifact viewer
 *
 * Usage: node build.js
 * Output: ProductEngineerProposal.jsx
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONTENT_FILE = path.join(__dirname, 'content_generated.js');
const TEMPLATE_FILE = path.join(__dirname, 'ProposalRenderer_Enhanced.jsx.template');
const OUTPUT_FILE = path.join(__dirname, 'ProductEngineerProposal.jsx');

// Step 1: Run conversion script to generate fresh content
console.log('Step 1: Generating content from markdown...');
try {
  execSync('node convertMarkdownToContent.js', { cwd: __dirname, stdio: 'inherit' });
} catch (e) {
  console.error('Failed to run conversion script:', e.message);
  process.exit(1);
}

// Step 2: Read the generated content
console.log('\nStep 2: Reading generated content...');
const contentFile = fs.readFileSync(CONTENT_FILE, 'utf-8');

// Extract just the CONTENT object (remove export statement)
const contentMatch = contentFile.match(/const CONTENT = (\{[\s\S]*\});/);
if (!contentMatch) {
  console.error('Could not extract CONTENT object from content_generated.js');
  process.exit(1);
}

const contentObject = contentMatch[1];

// Step 3: Read the JSX template
console.log('Step 3: Reading JSX template...');
const template = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

// Step 4: Inject content into template
console.log('Step 4: Injecting content into template...');
const contentDeclaration = `const CONTENT = ${contentObject};`;
const finalJsx = template.replace('// %%CONTENT_INJECTION_POINT%%', contentDeclaration);

// Step 5: Write final output
console.log('Step 5: Writing final JSX...');
fs.writeFileSync(OUTPUT_FILE, finalJsx);

// Verify
const outputSize = fs.statSync(OUTPUT_FILE).size;
const lineCount = finalJsx.split('\n').length;

console.log('\n✓ Build complete!');
console.log(`  Output: ${OUTPUT_FILE}`);
console.log(`  Size: ${(outputSize / 1024).toFixed(1)} KB`);
console.log(`  Lines: ${lineCount}`);
console.log('\nTo view: Open ProductEngineerProposal.jsx in the artifact viewer');
