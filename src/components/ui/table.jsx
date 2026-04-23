export function Table({ children }) {
  return <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white">{children}</div>;
}

export function TableHead({ children }) {
  return <thead className="bg-stone-50/80 text-left text-xs uppercase tracking-[0.18em] text-stone-500">{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr className="border-b border-stone-100 last:border-b-0">{children}</tr>;
}

export function TableCell({ children, className = "" }) {
  return <td className={`px-4 py-4 align-top text-sm text-stone-700 ${className}`}>{children}</td>;
}

export function TableHeader({ children }) {
  return <th className="px-4 py-3 font-semibold">{children}</th>;
}
