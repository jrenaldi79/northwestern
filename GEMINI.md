<!-- Last updated: 2026-02-03 -->
<!-- SYNCED FILE: Edit any of CLAUDE.md, AGENTS.md, or GEMINI.md then run `npm run sync-docs` -->

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
├── Product_Engineer_Proposal.md    # Source content with markers (SINGLE SOURCE OF TRUTH)
├── package.json                    # npm scripts
├── CLAUDE.md                       # Agent docs (synced)
├── AGENTS.md                       # Agent docs (synced)
├── GEMINI.md                       # Agent docs (synced)
├── preview.html                    # Browser preview (uses UMD build)
├── index.html                      # Synced copy of dist/index.html
├── src/
│   ├── App.jsx                     # Main layout/composition
│   ├── content.js                  # Generated content data (DO NOT EDIT - generated)
│   ├── design-tokens.js            # Colors, fonts, spacing, effects
│   ├── components/
│   │   ├── index.js               # Component exports
│   │   ├── RichText.jsx           # Markdown formatting parser
│   │   ├── Header.jsx             # Hero header
│   │   ├── StatsGrid.jsx          # Statistics display
│   │   ├── Chart.jsx              # 4 chart types
│   │   ├── Convergence.jsx        # Role convergence diagram
│   │   ├── QuoteCarousel.jsx      # Industry quotes
│   │   ├── PullQuote.jsx          # Featured quotes
│   │   ├── CardGrid.jsx           # Card layouts (profile, feature, topic)
│   │   ├── Credentials.jsx        # Credential badges
│   │   ├── Timeline.jsx           # Career timeline
│   │   ├── Testimonials.jsx       # Testimonial cards
│   │   ├── Table.jsx              # Markdown tables
│   │   ├── Section.jsx            # Section/subsection layout
│   │   ├── SectionNav.jsx         # Floating section navigation
│   │   ├── TerminalWindow.jsx     # macOS-style terminal window
│   │   ├── WorkList.jsx           # Work list items
│   │   └── Citations.jsx          # Citation formatting
│   └── utils/
│       ├── parser.js              # Markdown → content.js
│       └── build.js               # Bundle → single artifact
├── scripts/
│   ├── validate-build.js          # Build validation checks
│   ├── update-preview.js          # Updates preview.html with bundle
│   ├── verify-artifact.js         # Claude artifact compatibility check
│   └── sync-agent-docs.js         # Bidirectional doc sync
└── dist/
    ├── ProductEngineerProposal.jsx # Final artifact output (single-file React)
    └── index.html                  # Viewable HTML output (open in browser)
```

## Core Principle: Single Source of Truth

**All content lives in `Product_Engineer_Proposal.md`**. The markdown file is the authoritative source for:
- All text content, quotes, statistics, and data
- Component placement via section attributes
- Citations and references

**Never hardcode content in App.jsx or components.** If you need content to appear somewhere:
1. Add it to the markdown with appropriate markers
2. Use section/position attributes to control placement
3. Update parser.js if needed to extract new attributes
4. Use helper functions in App.jsx to filter content by section

## Build Commands

```bash
npm run parse      # Extract content from markdown → src/content.js
npm run build      # Bundle components + validate → dist/ProductEngineerProposal.jsx
npm run all        # Run parse + build + verify in sequence
npm run verify     # Check artifact compatibility with Claude
npm run sync-docs  # Sync CLAUDE.md, AGENTS.md, GEMINI.md (bidirectional)
```

## Component Marker Syntax

The markdown file uses HTML comments as component markers:

### Header
```markdown
<!-- @header -->
<!-- @from name="John Renaldi" email="jrenaldi@northwestern.edu" linkedin="https://linkedin.com/in/jrenaldi" github="https://github.com/jrenaldi" -->
<!-- @headshot url="https://example.com/photo.jpg" -->
<!-- @date value="February 2026" -->
<!-- @title value="The Product Engineer" -->
<!-- @subtitle value="Subtitle text here" -->
<!-- /@header -->
```

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
<!-- @cards type="profile" columns="3" section="2" -->
<!-- @card icon="briefcase" title="Executive Credibility" -->
Description content here
<!-- /@card -->
<!-- /@cards -->
```

Card types: `profile`, `feature`, `topic`

The `section` attribute associates the card group with a specific section number for proper rendering placement.

For `topic` cards, include an `audience` attribute and optional expanded content:
```markdown
<!-- @cards type="topic" columns="3" section="4" -->
<!-- @card icon="search" title="Discovery" audience="All engineering disciplines" -->
Short summary shown in collapsed state.
<!-- @expanded -->
Detailed content revealed when user expands the card. Supports **markdown** formatting.
<!-- /@card -->
<!-- /@cards -->
```

For expandable `profile` cards with additional detail, use the `@expanded` marker:
```markdown
<!-- @cards type="profile" columns="3" section="3" -->
<!-- @card icon="briefcase" title="Executive Credibility" -->
Short summary shown by default.
<!-- @expanded -->
Longer detailed content revealed when user clicks to expand.
<!-- /@card -->
<!-- /@cards -->
```

Icons: `briefcase`, `code`, `rocket`, `palette`, `network`, `graduation`, `lightbulb`, `chart`, `users`, `shield`, `zap`, `target`, `layers`, `cpu`, `database`, `search`, `compass`

### Terminal
macOS-style terminal window for section summaries:
```markdown
<!-- @terminal title="filename.md" command="cat" variant="compact" -->
- Line 1 content
- Line 2 content
- Line 3 content
<!-- /@terminal -->
```

Variants: `default`, `compact`

### Pull Quotes
```markdown
<!-- @pullquote -->The featured quote text here<!-- /@pullquote -->
```

For 3rd party quotes, add author and title attribution:
```markdown
<!-- @pullquote author="Jensen Huang" title="NVIDIA CEO" -->There's a new programming language. It's called 'human.'<!-- /@pullquote -->
```

### Quote Carousel
```markdown
<!-- @quotes type="carousel" section="triad" -->
<!-- @quote author="Name" title="Title" cite="7" -->
Quote content
<!-- /@quote -->
<!-- /@quotes -->
```

The `section` attribute controls where the carousel renders. App.jsx uses `getQuotesBySection('sectionName')` to filter quotes. Multiple carousels can exist in the document with different section names.

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

### Header
Hero header component with author info and document metadata:
- **@from**: Author name, email, linkedin URL, github URL
- **@headshot**: Profile photo URL
- **@date**: Document date
- **@title**: Main title
- **@subtitle**: Subtitle/tagline

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

### Terminal
macOS-style terminal window that provides visual summaries:
- **title**: Filename displayed in terminal title bar
- **command**: Command shown (e.g., `cat`, `tree`)
- **variant**: `default` or `compact`
- Content is rendered as bullet points inside the terminal

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

### Content Filtering in App.jsx

App.jsx uses helper functions to retrieve content by section:

```javascript
// Get cards for a specific section number
const getCardsBySection = (sectionNum) => {
  return CONTENT.cards.find(group => group.section === String(sectionNum));
};

// Get quotes for a specific section name
const getQuotesBySection = (sectionName) => {
  return CONTENT.quotes.filter(q => q.section === sectionName);
};
```

Use these patterns when adding new section-aware content types.

## Output

The build generates two files:

**`dist/ProductEngineerProposal.jsx`** - Self-contained React component:
- Includes all content data inline
- Includes all component definitions
- Uses only Tailwind CSS utility classes
- Exports a default `App` component
- Compatible with Claude's artifact viewer

**`dist/index.html`** - Standalone HTML file:
- Open directly in any browser to preview
- No dev server needed
- This is the primary way to verify changes

**Workflow:**
```bash
npm run build          # Parse markdown + bundle + generate HTML
open dist/index.html   # Preview in browser
```

## Styling

All components use a **design token system** defined in `src/design-tokens.js`:

```javascript
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE, LAYOUT } from './design-tokens';
```

- **COLORS**: `ink` (text), `surface` (backgrounds), `accent` (primary/light/wash)
- **FONTS**: `display`, `body`, `ui`, `mono`
- **TYPE_SCALE**: Predefined sizes for display, body, ui, mono
- **EFFECTS**: `shadow`, `radius`, `transition`
- **SPACE**: Spacing scale (SPACE[1] through SPACE[12])

Design aesthetic: "The Scholarly Disruptor" - editorial magazine style with:
- Clean, print-inspired sections
- Confident white space
- Professional hierarchy
- Subtle animations on interaction

## Testing Strategy

**Automated validation (`npm run build` includes `validate-build.js`):**
- Content structure — required sections present
- Build integrity — React imports, component exports, JSX balance
- Bundle size monitoring

**Visual verification:**
- Component rendering → open `dist/index.html`
- Layout and styling → manual review in browser
- Content accuracy → compare against markdown source

**What we don't unit test (and why):**
- Component rendering — visual output is the real test, DOM mocks give false confidence
- Build bundling — validated by the build process itself
- Styling — must be verified visually

## Verification Approach

When verifying UI changes, use a **smoke test** approach:

1. **Build**: Run `npm run build` (this parses markdown, bundles, and validates)
2. **Preview**: Open `dist/index.html` in browser to verify changes
3. **Scope**: Only verify the specific component or section that was modified

**Default behavior**: Trust that unchanged components still work. Focus verification on the delta.

## Pre-Commit Checklist

- [ ] Content changes made in markdown (not hardcoded in App.jsx or components)
- [ ] Ran `npm run build` successfully
- [ ] Verified change in `dist/index.html`
- [ ] No hardcoded content in components
- [ ] Ran `npm run sync-docs` if agent docs were modified

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Build fails with rollup/module error | Corrupted node_modules | `rm -rf node_modules package-lock.json && npm install` |
| Content not updating in output | Forgot to rebuild | Run `npm run build` |
| Component not rendering | Missing export in index.js | Add export to `src/components/index.js` |
| Parser not extracting content | Malformed marker syntax | Check marker matches documented syntax in this file |
| "CONTENT is not defined" error | content.js not generated | Run `npm run parse` first, or `npm run build` |
| Agent docs out of sync | Edited one file only | Run `npm run sync-docs` |

## Validation Commands

```bash
# Verify component count matches docs (should be 17)
ls src/components/*.jsx | wc -l

# Check content.js was generated
ls -la src/content.js

# Verify build output exists
ls -la dist/index.html dist/ProductEngineerProposal.jsx

# Check bundle size
wc -c dist/ProductEngineerProposal.jsx
```

## When to Update This Document

| Change Type | Sections to Update |
|-------------|-------------------|
| New component added | Directory Structure, add to components list |
| New marker type | Component Marker Syntax, Component Details |
| Build process change | Build Commands, Output |
| New design token | Styling section |
| Architecture change | Overview diagram, Directory Structure |

**After editing**: Run `npm run sync-docs` to keep CLAUDE.md, AGENTS.md, and GEMINI.md in sync.

## GitHub Access

**Use Desktop Commander for all git/gh operations.** The project lives at:
```
/Users/john_renaldi/Documents/ClaudeCowork/northwestern
```

Common commands (run via Desktop Commander):
```bash
# Push changes
cd /Users/john_renaldi/Documents/ClaudeCowork/northwestern && git push

# Check GitHub Pages status
cd /Users/john_renaldi/Documents/ClaudeCowork/northwestern && gh api repos/jrenaldi79/northwestern/pages

# View deployment status
cd /Users/john_renaldi/Documents/ClaudeCowork/northwestern && gh run list --limit 5
```

**Live site**: https://jrenaldi79.github.io/northwestern/
