/**
 * Markdown Parser for Product Engineer Proposal
 *
 * Parses custom markers in the markdown file and generates
 * a structured JSON content file for the React app.
 *
 * Run: node scripts/parseMarkdown.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const MARKDOWN_PATH = path.resolve(__dirname, '../../Product_Engineer_Proposal.md');
const OUTPUT_PATH = path.resolve(__dirname, '../src/content.json');

/**
 * Parse attributes from a marker string like: name="value" other="value2"
 */
function parseAttributes(str) {
  const attrs = {};
  const regex = /(\w+)="([^"]*)"/g;
  let match;
  while ((match = regex.exec(str)) !== null) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

/**
 * Extract content between opening and closing markers
 */
function extractBlock(content, marker) {
  const openRegex = new RegExp(`<!--\\s*@${marker}([^>]*)-->`, 'g');
  const closeRegex = new RegExp(`<!--\\s*/@${marker}\\s*-->`, 'g');

  const blocks = [];
  let match;

  while ((match = openRegex.exec(content)) !== null) {
    const startIndex = match.index + match[0].length;
    const attrs = parseAttributes(match[1]);

    // Find closing tag
    closeRegex.lastIndex = startIndex;
    const closeMatch = closeRegex.exec(content);

    if (closeMatch) {
      const blockContent = content.slice(startIndex, closeMatch.index).trim();
      blocks.push({ attrs, content: blockContent });
    }
  }

  return blocks;
}

/**
 * Extract self-closing markers like <!-- @stat value="..." -->
 */
function extractSelfClosing(content, marker) {
  const regex = new RegExp(`<!--\\s*@${marker}\\s+([^>]+)-->`, 'g');
  const items = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    items.push(parseAttributes(match[1]));
  }

  return items;
}

/**
 * Extract nested items within a block
 */
function extractNestedItems(blockContent, itemMarker) {
  // For items with content (like quotes)
  const blockRegex = new RegExp(`<!--\\s*@${itemMarker}\\s+([^>]*)-->([\\s\\S]*?)<!--\\s*/@${itemMarker}\\s*-->`, 'g');
  const items = [];
  let match;

  while ((match = blockRegex.exec(blockContent)) !== null) {
    const attrs = parseAttributes(match[1]);
    attrs.content = match[2].trim();
    items.push(attrs);
  }

  // If no block items found, try self-closing
  if (items.length === 0) {
    return extractSelfClosing(blockContent, itemMarker);
  }

  return items;
}

/**
 * Parse the header section
 */
function parseHeader(content) {
  const headerBlocks = extractBlock(content, 'header');
  if (headerBlocks.length === 0) return {};

  const headerContent = headerBlocks[0].content;
  const header = {};

  // Parse individual header fields
  const from = extractSelfClosing(headerContent, 'from')[0] || {};
  const headshot = extractSelfClosing(headerContent, 'headshot')[0] || {};
  const date = extractSelfClosing(headerContent, 'date')[0] || {};
  const title = extractSelfClosing(headerContent, 'title')[0] || {};
  const subtitle = extractSelfClosing(headerContent, 'subtitle')[0] || {};

  return {
    from: from.name || '',
    fromEmail: from.email || '',
    linkedin: from.linkedin || '',
    github: from.github || '',
    headshot: headshot.url || '',
    date: date.value || '',
    title: title.value || '',
    subtitle: subtitle.value || ''
  };
}

/**
 * Parse stats section
 */
function parseStats(content) {
  const statsBlocks = extractBlock(content, 'stats');
  if (statsBlocks.length === 0) return [];

  return extractSelfClosing(statsBlocks[0].content, 'stat');
}

/**
 * Parse convergence diagram
 */
function parseConvergence(content) {
  const blocks = extractBlock(content, 'convergence');
  if (blocks.length === 0) return [];

  return extractSelfClosing(blocks[0].content, 'role').map(role => ({
    role: role.from,
    target: role.to,
    description: role.description
  }));
}

/**
 * Parse quotes carousel
 */
function parseQuotes(content) {
  const blocks = extractBlock(content, 'quotes');
  const allQuotes = [];

  for (const block of blocks) {
    const section = block.attrs.section || 'general';
    const quotes = extractNestedItems(block.content, 'quote').map(q => ({
      person: q.author,
      title: q.title,
      cite: q.cite,
      quote: q.content,
      section
    }));
    allQuotes.push(...quotes);
  }

  return allQuotes;
}

/**
 * Parse credentials
 */
function parseCredentials(content) {
  const blocks = extractBlock(content, 'credentials');
  if (blocks.length === 0) return [];

  return extractSelfClosing(blocks[0].content, 'credential');
}

/**
 * Parse timeline
 */
function parseTimeline(content) {
  const blocks = extractBlock(content, 'timeline');
  if (blocks.length === 0) return [];

  return extractNestedItems(blocks[0].content, 'entry').map(e => ({
    year: e.year,
    company: e.company,
    title: e.title,
    highlight: e.highlight === 'true',
    description: e.content
  }));
}

/**
 * Parse testimonials
 */
function parseTestimonials(content) {
  const blocks = extractBlock(content, 'testimonials');
  const allTestimonials = [];

  for (const block of blocks) {
    const type = block.attrs.type || 'general';
    const source = block.attrs.source || '';
    const testimonials = extractNestedItems(block.content, 'testimonial').map(t => ({
      author: t.author || '',
      title: t.title || '',
      subtitle: t.subtitle || '',
      quote: t.content,
      type,
      source
    }));
    allTestimonials.push(...testimonials);
  }

  return allTestimonials;
}

/**
 * Parse pullquotes
 */
function parsePullquotes(content) {
  const blocks = extractBlock(content, 'pullquote');
  return blocks.map(b => ({
    author: b.attrs.author || '',
    title: b.attrs.title || '',
    quote: b.content
  }));
}

/**
 * Parse cards
 */
function parseCards(content) {
  const blocks = extractBlock(content, 'cards');
  const allCards = [];

  for (const block of blocks) {
    const type = block.attrs.type || 'default';
    const columns = block.attrs.columns || '3';
    const section = block.attrs.section || '';

    // Parse individual cards with expanded content
    const cardRegex = /<!--\s*@card\s+([^>]*)-->([\s\S]*?)<!--\s*\/@card\s*-->/g;
    let match;

    while ((match = cardRegex.exec(block.content)) !== null) {
      const attrs = parseAttributes(match[1]);
      const cardContent = match[2].trim();

      // Check for expanded content
      const expandedMatch = cardContent.match(/<!--\s*@expanded\s*-->([\s\S]*)/);
      let mainContent = cardContent;
      let expandedContent = '';

      if (expandedMatch) {
        mainContent = cardContent.slice(0, expandedMatch.index).trim();
        expandedContent = expandedMatch[1].trim();
      }

      allCards.push({
        icon: attrs.icon || '',
        title: attrs.title || '',
        audience: attrs.audience || '',
        content: mainContent,
        expanded: expandedContent,
        type,
        columns,
        section
      });
    }
  }

  return allCards;
}

/**
 * Parse charts
 */
function parseCharts(content) {
  const blocks = extractBlock(content, 'chart');
  return blocks.map(block => {
    const chart = {
      type: block.attrs.type || 'bar',
      title: block.attrs.title || '',
      subtitle: block.attrs.subtitle || '',
      data: []
    };

    // Parse data based on chart type
    if (chart.type === 'hierarchy') {
      chart.data = extractSelfClosing(block.content, 'level');
    } else if (chart.type === 'bar') {
      chart.data = extractSelfClosing(block.content, 'bar');
    } else if (chart.type === 'range') {
      chart.data = extractSelfClosing(block.content, 'range');
    } else if (chart.type === 'growth') {
      const series = extractBlock(block.content, 'series');
      chart.data = series.map(s => ({
        ...s.attrs,
        points: extractSelfClosing(s.content, 'point')
      }));
    }

    return chart;
  });
}

/**
 * Parse terminal blocks
 */
function parseTerminals(content) {
  const blocks = extractBlock(content, 'terminal');
  return blocks.map(block => ({
    title: block.attrs.title || '',
    command: block.attrs.command || '',
    variant: block.attrs.variant || 'default',
    lines: block.content.split('\n').filter(line => line.trim().startsWith('-')).map(line => line.replace(/^-\s*/, '').trim())
  }));
}

/**
 * Parse markdown tables
 */
function parseTables(content) {
  const tableRegex = /\|[^\n]+\|\n\|[-:\s|]+\|\n((?:\|[^\n]+\|\n?)+)/g;
  const tables = [];
  let match;

  while ((match = tableRegex.exec(content)) !== null) {
    const tableText = match[0];
    const lines = tableText.trim().split('\n');

    // Parse header
    const headerLine = lines[0];
    const headers = headerLine.split('|').filter(h => h.trim()).map(h => h.trim());

    // Parse rows (skip separator line)
    const rows = [];
    for (let i = 2; i < lines.length; i++) {
      const cells = lines[i].split('|').filter(c => c.trim()).map(c => c.trim());
      if (cells.length > 0) {
        rows.push(cells);
      }
    }

    tables.push({ headers, rows });
  }

  return tables;
}

/**
 * Parse section headers and content
 */
function parseSections(content) {
  const sections = [];
  const sectionRegex = /^## \d+\.\s+(.+)$/gm;
  let match;
  let lastIndex = 0;
  let lastTitle = null;

  while ((match = sectionRegex.exec(content)) !== null) {
    if (lastTitle !== null) {
      sections.push({
        title: lastTitle,
        content: content.slice(lastIndex, match.index).trim()
      });
    }
    lastTitle = match[1];
    lastIndex = match.index + match[0].length;
  }

  // Add last section
  if (lastTitle !== null) {
    sections.push({
      title: lastTitle,
      content: content.slice(lastIndex).trim()
    });
  }

  return sections;
}

/**
 * Parse markdown paragraphs (excluding markers and special content)
 */
function parseParagraphs(sectionContent) {
  // Remove all markers
  let cleaned = sectionContent
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/\|[^\n]+\|\n\|[-:\s|]+\|\n((?:\|[^\n]+\|\n?)+)/g, '') // Remove tables
    .trim();

  // Split into paragraphs
  const paragraphs = cleaned
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(p => p && !p.startsWith('###') && !p.startsWith('|') && !p.startsWith('-   '));

  return paragraphs;
}

/**
 * Main parser function
 */
function parseMarkdown(content) {
  const parsed = {
    header: parseHeader(content),
    heroStats: parseStats(content),
    roleConvergence: parseConvergence(content),
    quotes: parseQuotes(content),
    credentials: parseCredentials(content),
    timeline: parseTimeline(content),
    testimonials: parseTestimonials(content),
    pullquotes: parsePullquotes(content),
    cards: parseCards(content),
    charts: parseCharts(content),
    terminals: parseTerminals(content),
    tables: parseTables(content),
    sections: parseSections(content)
  };

  return parsed;
}

// Main execution
console.log('Parsing markdown file...');
const markdown = fs.readFileSync(MARKDOWN_PATH, 'utf-8');
const content = parseMarkdown(markdown);

// Write output
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(content, null, 2));
console.log(`Content written to ${OUTPUT_PATH}`);
console.log(`  - ${content.heroStats.length} stats`);
console.log(`  - ${content.roleConvergence.length} convergence roles`);
console.log(`  - ${content.quotes.length} quotes`);
console.log(`  - ${content.credentials.length} credentials`);
console.log(`  - ${content.timeline.length} timeline entries`);
console.log(`  - ${content.testimonials.length} testimonials`);
console.log(`  - ${content.pullquotes.length} pullquotes`);
console.log(`  - ${content.cards.length} cards`);
console.log(`  - ${content.charts.length} charts`);
console.log(`  - ${content.terminals.length} terminals`);
console.log(`  - ${content.tables.length} tables`);
console.log(`  - ${content.sections.length} sections`);
