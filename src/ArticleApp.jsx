/**
 * ArticleApp - Article layout for Market Sizing guide
 *
 * Reuses: Section, Subsection, Paragraph, BulletList, SectionDivider,
 *         Table, PullQuote, RichText (from existing component library)
 * New:    ArticleHeader, ArticleSectionNav, SVGFigure, NumberedList,
 *         Blockquote, BlockRenderer
 */
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, FONTS, TYPE_SCALE, LAYOUT, SPACE, EFFECTS } from './design-tokens';
import { Section, SectionDivider, Subsection, Paragraph, BulletList } from './components/Section';
import Table from './components/Table';
import PullQuote from './components/PullQuote';
import RichText from './components/RichText';
import { TerminalWindow } from './components/TerminalWindow';
import CardGrid from './components/CardGrid';
import StatsGrid from './components/StatsGrid';

// =============================================================================
// COMPONENT DATA — Rich components injected into specific sections
// =============================================================================

// Part 1 (section 2): Pull quote for the Romanian proverb
const PROVERB_QUOTE = {
  quote: "The person who chases two rabbits catches neither.",
  author: "Romanian Proverb",
};

// Part 2 (section 3): Five Segmentation Lenses as feature cards
const SEGMENTATION_CARDS = {
  type: 'feature',
  columns: 3,
  cards: [
    { icon: 'target', title: 'Geographic', content: 'Where are these customers physically? Starting in a constrained geography limits resource drain and lets you build density.' },
    { icon: 'users', title: 'Demographic', content: 'The countable, observable traits. Age, income, household composition, education. For B2B: company size, industry, job title.' },
    { icon: 'brain', title: 'Psychographic', content: 'Why they buy. Values, attitudes, risk tolerances, willingness to adopt something new. The hardest to count but most revealing.' },
    { icon: 'chart', title: 'Price', content: 'Premium/performance or budget/mainstream? A segmentation dimension in its own right with major impact on unit economics.' },
    { icon: 'network', title: 'Distribution', content: 'How does this customer buy? Direct sales, e-commerce, retail? Match existing behavior or risk zero traction.' },
  ],
};

// Part 5 (section 6): Bottom-up method as terminal summary
const BOTTOMUP_TERMINAL = {
  title: 'bottom-up-model.md',
  command: 'cat',
  variant: 'compact',
  lines: [
    '**Step 1** → Identify base population (Census, BLS, etc.)',
    '**Step 2** → Apply demographic & behavioral filters (sourced %)',
    '**Step 3** → Estimate users per unit (household/org multiplier)',
    '**Step 4** → Determine revenue per user (triangulate pricing)',
    '**Step 5** → Calculate: Base × Filters × Users × Revenue = TAM',
  ],
};

// Part 6 (section 7): Jiobit SAM key numbers
const JIOBIT_STATS = [
  { value: '22.6M', label: 'US Households', source: 'with children under 18, income $40k+' },
  { value: '41.7%', label: 'Age Filter', source: 'children in target range (3–10)' },
  { value: '65%', label: 'Interest Rate', source: 'from independent study (n=588)' },
  { value: '$3.5B', label: 'Annual SAM', source: '6.13M households × 2.2 children × $260.88', highlight: true },
];

// Part 7 (section 8): 7-Point Beachhead Checklist as feature cards
const BEACHHEAD_CARDS = {
  type: 'feature',
  columns: 3,
  cards: [
    { icon: 'chart', title: 'Well-Funded Customer', content: 'Do they actually have money to pay? A segment full of fans who can\'t afford you isn\'t viable.' },
    { icon: 'target', title: 'Readily Accessible', content: 'Can you reach them directly? If you need three layers of intermediaries, you\'ll burn cash before you learn.' },
    { icon: 'zap', title: 'Compelling Reason to Buy', content: 'Must-have or nice-to-have? Your biggest competitor is almost always doing nothing.' },
    { icon: 'layers', title: 'Whole Product Delivery', content: 'Can you provide a complete, functional solution? Nobody wants to buy an alternator — they want the car.' },
    { icon: 'shield', title: 'No Entrenched Competition', content: 'Is there a dominant incumbent that could block you regardless of how good your product is?' },
    { icon: 'rocket', title: 'Strategic Follow-On', content: 'Does winning this market make the next one easier? Lead pin logic for the bowling alley.' },
    { icon: 'lightbulb', title: 'Team Passion & Values', content: 'Is the founding team prepared to live in this market for 5+ years? The most underrated filter.' },
  ],
};


// Part 12 (section 13): Workflow as terminal summary
const WORKFLOW_TERMINAL = {
  title: 'workflow.md',
  command: 'cat',
  variant: 'default',
  lines: [
    '**1** Segmentation → brainstorm 10-12 segments (5 lenses)',
    '**2** Prioritization → apply 7-point beachhead checklist',
    '**3** Validate → same product, similar sales, Word of Mouth',
    '**4** Base population → find verifiable count in public data',
    '**5** Design survey → screening, WTP, density questions',
    '**6** Calculate → Base × Filters × Users × Revenue = SAM',
    '**7** Assumptions ledger → label every input by confidence',
    '**8** Map bowling pins → 3-5 follow-on markets',
    '**9** Go/No-Go → honest assessment of all four gates',
  ],
};

// =============================================================================
// ARTICLE HEADER - Matches reference Header style (light bg, full viewport)
// =============================================================================

const ArticleHeader = ({ data }) => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Typewriter effect for subtitle
  useEffect(() => {
    const text = data.subtitle || '';
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 35);
      return () => clearInterval(typeInterval);
    }, 800);
    return () => clearTimeout(startDelay);
  }, [data.subtitle]);

  return (
    <header
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(170deg, #f8f9fc 0%, #eef1f8 30%, #e8edf5 60%, #f5f7fa 100%)',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(#94a3b820 1px, transparent 1px),
            linear-gradient(90deg, #94a3b820 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Gradient accent shapes */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, #6366f120 0%, #8b5cf615 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '45%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, #3b82f615 0%, #06b6d410 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '20%',
          width: '40%',
          height: '45%',
          background: 'radial-gradient(ellipse at center, #f59e0b10 0%, #f9731608 50%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top navigation bar */}
      <nav
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '1.5rem 0',
          borderBottom: `1px solid ${COLORS.ink[200]}`,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth.wide,
            margin: '0 auto',
            padding: `0 ${LAYOUT.margin}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo/Brand mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                background: COLORS.accent.primary,
                borderRadius: EFFECTS.radius.md,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: EFFECTS.shadow.md,
              }}
            >
              <span
                style={{
                  color: 'white',
                  fontFamily: FONTS.display,
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                M
              </span>
            </div>
            <div>
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.sm.size,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: COLORS.ink[700],
                  display: 'block',
                }}
              >
                McCormick School
              </span>
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.xs.size,
                  letterSpacing: '0.05em',
                  color: COLORS.ink[400],
                  textTransform: 'uppercase',
                }}
              >
                Northwestern University
              </span>
            </div>
          </div>

          {/* Date badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 1rem',
              background: COLORS.surface.elevated,
              borderRadius: EFFECTS.radius.full,
              border: `1px solid ${COLORS.ink[200]}`,
              boxShadow: EFFECTS.shadow.sm,
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: EFFECTS.radius.full,
                background: COLORS.accent.primary,
              }}
            />
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: TYPE_SCALE.mono.sm.size,
                color: COLORS.ink[600],
                letterSpacing: '0.02em',
              }}
            >
              {data.course} · {data.date}
            </span>
          </div>
        </div>
      </nav>

      {/* Main hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          maxWidth: LAYOUT.maxWidth.wide,
          width: '100%',
          margin: '0 auto',
          padding: `${SPACE[10]} ${LAYOUT.margin}`,
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            width: '100%',
            alignItems: 'center',
          }}
        >
          {/* Left column - Main content */}
          <div className="hero-main" style={{ gridColumn: 'span 8' }}>
            {/* Kicker/Category */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '2px',
                  background: COLORS.accent.primary,
                }}
              />
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.sm.size,
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: COLORS.accent.primary,
                }}
              >
                Course Guide
              </span>
            </div>

            {/* Main title - multi-line with gradient accent */}
            <h1
              style={{
                fontFamily: FONTS.display,
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: COLORS.ink[900],
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ display: 'block' }}>Market</span>
              <span
                style={{
                  display: 'block',
                  paddingBottom: '0.15em',
                  background: `linear-gradient(135deg, ${COLORS.accent.primary} 0%, ${COLORS.accent.light} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Sizing
              </span>
              <span
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                  color: COLORS.ink[600],
                  marginTop: '0.25rem',
                }}
              >
                & Beachhead Strategy
              </span>
            </h1>

            {/* Subtitle - Typewriter with terminal prompt */}
            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: 1.6,
                color: COLORS.ink[600],
                maxWidth: '38rem',
                marginBottom: '3rem',
                minHeight: '3.5rem',
              }}
            >
              <span style={{ color: COLORS.accent.primary, marginRight: '0.5rem' }}>{'>'}</span>
              {typedText}
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2em',
                  background: isTyping ? COLORS.accent.primary : COLORS.ink[400],
                  marginLeft: '2px',
                  verticalAlign: 'text-bottom',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </p>

            {/* Author info card */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1rem 1.5rem',
                background: COLORS.surface.elevated,
                borderRadius: EFFECTS.radius.xl,
                border: `1px solid ${COLORS.ink[200]}`,
                boxShadow: EFFECTS.shadow.lg,
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: EFFECTS.radius.full,
                  overflow: 'hidden',
                  border: `3px solid ${COLORS.accent.primary}`,
                  background: imageError
                    ? `linear-gradient(135deg, ${COLORS.accent.primary} 0%, ${COLORS.accent.light} 100%)`
                    : COLORS.ink[100],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {!imageError && data.headshot ? (
                  <img
                    src={data.headshot}
                    alt={data.from}
                    onError={() => setImageError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <span
                    style={{
                      fontFamily: FONTS.ui,
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'white',
                    }}
                  >
                    JR
                  </span>
                )}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: FONTS.ui,
                    fontSize: TYPE_SCALE.ui.lg.size,
                    fontWeight: 600,
                    color: COLORS.ink[800],
                    marginBottom: '0.25rem',
                  }}
                >
                  {data.from}
                </p>
                <a
                  href={`mailto:${data.fromEmail}`}
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: TYPE_SCALE.mono.sm.size,
                    color: COLORS.ink[500],
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {data.fromEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Featured quote */}
          <div
            className="hero-quote"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                position: 'relative',
                padding: '2rem',
                background: COLORS.surface.elevated,
                borderRadius: EFFECTS.radius.xl,
                border: `1px solid ${COLORS.ink[200]}`,
                boxShadow: EFFECTS.shadow.lg,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  left: '1.5rem',
                  fontFamily: FONTS.display,
                  fontSize: '5rem',
                  fontWeight: 400,
                  lineHeight: 1,
                  color: COLORS.accent.primary,
                  opacity: 0.2,
                  userSelect: 'none',
                }}
              >
                "
              </div>
              <blockquote
                style={{
                  position: 'relative',
                  fontFamily: FONTS.body,
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: COLORS.ink[700],
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                The person who chases two rabbits catches neither.
              </blockquote>
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    width: '12px',
                    height: '1px',
                    background: COLORS.ink[300],
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.ui,
                    fontSize: TYPE_SCALE.ui.sm.size,
                    fontWeight: 600,
                    color: COLORS.ink[600],
                  }}
                >
                  Romanian Proverb
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: `0 ${LAYOUT.margin} 3rem`,
        }}
      >
        <div
          style={{
            maxWidth: LAYOUT.maxWidth.wide,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '40px',
              background: `linear-gradient(to bottom, ${COLORS.accent.primary}, transparent)`,
            }}
          />
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: EFFECTS.radius.full,
              background: COLORS.accent.primary,
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: TYPE_SCALE.mono.sm.size,
              color: COLORS.ink[400],
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to explore
          </span>
        </div>
      </div>

      {/* CSS animation and responsive styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-main {
            grid-column: span 1 !important;
          }
          .hero-quote {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </header>
  );
};

// =============================================================================
// ARTICLE SECTION NAV - Data-driven floating nav
// =============================================================================

const ArticleSectionNav = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    // Inject media query styles
    if (typeof document !== 'undefined') {
      const existing = document.getElementById('article-nav-styles');
      if (!existing) {
        const style = document.createElement('style');
        style.id = 'article-nav-styles';
        style.textContent = `
          .article-nav-wrapper { display: none; }
          @media (min-width: 1280px) { .article-nav-wrapper { display: block; } }
        `;
        document.head.appendChild(style);
      }
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      const sectionEls = document.querySelectorAll('[data-section]');
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = 0;
      sectionEls.forEach((el) => {
        if (scrollPos >= el.offsetTop) {
          current = parseInt(el.getAttribute('data-section'), 10);
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (num) => {
    const el = document.querySelector(`[data-section="${num}"]`);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="article-nav-wrapper"
      style={{
        position: 'fixed',
        left: SPACE[6],
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: `opacity ${EFFECTS.transition.slow}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: SPACE[1],
          padding: `${SPACE[3]} ${SPACE[2]}`,
          background: `${COLORS.surface.elevated}F8`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: EFFECTS.radius.xl,
          border: `1px solid ${COLORS.ink[100]}`,
          boxShadow: EFFECTS.shadow.lg,
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <div style={{ padding: `${SPACE[1]} ${SPACE[3]}`, marginBottom: SPACE[1] }}>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: COLORS.ink[300],
            }}
          >
            Navigate
          </span>
        </div>

        {sections.map((section) => {
          const isActive = currentSection === section.number;
          const isHovered = hoveredSection === section.number;

          return (
            <button
              key={section.number}
              onClick={() => scrollTo(section.number)}
              onMouseEnter={() => setHoveredSection(section.number)}
              onMouseLeave={() => setHoveredSection(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACE[3],
                padding: `${SPACE[2]} ${SPACE[3]}`,
                width: '100%',
                background: isActive ? COLORS.accent.wash : isHovered ? COLORS.ink[50] : 'transparent',
                border: 'none',
                borderRadius: EFFECTS.radius.lg,
                cursor: 'pointer',
                transition: `all ${EFFECTS.transition.fast}`,
                textAlign: 'left',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '3px',
                  height: isActive ? '60%' : '0%',
                  background: COLORS.accent.primary,
                  borderRadius: EFFECTS.radius.full,
                  transition: `height ${EFFECTS.transition.base}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: TYPE_SCALE.mono.sm.size,
                  fontWeight: 600,
                  color: isActive ? COLORS.accent.primary : COLORS.ink[400],
                  minWidth: '1.5rem',
                  transition: `color ${EFFECTS.transition.fast}`,
                }}
              >
                {section.number}
              </span>
              <span
                style={{
                  fontFamily: FONTS.ui,
                  fontSize: TYPE_SCALE.ui.sm.size,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? COLORS.ink[800] : COLORS.ink[500],
                  transition: `color ${EFFECTS.transition.fast}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {section.short}
              </span>
            </button>
          );
        })}

        {/* Progress bar */}
        <div style={{ marginTop: SPACE[2], padding: `0 ${SPACE[3]}`, width: '100%' }}>
          <div
            style={{
              height: '2px',
              background: COLORS.ink[100],
              borderRadius: EFFECTS.radius.full,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(currentSection / sections.length) * 100}%`,
                background: `linear-gradient(90deg, ${COLORS.accent.primary}, ${COLORS.accent.light})`,
                borderRadius: EFFECTS.radius.full,
                transition: `width ${EFFECTS.transition.base}`,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

// =============================================================================
// SVG FIGURE - Inline SVG with caption and scroll animation
// =============================================================================

const SVGFigure = ({ content, caption }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1, rootMargin: '-30px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // SVG content comes from build-time local files, not user input
  const svgMarkup = { __html: content };

  return (
    <figure
      ref={ref}
      style={{
        margin: `${SPACE[8]} 0`,
        padding: 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div
        style={{
          background: COLORS.surface.elevated,
          borderRadius: EFFECTS.radius.xl,
          border: `1px solid ${COLORS.ink[100]}`,
          boxShadow: EFFECTS.shadow.md,
          padding: SPACE[6],
          overflow: 'hidden',
        }}
      >
        <div
          style={{ maxWidth: '100%', overflow: 'hidden' }}
          dangerouslySetInnerHTML={svgMarkup}
        />
      </div>
      {caption && (
        <figcaption
          style={{
            fontFamily: FONTS.ui,
            fontSize: TYPE_SCALE.ui.sm.size,
            color: COLORS.ink[400],
            marginTop: SPACE[3],
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

// =============================================================================
// NUMBERED LIST - Styled ordered list
// =============================================================================

const NumberedList = ({ items }) => (
  <ol
    style={{
      listStyle: 'none',
      padding: 0,
      margin: `${SPACE[5]} 0`,
      maxWidth: LAYOUT.maxWidth.prose,
    }}
  >
    {items.map((item, i) => (
      <li
        key={i}
        style={{
          display: 'flex',
          gap: SPACE[4],
          marginBottom: SPACE[4],
          alignItems: 'baseline',
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: COLORS.accent.primary,
            flexShrink: 0,
            minWidth: '1.25rem',
            textAlign: 'right',
          }}
        >
          {i + 1}.
        </span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: TYPE_SCALE.body.sm.size,
            lineHeight: TYPE_SCALE.body.sm.lineHeight,
            color: COLORS.ink[500],
          }}
        >
          <RichText>{item}</RichText>
        </span>
      </li>
    ))}
  </ol>
);

// =============================================================================
// ARTICLE BLOCKQUOTE - For formulas and key callouts
// =============================================================================

const ArticleBlockquote = ({ text }) => (
  <div
    style={{
      margin: `${SPACE[6]} 0`,
      padding: `${SPACE[5]} ${SPACE[6]}`,
      borderLeft: `3px solid ${COLORS.accent.primary}`,
      background: COLORS.accent.wash,
      borderRadius: `0 ${EFFECTS.radius.lg} ${EFFECTS.radius.lg} 0`,
      maxWidth: LAYOUT.maxWidth.prose,
    }}
  >
    {text.split('\n').map((line, i) => (
      <p
        key={i}
        style={{
          fontFamily: FONTS.body,
          fontSize: TYPE_SCALE.body.md.size,
          lineHeight: TYPE_SCALE.body.md.lineHeight,
          color: COLORS.ink[600],
          fontWeight: 500,
          margin: 0,
          marginBottom: i < text.split('\n').length - 1 ? SPACE[3] : 0,
        }}
      >
        <RichText>{line}</RichText>
      </p>
    ))}
  </div>
);

// =============================================================================
// BLOCK RENDERER - Maps content blocks to components
// =============================================================================

const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <Paragraph>{block.text}</Paragraph>;
    case 'bulletList':
      return <BulletList items={block.items} />;
    case 'numberedList':
      return <NumberedList items={block.items} />;
    case 'table':
      return <Table headers={block.headers} rows={block.rows} />;
    case 'blockquote':
      return <ArticleBlockquote text={block.text} />;
    case 'svg':
      return <SVGFigure content={block.content} caption={block.caption} />;
    case 'subsection':
      return (
        <Subsection title={block.title}>
          {block.blocks.map((b, i) => (
            <BlockRenderer key={i} block={b} />
          ))}
        </Subsection>
      );
    default:
      return null;
  }
};

// =============================================================================
// FOOTER
// =============================================================================

const ArticleFooter = () => (
  <footer
    style={{
      background: COLORS.ink[900],
      padding: `${SPACE[10]} 0`,
      textAlign: 'center',
    }}
  >
    <div
      style={{
        maxWidth: LAYOUT.maxWidth.content,
        margin: '0 auto',
        padding: `0 ${LAYOUT.margin}`,
      }}
    >
      <p
        style={{
          fontFamily: FONTS.ui,
          fontSize: TYPE_SCALE.ui.md.size,
          color: COLORS.ink[400],
          margin: 0,
          marginBottom: SPACE[2],
        }}
      >
        Northwestern University · McCormick School of Engineering
      </p>
      <p
        style={{
          fontFamily: FONTS.ui,
          fontSize: TYPE_SCALE.ui.sm.size,
          color: COLORS.ink[500],
          margin: 0,
        }}
      >
        MPD-409 · Spring 2026
      </p>
    </div>
  </footer>
);

// =============================================================================
// MAIN APP
// =============================================================================

const App = () => {
  // Inject global keyframes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('article-keyframes');
    if (existing) return;
    const style = document.createElement('style');
    style.id = 'article-keyframes';
    style.textContent = `
      /* Make inlined SVGs responsive */
      figure svg {
        width: 100%;
        height: auto;
        display: block;
      }
      /* Tighter section spacing for article layout */
      [data-section] {
        padding-top: ${SPACE[7]} !important;
        padding-bottom: ${SPACE[6]} !important;
      }
      /* Smooth scrolling */
      html { scroll-behavior: smooth; }
      /* Base reset */
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: system-ui, -apple-system, sans-serif; background: ${COLORS.surface.paper}; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: COLORS.surface.paper }}>
      <ArticleSectionNav sections={CONTENT.sections} />
      <ArticleHeader data={CONTENT.header} />

      {CONTENT.sections.map((section, idx) => (
        <React.Fragment key={section.number}>
          <Section number={section.number} title={section.title}>
            {/* Inject PullQuote before Part 1 content (section 2) */}
            {section.number === 2 && (
              <PullQuote quote={PROVERB_QUOTE.quote} author={PROVERB_QUOTE.author} align="left" />
            )}

            {section.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}

            {/* Inject CardGrid after Part 2 content (section 3) — segmentation lenses */}
            {section.number === 3 && (
              <CardGrid type={SEGMENTATION_CARDS.type} columns={SEGMENTATION_CARDS.columns} cards={SEGMENTATION_CARDS.cards} />
            )}
            {/* Inject TerminalWindow after Part 5 content (section 6) — bottom-up steps */}
            {section.number === 6 && (
              <TerminalWindow title={BOTTOMUP_TERMINAL.title} command={BOTTOMUP_TERMINAL.command} lines={BOTTOMUP_TERMINAL.lines} variant={BOTTOMUP_TERMINAL.variant} />
            )}
            {/* Inject StatsGrid after Part 6 content (section 7) — Jiobit numbers */}
            {section.number === 7 && (
              <StatsGrid stats={JIOBIT_STATS} />
            )}
            {/* Inject CardGrid after Part 7 content (section 8) — beachhead checklist */}
            {section.number === 8 && (
              <CardGrid type={BEACHHEAD_CARDS.type} columns={BEACHHEAD_CARDS.columns} cards={BEACHHEAD_CARDS.cards} />
            )}
            {/* Inject TerminalWindow after Part 12 content (section 13) — workflow */}
            {section.number === 13 && (
              <TerminalWindow title={WORKFLOW_TERMINAL.title} command={WORKFLOW_TERMINAL.command} lines={WORKFLOW_TERMINAL.lines} variant={WORKFLOW_TERMINAL.variant} />
            )}
          </Section>
        </React.Fragment>
      ))}

      <ArticleFooter />
    </div>
  );
};

export default App;
