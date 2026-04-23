import PremiumCard from "../shared/PremiumCard";

export default function DeliveryGroup({ title, items }) {
  return (
    <PremiumCard className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{title}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <p key={item} className="text-sm text-stone-700">
            {item}
          </p>
        ))}
      </div>
    </PremiumCard>
  );
}
