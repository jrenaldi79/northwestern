/**
 * Timeline Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Clean vertical timeline
 * - Confident typography
 * - Restrained visual hierarchy
 */
import React from 'react';
import RichText from './RichText';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE } from '../design-tokens';

const Timeline = ({ entries }) => {
  if (!entries || entries.length === 0) return null;

  return (
    <div style={{ marginTop: SPACE[8], marginBottom: SPACE[8] }}>
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '31px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: COLORS.ink[200],
          }}
        />

        {/* Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE[6] }}>
          {entries.map((entry, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: '80px' }}>
              {/* Year marker */}
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  width: '64px',
                  height: '64px',
                  borderRadius: EFFECTS.radius.md,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONTS.mono,
                  fontWeight: 600,
                  fontSize: TYPE_SCALE.mono.md.size,
                  background: entry.highlight ? COLORS.accent.primary : COLORS.surface.elevated,
                  color: entry.highlight ? COLORS.surface.paper : COLORS.ink[600],
                  border: entry.highlight ? 'none' : `1px solid ${COLORS.ink[200]}`,
                }}
              >
                {entry.year}
              </div>

              {/* Content card */}
              <div
                style={{
                  background: entry.highlight ? COLORS.accent.wash : COLORS.surface.elevated,
                  borderRadius: EFFECTS.radius.lg,
                  border: `1px solid ${entry.highlight ? COLORS.accent.glow : COLORS.ink[100]}`,
                  padding: SPACE[6],
                  boxShadow: EFFECTS.shadow.sm,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: SPACE[3] }}>
                  <div>
                    <h4
                      style={{
                        fontFamily: FONTS.ui,
                        fontWeight: 600,
                        fontSize: TYPE_SCALE.ui.md.size,
                        color: COLORS.ink[800],
                        marginBottom: SPACE[1],
                      }}
                    >
                      {entry.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: TYPE_SCALE.mono.sm.size,
                        color: COLORS.ink[400],
                      }}
                    >
                      {entry.company}
                    </p>
                  </div>
                  {entry.highlight && (
                    <span
                      style={{
                        padding: `${SPACE[1]} ${SPACE[3]}`,
                        background: COLORS.accent.primary,
                        color: COLORS.surface.paper,
                        fontFamily: FONTS.mono,
                        fontSize: TYPE_SCALE.mono.sm.size,
                        fontWeight: 500,
                        borderRadius: EFFECTS.radius.sm,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Key
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: TYPE_SCALE.body.sm.size,
                    lineHeight: TYPE_SCALE.body.sm.lineHeight,
                    color: COLORS.ink[500],
                    margin: 0,
                  }}
                >
                  <RichText>{entry.content}</RichText>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
