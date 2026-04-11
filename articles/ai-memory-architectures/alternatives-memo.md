# Alternatives Considered: AI Memory Architecture Vendors Beyond the Main Four

*Companion memo to Next-Generation AI Memory Architectures. Research dates: April 10–11, 2026. Author: John Renaldi. Fifth revision tightens the finalist list down to the candidates that actually come close to the Dorsey/Block bar — Mem0, Letta, Cognee, XTDB v2, Basic Memory, Palantir, Microsoft Work IQ, and Glean — and moves the not-even-close candidates (Microsoft GraphRAG, LightRAG, HippoRAG 2, Hebbia, Dust) to the "explicitly dropped" section with one-line rationales.*

---

## Why this memo exists

The main brief profiles four systems — Hindsight (Vectorize), Zep/Graphiti, Supermemory, and Karpathy's LLM Wiki — because each represents a distinct architectural philosophy. The first version of this memo cataloged eight developer-infrastructure finalists that compete with those four on their own turf.

The current version is broader. The brief's real ambition is the Dorsey/Block "second brain" vision: a dual knowledge base (company brain + customer brain) that updates continuously, compounds over time, survives FINRA and SEC audit, and exposes its state to external agents through stable APIs. Measured against that bar, the developer-infrastructure category is only half the landscape. The other half is the enterprise platform category — incumbent products that have been quietly building organizational world models for years and are now repositioning them as intelligence layers. Any memo that ignores Palantir, Glean, and Microsoft Work IQ is incomplete.

This revision keeps the developer-infrastructure candidates that actually come close to the bar (Mem0, Letta, Cognee, XTDB v2, Basic Memory), adds three enterprise platforms as a second tier (Palantir, Microsoft Work IQ, Glean), stress-tests both tiers against the Dorsey/Block bar, and lands on an architecture thesis the main brief should probably adopt: for most readers — any enterprise running M365, which is the bulk of the regulated-industry audience — the default path is the all-Microsoft stack (Work IQ grounded in SharePoint and Microsoft Graph for the company brain, Microsoft Fabric data agents plus federated Graph connectors for the customer brain, Purview for compliance, Copilot Studio for agents), with Zep or Hindsight reserved as a FINRA-specific add-on when entity-level bi-temporal audit is the binding constraint. Palantir, Glean-plus-a-customer-graph, and XTDB-based custom builds are alternatives for readers with different starting conditions. Candidates that did not come close (Microsoft GraphRAG, LightRAG, HippoRAG 2, Hebbia, Dust) are listed briefly in the "explicitly dropped" section with one-line rationales.

---

## The bar we are measuring against

Five non-negotiables from the main brief:

1. **World model, not document retrieval.** Answers should come from typed entities and relationships, not from chunk similarity.
2. **Continuous, not batch.** The brain compounds "every second, of every day" per Dorsey. Anything that depends on periodic re-indexing fails the compounding test.
3. **Dual-scope isolation.** The company brain and one or more customer brains must be separable under strict tenant controls.
4. **Bi-temporal auditability.** Event time versus ingestion time, with the ability to reconstruct what the system knew on date X. This is the FINRA 4511 / SEC 17a-4 / SOC 2 Type II posture the brief's regulated-industry readers care about most.
5. **Agent-accessible.** External agents — Claude, GPT, internal ones — must be able to read from and write to the brain through stable APIs, not just through a chat UI inside the vendor's walled garden.

Nothing below clears all five cleanly. The interesting question is which combinations get closest, and what the gaps imply for anyone building against this architecture today.

---

## Tier 1: developer-infrastructure finalists

Each of these is an active, production-grade system that addresses the same core problems the main four address — entity linking, temporal correctness, contradiction handling, per-query context enrichment — though often with very different tradeoffs. Earlier revisions of this memo also profiled Microsoft GraphRAG, LightRAG, and HippoRAG 2; all three are reference patterns or research projects rather than shipping memory systems and have been moved to the "explicitly dropped" section with one-line rationales.

### 1. Mem0

Mem0 is the most serious direct peer to Supermemory. It ships a managed cloud with a free tier, an Apache 2.0 open-source core (~11K GitHub stars, actively maintained into April 2026), and a hybrid architecture that pairs vector search with an optional graph memory module. The compliance posture is meaningfully stronger than Supermemory's: Mem0 publishes SOC 2 Type II certification and a HIPAA-ready stance on its trust page, with BYOK available on paid tiers.

Mem0 is also the most transparent about benchmarks. Its published LoCoMo results show the graph variant (Mem0g) at 68.4% accuracy with a p95 latency of 2.59 seconds, and the baseline selective-memory configuration at 66.9% at 1.44 seconds. That trails the full-context baseline (72.9% but at 17-second p95 latency), and it trails Zep's published LoCoMo number. Mem0's bet is speed and cost, not peak accuracy — it markets roughly 90% token reduction and 91% lower latency versus full-context approaches, and the research has been accepted at ECAI 2025 (arXiv:2504.19413).

Core structure: hybrid, embedding-first with optional graph. Ingestion: 30+ data types via framework integrations. Contradiction handling: TTL-based decay plus confidence-scored updates. Temporal modeling: single timestamp, no bi-temporal. Compliance: SOC 2 Type II, HIPAA-ready, BYOK. License: Apache 2.0 core.

Against the Dorsey/Block bar: Mem0 is the strongest challenger to Supermemory for a team that wants fast managed memory with real compliance paperwork. It fails dimension 2 (TTL decay is the opposite of compounding) and dimension 4 (single timestamp, no bi-temporal audit). Useful as a memory library, wrong shape for a regulated second brain.

### 2. Letta (formerly MemGPT)

Letta is the direct intellectual descendant of the MemGPT paper that popularized the idea of an agent managing its own memory. Open-source (MIT, ~13K stars), ships both a managed cloud and a self-hosted option, and takes a fundamentally different architectural position from the other finalists: memory lives in files that the agent reads, writes, and edits through tool calls. There is no vector store or graph database doing the work behind the scenes.

The provocative Letta benchmark finding is that Letta agents running gpt-4o-mini hit 74% on LoCoMo by simply storing conversation histories in a filesystem — no retrieval system, no embedding index. This is the closest thing in the industry to a direct challenge to the assumption that memory requires infrastructure.

Core structure: file-based with in-context memory blocks. Contradiction handling: agent-driven. Temporal modeling: none. Compliance: self-hosting supported; no published SOC 2 for the managed tier. License: MIT.

Against the bar: Letta is the natural productized version of the Karpathy pattern and a credible approach for single-agent long-running memory. For a dual-brain organizational architecture at FINRA scale it is the wrong shape — the file-and-agent model does not scale to cross-user queries or bi-temporal audit.

### 3. Cognee

Cognee is a graph-first memory system with an unusual capability: automatic ontology discovery. Its Cascade pipeline progressively learns the schema of ingested data rather than requiring a developer to define entity and relationship types up front. This is a middle position between Supermemory's fixed three-relationship taxonomy and Zep's domain-customizable ontology.

Cognee has been aggressive about published benchmarks. Its DeepEval collaboration reports a 0.93 human-like correctness score on a HotPotQA multi-hop subset, with the caveat that only 24 questions were used and results were averaged over 45 cycles to reduce LLM variance. Treat the absolute number with skepticism (small sample), but the methodology is unusually rigorous — the team published their harness and invited third-party replication.

Core structure: graph-first (RDF/property graphs) with vector scoring. Contradiction handling: ontology-learning feedback loop; specific invalidation mechanism is underdocumented. Temporal modeling: partial — time-aware context filtering but no bi-temporal. Compliance: on-prem deployment supported, no published SOC 2.

Against the bar: Cognee is the most credible challenger to Zep on the graph-first thesis for teams that do not want to hand-define ontologies. Temporal modeling and compliance posture still trail Zep, which is what the brief cares about most.

### 4. XTDB v2

XTDB is not a memory system. It is a bi-temporal SQL database — the only open-source production-grade alternative to Zep's proprietary four-timestamp model that operates at the database layer rather than the application layer. v2 reached stable release in June 2025, supports the SQL:2011 bitemporal standard (system time plus valid time), and speaks Postgres wire protocol.

For a team that wants Zep's temporal precision but is not willing to accept Zep's commercial lock-in, XTDB is a credible substrate. You lose everything Zep ships above the database — no graph extraction, no community clustering, no per-user graph isolation, no managed retrieval API — but you keep the non-lossy temporal audit trail that makes Zep compelling for regulated industries.

Against the bar: XTDB is the substrate, not the brain. Score it as a foundation for a build rather than as a product to buy.

### 5. Basic Memory

The closest commercial realization of Karpathy's LLM Wiki vision. Knowledge is stored as markdown files that humans can edit in Obsidian, VS Code, or any text editor. An LLM reads and writes those files through an MCP server, maintaining semantic links between documents. Open source (~2.6K stars, actively maintained), ships a managed cloud tier in addition to local-first deployment.

Against the bar: Basic Memory is the productized version of the LLM Wiki section — human-curated, file-based, version-controlled. It is the right shape for a personal second brain or a small-team knowledge base. It does not scale to the volumes or the compliance posture the Dorsey vision requires.

---

## Tier 2: enterprise platform finalists

This tier was absent from the first version of this memo and deserves a frank acknowledgement: the enterprise platform category is where most of the serious "company brain" work is happening. For a regulated enterprise reader of the brief, the real choice is probably not "which developer-infrastructure memory engine do I buy" but "which enterprise platform do I extend, and with what." Three platforms come close enough to profile: Palantir, Microsoft Work IQ, and Glean. Hebbia and Dust were considered in earlier revisions and dropped — Hebbia is a document-analysis workspace, not a world model; Dust is a per-user assistant platform, which is the opposite architectural shape from a shared organizational brain.

### 6. Palantir Foundry + AIP

Palantir is the only vendor in either tier that ships a product purpose-built around the concept of a typed organizational world model. Foundry's Ontology is a first-class entity graph with actions, and AIP's retrieval pattern is explicitly Ontology-Aware Generation: agents retrieve structured objects rather than text chunks. Foundry Branching allows ontology change testing in isolated branches before merging. AIP Agent Studio supports external agent deployment via the Ontology SDK, and marking-based access control plus project isolation give you industrial-strength tenant separation.

Where Palantir is weaker than its marketing: bi-temporal correctness at the ontology level is not an explicit, documented feature. Foundry has audit logs with precise timestamps, dataset versioning, and branch-and-merge workflows, but it does not ship the SQL:2011-style event-time/ingestion-time split that Zep makes central. If you want true bi-temporal guarantees on a Foundry-backed world model, you are building them on top of the substrate.

Against the bar: strongest match for dimensions 1, 3, and 5. Partial on 2 (streaming supported but ontology writes are typically governed by Actions). Partial on 4 (audit-rich but not bi-temporal-by-default). The only enterprise platform designed for the full Dorsey vision, though the regulated-industry reader should plan to build bi-temporal audit themselves.

### 7. Microsoft 365 Copilot + Work IQ + SharePoint + Fabric + federated Graph connectors

Microsoft positions Work IQ as "the intelligence layer behind Microsoft 365 Copilot and agents" — explicitly understanding people, work patterns, and organizational context, not just indexing documents. The primitives that matter for the Dorsey/Block vision are the ones every M365 shop already has, independent of whether they run any Dynamics 365 product. This profile has been rewritten to reflect that: the default Microsoft architecture for both brains leads with SharePoint, Fabric, and federated connectors, not with Customer Insights.

**The company-brain world model** is Microsoft Graph plus SharePoint, grounded by Work IQ. Graph is already a typed entity graph (people, messages, meetings, files, org relationships). SharePoint is Microsoft's own stated "number one grounding source for Microsoft 365 Copilot" — the place where documents, pages, and knowledge hubs live across every M365 tenant. As of March 2026, SharePoint ships the Knowledge Agent in public preview (included with M365 Copilot premium), which automates metadata enrichment and turns document libraries into AI-ready knowledge hubs: the agent reads your libraries, proposes structure, enforces governance, and makes the content directly addressable to Copilot without a separate ingestion pipeline.

**The customer-brain world model** is Microsoft Fabric, federated Graph connectors, and whatever customer data your organization already has — not a CDP purchase. Three primitives compose into the customer brain:

1. **Microsoft Fabric lakehouses plus Fabric Data Agents.** Fabric is Microsoft's unified analytics platform; OneLake is its single logical storage layer. Customer data that lives in Snowflake, Databricks, BigQuery, Azure Data Lake, Salesforce Data Cloud, or any Iceberg-compatible warehouse shows up in OneLake through zero-copy shortcuts — no ETL lag, no duplicate storage. Fabric Data Agents (GA in 2026) sit on top of any lakehouse, warehouse, Power BI semantic model, KQL database, or ontology and let you build natural-language agents over your own data. Critically, Fabric Data Agents can be connected to Copilot Studio agents via Model Context Protocol, which means a Copilot Studio agent can orchestrate multiple Fabric Data Agents across different customer datasets and get the right answer with the right grounding every time. This is the non-Dynamics path to an analytical customer brain that ships today.
2. **Microsoft 365 Copilot Graph connectors — especially federated mode.** Over 100 prebuilt connectors bring external enterprise data into the Copilot semantic index, including first-party Salesforce, ServiceNow, HubSpot, Confluence, Box, Jira, and Google Workspace connectors. As of 2026 these come in two flavors: **synced** connectors that crawl and index on a schedule, and **federated** connectors that read external content in real time through Model Context Protocol without copying it. Federated connectors are the important 2026 development for the customer brain — they solve the freshness problem by querying Salesforce (or HubSpot, or ServiceNow) live instead of on a crawl cadence, which means the operational CRM stays authoritative and Copilot sees current state.
3. **SharePoint customer-knowledge hubs.** A surprising amount of the "customer brain" in a regulated enterprise is not CRM data — it is account plans, call notes, contracts, onboarding docs, suitability files, and internal write-ups. That content already lives in SharePoint in most M365 shops, and the Knowledge Agent makes it directly addressable without moving it anywhere. For broker-dealers and RIAs especially, SharePoint is where the compliance-relevant customer content actually is.

**The memory and retrieval layer** is the semantic index, which continuously embeds M365 content as it changes. Unlike Glean's 24-hour crawl cadence, the semantic index updates with the data pipe itself — this is actual continuous compounding, not a scheduled batch job.

**The agent surface** is declarative agents, Copilot Studio, and the Microsoft 365 Agents Toolkit. Copilot Studio agents can ground on SharePoint libraries, Graph entities, federated connectors, and Fabric Data Agents through a single grounding layer, and Copilot Cowork — Microsoft's 2026 name for long-running multi-step work with full Work IQ context — is the productized version of the Dorsey pattern of agents working on top of the brain.

**Dual-scope isolation without Dynamics.** Work IQ can serve both the company brain and one or more customer brains inside the same tenant using primitives every M365 shop already controls: Entra ID and RBAC for identity-scoped access, SharePoint site-level and library-level permissions, sensitivity labels and Purview Information Barriers for Chinese-wall enforcement, Fabric workspace isolation with row- and column-level security in OneLake, and Copilot Studio agent grounding scoped to specific SharePoint sites, Fabric items, or connector subsets. The multi-graph pattern that Zep and Hindsight use at the graph layer has a direct analog here: one Copilot Studio agent grounded on company-wide content, a second grounded on a specific customer's SharePoint hub and federated CRM view, a third grounded on a different customer's materials, and Information Barriers preventing cross-agent leakage.

**CRM agnosticism matters.** Nothing in this architecture requires you to replace your operational CRM. Salesforce stays authoritative; the federated Graph connector makes it live-queryable inside Copilot. The same pattern works for HubSpot, ServiceNow, or any REST-accessible CRM. Warehouse-backed customer analytics stay in Snowflake or Databricks; OneLake shortcuts make them queryable inside Fabric without duplication. Document-heavy customer knowledge stays in SharePoint, where it already lives. No ETL project, no CDP purchase, no Dynamics license.

**Optional components for shops that already run them.** Dataverse custom tables plus Power Platform connectors (1,000+ connectors in Dataflows) are the path for teams that want to materialize customer entities as first-class business objects with schema they own — useful but not required. Dynamics 365 Customer Insights – Data is Microsoft's purpose-built customer data platform, licensable standalone from Dynamics 365 Sales/Service, and it does ship a real unified-profile primitive. It's a legitimate addition for enterprises that already use it or need a packaged CDP, but it is not a primitive the profile assumes — most M365 shops, including most regulated financial services firms, do not run any Dynamics 365 product and should not be told they need one to get a Microsoft-native second brain.

**Against the bar.** Strong on dimensions 1, 2, 3, and 5. Partial on 4 — Purview provides FINRA-grade archival, eDiscovery, retention, and immutable records across SharePoint, Teams, and the semantic index, but entity-level bi-temporal correctness at the customer-profile level is not a documented primitive. If the regulator needs "what did we know about this customer on March 15, 2024," you are either building that on top of SharePoint versioning plus Fabric time-travel plus connector audit logs, or pairing with Zep specifically for the temporally-correct customer interaction record. Where Microsoft is uniquely strong is incumbency: most regulated enterprises already run M365, which makes both halves of this architecture addressable without adding a new vendor, without a CDP purchase, and without replacing their operational CRM.

### 8. Glean

Glean has been building the organizational knowledge graph pattern since before "AI second brain" was a phrase. It ships a permission-aware enterprise graph with entity linking, a unified chat surface, and a developer platform with REST APIs and toolkits for LangChain, CrewAI, and OpenAI Assistants. Conceptually, Glean is the cleanest example of the "one knowledge surface across every system of record" model in the enterprise market.

The architectural limitation is freshness. Glean crawls each datasource every 24 hours, augmented by webhooks where available. Glean's own team has acknowledged publicly that answers are "only as current as the last index update." For a world model that is supposed to compound every second, a 24-hour window is a meaningful constraint — though in practice the webhook coverage on the most active sources (Slack, Gmail, Confluence) closes most of the gap.

Against the bar: strong on dimensions 1 and 5, weaker on 2 (freshness asterisk), weak on 3 (built for a single organizational index, not a dual-brain pattern), weak on 4 (not a design goal). Useful as the company-brain half of a pairing architecture, especially for enterprises that have standardized on Glean but do not run Microsoft 365 as their primary collaboration stack. For most readers of the brief, Microsoft Work IQ dominates Glean on every dimension because their existing M365 license means the incremental cost to extend is much lower.

---

## Stress test: which ones actually hold up

Measured against all five dimensions simultaneously, the honest scorecard is narrower than either tier alone would suggest.

**Zep/Graphiti and Hindsight/Vectorize clear the bar via the multi-graph pattern.** The first version of this memo treated dual-scope isolation as a feature the substrate had to ship, which was wrong. Both Zep and Hindsight let you instantiate multiple isolated graphs behind the same API — one for the company brain, one per customer, one per tenant, one per whatever boundary you want. Dual-brain is an application pattern, not a product feature. Once you see it that way, Zep and Hindsight are not just competitive with Palantir on the Dorsey vision — they are actually better positioned on the two dimensions the brief cares about most, because Zep ships SQL:2011-style bi-temporal correctness natively and both are architected around streaming writes rather than batch re-indexes. Palantir has the richer world model; Zep has the stricter temporal model. For a FINRA-compliant second brain, the temporal model is probably the dimension that matters more.

**Palantir holds up as the world-model-richest substrate.** The Ontology is the closest thing shipping today to a typed organizational entity graph with formal actions and branching. If you have the budget and the stomach for the lock-in, Palantir is the deepest substrate. The honest caveat is that bi-temporal correctness at the Ontology level is underdocumented and you should plan to build it.

**Microsoft Work IQ holds up as the full-stack incumbent path for both brains — without any Dynamics dependency.** For any enterprise that already runs M365 — which is basically every bank, broker-dealer, and RIA in the country — both halves of the Dorsey vision are effectively half-shipped inside products the CIO already pays for, and the primitives are the ones every M365 shop actually has. The company brain is Work IQ grounded on SharePoint plus Microsoft Graph plus the semantic index. The customer brain is SharePoint customer hubs (with the Knowledge Agent) for document-heavy knowledge, Microsoft Fabric lakehouses plus Fabric Data Agents (connected to Copilot Studio via MCP) for analytical customer data, and federated Microsoft 365 Copilot Graph connectors for live reads against whatever operational CRM the shop already runs (Salesforce, HubSpot, ServiceNow, or anything REST-accessible). Dual-scope isolation is handled through Entra/RBAC, SharePoint permissions, Purview Information Barriers, sensitivity labels, Fabric workspace isolation, and Copilot Studio agent grounding — all primitives already bundled with M365. Purview provides FINRA-grade archival across both halves. The one remaining gap is bi-temporal correctness at the customer-entity level — Purview archives the underlying records, but it does not ship SQL:2011 entity time-travel across the composite view of a customer. That gap is narrow enough that it only matters for regulators who demand entity-level reconstruction of "what did we know about this customer on date X." For most readers of the brief, the all-Microsoft stack is the default path and the incumbent advantage is overwhelming — and it does not require buying Dynamics 365, Customer Insights – Data, or any other Dynamics product.

**Glean holds up conceptually but is dominated by Work IQ in practice.** Glean is the cleanest third-party example of the organizational knowledge graph pattern, and its developer platform is more open than Microsoft's. For enterprises that do not standardize on M365, Glean is the right company-brain layer, and it can be paired with a dedicated customer-graph layer (Zep, Hindsight, or a Fabric-equivalent lakehouse agent on the warehouse side) for the customer brain. For the rest — which is most of the brief's audience — Work IQ dominates on freshness, compliance, cost-to-extend, and the fact that the Microsoft primitives for both brains are already sitting inside the existing license.

**The rest of Tier 1 serves narrower roles.** Mem0 is the best fast-and-compliant memory library but fails compounding (TTL decay is the opposite of what Dorsey describes). Letta is the strongest agent-managed memory option but the file-and-agent model does not scale to cross-user dual-brain architectures. Cognee is the most credible challenger to Zep on the graph-first thesis for teams that want automatic ontology discovery, but its temporal and compliance posture still trails Zep. XTDB is substrate-only — a bi-temporal foundation, not a memory engine. Basic Memory is the productized Wiki pattern, volume-limited and right-shaped for personal or small-team use, not regulated enterprise scale.

---

## The architecture thesis: all-Microsoft as the default, pairings as the exception

The useful conclusion for the main brief is not "here is the one product that does everything." It is a framing of which shipping architecture fits which type of reader, ordered by how much incumbent surface area they already have.

**Default path for M365 shops: the all-Microsoft stack, no Dynamics required.** For any enterprise that already runs M365 — most of the brief's regulated-industry audience — the default architecture is:

- **Company brain:** Microsoft Graph + semantic index + SharePoint (with Knowledge Agent) + OneDrive/Teams, all grounded by Work IQ. Continuously updated through the M365 data pipe.
- **Customer brain:** SharePoint customer hubs for document-heavy customer knowledge (account plans, call notes, contracts, suitability files), Microsoft Fabric lakehouses plus Fabric Data Agents connected to Copilot Studio via MCP for analytical customer data sitting in Snowflake/Databricks/BigQuery/Salesforce Data Cloud via OneLake shortcuts, and federated Microsoft 365 Copilot Graph connectors for live reads of the operational CRM (Salesforce, HubSpot, ServiceNow, anything REST-accessible). Your CRM stays authoritative; Microsoft handles grounding.
- **Isolation:** Entra/RBAC, SharePoint permissions, Purview Information Barriers, sensitivity labels, Fabric workspace scoping, and Copilot Studio agent grounding — all primitives already bundled with M365.
- **Compliance:** Purview spans both brains for FINRA/SEC archival, eDiscovery, retention, and DLP.
- **Agent surface:** Copilot Studio agents and declarative agents read from both brains through the same grounding layer.

No Dynamics license. No CDP purchase. No CRM replacement. This is the path for readers who are not willing to add a net-new vendor, and it covers four of the five Dorsey/Block dimensions cleanly. The one partial dimension (bi-temporal entity audit at the customer level) only bites for a narrow set of regulators. Dataverse and Customer Insights – Data remain legitimate optional additions for shops that already run them or want a packaged CDP, but they are not primitives the default path assumes — most M365 shops, including most regulated financial services firms, never license any Dynamics product and should not be told they need one.

**Regulated-industry exception: all-Microsoft plus Zep for the customer brain.** For broker-dealers, RIAs, and other firms that need entity-level bi-temporal reconstruction of customer interaction records under SEC 17a-4 and FINRA 4511, the narrow fix is to add Zep/Graphiti (or Hindsight/Vectorize) as the customer-interaction graph specifically, instantiated as a separate graph per customer behind one API. The rest of the stack stays Microsoft. This is a surgical addition, not a wholesale replacement — Zep handles the temporally-correct interaction record, and SharePoint + Fabric + federated connectors handle everything else. A thin MCP-fronted integration layer lets Copilot Studio agents read from both.

**Non-Microsoft shop: Glean plus Zep or a lakehouse-backed customer brain.** For the minority of enterprises that do not standardize on M365, the cleanest third-party company-brain layer is Glean, and the customer brain is either Zep/Hindsight with per-customer graphs or a warehouse-backed agent layer on top of Snowflake or Databricks. This is a more expensive architecture because you are paying for two breadth-first layers, but it's a real option for the rare enterprise that runs Google Workspace as its collaboration stack.

**Palantir shop: Foundry plus a custom bi-temporal layer.** For enterprises already committed to Palantir (typically government, defense, and a subset of regulated financial services), the natural path is to build both brains on Foundry Ontology, using branching and markings for isolation, and to build bi-temporal audit yourself on top of Foundry datasets. Highest cost and deepest lock-in of the three paths, but the richest formal world model and the strongest regulated-deployment posture.

**Build-your-own: XTDB v2 plus Graphiti or a custom graph layer on top.** For teams that want maximum control and are willing to assemble the stack themselves, XTDB gives you the non-lossy bi-temporal substrate and an open-source graph layer (Graphiti or custom) gives you the retrieval surface. This is the path for infrastructure-first teams that believe the commercial vendors are overpaying for the wrong tradeoffs.

The important framing change from the first version of this memo: the all-Microsoft path is not a fallback. It is the default for most readers, and the Zep pairing is the exception that a specific regulatory requirement forces. The main brief should probably lead with the all-Microsoft framing and treat Zep as the FINRA-specific add-on rather than presenting them as peer options.

---

## Revised shortlist for a possible main-brief extension

If we expand the main brief from four systems to six or seven, the ordering is:

1. **Microsoft 365 Copilot + Work IQ + SharePoint Knowledge Agent + Fabric Data Agents + federated Graph connectors.** The full-stack incumbent path for both brains, built entirely from primitives every M365 shop already has. No Dynamics 365 dependency. CRM-agnostic through federated Copilot connectors and Fabric OneLake shortcuts. Should probably be the fifth profile and frame the "pragmatic default" section of the brief.
2. **Palantir Foundry + AIP.** The richest formal world model. The natural comparison point to Zep on ontology, to Hindsight on ingestion, and to Microsoft on regulated deployment. Belongs as the sixth profile for readers who already live in Palantir or need the deepest formal ontology.
3. **Mem0.** Fills a real gap between Supermemory (fast, not compliant) and Zep (compliant, complex). Strong benchmarks, strong compliance posture, active community.
4. **Basic Memory.** The productized version of Karpathy's LLM Wiki. The main brief currently describes a pattern; Basic Memory is the shipping product that implements it.
5. **Letta.** The strongest architectural alternative in the agent-managed memory category.
6. **Glean.** The cleanest third-party example of the organizational knowledge graph pattern, worth acknowledging even though Work IQ dominates it for most readers.
7. **Cognee.** The most credible challenger to Zep on the graph-first thesis for teams that want automatic ontology discovery.
8. **XTDB v2.** Not a peer to the runtime memory systems but a substrate worth acknowledging in the compliance section.

---

## The next tier: worth knowing about, did not make the finalist list

**Redis LangCache plus the Agent Memory Server (2025).** Redis now ships a dual-tier memory architecture — managed semantic caching (LangCache) plus an open-source Agent Memory Server for Redis-backed short-term and long-term memory. Redis Cloud covers SOC 2 and HIPAA. Credible infrastructure for teams that already run Redis and want memory that lives next to the rest of their application state. It does not ship the graph semantics or temporal modeling the brief requires.

**Pinecone Assistants and Weaviate Agents.** Both vector databases have shipped agent or assistant memory layers on top of their core products. Pinecone Assistants ship a Context API and are GA with BYOC on AWS and GCP; Weaviate Agents ship agent skills that compose hybrid retrieval with tool calls. Neither is a purpose-built memory engine — they are retrieval primitives with a memory-shaped wrapper.

**Claude Projects and ChatGPT Memory.** Reference points, not alternatives. Both save per-user facts across conversations. Neither exposes a general-purpose API for building memory into third-party products.

**Sana and Writer.** Enterprise knowledge platforms worth tracking. Sana competes adjacent to Glean on the company-knowledge-surface category; Writer is repositioning its generation stack around enterprise knowledge graphs. Neither had matured enough by the April 2026 research date to warrant a finalist slot, but both are on the watch list for a 2026 refresh.

**Windsurf Cascade memories and Cursor project memory.** IDE-integrated memory features for coding sessions. Useful for developers inside those specific IDEs, not relevant as memory infrastructure for an AI product.

**Neo4j LLM Knowledge Graph Builder, RAGFlow, NebulaGraph Fusion GraphRAG.** All three are graph-extraction pipelines rather than memory systems. Useful building blocks for anyone building their own memory layer on top of a graph database, not memory systems themselves.

---

## Explicitly dropped

The following candidates were considered and rejected. Documenting the drops so readers can verify the scope of the search:

- **Microsoft GraphRAG** — batch indexing pipeline, not a live memory system. Fails dimension 2 (continuous compounding) architecturally. Useful as a reference pattern; not a product you would buy.
- **LightRAG** — academic challenger to GraphRAG with incremental indexing and a simpler graph model. Same category: a DIY pattern, not a commercial product.
- **HippoRAG 2** — research project applying personalized PageRank over a knowledge graph. No managed cloud, no compliance posture, no enterprise support. Research signal only.
- **Hebbia** — Matrix is a persistent research workspace for deep document analysis, not a typed entity graph with temporal guarantees. Wrong shape for an organizational second brain.
- **Dust** — multi-assistant platform whose memory is user-scoped and opt-in ("each person's interactions create their own knowledge graph"). The opposite architectural shape from a shared organizational world model.
- **Memary** — last commit April 2024, abandoned.
- **LangMem** — framework library within LangChain, not a standalone product.
- **AgentScope / MemoryScope (Alibaba)** — agent framework with memory primitives, not a purpose-built memory engine.
- **Cloudflare Agents** — stateful agent runtime with SQLite persistence, no first-party memory API.
- **Datomic** — transaction-time only, not bi-temporal, closed-source.
- **TerminusDB** — git-for-data RDF database with branching/merging, not bi-temporal in the SQL:2011 sense.
- **RDFox, Stardog** — enterprise knowledge graphs with reasoning engines, not memory systems. Useful substrates, not peers.
- **Chroma, Qdrant, Milvus/Zilliz** — pure vector databases. Core infrastructure for any of the finalists, not memory layers themselves.
- **OpenAI Assistants API memory** — not shipped.

---

## Methodology note

Candidate discovery ran across seven buckets in this revision: direct peer memory engines, temporal knowledge graph infrastructure, GraphRAG frameworks, vector-DB-native memory layers, curation/runtime alternatives to the LLM Wiki pattern, enterprise intelligence platforms, and incumbent collaboration-and-knowledge suites. Evidence was gathered from vendor documentation, GitHub repositories, published research, vendor engineering blogs, and third-party coverage (Gartner, Microsoft/Palantir/Glean partner blogs, Devoteam, Voitanos). Benchmark and compliance claims were cross-checked against a second source where possible.

The fifth revision tightened the finalist list. Earlier revisions profiled Microsoft GraphRAG, LightRAG, HippoRAG 2, Hebbia, and Dust in full. On re-reading, none of them come close enough to the Dorsey/Block bar to justify a full profile: GraphRAG and LightRAG are batch indexing patterns, HippoRAG 2 is a research project, Hebbia is a document-analysis workspace, and Dust is a per-user assistant platform. All five were moved to the "explicitly dropped" section with one-line rationales so readers can still see the scope of the search.

Two claims from the initial research sweep were rejected during verification: an unsourced assertion that Supermemory has slowed development (contradicted by its ongoing releases), and an unsourced assertion that Zep's original memory API was deprecated in May 2025 (not substantiated by Zep's own release notes). Both were dropped.

Five scoping corrections have accumulated across revisions.

**First**, the dual-brain requirement was initially treated as a product feature a vendor had to ship, which excluded Zep and Hindsight from the enterprise second-brain conversation. Dual-brain is an application pattern — parallel graphs behind one API — and Zep and Hindsight support it cleanly. The revised scorecard reflects that correction.

**Second**, the enterprise platform tier was absent from the first version entirely. Palantir, Microsoft Work IQ, Glean, Hebbia, and Dust were added in a second research pass after the user flagged that the original memo had skipped the category where most serious company-brain work is happening.

**Third**, the Microsoft customer-brain story was materially understated in the second version. The initial Microsoft profile framed the customer brain as "workable, not first-class" without documenting any of the composition pathways that actually exist. A third-revision research pass added the four external-CRM ingestion pathways (Customer Insights native connectors, Microsoft 365 Copilot Graph connectors in synced and federated modes, Fabric OneLake shortcuts, and Dataverse custom tables) and surfaced Dynamics 365 Customer Insights – Data as a packaged CDP primitive.

**Fourth**, and most significant for the architecture thesis, the third revision over-indexed on Dynamics 365 Customer Insights – Data as the default customer-brain primitive. That misframed the architecture for the majority of M365 shops — including most regulated financial services firms, which run Salesforce, HubSpot, or warehouse-backed CRMs and never license any Dynamics product. The fourth revision strips Customer Insights out of the default path and rebuilds the Microsoft profile around the primitives every M365 shop actually has: SharePoint (now with the Knowledge Agent, in public preview since March 2026 and positioned by Microsoft as "the number one grounding source for Microsoft 365 Copilot") for document-heavy customer knowledge, Microsoft Fabric lakehouses plus Fabric Data Agents (connected to Copilot Studio via MCP) for analytical customer data landing in OneLake through zero-copy shortcuts from Snowflake/Databricks/BigQuery/Salesforce Data Cloud, and federated Microsoft 365 Copilot Graph connectors for live operational CRM queries. Dataverse and Customer Insights – Data are retained in the profile as optional components for shops that already run them, but they are no longer treated as primitives the default path assumes. The architecture thesis, the stress-test verdict, and the ranked shortlist were all rewritten as a direct consequence.

**Fifth**, the finalist list was over-inclusive. Earlier revisions profiled thirteen systems (eight in Tier 1, five in Tier 2). On re-reading, five of those thirteen — Microsoft GraphRAG, LightRAG, HippoRAG 2, Hebbia, and Dust — do not actually come close to the Dorsey/Block bar and were inflating the memo without changing the conclusions. The fifth revision removes their full profiles and adds them to the "explicitly dropped" section with one-line rationales, leaving eight profiled finalists (Mem0, Letta, Cognee, XTDB v2, Basic Memory, Palantir, Microsoft Work IQ, Glean).

Cross-vendor benchmark comparisons in this memo should be read with the same caveat the main brief applies: backbone model and evaluation harness choices move scores meaningfully, and most of the benchmark numbers above come from vendor self-reports rather than independent replication.
