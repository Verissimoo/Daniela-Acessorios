import StatusBadge from "../shared/StatusBadge";

export default function LayerLegend({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-2">
          <StatusBadge value={item.badge} />
          <span className="text-sm text-stone-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
