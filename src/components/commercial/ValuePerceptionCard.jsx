import PremiumCard from "../shared/PremiumCard";

export default function ValuePerceptionCard({ title, description }) {
  return (
    <PremiumCard className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Valor organizado</p>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-sm leading-7 text-stone-600">{description}</p>
    </PremiumCard>
  );
}
