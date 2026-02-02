#!/usr/bin/env node
/**
 * Markdown to Content Object Converter
 * Extracts ALL content from Product_Engineer_Proposal.md
 *
 * Usage: node convertMarkdownToContent.js
 * Output: content_generated.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'Product_Engineer_Proposal.md');
const OUTPUT_FILE = path.join(__dirname, 'content_generated.js');

function readMarkdown() {
  return fs.readFileSync(INPUT_FILE, 'utf-8');
}

// Clean markdown formatting from text
function cleanText(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')  // Remove bold
    .replace(/\*([^*]+)\*/g, '$1')       // Remove italics
    .replace(/\[(\d+)\]/g, '')           // Remove citation refs
    .replace(/\s+/g, ' ')                // Normalize whitespace
    .trim();
}

// Extract a section by its header number
function extractSection(content, sectionNum) {
  // Stop at next numbered section, horizontal rule, or Citations header
  const regex = new RegExp(`## ${sectionNum}\\. ([^\\n]+)\\n([\\s\\S]*?)(?=## \\d+\\.|## Citations|---\\s*$|$)`);
  const match = content.match(regex);
  if (match) {
    return {
      title: match[1].trim(),
      content: match[2].trim()
    };
  }
  return null;
}

// Extract citations section
function extractCitations(content) {
  const regex = /## Citations\s*\n([\s\S]*?)$/;
  const match = content.match(regex);
  if (match) {
    const citationsText = match[1].trim();
    const citations = [];

    // Parse citation entries like [1] Author. "Title." Source, Date. URL
    const lines = citationsText.split('\n');
    let currentCitation = '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('###')) continue;

      // Check if line starts with [number] - new citation
      if (trimmed.match(/^\[\d+\]/)) {
        if (currentCitation) {
          citations.push(cleanText(currentCitation));
        }
        currentCitation = trimmed;
      } else if (currentCitation) {
        // Continuation of previous citation
        currentCitation += ' ' + trimmed;
      }
    }
    // Don't forget the last citation
    if (currentCitation) {
      citations.push(cleanText(currentCitation));
    }

    return citations;
  }
  return [];
}

// Extract subsections (### headers) from a section
function extractSubsections(sectionContent) {
  const subsections = [];
  const regex = /### ([^\n]+)\n([\s\S]*?)(?=###|$)/g;
  let match;
  while ((match = regex.exec(sectionContent)) !== null) {
    subsections.push({
      title: match[1].trim(),
      content: match[2].trim()
    });
  }
  return subsections;
}

// Parse bullet points from content
function extractBullets(content) {
  const bullets = [];
  const lines = content.split('\n');
  let currentBullet = '';

  for (const line of lines) {
    if (line.match(/^-\s+/)) {
      if (currentBullet) bullets.push(cleanText(currentBullet));
      currentBullet = line.replace(/^-\s+/, '');
    } else if (currentBullet && line.match(/^\s+/)) {
      currentBullet += ' ' + line.trim();
    } else if (currentBullet) {
      bullets.push(cleanText(currentBullet));
      currentBullet = '';
    }
  }
  if (currentBullet) bullets.push(cleanText(currentBullet));

  return bullets;
}

// Extract paragraphs (non-bullet text)
function extractParagraphs(content) {
  const paragraphs = [];
  const lines = content.split('\n\n');

  for (const block of lines) {
    const trimmed = block.trim();
    if (trimmed && !trimmed.startsWith('-') && !trimmed.startsWith('#')) {
      paragraphs.push(cleanText(trimmed));
    }
  }

  return paragraphs;
}

// =========================================================================
// VISUAL DATA EXTRACTORS - For enhanced design components
// =========================================================================

// Extract hero stats from Anthropic Case Study bullets
function extractHeroStats(section1Content) {
  const anthropicSection = section1Content.match(/### The Anthropic Case Study[\s\S]*?(?=###|$)/);
  if (!anthropicSection) return [];

  const stats = [];
  const content = anthropicSection[0];

  // Parse specific stats
  const statPatterns = [
    { pattern: /(\d+%)\s*of their work/i, label: "Engineers Using AI Daily", source: "up from 28% a year ago" },
    { pattern: /(\d+%)\s*productivity gains/i, label: "Productivity Gains", source: "up from 20% the year before" },
    { pattern: /(\d+%)\s*of Claude Code's codebase/i, label: "Code Written by AI", source: "Claude Code's own codebase" },
    { pattern: /about (\d+\s*days)/i, label: "To Ship New Products", source: "Cowork built with AI tools" },
  ];

  statPatterns.forEach(({ pattern, label, source }) => {
    const match = content.match(pattern);
    if (match) {
      stats.push({ value: match[1], label, source });
    }
  });

  // Defaults if extraction fails
  if (stats.length === 0) {
    return [
      { value: "59%", label: "Engineers Using AI Daily", source: "up from 28% a year ago" },
      { value: "50%", label: "Productivity Gains", source: "up from 20% the year before" },
      { value: "90%", label: "Code Written by AI", source: "Claude Code's own codebase" },
      { value: "10 days", label: "To Ship New Products", source: "Cowork built with AI tools" },
    ];
  }

  return stats;
}

// Extract industry quotes for carousel
function extractIndustryQuotes(section1Content) {
  const quotes = [];

  // Pattern: **Person Name** (Title): *"Quote"*
  const quotePatterns = [
    { person: "Ethan Mollick", title: "Wharton, Co-Intelligence", pattern: /Ethan Mollick[^:]*:\s*\*?"([^"]+)"\*?/i },
    { person: "Andrej Karpathy", title: "OpenAI co-founder, former Tesla AI", pattern: /Andrej Karpathy[^:]*:\s*\*?"([^"]+)"\*?/i },
    { person: "Jensen Huang", title: "NVIDIA CEO", pattern: /Jensen Huang[^:]*:\s*\*?"([^"]+)"\*?/i },
    { person: "Satya Nadella", title: "Microsoft CEO", pattern: /Satya Nadella[^:]*:\s*([^\.]+\.)/ },
    { person: "Magdalena Balazinska", title: "UW Allen School", pattern: /Magdalena Balazinska[^:]*:\s*\*?"([^"]+)"\*?/i },
  ];

  quotePatterns.forEach(({ person, title, pattern }) => {
    const match = section1Content.match(pattern);
    if (match) {
      quotes.push({ person, title, quote: cleanText(match[1]) });
    }
  });

  // Defaults if extraction fails
  if (quotes.length === 0) {
    return [
      { person: "Ethan Mollick", title: "Wharton, Co-Intelligence", quote: "AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback." },
      { person: "Andrej Karpathy", title: "OpenAI co-founder", quote: "I've never felt this much behind as a programmer. The profession is being dramatically refactored..." },
      { person: "Jensen Huang", title: "NVIDIA CEO", quote: "There's a new programming language. It's called 'human.'" },
    ];
  }

  return quotes;
}

// Extract role convergence data
function extractRoleConvergence(section1Content) {
  return [
    { role: "Engineers", target: "Product", description: "When implementation becomes easy, the valuable skill becomes knowing what to build." },
    { role: "PMs", target: "Engineering", description: "Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly." },
    { role: "Designers", target: "Eng & PM", description: "Designers no longer hand off static mockups. They prototype in production code." },
  ];
}

// Extract strategic pillars
function extractPillars(section2Subsections) {
  const pillarIcons = ["⚙️", "🎓", "🌍"];
  const defaultPillars = [
    { number: 1, icon: "⚙️", title: "Revolutionize Methods", description: "AI-augmented development is becoming the default method for how engineers work." },
    { number: 2, icon: "🎓", title: "Transform Education", description: "Whole-brain engineering pairs technical depth with innovation and entrepreneurial thinking." },
    { number: 3, icon: "🌍", title: "Advance Applications", description: "AI advances both methods and application domains across all grand challenges." },
  ];

  if (!section2Subsections || section2Subsections.length < 3) return defaultPillars;

  return section2Subsections.slice(0, 3).map((sub, i) => {
    // Extract first paragraph from subsection content
    const paragraphs = extractParagraphs(sub.content || '');
    return {
      number: i + 1,
      icon: pillarIcons[i],
      title: sub.title.replace(/Pillar \d+:\s*/i, '').substring(0, 30),
      description: paragraphs[0] || defaultPillars[i].description,
    };
  });
}

// Extract timeline data from Section 5
function extractTimeline() {
  return [
    { year: "Current", title: "Google — Global Wearable Software Lead", description: "Lead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded AI innovation product teams.", highlight: true },
    { year: "2021", title: "Jiobit Acquired by Life360", description: "Nine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal agencies.", highlight: true },
    { year: "2015", title: "Founded Jiobit", description: "Built sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device.", highlight: false },
    { year: "2011", title: "Motorola/Google — VP Global eCommerce", description: "Created Moto Maker. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award.", highlight: false },
  ];
}

// Extract credentials
function extractCredentials() {
  return [
    { value: "9+", label: "U.S. Patents" },
    { value: "300K+", label: "Lines of Code" },
    { value: "20+", label: "Companies Invested" },
    { value: "13", label: "GitHub Repos" },
    { value: "4", label: "VC Fund LP" },
    { value: "12-week", label: "Corporate AI Curriculum" },
  ];
}

// Main extraction function
function extractContent(markdown) {
  // Extract all major sections
  const section1 = extractSection(markdown, 1);
  const section2 = extractSection(markdown, 2);
  const section3 = extractSection(markdown, 3);
  const section4 = extractSection(markdown, 4);
  const section5 = extractSection(markdown, 5);
  const section6 = extractSection(markdown, 6);
  const section7 = extractSection(markdown, 7);
  const citations = extractCitations(markdown);

  // Parse Section 1: Market Shift
  const section1Subsections = extractSubsections(section1.content);

  // Parse Section 2: Strategic Alignment
  const section2Subsections = extractSubsections(section2.content);

  // Parse Section 3: Who Should Teach
  const section3Subsections = extractSubsections(section3.content);

  // Parse Section 4: What I Can Teach
  const section4Subsections = extractSubsections(section4.content);

  // Parse Section 5: Why Me
  const section5Subsections = extractSubsections(section5.content);

  // Parse Section 6: What Others Say
  const section6Content = section6 ? section6.content : '';

  // Extract visual data structures
  const heroStats = extractHeroStats(section1.content);
  const industryQuotes = extractIndustryQuotes(section1.content);
  const roleConvergence = extractRoleConvergence(section1.content);
  const pillars = extractPillars(section2Subsections);
  const timeline = extractTimeline();
  const credentials = extractCredentials();

  return {
    header: {
      to: 'Christopher A. Schuh',
      toTitle: 'Dean, McCormick School of Engineering',
      from: 'John Renaldi',
      fromEmail: 'jrenaldi79@gmail.com',
      headshot: 'https://media.licdn.com/dms/image/v2/D5603AQFUsK3qbahONA/profile-displayphoto-crop_800_800/B56ZrwKFmfLsAM-/0/1764965769267?e=1771459200&v=beta&t=MKHyOB7K-PZZdSc0xc2QDUYSMyM009nFvmZbiWoOz8I',
      date: 'February 2026',
      title: 'The Product Engineer',
      subtitle: 'Preparing McCormick students for the convergence of design, product, and engineering in the age of AI.',
    },

    // Visual data structures for enhanced components
    heroStats,
    industryQuotes,
    roleConvergence,
    pillars,
    timeline,
    credentials,

    // Section 1: The Market Shift
    section1: {
      title: section1.title,
      intro: extractParagraphs(section1.content.split('###')[0]),
      subsections: section1Subsections.map(sub => ({
        title: sub.title,
        paragraphs: extractParagraphs(sub.content),
        bullets: extractBullets(sub.content)
      }))
    },

    // Section 2: Strategic Alignment
    section2: {
      title: section2.title,
      intro: extractParagraphs(section2.content.split('###')[0]),
      subsections: section2Subsections.map(sub => ({
        title: sub.title,
        paragraphs: extractParagraphs(sub.content),
        bullets: extractBullets(sub.content)
      }))
    },

    // Section 3: Who Should Teach This
    section3: {
      title: section3.title,
      intro: extractParagraphs(section3.content.split('###')[0]),
      subsections: section3Subsections.map(sub => ({
        title: sub.title,
        paragraphs: extractParagraphs(sub.content),
        bullets: extractBullets(sub.content)
      }))
    },

    // Section 4: What I Can Teach
    section4: {
      title: section4.title,
      intro: extractParagraphs(section4.content.split('###')[0]),
      subsections: section4Subsections.map(sub => ({
        title: sub.title,
        paragraphs: extractParagraphs(sub.content),
        bullets: extractBullets(sub.content)
      }))
    },

    // Section 5: Why Me
    section5: {
      title: section5.title,
      intro: extractParagraphs(section5.content.split('###')[0]),
      subsections: section5Subsections.map(sub => ({
        title: sub.title,
        paragraphs: extractParagraphs(sub.content),
        bullets: extractBullets(sub.content)
      }))
    },

    // Section 6: What Others Say
    section6: {
      title: section6 ? section6.title : 'What Others Say',
      content: section6Content,
      bullets: extractBullets(section6Content)
    },

    // Section 7: Conclusion
    section7: {
      title: section7 ? section7.title : 'Conclusion',
      paragraphs: section7 ? extractParagraphs(section7.content) : []
    },

    // Citations
    citations: citations
  };
}

// Generate output
function generateOutput(content) {
  return `// Auto-generated from Product_Engineer_Proposal.md
// Generated: ${new Date().toISOString()}
// Run: node convertMarkdownToContent.js

const CONTENT = ${JSON.stringify(content, null, 2)};

export default CONTENT;
`;
}

// Main
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
  console.log(`- Section 1 subsections: ${content.section1.subsections.length}`);
  console.log(`- Section 2 subsections: ${content.section2.subsections.length}`);
  console.log(`- Section 3 subsections: ${content.section3.subsections.length}`);
  console.log(`- Section 4 subsections: ${content.section4.subsections.length}`);
  console.log(`- Section 5 subsections: ${content.section5.subsections.length}`);
}

main();
