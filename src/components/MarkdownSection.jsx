/**
 * MarkdownSection Component
 * Renders markdown content from CONTENT.sections
 * Handles paragraphs, bullet lists, and skips component markers
 */
import React from 'react';
import { Paragraph, BulletList } from './Section';
import RichText from './RichText';

const MarkdownSection = ({ content }) => {
  if (!content) return null;

  // Split content into blocks by double newlines
  const blocks = content.split(/\n\n+/);
  const elements = [];
  let key = 0;

  blocks.forEach((block) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    // Skip component markers (<!-- @... --> blocks)
    if (trimmed.startsWith('<!--') && (
      trimmed.includes('@stats') ||
      trimmed.includes('@chart') ||
      trimmed.includes('@convergence') ||
      trimmed.includes('@quotes') ||
      trimmed.includes('@pullquote') ||
      trimmed.includes('@cards') ||
      trimmed.includes('@credentials') ||
      trimmed.includes('@timeline') ||
      trimmed.includes('@testimonials') ||
      trimmed.includes('@table') ||
      trimmed.includes('@terminal')
    )) {
      return;
    }

    // Skip closing markers and single line component markers
    if (trimmed.startsWith('<!-- /') || trimmed.startsWith('<!-- @')) {
      return;
    }

    // Skip horizontal rules
    if (trimmed === '---') return;

    // Check if it's a bullet list
    if (trimmed.match(/^[-*]\s+/m)) {
      const lines = trimmed.split('\n');
      const items = lines
        .filter(line => line.match(/^[-*]\s+/))
        .map(line => line.replace(/^[-*]\s+/, '').trim());

      if (items.length > 0) {
        elements.push(
          <BulletList key={key++} items={items} />
        );
      }
      return;
    }

    // Check if it's a table (skip for now, tables are handled separately)
    if (trimmed.startsWith('|')) {
      return;
    }

    // Regular paragraph - clean up any embedded component markers
    let cleanedBlock = trimmed;

    // Remove any inline component markers that might be in the paragraph
    cleanedBlock = cleanedBlock.replace(/<!--[\s\S]*?-->/g, '').trim();

    if (cleanedBlock) {
      elements.push(
        <Paragraph key={key++}>
          <RichText>{cleanedBlock}</RichText>
        </Paragraph>
      );
    }
  });

  return <>{elements}</>;
};

export default MarkdownSection;
