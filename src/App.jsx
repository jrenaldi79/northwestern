/**
 * Main Application Component - "The Scholarly Disruptor"
 *
 * Editorial magazine layout
 * - Clean, print-inspired sections
 * - Confident white space
 * - Professional hierarchy
 */
import React from 'react';
import CONTENT from './content';
import { COLORS, FONTS, TYPE_SCALE, EFFECTS, SPACE, LAYOUT } from './design-tokens';
import {
  Header,
  StatsGrid,
  Chart,
  Convergence,
  QuoteCarousel,
  PullQuote,
  CardGrid,
  Credentials,
  Timeline,
  Testimonials,
  Table,
  Section,
  Subsection,
  Paragraph,
  BulletList,
  Citations,
  RichText,
  TerminalWindow,
} from './components';


const App = () => {
  // Component lookup by position in document
  const chartsByType = {};
  CONTENT.charts.forEach(chart => {
    if (!chartsByType[chart.type]) chartsByType[chart.type] = [];
    chartsByType[chart.type].push(chart);
  });

  // Helper to get cards by section
  const getCardsBySection = (sectionNum) => {
    return CONTENT.cards.find(group => group.section === String(sectionNum));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: COLORS.surface.paper,
      }}
    >
      {/* Header */}
      {CONTENT.header && <Header data={CONTENT.header} stats={CONTENT.stats} />}

      {/* Section 1: The Market Shift */}
      <Section number={1} title="The Market & Student Need: Why Now">
        <Paragraph>
          <RichText>For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.</RichText>
        </Paragraph>
        <Paragraph>
          <RichText>AI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between "people with ideas" and "people who can build" is shrinking.</RichText>
        </Paragraph>

        {CONTENT.pullquotes[0] && <PullQuote>{CONTENT.pullquotes[0]}</PullQuote>}

        <Paragraph>
          <RichText>This is happening now, inside the companies building these tools.</RichText>
        </Paragraph>

        <Subsection title="The Anthropic Case Study">
          <Paragraph>
            <RichText>At Anthropic, the company behind Claude, internal research shows:</RichText>
          </Paragraph>
          {CONTENT.stats.length > 0 && <StatsGrid stats={CONTENT.stats} />}
          {chartsByType.growth?.[0] && <Chart type="growth" data={chartsByType.growth[0]} />}

          <BulletList items={[
            "Engineers use Claude in **59% of their work**, up from 28% a year ago",
            "They report **50% productivity gains**, up from 20% the year before",
            "**90% of Claude Code's codebase was written by Claude Code itself**",
            "The team ships **60-100 internal releases per day**",
            "They built a new product (Cowork) in **about 10 days** using their own AI tools [3]"
          ]} />

          <Paragraph>
            <RichText>Anthropic now **hires generalists over specialists** because "many traditional programming skills are less relevant when AI handles implementation details." [1]</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>McCormick students will enter this world in 2-3 years. We need to prepare them now.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="The Triad: Design, Product, and Engineering Are Merging">
          <Paragraph>
            <RichText>Role boundaries are collapsing. Designers, product managers, and engineers are moving toward each other:</RichText>
          </Paragraph>
          {CONTENT.convergence.length > 0 && <Convergence roles={CONTENT.convergence} />}

          <BulletList items={[
            "**PMs → Engineers:** Six months ago, most product managers shipped zero code. Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly. By end of 2026, PMs may write 10-20% of production code.",
            "**Designers → Engineers & PMs:** Designers no longer hand off static mockups. With AI tools, they prototype in production code, make product decisions in real-time, and understand the systems they design for.",
            "**Engineers → Product:** When implementation becomes easy, the valuable skill becomes knowing what to build. Engineers who understand customer problems, market dynamics, and business models are worth more than those who only execute specs."
          ]} />

          <Paragraph>
            <RichText>The tools are converging too. **Claude Code** lets engineers ship features by describing intent. **Figma AI** generates production-ready components from design specs. **Bolt** (which hit $40M ARR in five months [14]) and **Lovable** let anyone describe a feature and watch it appear. These tools do not replace judgment. They automate the translation layer between idea and implementation. The role that remains is the one who knows what to build and why.</RichText>
          </Paragraph>

          {CONTENT.tables[0] && <Table {...CONTENT.tables[0]} variant="comparison" />}

          <Paragraph>
            <RichText>**Synthetic users** represent another shift: AI personas that simulate customer feedback before a single line of code is written. Product teams can now test positioning, validate assumptions, and iterate on concepts using LLM-generated personas trained on real research data. This changes the research-to-build cycle entirely.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>AI lowers the floor to coding while raising the ceiling for engineering. The role that remains is the one who knows what to build and why.</RichText>
          </Paragraph>
        </Subsection>

        {CONTENT.pullquotes[1] && <PullQuote>{CONTENT.pullquotes[1]}</PullQuote>}

        <Subsection title="The Rise of the Product Engineer">
          <Paragraph>
            <RichText>Tech companies are redefining roles around this reality. Innovation happens when engineers have business context, and when PMs and designers can build. Companies like **Vercel** and **Linear** now hire "Product Engineers" who "care more about outcomes and impact than the exact implementation." These roles command **$140-170k** at entry level in major tech hubs, with senior roles exceeding $200k—a premium that signals market demand.</RichText>
          </Paragraph>
          {chartsByType.range?.[0] && <Chart type="range" data={chartsByType.range[0]} />}
        </Subsection>

        <Subsection title="The Junior Developer Role Is Disappearing">
          {chartsByType.bar?.[0] && <Chart type="bar" data={chartsByType.bar[0]} />}
          <Paragraph>
            <RichText>The traditional entry-level developer role is vanishing. Today, **84% of developers** use AI tools [4], and GitHub research shows they complete tasks **55.8% faster** [5]. McKinsey reports **35-45% improvements in software quality** [6]. As Magdalena Balazinska of UW's Allen School puts it: *"Coding, or the translation of a precise design into software instructions, is dead. AI can do that."* [11]</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="The New Skills: What Industry Leaders Are Saying">
          {CONTENT.quotes.length > 0 && <QuoteCarousel quotes={CONTENT.quotes} />}

          <Paragraph>
            <RichText>Industry leaders agree on what matters now. **Ethan Mollick** (Wharton) argues that *"AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback."* [7]</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Andrej Karpathy** (OpenAI co-founder) describes the shift: *"I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills."* [8]</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>The programming language itself is changing. As **Jensen Huang** (NVIDIA CEO) puts it: *"There's a new programming language. It's called 'human.'"* [9] The numbers confirm this: **20-30% of Microsoft's code** is now AI-written [10], and **Mark Zuckerberg** predicts half of Meta's development will be done by AI within a year.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy. These are the skills we must teach.</RichText>
          </Paragraph>

          {chartsByType.hierarchy?.[0] && <Chart type="hierarchy" data={chartsByType.hierarchy[0]} />}
          {CONTENT.pullquotes[2] && <PullQuote>{CONTENT.pullquotes[2]}</PullQuote>}

          <Paragraph>
            <RichText>**The Opportunity:** Employers now prioritize **problem-solving (~90%)** over GPA. [13] McCormick can lead in teaching students to use AI to build systems that solve real problems.</RichText>
          </Paragraph>
        </Subsection>

        {/* Terminal Summary - Market Shift */}
        {CONTENT.terminals?.[0] && (
          <TerminalWindow
            title={CONTENT.terminals[0].title}
            command={CONTENT.terminals[0].command}
            lines={CONTENT.terminals[0].lines}
            variant={CONTENT.terminals[0].variant}
          />
        )}
      </Section>

      
      {/* Section 2: Strategic Alignment */}
      <Section number={2} title="Strategic Alignment with McCormick's Vision">
        <Paragraph>
          <RichText>This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas.</RichText>
        </Paragraph>

        {/* Pillar Cards */}
        {getCardsBySection(2) && (
          <CardGrid
            type={getCardsBySection(2).type}
            columns={getCardsBySection(2).columns}
            cards={getCardsBySection(2).cards}
          />
        )}

        <Subsection title="Pillar 1: Revolutionize the Methods of Engineering">
          <Paragraph>
            <RichText>AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping. Engineers who master AI-augmented methods will define the next generation of engineering practice. McCormick can lead in codifying these methods rather than adopting them later.</RichText>
          </Paragraph>
        </Subsection>

        {CONTENT.pullquotes[3] && <PullQuote>{CONTENT.pullquotes[3]}</PullQuote>}

        <Subsection title="Pillar 2: Transform Engineering Education">
          <Paragraph>
            <RichText>Dean Schuh has called for "whole-brain" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy. They do not just build systems; they understand why those systems matter and who they serve.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>This prepares engineers to function as what Dean Schuh describes as "the fulcrum between the research lab and the marketplace." The marketplace represents humanity and its needs. Engineers serve as the bridge. This curriculum teaches students to be that bridge.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Pillar 3: Advance Critical Applications of Engineering">
          <Paragraph>
            <RichText>AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build).</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>The skills taught here also amplify work in the other three focus areas. Climate researchers use AI agents to process satellite data. Health engineers use LLMs to analyze clinical literature. Sustainability teams use generative tools to model resource flows. The Product Engineer mindset and AI fluency accelerate progress across all four challenges.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="A Once-in-a-Generation Opportunity">
          <Paragraph>
            <RichText>Dean Schuh has expressed interest in "once-in-a-generation ideas and goals that can carry us into the future together." The transformation of engineering practice by AI qualifies. The window to establish McCormick as a leader in AI-augmented engineering education is now, while methods are still being defined and before competitors codify their own approaches.</RichText>
          </Paragraph>
        </Subsection>
      </Section>

      
      {/* Section 3: Who Should Teach This */}
      <Section number={3} title="Who Should Teach This">
        <Paragraph>
          <RichText>If McCormick wants to prepare students for the "Product Engineer" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire. It requires someone who operates across boundaries that do not usually overlap.</RichText>
        </Paragraph>

        <Subsection title="The Profile">
          {getCardsBySection(3) && (
            <CardGrid
              type={getCardsBySection(3).type}
              columns={getCardsBySection(3).columns}
              cards={getCardsBySection(3).cards}
            />
          )}

          <Paragraph>
            <RichText>**Executive credibility.** Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations. Students need to learn not just how to build, but how to navigate the systems that ship products.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Hands-on builder.** Not someone who "used to code." Someone who builds production AI systems today. The tools are changing too fast for secondhand knowledge. Students need an instructor who has shipped MCP servers, built agentic systems, and debugged LLM pipelines this month.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Startup experience.** Someone who has founded a company, raised capital, and exited. Entrepreneurship cannot be taught from case studies alone.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>This matters more now than ever. AI has collapsed the cost of building, but not the hard parts: figuring out what to build, finding customers who will pay, navigating ambiguity with limited resources. Founders learn these skills through survival. In an era where anyone can prompt an AI to generate code, the differentiating skills are exactly what founders develop: judgment about what's worth building, speed of iteration, and the ability to operate when the path is unclear. A founder who has exited brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Design fluency.** The Product Engineer role sits at the intersection of design, product, and engineering. The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Industry connectivity.** Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream. Curriculum needs to reflect what employers will want in 2-3 years, not what they wanted when the textbook was written.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>Industry connectivity also means access. The right instructor can bring their network directly into the classroom: founders who just raised Series A, CTOs navigating AI adoption at scale, VCs evaluating the next wave of startups. These are not theoretical conversations. Students hear from practitioners living this shift in real-time. Guest speakers become mentors. Class discussions become recruiting conversations. The instructor's network becomes the students' network. This transforms a course from content delivery into a bridge between McCormick and the companies students want to join.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**Teaching experience.** Someone who has already taught at the graduate level across engineering and business schools, and who has trained corporate teams from entry-level to executive.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>This combination is rare. Most executives do not build. Most builders have not led at scale. Most founders have not taught. Finding someone who does all of these, and is actively working in AI today, is the challenge. Section 5 addresses why I believe I fit this profile.</RichText>
          </Paragraph>
        </Subsection>

        {CONTENT.pullquotes[4] && <PullQuote>{CONTENT.pullquotes[4]}</PullQuote>}
      </Section>

      
      {/* Section 4: What I Can Teach */}
      <Section number={4} title="What I Can Teach">
        <Paragraph>
          <RichText>The "Product Engineer" needs to move from idea to shipped product. This is not a single course. It is a set of capabilities that can be woven into existing McCormick and Segal curriculum wherever they fit. I am already piloting parts of this in my current classes.</RichText>
        </Paragraph>

        {/* Teaching Topic Cards */}
        {getCardsBySection(4) && (
          <CardGrid
            type={getCardsBySection(4).type}
            columns={getCardsBySection(4).columns}
            cards={getCardsBySection(4).cards}
          />
        )}

        {CONTENT.tables[1] && <Table {...CONTENT.tables[1]} variant="data" />}

        <Paragraph>
          <RichText>Below are the areas where I can contribute:</RichText>
        </Paragraph>

        <Subsection title="AI-Augmented Qualitative Discovery">
          <Paragraph>
            <RichText>Traditional user research takes weeks: recruiting participants, scheduling interviews, transcribing conversations, coding themes. AI collapses this timeline while expanding depth.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>Students learn to use AI as a research amplifier: real-time transcription during interviews, instant theme extraction across dozens of transcripts, pattern recognition across disparate data sources. The goal is not to replace human judgment but to multiply researcher capacity. An interview that once took days to analyze now yields insights in minutes. A corpus of customer support tickets becomes a searchable knowledge base of user pain.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**What I Teach:** Interview analysis pipelines, theme extraction prompts, cross-source pattern matching, building research repositories that agents can query, integrating voice transcription (Assembly AI) into live research sessions</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Technologies:** Assembly AI, Whisper, LLM-based theme extraction, embedding-based similarity search, research corpus management</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Quantitative Discovery">
          <Paragraph>
            <RichText>Replace intuition with data. Turn qualitative *Jobs to be Done (JTBD)* research into quantitative datasets. Students learn to validate ideas before building.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Technologies:** Python, Scikit-learn, Pandas, clustering algorithms, SQL, data visualization</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Generative Prototyping">
          <Paragraph>
            <RichText>Turn requirements into testable artifacts quickly. Use AI tools to generate wireframes from rough sketches. Build **synthetic user personas** that simulate customer feedback, letting students test positioning and product concepts against LLM-generated personas before writing code.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Technologies:** LLM foundational models (OpenAI, Anthropic, Gemini), image generation, prompt engineering</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Agentic Systems">
          <Paragraph>
            <RichText>Move beyond chatbots to autonomous, goal-directed systems. Build servers that standardize agent connectivity. Design memory systems so agents maintain state across sessions. Shift from manual QA to **"Evals"** that test AI outputs against safety and quality guardrails.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Technologies:** MCP servers, LangChain, ReAct frameworks, vector databases, RAG pipelines, multi-agent orchestration</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Agentic Development: From 'Vibing' to Production">
          <Paragraph>
            <RichText>There is a gap between prompting ChatGPT and shipping production AI systems. Most tutorials stop at "vibing," the casual, exploratory prompting that works in demos but fails in production. Students need to learn the hard parts: deterministic behavior, error handling, cost management, and integration with existing systems.</RichText>
          </Paragraph>

          {CONTENT.pullquotes[5] && <PullQuote>{CONTENT.pullquotes[5]}</PullQuote>}

          <Paragraph>
            <RichText>**What I Teach:**</RichText>
          </Paragraph>

          <BulletList items={[
            "**Development Best Practices:** How to use tools like Claude Code, Cursor, and Windsurf effectively. Writing CLAUDE.md files and AGENTS.md specifications that give AI agents the context they need. Prompt engineering that produces consistent, testable outputs.",
            "**Infrastructure Requirements:** Rate limiting, API gateway management, cost tracking, latency budgets. How to build systems that gracefully degrade when AI services fail. Caching strategies for expensive model calls.",
            "**Operational Changes:** AI development requires different workflows than traditional software. Students learn: how to review AI-generated code, when to trust agent outputs vs. verify them, how to debug systems where the logic is partially opaque.",
            "**Planning Tool Integration:** Connecting agents to project management systems (Linear, Jira, Asana), documentation platforms, and CI/CD pipelines. Building agents that understand your codebase through proper indexing and retrieval.",
            "**Agent Swarms & Orchestration:** When single agents are not enough, you coordinate multiple specialized agents that divide work, share context, and merge results. Handoff protocols, conflict resolution, and resource allocation.",
            "**Memory Systems:** Building procedural memory so agents learn from past interactions. Failure-to-success pattern detection, root cause analysis, and retrieval architectures that surface relevant context at the right time."
          ]} />

          <Paragraph>
            <RichText>**Technologies:** Claude Code, Cursor, Windsurf, API gateways, CI/CD integration</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Context Engineering">
          <Paragraph>
            <RichText>AI agents fail when they run out of context. A 200k token window sounds large until your agent needs to understand a codebase, remember a conversation history, and execute a multi-step plan simultaneously. Context engineering is the discipline of managing what information agents have access to and when.</RichText>
          </Paragraph>

          <Paragraph>
            <RichText>**What I Teach:**</RichText>
          </Paragraph>

          <BulletList items={[
            "**Long-Running Systems:** Agents that operate over hours or days, not single-turn interactions. Session management, state persistence, and graceful recovery from interruptions.",
            "**Deep Agents:** Building agents that can explore complex domains: reading documentation, navigating codebases, researching across multiple sources. These agents need strategies for prioritizing information and knowing when to stop.",
            "**Context Window Management:** Summarization strategies, dynamic context loading, and retrieval-augmented generation (RAG) that pulls relevant information on demand rather than stuffing everything into the prompt.",
            "**Hierarchical Context:** Some information is always relevant (system instructions, core identity). Some is session-specific. Some is task-specific. Students learn to structure context in layers that maximize utility while minimizing token waste.",
            "**Tool Design for Context:** Building MCP servers and tool interfaces that provide rich context to agents without overwhelming them. Pagination, filtering, and progressive disclosure patterns."
          ]} />

          <Paragraph>
            <RichText>**Technologies:** RAG architectures, context summarization, session state management, hierarchical prompt design</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="AI Infrastructure">
          <Paragraph>
            <RichText>Deploy AI systems on Day 1. Manage API gateways for rate limits, cost, and latency. Connect AI models to real-world data sources and device hardware. These are skills I use daily with clients and students.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Technologies:** React/TypeScript, serverless APIs, GCP, Websockets, real-time voice transcription, multimodal streaming</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Entrepreneurship & Venture Dynamics">
          <Paragraph>
            <RichText>I have lived the full startup arc: from idea to Techstars to product-market fit to nine-figure exit. I can teach this from experience, not textbooks.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**What I bring:** I founded Jiobit, raised venture capital, navigated hardware manufacturing, won SBIR contracts, scaled a team, and sold to a public company. I have sat on both sides of the table, as a founder raising money and as an investor evaluating deals. I serve on the Techstars Selection Committee, mentor at mHUB (hardtech) and iVenture Accelerator, and am an LP in four venture funds including LongJump (Chicago's most active pre-seed fund). I have invested in 20+ companies.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Topics:** Cap table structures, fundraising mechanics, term sheets, due diligence processes. How investors evaluate technical stacks and IP. When to build vs. buy. How to think about defensibility when AI commoditizes implementation. How to tell a story that raises money. How to build a company that people want to join and stay at.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="A Note on Applicability">
          <Paragraph>
            <RichText>While the examples above reference software, these skills transfer across engineering disciplines. AI is accelerating PCB design, materials discovery, clinical literature analysis, and structural optimization. Dean Schuh's own field has seen rapid adoption of machine learning for alloy design. The core skills—judgment about what to build, fluency with AI tools, and translation between technical capability and human need—prepare engineers for any field where AI is reshaping practice.</RichText>
          </Paragraph>
        </Subsection>

        {/* Terminal Summary - Curriculum Overview */}
        {CONTENT.terminals?.[1] && (
          <TerminalWindow
            title={CONTENT.terminals[1].title}
            command={CONTENT.terminals[1].command}
            lines={CONTENT.terminals[1].lines}
            variant={CONTENT.terminals[1].variant}
          />
        )}
      </Section>

      
      {/* Section 5: Why Me */}
      <Section number={5} title="Why Me">
        {CONTENT.credentials.length > 0 && <Credentials credentials={CONTENT.credentials} />}

        <Paragraph>
          <RichText>I am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams. I have held VP and General Manager responsibilities at Google and Motorola. I co-founded Jiobit, a wearable tech startup acquired by Life360 (NASDAQ: LIF) in 2021. I operate fluently across executive strategy and hands-on building. My consulting clients range from C-suite executives to senior engineers. My corporate workshops serve entry-level engineers through product directors. I teach MBAs at Kellogg and engineers at McCormick. I serve on AI advisory boards for Menlo Ventures and Techstars. This range is rare.</RichText>
        </Paragraph>

        {CONTENT.tables[2] && <Table {...CONTENT.tables[2]} variant="checklist" />}

        <Subsection title="The Hands-On Work: What I Build Today">
          <Paragraph>
            <RichText>My most intensive building has happened after Google. I am not a manager who "used to code." I write production systems daily:</RichText>
          </Paragraph>

          <BulletList items={[
            "**MCP Servers & Multi-Agent Orchestration:** I build and publish **Model Context Protocol servers** to npm, enabling AI agents to connect with external services. I build multi-agent systems using **LangChain, n8n**, and **ReAct frameworks** that coordinate across foundational models (Gemini, OpenAI, Anthropic, Cohere). I have built systems that stream real-time meeting transcripts via **Websockets** and **Assembly AI**, enabling agents to act during live calls.",
            "**Full-Stack AI Infrastructure:** I work across the modern AI stack: **vector databases (PGVector)**, **semantic search with embeddings**, **full-text search (BM25)**, **Cohere reranking**, **Agentic RAG pipelines**, and **LLM chaining with reflection loops**. I build in **React/TypeScript** with **serverless APIs** and integrate tools like **Firecrawl** and **Tavily** for deep research agents. I have built **browser automation agents**, content graders with scoring rubrics, and custom HTML email generation systems.",
            "**Live Multimodal AI:** I build systems that process voice, text, and images in real-time, connecting AI agents to device hardware and sensor data.",
            "**Synthetic User Platforms:** I built a synthetic user system that simulates customer feedback using LLM-generated personas. The platform uses **graph databases and knowledge graphs** to model user relationships and context, with **self-learning loops** that refine persona accuracy based on research validation. This is an example of the new AI workflows reshaping product development.",
            "**Agentic Procedural Memory:** I designed and built an **Agentic Procedural Memory System** that enables AI agents to learn from their own experiences. The system detects failure-to-success patterns in tool usage, performs automated root cause analysis, and stores reusable procedures in a **hybrid search architecture** (vector embeddings + BM25 full-text search with Reciprocal Rank Fusion). Agents using this system show **50% step reduction** and **95%+ success rates** on similar tasks. This work builds directly on recent research from Zhejiang University and Alibaba. [17]",
            "**Client Work & Executive Advisory:** I consult directly with public company CTOs and CEOs on AI strategy, and run hands-on design workshops with their development teams. This means reviewing AI proposals, debugging architectures, and pairing with senior engineers to ship production code. I build alongside the teams I teach.",
            "**Corporate Training:** Through my consulting firm, I run a **12-week curriculum** that upskills engineers, product managers, and designers into proficient AI practitioners. Participants leave implementing AI into their products and operations. My workshops span entry-level engineers to product directors.",
            "**Published Research:** I publish original technical research on AI agent architectures. A recent investigation reverse-engineered Claude Code's API requests and identified an implementation flaw: skill instructions were being injected as user messages (low authority) rather than in the system prompt (high authority), explaining why Vercel's benchmarks showed only 53% pass rates. [23] This kind of deep technical analysis is what I bring to both clients and students.",
            "**Open Source:** I maintain 13 public repositories on GitHub (github.com/jrenaldi79), including MCP servers, agent frameworks, and prompt engineering collections."
          ]} />
        </Subsection>

        <Subsection title="Teaching & Academic Leadership">
          <Paragraph>
            <RichText>I teach at **McCormick (Segal)**, **Kellogg**, and **University of Illinois** (Applied AI), working across engineering and business at multiple institutions. My courses integrate AI into design thinking and product development, including building custom agents and incorporating synthetic users into research. I led **Northwestern's Business Innovation Lab (Winter 2025)** in partnership with **Google DeepMind** and served as a key panelist at **Kearney's 2024 Executive Panel on AI in Product Design**.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>I work alongside **Jim Wicks** (Segal Design Institute founder) and **Mike Edmonds** (Microsoft) in the classroom. My philosophy in the **MPD² program**: outcomes over outputs. I teach students to be **"missionaries, not mercenaries."**</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Curriculum-Advancing Work">
          <Paragraph>
            <RichText>Clinical faculty focus on teaching, not traditional academic research with publication requirements. My work aligns with this model while still advancing the curriculum in measurable ways.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Testing new methods:** I pilot AI tools and workflows in real courses and corporate training programs before they become mainstream. My 12-week corporate curriculum has been iterated across multiple cohorts, identifying what works and what does not. This applied testing informs what I bring to McCormick students.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Developing evaluation frameworks:** My work on agentic procedural memory, synthetic user validation, and Claude Code architecture analysis creates benchmarks and evaluation methods that inform pedagogy. Understanding how AI systems fail is as important as understanding how they succeed.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Building reusable assets:** The MCP servers, agent frameworks, and prompt engineering collections I maintain on GitHub become teaching resources. Students learn from production code, not toy examples.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Industry feedback loops:** My consulting work with public company CTOs and startup founders provides continuous signal on what skills employers need. This feedback shapes curriculum in near real-time, not on academic publication timelines.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>This is not traditional research, but it is rigorous, iterative work that directly improves teaching effectiveness.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="What a Clinical Appointment Enables">
          <Paragraph>
            <RichText>I currently teach at McCormick through adjunct and visiting arrangements. A clinical faculty appointment changes what is possible.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Curriculum design authority:** Clinical faculty can propose new courses, shape program requirements, and influence how AI-augmented methods are integrated across the curriculum. Adjunct instructors teach assigned courses; clinical faculty help design them.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Institutional commitment:** A formal appointment signals long-term investment, both from McCormick and from me. Students benefit from continuity. Industry partners see a stable point of contact. The curriculum can evolve over multiple years rather than being renegotiated each term.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Deeper student mentorship:** Clinical faculty advise students, supervise projects, and build relationships that extend beyond a single course. This mentorship is where much of the real learning happens.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>**Program development:** With a clinical appointment, I can work with department chairs and other faculty to integrate Product Engineer concepts into existing programs, not just teach standalone courses. The goal is systemic curriculum enhancement, not a single elective.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="The Self-Taught Path">
          <Paragraph>
            <RichText>I do not have a traditional engineering degree. I have a BS in Marketing from Illinois. I taught myself to code.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>And yet:</RichText>
          </Paragraph>
          <BulletList items={[
            "I architected sensor fusion systems trusted by federal agencies",
            "I drove the technical IP for low-power embedded systems, working directly with EE and firmware engineers",
            "I personally wrote **300,000+ lines of code** building Jiobit's first ecommerce platform",
            "I lead engineering, design, and product teams at Google",
            "I built technology that sold for tens of millions"
          ]} />
          <Paragraph>
            <RichText>**I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials.** When AI makes technical ability more accessible, learning fast matters more than pedigree.</RichText>
          </Paragraph>
        </Subsection>

        {CONTENT.pullquotes[6] && <PullQuote>{CONTENT.pullquotes[6]}</PullQuote>}

        <div style={{ marginTop: SPACE[10] }}>
          <h3
            style={{
              fontFamily: FONTS.headline,
              fontSize: TYPE_SCALE.headline.sm.size,
              fontWeight: TYPE_SCALE.headline.sm.weight,
              color: COLORS.ink[800],
              marginBottom: SPACE[6],
            }}
          >
            Career Timeline
          </h3>
          {CONTENT.timeline.length > 0 && <Timeline entries={CONTENT.timeline} />}
        </div>

        <Subsection title="Jiobit (0 to 1)">
          <Paragraph>
            <RichText>I founded Jiobit after briefly losing my son in a crowded Chicago park. *"I believe no parent should experience that panic."* We built a device with encryption strong enough to be **trusted by federal government and law enforcement** for sensitive location tracking—security as an architectural decision.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>The hardware was hard: we packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device. As I told *Inventors Digest*: *"For any of this to work... we had to nail this custom system architecture and the sensor fusion technology."* I am named inventor on **9+ issued U.S. patents** covering location tracking, power management, and machine learning systems.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>The outcome: SBIR Phase II Award (Air Force) [21], 200% YoY revenue growth, sold out in the 2018 holiday season, and acquired by **Life360 (NASDAQ: LIF)** in a deal that appreciated to **nine figures**. All 25 employees joined Life360 after the deal. [18][19]</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Motorola (Research to Practice)">
          <Paragraph>
            <RichText>I created **Moto Maker**, the first direct-to-consumer, built-to-order smartphone. It connected a website to the factory floor with **2,000+ permutations** shipping in **4 days or less**.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>When early versions had too many choices, I applied HBR research on the "Paradox of Choice" [15] and "IKEA Effect" [16]: *"If you have a hand in creating something, your affinity for that product goes through the roof. Labor creates love."* We curated options, reduced anxiety, and increased engagement. As VP of Global eCommerce, we achieved **10x YoY growth**, **50% fewer product returns**, and won **Webby Awards**, **Best of CES**, and the **Red Dot Design Award**.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Google (Current)">
          <Paragraph>
            <RichText>I serve as **Global Wearable Software Lead** for design, product, and research on wearable software and health platforms. I spearheaded **one of the first AI innovation product teams within Google Android** and served as the **original product lead for an internal consumer multi-agent orchestration system** designed for building coding agents. I have contributed intellectual property and led product teams developing machine learning algorithms for fitness, power management, and location services.</RichText>
          </Paragraph>
          <Paragraph>
            <RichText>I lead teams across **Design, UXR, Product, and Engineering (Firmware to Cloud)**. I know how to take prototype code and scale it globally. My time at **Deloitte** building enterprise web applications gave me discipline in requirements gathering and delivery.</RichText>
          </Paragraph>
        </Subsection>

        <Subsection title="Industry Visibility">
          <Paragraph>
            <RichText>My investing and ecosystem work (detailed in Section 4) give me a unique vantage point—I see where the industry is heading **8 to 16 months before it becomes mainstream**. That foresight shapes my curriculum. As a UIUC alumnus and founding member of **Illini Angels**, I can position McCormick as a talent pipeline for Chicago tech.</RichText>
          </Paragraph>
        </Subsection>
      </Section>

      
      {/* Section 6: What Others Say */}
      <Section number={6} title="What Others Say">
        {CONTENT.testimonials.map((group, i) => (
          <div key={i} style={{ marginBottom: SPACE[8] }}>
            {group.type === 'teaching' && (
              <Subsection title="On Teaching & Workshops">
                <Testimonials
                  type={group.type}
                  testimonials={group.testimonials}
                  source={group.source}
                />
              </Subsection>
            )}
            {group.type === 'students' && (
              <>
                <h4
                  style={{
                    fontFamily: FONTS.ui,
                    fontSize: TYPE_SCALE.ui.md.size,
                    fontWeight: 600,
                    color: COLORS.ink[700],
                    marginBottom: SPACE[4],
                    marginTop: SPACE[6],
                  }}
                >
                  Student Feedback ({group.source})
                </h4>
                <Testimonials
                  type={group.type}
                  testimonials={group.testimonials}
                  source={group.source}
                />
              </>
            )}
            {group.type === 'leadership' && (
              <Testimonials
                type={group.type}
                testimonials={group.testimonials}
                source={group.source}
              />
            )}
          </div>
        ))}
      </Section>

      
      {/* Section 7: Conclusion */}
      <Section number={7} title="The Path Forward">
        <Paragraph>
          <RichText>The "Product Engineer" is the future. McCormick can lead in teaching it.</RichText>
        </Paragraph>
        <Paragraph>
          <RichText>I bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going. I build AI products at Google, with clients, and with students every day.</RichText>
        </Paragraph>
        <Paragraph>
          <RichText>I look forward to discussing next steps.</RichText>
        </Paragraph>
      </Section>

      {/* Citations */}
      <div
        style={{
          maxWidth: LAYOUT.maxWidth.content,
          margin: '0 auto',
          padding: `0 ${LAYOUT.margin}`,
        }}
      >
        {CONTENT.citations.length > 0 && <Citations citations={CONTENT.citations} />}
      </div>

      {/* Footer */}
      <footer
        style={{
          maxWidth: LAYOUT.maxWidth.content,
          margin: '0 auto',
          padding: `${SPACE[10]} ${LAYOUT.margin}`,
          textAlign: 'center',
          borderTop: `1px solid ${COLORS.ink[100]}`,
        }}
      >
        <p
          style={{
            fontFamily: FONTS.ui,
            fontSize: TYPE_SCALE.ui.sm.size,
            color: COLORS.ink[400],
            marginBottom: SPACE[1],
          }}
        >
          Proposal for Clinical Faculty Appointment
        </p>
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: TYPE_SCALE.mono.sm.size,
            color: COLORS.ink[400],
          }}
        >
          Northwestern University • McCormick School of Engineering
        </p>
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: TYPE_SCALE.mono.sm.size,
            color: COLORS.accent.muted,
            marginTop: SPACE[3],
          }}
        >
          {CONTENT.header?.date || 'February 2026'}
        </p>
      </footer>
    </div>
  );
};

export default App;
