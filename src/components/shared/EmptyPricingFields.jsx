import { pricingPlaceholderLabels } from "../../data/pricingPlaceholders";

export default function EmptyPricingFields() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {pricingPlaceholderLabels.map((label) => (
        <div key={label} className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">{label}</p>
          <p className="mt-1 text-sm text-stone-700">[preencher]</p>
        </div>
      ))}
    </div>
  );
}
