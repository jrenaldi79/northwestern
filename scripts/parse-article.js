#!/usr/bin/env node
/**
 * Article Parser
 * Converts standard markdown into structured CONTENT object for ArticleApp.
 *
 * Input:  articles/market-sizing/content.md + diagrams/*.svg
 * Output: src/article-content.js
 */
const fs = require('fs');
const path = require('path');

const ARTICLE_DIR = path.resolve(__dirname, '../articles/market-sizing');
const DIAGRAMS_DIR = path.join(ARTICLE_DIR, 'diagrams');
const OUTPUT_FILE = path.resolve(__dirname, '../src/article-content.js');
const MD_FILE = path.join(ARTICLE_DIR, 'content.md');

// Generate a short nav label from a section title
function shortLabel(title) {
  // Remove "Part N:" prefix
  const cleaned = title.replace(/^Part\s+\d+:\s*/, '').trim();
  // Map of overrides for better nav labels
  const overrides = {
    'How This Guide Fits Into Your Capstone Journey': 'Intro',
    'Why Market Sizing Matters (And Why Focus Is Everything)': 'Why It Matters',
    'Market Segmentation, Finding Your Tribe': 'Segmentation',
    'The TAM Triangle, TAM, SAM, and SOM': 'TAM Triangle',
    'Top-Down vs. Bottom-Up Analysis, Why We Strongly Prefer Bottom-Up': 'Top vs Bottom',
    'The Bottom-Up Method, How to Actually Size Your Market': 'Bottom-Up',
    'Jiobit, A Real-World Bottom-Up Example': 'Jiobit Example',
    'Selecting Your Beachhead, The 7-Point Checklist': 'Beachhead',
    'Assessing Market Health, Beyond the Raw Number': 'Market Health',
    'Connecting to Your Quantitative Survey Work': 'Survey Work',
    'Common Mistakes and the Assumptions Ledger': 'Mistakes',
    'The Go/No-Go Decision': 'Go/No-Go',
    'Putting It All Together, Your Workflow': 'Workflow',
    'Quick Reference: Key Terms': 'Key Terms',
  };
  return overrides[cleaned] || cleaned.split(/[,:]/).map(s => s.trim())[0].split(' ').slice(0, 2).join(' ');
}

// Read and inline an SVG file
function readSVG(filename) {
  const svgPath = path.join(DIAGRAMS_DIR, filename);
  if (!fs.existsSync(svgPath)) {
    console.warn(`  Warning: SVG not found: ${filename}`);
    return null;
  }
  let svg = fs.readFileSync(svgPath, 'utf-8');
  // Ensure viewBox exists for responsive scaling
  if (!svg.includes('viewBox') && svg.includes('width=') && svg.includes('height=')) {
    const wMatch = svg.match(/width="(\d+)"/);
    const hMatch = svg.match(/height="(\d+)"/);
    if (wMatch && hMatch) {
      svg = svg.replace('<svg', `<svg viewBox="0 0 ${wMatch[1]} ${hMatch[1]}"`);
    }
  }
  return svg;
}

// Parse a markdown table into headers + rows
function parseTable(lines) {
  const headers = lines[0].split('|').map(s => s.trim()).filter(Boolean);
  // Skip separator line (lines[1])
  const rows = [];
  for (let i = 2; i < lines.length; i++) {
    const cells = lines[i].split('|').map(s => s.trim()).filter(Boolean);
    if (cells.length > 0) rows.push(cells);
  }
  return { type: 'table', headers, rows };
}

// Parse the markdown content into structured blocks
function parseBlocks(text) {
  const lines = text.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Horizontal rule (section divider within a section)
    if (/^---+\s*$/.test(line.trim())) {
      i++;
      continue;
    }

    // H3 subsection
    if (line.startsWith('### ')) {
      blocks.push({ type: 'subsectionStart', title: line.slice(4).trim() });
      i++;
      continue;
    }

    // SVG image reference
    const imgMatch = line.match(/^!\[([^\]]*)\]\(diagrams\/([^)]+\.svg)\)/);
    if (imgMatch) {
      const caption = imgMatch[1];
      const filename = imgMatch[2];
      const svgContent = readSVG(filename);
      if (svgContent) {
        blocks.push({ type: 'svg', content: svgContent, caption });
      }
      i++;
      continue;
    }

    // Table (starts with |)
    if (line.trim().startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 3) {
        blocks.push(parseTable(tableLines));
      }
      continue;
    }

    // Blockquote
    if (line.trim().startsWith('> ')) {
      const quoteLines = [];
      while (i < lines.length && (lines[i].trim().startsWith('> ') || lines[i].trim().startsWith('>'))) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      const quoteText = quoteLines.join('\n');
      blocks.push({ type: 'blockquote', text: quoteText });
      continue;
    }

    // Bullet list
    if (/^[-*]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'bulletList', items });
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'numberedList', items });
      continue;
    }

    // Regular paragraph (collect consecutive non-empty, non-special lines)
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('### ') &&
      !lines[i].trim().startsWith('|') &&
      !lines[i].trim().startsWith('> ') &&
      !/^[-*]\s/.test(lines[i].trim()) &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !/^---+\s*$/.test(lines[i].trim()) &&
      !/^!\[/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      const text = paraLines.join(' ').trim();
      if (text) {
        blocks.push({ type: 'paragraph', text });
      }
    }
  }

  return blocks;
}

// Group blocks into subsections where appropriate
function groupSubsections(blocks) {
  const result = [];
  let currentSub = null;

  for (const block of blocks) {
    if (block.type === 'subsectionStart') {
      if (currentSub) {
        result.push(currentSub);
      }
      currentSub = { type: 'subsection', title: block.title, blocks: [] };
    } else if (currentSub) {
      currentSub.blocks.push(block);
    } else {
      result.push(block);
    }
  }

  if (currentSub) {
    result.push(currentSub);
  }

  return result;
}

// Main parser
function parse() {
  console.log('Parsing article markdown...\n');

  if (!fs.existsSync(MD_FILE)) {
    console.error(`Error: ${MD_FILE} not found`);
    process.exit(1);
  }

  const markdown = fs.readFileSync(MD_FILE, 'utf-8');

  // Extract title (first H1)
  const titleMatch = markdown.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled Article';

  // Extract subtitle (italic line after title)
  const subtitleMatch = markdown.match(/^\*([^*]+)\*\s*$/m);
  const subtitle = subtitleMatch ? subtitleMatch[1].trim() : '';

  // Split on ## headers to get sections
  const sectionSplits = markdown.split(/^## /m);
  // First split is everything before the first ##
  const sections = [];

  for (let idx = 1; idx < sectionSplits.length; idx++) {
    const sectionRaw = sectionSplits[idx];
    const firstNewline = sectionRaw.indexOf('\n');
    const sectionTitle = sectionRaw.slice(0, firstNewline).trim();
    const sectionBody = sectionRaw.slice(firstNewline + 1);

    console.log(`  Section ${idx}: ${sectionTitle}`);

    const rawBlocks = parseBlocks(sectionBody);
    const blocks = groupSubsections(rawBlocks);

    sections.push({
      number: idx,
      title: sectionTitle,
      short: shortLabel(sectionTitle),
      blocks,
    });
  }

  // Build the CONTENT object
  const content = {
    header: {
      title: 'Market Sizing & Beachhead Strategy',
      subtitle: 'A practical guide to TAM analysis and beachhead strategy for product developers.',
      from: 'John Renaldi',
      fromEmail: 'jrenaldi@northwestern.edu',
      headshot: (() => {
        const headshotPath = path.join(ARTICLE_DIR, 'headshot.png');
        if (fs.existsSync(headshotPath)) {
          const imgData = fs.readFileSync(headshotPath).toString('base64');
          return `data:image/png;base64,${imgData}`;
        }
        return '';
      })(),
      date: 'Spring 2026',
      course: 'MPD-409',
    },
    sections,
  };

  // Write output
  const output = `/**
 * Article Content - Auto-generated by parse-article.js
 * Generated: ${new Date().toISOString()}
 *
 * DO NOT EDIT - Generated from articles/market-sizing/content.md
 */
const CONTENT = ${JSON.stringify(content, null, 2)};

export default CONTENT;
`;

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`\n✓ Wrote ${sections.length} sections to ${OUTPUT_FILE}`);
  console.log(`  Size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1)} KB`);
}

parse();
