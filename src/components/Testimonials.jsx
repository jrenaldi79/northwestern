/**
 * Testimonials Component
 * Displays testimonial cards with different layouts based on type
 */
import React from 'react';

// Leadership testimonials - larger, more prominent
const LeadershipTestimonials = ({ testimonials }) => (
  <div className="my-10 space-y-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-6">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            {t.author?.charAt(0) || '?'}
          </div>

          <div className="flex-1">
            {/* Quote */}
            <blockquote className="text-slate-700 leading-relaxed mb-4 text-lg">
              "{t.content}"
            </blockquote>

            {/* Attribution */}
            <div>
              <p className="font-semibold text-slate-800">{t.author}</p>
              <p className="text-sm text-slate-500">{t.title}</p>
              {t.subtitle && (
                <p className="text-xs text-slate-400 italic">{t.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Teaching testimonials - medium size, professional
const TeachingTestimonials = ({ testimonials }) => (
  <div className="my-10 grid md:grid-cols-2 gap-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 p-6">
        {/* Quote */}
        <blockquote className="text-slate-700 leading-relaxed mb-4">
          "{t.content}"
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
            {t.author?.charAt(0) || '?'}
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">{t.author}</p>
            <p className="text-xs text-slate-500">{t.title}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Student testimonials - compact, grid layout
const StudentTestimonials = ({ testimonials, source }) => (
  <div className="my-10 bg-slate-50 rounded-2xl p-8 border border-slate-200">
    {source && (
      <h4 className="text-center text-sm font-medium text-slate-500 mb-6">
        Student Feedback — {source}
      </h4>
    )}

    <div className="grid md:grid-cols-2 gap-4">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          {/* Quote icon */}
          <svg className="w-6 h-6 text-indigo-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-sm text-slate-600 italic">
            "{t.content}"
          </blockquote>
        </div>
      ))}
    </div>
  </div>
);

// Main Testimonials component
const Testimonials = ({ type = 'leadership', testimonials, source }) => {
  if (!testimonials || testimonials.length === 0) return null;

  switch (type) {
    case 'teaching':
      return <TeachingTestimonials testimonials={testimonials} />;
    case 'students':
      return <StudentTestimonials testimonials={testimonials} source={source} />;
    case 'leadership':
    default:
      return <LeadershipTestimonials testimonials={testimonials} />;
  }
};

export default Testimonials;
export { LeadershipTestimonials, TeachingTestimonials, StudentTestimonials };
