/**
 * Section Component
 * Renders a document section with consistent styling
 */
import React from 'react';
import RichText from './RichText';

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

export default Section;
export { Section, Subsection, Paragraph, BulletList };
