/**
 * Chart Component
 * Renders various chart types: growth, bar, hierarchy, range
 */
import React from 'react';

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

export default Chart;
export { GrowthChart, BarChart, HierarchyChart, RangeChart };
