/**
 * QuoteCarousel Component
 * Displays quotes in a scrollable carousel format
 */
import React, { useState } from 'react';

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

export default QuoteCarousel;
