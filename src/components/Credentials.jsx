/**
 * Credentials Component
 * Displays credential badges in a compact, visual format
 */
import React from 'react';

const Credentials = ({ credentials }) => {
  if (!credentials || credentials.length === 0) return null;

  return (
    <div className="my-8 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8">
      <h4 className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">
        At a Glance
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {credentials.map((cred, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
              {cred.value}
            </div>
            <div className="text-sm text-slate-400">
              {cred.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credentials;
