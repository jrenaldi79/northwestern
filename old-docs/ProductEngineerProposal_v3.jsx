/**
 * Product Engineer Proposal - Single File Bundle
 * Generated: 2026-02-02T17:27:41.439Z
 *
 * This file is auto-generated. Do not edit directly.
 * To modify, edit the source files and run: node src/utils/build.js
 */

import React, { useState } from 'react';

// ============================================================================
// CONTENT DATA
// ============================================================================

// Auto-generated from Product_Engineer_Proposal.md
// Generated: 2026-02-02T17:23:44.063Z
// Run: node src/utils/parser.js

const CONTENT = {
  "header": {
    "to": "Christopher A. Schuh",
    "toTitle": "Dean, McCormick School of Engineering",
    "from": "John Renaldi",
    "fromEmail": "jrenaldi79@gmail.com",
    "headshot": "https://media.licdn.com/dms/image/v2/D5603AQFUsK3qbahONA/profile-displayphoto-shrink_400_400/B56ZrwKFmfHkAc-/0/1738015769267?e=1743638400&v=beta&t=MKHyOB7K-PZZdSc0xc2QDUYSMyM009nFvmZbiWoOz8I",
    "date": "February 2026",
    "title": "The Product Engineer",
    "subtitle": "Preparing McCormick students for the convergence of design, product, and engineering in the age of AI."
  },
  "stats": [
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
  "charts": [
    {
      "type": "growth",
      "title": "AI Adoption at Anthropic",
      "subtitle": "Year-over-year change",
      "series": [
        {
          "label": "Engineers Using AI",
          "points": [
            {
              "year": "2024",
              "value": 28
            },
            {
              "year": "2025",
              "value": 59
            }
          ]
        },
        {
          "label": "Productivity Gains",
          "points": [
            {
              "year": "2024",
              "value": 20
            },
            {
              "year": "2025",
              "value": 50
            }
          ]
        }
      ]
    },
    {
      "type": "range",
      "title": "Product Engineer Compensation",
      "subtitle": "Major tech hubs, 2025",
      "ranges": [
        {
          "label": "Entry Level",
          "min": 140,
          "max": 170,
          "unit": "k",
          "highlight": false
        },
        {
          "label": "Senior",
          "min": 200,
          "max": 250,
          "unit": "k",
          "highlight": true
        }
      ]
    },
    {
      "type": "bar",
      "title": "AI Impact on Development",
      "subtitle": "Industry research findings",
      "bars": [
        {
          "label": "Developers Using AI Tools",
          "value": 84,
          "unit": "%",
          "source": "Stack Overflow 2025",
          "cite": "4"
        },
        {
          "label": "Task Completion Speed",
          "value": 55.8,
          "unit": "% faster",
          "source": "GitHub Research",
          "cite": "5"
        },
        {
          "label": "Code Quality Improvement",
          "value": 40,
          "unit": "%",
          "source": "McKinsey",
          "cite": "6"
        }
      ]
    },
    {
      "type": "hierarchy",
      "title": "The Skills Shift",
      "subtitle": "What matters now vs. what mattered before",
      "levels": [
        {
          "from": "Writing Code",
          "to": "Orchestrating Systems"
        },
        {
          "from": "Syntax",
          "to": "Judgment"
        },
        {
          "from": "Execution",
          "to": "Strategy"
        }
      ]
    }
  ],
  "convergence": [
    {
      "from": "PMs",
      "to": "Engineering",
      "description": "Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly."
    },
    {
      "from": "Designers",
      "to": "Eng & PM",
      "description": "Designers no longer hand off static mockups. They prototype in production code."
    },
    {
      "from": "Engineers",
      "to": "Product",
      "description": "When implementation becomes easy, the valuable skill becomes knowing what to build."
    }
  ],
  "quotes": [
    {
      "author": "Ethan Mollick",
      "title": "Wharton, Co-Intelligence",
      "cite": "7",
      "quote": "AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback."
    },
    {
      "author": "Andrej Karpathy",
      "title": "OpenAI co-founder, former Tesla AI",
      "cite": "8",
      "quote": "I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills."
    },
    {
      "author": "Jensen Huang",
      "title": "NVIDIA CEO",
      "cite": "9",
      "quote": "There's a new programming language. It's called 'human.'"
    },
    {
      "author": "Magdalena Balazinska",
      "title": "UW Allen School",
      "cite": "11",
      "quote": "Coding, or the translation of a precise design into software instructions, is dead. AI can do that."
    }
  ],
  "pullquotes": [
    "The separation between \"people with ideas\" and \"people who can build\" is shrinking.",
    "AI lowers the floor to coding while raising the ceiling for engineering.",
    "Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy.",
    "The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping.",
    "Most executives do not build. Most builders have not led at scale. Most founders have not taught.",
    "There is a gap between prompting ChatGPT and shipping production AI systems.",
    "I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials."
  ],
  "cards": [
    {
      "type": "profile",
      "columns": 3,
      "cards": [
        {
          "icon": "briefcase",
          "title": "Executive Credibility",
          "content": "Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations."
        },
        {
          "icon": "code",
          "title": "Hands-on Builder",
          "content": "Not someone who \"used to code.\" Someone who builds production AI systems today. Students need an instructor who has shipped MCP servers and debugged LLM pipelines this month."
        },
        {
          "icon": "rocket",
          "title": "Startup Experience",
          "content": "Someone who has founded a company, raised capital, and exited. A founder brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it."
        },
        {
          "icon": "palette",
          "title": "Design Fluency",
          "content": "The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly."
        },
        {
          "icon": "network",
          "title": "Industry Connectivity",
          "content": "Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream."
        },
        {
          "icon": "graduation",
          "title": "Teaching Experience",
          "content": "Someone who has taught at the graduate level across engineering and business schools, and trained corporate teams from entry-level to executive."
        }
      ]
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
  "timeline": [
    {
      "year": "Current",
      "company": "Google",
      "title": "Global Wearable Software Lead",
      "highlight": true,
      "content": "Lead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded AI innovation product teams."
    },
    {
      "year": "2021",
      "company": "Jiobit",
      "title": "Acquired by Life360",
      "highlight": true,
      "content": "Nine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal agencies."
    },
    {
      "year": "2015",
      "company": "Jiobit",
      "title": "Founded",
      "highlight": false,
      "content": "Built sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device."
    },
    {
      "year": "2011",
      "company": "Motorola/Google",
      "title": "VP Global eCommerce",
      "highlight": false,
      "content": "Created Moto Maker. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award."
    }
  ],
  "testimonials": [
    {
      "type": "leadership",
      "source": "",
      "testimonials": [
        {
          "author": "Logan LaHive",
          "title": "Managing Director, Techstars Chicago",
          "subtitle": "",
          "content": "FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind."
        },
        {
          "author": "Lior Ron",
          "title": "Founder of Uber Freight, Former Moto/Google Executive",
          "subtitle": "",
          "content": "John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again."
        },
        {
          "author": "Jake Phillips",
          "title": "Sr. Director, Reality Labs Accessories at Meta",
          "subtitle": "reported to John",
          "content": "In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following."
        },
        {
          "author": "Matt Vokoun",
          "title": "Google VP, Strategy, Business Operations, Product Management",
          "subtitle": "",
          "content": "John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company."
        }
      ]
    },
    {
      "type": "teaching",
      "source": "",
      "testimonials": [
        {
          "author": "John Minor",
          "title": "Chief Product Officer, PayNearMe",
          "subtitle": "",
          "content": "John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap."
        },
        {
          "author": "Lauren Antonoff",
          "title": "CEO, Life360",
          "subtitle": "",
          "content": "I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!"
        },
        {
          "author": "Sr. Product Manager",
          "title": "PayNearMe",
          "subtitle": "",
          "content": "Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!"
        }
      ]
    },
    {
      "type": "students",
      "source": "Kellogg",
      "testimonials": [
        {
          "author": "",
          "title": "",
          "subtitle": "",
          "content": "The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics."
        },
        {
          "author": "",
          "title": "",
          "subtitle": "",
          "content": "You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars."
        },
        {
          "author": "",
          "title": "",
          "subtitle": "",
          "content": "Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging."
        },
        {
          "author": "",
          "title": "",
          "subtitle": "",
          "content": "I come from a non-technical background but was surprised I kept up!"
        }
      ]
    }
  ],
  "tables": [
    {
      "headers": [
        "Traditional Workflow",
        "AI-Augmented Workflow"
      ],
      "rows": [
        [
          "Designer creates mockups → hands off to engineer",
          "Designer prototypes in production code directly",
          ""
        ],
        [
          "PM writes specs → waits for implementation",
          "PM ships features, describes intent to AI",
          ""
        ],
        [
          "Engineer translates requirements to code",
          "Engineer orchestrates AI agents, focuses on architecture",
          ""
        ],
        [
          "Research takes weeks (recruiting, interviews, analysis)",
          "AI extracts themes in minutes from transcripts",
          ""
        ],
        [
          "Prototyping requires coding skills",
          "Anyone can describe and generate working prototypes",
          ""
        ]
      ],
      "variant": "default"
    },
    {
      "headers": [
        "Teaching Area",
        "Core Skills",
        "Target Audience"
      ],
      "rows": [
        [
          "AI-Augmented Discovery",
          "Interview analysis, theme extraction, research synthesis",
          "All engineering disciplines",
          ""
        ],
        [
          "Generative Prototyping",
          "Synthetic users, rapid validation, LLM personas",
          "Product-focused engineers, designers",
          ""
        ],
        [
          "Agentic Systems",
          "MCP servers, multi-agent orchestration, evals",
          "CS, software engineers",
          ""
        ],
        [
          "Agentic Development",
          "Production workflows, debugging, cost management",
          "Practicing engineers",
          ""
        ],
        [
          "Context Engineering",
          "RAG, memory systems, long-running agents",
          "Advanced AI practitioners",
          ""
        ],
        [
          "AI Infrastructure",
          "Deployment, APIs, real-time systems",
          "Full-stack engineers",
          ""
        ],
        [
          "Entrepreneurship",
          "Fundraising, venture dynamics, exits",
          "Founders, MBAs",
          ""
        ]
      ],
      "variant": "default"
    },
    {
      "headers": [
        "Profile Requirement",
        "My Experience"
      ],
      "rows": [
        [
          "Executive credibility",
          "VP/GM at Google and Motorola; led cross-functional teams at scale",
          ""
        ],
        [
          "Hands-on builder",
          "Ship production AI systems daily; 13 GitHub repos; MCP servers on npm",
          ""
        ],
        [
          "Startup experience",
          "Founded Jiobit → nine-figure exit to Life360 (NASDAQ: LIF)",
          ""
        ],
        [
          "Design fluency",
          "Led UX Research, UI/UX Design teams at Google; design-centric at Motorola",
          ""
        ],
        [
          "Industry connectivity",
          "Techstars Selection Committee; LP in 4 VC funds; 20+ angel investments",
          ""
        ],
        [
          "Teaching experience",
          "McCormick, Kellogg, UIUC; corporate training entry-level to executive",
          ""
        ]
      ],
      "variant": "default"
    }
  ],
  "sections": [
    {
      "number": 1,
      "title": "The Market & Student Need: Why Now",
      "intro": "For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.\n\nAI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between \"people with ideas\" and \"people who can build\" is shrinking.\n\n<!-- @pullquote -->The separation between \"people with ideas\" and \"people who can build\" is shrinking.<!-- /@pullquote -->\n\nThis is happening now, inside the companies building these tools.",
      "subsections": [
        {
          "title": "The Anthropic Case Study",
          "content": "At Anthropic, the company behind Claude, internal research shows [1][2]:\n\n<!-- @stats -->\n<!-- @stat value=\"59%\" label=\"Engineers Using AI Daily\" source=\"up from 28% a year ago\" -->\n<!-- @stat value=\"50%\" label=\"Productivity Gains\" source=\"up from 20% the year before\" -->\n<!-- @stat value=\"90%\" label=\"Code Written by AI\" source=\"Claude Code's own codebase\" -->\n<!-- @stat value=\"10 days\" label=\"To Ship New Products\" source=\"Cowork built with AI tools\" -->\n<!-- /@stats -->\n\n<!-- @chart type=\"growth\" title=\"AI Adoption at Anthropic\" subtitle=\"Year-over-year change\" -->\n<!-- @series label=\"Engineers Using AI\" -->\n<!-- @point year=\"2024\" value=\"28\" -->\n<!-- @point year=\"2025\" value=\"59\" -->\n<!-- /@series -->\n<!-- @series label=\"Productivity Gains\" -->\n<!-- @point year=\"2024\" value=\"20\" -->\n<!-- @point year=\"2025\" value=\"50\" -->\n<!-- /@series -->\n<!-- /@chart -->\n\n-   Engineers use Claude in **59% of their work**, up from 28% a year ago\n-   They report **50% productivity gains**, up from 20% the year before\n-   **90% of Claude Code's codebase was written by Claude Code itself**\n-   The team ships **60-100 internal releases per day**\n-   They built a new product (Cowork) in **about 10 days** using their own AI tools [3]\n\nAnthropic now **hires generalists over specialists** because \"many traditional programming skills are less relevant when AI handles implementation details.\" [1]\n\nMcCormick students will enter this world in 2-3 years. We need to prepare them now."
        },
        {
          "title": "The Triad: Design, Product, and Engineering Are Merging",
          "content": "Role boundaries are collapsing. Designers, product managers, and engineers are moving toward each other:\n\n<!-- @convergence -->\n<!-- @role from=\"PMs\" to=\"Engineering\" description=\"Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly.\" -->\n<!-- @role from=\"Designers\" to=\"Eng & PM\" description=\"Designers no longer hand off static mockups. They prototype in production code.\" -->\n<!-- @role from=\"Engineers\" to=\"Product\" description=\"When implementation becomes easy, the valuable skill becomes knowing what to build.\" -->\n<!-- /@convergence -->\n\n-   **PMs → Engineers:** Six months ago, most product managers shipped zero code. Today, most PMs ship at least one pull request per month. At Anthropic, PMs ship features directly. By end of 2026, PMs may write 10-20% of production code.\n\n-   **Designers → Engineers & PMs:** Designers no longer hand off static mockups. With AI tools, they prototype in production code, make product decisions in real-time, and understand the systems they design for.\n\n-   **Engineers → Product:** When implementation becomes easy, the valuable skill becomes knowing what to build. Engineers who understand customer problems, market dynamics, and business models are worth more than those who only execute specs.\n\nThe tools are converging too. **Claude Code** lets engineers ship features by describing intent. **Figma AI** generates production-ready components from design specs. **Bolt** (which hit $40M ARR in five months [14]) and **Lovable** let anyone describe a feature and watch it appear. These tools do not replace judgment. They automate the translation layer between idea and implementation. The role that remains is the one who knows what to build and why.\n\n| Traditional Workflow | AI-Augmented Workflow |\n|---------------------|----------------------|\n| Designer creates mockups → hands off to engineer | Designer prototypes in production code directly |\n| PM writes specs → waits for implementation | PM ships features, describes intent to AI |\n| Engineer translates requirements to code | Engineer orchestrates AI agents, focuses on architecture |\n| Research takes weeks (recruiting, interviews, analysis) | AI extracts themes in minutes from transcripts |\n| Prototyping requires coding skills | Anyone can describe and generate working prototypes |\n\n**Synthetic users** represent another shift: AI personas that simulate customer feedback before a single line of code is written. Product teams can now test positioning, validate assumptions, and iterate on concepts using LLM-generated personas trained on real research data. This changes the research-to-build cycle entirely.\n\nAI lowers the floor to coding while raising the ceiling for engineering. The role that remains is the one who knows what to build and why.\n\n<!-- @pullquote -->AI lowers the floor to coding while raising the ceiling for engineering.<!-- /@pullquote -->"
        },
        {
          "title": "The Rise of the \"Product Engineer\"",
          "content": "Tech companies are redefining roles around this reality. Innovation happens when engineers have business context, and when PMs and designers can build. Companies like **Vercel** and **Linear** now hire \"Product Engineers\" who \"care more about outcomes and impact than the exact implementation.\" These roles command **$140-170k** at entry level in major tech hubs, with senior roles exceeding $200k—a premium that signals market demand.\n\n<!-- @chart type=\"range\" title=\"Product Engineer Compensation\" subtitle=\"Major tech hubs, 2025\" -->\n<!-- @range label=\"Entry Level\" min=\"140\" max=\"170\" unit=\"k\" -->\n<!-- @range label=\"Senior\" min=\"200\" max=\"250\" unit=\"k\" highlight=\"true\" -->\n<!-- /@chart -->"
        },
        {
          "title": "The Junior Developer Role Is Disappearing",
          "content": "<!-- @chart type=\"bar\" title=\"AI Impact on Development\" subtitle=\"Industry research findings\" -->\n<!-- @bar label=\"Developers Using AI Tools\" value=\"84\" unit=\"%\" source=\"Stack Overflow 2025\" cite=\"4\" -->\n<!-- @bar label=\"Task Completion Speed\" value=\"55.8\" unit=\"% faster\" source=\"GitHub Research\" cite=\"5\" -->\n<!-- @bar label=\"Code Quality Improvement\" value=\"40\" unit=\"%\" source=\"McKinsey\" cite=\"6\" -->\n<!-- /@chart -->\n\nThe traditional entry-level developer role is vanishing. Today, **84% of developers** use AI tools [4], and GitHub research shows they complete tasks **55.8% faster** [5]. McKinsey reports **35-45% improvements in software quality** [6]. As Magdalena Balazinska of UW's Allen School puts it: *\"Coding, or the translation of a precise design into software instructions, is dead. AI can do that.\"* [11]"
        },
        {
          "title": "The New Skills: What Industry Leaders Are Saying",
          "content": "<!-- @quotes type=\"carousel\" -->\n<!-- @quote author=\"Ethan Mollick\" title=\"Wharton, Co-Intelligence\" cite=\"7\" -->\nAI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback.\n<!-- /@quote -->\n<!-- @quote author=\"Andrej Karpathy\" title=\"OpenAI co-founder, former Tesla AI\" cite=\"8\" -->\nI've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills.\n<!-- /@quote -->\n<!-- @quote author=\"Jensen Huang\" title=\"NVIDIA CEO\" cite=\"9\" -->\nThere's a new programming language. It's called 'human.'\n<!-- /@quote -->\n<!-- @quote author=\"Magdalena Balazinska\" title=\"UW Allen School\" cite=\"11\" -->\nCoding, or the translation of a precise design into software instructions, is dead. AI can do that.\n<!-- /@quote -->\n<!-- /@quotes -->\n\nIndustry leaders agree on what matters now. **Ethan Mollick** (Wharton) argues that *\"AI skills are basically the skills of good managers: delegation, clear explanations, getting a sense of individual strengths & weaknesses, division of labor, project management, clear feedback.\"* [7]\n\n**Andrej Karpathy** (OpenAI co-founder) describes the shift: *\"I've never felt this much behind as a programmer. The profession is being dramatically refactored... There's a new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills.\"* [8]\n\nThe programming language itself is changing. As **Jensen Huang** (NVIDIA CEO) puts it: *\"There's a new programming language. It's called 'human.'\"* [9] The numbers confirm this: **20-30% of Microsoft's code** is now AI-written [10], and **Mark Zuckerberg** predicts half of Meta's development will be done by AI within a year.\n\nSkills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy. These are the skills we must teach.\n\n<!-- @chart type=\"hierarchy\" title=\"The Skills Shift\" subtitle=\"What matters now vs. what mattered before\" -->\n<!-- @level from=\"Writing Code\" to=\"Orchestrating Systems\" -->\n<!-- @level from=\"Syntax\" to=\"Judgment\" -->\n<!-- @level from=\"Execution\" to=\"Strategy\" -->\n<!-- /@chart -->\n\n<!-- @pullquote -->Skills are moving up: from writing code to orchestrating systems, from syntax to judgment, from execution to strategy.<!-- /@pullquote -->\n\n**The Opportunity:** Employers now prioritize **problem-solving (~90%)** over GPA. [13] McCormick can lead in teaching students to use AI to build systems that solve real problems.\n\n---"
        }
      ]
    },
    {
      "number": 2,
      "title": "Strategic Alignment with McCormick's Vision",
      "intro": "This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas.",
      "subsections": [
        {
          "title": "Pillar 1: Revolutionize the Methods of Engineering",
          "content": "AI-augmented development is not a niche skill. It is becoming the default method for how engineers work. Context engineering, agentic systems, and production AI workflows are the new tools engineers will use across every discipline. This curriculum teaches those methods before they become table stakes.\n\nThe shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping. Engineers who master AI-augmented methods will define the next generation of engineering practice. McCormick can lead in codifying these methods rather than adopting them later.\n\n<!-- @pullquote -->The shift is analogous to when CAD replaced drafting tables or when simulation replaced physical prototyping.<!-- /@pullquote -->"
        },
        {
          "title": "Pillar 2: Transform Engineering Education",
          "content": "Dean Schuh has called for \"whole-brain\" engineering that pairs technical depth with innovation, design, and entrepreneurial thinking. The Product Engineer curriculum embodies this integration. Students learn to move fluidly between user research, technical implementation, and business strategy. They do not just build systems; they understand why those systems matter and who they serve.\n\nThis prepares engineers to function as what Dean Schuh describes as \"the fulcrum between the research lab and the marketplace.\" The marketplace represents humanity and its needs. Engineers serve as the bridge. This curriculum teaches students to be that bridge."
        },
        {
          "title": "Pillar 3: Advance Critical Applications of Engineering",
          "content": "AI is explicitly one of McCormick's four grand challenge focus areas, alongside climate, health, and sustainability. This curriculum directly advances AI as both a method (how engineers work) and an application domain (what engineers build).\n\nThe skills taught here also amplify work in the other three focus areas. Climate researchers use AI agents to process satellite data. Health engineers use LLMs to analyze clinical literature. Sustainability teams use generative tools to model resource flows. The Product Engineer mindset and AI fluency accelerate progress across all four challenges."
        },
        {
          "title": "A Once-in-a-Generation Opportunity",
          "content": "Dean Schuh has expressed interest in \"once-in-a-generation ideas and goals that can carry us into the future together.\" The transformation of engineering practice by AI qualifies. The window to establish McCormick as a leader in AI-augmented engineering education is now, while methods are still being defined and before competitors codify their own approaches.\n\n---"
        }
      ]
    },
    {
      "number": 3,
      "title": "Who Should Teach This",
      "intro": "If McCormick wants to prepare students for the \"Product Engineer\" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire. It requires someone who operates across boundaries that do not usually overlap.",
      "subsections": [
        {
          "title": "The Profile",
          "content": "<!-- @cards type=\"profile\" columns=\"3\" -->\n<!-- @card icon=\"briefcase\" title=\"Executive Credibility\" -->\nSomeone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations.\n<!-- /@card -->\n<!-- @card icon=\"code\" title=\"Hands-on Builder\" -->\nNot someone who \"used to code.\" Someone who builds production AI systems today. Students need an instructor who has shipped MCP servers and debugged LLM pipelines this month.\n<!-- /@card -->\n<!-- @card icon=\"rocket\" title=\"Startup Experience\" -->\nSomeone who has founded a company, raised capital, and exited. A founder brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it.\n<!-- /@card -->\n<!-- @card icon=\"palette\" title=\"Design Fluency\" -->\nThe instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.\n<!-- /@card -->\n<!-- @card icon=\"network\" title=\"Industry Connectivity\" -->\nSomeone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream.\n<!-- /@card -->\n<!-- @card icon=\"graduation\" title=\"Teaching Experience\" -->\nSomeone who has taught at the graduate level across engineering and business schools, and trained corporate teams from entry-level to executive.\n<!-- /@card -->\n<!-- /@cards -->\n\n**Executive credibility.** Someone who has led teams at scale across design, product, and engineering, and understands how decisions get made in large organizations. Students need to learn not just how to build, but how to navigate the systems that ship products.\n\n**Hands-on builder.** Not someone who \"used to code.\" Someone who builds production AI systems today. The tools are changing too fast for secondhand knowledge. Students need an instructor who has shipped MCP servers, built agentic systems, and debugged LLM pipelines this month.\n\n**Startup experience.** Someone who has founded a company, raised capital, and exited. Entrepreneurship cannot be taught from case studies alone.\n\nThis matters more now than ever. AI has collapsed the cost of building, but not the hard parts: figuring out what to build, finding customers who will pay, navigating ambiguity with limited resources. Founders learn these skills through survival. In an era where anyone can prompt an AI to generate code, the differentiating skills are exactly what founders develop: judgment about what's worth building, speed of iteration, and the ability to operate when the path is unclear. A founder who has exited brings the full lifecycle perspective from idea to acquisition—and the scar tissue that comes with it.\n\n**Design fluency.** The Product Engineer role sits at the intersection of design, product, and engineering. The instructor should have led UX and design teams, not just collaborated with them. They should understand what makes products feel right, not just function correctly.\n\n**Industry connectivity.** Someone embedded in the startup and venture ecosystem who sees where the industry is heading before it becomes mainstream. Curriculum needs to reflect what employers will want in 2-3 years, not what they wanted when the textbook was written.\n\nIndustry connectivity also means access. The right instructor can bring their network directly into the classroom: founders who just raised Series A, CTOs navigating AI adoption at scale, VCs evaluating the next wave of startups. These are not theoretical conversations. Students hear from practitioners living this shift in real-time. Guest speakers become mentors. Class discussions become recruiting conversations. The instructor's network becomes the students' network. This transforms a course from content delivery into a bridge between McCormick and the companies students want to join.\n\n**Teaching experience.** Someone who has already taught at the graduate level across engineering and business schools, and who has trained corporate teams from entry-level to executive.\n\nThis combination is rare. Most executives do not build. Most builders have not led at scale. Most founders have not taught. Finding someone who does all of these, and is actively working in AI today, is the challenge. Section 5 addresses why I believe I fit this profile.\n\n<!-- @pullquote -->Most executives do not build. Most builders have not led at scale. Most founders have not taught.<!-- /@pullquote -->\n\n---"
        }
      ]
    },
    {
      "number": 4,
      "title": "What I Can Teach",
      "intro": "The \"Product Engineer\" needs to move from idea to shipped product. This is not a single course. It is a set of capabilities that can be woven into existing McCormick and Segal curriculum wherever they fit. I am already piloting parts of this in my current classes.\n\n| Teaching Area | Core Skills | Target Audience |\n|--------------|-------------|-----------------|\n| AI-Augmented Discovery | Interview analysis, theme extraction, research synthesis | All engineering disciplines |\n| Generative Prototyping | Synthetic users, rapid validation, LLM personas | Product-focused engineers, designers |\n| Agentic Systems | MCP servers, multi-agent orchestration, evals | CS, software engineers |\n| Agentic Development | Production workflows, debugging, cost management | Practicing engineers |\n| Context Engineering | RAG, memory systems, long-running agents | Advanced AI practitioners |\n| AI Infrastructure | Deployment, APIs, real-time systems | Full-stack engineers |\n| Entrepreneurship | Fundraising, venture dynamics, exits | Founders, MBAs |\n\nBelow are the areas where I can contribute:",
      "subsections": [
        {
          "title": "AI-Augmented Qualitative Discovery",
          "content": "Traditional user research takes weeks: recruiting participants, scheduling interviews, transcribing conversations, coding themes. AI collapses this timeline while expanding depth.\n\nStudents learn to use AI as a research amplifier: real-time transcription during interviews, instant theme extraction across dozens of transcripts, pattern recognition across disparate data sources. The goal is not to replace human judgment but to multiply researcher capacity. An interview that once took days to analyze now yields insights in minutes. A corpus of customer support tickets becomes a searchable knowledge base of user pain.\n\n**What I Teach:** Interview analysis pipelines, theme extraction prompts, cross-source pattern matching, building research repositories that agents can query, integrating voice transcription (Assembly AI) into live research sessions\n\n**Technologies:** Assembly AI, Whisper, LLM-based theme extraction, embedding-based similarity search, research corpus management"
        },
        {
          "title": "Quantitative Discovery",
          "content": "Replace intuition with data. Turn qualitative *Jobs to be Done (JTBD)* research into quantitative datasets. Students learn to validate ideas before building.\n\n**Technologies:** Python, Scikit-learn, Pandas, clustering algorithms, SQL, data visualization"
        },
        {
          "title": "Generative Prototyping",
          "content": "Turn requirements into testable artifacts quickly. Use AI tools to generate wireframes from rough sketches. Build **synthetic user personas** that simulate customer feedback, letting students test positioning and product concepts against LLM-generated personas before writing code.\n\n**Technologies:** LLM foundational models (OpenAI, Anthropic, Gemini), image generation, prompt engineering"
        },
        {
          "title": "Agentic Systems",
          "content": "Move beyond chatbots to autonomous, goal-directed systems. Build servers that standardize agent connectivity. Design memory systems so agents maintain state across sessions. Shift from manual QA to **\"Evals\"** that test AI outputs against safety and quality guardrails.\n\n**Technologies:** MCP servers, LangChain, ReAct frameworks, vector databases, RAG pipelines, multi-agent orchestration"
        },
        {
          "title": "Agentic Development: From \"Vibing\" to Production",
          "content": "There is a gap between prompting ChatGPT and shipping production AI systems. Most tutorials stop at \"vibing,\" the casual, exploratory prompting that works in demos but fails in production. Students need to learn the hard parts: deterministic behavior, error handling, cost management, and integration with existing systems.\n\n<!-- @pullquote -->There is a gap between prompting ChatGPT and shipping production AI systems.<!-- /@pullquote -->\n\n**What I Teach:**\n\n-   **Development Best Practices:** How to use tools like Claude Code, Cursor, and Windsurf effectively. Writing CLAUDE.md files and AGENTS.md specifications that give AI agents the context they need. Prompt engineering that produces consistent, testable outputs.\n\n-   **Infrastructure Requirements:** Rate limiting, API gateway management, cost tracking, latency budgets. How to build systems that gracefully degrade when AI services fail. Caching strategies for expensive model calls.\n\n-   **Operational Changes:** AI development requires different workflows than traditional software. Students learn: how to review AI-generated code, when to trust agent outputs vs. verify them, how to debug systems where the logic is partially opaque.\n\n-   **Planning Tool Integration:** Connecting agents to project management systems (Linear, Jira, Asana), documentation platforms, and CI/CD pipelines. Building agents that understand your codebase through proper indexing and retrieval.\n\n-   **Agent Swarms & Orchestration:** When single agents are not enough, you coordinate multiple specialized agents that divide work, share context, and merge results. Handoff protocols, conflict resolution, and resource allocation.\n\n-   **Memory Systems:** Building procedural memory so agents learn from past interactions. Failure-to-success pattern detection, root cause analysis, and retrieval architectures that surface relevant context at the right time.\n\n**Technologies:** Claude Code, Cursor, Windsurf, API gateways, CI/CD integration"
        },
        {
          "title": "Context Engineering",
          "content": "AI agents fail when they run out of context. A 200k token window sounds large until your agent needs to understand a codebase, remember a conversation history, and execute a multi-step plan simultaneously. Context engineering is the discipline of managing what information agents have access to and when.\n\n**What I Teach:**\n\n-   **Long-Running Systems:** Agents that operate over hours or days, not single-turn interactions. Session management, state persistence, and graceful recovery from interruptions.\n\n-   **Deep Agents:** Building agents that can explore complex domains: reading documentation, navigating codebases, researching across multiple sources. These agents need strategies for prioritizing information and knowing when to stop.\n\n-   **Context Window Management:** Summarization strategies, dynamic context loading, and retrieval-augmented generation (RAG) that pulls relevant information on demand rather than stuffing everything into the prompt.\n\n-   **Hierarchical Context:** Some information is always relevant (system instructions, core identity). Some is session-specific. Some is task-specific. Students learn to structure context in layers that maximize utility while minimizing token waste.\n\n-   **Tool Design for Context:** Building MCP servers and tool interfaces that provide rich context to agents without overwhelming them. Pagination, filtering, and progressive disclosure patterns.\n\n**Technologies:** RAG architectures, context summarization, session state management, hierarchical prompt design"
        },
        {
          "title": "AI Infrastructure",
          "content": "Deploy AI systems on Day 1. Manage API gateways for rate limits, cost, and latency. Connect AI models to real-world data sources and device hardware. These are skills I use daily with clients and students.\n\n**Technologies:** React/TypeScript, serverless APIs, GCP, Websockets, real-time voice transcription, multimodal streaming"
        },
        {
          "title": "Entrepreneurship & Venture Dynamics",
          "content": "I have lived the full startup arc: from idea to Techstars to product-market fit to nine-figure exit. I can teach this from experience, not textbooks.\n\n**What I bring:** I founded Jiobit, raised venture capital, navigated hardware manufacturing, won SBIR contracts, scaled a team, and sold to a public company. I have sat on both sides of the table, as a founder raising money and as an investor evaluating deals. I serve on the Techstars Selection Committee, mentor at mHUB (hardtech) and iVenture Accelerator, and am an LP in four venture funds including LongJump (Chicago's most active pre-seed fund). I have invested in 20+ companies.\n\n**Topics:** Cap table structures, fundraising mechanics, term sheets, due diligence processes. How investors evaluate technical stacks and IP. When to build vs. buy. How to think about defensibility when AI commoditizes implementation. How to tell a story that raises money. How to build a company that people want to join and stay at."
        },
        {
          "title": "A Note on Applicability",
          "content": "While the examples above reference software, these skills transfer across engineering disciplines. AI is accelerating PCB design, materials discovery, clinical literature analysis, and structural optimization. Dean Schuh's own field has seen rapid adoption of machine learning for alloy design. The core skills—judgment about what to build, fluency with AI tools, and translation between technical capability and human need—prepare engineers for any field where AI is reshaping practice.\n\n---"
        }
      ]
    },
    {
      "number": 5,
      "title": "Why Me",
      "intro": "<!-- @credentials -->\n<!-- @credential value=\"9+\" label=\"U.S. Patents\" -->\n<!-- @credential value=\"300K+\" label=\"Lines of Code\" -->\n<!-- @credential value=\"20+\" label=\"Companies Invested\" -->\n<!-- @credential value=\"13\" label=\"GitHub Repos\" -->\n<!-- @credential value=\"4\" label=\"VC Fund LP\" -->\n<!-- @credential value=\"12-week\" label=\"Corporate AI Curriculum\" -->\n<!-- /@credentials -->\n\nI am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams. I have held VP and General Manager responsibilities at Google and Motorola. I co-founded Jiobit, a wearable tech startup acquired by Life360 (NASDAQ: LIF) in 2021. I operate fluently across executive strategy and hands-on building. My consulting clients range from C-suite executives to senior engineers. My corporate workshops serve entry-level engineers through product directors. I teach MBAs at Kellogg and engineers at McCormick. I serve on AI advisory boards for Menlo Ventures and Techstars. This range is rare.\n\n| Profile Requirement | My Experience |\n|---------------------|---------------|\n| Executive credibility | VP/GM at Google and Motorola; led cross-functional teams at scale |\n| Hands-on builder | Ship production AI systems daily; 13 GitHub repos; MCP servers on npm |\n| Startup experience | Founded Jiobit → nine-figure exit to Life360 (NASDAQ: LIF) |\n| Design fluency | Led UX Research, UI/UX Design teams at Google; design-centric at Motorola |\n| Industry connectivity | Techstars Selection Committee; LP in 4 VC funds; 20+ angel investments |\n| Teaching experience | McCormick, Kellogg, UIUC; corporate training entry-level to executive |",
      "subsections": [
        {
          "title": "The Hands-On Work: What I Build Today",
          "content": "My most intensive building has happened after Google. I am not a manager who \"used to code.\" I write production systems daily:\n\n-   **MCP Servers & Multi-Agent Orchestration:** I build and publish **Model Context Protocol servers** to npm, enabling AI agents to connect with external services. I build multi-agent systems using **LangChain, n8n**, and **ReAct frameworks** that coordinate across foundational models (Gemini, OpenAI, Anthropic, Cohere). I have built systems that stream real-time meeting transcripts via **Websockets** and **Assembly AI**, enabling agents to act during live calls.\n\n-   **Full-Stack AI Infrastructure:** I work across the modern AI stack: **vector databases (PGVector)**, **semantic search with embeddings**, **full-text search (BM25)**, **Cohere reranking**, **Agentic RAG pipelines**, and **LLM chaining with reflection loops**. I build in **React/TypeScript** with **serverless APIs** and integrate tools like **Firecrawl** and **Tavily** for deep research agents. I have built **browser automation agents**, content graders with scoring rubrics, and custom HTML email generation systems.\n\n-   **Live Multimodal AI:** I build systems that process voice, text, and images in real-time, connecting AI agents to device hardware and sensor data.\n\n-   **Synthetic User Platforms:** I built a synthetic user system that simulates customer feedback using LLM-generated personas. The platform uses **graph databases and knowledge graphs** to model user relationships and context, with **self-learning loops** that refine persona accuracy based on research validation. This is an example of the new AI workflows reshaping product development.\n\n-   **Agentic Procedural Memory:** I designed and built an **Agentic Procedural Memory System** that enables AI agents to learn from their own experiences. The system detects failure-to-success patterns in tool usage, performs automated root cause analysis, and stores reusable procedures in a **hybrid search architecture** (vector embeddings + BM25 full-text search with Reciprocal Rank Fusion). Agents using this system show **50% step reduction** and **95%+ success rates** on similar tasks. This work builds directly on recent research from Zhejiang University and Alibaba. [17]\n\n-   **Client Work & Executive Advisory:** I consult directly with public company CTOs and CEOs on AI strategy, and run hands-on design workshops with their development teams. This means reviewing AI proposals, debugging architectures, and pairing with senior engineers to ship production code. I build alongside the teams I teach.\n\n-   **Corporate Training:** Through my consulting firm, I run a **12-week curriculum** that upskills engineers, product managers, and designers into proficient AI practitioners. Participants leave implementing AI into their products and operations. My workshops span entry-level engineers to product directors.\n\n-   **Published Research:** I publish original technical research on AI agent architectures. A recent investigation reverse-engineered Claude Code's API requests and identified an implementation flaw: skill instructions were being injected as user messages (low authority) rather than in the system prompt (high authority), explaining why Vercel's benchmarks showed only 53% pass rates. [23] This kind of deep technical analysis is what I bring to both clients and students.\n\n-   **Open Source:** I maintain 13 public repositories on GitHub (github.com/jrenaldi79), including MCP servers, agent frameworks, and prompt engineering collections."
        },
        {
          "title": "Teaching & Academic Leadership",
          "content": "I teach at **McCormick (Segal)**, **Kellogg**, and **University of Illinois** (Applied AI), working across engineering and business at multiple institutions. My courses integrate AI into design thinking and product development, including building custom agents and incorporating synthetic users into research. I led **Northwestern's Business Innovation Lab (Winter 2025)** in partnership with **Google DeepMind** and served as a key panelist at **Kearney's 2024 Executive Panel on AI in Product Design**.\n\nI work alongside **Jim Wicks** (Segal Design Institute founder) and **Mike Edmonds** (Microsoft) in the classroom. My philosophy in the **MPD² program**: outcomes over outputs. I teach students to be **\"missionaries, not mercenaries.\"**"
        },
        {
          "title": "Curriculum-Advancing Work",
          "content": "Clinical faculty focus on teaching, not traditional academic research with publication requirements. My work aligns with this model while still advancing the curriculum in measurable ways.\n\n**Testing new methods:** I pilot AI tools and workflows in real courses and corporate training programs before they become mainstream. My 12-week corporate curriculum has been iterated across multiple cohorts, identifying what works and what does not. This applied testing informs what I bring to McCormick students.\n\n**Developing evaluation frameworks:** My work on agentic procedural memory, synthetic user validation, and Claude Code architecture analysis creates benchmarks and evaluation methods that inform pedagogy. Understanding how AI systems fail is as important as understanding how they succeed.\n\n**Building reusable assets:** The MCP servers, agent frameworks, and prompt engineering collections I maintain on GitHub become teaching resources. Students learn from production code, not toy examples.\n\n**Industry feedback loops:** My consulting work with public company CTOs and startup founders provides continuous signal on what skills employers need. This feedback shapes curriculum in near real-time, not on academic publication timelines.\n\nThis is not traditional research, but it is rigorous, iterative work that directly improves teaching effectiveness."
        },
        {
          "title": "What a Clinical Appointment Enables",
          "content": "I currently teach at McCormick through adjunct and visiting arrangements. A clinical faculty appointment changes what is possible.\n\n**Curriculum design authority:** Clinical faculty can propose new courses, shape program requirements, and influence how AI-augmented methods are integrated across the curriculum. Adjunct instructors teach assigned courses; clinical faculty help design them.\n\n**Institutional commitment:** A formal appointment signals long-term investment, both from McCormick and from me. Students benefit from continuity. Industry partners see a stable point of contact. The curriculum can evolve over multiple years rather than being renegotiated each term.\n\n**Deeper student mentorship:** Clinical faculty advise students, supervise projects, and build relationships that extend beyond a single course. This mentorship is where much of the real learning happens.\n\n**Program development:** With a clinical appointment, I can work with department chairs and other faculty to integrate Product Engineer concepts into existing programs, not just teach standalone courses. The goal is systemic curriculum enhancement, not a single elective."
        },
        {
          "title": "The Self-Taught Path",
          "content": "I do not have a traditional engineering degree. I have a BS in Marketing from Illinois. I taught myself to code.\n\nAnd yet:\n- I architected sensor fusion systems trusted by federal agencies\n- I drove the technical IP for low-power embedded systems, working directly with EE and firmware engineers\n- I personally wrote **300,000+ lines of code** building Jiobit's first ecommerce platform\n- I lead engineering, design, and product teams at Google\n- I built technology that sold for tens of millions\n\n**I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials.** When AI makes technical ability more accessible, learning fast matters more than pedigree.\n\n<!-- @pullquote -->I model what we want students to become: someone who learns skills to solve problems, not someone who waits for credentials.<!-- /@pullquote -->\n\n<!-- @timeline -->\n<!-- @entry year=\"Current\" company=\"Google\" title=\"Global Wearable Software Lead\" highlight=\"true\" -->\nLead Design, UXR, Product, and Engineering for wearable software and health platforms. Spearheaded AI innovation product teams.\n<!-- /@entry -->\n<!-- @entry year=\"2021\" company=\"Jiobit\" title=\"Acquired by Life360\" highlight=\"true\" -->\nNine-figure exit (NASDAQ: LIF). All 25 employees joined Life360. Built encryption trusted by federal agencies.\n<!-- /@entry -->\n<!-- @entry year=\"2015\" company=\"Jiobit\" title=\"Founded\" highlight=\"false\" -->\nBuilt sensor fusion systems, 9+ patents. Packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device.\n<!-- /@entry -->\n<!-- @entry year=\"2011\" company=\"Motorola/Google\" title=\"VP Global eCommerce\" highlight=\"false\" -->\nCreated Moto Maker. 10x YoY growth, 50% fewer returns, Webby Awards, Best of CES, Red Dot Design Award.\n<!-- /@entry -->\n<!-- /@timeline -->"
        },
        {
          "title": "Jiobit (0 to 1)",
          "content": "I founded Jiobit after briefly losing my son in a crowded Chicago park. *\"I believe no parent should experience that panic.\"* We built a device with encryption strong enough to be **trusted by federal government and law enforcement** for sensitive location tracking—security as an architectural decision.\n\nThe hardware was hard: we packed Cellular, GPS, Wi-Fi, and BLE into a cookie-sized device. As I told *Inventors Digest*: *\"For any of this to work... we had to nail this custom system architecture and the sensor fusion technology.\"* I am named inventor on **9+ issued U.S. patents** covering location tracking, power management, and machine learning systems.\n\nThe outcome: SBIR Phase II Award (Air Force) [21], 200% YoY revenue growth, sold out in the 2018 holiday season, and acquired by **Life360 (NASDAQ: LIF)** in a deal that appreciated to **nine figures**. All 25 employees joined Life360 after the deal. [18][19]"
        },
        {
          "title": "Motorola (Research to Practice)",
          "content": "I created **Moto Maker**, the first direct-to-consumer, built-to-order smartphone. It connected a website to the factory floor with **2,000+ permutations** shipping in **4 days or less**.\n\nWhen early versions had too many choices, I applied HBR research on the \"Paradox of Choice\" [15] and \"IKEA Effect\" [16]: *\"If you have a hand in creating something, your affinity for that product goes through the roof. Labor creates love.\"* We curated options, reduced anxiety, and increased engagement. As VP of Global eCommerce, we achieved **10x YoY growth**, **50% fewer product returns**, and won **Webby Awards**, **Best of CES**, and the **Red Dot Design Award**."
        },
        {
          "title": "Google (Current)",
          "content": "I serve as **Global Wearable Software Lead** for design, product, and research on wearable software and health platforms. I spearheaded **one of the first AI innovation product teams within Google Android** and served as the **original product lead for an internal consumer multi-agent orchestration system** designed for building coding agents. I have contributed intellectual property and led product teams developing machine learning algorithms for fitness, power management, and location services.\n\nI lead teams across **Design, UXR, Product, and Engineering (Firmware to Cloud)**. I know how to take prototype code and scale it globally. My time at **Deloitte** building enterprise web applications gave me discipline in requirements gathering and delivery."
        },
        {
          "title": "Industry Visibility",
          "content": "My investing and ecosystem work (detailed in Section 4) give me a unique vantage point—I see where the industry is heading **8 to 16 months before it becomes mainstream**. That foresight shapes my curriculum. As a UIUC alumnus and founding member of **Illini Angels**, I can position McCormick as a talent pipeline for Chicago tech.\n\n---"
        }
      ]
    },
    {
      "number": 6,
      "title": "What Others Say",
      "intro": "<!-- @testimonials type=\"leadership\" -->\n<!-- @testimonial author=\"Logan LaHive\" title=\"Managing Director, Techstars Chicago\" -->\nFOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.\n<!-- /@testimonial -->\n<!-- @testimonial author=\"Lior Ron\" title=\"Founder of Uber Freight, Former Moto/Google Executive\" -->\nJohn is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.\n<!-- /@testimonial -->\n<!-- @testimonial author=\"Jake Phillips\" title=\"Sr. Director, Reality Labs Accessories at Meta\" subtitle=\"reported to John\" -->\nIn many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.\n<!-- /@testimonial -->\n<!-- @testimonial author=\"Matt Vokoun\" title=\"Google VP, Strategy, Business Operations, Product Management\" -->\nJohn is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.\n<!-- /@testimonial -->\n<!-- /@testimonials -->\n\n-   **Logan LaHive**, Managing Director, Techstars Chicago:\n    *\"FOUNDERS: This means if you are accepted, you get to work with and learn from JOHN RENALDI. One of the absolute best founders, mentors, workshop leaders, and connectors out there. Truly one of a kind.\"*\n\n-   **Lior Ron**, Founder of Uber Freight, Former Moto/Google Executive:\n    *\"John is obsessed with understanding customer needs and can rally great technical talent around solving real user problems... I've seen John balance that successfully again and again.\"*\n\n-   **Jake Phillips**, Sr. Director, Reality Labs Accessories at Meta (reported to John):\n    *\"In many leaders, you tend to see that they are naturally adept at being the visionary OR the problem solver. John is unique in that he is very capable of both. He can quickly switch modes from diving into the smallest, most technical details to setting an innovative vision for the team. He empowers his employees but is also in the trenches to navigate challenges and pressure test their perspectives. He genuinely cares about the how and the why. All that said, John's superpower is his ability to influence people. He builds strong relationships and leads in a way that people are drawn to following.\"*\n\n-   **Matt Vokoun**, Google VP, Strategy, Business Operations, Product Management:\n    *\"John is a fantastic product manager and leader. He was the main engine behind Moto Maker which was one of the biggest industry innovations that Motorola launched when Google owned them. Fantastic cross-functional leadership and HUGE impact on the company.\"*",
      "subsections": [
        {
          "title": "On Teaching & Workshops",
          "content": "<!-- @testimonials type=\"teaching\" -->\n<!-- @testimonial author=\"John Minor\" title=\"Chief Product Officer, PayNearMe\" -->\nJohn's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.\n<!-- /@testimonial -->\n<!-- @testimonial author=\"Lauren Antonoff\" title=\"CEO, Life360\" -->\nI finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!\n<!-- /@testimonial -->\n<!-- @testimonial author=\"Sr. Product Manager\" title=\"PayNearMe\" -->\nThank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!\n<!-- /@testimonial -->\n<!-- /@testimonials -->\n\n<!-- @testimonials type=\"students\" source=\"Kellogg\" -->\n<!-- @testimonial -->\nThe course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.\n<!-- /@testimonial -->\n<!-- @testimonial -->\nYou really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.\n<!-- /@testimonial -->\n<!-- @testimonial -->\nAmazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.\n<!-- /@testimonial -->\n<!-- @testimonial -->\nI come from a non-technical background but was surprised I kept up!\n<!-- /@testimonial -->\n<!-- /@testimonials -->\n\n-   **John Minor**, Chief Product Officer, PayNearMe:\n    *\"John's workshops are great! The instructional content is incredibly clear, practical, and perfectly tailored for product professionals. His expertise in both AI and product thinking shines through, and his delivery is super captivating, infused with powerful enthusiasm and passion. We've already witnessed actionable improvements in our teams, as they've already started integrating these concepts to boost productivity and inspire new innovations on our roadmap.\"*\n\n-   **Lauren Antonoff**, CEO, Life360:\n    *\"I finally understand what is happening when the LLM starts to show up like a failing student and what to do about it! JR, your passion for AI and your students shines!\"*\n\n-   **Sr. Product Manager**, PayNearMe:\n    *\"Thank you so much for the AI Product course. I hate to admit that your prediction was right: we do feel like we're capable of building things on our own now after completing your class!\"*\n\n-   **Kellogg Students:**\n    - *\"The course provides a comprehensive overview of Agentic AI and how it works. Highly recommended for anyone interested in learning the technology beyond the basics.\"*\n    - *\"You really understand what generative AI is and how it works, plus what kind of problems and tasks it would be good at versus struggle with. 5 out of 5 stars.\"*\n    - *\"Amazingly captivating speaker with relevant, up to date subject-matter. Clearly communicated and very engaging.\"*\n    - *\"I come from a non-technical background but was surprised I kept up!\"*\n\n---"
        }
      ]
    },
    {
      "number": 7,
      "title": "The Path Forward",
      "intro": "The \"Product Engineer\" is the future. McCormick can lead in teaching it.\n\nI bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going. I build AI products at Google, with clients, and with students every day.\n\nI look forward to discussing next steps.\n\n---",
      "subsections": []
    }
  ],
  "citations": [
    "[1] Anthropic. \"How AI Is Transforming Work at Anthropic.\" *Anthropic Research Blog*, December 2, 2025. https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic",
    "[2] Orosz, Gergely. \"How Claude Code is Built.\" *The Pragmatic Engineer*, September 23, 2025. https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built",
    "[3] Zieminski, Karol. \"Anthropic Shipped Claude Cowork in 10 Days Using Its Own AI.\" *Product with Attitude*, January 13, 2026. https://karozieminski.substack.com/p/claude-cowork-anthropic-product-deep-dive",
    "[4] Stack Overflow. \"2025 Developer Survey: AI.\" 2025. https://survey.stackoverflow.co/2025/ai",
    "[5] Peng, Sida; Kalliamvakou, Eirini; Cihon, Peter; and Demirer, Mert. \"The Impact of AI on Developer Productivity: Evidence from GitHub Copilot.\" *Microsoft Research*, February 2023. arXiv:2302.06590. https://arxiv.org/pdf/2302.06590",
    "[6] McKinsey & Company. \"Unlocking the Value of AI in Software Development.\" *McKinsey Digital*, November 3, 2025. https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/unlocking-the-value-of-ai-in-software-development",
    "[7] Mollick, Ethan. \"Management as AI Superpower.\" *One Useful Thing* (Substack), January 27, 2026. https://www.oneusefulthing.org/p/management-as-ai-superpower",
    "[8] Karpathy, Andrej. X (Twitter) post on AI programming, December 26, 2025. https://x.com/karpathy/status/2004607146781278521",
    "[9] Huang, Jensen. Keynote address at London Tech Week, June 9, 2025. Reported by CNBC. https://www.cnbc.com/2025/06/09/we-train-ai-like-humans-now-nvidia-jensen-huang-says-.html",
    "[10] Nadella, Satya and Zuckerberg, Mark. Remarks at Meta LlamaCon, April 29, 2025. Reported by CNBC and GeekWire. https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html",
    "[11] Balazinska, Magdalena. \"Coding is Dead: UW Computer Science Program Rethinks Curriculum for the AI Era.\" *GeekWire*, July 10, 2025. https://www.geekwire.com/2025/coding-is-dead-uw-computer-science-program-rethinks-curriculum-for-the-ai-era/",
    "[12] Seth, Deepak (Gartner) and Atahan, Bekir (Experis/ManpowerGroup). \"What AI Skills Job Seekers Need to Develop in 2026.\" *Computerworld*, January 19, 2026. https://www.computerworld.com/article/4117602/what-ai-skills-job-seekers-need-to-develop-in-2026.html",
    "[13] National Association of Colleges and Employers (NACE). \"Job Outlook 2025.\" December 9, 2024. https://www.naceweb.org/talent-acquisition/candidate-selection/what-are-employers-looking-for-when-reviewing-college-students-resumes",
    "[14] Sacra Research and ARR Club. \"Bolt.new ARR Hit $40M in 5 Months.\" 2025. https://sacra.com/c/bolt-new/",
    "[15] Schwartz, Barry. \"More Isn't Always Better.\" *Harvard Business Review*, June 2006. https://hbr.org/2006/06/more-isnt-always-better",
    "[16] Norton, Michael I.; Mochon, Daniel; and Ariely, Dan. \"The IKEA Effect: When Labor Leads to Love.\" *Harvard Business School Working Paper* 11-091. https://www.hbs.edu/ris/Publication%20Files/11-091.pdf",
    "[17] Fang, Ruochen et al. \"Memp: Exploring Agent Procedural Memory.\" Zhejiang University and Alibaba Group, August 2025. arXiv:2508.06433. https://arxiv.org/abs/2508.06433",
    "[18] Life360 ASX Announcement. \"Proposed Acquisition of Jiobit.\" April 27, 2021. https://www.asx.com.au/asxpdf/20210427/pdf/44vw8t5kt43wqg.pdf",
    "[19] TechCrunch. \"Family tracking app Life360 to acquire wearable location device Jiobit for $37M.\" April 27, 2021. https://techcrunch.com/2021/04/27/family-tracking-app-life360-to-acquire-wearable-location-device-jiobit-for-37m/",
    "[20] Jiobit Blog. \"Winner of 17th Annual Chicago Innovation Awards.\" October 29, 2019. https://www.jiobit.com/blog/jiobit-named-winner-of-17th-annual-chicago-innovation-awards",
    "[21] Jiobit Blog. \"SBIR Phase II Award from U.S. Air Force.\" August 21, 2019. https://www.jiobit.com/blog/jiobit-receives-sbir-phase-ii-award-from-us-air-force",
    "[22] USPTO Patent Records: US 10,172,109; US 10,158,971; US 9,980,087; US 10,064,002; and related JIO, Inc. and Tile, Inc. filings. https://patents.justia.com/assignee/tile-inc",
    "[23] Vercel Engineering. \"AGENTS.md Outperforms Skills in Our Agent Evals.\" *Vercel Blog*, January 27, 2026. https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals",
    "[24] Northwestern University Segal Design Institute. \"John Renaldi Faculty Profile.\" https://design.northwestern.edu/people/profiles/renaldi-john.html"
  ]
};



// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * RichText Component
 * Parses markdown-style formatting into React elements
 */


const RichText = ({ children, className = '' }) => {
  if (!children || typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const parseText = (text) => {
    const elements = [];
    let key = 0;

    // Simple sequential parsing - process bold first, then italic
    let result = text;

    // Replace bold first (** **) - must come before italic
    result = result.replace(/\*\*([^*]+)\*\*/g, '___BOLD_START___$1___BOLD_END___');

    // Replace italic (* *) - simple version without lookbehind
    // This regex matches single asterisks that aren't part of bold markers
    result = result.replace(/\*([^*_]+)\*/g, '___ITALIC_START___$1___ITALIC_END___');

    // Replace links
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '___LINK_START___$1___LINK_SEP___$2___LINK_END___');

    // Replace citations
    result = result.replace(/\[(\d+)\]/g, '___CITE_START___$1___CITE_END___');

    // Now parse the marked string into React elements
    const parts = result.split(/(___[A-Z_]+___)/);

    let inBold = false;
    let inItalic = false;
    let linkText = '';
    let linkUrl = '';
    let inLink = false;
    let inLinkUrl = false;
    let citeNum = '';
    let inCite = false;

    parts.forEach((part) => {
      if (part === '___BOLD_START___') {
        inBold = true;
      } else if (part === '___BOLD_END___') {
        inBold = false;
      } else if (part === '___ITALIC_START___') {
        inItalic = true;
      } else if (part === '___ITALIC_END___') {
        inItalic = false;
      } else if (part === '___LINK_START___') {
        inLink = true;
        linkText = '';
      } else if (part === '___LINK_SEP___') {
        inLinkUrl = true;
        linkUrl = '';
      } else if (part === '___LINK_END___') {
        elements.push(
          <a key={key++} href={linkUrl} className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        );
        inLink = false;
        inLinkUrl = false;
      } else if (part === '___CITE_START___') {
        inCite = true;
        citeNum = '';
      } else if (part === '___CITE_END___') {
        elements.push(
          <sup key={key++} className="text-indigo-600 cursor-pointer hover:text-indigo-800 ml-0.5">
            [{citeNum}]
          </sup>
        );
        inCite = false;
      } else if (part) {
        if (inCite) {
          citeNum = part;
        } else if (inLink && !inLinkUrl) {
          linkText = part;
        } else if (inLinkUrl) {
          linkUrl = part;
        } else if (inBold) {
          elements.push(<strong key={key++}>{part}</strong>);
        } else if (inItalic) {
          elements.push(<em key={key++}>{part}</em>);
        } else {
          elements.push(part);
        }
      }
    });

    return elements;
  };

  return <span className={className}>{parseText(children)}</span>;
};

/**
 * Header Component
 * Displays the proposal header with metadata and hero section
 */


const Header = ({ data }) => {
  const { to, toTitle, from, fromEmail, headshot, date, title, subtitle } = data;

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 py-16">
        {/* Meta info */}
        <div className="flex items-start justify-between mb-12">
          <div className="space-y-1 text-slate-300 text-sm">
            <p><span className="text-slate-500">TO:</span> {to}</p>
            <p className="text-slate-400 text-xs ml-8">{toTitle}</p>
            <p className="mt-2"><span className="text-slate-500">FROM:</span> {from}</p>
            <p><span className="text-slate-500">DATE:</span> {date}</p>
          </div>
          {headshot && (
            <img
              src={headshot}
              alt={from}
              className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
            />
          )}
        </div>

        {/* Title */}
        <div className="space-y-4">
          <p className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Proposal for Clinical Faculty Appointment
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </div>
    </header>
  );
};

/**
 * StatsGrid Component
 * Displays a grid of statistics with visual emphasis
 */


const StatsGrid = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b" />

            {/* Value */}
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
              {stat.value}
            </div>

            {/* Label */}
            <div className="text-sm font-medium text-slate-700 mb-1">
              {stat.label}
            </div>

            {/* Source */}
            {stat.source && (
              <div className="text-xs text-slate-500 italic">
                {stat.source}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Chart Component
 * Renders various chart types: growth, bar, hierarchy, range
 */


// Growth Chart - Line/area chart showing change over time
const GrowthChart = ({ data }) => {
  const { title, subtitle, series } = data;

  // Calculate max value for scaling
  const allValues = series.flatMap(s => s.points.map(p => p.value));
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues);

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4'];

  return (
    <div className="my-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="relative h-48">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-slate-500">
          <span>{maxValue}%</span>
          <span>{Math.round((maxValue + minValue) / 2)}%</span>
          <span>{minValue}%</span>
        </div>

        {/* Chart area */}
        <div className="ml-14 relative h-40">
          {series.map((s, si) => (
            <div key={si} className="absolute inset-0 flex items-end justify-around">
              {s.points.map((point, pi) => {
                const height = ((point.value - minValue) / (maxValue - minValue)) * 100;
                return (
                  <div key={pi} className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="w-3/4 max-w-16 rounded-t-lg transition-all duration-500"
                      style={{
                        height: `${height}%`,
                        backgroundColor: colors[si],
                        opacity: 0.8 + (pi * 0.1)
                      }}
                    />
                    <span className="text-xs text-slate-600 font-medium">{point.value}%</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* X-axis labels */}
        <div className="ml-14 flex justify-around text-xs text-slate-500 mt-2">
          {series[0]?.points.map((point, i) => (
            <span key={i}>{point.year}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {series.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: colors[i] }} />
            <span className="text-sm text-slate-600">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Bar Chart - Horizontal bar chart for comparisons
const BarChart = ({ data }) => {
  const { title, subtitle, bars } = data;
  const maxValue = Math.max(...bars.map(b => b.value));

  return (
    <div className="my-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="space-y-4">
        {bars.map((bar, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">{bar.label}</span>
              <span className="text-sm font-bold text-indigo-600">
                {bar.value}{bar.unit}
              </span>
            </div>
            <div className="h-6 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                style={{ width: `${(bar.value / maxValue) * 100}%` }}
              />
            </div>
            {bar.source && (
              <div className="text-xs text-slate-500 mt-1">
                {bar.source}
                {bar.cite && <sup className="text-indigo-500 ml-0.5">[{bar.cite}]</sup>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Hierarchy Chart - Arrow/flow diagram showing transformation
const HierarchyChart = ({ data }) => {
  const { title, subtitle, levels } = data;

  return (
    <div className="my-8 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="space-y-3">
        {levels.map((level, i) => (
          <div key={i} className="flex items-center justify-center gap-4">
            <div className="flex-1 text-right">
              <span className="inline-block bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium">
                {level.from}
              </span>
            </div>
            <div className="flex-shrink-0 text-indigo-500">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                {level.to}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Range Chart - Range/salary band visualization
const RangeChart = ({ data }) => {
  const { title, subtitle, ranges } = data;
  const allValues = ranges.flatMap(r => [r.min, r.max]);
  const minVal = Math.min(...allValues);
  const maxVal = Math.max(...allValues);

  return (
    <div className="my-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>

      <div className="space-y-4">
        {ranges.map((range, i) => {
          const leftPercent = ((range.min - minVal) / (maxVal - minVal)) * 100;
          const widthPercent = ((range.max - range.min) / (maxVal - minVal)) * 100;

          return (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">{range.label}</span>
                <span className="text-sm text-slate-500">
                  ${range.min}{range.unit} - ${range.max}{range.unit}
                </span>
              </div>
              <div className="h-8 bg-slate-100 rounded-lg relative">
                <div
                  className={`absolute h-full rounded-lg transition-all duration-500 ${
                    range.highlight
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                      : 'bg-gradient-to-r from-slate-400 to-slate-500'
                  }`}
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Scale */}
      <div className="flex justify-between text-xs text-slate-500 mt-3">
        <span>${minVal}k</span>
        <span>${maxVal}k</span>
      </div>
    </div>
  );
};

// Main Chart component - routes to appropriate chart type
const Chart = ({ type, data }) => {
  switch (type) {
    case 'growth':
      return <GrowthChart data={data} />;
    case 'bar':
      return <BarChart data={data} />;
    case 'hierarchy':
      return <HierarchyChart data={data} />;
    case 'range':
      return <RangeChart data={data} />;
    default:
      return null;
  }
};

/**
 * Convergence Component
 * Shows role convergence diagram with animated arrows
 */


const Convergence = ({ roles }) => {
  if (!roles || roles.length === 0) return null;

  const roleColors = {
    'PMs': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    'Designers': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
    'Engineers': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' },
  };

  const targetColors = {
    'Engineering': { bg: 'bg-blue-600', text: 'text-white' },
    'Eng & PM': { bg: 'bg-purple-600', text: 'text-white' },
    'Product': { bg: 'bg-emerald-600', text: 'text-white' },
  };

  return (
    <div className="my-10 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 border border-slate-200">
      <h4 className="text-center text-lg font-semibold text-slate-800 mb-8">
        The Convergence: Roles Are Merging
      </h4>

      <div className="space-y-6">
        {roles.map((role, i) => {
          const fromColor = roleColors[role.from] || { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' };
          const toColor = targetColors[role.to] || { bg: 'bg-indigo-600', text: 'text-white' };

          return (
            <div key={i} className="flex items-center gap-4">
              {/* From role */}
              <div className={`flex-shrink-0 w-28 px-4 py-3 rounded-lg border-2 ${fromColor.bg} ${fromColor.text} ${fromColor.border} font-semibold text-center`}>
                {role.from}
              </div>

              {/* Arrow and description */}
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-slate-300 to-indigo-400" />
                <svg className="w-6 h-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* To role */}
              <div className={`flex-shrink-0 w-28 px-4 py-3 rounded-lg ${toColor.bg} ${toColor.text} font-semibold text-center shadow-md`}>
                {role.to}
              </div>
            </div>
          );
        })}
      </div>

      {/* Descriptions */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {roles.map((role, i) => (
          <div key={i} className="text-center px-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * QuoteCarousel Component
 * Displays quotes in a scrollable carousel format
 */


const QuoteCarousel = ({ quotes }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!quotes || quotes.length === 0) return null;

  return (
    <div className="my-10 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-8 text-white">
      <h4 className="text-center text-lg font-medium text-indigo-300 mb-8">
        What Industry Leaders Are Saying
      </h4>

      {/* Quote display */}
      <div className="relative min-h-[200px]">
        {quotes.map((quote, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            {/* Quote icon */}
            <div className="text-center mb-6">
              <svg className="w-12 h-12 mx-auto text-indigo-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote text */}
            <blockquote className="text-xl md:text-2xl text-center font-light leading-relaxed mb-6 px-4">
              "{quote.quote}"
            </blockquote>

            {/* Attribution */}
            <div className="text-center">
              <p className="font-semibold text-white">{quote.author}</p>
              <p className="text-indigo-300 text-sm">{quote.title}</p>
              {quote.cite && (
                <p className="text-indigo-400 text-xs mt-1">[{quote.cite}]</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-8">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex
                ? 'bg-indigo-400 w-8'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`View quote ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setActiveIndex(i => (i - 1 + quotes.length) % quotes.length)}
          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Previous quote"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setActiveIndex(i => (i + 1) % quotes.length)}
          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Next quote"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/**
 * PullQuote Component
 * A featured/highlighted quote for visual emphasis
 */


const PullQuote = ({ children, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left border-l-4 pl-6',
    center: 'text-center border-l-0',
    right: 'text-right border-r-4 pr-6',
  };

  return (
    <aside className={`my-10 py-8 px-6 ${alignmentClasses[align]} border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg`}>
      <blockquote className="relative">
        {/* Opening quote mark */}
        <span className="absolute -top-4 -left-2 text-6xl text-indigo-200 font-serif leading-none">
          "
        </span>

        {/* Quote text */}
        <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed italic relative z-10">
          {children}
        </p>

        {/* Closing quote mark */}
        <span className="absolute -bottom-8 right-0 text-6xl text-indigo-200 font-serif leading-none">
          "
        </span>
      </blockquote>
    </aside>
  );
};

/**
 * CardGrid Component
 * Displays cards in a grid layout with different styles based on type
 */



// Icon library (simple SVG icons)
const icons = {
  briefcase: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  rocket: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  palette: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  network: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  graduation: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
};

// Profile Card - Icon + title + description
const ProfileCard = ({ card }) => {
  const icon = icons[card.icon] || icons.lightbulb;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
        {icon}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-slate-800 mb-2">{card.title}</h4>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed">
        <RichText>{card.content}</RichText>
      </p>
    </div>
  );
};

// Feature Card - Larger with more emphasis
const FeatureCard = ({ card }) => {
  const icon = icons[card.icon] || icons.zap;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-8 shadow-sm">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-lg font-bold text-slate-800 mb-3">{card.title}</h4>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed">
        <RichText>{card.content}</RichText>
      </p>
    </div>
  );
};

// Topic Card - For expandable teaching topics
const TopicCard = ({ card, isExpanded, onToggle }) => {
  const icon = icons[card.icon] || icons.lightbulb;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h4 className="font-semibold text-slate-800 flex-1">{card.title}</h4>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">
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

  const colsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  const renderCard = (card, index) => {
    switch (type) {
      case 'feature':
        return <FeatureCard key={index} card={card} />;
      case 'topic':
        return (
          <TopicCard
            key={index}
            card={card}
            isExpanded={expandedIndex === index}
            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        );
      case 'profile':
      default:
        return <ProfileCard key={index} card={card} />;
    }
  };

  return (
    <div className={`my-8 grid gap-6 ${type === 'topic' ? '' : colsClass}`}>
      {cards.map((card, i) => renderCard(card, i))}
    </div>
  );
};

/**
 * Credentials Component
 * Displays credential badges in a compact, visual format
 */


const Credentials = ({ credentials }) => {
  if (!credentials || credentials.length === 0) return null;

  return (
    <div className="my-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8">
      <h4 className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">
        At a Glance
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {credentials.map((cred, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              {cred.value}
            </div>
            <div className="text-sm text-slate-400">
              {cred.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Timeline Component
 * Displays career timeline with highlighted entries
 */



const Timeline = ({ entries }) => {
  if (!entries || entries.length === 0) return null;

  return (
    <div className="my-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-300" />

        {/* Entries */}
        <div className="space-y-8">
          {entries.map((entry, i) => (
            <div key={i} className="relative pl-20">
              {/* Year marker */}
              <div className={`absolute left-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg ${
                entry.highlight
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                  : 'bg-white border-2 border-slate-200 text-slate-600'
              }`}>
                {entry.year}
              </div>

              {/* Content card */}
              <div className={`rounded-xl p-6 ${
                entry.highlight
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'
                  : 'bg-slate-50 border border-slate-200'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-slate-800">{entry.title}</h4>
                    <p className="text-sm text-slate-500">{entry.company}</p>
                  </div>
                  {entry.highlight && (
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      Key Milestone
                    </span>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <RichText>{entry.content}</RichText>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Testimonials Component
 * Displays testimonial cards with different layouts based on type
 */


// Leadership testimonials - larger, more prominent
const LeadershipTestimonials = ({ testimonials }) => (
  <div className="my-10 space-y-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-6">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            {t.author?.charAt(0) || '?'}
          </div>

          <div className="flex-1">
            {/* Quote */}
            <blockquote className="text-slate-700 leading-relaxed mb-4 text-lg">
              "{t.content}"
            </blockquote>

            {/* Attribution */}
            <div>
              <p className="font-semibold text-slate-800">{t.author}</p>
              <p className="text-sm text-slate-500">{t.title}</p>
              {t.subtitle && (
                <p className="text-xs text-slate-400 italic">{t.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Teaching testimonials - medium size, professional
const TeachingTestimonials = ({ testimonials }) => (
  <div className="my-10 grid md:grid-cols-2 gap-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 p-6">
        {/* Quote */}
        <blockquote className="text-slate-700 leading-relaxed mb-4">
          "{t.content}"
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
            {t.author?.charAt(0) || '?'}
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">{t.author}</p>
            <p className="text-xs text-slate-500">{t.title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Student testimonials - compact, grid layout
const StudentTestimonials = ({ testimonials, source }) => (
  <div className="my-10 bg-slate-50 rounded-2xl p-8 border border-slate-200">
    {source && (
      <h4 className="text-center text-sm font-medium text-slate-500 mb-6">
        Student Feedback — {source}
      </h4>
    )}

    <div className="grid md:grid-cols-2 gap-4">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          {/* Quote icon */}
          <svg className="w-6 h-6 text-indigo-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-sm text-slate-600 italic">
            "{t.content}"
          </blockquote>
        </div>
      ))}
    </div>
  </div>
);

// Main Testimonials component
const Testimonials = ({ type = 'leadership', testimonials, source }) => {
  if (!testimonials || testimonials.length === 0) return null;

  switch (type) {
    case 'teaching':
      return <TeachingTestimonials testimonials={testimonials} />;
    case 'students':
      return <StudentTestimonials testimonials={testimonials} source={source} />;
    case 'leadership':
    default:
      return <LeadershipTestimonials testimonials={testimonials} />;
  }
};

/**
 * Table Component
 * Renders markdown tables with various styling variants
 */



const Table = ({ headers, rows, variant = 'default' }) => {
  if (!headers || !rows || rows.length === 0) return null;

  // Variant-specific styling
  const variants = {
    default: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-slate-50 text-slate-700',
      headerCell: 'px-6 py-4 text-left text-sm font-semibold',
      row: 'border-t border-slate-100 hover:bg-slate-50 transition-colors',
      cell: 'px-6 py-4 text-sm text-slate-600',
    },
    comparison: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-gradient-to-r from-slate-100 to-indigo-50 text-slate-800',
      headerCell: 'px-6 py-4 text-center text-sm font-bold',
      row: 'border-t border-slate-100',
      cell: 'px-6 py-4 text-sm text-slate-600 text-center',
      firstCell: 'text-left font-medium text-slate-700 bg-slate-50',
    },
    data: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden font-mono',
      header: 'bg-slate-800 text-white',
      headerCell: 'px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider',
      row: 'border-t border-slate-100 even:bg-slate-50',
      cell: 'px-6 py-3 text-sm text-slate-600',
    },
    checklist: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-indigo-50 text-indigo-800',
      headerCell: 'px-6 py-4 text-left text-sm font-semibold',
      row: 'border-t border-slate-100',
      cell: 'px-6 py-4 text-sm text-slate-600',
    },
    timeline: {
      container: 'bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-slate-800 text-white',
      headerCell: 'px-4 py-3 text-center text-xs font-semibold uppercase',
      row: '',
      cell: 'px-4 py-4 text-sm text-slate-600 text-center border-r border-slate-200 last:border-r-0',
    },
  };

  const styles = variants[variant] || variants.default;

  // Check if a cell content looks like a checkmark or comparison indicator
  const renderCellContent = (content, cellIndex) => {
    // For comparison variant, highlight the first column
    const isFirstCol = variant === 'comparison' && cellIndex === 0;
    const cellStyle = isFirstCol ? styles.firstCell : '';

    // Handle checkmark patterns
    if (content === '✓' || content === '✔' || content.toLowerCase() === 'yes') {
      return (
        <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
            ✓
          </span>
        </td>
      );
    }

    if (content === '✗' || content === '✘' || content.toLowerCase() === 'no') {
      return (
        <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">
            ✗
          </span>
        </td>
      );
    }

    return (
      <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
        <RichText>{content}</RichText>
      </td>
    );
  };

  return (
    <div className={`my-8 overflow-x-auto ${styles.container}`}>
      <table className="w-full">
        <thead className={styles.header}>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.row}>
              {row.map((cell, cellIndex) => renderCellContent(cell, cellIndex))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Section Component
 * Renders a document section with consistent styling
 */



const Section = ({ number, title, children, className = '' }) => {
  return (
    <section className={`py-12 ${className}`}>
      {/* Section header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          {number && (
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
              {number}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {title}
          </h2>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Section content */}
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
};

// Subsection component for ### headers
const Subsection = ({ title, children }) => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500" />
        {title}
      </h3>
      <div className="pl-4 border-l-2 border-slate-100">
        {children}
      </div>
    </div>
  );
};

// Paragraph component with rich text support
const Paragraph = ({ children }) => (
  <p className="text-slate-600 leading-relaxed mb-4">
    <RichText>{children}</RichText>
  </p>
);

// Bullet list component
const BulletList = ({ items }) => (
  <ul className="space-y-3 my-4">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
        <span className="text-slate-600 leading-relaxed">
          <RichText>{item}</RichText>
        </span>
      </li>
    ))}
  </ul>
);

/**
 * Citations Component
 * Renders the citations section with formatted references
 */


const Citations = ({ citations }) => {
  if (!citations || citations.length === 0) return null;

  // Group citations by category (based on content patterns)
  const groupCitations = (cites) => {
    const groups = {
      'Industry Research & Data': [],
      'Expert Sources': [],
      'Academic Research': [],
      'Biographical & Company Sources': [],
      'Other': [],
    };

    cites.forEach((cite, index) => {
      const num = index + 1;
      if (num <= 6) groups['Industry Research & Data'].push({ num, cite });
      else if (num <= 14) groups['Expert Sources'].push({ num, cite });
      else if (num <= 17) groups['Academic Research'].push({ num, cite });
      else groups['Biographical & Company Sources'].push({ num, cite });
    });

    return groups;
  };

  const groups = groupCitations(citations);

  return (
    <section className="py-12 bg-slate-50 rounded-2xl px-8 my-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Citations</h2>

      {Object.entries(groups).map(([groupName, cites]) => {
        if (cites.length === 0) return null;

        return (
          <div key={groupName} className="mb-8">
            <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              {groupName}
            </h3>

            <div className="space-y-3">
              {cites.map(({ num, cite }) => (
                <div key={num} id={`citation-${num}`} className="flex gap-3 text-sm">
                  <span className="font-mono text-indigo-600 flex-shrink-0">[{num}]</span>
                  <span className="text-slate-600">{cite}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

// ============================================================================
// MAIN APPLICATION
// ============================================================================

/**
 * Main Application Component
 * Renders the full proposal using parsed content and components
 */



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
} from './components';

// Render prose content with component markers
const renderContent = (content, components) => {
  // This function processes section content and inserts components
  // where they appear in the document flow
  return content;
};

// Render a section with all its components
const renderSection = (section, content) => {
  // Find components that belong to this section
  // This is a simplified version - full implementation would track positions

  return (
    <Section number={section.number} title={section.title}>
      {/* Intro paragraphs */}
      {section.intro && (
        <div className="mb-6">
          {section.intro.split('\n\n').filter(p => p.trim() && !p.startsWith('<!--')).map((p, i) => (
            <Paragraph key={i}>{p}</Paragraph>
          ))}
        </div>
      )}

      {/* Subsections */}
      {section.subsections.map((sub, i) => (
        <Subsection key={i} title={sub.title}>
          {sub.content.split('\n\n').filter(p => p.trim() && !p.startsWith('<!--') && !p.startsWith('-')).map((p, pi) => (
            <Paragraph key={pi}>{p}</Paragraph>
          ))}
        </Subsection>
      ))}
    </Section>
  );
};

const App = () => {
  // Component lookup by position in document
  const chartsByType = {};
  CONTENT.charts.forEach(chart => {
    if (!chartsByType[chart.type]) chartsByType[chart.type] = [];
    chartsByType[chart.type].push(chart);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {CONTENT.header && <Header data={CONTENT.header} />}

      {/* Main content container */}
      <div className="max-w-4xl mx-auto px-8">

        {/* Section 1: The Market Shift */}
        <Section number={1} title="The Market & Student Need: Why Now">
          <Paragraph>
            For decades, software economics worked one way: distributing software cost nearly nothing, but building it required expensive talent. That second part is changing.
          </Paragraph>
          <Paragraph>
            AI coding tools have lowered the cost of building software. Product managers can ship features. Designers can prototype in production code. Founders can build an MVP in a weekend. The separation between "people with ideas" and "people who can build" is shrinking.
          </Paragraph>

          {CONTENT.pullquotes[0] && <PullQuote>{CONTENT.pullquotes[0]}</PullQuote>}

          <Subsection title="The Anthropic Case Study">
            <Paragraph>
              At Anthropic, the company behind Claude, internal research shows:
            </Paragraph>
            {CONTENT.stats.length > 0 && <StatsGrid stats={CONTENT.stats} />}
            {chartsByType.growth?.[0] && <Chart type="growth" data={chartsByType.growth[0]} />}
          </Subsection>

          <Subsection title="The Triad: Design, Product, and Engineering Are Merging">
            <Paragraph>
              Role boundaries are collapsing. Designers, product managers, and engineers are moving toward each other:
            </Paragraph>
            {CONTENT.convergence.length > 0 && <Convergence roles={CONTENT.convergence} />}
            {CONTENT.tables[0] && <Table {...CONTENT.tables[0]} variant="comparison" />}
          </Subsection>

          {CONTENT.pullquotes[1] && <PullQuote>{CONTENT.pullquotes[1]}</PullQuote>}

          <Subsection title="The Rise of the Product Engineer">
            <Paragraph>
              Tech companies are redefining roles around this reality. Companies like Vercel and Linear now hire "Product Engineers" who care more about outcomes than implementation details.
            </Paragraph>
            {chartsByType.range?.[0] && <Chart type="range" data={chartsByType.range[0]} />}
          </Subsection>

          <Subsection title="The Junior Developer Role Is Disappearing">
            {chartsByType.bar?.[0] && <Chart type="bar" data={chartsByType.bar[0]} />}
          </Subsection>

          <Subsection title="The New Skills: What Industry Leaders Are Saying">
            {CONTENT.quotes.length > 0 && <QuoteCarousel quotes={CONTENT.quotes} />}
            {chartsByType.hierarchy?.[0] && <Chart type="hierarchy" data={chartsByType.hierarchy[0]} />}
            {CONTENT.pullquotes[2] && <PullQuote>{CONTENT.pullquotes[2]}</PullQuote>}
          </Subsection>
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 2: Strategic Alignment */}
        <Section number={2} title="Strategic Alignment with McCormick's Vision">
          <Paragraph>
            This proposal aligns directly with McCormick's three strategic pillars and addresses AI as one of the school's four grand challenge focus areas.
          </Paragraph>

          {CONTENT.sections[1]?.subsections.map((sub, i) => (
            <Subsection key={i} title={sub.title}>
              {sub.content.split('\n\n').filter(p => p.trim() && !p.startsWith('<!--')).slice(0, 2).map((p, pi) => (
                <Paragraph key={pi}>{p.replace(/^-\s+/gm, '').replace(/\n/g, ' ')}</Paragraph>
              ))}
            </Subsection>
          ))}

          {CONTENT.pullquotes[3] && <PullQuote>{CONTENT.pullquotes[3]}</PullQuote>}
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 3: Who Should Teach This */}
        <Section number={3} title="Who Should Teach This">
          <Paragraph>
            If McCormick wants to prepare students for the "Product Engineer" role, the faculty member teaching it needs a specific profile. This is not a traditional academic hire.
          </Paragraph>

          {CONTENT.cards[0] && (
            <CardGrid
              type={CONTENT.cards[0].type}
              columns={CONTENT.cards[0].columns}
              cards={CONTENT.cards[0].cards}
            />
          )}

          {CONTENT.pullquotes[4] && <PullQuote>{CONTENT.pullquotes[4]}</PullQuote>}
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 4: What I Can Teach */}
        <Section number={4} title="What I Can Teach">
          <Paragraph>
            The "Product Engineer" needs to move from idea to shipped product. This is a set of capabilities that can be woven into existing curriculum.
          </Paragraph>

          {CONTENT.tables[1] && <Table {...CONTENT.tables[1]} variant="data" />}

          {CONTENT.sections[3]?.subsections.map((sub, i) => (
            <Subsection key={i} title={sub.title}>
              <Paragraph>
                {sub.content.split('\n\n').filter(p => p.trim() && !p.startsWith('<!--') && !p.startsWith('-'))[0] || ''}
              </Paragraph>
            </Subsection>
          ))}

          {CONTENT.pullquotes[5] && <PullQuote>{CONTENT.pullquotes[5]}</PullQuote>}
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 5: Why Me */}
        <Section number={5} title="Why Me">
          {CONTENT.credentials.length > 0 && <Credentials credentials={CONTENT.credentials} />}

          <Paragraph>
            I am an unusual combination: a Google executive who still ships code, a founder with a nine-figure exit, and a design leader who has led UXR, UI/UX, and engineering teams.
          </Paragraph>

          {CONTENT.tables[2] && <Table {...CONTENT.tables[2]} variant="checklist" />}

          {CONTENT.pullquotes[6] && <PullQuote>{CONTENT.pullquotes[6]}</PullQuote>}

          {CONTENT.timeline.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-slate-800 mt-12 mb-6">Career Timeline</h3>
              <Timeline entries={CONTENT.timeline} />
            </>
          )}
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 6: What Others Say */}
        <Section number={6} title="What Others Say">
          {CONTENT.testimonials.map((group, i) => (
            <div key={i} className="mb-8">
              {group.type === 'students' && (
                <h4 className="text-lg font-semibold text-slate-700 mb-4">Student Feedback</h4>
              )}
              <Testimonials
                type={group.type}
                testimonials={group.testimonials}
                source={group.source}
              />
            </div>
          ))}
        </Section>

        <hr className="my-12 border-slate-200" />

        {/* Section 7: Conclusion */}
        <Section number={7} title="The Path Forward">
          <Paragraph>
            The "Product Engineer" is the future. McCormick can lead in teaching it.
          </Paragraph>
          <Paragraph>
            I bridge operational depth, entrepreneurial insight, and academic rigor. I offer executive perspective to understand why this shift is happening, hands-on coding ability to teach how to do it, and market visibility to know where it's going.
          </Paragraph>
          <Paragraph>
            I look forward to discussing next steps.
          </Paragraph>
        </Section>

        {/* Citations */}
        {CONTENT.citations.length > 0 && <Citations citations={CONTENT.citations} />}

        {/* Footer */}
        <footer className="py-12 text-center text-sm text-slate-400 border-t border-slate-200 mt-12">
          <p>Proposal for Clinical Faculty Appointment</p>
          <p>Northwestern University • McCormick School of Engineering</p>
          <p className="mt-2">{CONTENT.header?.date || 'February 2026'}</p>
        </footer>
      </div>
    </div>
  );
};



// Default export for Claude artifact
export default App;
