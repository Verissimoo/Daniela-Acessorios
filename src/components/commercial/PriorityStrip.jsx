import StatusBadge from "../shared/StatusBadge";

export default function PriorityStrip({ labels }) {
  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <StatusBadge key={label} value={label} />
      ))}
    </div>
  );
}
