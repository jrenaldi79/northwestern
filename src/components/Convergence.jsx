/**
 * Convergence Component
 * Shows role convergence diagram with animated arrows
 */
import React from 'react';

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

export default Convergence;
