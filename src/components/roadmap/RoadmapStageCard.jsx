import PremiumCard from "../shared/PremiumCard";
import StatusBadge from "../shared/StatusBadge";

export default function RoadmapStageCard({ stage }) {
  return (
    <PremiumCard className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge value={stage.commercialClassification} />
        <StatusBadge value={stage.phaseType} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl">{stage.name}</h3>
        <p className="text-sm leading-7 text-stone-600">{stage.goal}</p>
      </div>
    </PremiumCard>
  );
}
