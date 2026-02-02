/**
 * Main Application Component
 * Renders the full proposal using parsed content and components
 */
import React from 'react';
import CONTENT from './content';
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

export default App;
