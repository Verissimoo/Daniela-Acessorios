import PremiumCard from "../shared/PremiumCard";

export default function BrandingBlock({ title, description }) {
  return (
    <PremiumCard className="space-y-3 border-stone-300 bg-stone-900 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">Marca & presença</p>
      <h3 className="text-2xl text-white">{title}</h3>
      <p className="text-sm leading-7 text-stone-300">{description}</p>
    </PremiumCard>
  );
}
