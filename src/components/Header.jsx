/**
 * Header Component
 * Displays the proposal header with metadata and hero section
 */
import React from 'react';

const Header = ({ data }) => {
  const { to, toTitle, from, fromEmail, headshot, date, title, subtitle } = data;

  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 py-16">
        {/* Meta info */}
        <div className="flex items-start justify-between mb-12">
          <div className="space-y-1 text-slate-300 text-sm">
            <p><span className="text-slate-500">TO:</span> {to}</p>
            <p className="text-slate-400 text-xs ml-8">{toTitle}</p>
            <p className="mt-2"><span className="text-slate-500">FROM:</span> {from}</p>
            <p><span className="text-slate-500">DATE:</span> {date}</p>
          </div>
          {headshot && (
            <img
              src={headshot}
              alt={from}
              className="w-24 h-24 rounded-full border-4 border-white/20 shadow-xl"
            />
          )}
        </div>

        {/* Title */}
        <div className="space-y-4">
          <p className="text-indigo-400 font-medium tracking-wider uppercase text-sm">
            Proposal for Clinical Faculty Appointment
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </div>
    </header>
  );
};

export default Header;
