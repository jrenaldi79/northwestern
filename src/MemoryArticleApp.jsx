/**
 * ArticleApp for AI Memory Architectures report
 *
 * Reuses: Section, Subsection, Paragraph, BulletList, SectionDivider,
 *         Table, PullQuote, RichText, TerminalWindow, CardGrid, StatsGrid,
 *         QuadrantChart, FlowDiagram, Chart, QuoteCarousel, Convergence,
 *         Credentials, Testimonials, WorkList
 * New:    ArticleHeader, ArticleSectionNav, MobileTOC, SVGFigure,
 *         NumberedList, Blockquote, BlockRenderer
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
import QuadrantChart from './components/QuadrantChart';
import FlowDiagram from './components/FlowDiagram';
import Chart from './components/Chart';
import QuoteCarousel from './components/QuoteCarousel';
import Convergence from './components/Convergence';
import Credentials from './components/Credentials';
import Testimonials from './components/Testimonials';
import WorkList from './components/WorkList';

// =============================================================================
// COMPONENT DATA — Rich components injected into specific sections
// =============================================================================

// Section 3: Dual Knowledge Base cards (after "How Each System Implements Isolation" subsection)
const DUAL_KB_CARDS = {
  type: 'feature',
  columns: 2,
  cards: [
    { icon: 'briefcase', title: 'Company Brain', content: 'Product roadmap, pricing logic, strategy docs, onboarding playbook. Changes weekly. Whole team reads. Fed by internal documents and meetings.' },
    { icon: 'users', title: 'Customer Brain', content: 'Per-account usage patterns, feature requests, renewal dates, support history. Changes with every interaction. Agents read at point of service.' },
  ],
};

// Section 4: Decision framework terminal
const DECISION_TERMINAL = {
  title: 'pick-your-architecture.md',
  command: 'cat',
  variant: 'compact',
  lines: [
    '**1** Already own Microsoft 365? → Work IQ (extend license, no new vendor)',
    '**2** Need typed ontology (regulated, modeling-heavy)? → Palantir Foundry + AIP',
    '**3** Want an enterprise graph, not on M365? → Glean (permission-aware, dev API)',
    '**4** Speed is top constraint? → Supermemory (managed, free tier)',
    '**5** Regulated + need bi-temporal audit? → Zep (SOC 2, 4 timestamps)',
    '**6** Regulated + self-hosted? → Hindsight (MIT, PostgreSQL)',
    '**7** Humans need to read & edit directly? → LLM Wiki',
    '**8** Deployment sovereignty critical? → Hindsight (VPC)',
    '**9** Otherwise? → Zep (enterprise RBAC, graph isolation)',
  ],
};

// Section 4: Quadrant charts (after "What Each System Is Really Betting On" subsection)
const QUADRANT_1 = {
  title: 'Strategic Fit: Governance Burden vs. Dynamic Memory Needs',
  xAxisLow: 'Low governance burden',
  xAxisHigh: 'High governance burden',
  yAxisLow: 'Curated knowledge needs',
  yAxisHigh: 'Dynamic operational memory',
  quadrantLabels: ['Dynamic + lower governance', 'Dynamic + higher governance', 'Curated + lower governance', 'Curated + higher governance'],
  dots: [
    { label: 'LLM Wiki', color: '#ef4444', x: 38, y: 34 },
    { label: 'Supermemory', color: '#f59e0b', x: 52, y: 73 },
    { label: 'Hindsight', color: '#22c55e', x: 66, y: 82 },
    { label: 'Zep', color: '#6366f1', x: 82, y: 84 },
    { label: 'Glean', color: '#8b5cf6', x: 56, y: 56 },
    { label: 'Work IQ', color: '#0078d4', x: 74, y: 70 },
    { label: 'Palantir', color: '#0f172a', x: 92, y: 48 },
  ],
};

const QUADRANT_2 = {
  title: 'Adoption Tradeoff: Implementation Effort vs. Control',
  xAxisLow: 'Easier / faster adoption',
  xAxisHigh: 'Higher implementation effort',
  yAxisLow: 'Lower control',
  yAxisHigh: 'Higher control',
  quadrantLabels: ['High control, easier', 'High control, harder', 'Lower control, easier', 'Lower control, harder'],
  dots: [
    { label: 'Supermemory', color: '#f59e0b', x: 22, y: 34 },
    { label: 'LLM Wiki', color: '#ef4444', x: 42, y: 72 },
    { label: 'Zep', color: '#6366f1', x: 58, y: 82 },
    { label: 'Hindsight', color: '#22c55e', x: 72, y: 79 },
    { label: 'Work IQ', color: '#0078d4', x: 18, y: 48 },
    { label: 'Glean', color: '#8b5cf6', x: 32, y: 60 },
    { label: 'Palantir', color: '#0f172a', x: 90, y: 92 },
  ],
};

// Section 7: Benchmark stats — each system gets a DISTINCT flagship metric
const BENCHMARK_STATS = [
  { value: '64.1%', label: 'BEAM (10M tokens)', source: 'Hindsight, 58% ahead of next system', highlight: true },
  { value: '85.4%', label: 'LongMemEval', source: 'Supermemory, managed context stack' },
  { value: '<200ms', label: 'P95 Latency', source: 'Zep, LLM-free hybrid retrieval' },
  { value: '$0/mo', label: 'Infra Cost', source: 'LLM Wiki, no database, no vector store' },
];

// Section 5: LongMemEval bar chart — best published score per system
const LONGMEMEVAL_CHART = {
  title: 'LongMemEval Accuracy: Best Published Scores',
  subtitle: 'Overall accuracy on multi-session QA (higher is better). Backbones differ, see note.',
  bars: [
    { label: 'Hindsight', value: 91.4, source: 'Gemini-3 Pro backbone. Vectorize, 2026' },
    { label: 'Supermemory', value: 85.2, source: 'Gemini-3 Pro backbone. supermemory.ai, 2026' },
    { label: 'Zep', value: 71.2, source: 'GPT-4o backbone. No Gemini-3 Pro score published' },
  ],
};

// Section 7: Per-system summary stats (before each architecture deep-dive)
const HINDSIGHT_STATS = [
  { value: 'PostgreSQL', label: 'Storage', source: '+ pgvector' },
  { value: '4-Strategy', label: 'Retrieval', source: 'Semantic + BM25 + Graph + Temporal' },
  { value: '91.4%', label: 'LongMemEval', source: 'First system to break 90%', highlight: true },
  { value: 'MIT', label: 'License', source: 'Open-source, self-hosted' },
];

const ZEP_STATS = [
  { value: 'Neo4j', label: 'Storage', source: '+ FalkorDB + Neptune' },
  { value: '<200ms', label: 'P95 Latency', source: 'LLM-free hybrid retrieval', highlight: true },
  { value: '71.2%', label: 'LongMemEval', source: 'GPT-4o backbone, graph + semantic + BM25' },
  { value: 'SOC 2', label: 'Compliance', source: 'Type II + BYOK + BAA + 7yr cold storage' },
];

const SUPERMEMORY_STATS = [
  { value: 'Cloudflare', label: 'Platform', source: 'Workers + pgvector' },
  { value: '85.4%', label: 'LongMemEval', source: 'Managed context stack' },
  { value: 'Free Tier', label: 'Pricing', source: '1M tokens / 10K queries', highlight: true },
  { value: 'MCP', label: 'Distribution', source: 'Native connectors + proxy API' },
];

const KARPATHY_STATS = [
  { value: '.md + Git', label: 'Storage', source: 'Plain markdown under version control' },
  { value: '$0/mo', label: 'Infra Cost', source: 'No database, no vector store, no embeddings', highlight: true },
  { value: '~533K', label: 'Tokens Compiled', source: 'Karpathy\'s wiki: ~100 articles, ~400K words' },
  { value: '100%', label: 'Transparency', source: 'Human-readable, auditable via git diff' },
];

// Section 8: Compliance cards
const COMPLIANCE_CARDS = {
  type: 'feature',
  columns: 2,
  cards: [
    { icon: 'shield', title: 'Zep: Strongest', content: 'Bi-temporal graph is a native audit-trail. Four timestamps per fact. SOC 2 Type II, BYOK encryption, 7-year cold storage.' },
    { icon: 'database', title: 'Hindsight: Good', content: 'MIT license, self-host in VPC. PostgreSQL append-only tables + cryptographic hashing. Opinion Network provides epistemic traceability.' },
    { icon: 'code', title: 'LLM Wiki: Mixed', content: 'Git provides cryptographically secure, immutable audit trail. Perfect for internal docs. Cannot handle high-velocity correspondence.' },
    { icon: 'zap', title: 'Supermemory: Risk', content: 'Auto-forgetting and time-based decay autonomously delete records. Direct compliance violation for 3-6 year retention mandates.' },
  ],
};

// Section 7: Flow diagrams for each system deep-dive subsection
const HINDSIGHT_FLOW = {
  systemName: 'Hindsight',
  accentColor: '#22c55e',
  tabs: [
    {
      label: 'Ingestion Path (Retain)',
      stages: [
        { label: 'Input', description: 'Content Ingestion', type: 'input' },
        { label: 'Classify', description: 'Four-Network Classification', type: 'unique' },
        { label: 'Networks', description: null, type: 'process', lanes: [
          { label: 'World Facts', type: 'store' },
          { label: 'Experiences', type: 'store' },
          { label: 'Opinions', type: 'llm' },
          { label: 'Observations', type: 'store' },
        ]},
        { label: 'Link', description: 'Entity Extraction & Resolution', type: 'process' },
        { label: 'Store', description: 'PostgreSQL + pgvector', type: 'store' },
      ],
    },
    {
      label: 'Query Path (Reflect)',
      stages: [
        { label: 'Input', description: 'User Query + Memory Bank', type: 'input' },
        { label: 'Search', description: null, type: 'search', lanes: [
          { label: 'Semantic', type: 'search' },
          { label: 'BM25', type: 'search' },
          { label: 'Graph', type: 'search' },
          { label: 'Temporal', type: 'search' },
        ]},
        { label: 'Fuse', description: 'RRF + Cross-Encoder Reranking', type: 'process' },
        { label: 'Reflect', description: 'Agentic Reflection Loop', type: 'unique' },
        { label: 'Output', description: 'Synthesized Response', type: 'output' },
      ],
    },
  ],
  callouts: [{ title: 'Agentic vs. Single-Shot', text: 'Hindsight is the only system that can loop. The Reflect agent evaluates results and refines its search across 1-5 iterations.' }],
};

const ZEP_FLOW = {
  systemName: 'Zep / Graphiti',
  accentColor: '#6366f1',
  tabs: [
    {
      label: 'Ingestion Path',
      stages: [
        { label: 'Input', description: 'Episode Creation', type: 'input' },
        { label: 'Extract', description: 'Entity + Relationship Extraction', type: 'llm' },
        { label: 'Resolve', description: 'Embedding Generation + Entity Resolution', type: 'unique' },
        { label: 'Temporal', description: 'Edge Invalidation + Community Detection', type: 'unique' },
        { label: 'Store', description: 'Graph DB + Vector Index + Archive', type: 'store' },
      ],
    },
    {
      label: 'Query Path',
      stages: [
        { label: 'Input', description: 'User Query', type: 'input' },
        { label: 'Search', description: null, type: 'search', lanes: [
          { label: 'Cosine', type: 'search' },
          { label: 'BM25', type: 'search' },
          { label: 'Graph BFS', type: 'search' },
        ]},
        { label: 'Rank', description: 'Temporal Filter + RRF Reranking', type: 'unique' },
        { label: 'Assemble', description: 'Context Block', type: 'output' },
      ],
    },
  ],
  callouts: [{ title: 'Single-Shot Retrieval', text: 'Zep completes the entire query in one pass at P95 under 200ms, with no LLM calls at query time.' }],
};

const SUPERMEMORY_FLOW = {
  systemName: 'Supermemory',
  accentColor: '#f59e0b',
  tabs: [
    {
      label: 'Ingestion Path',
      stages: [
        { label: 'Input', description: 'Content via API or Connector', type: 'input' },
        { label: 'Extract', description: 'Atomic Memory Extraction + Temporal Tagging', type: 'unique' },
        { label: 'Relate', description: 'Relationship Classification + Auto-Forgetting', type: 'unique' },
        { label: 'Profile', description: 'User Profile Builder + Container Tagging', type: 'process' },
        { label: 'Store', description: 'pgvector + Document Index', type: 'store' },
      ],
    },
    {
      label: 'Query Path (Memory Router)',
      stages: [
        { label: 'Proxy', description: 'Memory Router Proxy', type: 'unique' },
        { label: 'Search', description: null, type: 'search', lanes: [
          { label: 'Memory Graph', type: 'search' },
          { label: 'Document Index', type: 'search' },
          { label: 'User Profile', type: 'search' },
        ]},
        { label: 'Filter', description: 'Context Reranker + Decay Filter', type: 'process' },
        { label: 'Forward', description: 'Enriched API Call', type: 'unique' },
      ],
    },
  ],
  callouts: [{ title: 'Proxy Architecture', text: 'Swap one URL and you have memory. The proxy intercepts LLM calls, enriches the prompt, and forwards transparently.' }],
};

const KARPATHY_FLOW = {
  systemName: 'LLM Wiki',
  accentColor: '#ef4444',
  tabs: [
    {
      label: 'Ingestion (Compile)',
      stages: [
        { label: 'Source', description: 'Raw Sources (Immutable)', type: 'unique' },
        { label: 'Compile', description: 'LLM Wiki Generation + Log Entry', type: 'unique' },
        { label: 'Link', description: 'Cross-Linking + Index Update', type: 'process' },
        { label: 'Maintain', description: 'Periodic Lint Passes', type: 'unique' },
        { label: 'Store', description: 'Filesystem + Git', type: 'store' },
      ],
    },
    {
      label: 'Query (Navigate)',
      stages: [
        { label: 'Input', description: 'User Query', type: 'input' },
        { label: 'Navigate', description: 'Read index.md', type: 'unique' },
        { label: 'Fetch', description: 'Read Wiki Pages + Consult Sources', type: 'process' },
        { label: 'Output', description: 'Synthesized Answer', type: 'output' },
      ],
    },
  ],
  callouts: [{ title: 'The LLM Is the Search Engine', text: 'No vector database, no graph. The model reads an index file and follows links, just like a human navigating a wiki.' }],
};

// Section 7: Bar Chart 1 — Ingestion Complexity (after "The Fundamental Architectural Divide" subsection)
const INGESTION_COMPLEXITY_CHART = {
  title: 'Ingestion Complexity: LLM Calls Per Episode',
  subtitle: 'More LLM calls at ingestion = richer graph, but higher cost and latency',
  bars: [
    { label: 'Zep', value: 95, unit: '', source: '4\u20136 calls: Entity extraction, relationship extraction, community detection, embedding generation' },
    { label: 'Hindsight', value: 55, unit: '', source: '2\u20133 calls: Fact extraction, network classification, optional reflection' },
    { label: 'Supermemory', value: 45, unit: '', source: '2\u20133 calls: Memory extraction, relationship classification, profile update' },
    { label: 'LLM Wiki', value: 25, unit: '', source: '1 large call: Single compilation pass with high token count' },
  ],
};

// Section 7: Bar Chart 2 — Query Complexity (after Hindsight flow diagram)
const QUERY_COMPLEXITY_CHART = {
  title: 'Query Complexity: What Happens When You Ask a Question',
  subtitle: 'More retrieval steps = richer answers, but higher latency',
  bars: [
    { label: 'Hindsight', value: 95, unit: '', source: '1\u20135 passes: Agentic loop, iteratively refines' },
    { label: 'LLM Wiki', value: 70, unit: '', source: '2\u20133 reads: Read index, then pages, then sources' },
    { label: 'Zep', value: 50, unit: '', source: '1 pass: Single-shot, P95 <200ms' },
    { label: 'Supermemory', value: 40, unit: '', source: '1 pass: Proxy pattern, single enrichment' },
  ],
};

// Section 7: Bar Chart 3 — Token Cost: Ingestion (after Zep flow diagram)
const TOKEN_COST_CHART = {
  title: 'Token Cost: Ingestion vs Query',
  subtitle: 'LLM Wiki has fewest calls but highest token count per ingestion',
  bars: [
    { label: 'LLM Wiki', value: 100, unit: '', source: '10\u201350K tokens per ingestion' },
    { label: 'Zep', value: 90, unit: '', source: '8\u201315K tokens per ingestion' },
    { label: 'Hindsight', value: 55, unit: '', source: '4\u20138K tokens per ingestion' },
    { label: 'Supermemory', value: 45, unit: '', source: '3\u20136K tokens per ingestion' },
  ],
};

// Section 7: Bar Chart 4 — Ongoing Maintenance Burden (after Supermemory flow diagram)
const MAINTENANCE_BURDEN_CHART = {
  title: 'Ongoing Maintenance Burden',
  subtitle: 'Ongoing maintenance is a recurring tax. Factor it into your architecture choice.',
  bars: [
    { label: 'LLM Wiki', value: 100, unit: '', source: 'Heavy: Periodic lint passes, manual curation' },
    { label: 'Hindsight', value: 40, unit: '', source: 'Low: Background Reflect agent handles automatically' },
    { label: 'Zep', value: 30, unit: '', source: 'Low: Community detection auto-clusters' },
    { label: 'Supermemory', value: 15, unit: '', source: 'Minimal: Fully managed, auto-decay' },
  ],
};

// Section 8: Bar Chart 5 — Compliance Readiness Spectrum (after first paragraph)
const COMPLIANCE_READINESS_CHART = {
  title: 'Compliance Readiness Spectrum',
  subtitle: 'Compliance risk \u2192 Natively compliant',
  bars: [
    { label: 'Zep', value: 95, unit: '', source: 'Natively Compliant: Bi-temporal audit trail, SOC 2, BYOK' },
    { label: 'Hindsight', value: 72, unit: '', source: 'Good: Open-source, PostgreSQL append-only, epistemic traceability' },
    { label: 'LLM Wiki', value: 50, unit: '', source: 'Mixed: Git immutable ledger, but can\u2019t handle scale' },
    { label: 'Supermemory', value: 22, unit: '', source: 'Risk: Auto-forgetting violates retention mandates' },
  ],
};

// Section 3: Convergence diagram — the transformation from scattered knowledge to shared memory
const SECOND_BRAIN_CONVERGENCE = {
  eyebrow: 'The Transformation',
  title: 'From Scattered to Shared Memory',
  centerLabel: 'The New Layer',
  centerTitle: 'Second\u00a0Brain',
  insight: 'The memory that remains is the one your team wishes it had written down.',
  roles: [
    {
      from: 'Meeting Notes',
      to: 'Queryable Decisions',
      description: 'Every strategy call, pricing debate, and roadmap review becomes a fact the agent can cite, not a doc nobody re-reads.',
    },
    {
      from: 'Customer History',
      to: 'Living Memory',
      description: 'Conversations, tickets, and usage compound into a persistent understanding of each account, not a stale CRM row.',
    },
    {
      from: 'Team Playbooks',
      to: 'Agent-Ready Context',
      description: 'Onboarding guides, escalation rules, and internal lore become structured context any agent can retrieve on demand.',
    },
  ],
};

const INDUSTRY_PERSPECTIVES_QUOTES = [
  {
    author: 'Aaron Levie',
    title: 'CEO, Box',
    quote: 'AI models know everything about anything, other than your specific workflows and business. For AI agents to be effective in the enterprise, they need your enterprise context.',
  },
  {
    author: 'Arvind Jain',
    title: 'CEO, Glean',
    quote: 'The Knowledge Graph is what makes agents possible. Without understanding the structure of your organization, who, what, where, when, why, you just have a chatbot that hallucinates.',
  },
  {
    author: 'Alex Karp',
    title: 'CEO, Palantir',
    quote: 'All the value in the AI market is going to go to chips and what we call ontology.',
  },
  {
    author: 'Charles Packer',
    title: 'Co-founder, Letta (MemGPT)',
    quote: 'The most powerful characteristics of a useful AI agent, personalization, self-improvement, tool use, reasoning and planning, are all fundamentally memory management problems.',
  },
];

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
                Technical Brief
              </span>
            </div>

            {/* Main title - multi-line with gradient accent */}
            <h1
              style={{
                fontFamily: FONTS.display,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: COLORS.ink[900],
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ display: 'block' }}>Building a</span>
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
                Company Brain
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
                Most companies are focused on AI as a productivity enhancer. Few are focused on the potential of AI to change how we work together.
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
                  Block, "From Hierarchy to Intelligence" (March 2026)
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
        Technical Brief · April 2026
      </p>
    </div>
  </footer>
);

// =============================================================================
// MOBILE TOC - Sticky dropdown for screens below the floating nav breakpoint
// =============================================================================

const MobileTOC = ({ sections }) => {
  const detailsRef = useRef(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('mobile-toc-styles');
    if (existing) return;
    const style = document.createElement('style');
    style.id = 'mobile-toc-styles';
    style.textContent = `
      .mobile-toc { display: none; }
      @media (max-width: 1279px) {
        .mobile-toc { display: block; }
      }
      .mobile-toc summary::-webkit-details-marker { display: none; }
      .mobile-toc summary { list-style: none; cursor: pointer; }
      .mobile-toc summary .mobile-toc-chevron { transition: transform 0.2s ease; }
      .mobile-toc[open] summary .mobile-toc-chevron { transform: rotate(180deg); }
      .mobile-toc a { text-decoration: none; }
    `;
    document.head.appendChild(style);
  }, []);

  const handleJump = (e, num) => {
    e.preventDefault();
    const el = document.querySelector(`[data-section="${num}"]`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (detailsRef.current) detailsRef.current.open = false;
  };

  return (
    <details
      ref={detailsRef}
      className="mobile-toc"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${COLORS.ink[200]}`,
      }}
    >
      <summary
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `${SPACE[4]} ${SPACE[5]}`,
          fontFamily: FONTS.mono,
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: COLORS.ink[900],
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: SPACE[2] }}>
          <span style={{ color: COLORS.accent.primary }}>{'>'}</span>
          Jump to section
        </span>
        <svg
          className="mobile-toc-chevron"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke={COLORS.ink[600]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 5l4 4 4-4" />
        </svg>
      </summary>
      <nav
        style={{
          maxHeight: '60vh',
          overflowY: 'auto',
          padding: `${SPACE[2]} ${SPACE[5]} ${SPACE[5]}`,
          borderTop: `1px solid ${COLORS.ink[100]}`,
        }}
      >
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {sections.map((s) => (
            <li key={s.number}>
              <a
                href={`#section-${s.number}`}
                onClick={(e) => handleJump(e, s.number)}
                style={{
                  display: 'flex',
                  gap: SPACE[3],
                  alignItems: 'baseline',
                  padding: `${SPACE[3]} 0`,
                  borderBottom: `1px solid ${COLORS.ink[100]}`,
                  fontFamily: FONTS.body,
                  fontSize: TYPE_SCALE.body.sm.size,
                  color: COLORS.ink[700],
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: COLORS.accent.primary,
                    flexShrink: 0,
                    minWidth: '1.5rem',
                  }}
                >
                  {String(s.number).padStart(2, '0')}
                </span>
                <span>{s.short}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
};

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
      <MobileTOC sections={CONTENT.sections} />

      {CONTENT.sections.map((section, idx) => (
        <React.Fragment key={section.number}>
          <Section number={section.number} title={section.title}>
            {section.blocks.map((block, i) => (
              <React.Fragment key={i}>
                <BlockRenderer block={block} />
                {/* Industry Perspectives carousel after "Block is the cleanest articulation" paragraph in Second Brain section (2) */}
                {section.number === 2 && block.type === 'paragraph' && block.text.startsWith('Block is the cleanest articulation') && (
                  <QuoteCarousel quotes={INDUSTRY_PERSPECTIVES_QUOTES} />
                )}
                {/* Second Brain convergence diagram after first paragraph in Building AI section (3) */}
                {section.number === 3 && i === 0 && block.type === 'paragraph' && (
                  <Convergence
                    eyebrow={SECOND_BRAIN_CONVERGENCE.eyebrow}
                    title={SECOND_BRAIN_CONVERGENCE.title}
                    centerLabel={SECOND_BRAIN_CONVERGENCE.centerLabel}
                    centerTitle={SECOND_BRAIN_CONVERGENCE.centerTitle}
                    insight={<em>{SECOND_BRAIN_CONVERGENCE.insight}</em>}
                    roles={SECOND_BRAIN_CONVERGENCE.roles}
                  />
                )}
                {/* Dual KB cards after "How Each System Implements Isolation" subsection in Dual KB section (4) */}
                {section.number === 4 && block.type === 'subsection' && block.title === 'How Each System Implements Isolation' && (
                  <CardGrid type={DUAL_KB_CARDS.type} columns={DUAL_KB_CARDS.columns} cards={DUAL_KB_CARDS.cards} />
                )}
                {/* Quadrant charts after "What Each System Is Really Betting On" subsection in Picking section (6) */}
                {section.number === 6 && block.type === 'subsection' && block.title === 'What Each System Is Really Betting On' && (
                  <>
                    <QuadrantChart {...QUADRANT_1} />
                    <QuadrantChart {...QUADRANT_2} />
                  </>
                )}
                {/* LongMemEval bar chart after "LongMemEval: The Shared Benchmark" subsection in Architectural Divergence section (7) */}
                {section.number === 7 && block.type === 'subsection' && block.title === 'LongMemEval: The Shared Benchmark' && (
                  <Chart type="bar" data={LONGMEMEVAL_CHART} />
                )}
                {/* Ingestion Complexity bar chart after "The Fundamental Architectural Divide" subsection in Deep Architectural Analysis (9) */}
                {section.number === 9 && block.type === 'subsection' && block.title === 'The Fundamental Architectural Divide: Graph-First vs. Embedding-First' && (
                  <Chart type="bar" data={INGESTION_COMPLEXITY_CHART} />
                )}
                {/* Flow diagrams + bar charts after each deep-dive subsection in Deep Architectural Analysis (9) */}
                {section.number === 9 && block.type === 'subsection' && block.title === 'Hindsight: Four-Network Partitioning and Multi-Strategy Retrieval' && (
                  <>
                    <StatsGrid stats={HINDSIGHT_STATS} />
                    <FlowDiagram {...HINDSIGHT_FLOW} />
                    <Chart type="bar" data={QUERY_COMPLEXITY_CHART} />
                  </>
                )}
                {section.number === 9 && block.type === 'subsection' && block.title === 'Zep and the Graphiti Engine: Bi-Temporal Epistemology' && (
                  <>
                    <StatsGrid stats={ZEP_STATS} />
                    <FlowDiagram {...ZEP_FLOW} />
                    <Chart type="bar" data={TOKEN_COST_CHART} />
                  </>
                )}
                {section.number === 9 && block.type === 'subsection' && block.title === 'Supermemory: The Managed Context Stack and Adaptive Forgetting' && (
                  <>
                    <StatsGrid stats={SUPERMEMORY_STATS} />
                    <FlowDiagram {...SUPERMEMORY_FLOW} />
                    <Chart type="bar" data={MAINTENANCE_BURDEN_CHART} />
                  </>
                )}
                {section.number === 9 && block.type === 'subsection' && block.title === 'The LLM Wiki: Persistent Compilation Over Dynamic Retrieval' && (
                  <>
                    <StatsGrid stats={KARPATHY_STATS} />
                    <FlowDiagram {...KARPATHY_FLOW} />
                  </>
                )}
                {/* Compliance readiness bar chart after first paragraph in Compliance section (10) */}
                {section.number === 10 && i === 0 && block.type === 'paragraph' && (
                  <Chart type="bar" data={COMPLIANCE_READINESS_CHART} />
                )}
              </React.Fragment>
            ))}
            {/* Decision framework terminal after Picking section (6) */}
            {section.number === 6 && (
              <TerminalWindow title={DECISION_TERMINAL.title} command={DECISION_TERMINAL.command} lines={DECISION_TERMINAL.lines} variant={DECISION_TERMINAL.variant} />
            )}
            {/* Benchmark stats in Deep Architectural Analysis (9) */}
            {section.number === 9 && (
              <StatsGrid stats={BENCHMARK_STATS} />
            )}
            {/* Compliance cards in Compliance section (10) */}
            {section.number === 10 && (
              <CardGrid type={COMPLIANCE_CARDS.type} columns={COMPLIANCE_CARDS.columns} cards={COMPLIANCE_CARDS.cards} />
            )}
          </Section>
        </React.Fragment>
      ))}

      <ArticleFooter />
    </div>
  );
};

export default App;
