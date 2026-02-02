import React, { useState, useEffect } from 'react';

// =============================================================================
// CONTENT DATA - Edit this section to update proposal content
// =============================================================================

const CONTENT = {
  // Header Information
  header: {
    to: "Christopher A. Schuh",
    toTitle: "Dean, McCormick School of Engineering",
    from: "John Renaldi",
    fromEmail: "jrenaldi79@gmail.com",
    headshot: "https://media.licdn.com/dms/image/v2/D5603AQFUsK3qbahONA/profile-displayphoto-crop_800_800/B56ZrwKFmfLsAM-/0/1764965769267?e=1771459200&v=beta&t=MKHyOB7K-PZZdSc0xc2QDUYSMyM009nFvmZbiWoOz8I",
    subject: "Addressing the Market Shift: The "Product Engineer" Curriculum",
    date: "February 2026",
    title: "The Product Engineer",
    titleItalic: "Curriculum",
    subtitle: "Preparing McCormick students for the convergence of design, product, and engineering in the age of AI.",
  },

  // Hero Statistics (Anthropic data)
  heroStats: [
    { value: "59%", label: "Engineers Using AI Daily", source: "up from 28% a year ago" },
    { value: "50%", label: "Productivity Gains", source: "up from 20% the year before" },
    { value: "90%", label: "Code Written by AI", source: "Claude Code's own codebase" },
    { value: "10 days", label: "To Ship New Products", source: "Cowork built with AI tools" },
  ],
  heroStatsCaption: "Data from Anthropic's internal research on AI-augmented engineering, December 2025",

  // Section 1: The Market Shift
  marketShift: {
    intro: [
      "For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.",
      "AI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between "people with ideas" and "people who can build" is shrinking.",
      "This is happening now, inside the companies building these tools.",
    ],
    callout: "McCormick students will enter this world in 2-3 years. We need to prepare them now.",

    roleConvergence: [
      {
        role: "Engineers",
        arrow: "→",
        target: "Product",
        description: "When implementation becomes easy, the valuable skill becomes knowing what to build. Engineers who understand customer problems, market dynamics, and business models are worth more than those who only execute specs.",
      },
      {
        role: "PMs",
        arrow: "→",
        target: "Engineering",
        description: "Six months ago, most product managers shipped zero code. Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly. By end of 2026, PMs may write 10-20% of production code.",
      },
      {
        role: "Designers",
        arrow: "→",
        target: "Engineering & PM",
        description: "Designers no longer hand off static mockups. With AI tools, they prototype in production code, make product decisions in real-time, and understand the systems they design for.",
      },
    ],

    toolsConverging: "The tools are converging too. Claude Code lets engineers ship features by describing intent. Figma AI generates production-ready components from design specs. Bolt (which hit $40M ARR in five months) and Lovable let anyone describe a feature and watch it appear. These tools do not replace judgment. They automate the translation layer between idea and implementation.",

    syntheticUsers: "Synthetic users represent another shift: AI personas that simulate customer feedback before a single line of code is written. Product teams can now test positioning, validate assumptions, and iterate on concepts using LLM-generated personas trained on real research data. This changes the research-to-build cycle entirely.",

    industryQuotes: [
      {
        person: "Ethan Mollick",
        title: "Wharton, Co-Intelligence",
        quote: "AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback.",
      },
      {
        person: "Andrej Karpathy",
        title: "OpenAI co-founder, former Tesla AI",
        quote: "I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills... Clearly some powerful alien tool was handed around except it comes with no manual.",
      },
      {
        person: "Jensen Huang",
        title: "NVIDIA CEO",
        quote: "There's a new programming language. It's called 'human.'",
      },
      {
        person: "Magdalena Balazinska",
        title: "UW Allen School",
        quote: "Coding, or the translation of a precise design into software instructions, is dead. AI can do that.",
      },
    ],

    additionalStats: [
      { stat: "84%", description: "of developers now use AI tools" },
      { stat: "55.8%", description: "faster task completion with AI (GitHub)" },
      { stat: "35-45%", description: "improvements in software quality (McKinsey)" },
      { stat: "20-30%", description: "of Microsoft's code is now AI-written" },
      { stat: "~90%", description: "of employers prioritize problem-solving over GPA" },
    ],

    productEngineer: {
      definition: "Companies like Vercel and Linear hire "Product Engineers" who "care more about outcomes and impact than the exact implementation."",
      salary: "Product Engineer roles in major tech hubs command $140-170k at entry level, with senior roles exceeding $200k.",
    },
  },

  // Section 2: Strategic Alignment
  strategicAlignment: {
    intro: "This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas.",

    pillars: [
      {
        number: 1,
        icon: "⚙️",
        title: "Revolutionize the Methods of Engineering",
        description: "AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes.",
        detail: "The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping. Engineers who master AI-augmented methods will define the next generation of engineering practice. McCormick can lead in codifying these methods rather than adopting them later.",
      },
      {
        number: 2,
        icon: "🎓",
        title: "Transform Engineering Education",
        description: "Dean Schuh has called for "whole-brain" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy.",
        detail: "This prepares engineers to function as what Dean Schuh describes as "the fulcrum between the research lab and the marketplace." The marketplace represents humanity and its needs. Engineers serve as the bridge. This curriculum teaches students to be that bridge.",
      },
      {
        number: 3,
        icon: "🌍",
        title: "Advance Critical Applications of Engineering",
        description: "AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build).",
        detail: "The skills taught here also amplify work in the other three focus areas. Climate researchers use AI agents to process satellite data. Health engineers use LLMs to analyze clinical literature. Sustainability teams use generative tools to model resource flows.",
      },
    ],

    schuhQuote: {
      text: "Engineers are the fulcrum between the research lab and the marketplace. And the marketplace represents humanity. Engineers serve as the bridge between these two worlds.",
      author: "Dean Christopher Schuh",
      title: "McCormick School of Engineering",
    },

    onceInGeneration: "Dean Schuh has expressed interest in "once-in-a-generation ideas and goals that can carry us into the future together." The transformation of engineering practice by AI qualifies. The window to establish McCormick as a leader in AI-augmented engineering education is now, while methods are still being defined and before competitors codify their own approaches.",
  },

  // Section 3: Who Should Teach This
  whoShouldTeach: {
    intro: "If McCormick wants to prepare students for the "Product Engineer" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire. It requires someone who operates across boundaries that do not usually overlap.",

    profile: [
      {
        trait: "Executive credibility",
        description: "Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations. Students need to learn not just how to build, but how to navigate the systems that ship products.",
      },
      {
        trait: "Hands-on builder",
        description: "Not someone who "used to code." Someone who builds production AI systems today. The tools are changing too fast for secondhand knowledge. Students need an instructor who has shipped MCP servers, built agentic systems, and debugged LLM pipelines this month.",
      },
      {
        trait: "Startup experience",
        description: "Someone who has founded a company, raised capital, and exited. Entrepreneurship cannot be taught from case studies alone. Students benefit from someone who has lived the fundraising pitch, the pivot, the acquisition negotiation.",
        extended: "This matters more now than ever. AI has collapsed the cost of building, but it has not changed the hard parts: figuring out what to build, finding customers who will pay, navigating ambiguity with limited resources. Founders learn these skills through survival, not textbooks. A founder who has exited brings something an academic or career corporate employee cannot: the full lifecycle perspective from idea to acquisition, and the scar tissue that comes with it.",
      },
      {
        trait: "Design fluency",
        description: "The Product Engineer role sits at the intersection of design, product, and engineering. The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.",
      },
      {
        trait: "Industry connectivity",
        description: "Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream. Curriculum needs to reflect what employers will want in 2-3 years, not what they wanted when the textbook was written.",
        extended: "Industry connectivity also means access. The right instructor can bring their network directly into the classroom: founders who just raised Series A, CTOs navigating AI adoption at scale, VCs evaluating the next wave of startups. Guest speakers become mentors. Class discussions become recruiting conversations. The instructor's network becomes the students' network.",
      },
      {
        trait: "Teaching experience",
        description: "Someone who has already taught at the graduate level across engineering and business schools, and who has trained corporate teams from entry-level to executive.",
      },
    ],

    conclusion: "This combination is rare. Most executives do not build. Most builders have not led at scale. Most founders have not taught. Finding someone who does all of these, and is actively working in AI today, is the challenge.",
  },

  // Section 4: What I Can Teach
  whatICanTeach: {
    intro: "The "Product Engineer" needs to move from idea to shipped product. This is not a single course. It is a set of capabilities that can be woven into existing McCormick and Segal curriculum wherever they fit. I am already piloting parts of this in my current classes.",

    applicability: {
      intro: "While some examples below reference software products, the underlying skills apply across all engineering disciplines. The Product Engineer mindset, knowing what to build and translating between technical capability and human need, is universal.",
      disciplines: [
        { name: "Hardware and physical systems", description: "My Jiobit work involved sensor fusion, embedded firmware, cellular/GPS/BLE integration, and hardware manufacturing. AI tools now accelerate PCB design, simulation optimization, and firmware development." },
        { name: "Materials and manufacturing", description: "AI is accelerating materials discovery and process optimization. Dean Schuh's own field has seen rapid adoption of machine learning for alloy design and microstructure prediction." },
        { name: "Biomedical and health", description: "AI agents process clinical literature, analyze patient data, and generate regulatory documentation. Biomedical engineers who understand how to build and evaluate these systems will lead the next generation of health technology." },
        { name: "Civil and environmental", description: "Generative design tools optimize structural systems. AI agents analyze environmental monitoring data and model resource flows. The evaluation and safety frameworks I teach are directly relevant to high-stakes engineering applications." },
      ],
    },

    teachingAreas: [
      {
        title: "AI-Augmented Qualitative Discovery",
        description: "Traditional user research takes weeks: recruiting participants, scheduling interviews, transcribing conversations, coding themes. AI collapses this timeline while expanding depth. Students learn to use AI as a research amplifier: real-time transcription during interviews, instant theme extraction across dozens of transcripts, pattern recognition across disparate data sources.",
        technologies: ["Assembly AI", "Whisper", "LLM-based theme extraction", "embedding-based similarity search"],
      },
      {
        title: "Quantitative Discovery",
        description: "Replace intuition with data. Turn qualitative Jobs to be Done (JTBD) research into quantitative datasets. Students learn to validate ideas before building.",
        technologies: ["Python", "Scikit-learn", "Pandas", "clustering algorithms", "SQL"],
      },
      {
        title: "Generative Prototyping",
        description: "Turn requirements into testable artifacts quickly. Use AI tools to generate wireframes from rough sketches. Build synthetic user personas that simulate customer feedback, letting students test positioning and product concepts against LLM-generated personas before writing code.",
        technologies: ["LLM foundational models", "DALL-E", "prompt engineering", "persona design frameworks"],
      },
      {
        title: "Agentic Systems",
        description: "Move beyond chatbots to autonomous, goal-directed systems. Build servers that standardize agent connectivity. Design memory systems so agents maintain state across sessions. Shift from manual QA to "Evals" that test AI outputs against safety and quality guardrails.",
        technologies: ["MCP servers", "LangChain", "n8n", "ReAct frameworks", "vector databases", "multi-agent orchestration"],
      },
      {
        title: "Agentic Development: From "Vibing" to Production",
        description: "There is a gap between prompting ChatGPT and shipping production AI systems. Most tutorials stop at "vibing," the casual, exploratory prompting that works in demos but fails in production. Students need to learn the hard parts: deterministic behavior, error handling, cost management, and integration with existing systems.",
        technologies: ["Claude Code", "Cursor", "Windsurf", "AGENTS.md specifications", "API gateways", "CI/CD integration"],
        subtopics: [
          "Development Best Practices: How to use tools like Claude Code, Cursor, and Windsurf effectively. Writing CLAUDE.md files and AGENTS.md specifications.",
          "Infrastructure Requirements: Rate limiting, API gateway management, cost tracking, latency budgets.",
          "Operational Changes: How to review AI-generated code, when to trust agent outputs vs. verify them.",
          "Agent Swarms & Orchestration: Coordinating multiple specialized agents that divide work, share context, and merge results.",
          "Memory Systems: Building procedural memory so agents learn from past interactions.",
        ],
      },
      {
        title: "Context Engineering",
        description: "AI agents fail when they run out of context. A 200k token window sounds large until your agent needs to understand a codebase, remember a conversation history, and execute a multi-step plan simultaneously. Context engineering is the discipline of managing what information agents have access to and when.",
        technologies: ["RAG architectures", "context summarization", "session state management", "hierarchical prompt design"],
        subtopics: [
          "Long-Running Systems: Agents that operate over hours or days, not single-turn interactions.",
          "Deep Agents: Building agents that can explore complex domains: reading documentation, navigating codebases.",
          "Context Window Management: Summarization strategies, dynamic context loading, and RAG.",
          "Hierarchical Context: Structuring context in layers that maximize utility while minimizing token waste.",
        ],
      },
      {
        title: "AI Infrastructure",
        description: "Deploy AI systems on Day 1. Manage API gateways for rate limits, cost, and latency. Connect AI models to real-world data sources and device hardware.",
        technologies: ["React/TypeScript", "serverless APIs", "GCP", "Websockets", "Assembly AI", "live multimodal streaming"],
      },
      {
        title: "Entrepreneurship & Venture Dynamics",
        description: "I have lived the full startup arc: from idea to Techstars to product-market fit to nine-figure exit. I can teach this from experience, not textbooks.",
        technologies: ["Cap table structures", "term sheets", "due diligence", "fundraising mechanics"],
      },
    ],

    assessment: {
      intro: "The skills taught here are assessed through outcomes, not exams.",
      methods: [
        { name: "Project-based evaluation", description: "Students ship working systems. A functioning MCP server, a deployed synthetic user platform, or a production-ready AI agent demonstrates competence." },
        { name: "Portfolio outcomes", description: "Students leave with tangible artifacts: GitHub repositories, deployed prototypes, or contributions to real products." },
        { name: "Evaluation frameworks", description: "The same "evals" methodology taught for AI systems applies to student work. Rubrics with objective criteria, automated testing where applicable." },
        { name: "Industry validation", description: "Guest speakers and mentors from my network provide external feedback on student projects." },
      ],
    },

    scaling: {
      intro: "This curriculum is designed to scale beyond a single instructor.",
      methods: [
        { name: "Systematized frameworks", description: "My 12-week corporate training program demonstrates that this knowledge can be packaged into repeatable modules." },
        { name: "Reusable assets", description: "The MCP servers, CLAUDE.md templates, AGENTS.md specifications, and evaluation rubrics I create become institutional resources." },
        { name: "TA development", description: "As courses scale, teaching assistants learn the material deeply. Some become future instructors." },
        { name: "Cross-departmental adoption", description: "The methods taught here are applicable across McCormick departments." },
      ],
    },
  },

  // Section 5: Why Me
  whyMe: {
    intro: "I am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams. I have held VP and General Manager responsibilities at Google and Motorola. I co-founded Jiobit, a wearable tech startup acquired by Life360 (NASDAQ: LIF) in 2021. I operate fluently across executive strategy and hands-on building. My consulting clients range from C-suite executives to senior engineers. My corporate workshops serve entry-level engineers through product directors. I teach MBAs at Kellogg and engineers at McCormick. I serve on AI advisory boards for Menlo Ventures and Techstars. This range is rare.",

    credentials: [
      { value: "9+", label: "U.S. Patents" },
      { value: "300K+", label: "Lines of Code" },
      { value: "20+", label: "Companies Invested" },
      { value: "13", label: "Public GitHub Repos" },
      { value: "4", label: "VC Fund LP" },
      { value: "12-week", label: "Corporate AI Curriculum" },
    ],

    timeline: [
      {
        year: "Current",
        title: "Google — Global Wearable Software Lead",
        description: "Lead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded one of the first AI innovation product teams within Google Android. Original product lead for an internal consumer multi-agent orchestration system.",
        highlight: true,
      },
      {
        year: "2021",
        title: "Jiobit Acquired by Life360",
        description: "Nine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal government and law enforcement. SBIR Phase II Award from U.S. Air Force.",
        highlight: true,
      },
      {
        year: "2015",
        title: "Founded Jiobit",
        description: "Co-founded after briefly losing my son in a crowded park. Built sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device.",
        highlight: false,
      },
      {
        year: "2011-2015",
        title: "Motorola/Google — VP Global eCommerce",
        description: "Created Moto Maker, the first direct-to-consumer, built-to-order smartphone. 2,000+ permutations shipping in 4 days or less. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award.",
        highlight: false,
      },
    ],

    handsOnWork: [
      "MCP Servers & Multi-Agent Orchestration: Build and publish Model Context Protocol servers to npm. Multi-agent systems using LangChain, n8n, and ReAct frameworks.",
      "Full-Stack AI Infrastructure: Vector databases (PGVector), semantic search with embeddings, full-text search (BM25), Cohere reranking, Agentic RAG pipelines, browser automation agents.",
      "Live Multimodal AI: Systems that process voice, text, and images in real-time, connecting AI agents to device hardware.",
      "Synthetic User Platforms: Built a system using graph databases and knowledge graphs with self-learning loops.",
      "Agentic Procedural Memory: System that detects failure-to-success patterns, performs automated root cause analysis. 50% step reduction and 95%+ success rates.",
    ],

    selfTaughtQuote: "I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials. When AI makes technical ability more accessible, learning fast matters more than pedigree.",

    clinicalAppointment: {
      intro: "I currently teach at McCormick through adjunct and visiting arrangements. A clinical faculty appointment changes what is possible.",
      benefits: [
        { name: "Curriculum design authority", description: "Clinical faculty can propose new courses, shape program requirements, and influence how AI-augmented methods are integrated across the curriculum." },
        { name: "Institutional commitment", description: "A formal appointment signals long-term investment. Students benefit from continuity. Industry partners see a stable point of contact." },
        { name: "Deeper student mentorship", description: "Clinical faculty advise students, supervise projects, and build relationships that extend beyond a single course." },
        { name: "Program development", description: "Work with department chairs to integrate Product Engineer concepts into existing programs, not just standalone courses." },
      ],
    },

    curriculumWork: {
      intro: "Clinical faculty focus on teaching, not traditional academic research with publication requirements. My work aligns with this model while still advancing the curriculum in measurable ways.",
      activities: [
        { name: "Testing new methods", description: "Pilot AI tools and workflows in real courses and corporate training programs before they become mainstream." },
        { name: "Developing evaluation frameworks", description: "Work on agentic procedural memory, synthetic user validation, and Claude Code architecture analysis creates benchmarks." },
        { name: "Building reusable assets", description: "MCP servers, agent frameworks, and prompt engineering collections become teaching resources." },
        { name: "Industry feedback loops", description: "Consulting work provides continuous signal on what skills employers need." },
      ],
    },
  },

  // Section 6: What Others Say
  testimonials: {
    programDirectors: [
      {
        name: "Jim Wicks",
        title: "Director, MPD² Program, Segal Design Institute",
        quote: null, // Placeholder
      },
      {
        name: "Greg Holderfield",
        title: "Director, MMM Program, Kellogg School of Management",
        quote: null, // Placeholder
      },
    ],

    leadership: [
      {
        name: "Logan LaHive",
        title: "Managing Director, Techstars Chicago",
        quote: "FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.",
      },
      {
        name: "Lior Ron",
        title: "Founder of Uber Freight, Former Moto/Google Executive",
        quote: "John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.",
      },
      {
        name: "Jake Phillips",
        title: "Sr. Director, Reality Labs Accessories at Meta",
        quote: "In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.",
      },
      {
        name: "Matt Vokoun",
        title: "Google VP, Strategy, Business Operations, Product Management",
        quote: "John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.",
      },
    ],

    teaching: [
      {
        name: "John Minor",
        title: "Chief Product Officer, PayNearMe",
        quote: "John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.",
      },
      {
        name: "Lauren Antonoff",
        title: "CEO, Life360",
        quote: "I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!",
      },
    ],

    students: [
      "The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.",
      "You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.",
      "Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.",
      "I come from a non-technical background but was surprised I kept up!",
    ],
  },

  // Section 7: Conclusion
  conclusion: {
    headline: "The Product Engineer is the Future",
    body: "McCormick can lead in teaching it. I bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going. I build AI products at Google, with clients, and with students every day.",
    closing: "I look forward to discussing next steps.",
  },
};

// =============================================================================
// DESIGN SYSTEM - Northwestern brand colors and shared styles
// =============================================================================

const colors = {
  purple: '#4E2A84',
  purpleDark: '#401F68',
  purpleLight: '#836EAA',
  purpleTint: '#E4E0EE',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
};

// =============================================================================
// COMPONENTS - Reusable UI components
// =============================================================================

const StatCard = ({ value, label, delay = 0 }) => (
  <div style={{
    background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.purpleDark} 100%)`,
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    color: colors.white,
    animation: `fadeSlideUp 0.6s ease-out ${delay}s both`,
    boxShadow: '0 10px 40px rgba(78, 42, 132, 0.3)',
  }}>
    <div style={{
      fontSize: '48px',
      fontWeight: '700',
      fontFamily: "'Cardo', Georgia, serif",
      letterSpacing: '-2px',
      marginBottom: '8px',
    }}>{value}</div>
    <div style={{
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      opacity: 0.9,
      fontFamily: "'DM Sans', sans-serif",
    }}>{label}</div>
  </div>
);

const Quote = ({ text, author, title, placeholder = false }) => (
  <blockquote style={{
    background: colors.purpleTint,
    borderLeft: `4px solid ${colors.purple}`,
    padding: '32px 40px',
    margin: '48px 0',
    borderRadius: '0 16px 16px 0',
    position: 'relative',
  }}>
    <div style={{
      position: 'absolute',
      top: '-20px',
      left: '24px',
      fontSize: '120px',
      fontFamily: "'Cardo', Georgia, serif",
      color: colors.purpleLight,
      opacity: 0.3,
      lineHeight: 1,
    }}>"</div>
    <p style={{
      fontSize: '20px',
      lineHeight: 1.7,
      color: colors.gray[800],
      fontFamily: "'Cardo', Georgia, serif",
      fontStyle: 'italic',
      margin: 0,
      position: 'relative',
      zIndex: 1,
    }}>
      {placeholder ? <span style={{ color: colors.gray[400] }}>[Quote pending]</span> : text}
    </p>
    <footer style={{
      marginTop: '20px',
      fontSize: '14px',
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <strong style={{ color: colors.purple }}>{author}</strong>
      <span style={{ color: colors.gray[500], marginLeft: '8px' }}>{title}</span>
    </footer>
  </blockquote>
);

// Tabbed Quote Carousel for Industry Quotes
const QuoteCarousel = ({ quotes }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuote = quotes[activeIndex];

  return (
    <div style={{ marginTop: '48px' }}>
      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        paddingBottom: '16px',
        marginBottom: '24px',
        scrollbarWidth: 'thin',
        WebkitOverflowScrolling: 'touch',
      }}>
        {quotes.map((q, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              padding: '12px 20px',
              borderRadius: '100px',
              border: 'none',
              background: activeIndex === i ? colors.purple : colors.white,
              color: activeIndex === i ? colors.white : colors.gray[600],
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              boxShadow: activeIndex === i
                ? `0 4px 12px rgba(78, 42, 132, 0.3)`
                : `0 2px 8px rgba(0,0,0,0.08)`,
            }}
          >
            {q.person}
          </button>
        ))}
      </div>

      {/* Active Quote Display */}
      <div style={{
        background: colors.white,
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        position: 'relative',
        minHeight: '200px',
      }}>
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '24px',
          fontSize: '100px',
          fontFamily: "'Cardo', Georgia, serif",
          color: colors.purpleLight,
          opacity: 0.15,
          lineHeight: 1,
        }}>"</div>
        <p style={{
          fontSize: '22px',
          lineHeight: 1.7,
          color: colors.gray[800],
          fontFamily: "'Cardo', Georgia, serif",
          fontStyle: 'italic',
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}>
          {activeQuote.quote}
        </p>
        <footer style={{
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: `1px solid ${colors.gray[200]}`,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.purpleLight} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.white,
            fontWeight: '700',
            fontSize: '18px',
            fontFamily: "'Cardo', Georgia, serif",
          }}>
            {activeQuote.person.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div style={{ fontWeight: '600', color: colors.gray[900], fontSize: '16px' }}>{activeQuote.person}</div>
            <div style={{ color: colors.gray[500], fontSize: '14px' }}>{activeQuote.title}</div>
          </div>
        </footer>
      </div>

      {/* Navigation Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: activeIndex === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '100px',
              border: 'none',
              background: activeIndex === i ? colors.purple : colors.gray[300],
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const SectionHeader = ({ number, title, subtitle }) => (
  <div style={{ marginBottom: '48px' }}>
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
    }}>
      <span style={{
        background: colors.purple,
        color: colors.white,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: '600',
        fontFamily: "'DM Sans', sans-serif",
      }}>{number}</span>
      <div style={{
        height: '2px',
        width: '60px',
        background: `linear-gradient(90deg, ${colors.purple} 0%, transparent 100%)`,
      }} />
    </div>
    <h2 style={{
      fontSize: '42px',
      fontWeight: '400',
      fontFamily: "'Cardo', Georgia, serif",
      color: colors.gray[900],
      margin: 0,
      lineHeight: 1.2,
    }}>{title}</h2>
    {subtitle && (
      <p style={{
        fontSize: '18px',
        color: colors.gray[500],
        marginTop: '12px',
        fontFamily: "'DM Sans', sans-serif",
      }}>{subtitle}</p>
    )}
  </div>
);

const PillarCard = ({ number, title, description, icon }) => (
  <div style={{
    background: colors.white,
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: '16px',
    padding: '32px',
    transition: 'all 0.3s ease',
  }}>
    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{icon}</div>
    <div style={{
      fontSize: '12px',
      fontWeight: '600',
      color: colors.purple,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '8px',
      fontFamily: "'DM Sans', sans-serif",
    }}>Pillar {number}</div>
    <h3 style={{
      fontSize: '24px',
      fontWeight: '400',
      fontFamily: "'Cardo', Georgia, serif",
      color: colors.gray[900],
      margin: '0 0 16px 0',
    }}>{title}</h3>
    <p style={{
      fontSize: '15px',
      lineHeight: 1.7,
      color: colors.gray[600],
      margin: 0,
      fontFamily: "'DM Sans', sans-serif",
    }}>{description}</p>
  </div>
);

const TeachingTag = ({ label }) => (
  <span style={{
    display: 'inline-block',
    background: colors.purpleTint,
    color: colors.purpleDark,
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    fontFamily: "'DM Sans', sans-serif",
    margin: '4px',
  }}>{label}</span>
);

const TimelineItem = ({ year, title, description, highlight }) => (
  <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
    <div style={{ flexShrink: 0, width: '80px', textAlign: 'right' }}>
      <span style={{
        fontSize: '14px',
        fontWeight: '600',
        color: highlight ? colors.purple : colors.gray[400],
        fontFamily: "'DM Sans', sans-serif",
      }}>{year}</span>
    </div>
    <div style={{
      position: 'relative',
      paddingLeft: '24px',
      borderLeft: `2px solid ${highlight ? colors.purple : colors.gray[200]}`,
    }}>
      <div style={{
        position: 'absolute',
        left: '-7px',
        top: '4px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: highlight ? colors.purple : colors.gray[300],
        border: `3px solid ${colors.white}`,
        boxShadow: '0 0 0 2px ' + (highlight ? colors.purple : colors.gray[200]),
      }} />
      <h4 style={{
        fontSize: '18px',
        fontWeight: '500',
        color: colors.gray[900],
        margin: '0 0 8px 0',
        fontFamily: "'DM Sans', sans-serif",
      }}>{title}</h4>
      <p style={{
        fontSize: '15px',
        lineHeight: 1.6,
        color: colors.gray[600],
        margin: 0,
        fontFamily: "'DM Sans', sans-serif",
      }}>{description}</p>
    </div>
  </div>
);

const TeachingAreaCard = ({ title, description, technologies }) => (
  <div style={{
    background: colors.white,
    borderRadius: '16px',
    padding: '32px',
    border: `1px solid ${colors.gray[200]}`,
    marginBottom: '24px',
  }}>
    <h4 style={{
      fontSize: '20px',
      fontWeight: '500',
      color: colors.gray[900],
      margin: '0 0 12px 0',
    }}>{title}</h4>
    <p style={{
      fontSize: '15px',
      lineHeight: 1.7,
      color: colors.gray[600],
      margin: '0 0 16px 0',
    }}>{description}</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {technologies.map((tech, j) => (
        <span key={j} style={{
          fontSize: '12px',
          color: colors.purple,
          background: colors.purpleTint,
          padding: '4px 12px',
          borderRadius: '12px',
        }}>{tech}</span>
      ))}
    </div>
  </div>
);

// =============================================================================
// MAIN COMPONENT - Renders the proposal using CONTENT data
// =============================================================================

export default function ProductEngineerProposal() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: colors.gray[50],
      minHeight: '100vh',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        ::selection { background: ${colors.purpleLight}; color: ${colors.white}; }
      `}</style>

      {/* Hero Section */}
      <header style={{
        background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 50%, ${colors.purpleLight} 100%)`,
        color: colors.white,
        padding: '80px 24px 120px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.03)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', animation: 'fadeSlideUp 0.6s ease-out' }}>
            <div style={{ width: '48px', height: '3px', background: 'rgba(255,255,255,0.5)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.8 }}>
              Proposal for Clinical Faculty Appointment
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: '400', fontFamily: "'Cardo', Georgia, serif",
            lineHeight: 1.1, margin: '0 0 24px 0', animation: 'fadeSlideUp 0.6s ease-out 0.1s both',
          }}>
            {CONTENT.header.title}<br />
            <span style={{ fontStyle: 'italic', opacity: 0.9 }}>{CONTENT.header.titleItalic}</span>
          </h1>
          <p style={{
            fontSize: '20px', lineHeight: 1.6, maxWidth: '600px', opacity: 0.9,
            margin: '0 0 48px 0', animation: 'fadeSlideUp 0.6s ease-out 0.2s both',
          }}>
            {CONTENT.header.subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', animation: 'fadeSlideUp 0.6s ease-out 0.3s both' }}>
            <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginBottom: '4px' }}>To</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{CONTENT.header.to}</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.3)' }} />
            <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginBottom: '4px' }}>From</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{CONTENT.header.from}</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.3)' }} />
            <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.7, marginBottom: '4px' }}>Date</div>
              <div style={{ fontSize: '16px', fontWeight: '500' }}>{CONTENT.header.date}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div style={{ background: colors.white, padding: '0 24px', marginTop: '-60px', position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px',
        }}>
          {CONTENT.heroStats.map((stat, i) => (
            <StatCard key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: '13px', color: colors.gray[500], marginTop: '16px', fontStyle: 'italic' }}>
          {CONTENT.heroStatsCaption}
        </p>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>

        {/* Section 1: The Market Shift */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="1" title="The Market Shift" subtitle="Why McCormick must act now" />
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: colors.gray[700] }}>
            {CONTENT.marketShift.intro.map((para, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : undefined }}>{para}</p>
            ))}
            <p style={{
              fontSize: '24px', fontFamily: "'Cardo', Georgia, serif", fontStyle: 'italic',
              color: colors.purple, borderLeft: `3px solid ${colors.purple}`,
              paddingLeft: '24px', margin: '40px 0',
            }}>
              {CONTENT.marketShift.callout}
            </p>
          </div>

          {/* Role Convergence */}
          <div style={{
            background: colors.white, borderRadius: '20px', padding: '40px', marginTop: '48px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}>
            <h3 style={{
              fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px',
              color: colors.gray[500], marginBottom: '32px', textAlign: 'center',
            }}>The Triad: Role Boundaries Are Collapsing</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', textAlign: 'center' }}>
              {CONTENT.marketShift.roleConvergence.map((item, i) => (
                <div key={i} style={{ padding: '24px 16px', background: colors.gray[50], borderRadius: '12px' }}>
                  <div style={{ fontSize: '32px', fontWeight: '700', fontFamily: "'Cardo', Georgia, serif", color: colors.purple, marginBottom: '8px' }}>
                    {item.role}
                  </div>
                  <div style={{ fontSize: '24px', color: colors.gray[400], margin: '8px 0' }}>{item.arrow}</div>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: colors.gray[700], marginBottom: '12px' }}>{item.target}</div>
                  <div style={{ fontSize: '13px', color: colors.gray[500], lineHeight: 1.5 }}>{item.description}</div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '32px', padding: '24px',
              background: `linear-gradient(135deg, ${colors.purpleTint} 0%, ${colors.white} 100%)`,
              borderRadius: '12px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '28px', fontWeight: '700', fontFamily: "'Cardo', Georgia, serif", color: colors.purple }}>
                The Product Engineer
              </div>
              <div style={{ fontSize: '15px', color: colors.gray[600], marginTop: '8px' }}>
                The role that emerges when boundaries collapse
              </div>
            </div>
          </div>

          {/* Industry Quotes - Tabbed Carousel */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontFamily: "'Cardo', Georgia, serif", color: colors.gray[800], marginBottom: '8px' }}>
              What Industry Leaders Are Saying
            </h3>
            <p style={{ fontSize: '14px', color: colors.gray[500], marginBottom: '0' }}>
              Click to explore perspectives from AI and tech leaders
            </p>
            <QuoteCarousel quotes={CONTENT.marketShift.industryQuotes} />
          </div>
        </section>

        {/* Section 2: Strategic Alignment */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="2" title="Strategic Alignment" subtitle="How this advances McCormick's vision" />
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: colors.gray[700], marginBottom: '48px' }}>
            {CONTENT.strategicAlignment.intro}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {CONTENT.strategicAlignment.pillars.map((pillar, i) => (
              <PillarCard key={i} number={pillar.number} icon={pillar.icon} title={pillar.title} description={pillar.description} />
            ))}
          </div>
          <Quote
            text={CONTENT.strategicAlignment.schuhQuote.text}
            author={CONTENT.strategicAlignment.schuhQuote.author}
            title={CONTENT.strategicAlignment.schuhQuote.title}
          />
          <div style={{
            background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 100%)`,
            color: colors.white, borderRadius: '20px', padding: '48px', textAlign: 'center',
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, marginBottom: '16px' }}>
              A Once-in-a-Generation Opportunity
            </h3>
            <p style={{ fontSize: '22px', fontFamily: "'Cardo', Georgia, serif", fontStyle: 'italic', lineHeight: 1.6, margin: 0, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              {CONTENT.strategicAlignment.onceInGeneration}
            </p>
          </div>
        </section>

        {/* Section 3: Who Should Teach This */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="3" title="Who Should Teach This" subtitle="The profile required" />
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: colors.gray[700], marginBottom: '32px' }}>
            {CONTENT.whoShouldTeach.intro}
          </p>
          <div style={{ display: 'grid', gap: '24px' }}>
            {CONTENT.whoShouldTeach.profile.map((item, i) => (
              <div key={i} style={{
                background: colors.white, borderRadius: '16px', padding: '32px',
                border: `1px solid ${colors.gray[200]}`,
              }}>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: colors.purple, margin: '0 0 12px 0' }}>
                  {item.trait}
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: colors.gray[700], margin: 0 }}>
                  {item.description}
                </p>
                {item.extended && (
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: colors.gray[500], marginTop: '12px', marginBottom: 0 }}>
                    {item.extended}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p style={{
            fontSize: '18px', fontFamily: "'Cardo', Georgia, serif", fontStyle: 'italic',
            color: colors.gray[600], marginTop: '32px', textAlign: 'center',
          }}>
            {CONTENT.whoShouldTeach.conclusion}
          </p>
        </section>

        {/* Section 4: What I Can Teach */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="4" title="What I Can Teach" subtitle="Capabilities for McCormick's curriculum" />
          <p style={{ fontSize: '18px', lineHeight: 1.8, color: colors.gray[700], marginBottom: '32px' }}>
            {CONTENT.whatICanTeach.intro}
          </p>

          {/* Applicability */}
          <div style={{
            background: colors.purpleTint, borderRadius: '16px', padding: '32px', marginBottom: '48px',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.purpleDark, margin: '0 0 16px 0' }}>
              Applicability Across Engineering Disciplines
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: colors.gray[700], marginBottom: '16px' }}>
              {CONTENT.whatICanTeach.applicability.intro}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {CONTENT.whatICanTeach.applicability.disciplines.map((d, i) => (
                <div key={i} style={{ background: colors.white, borderRadius: '12px', padding: '16px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: colors.purple, margin: '0 0 8px 0' }}>{d.name}</h4>
                  <p style={{ fontSize: '13px', color: colors.gray[600], margin: 0, lineHeight: 1.5 }}>{d.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Areas */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {CONTENT.whatICanTeach.teachingAreas.map((area, i) => (
              <TeachingTag key={i} label={area.title} />
            ))}
          </div>
          {CONTENT.whatICanTeach.teachingAreas.slice(0, 6).map((area, i) => (
            <TeachingAreaCard key={i} title={area.title} description={area.description} technologies={area.technologies} />
          ))}

          {/* Assessment */}
          <div style={{ background: colors.white, borderRadius: '16px', padding: '32px', border: `1px solid ${colors.gray[200]}`, marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '500', color: colors.gray[900], margin: '0 0 24px 0' }}>
              How Students Are Assessed
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {CONTENT.whatICanTeach.assessment.methods.map((m, i) => (
                <div key={i} style={{ padding: '16px', background: colors.gray[50], borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: colors.purple, margin: '0 0 8px 0' }}>{m.name}</h4>
                  <p style={{ fontSize: '13px', color: colors.gray[600], margin: 0, lineHeight: 1.5 }}>{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why Me */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="5" title="Why Me" subtitle="An unusual combination" />

          {/* Author Card with Headshot */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '32px',
            marginBottom: '48px',
            padding: '32px',
            background: colors.white,
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}>
            <img
              src={CONTENT.header.headshot}
              alt={CONTENT.header.from}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '16px',
                objectFit: 'cover',
                boxShadow: `0 8px 24px rgba(78, 42, 132, 0.2)`,
                border: `3px solid ${colors.purpleTint}`,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '400',
                fontFamily: "'Cardo', Georgia, serif",
                color: colors.gray[900],
                margin: '0 0 8px 0',
              }}>
                {CONTENT.header.from}
              </h3>
              <p style={{
                fontSize: '15px',
                color: colors.purple,
                fontWeight: '500',
                margin: '0 0 16px 0',
              }}>
                Product Leader • Builder • Educator
              </p>
              <p style={{
                fontSize: '17px',
                fontFamily: "'Cardo', Georgia, serif",
                lineHeight: 1.7,
                color: colors.gray[700],
                margin: 0,
                fontStyle: 'italic',
              }}>
                {CONTENT.whyMe.intro}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: '48px' }}>
            {CONTENT.whyMe.timeline.map((item, i) => (
              <TimelineItem key={i} year={item.year} title={item.title} description={item.description} highlight={item.highlight} />
            ))}
          </div>

          {/* Credentials Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            {CONTENT.whyMe.credentials.map((stat, i) => (
              <div key={i} style={{ background: colors.white, border: `1px solid ${colors.gray[200]}`, borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', fontFamily: "'Cardo', Georgia, serif", color: colors.purple }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: colors.gray[500], marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <Quote text={CONTENT.whyMe.selfTaughtQuote} author="John Renaldi" title="Self-taught engineer, BS Marketing from Illinois" />

          {/* Clinical Appointment */}
          <div style={{ background: colors.white, borderRadius: '16px', padding: '32px', border: `1px solid ${colors.gray[200]}`, marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '500', color: colors.gray[900], margin: '0 0 16px 0' }}>
              What a Clinical Appointment Enables
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: colors.gray[600], marginBottom: '24px' }}>
              {CONTENT.whyMe.clinicalAppointment.intro}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {CONTENT.whyMe.clinicalAppointment.benefits.map((b, i) => (
                <div key={i} style={{ padding: '16px', background: colors.gray[50], borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: colors.purple, margin: '0 0 8px 0' }}>{b.name}</h4>
                  <p style={{ fontSize: '13px', color: colors.gray[600], margin: 0, lineHeight: 1.5 }}>{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What Others Say */}
        <section style={{ marginBottom: '96px' }}>
          <SectionHeader number="6" title="What Others Say" subtitle="Testimonials from collaborators and students" />

          {/* Program Director Quotes - Placeholders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {CONTENT.testimonials.programDirectors.map((t, i) => (
              <Quote key={i} text={t.quote} author={t.name} title={t.title} placeholder={!t.quote} />
            ))}
          </div>

          {/* Leadership Testimonials */}
          {CONTENT.testimonials.leadership.map((t, i) => (
            <Quote key={i} text={t.quote} author={t.name} title={t.title} />
          ))}

          {/* Student Feedback */}
          <div style={{ marginTop: '48px', background: colors.white, borderRadius: '20px', padding: '40px', border: `1px solid ${colors.gray[200]}` }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', color: colors.gray[500], marginBottom: '24px' }}>
              From Kellogg Students
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {CONTENT.testimonials.students.map((quote, i) => (
                <div key={i} style={{ fontSize: '15px', fontStyle: 'italic', color: colors.gray[600], lineHeight: 1.6, padding: '16px', background: colors.gray[50], borderRadius: '12px' }}>
                  "{quote}"
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section style={{
          background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 100%)`,
          color: colors.white, borderRadius: '24px', padding: '64px 48px', textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '36px', fontFamily: "'Cardo', Georgia, serif", fontWeight: '400', marginBottom: '24px' }}>
            {CONTENT.conclusion.headline}
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 32px', opacity: 0.9 }}>
            {CONTENT.conclusion.body}
          </p>
          <p style={{ fontSize: '20px', fontFamily: "'Cardo', Georgia, serif", fontStyle: 'italic' }}>
            {CONTENT.conclusion.closing}
          </p>
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={CONTENT.header.headshot}
              alt={CONTENT.header.from}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(255,255,255,0.3)',
                marginBottom: '16px',
              }}
            />
            <div style={{ fontSize: '18px', fontWeight: '500' }}>{CONTENT.header.from}</div>
            <div style={{ fontSize: '15px', opacity: 0.8, marginTop: '4px' }}>{CONTENT.header.fromEmail}</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: colors.gray[900], color: colors.gray[400], padding: '48px 24px', textAlign: 'center', fontSize: '14px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ margin: '0 0 16px 0' }}>Proposal for Clinical Faculty Appointment — McCormick School of Engineering</p>
          <p style={{ margin: 0, fontSize: '12px', opacity: 0.7 }}>Northwestern University — {CONTENT.header.date}</p>
        </div>
      </footer>
    </div>
  );
}
