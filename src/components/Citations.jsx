/**
 * Citations Component
 * Renders the citations section with formatted references
 */
import React from 'react';

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

export default Citations;
