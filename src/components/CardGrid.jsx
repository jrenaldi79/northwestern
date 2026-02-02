/**
 * CardGrid Component - "The Scholarly Disruptor"
 *
 * Editorial magazine aesthetic
 * - Clean card layouts
 * - Confident typography
 * - Restrained visual accents
 */
import React from 'react';
import RichText from './RichText';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE, Icons, getIcon } from '../design-tokens';

// Profile Card - Clean, editorial
const ProfileCard = ({ card, index }) => {
  const isAccent = index === 0;

  return (
    <div
      style={{
        background: COLORS.surface.elevated,
        borderRadius: EFFECTS.radius.lg,
        border: `1px solid ${COLORS.ink[100]}`,
        padding: SPACE[6],
        boxShadow: EFFECTS.shadow.sm,
        position: 'relative',
      }}
    >
      {/* Subtle top accent for first card */}
      {isAccent && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: COLORS.accent.primary,
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: EFFECTS.radius.md,
          background: isAccent ? COLORS.accent.wash : COLORS.surface.inset,
          border: `1px solid ${isAccent ? COLORS.accent.glow : COLORS.ink[100]}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: SPACE[4],
        }}
      >
        {getIcon(card.icon, isAccent ? COLORS.accent.primary : COLORS.ink[500])}
      </div>

      {/* Title */}
      <h4
        style={{
          fontFamily: FONTS.ui,
          fontWeight: 600,
          fontSize: TYPE_SCALE.ui.md.size,
          color: COLORS.ink[800],
          marginBottom: SPACE[2],
        }}
      >
        {card.title}
      </h4>

      {/* Description */}
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: TYPE_SCALE.body.sm.size,
          lineHeight: TYPE_SCALE.body.sm.lineHeight,
          color: COLORS.ink[500],
          margin: 0,
        }}
      >
        <RichText>{card.content}</RichText>
      </p>
    </div>
  );
};

// Feature Card - Larger with subtle emphasis
const FeatureCard = ({ card, index }) => {
  const isHighlight = index === 0;

  return (
    <div
      style={{
        background: isHighlight ? COLORS.accent.wash : COLORS.surface.inset,
        borderRadius: EFFECTS.radius.lg,
        border: `1px solid ${isHighlight ? COLORS.accent.glow : COLORS.ink[100]}`,
        padding: SPACE[7],
        position: 'relative',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: EFFECTS.radius.md,
          background: isHighlight ? COLORS.accent.primary : COLORS.ink[700],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: SPACE[5],
        }}
      >
        {getIcon(card.icon, '#FFFFFF')}
      </div>

      {/* Title */}
      <h4
        style={{
          fontFamily: FONTS.headline,
          fontWeight: TYPE_SCALE.headline.sm.weight,
          fontSize: TYPE_SCALE.headline.sm.size,
          color: COLORS.ink[800],
          marginBottom: SPACE[3],
        }}
      >
        {card.title}
      </h4>

      {/* Description */}
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: TYPE_SCALE.body.md.size,
          lineHeight: TYPE_SCALE.body.md.lineHeight,
          color: COLORS.ink[500],
          margin: 0,
        }}
      >
        <RichText>{card.content}</RichText>
      </p>
    </div>
  );
};

// Topic Card - Expandable accordion style
const TopicCard = ({ card, index, isExpanded, onToggle }) => {
  return (
    <div
      style={{
        background: COLORS.surface.elevated,
        borderRadius: EFFECTS.radius.md,
        border: `1px solid ${isExpanded ? COLORS.accent.primary : COLORS.ink[100]}`,
        overflow: 'hidden',
        transition: EFFECTS.transition.base,
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: SPACE[5],
          display: 'flex',
          alignItems: 'center',
          gap: SPACE[4],
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: EFFECTS.radius.sm,
            background: isExpanded ? COLORS.accent.wash : COLORS.surface.inset,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {getIcon(card.icon, isExpanded ? COLORS.accent.primary : COLORS.ink[500])}
        </div>
        <h4
          style={{
            fontFamily: FONTS.ui,
            fontWeight: 600,
            fontSize: TYPE_SCALE.ui.md.size,
            color: COLORS.ink[800],
            flex: 1,
            margin: 0,
          }}
        >
          {card.title}
        </h4>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.ink[400]}
          strokeWidth="1.5"
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: EFFECTS.transition.base,
          }}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isExpanded && (
        <div
          style={{
            padding: `0 ${SPACE[5]} ${SPACE[5]} 60px`,
            borderTop: `1px solid ${COLORS.ink[100]}`,
          }}
        >
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: TYPE_SCALE.body.sm.size,
              lineHeight: TYPE_SCALE.body.sm.lineHeight,
              color: COLORS.ink[500],
              margin: `${SPACE[4]} 0 0 0`,
            }}
          >
            <RichText>{card.content}</RichText>
          </p>
        </div>
      )}
    </div>
  );
};

// Main CardGrid component
const CardGrid = ({ type = 'profile', columns = 3, cards }) => {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  if (!cards || cards.length === 0) return null;

  const gridCols = {
    2: 'repeat(2, 1fr)',
    3: 'repeat(auto-fit, minmax(280px, 1fr))',
    4: 'repeat(auto-fit, minmax(220px, 1fr))',
  }[columns] || 'repeat(auto-fit, minmax(280px, 1fr))';

  return (
    <div style={{ marginTop: SPACE[8], marginBottom: SPACE[8] }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: type === 'topic' ? '1fr' : gridCols,
          gap: SPACE[5],
        }}
      >
        {cards.map((card, i) => {
          switch (type) {
            case 'feature':
              return <FeatureCard key={i} card={card} index={i} />;
            case 'topic':
              return (
                <TopicCard
                  key={i}
                  card={card}
                  index={i}
                  isExpanded={expandedIndex === i}
                  onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
                />
              );
            case 'profile':
            default:
              return <ProfileCard key={i} card={card} index={i} />;
          }
        })}
      </div>
    </div>
  );
};

export default CardGrid;
export { ProfileCard, FeatureCard, TopicCard, Icons };
