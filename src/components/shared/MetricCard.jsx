import PremiumCard from "./PremiumCard";

export default function MetricCard({ label, value, description }) {
  return (
    <PremiumCard className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{label}</p>
      <div className="space-y-2">
        <h3 className="text-3xl">{value}</h3>
        <p className="text-sm leading-6 text-stone-600">{description}</p>
      </div>
    </PremiumCard>
  );
}
