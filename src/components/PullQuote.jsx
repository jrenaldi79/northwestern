/**
 * PullQuote Component
 * A featured/highlighted quote for visual emphasis
 */
import React from 'react';

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

export default PullQuote;
