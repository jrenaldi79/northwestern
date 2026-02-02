/**
 * StatsGrid Component - "The Scholarly Disruptor"
 *
 * Premium editorial data cards
 * - Dramatic typographic hierarchy
 * - Subtle grid texture
 * - Print-inspired details
 */
import React from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE } from '../design-tokens';

const StatCard = ({ stat, index }) => {
  return (
    <div
      style={{
        position: 'relative',
        padding: SPACE[4],
        background: COLORS.surface.elevated,
        borderRadius: EFFECTS.radius.lg,
        border: `1px solid ${COLORS.ink[200]}`,
        borderLeft: `3px solid ${COLORS.accent.primary}`,
      }}
    >
      {/* Value */}
      <div
        style={{
          fontFamily: FONTS.display,
          fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          color: COLORS.accent.primary,
          marginBottom: SPACE[2],
        }}
      >
        {stat.value}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: FONTS.ui,
          fontSize: TYPE_SCALE.ui.sm.size,
          fontWeight: 600,
          lineHeight: 1.4,
          color: COLORS.ink[700],
          marginBottom: stat.source ? SPACE[2] : 0,
        }}
      >
        {stat.label}
      </div>

      {/* Source */}
      {stat.source && (
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: '0.6875rem',
            color: COLORS.ink[400],
            letterSpacing: '0.01em',
          }}
        >
          {stat.source}
        </div>
      )}
    </div>
  );
};

const StatsGrid = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  // 4 items = 2x2, otherwise use count as columns
  const columns = stats.length === 4 ? 2 : Math.min(stats.length, 4);

  return (
    <div
      style={{
        marginTop: SPACE[5],
        marginBottom: SPACE[5],
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: SPACE[3],
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} total={stats.length} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
