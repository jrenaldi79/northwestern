/**
 * Timeline Component
 * Displays career timeline with highlighted entries
 */
import React from 'react';
import RichText from './RichText';

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

export default Timeline;
