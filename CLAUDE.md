# Product Engineer Proposal - Component Architecture

A modular React component system that separates content from presentation, enabling markdown-driven document generation with rich visual components.

## Overview

This project transforms a markdown document (`Product_Engineer_Proposal.md`) with embedded component markers into a single-file React artifact suitable for Claude's artifact viewer.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CONTENT LAYER                                │
│  Product_Engineer_Proposal.md                                   │
│  (Markdown + Component Markers)                                 │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼  npm run parse
┌─────────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                   │
│  src/content.js                                                 │
│  (Extracted JSON: stats, charts, quotes, cards, etc.)           │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼  npm run build
┌─────────────────────────────────────────────────────────────────┐
│                 PRESENTATION LAYER                              │
│  src/components/*.jsx + src/App.jsx                             │
│  (React components + Layout)                                    │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    OUTPUT                                       │
│  dist/ProductEngineerProposal.jsx                               │
│  (Single-file Claude artifact)                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Directory Structure

```
northwestern/
├── Product_Engineer_Proposal.md    # Source content with markers
├── package.json                    # npm scripts
├── CLAUDE.md                       # This file
├── src/
│   ├── App.jsx                     # Main layout/composition
│   ├── content.js                  # Generated content data
│   ├── components/
│   │   ├── index.js               # Component exports
│   │   ├── RichText.jsx           # Markdown formatting parser
│   │   ├── Header.jsx             # Hero header
│   │   ├── StatsGrid.jsx          # Statistics display
│   │   ├── Chart.jsx              # 4 chart types
│   │   ├── Convergence.jsx        # Role convergence diagram
│   │   ├── QuoteCarousel.jsx      # Industry quotes
│   │   ├── PullQuote.jsx          # Featured quotes
│   │   ├── CardGrid.jsx           # Card layouts
│   │   ├── Credentials.jsx        # Credential badges
│   │   ├── Timeline.jsx           # Career timeline
│   │   ├── Testimonials.jsx       # Testimonial cards
│   │   ├── Table.jsx              # Markdown tables
│   │   ├── Section.jsx            # Section/subsection layout
│   │   └── Citations.jsx          # Citation formatting
│   └── utils/
│       ├── parser.js              # Markdown → content.js
│       └── build.js               # Bundle → single artifact
└── dist/
    └── ProductEngineerProposal.jsx # Final artifact output
```

## Build Commands

```bash
npm run parse    # Extract content from markdown → src/content.js
npm run build    # Bundle components → dist/ProductEngineerProposal.jsx
npm run all      # Run both in sequence
```

## Component Marker Syntax

The markdown file uses HTML comments as component markers:

### Stats Grid
```markdown
<!-- @stats -->
<!-- @stat value="59%" label="Engineers Using AI" source="Anthropic 2025" -->
<!-- /@stats -->
```

### Charts
```markdown
<!-- @chart type="growth" title="AI Adoption" subtitle="Year-over-year" -->
<!-- @series label="Usage" -->
<!-- @point year="2024" value="28" -->
<!-- @point year="2025" value="59" -->
<!-- /@series -->
<!-- /@chart -->
```

Chart types: `growth`, `bar`, `hierarchy`, `range`

### Cards
```markdown
<!-- @cards type="profile" columns="3" -->
<!-- @card icon="briefcase" title="Executive Credibility" -->
Description content here
<!-- /@card -->
<!-- /@cards -->
```

Card types: `profile`, `feature`, `topic`

Icons: `briefcase`, `code`, `rocket`, `palette`, `network`, `graduation`, `lightbulb`, `chart`, `users`, `shield`, `zap`, `target`, `layers`, `cpu`, `database`

### Pull Quotes
```markdown
<!-- @pullquote -->The featured quote text here<!-- /@pullquote -->
```

### Quote Carousel
```markdown
<!-- @quotes type="carousel" -->
<!-- @quote author="Name" title="Title" cite="7" -->
Quote content
<!-- /@quote -->
<!-- /@quotes -->
```

### Convergence Diagram
```markdown
<!-- @convergence -->
<!-- @role from="PMs" to="Engineering" description="Description here" -->
<!-- /@convergence -->
```

### Credentials
```markdown
<!-- @credentials -->
<!-- @credential value="9+" label="U.S. Patents" -->
<!-- /@credentials -->
```

### Timeline
```markdown
<!-- @timeline -->
<!-- @entry year="2021" company="Jiobit" title="Acquired" highlight="true" -->
Entry description
<!-- /@entry -->
<!-- /@timeline -->
```

### Testimonials
```markdown
<!-- @testimonials type="leadership" -->
<!-- @testimonial author="Name" title="Title" subtitle="Context" -->
Quote content
<!-- /@testimonial -->
<!-- /@testimonials -->
```

Testimonial types: `leadership`, `teaching`, `students`

### Tables
Standard markdown tables are automatically parsed:

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

Optional variant hint:
```markdown
<!-- @table variant="comparison" -->
```

Table variants: `default`, `comparison`, `data`, `checklist`, `timeline`

## Component Details

### RichText
Parses inline markdown formatting:
- `**bold**` → `<strong>`
- `*italic*` → `<em>`
- `[text](url)` → `<a href>`
- `[N]` → citation superscript

### Chart Types
- **growth**: Line/area chart with series and points
- **bar**: Horizontal bars with values and sources
- **hierarchy**: Arrow diagram showing transformations
- **range**: Range bands (e.g., salary ranges)

### CardGrid Types
- **profile**: Icon + title + description (3-column default)
- **feature**: Larger emphasized cards
- **topic**: Expandable accordion-style cards

### Testimonials Types
- **leadership**: Full-width cards with avatar
- **teaching**: 2-column grid
- **students**: Compact grid with source attribution

## Extending

### Adding a New Component

1. Create `src/components/NewComponent.jsx`
2. Export from `src/components/index.js`
3. Add marker extraction to `src/utils/parser.js`
4. Use in `src/App.jsx`
5. Run `npm run all` to rebuild

### Adding a New Marker Type

1. Define the marker syntax in the markdown documentation block
2. Add extraction regex to `parser.js`
3. Create or modify component to render the data
4. Update App.jsx to include the component

## Output

The final `dist/ProductEngineerProposal.jsx` is a self-contained React component that:
- Includes all content data inline
- Includes all component definitions
- Uses only Tailwind CSS utility classes
- Exports a default `App` component
- Is compatible with Claude's artifact viewer

## Styling

All components use Tailwind CSS with a consistent design language:
- Primary: Indigo/Purple gradient
- Text: Slate color palette
- Rounded corners: `rounded-xl`, `rounded-2xl`
- Shadows: `shadow-sm`, `shadow-md`
- Transitions: `transition-all`, `duration-500`
