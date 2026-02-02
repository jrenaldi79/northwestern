/**
 * StatsGrid Component
 * Displays a grid of statistics with visual emphasis
 */
import React from 'react';

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

export default StatsGrid;
