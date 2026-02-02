/**
 * Citations Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Academic reference formatting
 * - Clean typography
 * - Organized by category
 */
import React from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE, LAYOUT } from '../design-tokens';

const Citations = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  // Group citations by category (based on content patterns)
  const groupCitations = (cites) => {
    const groups = {
      'Industry Research & Data': [],
      'Expert Sources': [],
      'Academic Research': [],
      'Biographical & Company Sources': [],
      'Other': [],
    };

    cites.forEach((cite, index) => {
      const num = index + 1;
      if (num <= 6) groups['Industry Research & Data'].push({ num, cite });
      else if (num <= 14) groups['Expert Sources'].push({ num, cite });
      else if (num <= 17) groups['Academic Research'].push({ num, cite });
      else groups['Biographical & Company Sources'].push({ num, cite });
    });

    return groups;
  };

  const groups = groupCitations(citations);

  return (
    <section
      style={{
        marginTop: SPACE[10],
        marginBottom: SPACE[10],
        background: COLORS.surface.inset,
        borderRadius: EFFECTS.radius.lg,
        padding: SPACE[8],
        border: `1px solid ${COLORS.ink[100]}`,
      }}
    >
      <h2
        style={{
          fontFamily: FONTS.headline,
          fontSize: TYPE_SCALE.headline.md.size,
          fontWeight: TYPE_SCALE.headline.md.weight,
          color: COLORS.ink[800],
          marginBottom: SPACE[8],
        }}
      >
        Citations
      </h2>

      {Object.entries(groups).map(([groupName, cites]) => {
        if (cites.length === 0) return null;

        return (
          <div key={groupName} style={{ marginBottom: SPACE[7] }}>
            <h3
              style={{
                fontFamily: FONTS.ui,
                fontSize: TYPE_SCALE.ui.md.size,
                fontWeight: 600,
                color: COLORS.ink[700],
                marginBottom: SPACE[4],
                display: 'flex',
                alignItems: 'center',
                gap: SPACE[2],
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: EFFECTS.radius.full,
                  background: COLORS.accent.primary,
                }}
              />
              {groupName}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE[3] }}>
              {cites.map(({ num, cite }) => (
                <div
                  key={num}
                  id={`citation-${num}`}
                  style={{
                    display: 'flex',
                    gap: SPACE[3],
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: TYPE_SCALE.mono.sm.size,
                      color: COLORS.accent.primary,
                      flexShrink: 0,
                    }}
                  >
                    [{num}]
                  </span>
                  <span
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: TYPE_SCALE.body.sm.size,
                      lineHeight: TYPE_SCALE.body.sm.lineHeight,
                      color: COLORS.ink[500],
                    }}
                  >
                    {cite}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Citations;
