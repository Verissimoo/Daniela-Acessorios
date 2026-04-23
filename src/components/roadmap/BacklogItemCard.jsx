import PremiumCard from "../shared/PremiumCard";
import PillTag from "../shared/PillTag";
import StatusBadge from "../shared/StatusBadge";

export default function BacklogItemCard({ item }) {
  return (
    <PremiumCard className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge value={item.priority.split(" / ")[0]} />
        <StatusBadge value={item.commercialType} />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl">{item.phase}</h3>
        <p className="text-sm font-semibold text-stone-800">{item.title}</p>
        <p className="text-sm leading-7 text-stone-600">{item.objective}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Subproduto</p>
          <p className="mt-2 text-sm text-stone-700">{item.subproduct}</p>
        </div>
        <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Domínio</p>
          <p className="mt-2 text-sm text-stone-700">{item.domain}</p>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-stone-700">
        {item.items.map((entry) => (
          <li key={entry}>• {entry}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <PillTag key={tag}>{tag}</PillTag>
        ))}
      </div>
    </PremiumCard>
  );
}
