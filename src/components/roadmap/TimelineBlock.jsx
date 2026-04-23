import { ArrowRight } from "lucide-react";
import PremiumCard from "../shared/PremiumCard";
import StatusBadge from "../shared/StatusBadge";

export default function TimelineBlock({ item }) {
  return (
    <PremiumCard className="relative space-y-5 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-stone-900/90" />
      <div className="pl-5">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge value={item.commercialClassification} />
          <StatusBadge value={item.phaseType} />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-3xl">{item.name}</h3>
          <p className="text-sm leading-7 text-stone-600">{item.goal}</p>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Entregas</p>
            <ul className="mt-3 space-y-2 text-sm text-stone-700">
              {item.deliveries.map((delivery) => (
                <li key={delivery} className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-stone-400" />
                  <span>{delivery}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Subprodutos relacionados</p>
            <div className="mt-3 space-y-2">
              {item.relatedSubproducts.map((subproduct) => (
                <p key={subproduct} className="text-sm text-stone-700">
                  {subproduct}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}
