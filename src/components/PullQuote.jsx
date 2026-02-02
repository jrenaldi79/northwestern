/**
 * PullQuote Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Confident serif typography
 * - Dramatic scale
 * - Print-inspired layout
 */
import React from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE, LAYOUT } from '../design-tokens';

const PullQuote = ({ children, align = 'center' }) => {
  const isCenter = align === 'center';
  const isLeft = align === 'left';

  return (
    <aside
      style={{
        marginTop: SPACE[6],
        marginBottom: SPACE[6],
        paddingTop: SPACE[4],
        paddingBottom: SPACE[4],
        paddingLeft: isLeft ? SPACE[6] : 0,
        paddingRight: !isLeft && !isCenter ? SPACE[6] : 0,
        borderLeft: isLeft ? `2px solid ${COLORS.accent.primary}` : 'none',
        borderRight: !isLeft && !isCenter ? `2px solid ${COLORS.accent.primary}` : 'none',
        position: 'relative',
        maxWidth: LAYOUT.maxWidth.prose,
      }}
    >
      {/* Centered top accent line */}
      {isCenter && (
        <div
          style={{
            width: '48px',
            height: '2px',
            background: COLORS.accent.primary,
            margin: `0 auto ${SPACE[4]}`,
          }}
        />
      )}

      <blockquote style={{ position: 'relative' }}>
        {/* Quote text - dramatic serif */}
        <p
          style={{
            fontFamily: FONTS.display,
            fontSize: TYPE_SCALE.display.md.size,
            fontWeight: TYPE_SCALE.display.md.weight,
            fontStyle: 'italic',
            color: COLORS.ink[800],
            lineHeight: TYPE_SCALE.display.md.lineHeight,
            letterSpacing: TYPE_SCALE.display.md.letterSpacing,
            textAlign: align,
            margin: 0,
          }}
        >
          "{children}"
        </p>
      </blockquote>

      {/* Bottom accent line for center alignment */}
      {isCenter && (
        <div
          style={{
            width: '48px',
            height: '2px',
            background: COLORS.ink[200],
            margin: `${SPACE[4]} auto 0`,
          }}
        />
      )}
    </aside>
  );
};

export default PullQuote;
