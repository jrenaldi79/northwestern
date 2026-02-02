/**
 * Credentials Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Confident typography
 * - Dark background for contrast
 * - Mono numbers for data
 */
import React from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE } from '../design-tokens';

const Credentials = ({ credentials }) => {
  if (!credentials || credentials.length === 0) return null;

  return (
    <div
      style={{
        marginTop: SPACE[10],
        marginBottom: SPACE[10],
        background: COLORS.surface.dark,
        borderRadius: EFFECTS.radius.lg,
        padding: SPACE[8],
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${COLORS.accent.primary}40 50%, transparent 100%)`,
        }}
      />

      {/* Header */}
      <h4
        style={{
          textAlign: 'center',
          fontFamily: FONTS.mono,
          fontSize: TYPE_SCALE.mono.sm.size,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: COLORS.ink[400],
          marginBottom: SPACE[7],
          position: 'relative',
          zIndex: 1,
        }}
      >
        At a Glance
      </h4>

      {/* Credentials grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: SPACE[6],
          position: 'relative',
          zIndex: 1,
        }}
      >
        {credentials.map((cred, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: TYPE_SCALE.mono.display.size,
                fontWeight: TYPE_SCALE.mono.display.weight,
                color: i === 0 ? COLORS.accent.light : COLORS.ink[100],
                marginBottom: SPACE[2],
                lineHeight: 1,
              }}
            >
              {cred.value}
            </div>
            <div
              style={{
                fontFamily: FONTS.ui,
                fontSize: TYPE_SCALE.ui.sm.size,
                color: COLORS.ink[400],
                lineHeight: 1.4,
              }}
            >
              {cred.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credentials;
