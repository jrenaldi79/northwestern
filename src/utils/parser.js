#!/usr/bin/env node
/**
 * Enhanced Markdown Parser
 * Extracts ALL content from Product_Engineer_Proposal.md including component markers
 *
 * Usage: node src/utils/parser.js
 * Output: src/content.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.resolve(__dirname, '../../Product_Engineer_Proposal.md');
const OUTPUT_FILE = path.resolve(__dirname, '../content.js');

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function readMarkdown() {
  return fs.readFileSync(INPUT_FILE, 'utf-8');
}

// Clean markdown formatting from text (for display)
function cleanText(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract attribute value from HTML comment
function extractAttr(line, attrName) {
  const regex = new RegExp(`${attrName}="([^"]*)"`, 'i');
  const match = line.match(regex);
  return match ? match[1] : null;
}

// ============================================================================
// COMPONENT EXTRACTORS
// ============================================================================

// Extract @header block
function extractHeader(content) {
  const headerMatch = content.match(/<!-- @header -->[\s\S]*?<!-- \/@header -->/);
  if (!headerMatch) return null;

  const block = headerMatch[0];
  // Updated regex to capture optional linkedin and github attributes
  const fromMatch = block.match(/<!-- @from name="([^"]*)" email="([^"]*)"(?: linkedin="([^"]*)")?(?: github="([^"]*)")? -->/);
  const headshotMatch = block.match(/<!-- @headshot url="([^"]*)" -->/);
  const dateMatch = block.match(/<!-- @date value="([^"]*)" -->/);
  const titleMatch = block.match(/<!-- @title value="([^"]*)" -->/);
  const subtitleMatch = block.match(/<!-- @subtitle value="([^"]*)" -->/);

  return {
    from: fromMatch ? fromMatch[1] : '',
    fromEmail: fromMatch ? fromMatch[2] : '',
    linkedin: fromMatch && fromMatch[3] ? fromMatch[3] : '',
    github: fromMatch && fromMatch[4] ? fromMatch[4] : '',
    headshot: headshotMatch ? headshotMatch[1] : '',
    date: dateMatch ? dateMatch[1] : '',
    title: titleMatch ? titleMatch[1] : '',
    subtitle: subtitleMatch ? subtitleMatch[1] : '',
  };
}

// Extract @stats block
function extractStats(content) {
  const statsMatch = content.match(/<!-- @stats -->[\s\S]*?<!-- \/@stats -->/);
  if (!statsMatch) return [];

  const block = statsMatch[0];
  const stats = [];
  const statRegex = /<!-- @stat value="([^"]*)" label="([^"]*)" source="([^"]*)" -->/g;
  let match;

  while ((match = statRegex.exec(block)) !== null) {
    stats.push({
      value: match[1],
      label: match[2],
      source: match[3],
    });
  }

  return stats;
}

// Extract @chart blocks
function extractCharts(content) {
  const charts = [];
  const chartRegex = /<!-- @chart type="([^"]*)"([^>]*) -->[\s\S]*?<!-- \/@chart -->/g;
  let match;

  while ((match = chartRegex.exec(content)) !== null) {
    const type = match[1];
    const attrs = match[2];
    const block = match[0];

    const title = extractAttr(attrs, 'title') || '';
    const subtitle = extractAttr(attrs, 'subtitle') || '';

    const chart = { type, title, subtitle };

    if (type === 'growth') {
      // Extract series with points
      chart.series = [];
      const seriesRegex = /<!-- @series label="([^"]*)" -->[\s\S]*?<!-- \/@series -->/g;
      let seriesMatch;

      while ((seriesMatch = seriesRegex.exec(block)) !== null) {
        const series = { label: seriesMatch[1], points: [] };
        const pointRegex = /<!-- @point year="([^"]*)" value="([^"]*)" -->/g;
        let pointMatch;

        while ((pointMatch = pointRegex.exec(seriesMatch[0])) !== null) {
          series.points.push({
            year: pointMatch[1],
            value: parseInt(pointMatch[2], 10),
          });
        }
        chart.series.push(series);
      }
    } else if (type === 'bar') {
      // Extract bars
      chart.bars = [];
      const barRegex = /<!-- @bar label="([^"]*)" value="([^"]*)" unit="([^"]*)"(?: source="([^"]*)")?(?: cite="([^"]*)")? -->/g;
      let barMatch;

      while ((barMatch = barRegex.exec(block)) !== null) {
        chart.bars.push({
          label: barMatch[1],
          value: parseFloat(barMatch[2]),
          unit: barMatch[3],
          source: barMatch[4] || '',
          cite: barMatch[5] || '',
        });
      }
    } else if (type === 'hierarchy') {
      // Extract levels
      chart.levels = [];
      const levelRegex = /<!-- @level from="([^"]*)" to="([^"]*)" -->/g;
      let levelMatch;

      while ((levelMatch = levelRegex.exec(block)) !== null) {
        chart.levels.push({
          from: levelMatch[1],
          to: levelMatch[2],
        });
      }
    } else if (type === 'range') {
      // Extract ranges
      chart.ranges = [];
      const rangeRegex = /<!-- @range label="([^"]*)" min="([^"]*)" max="([^"]*)" unit="([^"]*)"(?: highlight="([^"]*)")? -->/g;
      let rangeMatch;

      while ((rangeMatch = rangeRegex.exec(block)) !== null) {
        chart.ranges.push({
          label: rangeMatch[1],
          min: parseInt(rangeMatch[2], 10),
          max: parseInt(rangeMatch[3], 10),
          unit: rangeMatch[4],
          highlight: rangeMatch[5] === 'true',
        });
      }
    }

    charts.push(chart);
  }

  return charts;
}

// Extract @convergence block
function extractConvergence(content) {
  const convMatch = content.match(/<!-- @convergence -->[\s\S]*?<!-- \/@convergence -->/);
  if (!convMatch) return [];

  const block = convMatch[0];
  const roles = [];
  const roleRegex = /<!-- @role from="([^"]*)" to="([^"]*)" description="([^"]*)" -->/g;
  let match;

  while ((match = roleRegex.exec(block)) !== null) {
    roles.push({
      from: match[1],
      to: match[2],
      description: match[3],
    });
  }

  return roles;
}

// Extract @quotes block
function extractQuotes(content) {
  const quotesMatch = content.match(/<!-- @quotes[^>]*-->[\s\S]*?<!-- \/@quotes -->/);
  if (!quotesMatch) return [];

  const block = quotesMatch[0];
  const quotes = [];
  const quoteRegex = /<!-- @quote author="([^"]*)" title="([^"]*)"(?: cite="([^"]*)")? -->\s*([\s\S]*?)<!-- \/@quote -->/g;
  let match;

  while ((match = quoteRegex.exec(block)) !== null) {
    quotes.push({
      author: match[1],
      title: match[2],
      cite: match[3] || '',
      quote: cleanText(match[4]),
    });
  }

  return quotes;
}

// Extract @pullquote blocks
function extractPullQuotes(content) {
  const pullquotes = [];
  const pqRegex = /<!-- @pullquote -->([\s\S]*?)<!-- \/@pullquote -->/g;
  let match;

  while ((match = pqRegex.exec(content)) !== null) {
    pullquotes.push(cleanText(match[1]));
  }

  return pullquotes;
}

// Extract @cards block
function extractCards(content) {
  const cardsGroups = [];
  const cardsRegex = /<!-- @cards type="([^"]*)"(?: columns="([^"]*)")?(?: section="([^"]*)")? -->[\s\S]*?<!-- \/@cards -->/g;
  let match;

  while ((match = cardsRegex.exec(content)) !== null) {
    const type = match[1];
    const columns = parseInt(match[2] || '3', 10);
    const section = match[3] || null;
    const block = match[0];

    const cards = [];
    // Updated regex to capture optional audience attribute
    const cardRegex = /<!-- @card icon="([^"]*)" title="([^"]*)"(?: audience="([^"]*)")? -->\s*([\s\S]*?)<!-- \/@card -->/g;
    let cardMatch;

    while ((cardMatch = cardRegex.exec(block)) !== null) {
      cards.push({
        icon: cardMatch[1],
        title: cardMatch[2],
        audience: cardMatch[3] || '',
        content: cleanText(cardMatch[4]),
      });
    }

    cardsGroups.push({ type, columns, section, cards });
  }

  return cardsGroups;
}

// Extract @credentials block
function extractCredentials(content) {
  const credMatch = content.match(/<!-- @credentials -->[\s\S]*?<!-- \/@credentials -->/);
  if (!credMatch) return [];

  const block = credMatch[0];
  const credentials = [];
  const credRegex = /<!-- @credential value="([^"]*)" label="([^"]*)" -->/g;
  let match;

  while ((match = credRegex.exec(block)) !== null) {
    credentials.push({
      value: match[1],
      label: match[2],
    });
  }

  return credentials;
}

// Extract @timeline block
function extractTimeline(content) {
  const timelineMatch = content.match(/<!-- @timeline -->[\s\S]*?<!-- \/@timeline -->/);
  if (!timelineMatch) return [];

  const block = timelineMatch[0];
  const entries = [];
  const entryRegex = /<!-- @entry year="([^"]*)" company="([^"]*)" title="([^"]*)" highlight="([^"]*)" -->\s*([\s\S]*?)<!-- \/@entry -->/g;
  let match;

  while ((match = entryRegex.exec(block)) !== null) {
    entries.push({
      year: match[1],
      company: match[2],
      title: match[3],
      highlight: match[4] === 'true',
      content: cleanText(match[5]),
    });
  }

  return entries;
}

// Extract @testimonials blocks
function extractTestimonials(content) {
  const testimonialGroups = [];
  const testRegex = /<!-- @testimonials type="([^"]*)"(?: source="([^"]*)")? -->[\s\S]*?<!-- \/@testimonials -->/g;
  let match;

  while ((match = testRegex.exec(content)) !== null) {
    const type = match[1];
    const source = match[2] || '';
    const block = match[0];

    const testimonials = [];
    const tRegex = /<!-- @testimonial(?: author="([^"]*)")?(?: title="([^"]*)")?(?: subtitle="([^"]*)")? -->\s*([\s\S]*?)<!-- \/@testimonial -->/g;
    let tMatch;

    while ((tMatch = tRegex.exec(block)) !== null) {
      testimonials.push({
        author: tMatch[1] || '',
        title: tMatch[2] || '',
        subtitle: tMatch[3] || '',
        content: cleanText(tMatch[4]),
      });
    }

    testimonialGroups.push({ type, source, testimonials });
  }

  return testimonialGroups;
}

// Extract markdown tables
function extractTables(content) {
  const tables = [];

  // Find table variant hints
  const variantHints = {};
  const hintRegex = /<!-- @table variant="([^"]*)" -->\s*\n\s*\|/g;
  let hintMatch;

  while ((hintMatch = hintRegex.exec(content)) !== null) {
    // Store position
    variantHints[hintMatch.index + hintMatch[0].length - 1] = hintMatch[1];
  }

  // Find all markdown tables
  const tableRegex = /\|([^\n]+)\|\s*\n\|[-:\s|]+\|\s*\n((?:\|[^\n]+\|\s*\n?)+)/g;
  let tableMatch;

  while ((tableMatch = tableRegex.exec(content)) !== null) {
    // Parse header
    const headers = tableMatch[1]
      .split('|')
      .map(h => h.trim())
      .filter(h => h);

    // Parse rows
    const rowLines = tableMatch[2].trim().split('\n');
    const rows = rowLines.map(line =>
      line
        .split('|')
        .map(cell => cell.trim())
        .filter((_, i, arr) => i > 0 && i < arr.length) // Remove empty first/last
    );

    // Check for variant hint
    let variant = 'default';
    const tableStart = tableMatch.index;
    const hintCheck = content.substring(tableStart - 100, tableStart);
    const variantMatch = hintCheck.match(/<!-- @table variant="([^"]*)" -->/);
    if (variantMatch) {
      variant = variantMatch[1];
    }

    tables.push({ headers, rows, variant });
  }

  return tables;
}

// Extract sections (## headers)
function extractSections(content) {
  const sections = [];
  const sectionRegex = /## (\d+)\. ([^\n]+)\n([\s\S]*?)(?=## \d+\.|## Citations|---\s*$|$)/g;
  let match;

  while ((match = sectionRegex.exec(content)) !== null) {
    const number = match[1];
    const title = match[2].trim();
    const sectionContent = match[3].trim();

    // Extract subsections
    const subsections = [];
    const subRegex = /### ([^\n]+)\n([\s\S]*?)(?=###|$)/g;
    let subMatch;

    while ((subMatch = subRegex.exec(sectionContent)) !== null) {
      subsections.push({
        title: subMatch[1].trim(),
        content: subMatch[2].trim(),
      });
    }

    // Extract intro (content before first subsection)
    const introMatch = sectionContent.match(/^([\s\S]*?)(?=###|$)/);
    const intro = introMatch ? introMatch[1].trim() : '';

    sections.push({
      number: parseInt(number, 10),
      title,
      intro,
      subsections,
    });
  }

  return sections;
}

// Extract @terminal blocks
function extractTerminals(content) {
  const terminals = [];
  const terminalRegex = /<!-- @terminal title="([^"]*)"(?: command="([^"]*)")?(?: variant="([^"]*)")? -->\s*([\s\S]*?)<!-- \/@terminal -->/g;
  let match;

  while ((match = terminalRegex.exec(content)) !== null) {
    const title = match[1];
    const command = match[2] || 'cat';
    const variant = match[3] || 'default';
    const contentBlock = match[4].trim();

    // Parse content into lines
    // Support both plain lines and list items (- or *)
    const lines = contentBlock
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('<!--'))
      .map(line => {
        // Convert markdown list items to bullet format
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return '• ' + line.slice(2);
        }
        return line;
      });

    terminals.push({
      title,
      command,
      variant,
      lines,
    });
  }

  return terminals;
}

// Extract citations
function extractCitations(content) {
  const citationsMatch = content.match(/## Citations\s*\n([\s\S]*?)$/);
  if (!citationsMatch) return [];

  const citationsText = citationsMatch[1].trim();
  const citations = [];

  const lines = citationsText.split('\n');
  let currentCitation = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('###')) continue;

    if (trimmed.match(/^\[\d+\]/)) {
      if (currentCitation) {
        citations.push(cleanText(currentCitation));
      }
      currentCitation = trimmed;
    } else if (currentCitation) {
      currentCitation += ' ' + trimmed;
    }
  }

  if (currentCitation) {
    citations.push(cleanText(currentCitation));
  }

  return citations;
}

// ============================================================================
// MAIN EXTRACTION
// ============================================================================

function extractContent(markdown) {
  return {
    header: extractHeader(markdown),
    stats: extractStats(markdown),
    charts: extractCharts(markdown),
    convergence: extractConvergence(markdown),
    quotes: extractQuotes(markdown),
    pullquotes: extractPullQuotes(markdown),
    cards: extractCards(markdown),
    credentials: extractCredentials(markdown),
    timeline: extractTimeline(markdown),
    testimonials: extractTestimonials(markdown),
    tables: extractTables(markdown),
    terminals: extractTerminals(markdown),
    sections: extractSections(markdown),
    citations: extractCitations(markdown),
  };
}

// Generate output file
function generateOutput(content) {
  return `// Auto-generated from Product_Engineer_Proposal.md
// Generated: ${new Date().toISOString()}
// Run: node src/utils/parser.js

const CONTENT = ${JSON.stringify(content, null, 2)};

export default CONTENT;
`;
}

// Main execution
function main() {
  console.log('Reading markdown...');
  const markdown = readMarkdown();

  console.log('Extracting content...');
  const content = extractContent(markdown);

  console.log('Generating output...');
  const output = generateOutput(content);

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`Done! Wrote ${OUTPUT_FILE}`);

  // Print summary
  console.log('\nContent summary:');
  console.log(`- Header: ${content.header ? 'yes' : 'no'}`);
  console.log(`- Stats: ${content.stats.length}`);
  console.log(`- Charts: ${content.charts.length}`);
  console.log(`- Convergence roles: ${content.convergence.length}`);
  console.log(`- Industry quotes: ${content.quotes.length}`);
  console.log(`- Pull quotes: ${content.pullquotes.length}`);
  console.log(`- Card groups: ${content.cards.length}`);
  console.log(`- Credentials: ${content.credentials.length}`);
  console.log(`- Timeline entries: ${content.timeline.length}`);
  console.log(`- Testimonial groups: ${content.testimonials.length}`);
  console.log(`- Tables: ${content.tables.length}`);
  console.log(`- Terminals: ${content.terminals.length}`);
  console.log(`- Sections: ${content.sections.length}`);
  console.log(`- Citations: ${content.citations.length}`);
}

main();
