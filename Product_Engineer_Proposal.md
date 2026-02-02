<!--
================================================================================
COMPONENT MARKERS REFERENCE
================================================================================

This markdown file contains structured markers that map to React components.
The parser should extract these markers and convert them to component data.

MARKERS:
--------
@header          - Page metadata (to, from, headshot, date, title, subtitle)
@stats           - Stats grid with @stat items (value, label, source)
@convergence     - Role convergence diagram with @role items (from, to, description)
@quotes          - Quote carousel with @quote items (author, title, cite, content)
@credentials     - Credential badges with @credential items (value, label)
@timeline        - Career timeline with @entry items (year, company, title, highlight, content)
@testimonials    - Testimonial cards with @testimonial items (author, title, subtitle, content)
@pullquote       - Featured pull quote for visual emphasis (inline content)
@cards           - Card grid with @card items (icon, title, content) - types: profile, feature, topic
@chart           - Data visualizations (see CHART TYPES below)
@terminal        - macOS-style terminal window for section summaries (title, command, variant, lines)

CHART TYPES:
------------
@chart type="growth"     - Line/area chart showing change over time
                          Contains @series with @point items (year, value)

@chart type="bar"        - Horizontal bar chart for comparisons
                          Contains @bar items (label, value, unit, source, cite)

@chart type="hierarchy"  - Arrow/flow diagram showing transformation
                          Contains @level items (from, to)

@chart type="range"      - Range/salary band visualization
                          Contains @range items (label, min, max, unit, highlight)

CARD TYPES:
-----------
@cards type="profile"    - Icon + title + description (for requirements/criteria)
@cards type="feature"    - Larger cards for feature highlights
@cards type="topic"      - Expandable cards for teaching topics

Card icons: briefcase, code, rocket, palette, network, graduation, lightbulb,
            chart, users, shield, zap, target, layers, cpu, database

TABLES:
-------
Standard markdown tables map directly to React table components:

| Header 1 | Header 2 |       →       <Table>
|----------|----------|                 <TableHeader>
| Cell 1   | Cell 2   |                   <TableRow>...
                                        <TableBody>
                                          <TableRow>...

Table styling hints (add as HTML comment before table):
<!-- @table variant="comparison" -->    - Side-by-side comparison (2 cols)
<!-- @table variant="data" -->          - Data-heavy with numbers
<!-- @table variant="checklist" -->     - Requirements/features with checkmarks
<!-- @table variant="timeline" -->      - Horizontal timeline format

MARKDOWN FORMATTING:
--------------------
The parser should PRESERVE (not strip) markdown formatting for rich text rendering:

**bold**         → <strong> or React equivalent - used for emphasis, names, stats
*italic*         → <em> or React equivalent - used for quotes, publication names
[text](url)      → <a href="url"> - hyperlinks
[N]              → Citation reference - link to #citation-N or render as superscript

FORMATTING MAP FOR REACT:
-------------------------
Input:           **Product Engineer**
Output:          <strong>Product Engineer</strong> or <Text fontWeight="bold">

Input:           *"This is a quote"*
Output:          <em>"This is a quote"</em> or <Text fontStyle="italic">

Input:           Visit [Anthropic](https://anthropic.com)
Output:          Visit <a href="https://anthropic.com">Anthropic</a>

Input:           as shown in research [1][2]
Output:          as shown in research <Citation id="1"/><Citation id="2"/>

================================================================================
-->

<!-- @header -->
<!-- @from name="John Renaldi" email="jrenaldi@northwestern.edu" linkedin="https://linkedin.com/in/jrenaldi" github="https://github.com/jrenaldi" -->
<!-- @headshot url="https://media.licdn.com/dms/image/v2/D5603AQFUsK3qbahONA/profile-displayphoto-crop_800_800/B56ZrwKFmfLsAM-/0/1764965769267?e=1771459200&v=beta&t=MKHyOB7K-PZZdSc0xc2QDUYSMyM009nFvmZbiWoOz8I" -->
<!-- @date value="February 2026" -->
<!-- @title value="The Product Engineer" -->
<!-- @subtitle value="Preparing McCormick students for the convergence of design, product, and engineering in the age of AI." -->
<!-- /@header -->

PROPOSAL FOR CLINICAL FACULTY APPOINTMENT
=========================================

**TO:** Christopher A. Schuh, Dean, McCormick School of Engineering

**FROM:** John Renaldi

**SUBJECT:** Addressing the Market Shift: The "Product Engineer" Curriculum

---

## 1. The Market & Student Need: Why Now

For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.

AI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between "people with ideas" and "people who can build" is shrinking.

<!-- @pullquote -->The separation between "people with ideas" and "people who can build" is shrinking.<!-- /@pullquote -->

This is happening now, inside the companies building these tools.

### The Anthropic Case Study

At Anthropic, the company behind Claude, internal research shows [1][2]:

<!-- @stats -->
<!-- @stat value="59%" label="Engineers Using AI Daily" source="up from 28% a year ago" -->
<!-- @stat value="50%" label="Productivity Gains" source="up from 20% the year before" -->
<!-- @stat value="90%" label="Code Written by AI" source="Claude Code's own codebase" -->
<!-- @stat value="10 days" label="To Ship New Products" source="Cowork built with AI tools" -->
<!-- /@stats -->

-   Engineers use Claude in **59% of their work**, up from 28% a year ago
-   They report **50% productivity gains**, up from 20% the year before
-   **90% of Claude Code's codebase was written by Claude Code itself**
-   The team ships **60-100 internal releases per day**
-   They built a new product (Cowork) in **about 10 days** using their own AI tools [3]

Anthropic now **hires generalists over specialists** because "many traditional programming skills are less relevant when AI handles implementation details." [1]

McCormick students will enter this world in 2-3 years. We need to prepare them now.

### The Triad: Design, Product, and Engineering Are Merging

Role boundaries are collapsing. Designers, product managers, and engineers are moving toward each other—and AI tools are accelerating the convergence.

-   **PMs → Engineers:** Six months ago, most product managers shipped zero code. Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly. By end of 2026, PMs may write 10-20% of production code.

-   **Designers → Engineers & PMs:** Designers no longer hand off static mockups. With AI tools, they prototype in production code, make product decisions in real-time, and understand the systems they design for.

-   **Engineers → Product:** When implementation becomes easy, the valuable skill becomes knowing what to build. Engineers who understand customer problems, market dynamics, and business models are worth more than those who only execute specs.

<!-- @convergence -->
<!-- @role from="PMs" to="Engineering" description="Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly." -->
<!-- @role from="Designers" to="Eng & PM" description="Designers no longer hand off static mockups. They prototype in production code." -->
<!-- @role from="Engineers" to="Product" description="When implementation becomes easy, the valuable skill becomes knowing what to build." -->
<!-- /@convergence -->

The tools are converging too. **Claude Code** lets engineers ship features by describing intent. **Figma AI** generates production-ready components from design specs. **Bolt** (which hit $40M ARR in five months [14]) and **Lovable** let anyone describe a feature and watch it appear. These tools do not replace judgment. They automate the translation layer between idea and implementation. The role that remains is the one who knows what to build and why.

| Traditional Workflow | AI-Augmented Workflow |
|---------------------|----------------------|
| Designer creates mockups → hands off to engineer | Designer prototypes in production code directly |
| PM writes specs → waits for implementation | PM ships features, describes intent to AI |
| Engineer translates requirements to code | Engineer orchestrates AI agents, focuses on architecture |
| Research takes weeks (recruiting, interviews, analysis) | AI extracts themes in minutes from transcripts |
| Prototyping requires coding skills | Anyone can describe and generate working prototypes |

**Synthetic users** represent another shift: AI personas that simulate customer feedback before a single line of code is written. Product teams can now test positioning, validate assumptions, and iterate on concepts using LLM-generated personas trained on real research data. This changes the research-to-build cycle entirely.

AI lowers the floor to coding while raising the ceiling for engineering. The role that remains is the one who knows what to build and why.

<!-- @pullquote -->AI lowers the floor to coding while raising the ceiling for engineering.<!-- /@pullquote -->

### The Rise of the "Product Engineer"

Tech companies are redefining roles around this reality. Innovation happens when engineers have business context, and when PMs and designers can build. Companies like **Vercel** and **Linear** now hire "Product Engineers" who "care more about outcomes and impact than the exact implementation." These roles command **$140-170k** at entry level in major tech hubs, with senior roles exceeding $200k—a premium that signals market demand.

<!-- @chart type="range" title="Product Engineer Compensation" subtitle="Major tech hubs, 2025" -->
<!-- @range label="Entry Level" min="140" max="170" unit="k" -->
<!-- @range label="Senior" min="200" max="250" unit="k" highlight="true" -->
<!-- /@chart -->

### The Junior Developer Role Is Disappearing

The traditional entry-level developer role is vanishing. Today, **84% of developers** use AI tools [4], and GitHub research shows they complete tasks **55.8% faster** [5]. McKinsey reports **35-45% improvements in software quality** [6]. As Magdalena Balazinska of UW's Allen School puts it: *"Coding, or the translation of a precise design into software instructions, is dead. AI can do that."* [11]

### The New Skills: What Industry Leaders Are Saying

<!-- @quotes type="carousel" -->
<!-- @quote author="Ethan Mollick" title="Wharton, Co-Intelligence" cite="7" -->
AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback.
<!-- /@quote -->
<!-- @quote author="Andrej Karpathy" title="OpenAI co-founder, former Tesla AI" cite="8" -->
I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills.
<!-- /@quote -->
<!-- @quote author="Jensen Huang" title="NVIDIA CEO" cite="9" -->
There's a new programming language. It's called 'human.'
<!-- /@quote -->
<!-- @quote author="Magdalena Balazinska" title="UW Allen School" cite="11" -->
Coding, or the translation of a precise design into software instructions, is dead. AI can do that.
<!-- /@quote -->
<!-- /@quotes -->

Industry leaders agree on what matters now. **Ethan Mollick** (Wharton) argues that *"AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback."* [7]

**Andrej Karpathy** (OpenAI co-founder) describes the shift: *"I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills."* [8]

The programming language itself is changing. As **Jensen Huang** (NVIDIA CEO) puts it: *"There's a new programming language. It's called 'human.'"* [9] The numbers confirm this: **20-30% of Microsoft's code** is now AI-written [10], and **Mark Zuckerberg** predicts half of Meta's development will be done by AI within a year.

Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy. These are the skills we must teach.

<!-- @chart type="hierarchy" title="The Skills Shift" subtitle="What matters now vs. what mattered before" -->
<!-- @level from="Writing Code" to="Orchestrating Systems" -->
<!-- @level from="Syntax" to="Judgment" -->
<!-- @level from="Execution" to="Strategy" -->
<!-- /@chart -->

<!-- @pullquote -->Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy.<!-- /@pullquote -->

**The Opportunity:** Employers now prioritize **problem-solving (~90%)** over GPA. [13] McCormick can lead in teaching students to use AI to build systems that solve real problems.

<!-- @terminal title="Key Takeaways: The Market Shift" command="" -->
- **59%** of engineers now use AI daily, up from 28%
- **50%** productivity gains reported across teams
- **90%** of code written by AI tools themselves
- Role boundaries are collapsing across PM, Design, Engineering
- Junior developer roles are disappearing
- New premium skills: judgment, orchestration, strategy
<!-- /@terminal -->

---

## 2. Strategic Alignment with McCormick's Vision

This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas.

<!-- @cards type="feature" columns="3" section="2" -->
<!-- @card icon="zap" title="Pillar 1: Revolutionize Methods" -->
AI-augmented development is becoming the default method for how engineers work. This curriculum teaches those methods before they become table stakes.
<!-- /@card -->
<!-- @card icon="graduation" title="Pillar 2: Transform Education" -->
"Whole-brain" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. Students become the bridge between lab and marketplace.
<!-- /@card -->
<!-- @card icon="target" title="Pillar 3: Advance Applications" -->
AI is one of McCormick's four grand challenge focus areas. This curriculum advances AI as both method and application domain.
<!-- /@card -->
<!-- /@cards -->

### Pillar 1: Revolutionize the Methods of Engineering

AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes.

The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping. Engineers who master AI-augmented methods will define the next generation of engineering practice. McCormick can lead in codifying these methods rather than adopting them later.

<!-- @pullquote -->The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping.<!-- /@pullquote -->

### Pillar 2: Transform Engineering Education

Dean Schuh has called for "whole-brain" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy. They do not just build systems; they understand why those systems matter and who they serve.

This prepares engineers to function as what Dean Schuh describes as "the fulcrum between the research lab and the marketplace." The marketplace represents humanity and its needs. Engineers serve as the bridge. This curriculum teaches students to be that bridge.

### Pillar 3: Advance Critical Applications of Engineering

AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build).

The skills taught here also amplify work in the other three focus areas. Climate researchers use AI agents to process satellite data. Health engineers use LLMs to analyze clinical literature. Sustainability teams use generative tools to model resource flows. The Product Engineer mindset and AI fluency accelerate progress across all four challenges.

### A Once-in-a-Generation Opportunity

Dean Schuh has expressed interest in "once-in-a-generation ideas and goals that can carry us into the future together." The transformation of engineering practice by AI qualifies. The window to establish McCormick as a leader in AI-augmented engineering education is now, while methods are still being defined and before competitors codify their own approaches.

---

## 3. Who Should Teach This — and Why Me

If McCormick wants to prepare students for the "Product Engineer" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire. It requires someone who operates across boundaries that do not usually overlap.

### The Profile Required

<!-- @cards type="profile" columns="3" section="3" -->
<!-- @card icon="briefcase" title="Executive Credibility" -->
Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations.
<!-- /@card -->
<!-- @card icon="code" title="Hands-on Builder" -->
Not someone who "used to code." Someone who builds production AI systems today. Students need an instructor who has shipped MCP servers and debugged LLM pipelines this month.
<!-- /@card -->
<!-- @card icon="rocket" title="Startup Experience" -->
Someone who has founded a company, raised capital, and exited. A founder brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it.
<!-- /@card -->
<!-- @card icon="palette" title="Design Fluency" -->
The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.
<!-- /@card -->
<!-- @card icon="network" title="Industry Connectivity" -->
Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream.
<!-- /@card -->
<!-- @card icon="graduation" title="Teaching Experience" -->
Someone who has taught at the graduate level across engineering and business schools, and trained corporate teams from entry-level to executive.
<!-- /@card -->
<!-- /@cards -->

**Executive credibility.** Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations. Students need to learn not just how to build, but how to navigate the systems that ship products.

**Hands-on builder.** Not someone who "used to code." Someone who builds production AI systems today. The tools are changing too fast for secondhand knowledge. Students need an instructor who has shipped MCP servers, built agentic systems, and debugged LLM pipelines this month.

**Startup experience.** Someone who has founded a company, raised capital, and exited. Entrepreneurship cannot be taught from case studies alone.

This matters more now than ever. AI has collapsed the cost of building, but not the hard parts: figuring out what to build, finding customers who will pay, navigating ambiguity with limited resources. Founders learn these skills through survival. In an era where anyone can prompt an AI to generate code, the differentiating skills are exactly what founders develop: judgment about what's worth building, speed of iteration, and the ability to operate when the path is unclear. A founder who has exited brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it.

**Design fluency.** The Product Engineer role sits at the intersection of design, product, and engineering. The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.

**Industry connectivity.** Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream. Curriculum needs to reflect what employers will want in 2-3 years, not what they wanted when the textbook was written.

Industry connectivity also means access. The right instructor can bring their network directly into the classroom: founders who just raised Series A, CTOs navigating AI adoption at scale, VCs evaluating the next wave of startups. These are not theoretical conversations. Students hear from practitioners living this shift in real-time. Guest speakers become mentors. Class discussions become recruiting conversations. The instructor's network becomes the students' network. This transforms a course from content delivery into a bridge between McCormick and the companies students want to join.

**Teaching experience.** Someone who has already taught at the graduate level across engineering and business schools, and who has trained corporate teams from entry-level to executive.

This combination is rare. Most executives do not build. Most builders have not led at scale. Most founders have not taught. Finding someone who does all of these, and is actively working in AI today, is the challenge.

<!-- @pullquote -->Most executives do not build. Most builders have not led at scale. Most founders have not taught.<!-- /@pullquote -->

### Why I Fit This Profile

<!-- @credentials -->
<!-- @credential value="9+" label="U.S. Patents" -->
<!-- @credential value="300K+" label="Lines of Code" -->
<!-- @credential value="20+" label="Companies Invested" -->
<!-- @credential value="13" label="GitHub Repos" -->
<!-- @credential value="4" label="VC Fund LP" -->
<!-- @credential value="12-week" label="Corporate AI Curriculum" -->
<!-- /@credentials -->

I am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams. I have held VP and General Manager responsibilities at Google and Motorola. I co-founded Jiobit, a wearable tech startup acquired by Life360 (NASDAQ: LIF) in 2021. I operate fluently across executive strategy and hands-on building. My consulting clients range from C-suite executives to senior engineers. My corporate workshops serve entry-level engineers through product directors. I teach MBAs at Kellogg and engineers at McCormick. I serve on AI advisory boards for Menlo Ventures and Techstars. This range is rare.

| Profile Requirement | My Experience |
|---------------------|---------------|
| Executive credibility | VP/GM at Google and Motorola; led cross-functional teams at scale |
| Hands-on builder | Ship production AI systems daily; 13 GitHub repos; MCP servers on npm |
| Startup experience | Founded Jiobit → nine-figure exit to Life360 (NASDAQ: LIF) |
| Design fluency | Led UX Research, UI/UX Design teams at Google; design-centric at Motorola |
| Industry connectivity | Techstars Selection Committee; LP in 4 VC funds; 20+ angel investments |
| Teaching experience | McCormick, Kellogg, UIUC; corporate training entry-level to executive |

### The Hands-On Work: What I Build Today

My most intensive building has happened after Google. I am not a manager who "used to code." I write production systems daily:

-   **MCP Servers & Multi-Agent Orchestration:** I build and publish **Model Context Protocol servers** to npm, enabling AI agents to connect with external services. I build multi-agent systems using **LangChain, n8n**, and **ReAct frameworks** that coordinate across foundational models (Gemini, OpenAI, Anthropic, Cohere). I have built systems that stream real-time meeting transcripts via **Websockets** and **Assembly AI**, enabling agents to act during live calls.

-   **Full-Stack AI Infrastructure:** I work across the modern AI stack: **vector databases (PGVector)**, **semantic search with embeddings**, **full-text search (BM25)**, **Cohere reranking**, **Agentic RAG pipelines**, and **LLM chaining with reflection loops**. I build in **React/TypeScript** with **serverless APIs** and integrate tools like **Firecrawl** and **Tavily** for deep research agents. I have built **browser automation agents**, content graders with scoring rubrics, and custom HTML email generation systems.

-   **Live Multimodal AI:** I build systems that process voice, text, and images in real-time, connecting AI agents to device hardware and sensor data.

-   **Synthetic User Platforms:** I built a synthetic user system that simulates customer feedback using LLM-generated personas. The platform uses **graph databases and knowledge graphs** to model user relationships and context, with **self-learning loops** that refine persona accuracy based on research validation. This is an example of the new AI workflows reshaping product development.

-   **Agentic Procedural Memory:** I designed and built an **Agentic Procedural Memory System** that enables AI agents to learn from their own experiences. The system detects failure-to-success patterns in tool usage, performs automated root cause analysis, and stores reusable procedures in a **hybrid search architecture** (vector embeddings + BM25 full-text search with Reciprocal Rank Fusion). Agents using this system show **50% step reduction** and **95%+ success rates** on similar tasks. This work builds directly on recent research from Zhejiang University and Alibaba. [17]

-   **Client Work & Executive Advisory:** I consult directly with public company CTOs and CEOs on AI strategy, and run hands-on design workshops with their development teams. This means reviewing AI proposals, debugging architectures, and pairing with senior engineers to ship production code. I build alongside the teams I teach.

-   **Corporate Training:** Through my consulting firm, I run a **12-week curriculum** that upskills engineers, product managers, and designers into proficient AI practitioners. Participants leave implementing AI into their products and operations. My workshops span entry-level engineers to product directors.

-   **Published Research:** I publish original technical research on AI agent architectures. A recent investigation reverse-engineered Claude Code's API requests and identified an implementation flaw: skill instructions were being injected as user messages (low authority) rather than in the system prompt (high authority), explaining why Vercel's benchmarks showed only 53% pass rates. [23] This kind of deep technical analysis is what I bring to both clients and students.

-   **Open Source:** I maintain 13 public repositories on GitHub (github.com/jrenaldi79), including MCP servers, agent frameworks, and prompt engineering collections.

### Teaching & Academic Leadership

I teach at **McCormick (Segal)**, **Kellogg**, and **University of Illinois** (Applied AI), working across engineering and business at multiple institutions. My courses integrate AI into design thinking and product development, including building custom agents and incorporating synthetic users into research. I led **Northwestern's Business Innovation Lab (Winter 2025)** in partnership with **Google DeepMind** and served as a key panelist at **Kearney's 2024 Executive Panel on AI in Product Design**.

I work alongside **Jim Wicks** (Segal Design Institute founder) and **Mike Edmonds** (Microsoft) in the classroom. My philosophy in the **MPD² program**: outcomes over outputs. I teach students to be **"missionaries, not mercenaries."**

### Curriculum-Advancing Work

Clinical faculty focus on teaching, not traditional academic research with publication requirements. My work aligns with this model while still advancing the curriculum in measurable ways.

**Testing new methods:** I pilot AI tools and workflows in real courses and corporate training programs before they become mainstream. My 12-week corporate curriculum has been iterated across multiple cohorts, identifying what works and what does not. This applied testing informs what I bring to McCormick students.

**Developing evaluation frameworks:** My work on agentic procedural memory, synthetic user validation, and Claude Code architecture analysis creates benchmarks and evaluation methods that inform pedagogy. Understanding how AI systems fail is as important as understanding how they succeed.

**Building reusable assets:** The MCP servers, agent frameworks, and prompt engineering collections I maintain on GitHub become teaching resources. Students learn from production code, not toy examples.

**Industry feedback loops:** My consulting work with public company CTOs and startup founders provides continuous signal on what skills employers need. This feedback shapes curriculum in near real-time, not on academic publication timelines.

This is not traditional research, but it is rigorous, iterative work that directly improves teaching effectiveness.

### What a Clinical Appointment Enables

I currently teach at McCormick through adjunct and visiting arrangements. A clinical faculty appointment changes what is possible.

**Curriculum design authority:** Clinical faculty can propose new courses, shape program requirements, and influence how AI-augmented methods are integrated across the curriculum. Adjunct instructors teach assigned courses; clinical faculty help design them.

**Institutional commitment:** A formal appointment signals long-term investment, both from McCormick and from me. Students benefit from continuity. Industry partners see a stable point of contact. The curriculum can evolve over multiple years rather than being renegotiated each term.

**Deeper student mentorship:** Clinical faculty advise students, supervise projects, and build relationships that extend beyond a single course. This mentorship is where much of the real learning happens.

**Program development:** With a clinical appointment, I can work with department chairs and other faculty to integrate Product Engineer concepts into existing programs, not just teach standalone courses. The goal is systemic curriculum enhancement, not a single elective.

### The Self-Taught Path

I do not have a traditional engineering degree. I have a BS in Marketing from Illinois. I taught myself to code.

And yet:
- I architected sensor fusion systems trusted by federal agencies
- I drove the technical IP for low-power embedded systems, working directly with EE and firmware engineers
- I personally wrote **300,000+ lines of code** building Jiobit's first ecommerce platform
- I lead engineering, design, and product teams at Google
- I built technology that sold for tens of millions

**I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials.** When AI makes technical ability more accessible, learning fast matters more than pedigree.

<!-- @pullquote -->I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials.<!-- /@pullquote -->

<!-- @timeline -->
<!-- @entry year="Current" company="Google" title="Global Wearable Software Lead" highlight="true" -->
Lead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded AI innovation product teams.
<!-- /@entry -->
<!-- @entry year="2021" company="Jiobit" title="Acquired by Life360" highlight="true" -->
Nine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal agencies.
<!-- /@entry -->
<!-- @entry year="2015" company="Jiobit" title="Founded" highlight="false" -->
Built sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device.
<!-- /@entry -->
<!-- @entry year="2011" company="Motorola/Google" title="VP Global eCommerce" highlight="false" -->
Created Moto Maker. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award.
<!-- /@entry -->
<!-- /@timeline -->

### Jiobit (0 to 1)

I founded Jiobit after briefly losing my son in a crowded Chicago park. *"I believe no parent should experience that panic."* We built a device with encryption strong enough to be **trusted by federal government and law enforcement** for sensitive location tracking—security as an architectural decision.

The hardware was hard: we packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device. As I told *Inventors Digest*: *"For any of this to work... we had to nail this custom system architecture and the sensor fusion technology."* I am named inventor on **9+ issued U.S. patents** covering location tracking, power management, and machine learning systems.

The outcome: SBIR Phase II Award (Air Force) [21], 200% YoY revenue growth, sold out in the 2018 holiday season, and acquired by **Life360 (NASDAQ: LIF)** in a deal that appreciated to **nine figures**. All 25 employees joined Life360 after the deal. [18][19]

### Motorola (Research to Practice)

I created **Moto Maker**, the first direct-to-consumer, built-to-order smartphone. It connected a website to the factory floor with **2,000+ permutations** shipping in **4 days or less**.

When early versions had too many choices, I applied HBR research on the "Paradox of Choice" [15] and "IKEA Effect" [16]: *"If you have a hand in creating something, your affinity for that product goes through the roof. Labor creates love."* We curated options, reduced anxiety, and increased engagement. As VP of Global eCommerce, we achieved **10x YoY growth**, **50% fewer product returns**, and won **Webby Awards**, **Best of CES**, and the **Red Dot Design Award**.

### Google (Current)

I serve as **Global Wearable Software Lead** for design, product, and research on wearable software and health platforms. I spearheaded **one of the first AI innovation product teams within Google Android** and served as the **original product lead for an internal consumer multi-agent orchestration system** designed for building coding agents. I have contributed intellectual property and led product teams developing machine learning algorithms for fitness, power management, and location services.

I lead teams across **Design, UXR, Product, and Engineering (Firmware to Cloud)**. I know how to take prototype code and scale it globally. My time at **Deloitte** building enterprise web applications gave me discipline in requirements gathering and delivery.

### Industry Visibility

My investing and ecosystem work give me a unique vantage point—I see where the industry is heading **8 to 16 months before it becomes mainstream**. That foresight shapes my curriculum. As a UIUC alumnus and founding member of **Illini Angels**, I can position McCormick as a talent pipeline for Chicago tech.

---

## 4. What I Can Teach

The "Product Engineer" needs to move from idea to shipped product. This is not a single course. It is a set of capabilities that can be woven into existing McCormick and Segal curriculum wherever they fit. I am already piloting parts of this in my current classes.

<!-- @cards type="topic" columns="3" section="4" -->
<!-- @card icon="search" title="Discovery" audience="All engineering disciplines" -->
Interview analysis, theme extraction, research synthesis. Turn qualitative research into quantitative datasets.
<!-- /@card -->
<!-- @card icon="palette" title="Generative Prototyping" audience="Product-focused engineers, designers" -->
Synthetic users, rapid validation, LLM personas. Test positioning before writing code.
<!-- /@card -->
<!-- @card icon="cpu" title="Agentic Systems" audience="CS, software engineers" -->
MCP servers, multi-agent orchestration, evals. Build autonomous, goal-directed systems.
<!-- /@card -->
<!-- @card icon="zap" title="Agentic Development" audience="Practicing engineers" -->
Production workflows, debugging, cost management. From "vibing" to shipping real systems.
<!-- /@card -->
<!-- @card icon="layers" title="Context Engineering" audience="Advanced AI practitioners" -->
RAG, memory systems, long-running agents. Manage what information agents access and when.
<!-- /@card -->
<!-- @card icon="database" title="AI Infrastructure" audience="Full-stack engineers" -->
Deployment, APIs, real-time systems. Connect AI models to real-world data and hardware.
<!-- /@card -->
<!-- @card icon="rocket" title="Entrepreneurship" audience="Founders, MBAs" -->
Fundraising, venture dynamics, exits. From idea to Techstars to nine-figure exit.
<!-- /@card -->
<!-- /@cards -->

Below are the areas where I can contribute:

### AI-Augmented Qualitative Discovery

Traditional user research takes weeks: recruiting participants, scheduling interviews, transcribing conversations, coding themes. AI collapses this timeline while expanding depth.

Students learn to use AI as a research amplifier: real-time transcription during interviews, instant theme extraction across dozens of transcripts, pattern recognition across disparate data sources. The goal is not to replace human judgment but to multiply researcher capacity. An interview that once took days to analyze now yields insights in minutes. A corpus of customer support tickets becomes a searchable knowledge base of user pain.

**What I Teach:** Interview analysis pipelines, theme extraction prompts, cross-source pattern matching, building research repositories that agents can query, integrating voice transcription (Assembly AI) into live research sessions

**Technologies:** Assembly AI, Whisper, LLM-based theme extraction, embedding-based similarity search, research corpus management

### Quantitative Discovery

Replace intuition with data. Turn qualitative *Jobs to be Done (JTBD)* research into quantitative datasets. Students learn to validate ideas before building.

**Technologies:** Python, Scikit-learn, Pandas, clustering algorithms, SQL, data visualization

### Generative Prototyping

Turn requirements into testable artifacts quickly. Use AI tools to generate wireframes from rough sketches. Build **synthetic user personas** that simulate customer feedback, letting students test positioning and product concepts against LLM-generated personas before writing code.

**Technologies:** LLM foundational models (OpenAI, Anthropic, Gemini), image generation, prompt engineering

### Agentic Systems

Move beyond chatbots to autonomous, goal-directed systems. Build servers that standardize agent connectivity. Design memory systems so agents maintain state across sessions. Shift from manual QA to **"Evals"** that test AI outputs against safety and quality guardrails.

**Technologies:** MCP servers, LangChain, ReAct frameworks, vector databases, RAG pipelines, multi-agent orchestration

### Agentic Development: From "Vibing" to Production

There is a gap between prompting ChatGPT and shipping production AI systems. Most tutorials stop at "vibing," the casual, exploratory prompting that works in demos but fails in production. Students need to learn the hard parts: deterministic behavior, error handling, cost management, and integration with existing systems.

<!-- @pullquote -->There is a gap between prompting ChatGPT and shipping production AI systems.<!-- /@pullquote -->

**What I Teach:**

-   **Development Best Practices:** How to use tools like Claude Code, Cursor, and Windsurf effectively. Writing CLAUDE.md files and AGENTS.md specifications that give AI agents the context they need. Prompt engineering that produces consistent, testable outputs.

-   **Infrastructure Requirements:** Rate limiting, API gateway management, cost tracking, latency budgets. How to build systems that gracefully degrade when AI services fail. Caching strategies for expensive model calls.

-   **Operational Changes:** AI development requires different workflows than traditional software. Students learn: how to review AI-generated code, when to trust agent outputs vs. verify them, how to debug systems where the logic is partially opaque.

-   **Planning Tool Integration:** Connecting agents to project management systems (Linear, Jira, Asana), documentation platforms, and CI/CD pipelines. Building agents that understand your codebase through proper indexing and retrieval.

-   **Agent Swarms & Orchestration:** When single agents are not enough, you coordinate multiple specialized agents that divide work, share context, and merge results. Handoff protocols, conflict resolution, and resource allocation.

-   **Memory Systems:** Building procedural memory so agents learn from past interactions. Failure-to-success pattern detection, root cause analysis, and retrieval architectures that surface relevant context at the right time.

**Technologies:** Claude Code, Cursor, Windsurf, API gateways, CI/CD integration

### Context Engineering

AI agents fail when they run out of context. A 200k token window sounds large until your agent needs to understand a codebase, remember a conversation history, and execute a multi-step plan simultaneously. Context engineering is the discipline of managing what information agents have access to and when.

**What I Teach:**

-   **Long-Running Systems:** Agents that operate over hours or days, not single-turn interactions. Session management, state persistence, and graceful recovery from interruptions.

-   **Deep Agents:** Building agents that can explore complex domains: reading documentation, navigating codebases, researching across multiple sources. These agents need strategies for prioritizing information and knowing when to stop.

-   **Context Window Management:** Summarization strategies, dynamic context loading, and retrieval-augmented generation (RAG) that pulls relevant information on demand rather than stuffing everything into the prompt.

-   **Hierarchical Context:** Some information is always relevant (system instructions, core identity). Some is session-specific. Some is task-specific. Students learn to structure context in layers that maximize utility while minimizing token waste.

-   **Tool Design for Context:** Building MCP servers and tool interfaces that provide rich context to agents without overwhelming them. Pagination, filtering, and progressive disclosure patterns.

**Technologies:** RAG architectures, context summarization, session state management, hierarchical prompt design

### AI Infrastructure

Deploy AI systems on Day 1. Manage API gateways for rate limits, cost, and latency. Connect AI models to real-world data sources and device hardware. These are skills I use daily with clients and students.

**Technologies:** React/TypeScript, serverless APIs, GCP, Websockets, real-time voice transcription, multimodal streaming

### Entrepreneurship & Venture Dynamics

I have lived the full startup arc: from idea to Techstars to product-market fit to nine-figure exit. I can teach this from experience, not textbooks.

**What I bring:** I founded Jiobit, raised venture capital, navigated hardware manufacturing, won SBIR contracts, scaled a team, and sold to a public company. I have sat on both sides of the table, as a founder raising money and as an investor evaluating deals. I serve on the Techstars Selection Committee, mentor at mHUB (hardtech) and iVenture Accelerator, and am an LP in four venture funds including LongJump (Chicago's most active pre-seed fund). I have invested in 20+ companies.

**Topics:** Cap table structures, fundraising mechanics, term sheets, due diligence processes. How investors evaluate technical stacks and IP. When to build vs. buy. How to think about defensibility when AI commoditizes implementation. How to tell a story that raises money. How to build a company that people want to join and stay at.

### A Note on Applicability

While the examples above reference software, these skills transfer across engineering disciplines. AI is accelerating PCB design, materials discovery, clinical literature analysis, and structural optimization. Dean Schuh's own field has seen rapid adoption of machine learning for alloy design. The core skills—judgment about what to build, fluency with AI tools, and translation between technical capability and human need—prepare engineers for any field where AI is reshaping practice.

<!-- @terminal title="What I Can Teach" command="" variant="compact" -->
- **Discovery** → AI-powered research & user insights
- **Prototyping** → Synthetic users, rapid validation
- **Agentic Systems** → Multi-agent orchestration
- **Context Engineering** → Memory & retrieval systems
- **AI Infrastructure** → Production deployment
- **Venture Dynamics** → Fundraising & exits
<!-- /@terminal -->

---

## 5. What Others Say

<!-- @testimonials type="leadership" -->
<!-- @testimonial author="Logan LaHive" title="Managing Director, Techstars Chicago" -->
FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.
<!-- /@testimonial -->
<!-- @testimonial author="Lior Ron" title="Founder of Uber Freight, Former Moto/Google Executive" -->
John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.
<!-- /@testimonial -->
<!-- @testimonial author="Jake Phillips" title="Sr. Director, Reality Labs Accessories at Meta" subtitle="reported to John" -->
In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.
<!-- /@testimonial -->
<!-- @testimonial author="Matt Vokoun" title="Google VP, Strategy, Business Operations, Product Management" -->
John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.
<!-- /@testimonial -->
<!-- /@testimonials -->

-   **Logan LaHive**, Managing Director, Techstars Chicago:
    *"FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind."*

-   **Lior Ron**, Founder of Uber Freight, Former Moto/Google Executive:
    *"John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again."*

-   **Jake Phillips**, Sr. Director, Reality Labs Accessories at Meta (reported to John):
    *"In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following."*

-   **Matt Vokoun**, Google VP, Strategy, Business Operations, Product Management:
    *"John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company."*

### On Teaching & Workshops

<!-- @testimonials type="teaching" -->
<!-- @testimonial author="John Minor" title="Chief Product Officer, PayNearMe" -->
John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.
<!-- /@testimonial -->
<!-- @testimonial author="Lauren Antonoff" title="CEO, Life360" -->
I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!
<!-- /@testimonial -->
<!-- @testimonial author="Sr. Product Manager" title="PayNearMe" -->
Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!
<!-- /@testimonial -->
<!-- /@testimonials -->

<!-- @testimonials type="students" source="Kellogg" -->
<!-- @testimonial -->
The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.
<!-- /@testimonial -->
<!-- @testimonial -->
You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.
<!-- /@testimonial -->
<!-- @testimonial -->
Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.
<!-- /@testimonial -->
<!-- @testimonial -->
I come from a non-technical background but was surprised I kept up!
<!-- /@testimonial -->
<!-- /@testimonials -->

-   **John Minor**, Chief Product Officer, PayNearMe:
    *"John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap."*

-   **Lauren Antonoff**, CEO, Life360:
    *"I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!"*

-   **Sr. Product Manager**, PayNearMe:
    *"Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!"*

-   **Kellogg Students:**
    - *"The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics."*
    - *"You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars."*
    - *"Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging."*
    - *"I come from a non-technical background but was surprised I kept up!"*

---

## 6. The Path Forward

The "Product Engineer" is the future. McCormick can lead in teaching it.

I bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going. I build AI products at Google, with clients, and with students every day.

I look forward to discussing next steps.

---

## Citations

### Industry Research & Data

[1] Anthropic. "How AI Is Transforming Work at Anthropic." *Anthropic Research Blog*, December 2, 2025. https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic

[2] Orosz, Gergely. "How Claude Code is Built." *The Pragmatic Engineer*, September 23, 2025. https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built

[3] Zieminski, Karol. "Anthropic Shipped Claude Cowork in 10 Days Using Its Own AI." *Product with Attitude*, January 13, 2026. https://karozieminski.substack.com/p/claude-cowork-anthropic-product-deep-dive

[4] Stack Overflow. "2025 Developer Survey: AI." 2025. https://survey.stackoverflow.co/2025/ai

[5] Peng, Sida; Kalliamvakou, Eirini; Cihon, Peter; and Demirer, Mert. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." *Microsoft Research*, February 2023. arXiv:2302.06590. https://arxiv.org/pdf/2302.06590

[6] McKinsey & Company. "Unlocking the Value of AI in Software Development." *McKinsey Digital*, November 3, 2025. https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/unlocking-the-value-of-ai-in-software-development

### Expert Sources

[7] Mollick, Ethan. "Management as AI Superpower." *One Useful Thing* (Substack), January 27, 2026. https://www.oneusefulthing.org/p/management-as-ai-superpower

[8] Karpathy, Andrej. X (Twitter) post on AI programming, December 26, 2025. https://x.com/karpathy/status/2004607146781278521

[9] Huang, Jensen. Keynote address at London Tech Week, June 9, 2025. Reported by CNBC. https://www.cnbc.com/2025/06/09/we-train-ai-like-humans-now-nvidia-jensen-huang-says-.html

[10] Nadella, Satya and Zuckerberg, Mark. Remarks at Meta LlamaCon, April 29, 2025. Reported by CNBC and GeekWire. https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html

[11] Balazinska, Magdalena. "Coding is Dead: UW Computer Science Program Rethinks Curriculum for the AI Era." *GeekWire*, July 10, 2025. https://www.geekwire.com/2025/coding-is-dead-uw-computer-science-program-rethinks-curriculum-for-the-ai-era/

[12] Seth, Deepak (Gartner) and Atahan, Bekir (Experis/ManpowerGroup). "What AI Skills Job Seekers Need to Develop in 2026." *Computerworld*, January 19, 2026. https://www.computerworld.com/article/4117602/what-ai-skills-job-seekers-need-to-develop-in-2026.html

[13] National Association of Colleges and Employers (NACE). "Job Outlook 2025." December 9, 2024. https://www.naceweb.org/talent-acquisition/candidate-selection/what-are-employers-looking-for-when-reviewing-college-students-resumes

[14] Sacra Research and ARR Club. "Bolt.new ARR Hit $40M in 5 Months." 2025. https://sacra.com/c/bolt-new/

### Academic Research

[15] Schwartz, Barry. "More Isn't Always Better." *Harvard Business Review*, June 2006. https://hbr.org/2006/06/more-isnt-always-better

[16] Norton, Michael I.; Mochon, Daniel; and Ariely, Dan. "The IKEA Effect: When Labor Leads to Love." *Harvard Business School Working Paper* 11-091. https://www.hbs.edu/ris/Publication%20Files/11-091.pdf

[17] Fang, Ruochen et al. "Memp: Exploring Agent Procedural Memory." Zhejiang University and Alibaba Group, August 2025. arXiv:2508.06433. https://arxiv.org/abs/2508.06433

### Biographical & Company Sources

[18] Life360 ASX Announcement. "Proposed Acquisition of Jiobit." April 27, 2021. https://www.asx.com.au/asxpdf/20210427/pdf/44vw8t5kt43wqg.pdf

[19] TechCrunch. "Family tracking app Life360 to acquire wearable location device Jiobit for $37M." April 27, 2021. https://techcrunch.com/2021/04/27/family-tracking-app-life360-to-acquire-wearable-location-device-jiobit-for-37m/

[20] Jiobit Blog. "Winner of 17th Annual Chicago Innovation Awards." October 29, 2019. https://www.jiobit.com/blog/jiobit-named-winner-of-17th-annual-chicago-innovation-awards

[21] Jiobit Blog. "SBIR Phase II Award from U.S. Air Force." August 21, 2019. https://www.jiobit.com/blog/jiobit-receives-sbir-phase-ii-award-from-us-air-force

[22] USPTO Patent Records: US 10,172,109; US 10,158,971; US 9,980,087; US 10,064,002; and related JIO, Inc. and Tile, Inc. filings. https://patents.justia.com/assignee/tile-inc

[23] Vercel Engineering. "AGENTS.md Outperforms Skills in Our Agent Evals." *Vercel Blog*, January 27, 2026. https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals

[24] Northwestern University Segal Design Institute. "John Renaldi Faculty Profile." https://design.northwestern.edu/people/profiles/renaldi-john.html
