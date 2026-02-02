/**
 * Table Component
 * Renders markdown tables with various styling variants
 */
import React from 'react';
import RichText from './RichText';

const Table = ({ headers, rows, variant = 'default' }) => {
  if (!headers || !rows || rows.length === 0) return null;

  // Variant-specific styling
  const variants = {
    default: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-slate-50 text-slate-700',
      headerCell: 'px-6 py-4 text-left text-sm font-semibold',
      row: 'border-t border-slate-100 hover:bg-slate-50 transition-colors',
      cell: 'px-6 py-4 text-sm text-slate-600',
    },
    comparison: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-gradient-to-r from-slate-100 to-indigo-50 text-slate-800',
      headerCell: 'px-6 py-4 text-center text-sm font-bold',
      row: 'border-t border-slate-100',
      cell: 'px-6 py-4 text-sm text-slate-600 text-center',
      firstCell: 'text-left font-medium text-slate-700 bg-slate-50',
    },
    data: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden font-mono',
      header: 'bg-slate-800 text-white',
      headerCell: 'px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider',
      row: 'border-t border-slate-100 even:bg-slate-50',
      cell: 'px-6 py-3 text-sm text-slate-600',
    },
    checklist: {
      container: 'bg-white border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-indigo-50 text-indigo-800',
      headerCell: 'px-6 py-4 text-left text-sm font-semibold',
      row: 'border-t border-slate-100',
      cell: 'px-6 py-4 text-sm text-slate-600',
    },
    timeline: {
      container: 'bg-gradient-to-r from-slate-50 to-indigo-50 border border-slate-200 rounded-xl overflow-hidden',
      header: 'bg-slate-800 text-white',
      headerCell: 'px-4 py-3 text-center text-xs font-semibold uppercase',
      row: '',
      cell: 'px-4 py-4 text-sm text-slate-600 text-center border-r border-slate-200 last:border-r-0',
    },
  };

  const styles = variants[variant] || variants.default;

  // Check if a cell content looks like a checkmark or comparison indicator
  const renderCellContent = (content, cellIndex) => {
    // For comparison variant, highlight the first column
    const isFirstCol = variant === 'comparison' && cellIndex === 0;
    const cellStyle = isFirstCol ? styles.firstCell : '';

    // Handle checkmark patterns
    if (content === '✓' || content === '✔' || content.toLowerCase() === 'yes') {
      return (
        <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
            ✓
          </span>
        </td>
      );
    }

    if (content === '✗' || content === '✘' || content.toLowerCase() === 'no') {
      return (
        <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600">
            ✗
          </span>
        </td>
      );
    }

    return (
      <td key={cellIndex} className={`${styles.cell} ${cellStyle}`}>
        <RichText>{content}</RichText>
      </td>
    );
  };

  return (
    <div className={`my-8 overflow-x-auto ${styles.container}`}>
      <table className="w-full">
        <thead className={styles.header}>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.row}>
              {row.map((cell, cellIndex) => renderCellContent(cell, cellIndex))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
