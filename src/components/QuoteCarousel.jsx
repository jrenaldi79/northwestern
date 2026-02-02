/**
 * QuoteCarousel Component - "The Scholarly Disruptor"
 *
 * Compact editorial quote panel
 * - Horizontal author tabs for navigation
 * - Slim, space-efficient layout
 * - Magazine sidebar aesthetic
 */
import React, { useState } from 'react';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE } from '../design-tokens';

const QuoteCarousel = ({ quotes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!quotes || quotes.length === 0) return null;

  const activeQuote = quotes[activeIndex];

  return (
    <div
      style={{
        marginTop: SPACE[6],
        marginBottom: SPACE[6],
      }}
    >
      {/* Section label - inline with accent */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: SPACE[3],
          marginBottom: SPACE[4],
        }}
      >
        <div
          style={{
            width: '24px',
            height: '2px',
            background: COLORS.accent.primary,
          }}
        />
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: '0.6875rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: COLORS.ink[400],
          }}
        >
          Industry Perspectives
        </span>
      </div>

      {/* Main panel - compact dark strip */}
      <div
        style={{
          background: COLORS.surface.dark,
          borderRadius: EFFECTS.radius.lg,
          overflow: 'hidden',
        }}
      >
        {/* Author tabs - horizontal navigation */}
        <div
          style={{
            display: 'flex',
            borderBottom: `1px solid ${COLORS.ink[700]}`,
          }}
        >
          {quotes.map((quote, i) => {
            const isActive = i === activeIndex;
            // Extract first name or short version
            const shortName = quote.author.split(' ')[0];

            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  flex: 1,
                  padding: `${SPACE[3]} ${SPACE[3]}`,
                  background: isActive ? COLORS.ink[800] : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? `2px solid ${COLORS.accent.primary}` : '2px solid transparent',
                  cursor: 'pointer',
                  transition: EFFECTS.transition.base,
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.ui,
                    fontSize: TYPE_SCALE.ui.xs.size,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? COLORS.ink[100] : COLORS.ink[400],
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {shortName}
                </span>
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '0.625rem',
                    color: isActive ? COLORS.accent.muted : COLORS.ink[500],
                    display: 'block',
                    marginTop: '2px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {quote.title.split(',')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quote content - compact */}
        <div
          style={{
            padding: `${SPACE[4]} ${SPACE[5]}`,
            display: 'flex',
            gap: SPACE[4],
            alignItems: 'flex-start',
          }}
        >
          {/* Large quote mark */}
          <div
            style={{
              fontFamily: FONTS.display,
              fontSize: '3rem',
              lineHeight: 1,
              color: COLORS.accent.primary,
              opacity: 0.4,
              marginTop: '-0.25rem',
              flexShrink: 0,
            }}
          >
            "
          </div>

          {/* Quote text and attribution */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <blockquote
              style={{
                fontFamily: FONTS.body,
                fontSize: TYPE_SCALE.body.sm.size,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: COLORS.ink[200],
                margin: 0,
                marginBottom: SPACE[3],
              }}
            >
              {activeQuote.quote}
            </blockquote>

            {/* Compact attribution row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: SPACE[2],
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.sm.size,
                  fontWeight: 600,
                  color: COLORS.ink[300],
                }}
              >
                {activeQuote.author}
              </span>
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.xs.size,
                  color: COLORS.ink[500],
                }}
              >
                {activeQuote.title}
              </span>
              {activeQuote.cite && (
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '0.625rem',
                    color: COLORS.accent.muted,
                    marginLeft: 'auto',
                  }}
                >
                  [{activeQuote.cite}]
                </span>
              )}
            </div>
          </div>

          {/* Navigation arrows - compact */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setActiveIndex(i => (i - 1 + quotes.length) % quotes.length)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: EFFECTS.radius.sm,
                background: COLORS.ink[800],
                border: `1px solid ${COLORS.ink[600]}`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: EFFECTS.transition.base,
              }}
              aria-label="Previous quote"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.ink[400]} strokeWidth="2">
                <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(i => (i + 1) % quotes.length)}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: EFFECTS.radius.sm,
                background: COLORS.ink[800],
                border: `1px solid ${COLORS.ink[600]}`,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: EFFECTS.transition.base,
              }}
              aria-label="Next quote"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.ink[400]} strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
