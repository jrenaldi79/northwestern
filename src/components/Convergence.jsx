/**
 * Convergence Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Clean flow diagram
 * - Confident typography
 * - Restrained visual hierarchy
 */
import React from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE } from '../design-tokens';

const Convergence = ({ roles }) => {
  if (!roles || roles.length === 0) return null;

  return (
    <div
      style={{
        marginTop: SPACE[10],
        marginBottom: SPACE[10],
        background: COLORS.surface.inset,
        borderRadius: EFFECTS.radius.lg,
        padding: SPACE[8],
        border: `1px solid ${COLORS.ink[100]}`,
      }}
    >
      {/* Header */}
      <h4
        style={{
          textAlign: 'center',
          fontFamily: FONTS.headline,
          fontSize: TYPE_SCALE.headline.sm.size,
          fontWeight: TYPE_SCALE.headline.sm.weight,
          color: COLORS.ink[800],
          marginBottom: SPACE[8],
        }}
      >
        The Convergence: Roles Are Merging
      </h4>

      {/* Flow diagram - enhanced with depth and hover potential */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: SPACE[5] }}>
        {roles.map((role, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: SPACE[4],
              padding: SPACE[3],
              borderRadius: EFFECTS.radius.md,
              transition: 'all 0.3s ease',
            }}
          >
            {/* From role */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: COLORS.surface.elevated,
                  color: COLORS.ink[600],
                  padding: `${SPACE[4]} ${SPACE[6]}`,
                  borderRadius: EFFECTS.radius.lg,
                  border: `1px solid ${COLORS.ink[200]}`,
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.md.size,
                  fontWeight: 600,
                  boxShadow: EFFECTS.shadow.sm,
                  transition: 'all 0.3s ease',
                }}
              >
                {role.from}
              </span>
            </div>

            {/* Arrow - enhanced with glow and animation hint */}
            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: SPACE[1],
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${COLORS.ink[300]} 0%, ${COLORS.accent.primary} 100%)`,
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: EFFECTS.radius.full,
                  background: `linear-gradient(135deg, ${COLORS.accent.primary} 0%, ${COLORS.accent.muted} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 12px ${COLORS.accent.primary}30`,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.surface.paper} strokeWidth="2.5">
                  <polyline points="9 5 16 12 9 19"/>
                </svg>
              </div>
              <div
                style={{
                  width: '16px',
                  height: '2px',
                  background: COLORS.accent.primary,
                  borderRadius: '1px',
                }}
              />
            </div>

            {/* To role */}
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${COLORS.accent.primary} 0%, ${COLORS.accent.muted} 100%)`,
                  color: COLORS.surface.paper,
                  padding: `${SPACE[4]} ${SPACE[6]}`,
                  borderRadius: EFFECTS.radius.lg,
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.md.size,
                  fontWeight: 600,
                  boxShadow: `0 4px 16px ${COLORS.accent.primary}25`,
                  transition: 'all 0.3s ease',
                }}
              >
                {role.to}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Descriptions */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: SPACE[5],
          marginTop: SPACE[8],
          paddingTop: SPACE[6],
          borderTop: `1px solid ${COLORS.ink[100]}`,
        }}
      >
        {roles.map((role, i) => (
          <div key={i} style={{ textAlign: 'center', padding: `0 ${SPACE[4]}` }}>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: TYPE_SCALE.body.sm.size,
                lineHeight: TYPE_SCALE.body.sm.lineHeight,
                color: COLORS.ink[500],
                margin: 0,
              }}
            >
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Convergence;
