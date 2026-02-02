/**
 * Product Engineer Proposal - Northwestern Tech-Forward Design
 *
 * Design Direction: "Neural Network / Innovation Lab"
 * - Northwestern Purple as primary with tech-forward accents
 * - Deep slate dark mode with purple glow effects
 * - JetBrains Mono for headers, Inter for body
 * - Glassmorphism cards with noise texture
 * - Animated gradient meshes, circuit patterns, data flow
 * - Smooth scroll animations with intersection observer
 * - Rich iconography and visual breaks throughout
 */

import React, { useState, useEffect, useRef } from 'react';

const CONTENT = {
  "header": {
    "to": "Christopher A. Schuh",
    "toTitle": "Dean, McCormick School of Engineering",
    "from": "John Renaldi",
    "fromEmail": "jrenaldi79@gmail.com",
    "headshot": "https://media.licdn.com/dms/image/v2/D5603AQFUsK3qbahONA/profile-displayphoto-crop_800_800/B56ZrwKFmfLsAM-/0/1764965769267?e=1771459200&v=beta&t=MKHyOB7K-PZZdSc0xc2QDUYSMyM009nFvmZbiWoOz8I",
    "date": "February 2026",
    "title": "The Product Engineer",
    "subtitle": "Preparing McCormick students for the convergence of design, product, and engineering in the age of AI."
  },
  "heroStats": [
    {
      "value": "59%",
      "label": "Engineers Using AI Daily",
      "source": "up from 28% a year ago"
    },
    {
      "value": "50%",
      "label": "Productivity Gains",
      "source": "up from 20% the year before"
    },
    {
      "value": "90%",
      "label": "Code Written by AI",
      "source": "Claude Code's own codebase"
    },
    {
      "value": "10 days",
      "label": "To Ship New Products",
      "source": "Cowork built with AI tools"
    }
  ],
  "industryQuotes": [
    {
      "person": "Andrej Karpathy",
      "title": "OpenAI co-founder, former Tesla AI",
      "quote": "I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills."
    },
    {
      "person": "Jensen Huang",
      "title": "NVIDIA CEO",
      "quote": "There's a new programming language. It's called 'human.'"
    },
    {
      "person": "Magdalena Balazinska",
      "title": "UW Allen School",
      "quote": "Coding, or the translation of a precise design into software instructions, is dead. AI can do that."
    }
  ],
  "roleConvergence": [
    {
      "role": "Engineers",
      "target": "Product",
      "description": "When implementation becomes easy, the valuable skill becomes knowing what to build."
    },
    {
      "role": "PMs",
      "target": "Engineering",
      "description": "Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly."
    },
    {
      "role": "Designers",
      "target": "Eng & PM",
      "description": "Designers no longer hand off static mockups. They prototype in production code."
    }
  ],
  "pillars": [
    {
      "number": 1,
      "icon": "⚙️",
      "title": "Revolutionize the Methods of E",
      "description": "AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes."
    },
    {
      "number": 2,
      "icon": "🎓",
      "title": "Transform Engineering Educatio",
      "description": "Dean Schuh has called for \"whole-brain\" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy. They do not just build systems; they understand why those systems matter and who they serve."
    },
    {
      "number": 3,
      "icon": "🌍",
      "title": "Advance Critical Applications ",
      "description": "AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build)."
    }
  ],
  "timeline": [
    {
      "year": "Current",
      "title": "Google — Global Wearable Software Lead",
      "description": "Lead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded AI innovation product teams.",
      "highlight": true
    },
    {
      "year": "2021",
      "title": "Jiobit Acquired by Life360",
      "description": "Nine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal agencies.",
      "highlight": true
    },
    {
      "year": "2015",
      "title": "Founded Jiobit",
      "description": "Built sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device.",
      "highlight": false
    },
    {
      "year": "2011",
      "title": "Motorola/Google — VP Global eCommerce",
      "description": "Created Moto Maker. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award.",
      "highlight": false
    }
  ],
  "credentials": [
    {
      "value": "9+",
      "label": "U.S. Patents"
    },
    {
      "value": "300K+",
      "label": "Lines of Code"
    },
    {
      "value": "20+",
      "label": "Companies Invested"
    },
    {
      "value": "13",
      "label": "GitHub Repos"
    },
    {
      "value": "4",
      "label": "VC Fund LP"
    },
    {
      "value": "12-week",
      "label": "Corporate AI Curriculum"
    }
  ],
  "section1": {
    "title": "The Market & Student Need: Why Now",
    "intro": [
      "For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.",
      "AI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between \"people with ideas\" and \"people who can build\" is shrinking.",
      "This is happening now, inside the companies building these tools."
    ],
    "subsections": [
      {
        "title": "The Anthropic Case Study",
        "paragraphs": [
          "At Anthropic, the company behind Claude, internal research shows :",
          "Anthropic now hires generalists over specialists because \"many traditional programming skills are less relevant when AI handles implementation details.\"",
          "McCormick students will enter this world in 2-3 years. We need to prepare them now."
        ],
        "bullets": [
          "Engineers use Claude in 59% of their work, up from 28% a year ago",
          "They report 50% productivity gains, up from 20% the year before",
          "90% of Claude Code's codebase was written by Claude Code itself",
          "The team ships 60-100 internal releases per day",
          "They built a new product (Cowork) in about 10 days using their own AI tools"
        ]
      },
      {
        "title": "The Triad: Design, Product, and Engineering Are Merging",
        "paragraphs": [
          "Role boundaries are collapsing. Designers, product managers, and engineers are moving toward each other:",
          "The tools are converging too. Claude Code lets engineers ship features by describing intent. Figma AI generates production-ready components from design specs. Bolt (which hit $40M ARR in five months ) and Lovable let anyone describe a feature and watch it appear. These tools do not replace judgment. They automate the translation layer between idea and implementation. The role that remains is the one who knows what to build and why.",
          "Synthetic users represent another shift: AI personas that simulate customer feedback before a single line of code is written. Product teams can now test positioning, validate assumptions, and iterate on concepts using LLM-generated personas trained on real research data. This changes the research-to-build cycle entirely.",
          "AI lowers the floor to coding while raising the ceiling for engineering. The role that remains is the one who knows what to build and why."
        ],
        "bullets": [
          "PMs → Engineers: Six months ago, most product managers shipped zero code. Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly. By end of 2026, PMs may write 10-20% of production code.",
          "Designers → Engineers & PMs: Designers no longer hand off static mockups. With AI tools, they prototype in production code, make product decisions in real-time, and understand the systems they design for.",
          "Engineers → Product: When implementation becomes easy, the valuable skill becomes knowing what to build. Engineers who understand customer problems, market dynamics, and business models are worth more than those who only execute specs."
        ]
      },
      {
        "title": "The Rise of the \"Product Engineer\"",
        "paragraphs": [
          "Tech companies are redefining roles around this reality. Innovation happens when engineers have business context, and when PMs and designers can build. Companies like Vercel and Linear now hire \"Product Engineers\" who \"care more about outcomes and impact than the exact implementation.\" These roles command $140-170k at entry level in major tech hubs, with senior roles exceeding $200k—a premium that signals market demand."
        ],
        "bullets": []
      },
      {
        "title": "The Junior Developer Role Is Disappearing",
        "paragraphs": [
          "The traditional entry-level developer role is vanishing. Today, 84% of developers use AI tools , and GitHub research shows they complete tasks 55.8% faster . McKinsey reports 35-45% improvements in software quality . As Magdalena Balazinska of UW's Allen School puts it: \"Coding, or the translation of a precise design into software instructions, is dead. AI can do that.\""
        ],
        "bullets": []
      },
      {
        "title": "The New Skills: What Industry Leaders Are Saying",
        "paragraphs": [
          "Industry leaders agree on what matters now. Ethan Mollick (Wharton) argues that \"AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback.\"",
          "Andrej Karpathy (OpenAI co-founder) describes the shift: \"I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills.\"",
          "The programming language itself is changing. As Jensen Huang (NVIDIA CEO) puts it: \"There's a new programming language. It's called 'human.'\" The numbers confirm this: 20-30% of Microsoft's code is now AI-written , and Mark Zuckerberg predicts half of Meta's development will be done by AI within a year.",
          "Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy. These are the skills we must teach.",
          "The Opportunity: Employers now prioritize problem-solving (~90%) over GPA. McCormick can lead in teaching students to use AI to build systems that solve real problems."
        ],
        "bullets": []
      }
    ]
  },
  "section2": {
    "title": "Strategic Alignment with McCormick's Vision",
    "intro": [
      "This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas."
    ],
    "subsections": [
      {
        "title": "Pillar 1: Revolutionize the Methods of Engineering",
        "paragraphs": [
          "AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes.",
          "The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping. Engineers who master AI-augmented methods will define the next generation of engineering practice. McCormick can lead in codifying these methods rather than adopting them later."
        ],
        "bullets": []
      },
      {
        "title": "Pillar 2: Transform Engineering Education",
        "paragraphs": [
          "Dean Schuh has called for \"whole-brain\" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy. They do not just build systems; they understand why those systems matter and who they serve.",
          "This prepares engineers to function as what Dean Schuh describes as \"the fulcrum between the research lab and the marketplace.\" The marketplace represents humanity and its needs. Engineers serve as the bridge. This curriculum teaches students to be that bridge."
        ],
        "bullets": []
      },
      {
        "title": "Pillar 3: Advance Critical Applications of Engineering",
        "paragraphs": [
          "AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build).",
          "The skills taught here also amplify work in the other three focus areas. Climate researchers use AI agents to process satellite data. Health engineers use LLMs to analyze clinical literature. Sustainability teams use generative tools to model resource flows. The Product Engineer mindset and AI fluency accelerate progress across all four challenges."
        ],
        "bullets": []
      },
      {
        "title": "A Once-in-a-Generation Opportunity",
        "paragraphs": [
          "Dean Schuh has expressed interest in \"once-in-a-generation ideas and goals that can carry us into the future together.\" The transformation of engineering practice by AI qualifies. The window to establish McCormick as a leader in AI-augmented engineering education is now, while methods are still being defined and before competitors codify their own approaches."
        ],
        "bullets": []
      }
    ]
  },
  "section3": {
    "title": "Who Should Teach This",
    "intro": [
      "If McCormick wants to prepare students for the \"Product Engineer\" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire. It requires someone who operates across boundaries that do not usually overlap."
    ],
    "subsections": [
      {
        "title": "The Profile",
        "paragraphs": [
          "Executive credibility. Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations. Students need to learn not just how to build, but how to navigate the systems that ship products.",
          "Hands-on builder. Not someone who \"used to code.\" Someone who builds production AI systems today. The tools are changing too fast for secondhand knowledge. Students need an instructor who has shipped MCP servers, built agentic systems, and debugged LLM pipelines this month.",
          "Startup experience. Someone who has founded a company, raised capital, and exited. Entrepreneurship cannot be taught from case studies alone. Students benefit from someone who has lived the fundraising pitch, the pivot, the acquisition negotiation.",
          "This matters more now than ever. AI has collapsed the cost of building, but it has not changed the hard parts: figuring out what to build, finding customers who will pay, navigating ambiguity with limited resources. Founders learn these skills through survival, not textbooks. They have shipped products when the plan fell apart, pivoted when the market said no, and made decisions with incomplete information under pressure. In an era where anyone can prompt an AI to generate code, the differentiating skills are exactly what founders develop: judgment about what's worth building, speed of iteration, and the ability to operate when the path is not clear. A founder who has exited brings something an academic or career corporate employee cannot: the full lifecycle perspective from idea to acquisition, and the scar tissue that comes with it.",
          "Design fluency. The Product Engineer role sits at the intersection of design, product, and engineering. The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.",
          "Industry connectivity. Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream. Curriculum needs to reflect what employers will want in 2-3 years, not what they wanted when the textbook was written.",
          "Industry connectivity also means access. The right instructor can bring their network directly into the classroom: founders who just raised Series A, CTOs navigating AI adoption at scale, VCs evaluating the next wave of startups. These are not theoretical conversations. Students hear from practitioners living this shift in real-time. Guest speakers become mentors. Class discussions become recruiting conversations. The instructor's network becomes the students' network. This transforms a course from content delivery into a bridge between McCormick and the companies students want to join.",
          "Teaching experience. Someone who has already taught at the graduate level across engineering and business schools, and who has trained corporate teams from entry-level to executive.",
          "This combination is rare. Most executives do not build. Most builders have not led at scale. Most founders have not taught. Finding someone who does all of these, and is actively working in AI today, is the challenge."
        ],
        "bullets": []
      }
    ]
  },
  "section4": {
    "title": "What I Can Teach",
    "intro": [
      "The \"Product Engineer\" needs to move from idea to shipped product. This is not a single course. It is a set of capabilities that can be woven into existing McCormick and Segal curriculum wherever they fit. I am already piloting parts of this in my current classes.",
      "Below are the areas where I can contribute:"
    ],
    "subsections": [
      {
        "title": "Applicability Across Engineering Disciplines",
        "paragraphs": [
          "While some examples below reference software products, the underlying skills apply across all engineering disciplines. The Product Engineer mindset, knowing what to build and translating between technical capability and human need, is universal.",
          "Hardware and physical systems: My Jiobit work involved sensor fusion, embedded firmware, cellular/GPS/BLE integration, and hardware manufacturing. AI tools now accelerate PCB design, simulation optimization, and firmware development. The methods I teach (agentic systems, retrieval architectures, evaluation frameworks) apply directly to hardware engineering workflows.",
          "Materials and manufacturing: AI is accelerating materials discovery and process optimization. Dean Schuh's own field has seen rapid adoption of machine learning for alloy design and microstructure prediction. The agentic development and context engineering skills I teach enable engineers to build and deploy these AI systems in research and production settings.",
          "Biomedical and health: AI agents process clinical literature, analyze patient data, and generate regulatory documentation. Biomedical engineers who understand how to build and evaluate these systems will lead the next generation of health technology.",
          "Civil and environmental: Generative design tools optimize structural systems. AI agents analyze environmental monitoring data and model resource flows. The evaluation and safety frameworks I teach are directly relevant to high-stakes engineering applications.",
          "The core transferable skills, judgment about what to build, ability to work with AI tools, and translation between technical and human domains, prepare engineers for any field where AI is reshaping practice."
        ],
        "bullets": []
      },
      {
        "title": "AI-Augmented Qualitative Discovery",
        "paragraphs": [
          "Traditional user research takes weeks: recruiting participants, scheduling interviews, transcribing conversations, coding themes. AI collapses this timeline while expanding depth.",
          "Students learn to use AI as a research amplifier: real-time transcription during interviews, instant theme extraction across dozens of transcripts, pattern recognition across disparate data sources. The goal is not to replace human judgment but to multiply researcher capacity. An interview that once took days to analyze now yields insights in minutes. A corpus of customer support tickets becomes a searchable knowledge base of user pain.",
          "What I Teach: Interview analysis pipelines, theme extraction prompts, cross-source pattern matching, building research repositories that agents can query, integrating voice transcription (Assembly AI) into live research sessions",
          "Technologies: Assembly AI, Whisper, LLM-based theme extraction, embedding-based similarity search, research corpus management"
        ],
        "bullets": []
      },
      {
        "title": "Quantitative Discovery",
        "paragraphs": [
          "Replace intuition with data. Turn qualitative Jobs to be Done (JTBD) research into quantitative datasets. Students learn to validate ideas before building.",
          "Technologies: Python, Scikit-learn, Pandas, clustering algorithms, SQL, data visualization"
        ],
        "bullets": []
      },
      {
        "title": "Generative Prototyping",
        "paragraphs": [
          "Turn requirements into testable artifacts quickly. Use AI tools to generate wireframes from rough sketches. Build synthetic user personas that simulate customer feedback, letting students test positioning and product concepts against LLM-generated personas before writing code.",
          "Technologies: LLM foundational models (OpenAI, Anthropic, Gemini, Cohere), DALL-E image generation, prompt engineering, persona design frameworks"
        ],
        "bullets": []
      },
      {
        "title": "Agentic Systems",
        "paragraphs": [
          "Move beyond chatbots to autonomous, goal-directed systems. Build servers that standardize agent connectivity. Design memory systems so agents maintain state across sessions. Shift from manual QA to \"Evals\" that test AI outputs against safety and quality guardrails.",
          "Technologies: Model Context Protocol (MCP) servers, LangChain, n8n, ReAct frameworks, vector databases (PGVector), full-text search (BM25), OpenAI embeddings, Cohere reranking, Agentic RAG pipelines, multi-agent orchestration, LLM chaining and reflection loops, browser automation agents, deep research tools (Firecrawl, Tavily)"
        ],
        "bullets": []
      },
      {
        "title": "Agentic Development: From \"Vibing\" to Production",
        "paragraphs": [
          "There is a gap between prompting ChatGPT and shipping production AI systems. Most tutorials stop at \"vibing,\" the casual, exploratory prompting that works in demos but fails in production. Students need to learn the hard parts: deterministic behavior, error handling, cost management, and integration with existing systems.",
          "What I Teach:",
          "Technologies: Claude Code, Cursor, Windsurf, AGENTS.md specifications, API gateways, cost monitoring, CI/CD integration, multi-agent coordination frameworks"
        ],
        "bullets": [
          "Development Best Practices: How to use tools like Claude Code, Cursor, and Windsurf effectively. Writing CLAUDE.md files and AGENTS.md specifications that give AI agents the context they need. Prompt engineering that produces consistent, testable outputs.",
          "Infrastructure Requirements: Rate limiting, API gateway management, cost tracking, latency budgets. How to build systems that gracefully degrade when AI services fail. Caching strategies for expensive model calls.",
          "Operational Changes: AI development requires different workflows than traditional software. Students learn: how to review AI-generated code, when to trust agent outputs vs. verify them, how to debug systems where the logic is partially opaque.",
          "Planning Tool Integration: Connecting agents to project management systems (Linear, Jira, Asana), documentation platforms, and CI/CD pipelines. Building agents that understand your codebase through proper indexing and retrieval.",
          "Agent Swarms & Orchestration: When single agents are not enough, you coordinate multiple specialized agents that divide work, share context, and merge results. Handoff protocols, conflict resolution, and resource allocation.",
          "Memory Systems: Building procedural memory so agents learn from past interactions. Failure-to-success pattern detection, root cause analysis, and retrieval architectures that surface relevant context at the right time."
        ]
      },
      {
        "title": "Context Engineering",
        "paragraphs": [
          "AI agents fail when they run out of context. A 200k token window sounds large until your agent needs to understand a codebase, remember a conversation history, and execute a multi-step plan simultaneously. Context engineering is the discipline of managing what information agents have access to and when.",
          "What I Teach:",
          "Technologies: RAG architectures, context summarization, session state management, hierarchical prompt design, dynamic context loading, tool pagination patterns"
        ],
        "bullets": [
          "Long-Running Systems: Agents that operate over hours or days, not single-turn interactions. Session management, state persistence, and graceful recovery from interruptions.",
          "Deep Agents: Building agents that can explore complex domains: reading documentation, navigating codebases, researching across multiple sources. These agents need strategies for prioritizing information and knowing when to stop.",
          "Context Window Management: Summarization strategies, dynamic context loading, and retrieval-augmented generation (RAG) that pulls relevant information on demand rather than stuffing everything into the prompt.",
          "Hierarchical Context: Some information is always relevant (system instructions, core identity). Some is session-specific. Some is task-specific. Students learn to structure context in layers that maximize utility while minimizing token waste.",
          "Tool Design for Context: Building MCP servers and tool interfaces that provide rich context to agents without overwhelming them. Pagination, filtering, and progressive disclosure patterns."
        ]
      },
      {
        "title": "AI Infrastructure",
        "paragraphs": [
          "Deploy AI systems on Day 1. Manage API gateways for rate limits, cost, and latency. Connect AI models to real-world data sources and device hardware. These are skills I use daily with clients and students.",
          "Technologies: React/TypeScript, serverless APIs, Google Cloud Platform (GCP), Websockets, Assembly AI (real-time voice transcription), live multimodal streaming, tool integrations, content graders with scoring rubrics"
        ],
        "bullets": []
      },
      {
        "title": "Entrepreneurship & Venture Dynamics",
        "paragraphs": [
          "I have lived the full startup arc: from idea to Techstars to product-market fit to nine-figure exit. I can teach this from experience, not textbooks.",
          "What I bring: I founded Jiobit, raised venture capital, navigated hardware manufacturing, won SBIR contracts, scaled a team, and sold to a public company. I have sat on both sides of the table, as a founder raising money and as an investor evaluating deals. I serve on the Techstars Selection Committee, mentor at mHUB (hardtech) and iVenture Accelerator, and am an LP in four venture funds including LongJump (Chicago's most active pre-seed fund). I have invested in 20+ companies.",
          "Topics: Cap table structures, fundraising mechanics, term sheets, due diligence processes. How investors evaluate technical stacks and IP. When to build vs. buy. How to think about defensibility when AI commoditizes implementation. How to tell a story that raises money. How to build a company that people want to join and stay at."
        ],
        "bullets": []
      },
      {
        "title": "How Students Are Assessed",
        "paragraphs": [
          "The skills taught here are assessed through outcomes, not exams.",
          "Project-based evaluation: Students ship working systems. A functioning MCP server, a deployed synthetic user platform, or a production-ready AI agent demonstrates competence in ways a written test cannot.",
          "Portfolio outcomes: Students leave with tangible artifacts: GitHub repositories, deployed prototypes, or contributions to real products. These portfolios serve as evidence of capability for employers.",
          "Evaluation frameworks: The same \"evals\" methodology taught for AI systems applies to student work. Rubrics with objective criteria, automated testing where applicable, and structured feedback loops ensure consistent assessment.",
          "Industry validation: Guest speakers and mentors from my network provide external feedback on student projects. Practitioners assess whether students can operate in production environments, not just classroom settings."
        ],
        "bullets": []
      },
      {
        "title": "Building Institutional Capacity",
        "paragraphs": [
          "This curriculum is designed to scale beyond a single instructor.",
          "Systematized frameworks: My 12-week corporate training program demonstrates that this knowledge can be packaged into repeatable modules. The same approach applies to McCormick courses. Teaching areas become documented frameworks other faculty can adopt.",
          "Reusable assets: The MCP servers, CLAUDE.md templates, AGENTS.md specifications, and evaluation rubrics I create become institutional resources. These artifacts enable other instructors to teach AI-augmented methods without starting from scratch.",
          "TA development: As courses scale, teaching assistants learn the material deeply. Some become future instructors, building a pipeline of people who can teach this content.",
          "Cross-departmental adoption: The methods taught here, context engineering, agentic development, evaluation frameworks, are applicable across McCormick departments. Once piloted in one program, modules can be adapted for materials science, biomedical engineering, or other disciplines."
        ],
        "bullets": []
      }
    ]
  },
  "section5": {
    "title": "Why Me",
    "intro": [
      "I am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams. I have held VP and General Manager responsibilities at Google and Motorola. I co-founded Jiobit, a wearable tech startup acquired by Life360 (NASDAQ: LIF) in 2021. I operate fluently across executive strategy and hands-on building. My consulting clients range from C-suite executives to senior engineers. My corporate workshops serve entry-level engineers through product directors. I teach MBAs at Kellogg and engineers at McCormick. I serve on AI advisory boards for Menlo Ventures and Techstars. This range is rare."
    ],
    "subsections": [
      {
        "title": "The Hands-On Work: What I Build Today",
        "paragraphs": [
          "My most intensive building has happened after Google. I am not a manager who \"used to code.\" I write production systems daily:"
        ],
        "bullets": [
          "MCP Servers & Multi-Agent Orchestration: I build and publish Model Context Protocol servers to npm, enabling AI agents to connect with external services. I build multi-agent systems using LangChain, n8n, and ReAct frameworks that coordinate across foundational models (Gemini, OpenAI, Anthropic, Cohere). I have built systems that stream real-time meeting transcripts via Websockets and Assembly AI, enabling agents to act during live calls.",
          "Full-Stack AI Infrastructure: I work across the modern AI stack: vector databases (PGVector), semantic search with embeddings, full-text search (BM25), Cohere reranking, Agentic RAG pipelines, and LLM chaining with reflection loops. I build in React/TypeScript with serverless APIs and integrate tools like Firecrawl and Tavily for deep research agents. I have built browser automation agents, content graders with scoring rubrics, and custom HTML email generation systems.",
          "Live Multimodal AI: I build systems that process voice, text, and images in real-time, connecting AI agents to device hardware and sensor data.",
          "Synthetic User Platforms: I built a synthetic user system that simulates customer feedback using LLM-generated personas. The platform uses graph databases and knowledge graphs to model user relationships and context, with self-learning loops that refine persona accuracy based on research validation. This is an example of the new AI workflows reshaping product development.",
          "Agentic Procedural Memory: I designed and built an Agentic Procedural Memory System that enables AI agents to learn from their own experiences. The system detects failure-to-success patterns in tool usage, performs automated root cause analysis, and stores reusable procedures in a hybrid search architecture (vector embeddings + BM25 full-text search with Reciprocal Rank Fusion). Agents using this system show 50% step reduction and 95%+ success rates on similar tasks. This work builds directly on recent research from Zhejiang University and Alibaba.",
          "Client Work & Executive Advisory: I consult directly with public company CTOs and CEOs on AI strategy, and run hands-on design workshops with their development teams. This means reviewing AI proposals, debugging architectures, and pairing with senior engineers to ship production code. I build alongside the teams I teach.",
          "Corporate Training: Through my consulting firm, I run a 12-week curriculum that upskills engineers, product managers, and designers into proficient AI practitioners. Participants leave implementing AI into their products and operations. My workshops span entry-level engineers to product directors.",
          "Published Research: I publish original technical research on AI agent architectures. A recent investigation reverse-engineered Claude Code's API requests and identified an implementation flaw: skill instructions were being injected as user messages (low authority) rather than in the system prompt (high authority), explaining why Vercel's benchmarks showed only 53% pass rates. This kind of deep technical analysis is what I bring to both clients and students.",
          "Open Source: I maintain 13 public repositories on GitHub (github.com/jrenaldi79), including MCP servers, agent frameworks, and prompt engineering collections."
        ]
      },
      {
        "title": "Design Leadership",
        "paragraphs": [
          "I lead designers, not just work with them. At Google, I direct UX Research, UI/UX Design, and Engineering teams for wearable platforms. I learned high-touch product design through osmosis at Motorola, where we obsessed over materials, finishes, and interaction details. I apply design thinking to every product decision. This matters for the \"Product Engineer\" role: the best builders understand what makes products feel good, not just function correctly."
        ],
        "bullets": []
      },
      {
        "title": "Teaching & Academic Leadership",
        "paragraphs": [
          "I teach at McCormick (Segal), Kellogg, and University of Illinois (Applied AI), working across engineering and business at multiple institutions. My courses integrate AI into design thinking and product development, including building custom agents and incorporating synthetic users into research. I led Northwestern's Business Innovation Lab (Winter 2025) in partnership with Google DeepMind and served as a key panelist at Kearney's 2024 Executive Panel on AI in Product Design.",
          "I work alongside Jim Wicks (Segal Design Institute founder) and Mike Edmonds (Microsoft) in the classroom. My philosophy in the MPD² program: outcomes over outputs. I teach students to be \"missionaries, not mercenaries.\""
        ],
        "bullets": []
      },
      {
        "title": "Curriculum-Advancing Work",
        "paragraphs": [
          "Clinical faculty focus on teaching, not traditional academic research with publication requirements. My work aligns with this model while still advancing the curriculum in measurable ways.",
          "Testing new methods: I pilot AI tools and workflows in real courses and corporate training programs before they become mainstream. My 12-week corporate curriculum has been iterated across multiple cohorts, identifying what works and what does not. This applied testing informs what I bring to McCormick students.",
          "Developing evaluation frameworks: My work on agentic procedural memory, synthetic user validation, and Claude Code architecture analysis creates benchmarks and evaluation methods that inform pedagogy. Understanding how AI systems fail is as important as understanding how they succeed.",
          "Building reusable assets: The MCP servers, agent frameworks, and prompt engineering collections I maintain on GitHub become teaching resources. Students learn from production code, not toy examples.",
          "Industry feedback loops: My consulting work with public company CTOs and startup founders provides continuous signal on what skills employers need. This feedback shapes curriculum in near real-time, not on academic publication timelines.",
          "This is not traditional research, but it is rigorous, iterative work that directly improves teaching effectiveness."
        ],
        "bullets": []
      },
      {
        "title": "What a Clinical Appointment Enables",
        "paragraphs": [
          "I currently teach at McCormick through adjunct and visiting arrangements. A clinical faculty appointment changes what is possible.",
          "Curriculum design authority: Clinical faculty can propose new courses, shape program requirements, and influence how AI-augmented methods are integrated across the curriculum. Adjunct instructors teach assigned courses; clinical faculty help design them.",
          "Institutional commitment: A formal appointment signals long-term investment, both from McCormick and from me. Students benefit from continuity. Industry partners see a stable point of contact. The curriculum can evolve over multiple years rather than being renegotiated each term.",
          "Deeper student mentorship: Clinical faculty advise students, supervise projects, and build relationships that extend beyond a single course. This mentorship is where much of the real learning happens.",
          "Program development: With a clinical appointment, I can work with department chairs and other faculty to integrate Product Engineer concepts into existing programs, not just teach standalone courses. The goal is systemic curriculum enhancement, not a single elective."
        ],
        "bullets": []
      },
      {
        "title": "The Self-Taught Path",
        "paragraphs": [
          "I do not have a traditional engineering degree. I have a BS in Marketing from Illinois. I taught myself to code.",
          "And yet: - I architected sensor fusion systems trusted by federal agencies - I drove the technical IP for low-power embedded systems, working directly with EE and firmware engineers - I personally wrote 300,000+ lines of code building Jiobit's first ecommerce platform - I lead engineering, design, and product teams at Google - I built technology that sold for tens of millions",
          "I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials. When AI makes technical ability more accessible, learning fast matters more than pedigree."
        ],
        "bullets": [
          "I architected sensor fusion systems trusted by federal agencies",
          "I drove the technical IP for low-power embedded systems, working directly with EE and firmware engineers",
          "I personally wrote 300,000+ lines of code building Jiobit's first ecommerce platform",
          "I lead engineering, design, and product teams at Google",
          "I built technology that sold for tens of millions"
        ]
      },
      {
        "title": "Jiobit (0 to 1)",
        "paragraphs": [
          "I founded Jiobit after briefly losing my son in a crowded Chicago park. \"I believe no parent should experience that panic.\" We built a device with encryption strong enough to be trusted by federal government and law enforcement for sensitive location tracking—security as an architectural decision.",
          "The hardware was hard: we packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device. As I told Inventors Digest: \"For any of this to work... we had to nail this custom system architecture and the sensor fusion technology.\" I am named inventor on 9+ issued U.S. patents covering location tracking, power management, and machine learning systems.",
          "The outcome: SBIR Phase II Award (Air Force) , 200% YoY revenue growth, sold out in the 2018 holiday season, and acquired by Life360 (NASDAQ: LIF) in a deal that appreciated to nine figures. All 25 employees joined Life360 after the deal."
        ],
        "bullets": []
      },
      {
        "title": "Motorola (Research to Practice)",
        "paragraphs": [
          "I created Moto Maker, the first direct-to-consumer, built-to-order smartphone. It connected a website to the factory floor with 2,000+ permutations shipping in 4 days or less.",
          "When early versions had too many choices, I applied HBR research on the \"Paradox of Choice\" and \"IKEA Effect\" : \"If you have a hand in creating something, your affinity for that product goes through the roof. Labor creates love.\" We curated options, reduced anxiety, and increased engagement. As VP of Global eCommerce, we achieved 10x YoY growth, 50% fewer product returns, and won Webby Awards, Best of CES, and the Red Dot Design Award."
        ],
        "bullets": []
      },
      {
        "title": "Google (Current)",
        "paragraphs": [
          "I serve as Global Wearable Software Lead for design, product, and research on wearable software and health platforms. I spearheaded one of the first AI innovation product teams within Google Android and served as the original product lead for an internal consumer multi-agent orchestration system designed for building coding agents. I have contributed intellectual property and led product teams developing machine learning algorithms for fitness, power management, and location services.",
          "I lead teams across Design, UXR, Product, and Engineering (Firmware to Cloud). I know how to take prototype code and scale it globally. My time at Deloitte building enterprise web applications gave me discipline in requirements gathering and delivery."
        ],
        "bullets": []
      },
      {
        "title": "Investor & Industry Visibility",
        "paragraphs": [
          "I have invested in 20+ companies, serve on the Techstars Selection Committee, and am an LP in 4 Venture Funds including LongJump (Chicago's most active pre-seed fund). My investing, consulting, and startup ecosystem work give me a unique vantage point—I see where the industry is heading 8 to 16 months before it becomes mainstream. That foresight shapes my curriculum: students learn what matters next, not what was in a textbook three years ago.",
          "As a UIUC alumnus and founding member of Illini Angels, I position McCormick as a talent pipeline for Chicago tech. I mentor at Techstars Chicago, mHUB (hardtech), and iVenture Accelerator."
        ],
        "bullets": []
      }
    ]
  },
  "section6": {
    "title": "What Others Say",
    "content": "-   **Logan LaHive**, Managing Director, Techstars Chicago:\n    *\"FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.\"*\n\n-   **Lior Ron**, Founder of Uber Freight, Former Moto/Google Executive:\n    *\"John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.\"*\n\n-   **Jake Phillips**, Sr. Director, Reality Labs Accessories at Meta (reported to John):\n    *\"In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.\"*\n\n-   **Matt Vokoun**, Google VP, Strategy, Business Operations, Product Management:\n    *\"John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.\"*\n\n### On Teaching & Workshops\n\n-   **John Minor**, Chief Product Officer, PayNearMe:\n    *\"John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.\"*\n\n-   **Lauren Antonoff**, CEO, Life360:\n    *\"I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!\"*\n\n-   **Sr. Product Manager**, PayNearMe:\n    *\"Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!\"*\n\n-   **Kellogg Students:**\n    - *\"The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.\"*\n    - *\"You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.\"*\n    - *\"Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.\"*\n    - *\"I come from a non-technical background but was surprised I kept up!\"*\n\n---",
    "bullets": [
      "Logan LaHive, Managing Director, Techstars Chicago: \"FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.\"",
      "Lior Ron, Founder of Uber Freight, Former Moto/Google Executive: \"John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.\"",
      "Jake Phillips, Sr. Director, Reality Labs Accessories at Meta (reported to John): \"In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.\"",
      "Matt Vokoun, Google VP, Strategy, Business Operations, Product Management: \"John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.\"",
      "John Minor, Chief Product Officer, PayNearMe: \"John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.\"",
      "Lauren Antonoff, CEO, Life360: \"I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!\"",
      "Sr. Product Manager, PayNearMe: \"Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!\"",
      "Kellogg Students: - \"The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.\" - \"You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.\" - \"Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.\" - \"I come from a non-technical background but was surprised I kept up!\""
    ]
  },
  "section7": {
    "title": "The Path Forward",
    "paragraphs": [
      "The \"Product Engineer\" is the future. McCormick can lead in teaching it.",
      "I bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going. I build AI products at Google, with clients, and with students every day.",
      "I look forward to discussing next steps."
    ]
  },
  "citations": [
    "Anthropic. \"How AI Is Transforming Work at Anthropic.\" Anthropic Research Blog, December 2, 2025. https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic",
    "Orosz, Gergely. \"How Claude Code is Built.\" The Pragmatic Engineer, September 23, 2025. https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built",
    "Zieminski, Karol. \"Anthropic Shipped Claude Cowork in 10 Days Using Its Own AI.\" Product with Attitude, January 13, 2026. https://karozieminski.substack.com/p/claude-cowork-anthropic-product-deep-dive",
    "Stack Overflow. \"2025 Developer Survey: AI.\" 2025. https://survey.stackoverflow.co/2025/ai",
    "Peng, Sida; Kalliamvakou, Eirini; Cihon, Peter; and Demirer, Mert. \"The Impact of AI on Developer Productivity: Evidence from GitHub Copilot.\" Microsoft Research, February 2023. arXiv:2302.06590. https://arxiv.org/pdf/2302.06590",
    "McKinsey & Company. \"Unlocking the Value of AI in Software Development.\" McKinsey Digital, November 3, 2025. https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/unlocking-the-value-of-ai-in-software-development",
    "Mollick, Ethan. \"Management as AI Superpower.\" One Useful Thing (Substack), January 27, 2026. https://www.oneusefulthing.org/p/management-as-ai-superpower",
    "Karpathy, Andrej. X (Twitter) post on AI programming, December 26, 2025. https://x.com/karpathy/status/2004607146781278521",
    "Huang, Jensen. Keynote address at London Tech Week, June 9, 2025. Reported by CNBC. https://www.cnbc.com/2025/06/09/we-train-ai-like-humans-now-nvidia-jensen-huang-says-.html",
    "Nadella, Satya and Zuckerberg, Mark. Remarks at Meta LlamaCon, April 29, 2025. Reported by CNBC and GeekWire. https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html",
    "Balazinska, Magdalena. \"Coding is Dead: UW Computer Science Program Rethinks Curriculum for the AI Era.\" GeekWire, July 10, 2025. https://www.geekwire.com/2025/coding-is-dead-uw-computer-science-program-rethinks-curriculum-for-the-ai-era/",
    "Seth, Deepak (Gartner) and Atahan, Bekir (Experis/ManpowerGroup). \"What AI Skills Job Seekers Need to Develop in 2026.\" Computerworld, January 19, 2026. https://www.computerworld.com/article/4117602/what-ai-skills-job-seekers-need-to-develop-in-2026.html",
    "National Association of Colleges and Employers (NACE). \"Job Outlook 2025.\" December 9, 2024. https://www.naceweb.org/talent-acquisition/candidate-selection/what-are-employers-looking-for-when-reviewing-college-students-resumes",
    "Sacra Research and ARR Club. \"Bolt.new ARR Hit $40M in 5 Months.\" 2025. https://sacra.com/c/bolt-new/",
    "Schwartz, Barry. \"More Isn't Always Better.\" Harvard Business Review, June 2006. https://hbr.org/2006/06/more-isnt-always-better",
    "Norton, Michael I.; Mochon, Daniel; and Ariely, Dan. \"The IKEA Effect: When Labor Leads to Love.\" Harvard Business School Working Paper 11-091. https://www.hbs.edu/ris/Publication%20Files/11-091.pdf",
    "Fang, Ruochen et al. \"Memp: Exploring Agent Procedural Memory.\" Zhejiang University and Alibaba Group, August 2025. arXiv:2508.06433. https://arxiv.org/abs/2508.06433",
    "Life360 ASX Announcement. \"Proposed Acquisition of Jiobit.\" April 27, 2021. https://www.asx.com.au/asxpdf/20210427/pdf/44vw8t5kt43wqg.pdf",
    "TechCrunch. \"Family tracking app Life360 to acquire wearable location device Jiobit for $37M.\" April 27, 2021. https://techcrunch.com/2021/04/27/family-tracking-app-life360-to-acquire-wearable-location-device-jiobit-for-37m/",
    "Jiobit Blog. \"Winner of 17th Annual Chicago Innovation Awards.\" October 29, 2019. https://www.jiobit.com/blog/jiobit-named-winner-of-17th-annual-chicago-innovation-awards",
    "Jiobit Blog. \"SBIR Phase II Award from U.S. Air Force.\" August 21, 2019. https://www.jiobit.com/blog/jiobit-receives-sbir-phase-ii-award-from-us-air-force",
    "USPTO Patent Records: US 10,172,109; US 10,158,971; US 9,980,087; US 10,064,002; and related JIO, Inc. and Tile, Inc. filings. https://patents.justia.com/assignee/tile-inc",
    "Vercel Engineering. \"AGENTS.md Outperforms Skills in Our Agent Evals.\" Vercel Blog, January 27, 2026. https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals",
    "Northwestern University Segal Design Institute. \"John Renaldi Faculty Profile.\" https://design.northwestern.edu/people/profiles/renaldi-john.html"
  ]
};

// ============================================================================
// DESIGN TOKENS - Northwestern Brand + Blog-Optimized Readability
// ============================================================================
const TOKENS = {
  colors: {
    // Northwestern brand inspired
    brand: {
      purple: '#4E2A84',       // Northwestern Purple (primary)
      purpleLight: '#7B4DB3',  // Lighter purple
      purpleDark: '#3A1F63',   // Darker purple
      purpleGlow: 'rgba(78, 42, 132, 0.4)',
    },
    // Base palette - Light mode for readability with dark hero
    bg: {
      primary: '#FAFAF9',      // Warm off-white
      secondary: '#F5F4F2',    // Light warm gray
      tertiary: '#EFEEED',     // Subtle gray for cards
      card: 'rgba(255, 255, 255, 0.9)', // Light glass card
      hero: '#0D0A14',         // Dark hero background
      heroSecondary: '#1E1828',
    },
    // Tech accent colors
    accent: {
      cyan: '#0891B2',         // Deeper cyan for light bg
      cyanGlow: 'rgba(8, 145, 178, 0.15)',
      gold: '#D97706',         // Deeper gold/amber for light bg
      goldGlow: 'rgba(217, 119, 6, 0.15)',
      green: '#059669',        // Deeper green for light bg
      greenGlow: 'rgba(5, 150, 105, 0.15)',
    },
    // Text colors - optimized for reading
    text: {
      primary: '#1F2937',      // Dark gray (not pure black - easier on eyes)
      secondary: '#4B5563',    // Medium gray for body text
      tertiary: '#9CA3AF',     // Light gray for metadata
      inverse: '#FAFAF9',      // For dark backgrounds
      heading: '#4E2A84',      // Purple headings
    },
    // Gradients
    gradients: {
      hero: 'linear-gradient(135deg, #0D0A14 0%, #1E1828 50%, #14101C 100%)',
      card: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 250, 249, 0.9) 100%)',
      purple: 'linear-gradient(135deg, #4E2A84 0%, #7B4DB3 100%)',
      accent: 'linear-gradient(135deg, #4E2A84 0%, #0891B2 100%)',
      gold: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
    }
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Source Serif 4', Georgia, 'Times New Roman', serif",
    display: "'Playfair Display', Georgia, serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
    section: '100px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  shadows: {
    glow: '0 0 60px rgba(78, 42, 132, 0.2)',
    card: '0 2px 12px rgba(0, 0, 0, 0.08), 0 4px 24px rgba(78, 42, 132, 0.06)',
    elevated: '0 8px 30px rgba(0, 0, 0, 0.12)',
    cyanGlow: '0 0 30px rgba(8, 145, 178, 0.15)',
  }
};

// ============================================================================
// SVG ICONS - Distinctive hand-crafted icons with character
// ============================================================================
const Icons = {
  // Ascending trend line with spark - represents growth and momentum
  trendUp: (color = TOKENS.colors.brand.purple) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 18L10 12L14 16L20 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8H20V12" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="6" r="2" fill={color} opacity="0.6"/>
    </svg>
  ),
  // Lightning bolt with energy burst
  bolt: (color = TOKENS.colors.accent.cyan) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14H11L10 22L19 10H12L13 2Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="5" r="1.5" fill={color} opacity="0.7"/>
      <circle cx="6" cy="18" r="1" fill={color} opacity="0.5"/>
    </svg>
  ),
  // Circuit chip with connection nodes
  chip: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5"/>
      <path d="M9 6V3M15 6V3M9 21V18M15 21V18M6 9H3M6 15H3M21 9H18M21 15H18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // Sprouting plant - represents growth and nurturing
  sprout: (color = TOKENS.colors.accent.green) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 22V12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 12C12 12 12 8 16 5C16 5 12 7 12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 14C12 14 12 10 8 7C8 7 12 9 12 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12C12 8 16 5 16 5" fill={color} fillOpacity="0.15"/>
      <circle cx="16" cy="5" r="2" fill={color} fillOpacity="0.3"/>
      <circle cx="8" cy="7" r="1.5" fill={color} fillOpacity="0.3"/>
    </svg>
  ),
  // Abstract neural network / constellation
  brain: (color = TOKENS.colors.brand.purple) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2" fill={color}/>
      <circle cx="5" cy="12" r="2" fill={color}/>
      <circle cx="19" cy="12" r="2" fill={color}/>
      <circle cx="8" cy="19" r="2" fill={color}/>
      <circle cx="16" cy="19" r="2" fill={color}/>
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15"/>
      <path d="M12 7V9M7 12H9M15 12H17M9.5 16.5L10.5 14.5M14.5 16.5L13.5 14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  // Target with dynamic rings
  target: (color = TOKENS.colors.accent.green) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" strokeDasharray="4 2"/>
      <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill={color}/>
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  // Stylized lightbulb with rays
  lightbulb: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
      <path d="M9 21H15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 2V0M4.22 4.22L2.81 2.81M1 12H3M4.22 19.78L2.81 21.19" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  // Code brackets with cursor
  code: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 6L3 12L8 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 6L21 12L16 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4L10 20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
  // Group of figures - community/collaboration
  users: (color = TOKENS.colors.brand.purpleLight) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3" stroke={color} strokeWidth="2"/>
      <path d="M3 21V18C3 15.79 4.79 14 7 14H11C13.21 14 15 15.79 15 18V21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17" cy="8" r="2.5" stroke={color} strokeWidth="1.5" opacity="0.7"/>
      <path d="M19 21V19C19 17.34 17.66 16 16 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),
  // Chart bars with upward trend
  chart: (color = TOKENS.colors.accent.cyan) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="14" width="4" height="8" rx="1" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
      <rect x="10" y="9" width="4" height="13" rx="1" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1.5"/>
      <rect x="17" y="4" width="4" height="18" rx="1" fill={color} fillOpacity="0.7" stroke={color} strokeWidth="1.5"/>
      <path d="M5 12L12 7L19 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  ),
  // Award ribbon - achievement
  award: (color = TOKENS.colors.brand.purple) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="6" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1"/>
      <path d="M12 9L13.5 6L15 9L12 10.5L9 9L10.5 6L12 9Z" fill={color} fillOpacity="0.3"/>
      <path d="M8 14L6 22L12 18L18 22L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Graduation cap with tassel
  graduation: (color = TOKENS.colors.brand.purple) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 10L12 5L22 10L12 15L2 10Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M6 12V17C6 17 8 20 12 20C16 20 18 17 18 17V12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 10V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="22" cy="17" r="1.5" fill={color}/>
    </svg>
  ),
  // Modular grid blocks
  grid: (color = TOKENS.colors.accent.cyan) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2"/>
      <rect x="14" y="3" width="7" height="7" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="3" y="14" width="7" height="7" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="14" y="14" width="7" height="7" rx="2" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2"/>
    </svg>
  ),
  // Stacked layers with depth
  layers: (color = TOKENS.colors.brand.purpleLight) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Rocket with exhaust trail
  rocket: (color = TOKENS.colors.accent.cyan) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 6 8 6 14C6 16 7 18 9 19L12 22L15 19C17 18 18 16 18 14C18 8 12 2 12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
      <circle cx="12" cy="12" r="2" fill={color}/>
      <path d="M6 14C4 14 3 16 3 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 14C20 14 21 16 21 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 22L12 24L14 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  // Star with sparkle effect
  star: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.4 9.2H22L16 13.8L18.4 21L12 16.4L5.6 21L8 13.8L2 9.2H9.6L12 2Z" fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="19" cy="5" r="1" fill={color} opacity="0.6"/>
      <circle cx="5" cy="6" r="0.75" fill={color} opacity="0.4"/>
    </svg>
  ),
  // Check with circle
  check: (color = TOKENS.colors.accent.green) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1"/>
      <path d="M7 12.5L10.5 16L17 9" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Arrow with motion lines
  arrowRight: (color = TOKENS.colors.text.primary) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H4" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    </svg>
  ),
  // Decorative quote mark
  quote: (color = TOKENS.colors.brand.purple) => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <path d="M10 8C10 10.21 8.21 12 6 12C5.45 12 5 12.45 5 13V15C5 15.55 5.45 16 6 16C9.31 16 12 13.31 12 10V6C12 5.45 11.55 5 11 5H7C6.45 5 6 5.45 6 6V8C6 8.55 6.45 9 7 9H10V8Z" fill={color} opacity="0.3"/>
      <path d="M21 8C21 10.21 19.21 12 17 12C16.45 12 16 12.45 16 13V15C16 15.55 16.45 16 17 16C20.31 16 23 13.31 23 10V6C23 5.45 22.55 5 22 5H18C17.45 5 17 5.45 17 6V8C17 8.55 17.45 9 18 9H21V8Z" fill={color} opacity="0.3"/>
    </svg>
  ),
  // Zap/Energy bolt
  zap: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14H11L10 22L19 10H12L13 2Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // CPU/Processor
  cpu: (color = TOKENS.colors.accent.cyan) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="5" width="14" height="14" rx="2" stroke={color} strokeWidth="2"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
      <path d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // Globe with connection points
  globe: (color = TOKENS.colors.accent.gold) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke={color} strokeWidth="1.5"/>
      <path d="M2 12H22" stroke={color} strokeWidth="1.5"/>
      <path d="M4 7H20M4 17H20" stroke={color} strokeWidth="1" opacity="0.5"/>
    </svg>
  ),
};

// ============================================================================
// INTERSECTION OBSERVER HOOK FOR SCROLL ANIMATIONS
// ============================================================================
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

// Animated wrapper component
const AnimateOnScroll = ({ children, delay = 0, style = {} }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

// ============================================================================
// MACOS TERMINAL WINDOW - Animated typing terminal card
// ============================================================================
const MacTerminalWindow = ({ title = "Terminal", commands = [], delay = 0 }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView || commands.length === 0) return;

    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, delay * 1000 + 500);

    return () => clearTimeout(startDelay);
  }, [isInView, delay, commands.length]);

  useEffect(() => {
    if (!isTyping || currentLineIndex >= commands.length) return;

    const currentCommand = commands[currentLineIndex];

    if (currentCharIndex < currentCommand.text.length) {
      const typingSpeed = currentCommand.type === 'output' ? 5 : 50;
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pauseTime = currentCommand.type === 'command' ? 800 : 300;
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentCommand]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, currentLineIndex, currentCharIndex, commands]);

  const currentCommand = commands[currentLineIndex];
  const partialText = currentCommand ? currentCommand.text.slice(0, currentCharIndex) : '';

  return (
    <AnimateOnScroll delay={delay}>
      <div ref={ref} style={{
        maxWidth: '700px',
        margin: `${TOKENS.spacing.xxl} auto`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        background: '#1E1E1E',
      }}>
        {/* macOS Window Title Bar */}
        <div style={{
          background: 'linear-gradient(180deg, #3D3D3D 0%, #2D2D2D 100%)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid #1a1a1a',
        }}>
          {/* Traffic Lights */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FF5F56',
              border: '1px solid #E0443E',
            }} />
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FFBD2E',
              border: '1px solid #DEA123',
            }} />
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#27C93F',
              border: '1px solid #1AAB29',
            }} />
          </div>
          {/* Title */}
          <div style={{
            flex: 1,
            textAlign: 'center',
            fontFamily: TOKENS.fonts.sans,
            fontSize: '13px',
            color: '#999',
            fontWeight: 500,
          }}>
            {title}
          </div>
          <div style={{ width: '52px' }} /> {/* Spacer for symmetry */}
        </div>

        {/* Terminal Content */}
        <div style={{
          padding: '16px 20px',
          minHeight: '180px',
          fontFamily: TOKENS.fonts.mono,
          fontSize: '13px',
          lineHeight: 1.6,
        }}>
          {/* Already typed lines */}
          {displayedLines.map((line, i) => (
            <div key={i} style={{ marginBottom: '4px' }}>
              {line.type === 'command' ? (
                <span>
                  <span style={{ color: '#50FA7B' }}>➜</span>
                  <span style={{ color: '#8BE9FD' }}> ~/mccormick</span>
                  <span style={{ color: '#F8F8F2' }}> {line.text}</span>
                </span>
              ) : (
                <span style={{ color: '#6272A4' }}>{line.text}</span>
              )}
            </div>
          ))}

          {/* Currently typing line */}
          {currentCommand && currentLineIndex < commands.length && (
            <div>
              {currentCommand.type === 'command' ? (
                <span>
                  <span style={{ color: '#50FA7B' }}>➜</span>
                  <span style={{ color: '#8BE9FD' }}> ~/mccormick</span>
                  <span style={{ color: '#F8F8F2' }}> {partialText}</span>
                  <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '16px',
                    background: '#F8F8F2',
                    marginLeft: '2px',
                    animation: 'blink 1s step-end infinite',
                  }} />
                </span>
              ) : (
                <span style={{ color: '#6272A4' }}>{partialText}</span>
              )}
            </div>
          )}

          {/* Cursor after completion */}
          {currentLineIndex >= commands.length && commands.length > 0 && (
            <div>
              <span style={{ color: '#50FA7B' }}>➜</span>
              <span style={{ color: '#8BE9FD' }}> ~/mccormick</span>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '16px',
                background: '#F8F8F2',
                marginLeft: '8px',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// ============================================================================
// GLOBAL STYLES - Editorial/Magazine Aesthetic
// ============================================================================
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: ${TOKENS.colors.bg.primary};
      color: ${TOKENS.colors.text.primary};
      font-family: ${TOKENS.fonts.serif};
      line-height: 1.8;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      font-size: 18px;
      letter-spacing: -0.01em;
    }

    /* Editorial paragraph styling */
    p {
      text-align: left;
      hyphens: auto;
      hanging-punctuation: first;
    }

    /* Drop cap for first paragraph */
    .drop-cap::first-letter {
      float: left;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 4.5em;
      line-height: 0.8;
      padding-right: 0.1em;
      margin-top: 0.1em;
      color: ${TOKENS.colors.brand.purple};
      font-weight: 600;
    }

    ::selection {
      background: ${TOKENS.colors.brand.purple};
      color: ${TOKENS.colors.text.inverse};
    }

    /* Animated gradient mesh background */
    @keyframes meshMove {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      33% { transform: translate(30px, -30px) rotate(120deg); }
      66% { transform: translate(-20px, 20px) rotate(240deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes dataFlow {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }

    @keyframes circuitPulse {
      0%, 100% { stroke-dashoffset: 0; }
      50% { stroke-dashoffset: 20; }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(78, 42, 132, 0.3); }
      50% { box-shadow: 0 0 40px rgba(78, 42, 132, 0.5); }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .animate-in {
      animation: slideUp 0.6s ease-out forwards;
    }

    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }

    /* Scrollbar styling */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${TOKENS.colors.bg.secondary};
    }
    ::-webkit-scrollbar-thumb {
      background: ${TOKENS.colors.brand.purple}40;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${TOKENS.colors.brand.purple}60;
    }
  `}</style>
);

// ============================================================================
// BACKGROUND EFFECTS
// ============================================================================
// Grid background only shown in hero section
const GridBackground = () => null;

// Gradient orbs only shown in hero, removed from body for clean reading
const GradientOrbs = () => null;

// ============================================================================
// DECORATIVE ELEMENTS
// ============================================================================
const CircuitLines = ({ style = {} }) => (
  <svg style={{ position: 'absolute', opacity: 0.1, ...style }} width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={TOKENS.colors.brand.purple} />
        <stop offset="100%" stopColor={TOKENS.colors.accent.cyan} />
      </linearGradient>
    </defs>
    <path
      d="M10 100 H50 L60 90 H100 L110 100 H150 M100 50 V90 M100 110 V150"
      stroke="url(#circuitGrad)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5 5"
      style={{ animation: 'circuitPulse 3s linear infinite' }}
    />
    <circle cx="50" cy="100" r="4" fill={TOKENS.colors.brand.purple} />
    <circle cx="100" cy="90" r="4" fill={TOKENS.colors.accent.cyan} />
    <circle cx="150" cy="100" r="4" fill={TOKENS.colors.brand.purple} />
    <circle cx="100" cy="50" r="4" fill={TOKENS.colors.accent.gold} />
    <circle cx="100" cy="150" r="4" fill={TOKENS.colors.accent.gold} />
  </svg>
);

const DataFlowLine = ({ width = '100%', color = TOKENS.colors.brand.purple }) => (
  <div style={{
    width,
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
    position: 'relative',
    overflow: 'hidden',
    margin: `${TOKENS.spacing.xl} 0`,
  }}>
    <div style={{
      position: 'absolute',
      width: '50px',
      height: '100%',
      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      animation: 'dataFlow 3s ease-in-out infinite',
    }} />
  </div>
);

// Section divider with icon
const SectionDivider = ({ icon, color = TOKENS.colors.brand.purple }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: TOKENS.spacing.lg,
    margin: `${TOKENS.spacing.xxxl} 0`,
  }}>
    <div style={{
      flex: 1,
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
    }} />
    <div style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: `${color}15`,
      border: `2px solid ${color}30`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'pulse 3s ease-in-out infinite',
    }}>
      {icon}
    </div>
    <div style={{
      flex: 1,
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
    }} />
  </div>
);

// ============================================================================
// TYPOGRAPHY COMPONENTS - Editorial/Magazine Style
// ============================================================================

// Editorial headline - uses serif display font for magazine feel
const MonoHeading = ({ children, size = '3rem', gradient = false, style = {} }) => (
  <h1 style={{
    fontFamily: TOKENS.fonts.display,
    fontSize: size,
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.15,
    color: gradient ? undefined : TOKENS.colors.text.primary,
    background: gradient ? TOKENS.colors.gradients.purple : 'none',
    WebkitBackgroundClip: gradient ? 'text' : 'none',
    WebkitTextFillColor: gradient ? 'transparent' : undefined,
    ...style
  }}>
    {children}
  </h1>
);

// Section subheading - refined sans-serif
const SectionSubhead = ({ children, style = {} }) => (
  <h2 style={{
    fontFamily: TOKENS.fonts.display,
    fontSize: '2rem',
    fontWeight: 500,
    letterSpacing: '-0.02em',
    lineHeight: 1.25,
    color: TOKENS.colors.text.primary,
    marginBottom: TOKENS.spacing.lg,
    ...style
  }}>
    {children}
  </h2>
);

// Editorial kicker/eyebrow - small caps treatment
const SectionLabel = ({ children, icon, color = TOKENS.colors.brand.purple }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: TOKENS.spacing.sm,
    marginBottom: TOKENS.spacing.md,
  }}>
    {icon && (
      <span style={{
        width: '28px',
        height: '28px',
        borderRadius: TOKENS.radius.sm,
        background: `${color}12`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {icon}
      </span>
    )}
    <span style={{
      fontFamily: TOKENS.fonts.mono,
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: color,
      padding: `${TOKENS.spacing.xs} ${TOKENS.spacing.md}`,
      background: `${color}15`,
      borderRadius: TOKENS.radius.full,
      border: `1px solid ${color}30`,
    }}>
      {children}
    </span>
    <div style={{
      width: '60px',
      height: '1px',
      background: `linear-gradient(90deg, ${color}, transparent)`,
    }} />
  </div>
);

// ============================================================================
// CARD COMPONENTS
// ============================================================================
const GlassCard = ({ children, highlight = false, glowColor = TOKENS.colors.brand.purple, style = {}, dark = false }) => (
  <div style={{
    background: dark ? 'rgba(30, 24, 40, 0.95)' : TOKENS.colors.gradients.card,
    borderRadius: TOKENS.radius.lg,
    border: `1px solid ${highlight ? glowColor + '30' : 'rgba(78, 42, 132, 0.1)'}`,
    boxShadow: highlight ? `0 4px 20px ${glowColor}15` : TOKENS.shadows.card,
    padding: TOKENS.spacing.xl,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    ...style
  }}>
    {/* Top accent line for highlighted cards */}
    {highlight && (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: glowColor,
        borderRadius: `${TOKENS.radius.lg} ${TOKENS.radius.lg} 0 0`,
      }} />
    )}
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
);

// ============================================================================
// DISTINCTIVE CARD TEMPLATES
// ============================================================================

// BRUTALIST CODE CARD - Raw, terminal-inspired with hard edges
const BrutalistCard = ({ title, content, command }) => (
  <AnimateOnScroll>
    <div style={{
      background: '#0C0C0C',
      border: '2px solid #333',
      padding: 0,
      margin: `${TOKENS.spacing.xxl} 0`,
      fontFamily: TOKENS.fonts.mono,
      overflow: 'hidden',
    }}>
      {/* Header bar */}
      <div style={{
        background: '#1A1A1A',
        padding: '12px 16px',
        borderBottom: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{ color: '#FF5F56', fontSize: '10px' }}>●</span>
        <span style={{ color: '#FFBD2E', fontSize: '10px' }}>●</span>
        <span style={{ color: '#27C93F', fontSize: '10px' }}>●</span>
        <span style={{
          color: '#666',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginLeft: '8px',
        }}>
          {title}
        </span>
      </div>
      {/* Content */}
      <div style={{ padding: '24px' }}>
        {command && (
          <div style={{
            color: '#50FA7B',
            marginBottom: '16px',
            fontSize: '13px',
          }}>
            <span style={{ color: '#FF79C6' }}>$</span> {command}
          </div>
        )}
        <div style={{
          color: '#F8F8F2',
          fontSize: '14px',
          lineHeight: 1.7,
        }}>
          {content}
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// EDITORIAL QUOTE CARD - Magazine-style with oversized typography
const EditorialQuote = ({ quote, author, role, accentColor = TOKENS.colors.brand.purple }) => (
  <AnimateOnScroll>
    <div style={{
      margin: `${TOKENS.spacing.xxxl} 0`,
      padding: `${TOKENS.spacing.xxl} 0`,
      borderTop: `1px solid ${TOKENS.colors.bg.tertiary}`,
      borderBottom: `1px solid ${TOKENS.colors.bg.tertiary}`,
      position: 'relative',
    }}>
      {/* Large decorative quote mark */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '0',
        fontSize: '120px',
        fontFamily: 'Georgia, serif',
        color: accentColor,
        opacity: 0.15,
        lineHeight: 1,
        userSelect: 'none',
      }}>
        "
      </div>
      <blockquote style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.75rem',
        fontWeight: 400,
        fontStyle: 'italic',
        color: TOKENS.colors.text.primary,
        lineHeight: 1.4,
        margin: 0,
        paddingLeft: TOKENS.spacing.xl,
        position: 'relative',
        zIndex: 1,
      }}>
        {quote}
      </blockquote>
      <div style={{
        marginTop: TOKENS.spacing.lg,
        paddingLeft: TOKENS.spacing.xl,
        display: 'flex',
        alignItems: 'center',
        gap: TOKENS.spacing.md,
      }}>
        <div style={{
          width: '40px',
          height: '2px',
          background: accentColor,
        }} />
        <div>
          <div style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '0.9rem',
            fontWeight: 600,
            color: accentColor,
          }}>
            {author}
          </div>
          {role && (
            <div style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.8rem',
              color: TOKENS.colors.text.tertiary,
            }}>
              {role}
            </div>
          )}
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// GRADIENT METRIC CARD - Bold gradient treatment for key numbers
const GradientMetric = ({ value, label, gradient = TOKENS.colors.gradients.purple }) => (
  <div style={{
    textAlign: 'center',
    padding: TOKENS.spacing.xl,
  }}>
    <div style={{
      fontFamily: TOKENS.fonts.mono,
      fontSize: '3.5rem',
      fontWeight: 700,
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1,
      marginBottom: TOKENS.spacing.sm,
    }}>
      {value}
    </div>
    <div style={{
      fontFamily: TOKENS.fonts.sans,
      fontSize: '0.85rem',
      color: TOKENS.colors.text.tertiary,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    }}>
      {label}
    </div>
  </div>
);

// FLOATING INSIGHT CARD - Elevated with depth and subtle animation
const FloatingInsightCard = ({ icon, title, content, accentColor = TOKENS.colors.accent.cyan }) => (
  <AnimateOnScroll>
    <div style={{
      background: TOKENS.colors.bg.primary,
      borderRadius: TOKENS.radius.xl,
      padding: TOKENS.spacing.xxl,
      margin: `${TOKENS.spacing.xxl} 0`,
      boxShadow: `
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 10px 20px rgba(0, 0, 0, 0.08),
        0 20px 40px rgba(0, 0, 0, 0.04)
      `,
      border: `1px solid ${TOKENS.colors.bg.tertiary}`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle gradient accent in corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '150px',
        background: `radial-gradient(circle at top right, ${accentColor}10 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: TOKENS.spacing.lg,
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: TOKENS.radius.md,
            background: `${accentColor}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {icon}
          </div>
          <div>
            <h4 style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '1.1rem',
              fontWeight: 600,
              color: TOKENS.colors.text.primary,
              marginBottom: TOKENS.spacing.sm,
            }}>
              {title}
            </h4>
            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.95rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.7,
              margin: 0,
            }}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// ICON LIST COMPONENT - For lists that benefit from distinctive icons
// ============================================================================
const IconList = ({ items, color = TOKENS.colors.brand.purple }) => {
  // Map of keywords to icon functions for automatic icon assignment
  const getIconForItem = (text, index) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('product') || lowerText.includes('ship')) return Icons.rocket;
    if (lowerText.includes('code') || lowerText.includes('engineer') || lowerText.includes('develop')) return Icons.code;
    if (lowerText.includes('design') || lowerText.includes('user') || lowerText.includes('customer')) return Icons.users;
    if (lowerText.includes('growth') || lowerText.includes('increase') || lowerText.includes('%')) return Icons.trendUp;
    if (lowerText.includes('learn') || lowerText.includes('teach') || lowerText.includes('student')) return Icons.graduation;
    if (lowerText.includes('ai') || lowerText.includes('intelligence') || lowerText.includes('machine')) return Icons.brain;
    if (lowerText.includes('fast') || lowerText.includes('quick') || lowerText.includes('rapid')) return Icons.bolt;
    if (lowerText.includes('goal') || lowerText.includes('target') || lowerText.includes('focus')) return Icons.target;
    if (lowerText.includes('idea') || lowerText.includes('innovate') || lowerText.includes('create')) return Icons.lightbulb;
    if (lowerText.includes('award') || lowerText.includes('achieve') || lowerText.includes('success')) return Icons.award;
    // Cycle through remaining icons based on index
    const fallbackIcons = [Icons.check, Icons.star, Icons.sprout, Icons.layers];
    return fallbackIcons[index % fallbackIcons.length];
  };

  return (
    <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: `${TOKENS.spacing.lg} 0`,
    }}>
      {items.map((item, i) => {
        const IconFn = getIconForItem(item, i);
        return (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: TOKENS.spacing.md,
            marginBottom: TOKENS.spacing.lg,
            padding: TOKENS.spacing.md,
            borderRadius: TOKENS.radius.md,
            background: i % 2 === 0 ? 'transparent' : `${color}05`,
            transition: 'background 0.2s ease',
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: TOKENS.radius.md,
              background: `${color}10`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              {IconFn(color)}
            </div>
            <span style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.95rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.7,
              paddingTop: '6px',
            }}>
              {item}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

// ============================================================================
// HERO SECTION
// ============================================================================
const HeroSection = ({ content }) => {
  const { header, heroStats } = content;

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `${TOKENS.spacing.section} ${TOKENS.spacing.xl}`,
      position: 'relative',
    }}>
      <CircuitLines style={{ top: '20%', left: '5%' }} />
      <CircuitLines style={{ bottom: '20%', right: '5%', transform: 'rotate(180deg)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Terminal-style header */}
        <div className="animate-in" style={{
          fontFamily: TOKENS.fonts.mono,
          fontSize: '0.85rem',
          color: TOKENS.colors.brand.purpleLight,
          marginBottom: TOKENS.spacing.lg,
          display: 'flex',
          alignItems: 'center',
          gap: TOKENS.spacing.sm,
        }}>
          <span style={{ color: TOKENS.colors.accent.cyan }}>$</span>
          <span>proposal --to="{header.to}" --from="{header.from}"</span>
          <span style={{ animation: 'blink 1s infinite', color: TOKENS.colors.accent.gold }}>▋</span>
        </div>

        <MonoHeading size="4.5rem" gradient className="animate-in delay-1">
          {header.title}
        </MonoHeading>

        <p className="animate-in delay-2" style={{
          fontFamily: TOKENS.fonts.sans,
          fontSize: '1.5rem',
          fontWeight: 300,
          color: TOKENS.colors.text.secondary,
          maxWidth: '800px',
          marginTop: TOKENS.spacing.lg,
          lineHeight: 1.5,
        }}>
          {header.subtitle}
        </p>

        {/* Stats Grid */}
        <div className="animate-in delay-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: TOKENS.spacing.lg,
          marginTop: TOKENS.spacing.xxl,
        }}>
          {heroStats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="animate-in delay-4" style={{
          position: 'absolute',
          bottom: TOKENS.spacing.xxl,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: TOKENS.spacing.sm,
          animation: 'float 2s ease-in-out infinite',
        }}>
          <span style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '0.7rem',
            color: TOKENS.colors.text.tertiary,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}>
            Scroll to explore
          </span>
          <div style={{
            width: '1px',
            height: '40px',
            background: `linear-gradient(180deg, ${TOKENS.colors.brand.purple}, transparent)`,
          }} />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => {
  const configs = [
    { color: TOKENS.colors.brand.purple, icon: Icons.chart(TOKENS.colors.brand.purple) },
    { color: TOKENS.colors.accent.cyan, icon: Icons.zap(TOKENS.colors.accent.cyan) },
    { color: TOKENS.colors.accent.gold, icon: Icons.cpu(TOKENS.colors.accent.gold) },
    { color: TOKENS.colors.accent.green, icon: Icons.rocket(TOKENS.colors.accent.green) },
  ];
  const config = configs[index % configs.length];

  return (
    <GlassCard highlight glowColor={config.color} style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: TOKENS.spacing.sm }}>{config.icon}</div>
      <div style={{
        fontFamily: TOKENS.fonts.mono,
        fontSize: '3rem',
        fontWeight: 700,
        color: config.color,
        textShadow: `0 0 30px ${config.color}50`,
        marginBottom: TOKENS.spacing.xs,
      }}>
        {stat.value}
      </div>
      <div style={{
        fontFamily: TOKENS.fonts.sans,
        fontSize: '0.9rem',
        fontWeight: 500,
        color: TOKENS.colors.text.primary,
        marginBottom: TOKENS.spacing.xs,
      }}>
        {stat.label}
      </div>
      <div style={{
        fontFamily: TOKENS.fonts.mono,
        fontSize: '0.7rem',
        color: TOKENS.colors.text.tertiary,
      }}>
        {stat.source}
      </div>
    </GlassCard>
  );
};

// ============================================================================
// QUOTE CAROUSEL
// ============================================================================
const QuoteCarousel = ({ quotes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(i => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  if (!quotes || quotes.length === 0) return null;
  const quote = quotes[activeIndex];

  return (
    <AnimateOnScroll>
      <GlassCard highlight glowColor={TOKENS.colors.brand.purple} style={{ margin: `${TOKENS.spacing.xxl} 0` }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: TOKENS.spacing.lg,
        }}>
          {Icons.quote(TOKENS.colors.brand.purple)}

          <div style={{ flex: 1 }}>
            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: TOKENS.colors.text.primary,
              lineHeight: 1.6,
              marginBottom: TOKENS.spacing.lg,
            }}>
              {quote.quote}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontFamily: TOKENS.fonts.mono,
                  fontWeight: 600,
                  color: TOKENS.colors.brand.purpleLight,
                }}>
                  {quote.person}
                </div>
                <div style={{
                  fontFamily: TOKENS.fonts.sans,
                  fontSize: '0.85rem',
                  color: TOKENS.colors.text.tertiary,
                }}>
                  {quote.title}
                </div>
              </div>

              {/* Navigation dots */}
              <div style={{ display: 'flex', gap: TOKENS.spacing.sm }}>
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      width: i === activeIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: TOKENS.radius.full,
                      background: i === activeIndex ? TOKENS.colors.brand.purple : TOKENS.colors.bg.tertiary,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </AnimateOnScroll>
  );
};

// ============================================================================
// ROLE CONVERGENCE DIAGRAM
// ============================================================================
const RoleConvergenceDiagram = ({ data }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: TOKENS.spacing.xl,
    margin: `${TOKENS.spacing.xxl} 0`,
  }}>
    {data.map((item, i) => {
      const icons = [Icons.users, Icons.code, Icons.layers];
      const colors = [TOKENS.colors.brand.purple, TOKENS.colors.accent.cyan, TOKENS.colors.accent.gold];

      return (
        <AnimateOnScroll key={i} delay={i * 0.15}>
          <GlassCard highlight glowColor={colors[i]} style={{ textAlign: 'center', position: 'relative' }}>
            {/* Connection line */}
            {i < data.length - 1 && (
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '-32px',
                width: '64px',
                height: '2px',
                background: `linear-gradient(90deg, ${colors[i]}, ${colors[i + 1]})`,
                zIndex: 10,
              }}>
                <div style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: colors[i],
                  boxShadow: `0 0 10px ${colors[i]}`,
                  animation: 'dataFlow 2s ease-in-out infinite',
                  animationDelay: `${i * 0.3}s`,
                }} />
              </div>
            )}

            <div style={{ marginBottom: TOKENS.spacing.md }}>
              {icons[i](colors[i])}
            </div>

            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '0.75rem',
              color: TOKENS.colors.text.tertiary,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: TOKENS.spacing.sm,
            }}>
              Traditional
            </div>

            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '1.5rem',
              fontWeight: 700,
              color: TOKENS.colors.text.primary,
              marginBottom: TOKENS.spacing.md,
            }}>
              {item.role}
            </div>

            {/* Arrow down */}
            <div style={{
              width: '40px',
              height: '40px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${colors[i]}, ${colors[(i + 1) % 3]})`,
              marginBottom: TOKENS.spacing.md,
            }}>
              <span style={{ fontSize: '1.2rem', color: TOKENS.colors.text.primary }}>↓</span>
            </div>

            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '0.75rem',
              color: TOKENS.colors.accent.gold,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: TOKENS.spacing.sm,
            }}>
              Converging To
            </div>

            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '1.25rem',
              fontWeight: 600,
              color: colors[i],
              marginBottom: TOKENS.spacing.md,
            }}>
              {item.target}
            </div>

            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.85rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.5,
            }}>
              {item.description}
            </p>
          </GlassCard>
        </AnimateOnScroll>
      );
    })}
  </div>
);

// ============================================================================
// PILLAR CARDS
// ============================================================================
const PillarCards = ({ pillars }) => {
  const icons = [Icons.cpu, Icons.graduation, Icons.globe];
  const colors = [TOKENS.colors.brand.purple, TOKENS.colors.accent.cyan, TOKENS.colors.accent.gold];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: TOKENS.spacing.lg,
      margin: `${TOKENS.spacing.xxl} 0`,
    }}>
      {pillars.map((pillar, i) => (
        <AnimateOnScroll key={i} delay={i * 0.15}>
          <GlassCard highlight={i === 0} glowColor={colors[i]} style={{
            borderTop: `3px solid ${colors[i]}`,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: TOKENS.spacing.md,
              marginBottom: TOKENS.spacing.lg,
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: TOKENS.radius.lg,
                background: `${colors[i]}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {icons[i](colors[i])}
              </div>
              <div>
                <div style={{
                  fontFamily: TOKENS.fonts.mono,
                  fontSize: '0.7rem',
                  color: TOKENS.colors.text.tertiary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Pillar {pillar.number}
                </div>
                <div style={{
                  fontFamily: TOKENS.fonts.mono,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: TOKENS.colors.text.primary,
                }}>
                  {pillar.title}
                </div>
              </div>
            </div>
            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.9rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.6,
            }}>
              {pillar.description}
            </p>
          </GlassCard>
        </AnimateOnScroll>
      ))}
    </div>
  );
};

// ============================================================================
// TIMELINE
// ============================================================================
const Timeline = ({ items }) => (
  <div style={{ position: 'relative', margin: `${TOKENS.spacing.xxl} 0` }}>
    {/* Vertical line */}
    <div style={{
      position: 'absolute',
      left: '100px',
      top: 0,
      bottom: 0,
      width: '2px',
      background: `linear-gradient(180deg, ${TOKENS.colors.brand.purple}, ${TOKENS.colors.accent.cyan}, ${TOKENS.colors.accent.gold}, transparent)`,
    }} />

    {items.map((item, i) => (
      <AnimateOnScroll key={i} delay={i * 0.1}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: TOKENS.spacing.xl,
          marginBottom: TOKENS.spacing.xl,
          position: 'relative',
        }}>
          {/* Year */}
          <div style={{
            width: '80px',
            fontFamily: TOKENS.fonts.mono,
            fontSize: '0.9rem',
            fontWeight: 600,
            color: item.highlight ? TOKENS.colors.brand.purpleLight : TOKENS.colors.text.tertiary,
            textAlign: 'right',
          }}>
            {item.year}
          </div>

          {/* Node */}
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: item.highlight ? TOKENS.colors.brand.purple : TOKENS.colors.bg.tertiary,
            border: `2px solid ${item.highlight ? TOKENS.colors.brand.purple : TOKENS.colors.text.tertiary}`,
            boxShadow: item.highlight ? `0 0 20px ${TOKENS.colors.brand.purpleGlow}` : 'none',
            flexShrink: 0,
            marginTop: '4px',
            animation: item.highlight ? 'pulse 2s ease-in-out infinite' : 'none',
          }} />

          {/* Content */}
          <GlassCard highlight={item.highlight} glowColor={TOKENS.colors.brand.purple} style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: TOKENS.spacing.sm,
              marginBottom: TOKENS.spacing.sm,
            }}>
              {item.highlight && Icons.star(TOKENS.colors.accent.gold)}
              <span style={{
                fontFamily: TOKENS.fonts.mono,
                fontSize: '1.1rem',
                fontWeight: 600,
                color: TOKENS.colors.text.primary,
              }}>
                {item.title}
              </span>
            </div>
            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.9rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.6,
            }}>
              {item.description}
            </p>
          </GlassCard>
        </div>
      </AnimateOnScroll>
    ))}
  </div>
);

// ============================================================================
// CREDENTIALS GRID
// ============================================================================
const CredentialsGrid = ({ credentials }) => {
  const icons = [Icons.award, Icons.code, Icons.chart, Icons.grid, Icons.layers, Icons.graduation];
  const colors = [
    TOKENS.colors.brand.purple,
    TOKENS.colors.accent.cyan,
    TOKENS.colors.accent.gold,
    TOKENS.colors.accent.green,
    TOKENS.colors.brand.purpleLight,
    TOKENS.colors.accent.cyan,
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: TOKENS.spacing.md,
      margin: `${TOKENS.spacing.xxl} 0`,
    }}>
      {credentials.map((cred, i) => (
        <AnimateOnScroll key={i} delay={i * 0.08}>
          <GlassCard style={{ textAlign: 'center', padding: TOKENS.spacing.lg }}>
            <div style={{ marginBottom: TOKENS.spacing.sm }}>
              {icons[i](colors[i])}
            </div>
            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '2rem',
              fontWeight: 700,
              background: `linear-gradient(135deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: TOKENS.spacing.xs,
            }}>
              {cred.value}
            </div>
            <div style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.7rem',
              color: TOKENS.colors.text.tertiary,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {cred.label}
            </div>
          </GlassCard>
        </AnimateOnScroll>
      ))}
    </div>
  );
};

// ============================================================================
// SECTION COMPONENT - Editorial/Magazine Layout
// ============================================================================
const Section = ({ label, title, icon, children, color = TOKENS.colors.brand.purple }) => (
  <section style={{
    padding: `${TOKENS.spacing.section} ${TOKENS.spacing.xl}`,
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  }}>
    <AnimateOnScroll>
      {/* Editorial section header */}
      <div style={{
        marginBottom: TOKENS.spacing.xxl,
        paddingBottom: TOKENS.spacing.lg,
        borderBottom: `1px solid ${TOKENS.colors.bg.tertiary}`,
      }}>
        <SectionLabel icon={icon} color={color}>{label}</SectionLabel>
        <MonoHeading size="2.75rem" style={{
          marginTop: TOKENS.spacing.md,
          maxWidth: '800px',
        }}>
          {title}
        </MonoHeading>
      </div>
    </AnimateOnScroll>
    {children}
  </section>
);

// ============================================================================
// CONTENT SECTION - Editorial/Magazine Style
// ============================================================================
const ContentSection = ({ section, sectionNumber }) => {
  const configs = [
    { color: TOKENS.colors.brand.purple, icon: Icons.brain },
    { color: TOKENS.colors.accent.cyan, icon: Icons.target },
    { color: TOKENS.colors.accent.gold, icon: Icons.lightbulb },
    { color: TOKENS.colors.accent.green, icon: Icons.code },
    { color: TOKENS.colors.brand.purpleLight, icon: Icons.award },
    { color: TOKENS.colors.accent.cyan, icon: Icons.users },
    { color: TOKENS.colors.accent.gold, icon: Icons.rocket },
  ];
  const config = configs[(sectionNumber - 1) % configs.length];

  return (
    <Section
      label={`Section ${sectionNumber}`}
      title={section.title}
      icon={config.icon(config.color)}
      color={config.color}
    >
      {/* Intro paragraphs - editorial body text */}
      {section.intro && section.intro.map((p, i) => (
        <AnimateOnScroll key={i} delay={i * 0.1}>
          <p
            className={i === 0 ? 'drop-cap' : ''}
            style={{
              fontFamily: TOKENS.fonts.serif,
              fontSize: '1.15rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.85,
              marginBottom: TOKENS.spacing.lg,
              maxWidth: '720px',
            }}>
            {p}
          </p>
        </AnimateOnScroll>
      ))}

      {/* Subsections */}
      {section.subsections && section.subsections.map((sub, i) => (
        <AnimateOnScroll key={i} delay={0.1}>
          <div style={{
            marginTop: TOKENS.spacing.xxl,
            paddingTop: TOKENS.spacing.lg,
            borderTop: i > 0 ? `1px solid ${TOKENS.colors.bg.tertiary}` : 'none',
          }}>
            {/* Editorial subhead with accent line */}
            <h3 style={{
              fontFamily: TOKENS.fonts.display,
              fontSize: '1.4rem',
              fontWeight: 500,
              fontStyle: 'italic',
              color: TOKENS.colors.text.primary,
              marginBottom: TOKENS.spacing.lg,
              paddingLeft: TOKENS.spacing.lg,
              borderLeft: `3px solid ${config.color}`,
            }}>
              {sub.title}
            </h3>

            {/* Paragraphs - editorial body text */}
            {sub.paragraphs && sub.paragraphs.map((p, j) => (
              <p key={j} style={{
                fontFamily: TOKENS.fonts.serif,
                fontSize: '1.05rem',
                color: TOKENS.colors.text.secondary,
                lineHeight: 1.8,
                marginBottom: TOKENS.spacing.lg,
                maxWidth: '720px',
              }}>
                {p}
              </p>
            ))}

            {/* Bullets - simple elegant list style */}
            {sub.bullets && sub.bullets.length > 0 && (
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: `${TOKENS.spacing.lg} 0`,
                paddingLeft: TOKENS.spacing.md,
                borderLeft: `2px solid ${config.color}20`,
              }}>
                {sub.bullets.map((bullet, k) => (
                  <li key={k} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: TOKENS.spacing.md,
                    marginBottom: TOKENS.spacing.md,
                    fontFamily: TOKENS.fonts.serif,
                    fontSize: '1rem',
                    color: TOKENS.colors.text.secondary,
                    lineHeight: 1.75,
                    paddingLeft: TOKENS.spacing.sm,
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: config.color,
                      marginTop: '10px',
                      flexShrink: 0,
                      opacity: 0.6,
                    }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </AnimateOnScroll>
      ))}

      {/* Data flow line between sections */}
      <DataFlowLine color={config.color} />
    </Section>
  );
};

// ============================================================================
// FEATURE HIGHLIGHT BOX - Alternating visual for subsections
// ============================================================================
const FeatureHighlight = ({ title, content, color, index }) => {
  const isEven = index % 2 === 0;
  return (
    <AnimateOnScroll delay={0.1}>
      <div style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: TOKENS.spacing.xl,
        alignItems: 'center',
        margin: `${TOKENS.spacing.xxl} 0`,
        padding: TOKENS.spacing.xl,
        background: isEven ? `linear-gradient(90deg, ${color}08 0%, transparent 100%)` : `linear-gradient(90deg, transparent 0%, ${color}08 100%)`,
        borderRadius: TOKENS.radius.lg,
        borderLeft: isEven ? `4px solid ${color}` : 'none',
        borderRight: !isEven ? `4px solid ${color}` : 'none',
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: `${color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          border: `2px solid ${color}30`,
        }}>
          <span style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '1.5rem',
            fontWeight: 700,
            color: color,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '1.1rem',
            fontWeight: 600,
            color: color,
            marginBottom: TOKENS.spacing.sm,
          }}>
            {title}
          </h4>
          <p style={{
            fontFamily: TOKENS.fonts.sans,
            fontSize: '0.95rem',
            color: TOKENS.colors.text.secondary,
            lineHeight: 1.6,
            margin: 0,
          }}>
            {content}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

// ============================================================================
// CALLOUT COMPONENT
// ============================================================================
const Callout = ({ title, children, icon }) => (
  <AnimateOnScroll>
    <GlassCard highlight glowColor={TOKENS.colors.accent.gold} style={{
      margin: `${TOKENS.spacing.xxl} 0`,
      borderLeft: `4px solid ${TOKENS.colors.accent.gold}`,
      background: `linear-gradient(135deg, rgba(255, 184, 28, 0.1) 0%, ${TOKENS.colors.bg.card} 100%)`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: TOKENS.spacing.md,
        marginBottom: TOKENS.spacing.md,
      }}>
        {icon || Icons.lightbulb(TOKENS.colors.accent.gold)}
        <span style={{
          fontFamily: TOKENS.fonts.mono,
          fontSize: '1.25rem',
          fontWeight: 600,
          color: TOKENS.colors.accent.gold,
        }}>
          {title}
        </span>
      </div>
      {children}
    </GlassCard>
  </AnimateOnScroll>
);

// ============================================================================
// PULL QUOTE - Large featured quote for visual break
// ============================================================================
const PullQuote = ({ quote, attribution, color = TOKENS.colors.brand.purple }) => (
  <AnimateOnScroll>
    <div style={{
      margin: `${TOKENS.spacing.xxxl} auto`,
      maxWidth: '900px',
      padding: `${TOKENS.spacing.xxl} ${TOKENS.spacing.xl}`,
      position: 'relative',
      textAlign: 'center',
    }}>
      {/* Decorative quote marks */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0.15,
      }}>
        {Icons.quote(color)}
      </div>
      <blockquote style={{
        fontFamily: TOKENS.fonts.serif || TOKENS.fonts.sans,
        fontSize: '1.75rem',
        fontWeight: 300,
        fontStyle: 'italic',
        color: TOKENS.colors.text.primary,
        lineHeight: 1.5,
        marginBottom: TOKENS.spacing.lg,
        position: 'relative',
        zIndex: 1,
      }}>
        "{quote}"
      </blockquote>
      {attribution && (
        <cite style={{
          fontFamily: TOKENS.fonts.mono,
          fontSize: '0.9rem',
          color: color,
          fontStyle: 'normal',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: TOKENS.spacing.sm,
        }}>
          <span style={{
            width: '30px',
            height: '2px',
            background: color,
          }} />
          {attribution}
        </cite>
      )}
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// INSIGHT BANNER - Full-width highlight banner
// ============================================================================
const InsightBanner = ({ icon, title, description, color = TOKENS.colors.accent.cyan }) => (
  <AnimateOnScroll>
    <div style={{
      background: `linear-gradient(135deg, ${color}10 0%, ${TOKENS.colors.bg.secondary} 100%)`,
      borderTop: `3px solid ${color}`,
      borderBottom: `1px solid ${color}20`,
      padding: `${TOKENS.spacing.xxl} ${TOKENS.spacing.xl}`,
      margin: `${TOKENS.spacing.xxxl} 0`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: TOKENS.spacing.xl,
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: `${color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          border: `2px solid ${color}40`,
        }}>
          {icon}
        </div>
        <div>
          <h4 style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '1.25rem',
            fontWeight: 600,
            color: color,
            marginBottom: TOKENS.spacing.sm,
          }}>
            {title}
          </h4>
          <p style={{
            fontFamily: TOKENS.fonts.sans,
            fontSize: '1.05rem',
            color: TOKENS.colors.text.secondary,
            lineHeight: 1.6,
            margin: 0,
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// KEY METRICS BAR - Inline stats display
// ============================================================================
const KeyMetricsBar = ({ metrics }) => (
  <AnimateOnScroll>
    <div style={{
      background: TOKENS.colors.bg.hero,
      padding: `${TOKENS.spacing.xl} ${TOKENS.spacing.xxl}`,
      margin: `${TOKENS.spacing.xxl} 0`,
      borderRadius: TOKENS.radius.lg,
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: TOKENS.spacing.lg,
      }}>
        {metrics.map((metric, i) => (
          <div key={i} style={{
            textAlign: 'center',
            minWidth: '120px',
          }}>
            <div style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '2rem',
              fontWeight: 700,
              background: TOKENS.colors.gradients.purple,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: TOKENS.spacing.xs,
            }}>
              {metric.value}
            </div>
            <div style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '0.8rem',
              color: TOKENS.colors.text.inverse,
              opacity: 0.8,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// CALL TO ACTION CARD
// ============================================================================
const CTACard = ({ title, subtitle, icon, color = TOKENS.colors.brand.purple }) => (
  <AnimateOnScroll>
    <div style={{
      maxWidth: '800px',
      margin: `${TOKENS.spacing.xxxl} auto`,
      padding: TOKENS.spacing.xl,
    }}>
      <GlassCard highlight glowColor={color} style={{
        background: `linear-gradient(135deg, ${TOKENS.colors.bg.hero} 0%, ${TOKENS.colors.bg.heroSecondary} 100%)`,
        textAlign: 'center',
        padding: TOKENS.spacing.xxxl,
      }} dark>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${color}30 0%, ${color}10 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          marginBottom: TOKENS.spacing.xl,
          border: `2px solid ${color}50`,
          boxShadow: `0 0 40px ${color}30`,
        }}>
          {icon}
        </div>
        <h3 style={{
          fontFamily: TOKENS.fonts.mono,
          fontSize: '1.75rem',
          fontWeight: 600,
          color: TOKENS.colors.text.inverse,
          marginBottom: TOKENS.spacing.md,
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: TOKENS.fonts.sans,
          fontSize: '1.1rem',
          color: TOKENS.colors.text.inverse,
          opacity: 0.8,
          lineHeight: 1.6,
          margin: 0,
        }}>
          {subtitle}
        </p>
      </GlassCard>
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// TESTIMONIALS
// ============================================================================
const Testimonials = ({ section }) => {
  if (!section.bullets || section.bullets.length === 0) return null;

  return (
    <Section
      label="Testimonials"
      title={section.title}
      icon={Icons.users(TOKENS.colors.brand.purpleLight)}
      color={TOKENS.colors.brand.purpleLight}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: TOKENS.spacing.lg,
      }}>
        {section.bullets.map((testimonial, i) => (
          <AnimateOnScroll key={i} delay={i * 0.1}>
            <GlassCard>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: TOKENS.spacing.md,
              }}>
                {Icons.quote(TOKENS.colors.brand.purpleLight)}
                <p style={{
                  fontFamily: TOKENS.fonts.sans,
                  fontSize: '0.95rem',
                  color: TOKENS.colors.text.secondary,
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}>
                  {testimonial}
                </p>
              </div>
            </GlassCard>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
};

// ============================================================================
// CITATIONS
// ============================================================================
const Citations = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  return (
    <Section
      label="References"
      title="Citations"
      icon={Icons.layers(TOKENS.colors.text.tertiary)}
      color={TOKENS.colors.text.tertiary}
    >
      <AnimateOnScroll>
        <GlassCard style={{ padding: TOKENS.spacing.xxl }}>
          <div style={{
            columnCount: 2,
            columnGap: TOKENS.spacing.xl,
          }}>
            {citations.map((citation, i) => (
              <p key={i} style={{
                fontFamily: TOKENS.fonts.mono,
                fontSize: '0.7rem',
                color: TOKENS.colors.text.tertiary,
                lineHeight: 1.5,
                marginBottom: TOKENS.spacing.sm,
                breakInside: 'avoid',
              }}>
                {citation}
              </p>
            ))}
          </div>
        </GlassCard>
      </AnimateOnScroll>
    </Section>
  );
};

// ============================================================================
// AUTHOR BIO SECTION - Professional headshot and bio
// ============================================================================
const AuthorBio = ({ header }) => (
  <AnimateOnScroll>
    <div style={{
      maxWidth: '900px',
      margin: `${TOKENS.spacing.xxxl} auto`,
      padding: `0 ${TOKENS.spacing.xl}`,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: TOKENS.spacing.xxl,
        padding: TOKENS.spacing.xxl,
        background: TOKENS.colors.bg.secondary,
        borderRadius: TOKENS.radius.xl,
        border: `1px solid ${TOKENS.colors.bg.tertiary}`,
      }}>
        {/* Headshot */}
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: `4px solid ${TOKENS.colors.brand.purple}`,
          boxShadow: `0 0 0 4px ${TOKENS.colors.brand.purple}20, 0 10px 30px rgba(0,0,0,0.15)`,
        }}>
          <img
            src="/headshot.jpg"
            alt={header.from}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(0%)',
            }}
          />
        </div>
        {/* Bio text */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '0.75rem',
            color: TOKENS.colors.brand.purple,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: TOKENS.spacing.sm,
          }}>
            About the Author
          </div>
          <h3 style={{
            fontFamily: TOKENS.fonts.mono,
            fontSize: '1.5rem',
            fontWeight: 600,
            color: TOKENS.colors.text.primary,
            marginBottom: TOKENS.spacing.sm,
          }}>
            {header.from}
          </h3>
          <p style={{
            fontFamily: TOKENS.fonts.sans,
            fontSize: '0.95rem',
            color: TOKENS.colors.text.secondary,
            lineHeight: 1.7,
            marginBottom: TOKENS.spacing.md,
          }}>
            Product leader with 15+ years building technology products at the intersection of design, engineering, and user experience. Passionate about preparing the next generation of engineers for an AI-augmented future.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: TOKENS.spacing.md,
          }}>
            <a href={`mailto:${header.fromEmail}`} style={{
              fontFamily: TOKENS.fonts.mono,
              fontSize: '0.85rem',
              color: TOKENS.colors.brand.purple,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: TOKENS.spacing.xs,
            }}>
              {header.fromEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

// ============================================================================
// FOOTER
// ============================================================================
const Footer = ({ header }) => (
  <footer style={{
    padding: `${TOKENS.spacing.xxl} ${TOKENS.spacing.xl}`,
    borderTop: `1px solid ${TOKENS.colors.bg.tertiary}`,
    textAlign: 'center',
  }}>
    <AnimateOnScroll>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: TOKENS.spacing.sm,
        marginBottom: TOKENS.spacing.md,
      }}>
        {Icons.graduation(TOKENS.colors.brand.purple)}
        <span style={{
          fontFamily: TOKENS.fonts.mono,
          fontSize: '1rem',
          color: TOKENS.colors.brand.purpleLight,
        }}>
          Northwestern McCormick
        </span>
      </div>
      <div style={{
        fontFamily: TOKENS.fonts.mono,
        fontSize: '0.85rem',
        color: TOKENS.colors.text.tertiary,
        marginBottom: TOKENS.spacing.sm,
      }}>
        {header.from} · {header.fromEmail}
      </div>
      <div style={{
        fontFamily: TOKENS.fonts.mono,
        fontSize: '0.75rem',
        color: TOKENS.colors.text.tertiary,
        opacity: 0.5,
      }}>
        {header.date} · Built with AI-assisted development
      </div>
    </AnimateOnScroll>
  </footer>
);

// ============================================================================
// MAIN APP
// ============================================================================
const ProductEngineerProposal = () => {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <GlobalStyles />
      <GridBackground />
      <GradientOrbs />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <HeroSection content={CONTENT} />

        {/* Section Divider */}
        <SectionDivider icon={Icons.brain(TOKENS.colors.brand.purple)} color={TOKENS.colors.brand.purple} />

        {/* Section 1: Market Shift */}
        <ContentSection section={CONTENT.section1} sectionNumber={1} />

        {/* Quote Carousel */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${TOKENS.spacing.xl}` }}>
          <QuoteCarousel quotes={CONTENT.industryQuotes} />
        </div>

        {/* Section Divider */}
        <SectionDivider icon={Icons.layers(TOKENS.colors.accent.cyan)} color={TOKENS.colors.accent.cyan} />

        {/* Role Convergence */}
        <Section
          label="The Shift"
          title="Role Convergence"
          icon={Icons.users(TOKENS.colors.accent.cyan)}
          color={TOKENS.colors.accent.cyan}
        >
          <RoleConvergenceDiagram data={CONTENT.roleConvergence} />
        </Section>

        {/* Section 2: Strategic Alignment */}
        <ContentSection section={CONTENT.section2} sectionNumber={2} />

        {/* Terminal Demo 1: AI Coding */}
        <MacTerminalWindow
          title="claude-code — AI-Assisted Development"
          delay={0.2}
          commands={[
            { type: 'command', text: 'claude "add user auth to this React app"' },
            { type: 'output', text: '● Creating auth context and provider...' },
            { type: 'output', text: '● Adding login/logout components...' },
            { type: 'output', text: '● Integrating protected routes...' },
            { type: 'output', text: '✓ Authentication system complete' },
            { type: 'command', text: 'npm run test' },
            { type: 'output', text: '✓ 47 tests passed' },
          ]}
        />

        {/* Section Divider */}
        <SectionDivider icon={Icons.target(TOKENS.colors.accent.gold)} color={TOKENS.colors.accent.gold} />

        {/* Section 3: Who Should Teach */}
        <ContentSection section={CONTENT.section3} sectionNumber={3} />

        {/* Callout */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${TOKENS.spacing.xl}` }}>
          <Callout title="Once-in-a-Generation Opportunity" icon={Icons.zap(TOKENS.colors.accent.gold)}>
            <p style={{
              fontFamily: TOKENS.fonts.sans,
              fontSize: '1rem',
              color: TOKENS.colors.text.secondary,
              lineHeight: 1.7,
            }}>
              The role convergence happening in tech creates an unprecedented opportunity for
              engineering education. Students who master the intersection of design, product,
              and engineering will define the next generation of technology leaders.
            </p>
          </Callout>
        </div>

        {/* Section Divider */}
        <SectionDivider icon={Icons.code(TOKENS.colors.accent.gold)} color={TOKENS.colors.accent.gold} />

        {/* Section 4: What I Can Teach */}
        <ContentSection section={CONTENT.section4} sectionNumber={4} />

        {/* Floating Insight Card - Curriculum highlight */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: `0 ${TOKENS.spacing.xl}` }}>
          <FloatingInsightCard
            icon={Icons.code(TOKENS.colors.accent.cyan)}
            title="Curriculum at the Intersection"
            content="Courses designed to bridge the gap between traditional engineering education and the product-centric skills demanded by modern tech companies. Students learn to ship products, not just write code."
            accentColor={TOKENS.colors.accent.cyan}
          />
        </div>

        {/* Section Divider */}
        <SectionDivider icon={Icons.award(TOKENS.colors.brand.purpleLight)} color={TOKENS.colors.brand.purpleLight} />

        {/* Section 5: Why Me */}
        <ContentSection section={CONTENT.section5} sectionNumber={5} />

        {/* Terminal Demo 2: Agent Building */}
        <MacTerminalWindow
          title="mcp-server — Building AI Agents"
          delay={0.3}
          commands={[
            { type: 'command', text: 'npx create-mcp-server research-agent' },
            { type: 'output', text: '◐ Scaffolding MCP server...' },
            { type: 'output', text: '● Adding tool: web_search' },
            { type: 'output', text: '● Adding tool: document_analysis' },
            { type: 'output', text: '● Configuring memory system...' },
            { type: 'command', text: 'npm run deploy' },
            { type: 'output', text: '✓ Agent deployed to Claude Desktop' },
          ]}
        />

        {/* Editorial Quote */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: `0 ${TOKENS.spacing.xl}` }}>
          <EditorialQuote
            quote="The best engineers I've worked with think like product managers and design with user empathy. That's what we need to teach."
            author="Industry Perspective"
            accentColor={TOKENS.colors.brand.purple}
          />
        </div>

        {/* Section Divider */}
        <SectionDivider icon={Icons.rocket(TOKENS.colors.brand.purple)} color={TOKENS.colors.brand.purple} />

        {/* Timeline */}
        <Section
          label="Journey"
          title="Career Timeline"
          icon={Icons.chart(TOKENS.colors.brand.purple)}
          color={TOKENS.colors.brand.purple}
        >
          <Timeline items={CONTENT.timeline} />
        </Section>

        {/* Credentials */}
        <Section
          label="By The Numbers"
          title="Credentials & Impact"
          icon={Icons.award(TOKENS.colors.accent.green)}
          color={TOKENS.colors.accent.green}
        >
          <CredentialsGrid credentials={CONTENT.credentials} />
        </Section>

        {/* Section Divider */}
        <SectionDivider icon={Icons.star(TOKENS.colors.accent.gold)} color={TOKENS.colors.accent.gold} />

        {/* Section 6: Testimonials */}
        <Testimonials section={CONTENT.section6} />

        {/* Floating Insight Card - Vision */}
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: `0 ${TOKENS.spacing.xl}` }}>
          <FloatingInsightCard
            icon={Icons.graduation(TOKENS.colors.accent.gold)}
            title="Preparing the Next Generation"
            content="Northwestern has the opportunity to lead in preparing engineers who can navigate the blurring lines between engineering, design, and product management—the skills that define modern tech leadership."
            accentColor={TOKENS.colors.accent.gold}
          />
        </div>

        {/* Section Divider */}
        <SectionDivider icon={Icons.graduation(TOKENS.colors.brand.purple)} color={TOKENS.colors.brand.purple} />

        {/* Section 7: The Path Forward */}
        <Section
          label="Closing"
          title={CONTENT.section7.title}
          icon={Icons.graduation(TOKENS.colors.brand.purple)}
          color={TOKENS.colors.brand.purple}
        >
          {CONTENT.section7.paragraphs && CONTENT.section7.paragraphs.map((p, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <p style={{
                fontFamily: TOKENS.fonts.sans,
                fontSize: '1.1rem',
                color: TOKENS.colors.text.secondary,
                lineHeight: 1.8,
                marginBottom: TOKENS.spacing.lg,
              }}>
                {p}
              </p>
            </AnimateOnScroll>
          ))}
        </Section>

        {/* Author Bio with Headshot */}
        <AuthorBio header={CONTENT.header} />

        {/* Citations */}
        <Citations citations={CONTENT.citations} />

        {/* Footer */}
        <Footer header={CONTENT.header} />
      </div>
    </div>
  );
};

export default ProductEngineerProposal;
