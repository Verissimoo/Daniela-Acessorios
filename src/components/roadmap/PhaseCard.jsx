import PremiumCard from "../shared/PremiumCard";
import StatusBadge from "../shared/StatusBadge";

export default function PhaseCard({ item }) {
  return (
    <PremiumCard className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl">{item.phase}</h3>
        <StatusBadge value={item.priority.split(" / ")[0]} />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-semibold text-stone-800">{item.title}</p>
        <p className="text-sm leading-7 text-stone-600">{item.objective}</p>
      </div>
    </PremiumCard>
  );
}
