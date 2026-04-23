import { ArrowRight, Layers2 } from "lucide-react";
import PricingPlaceholderCard from "./PricingPlaceholderCard";
import PremiumCard from "../shared/PremiumCard";
import StatusBadge from "../shared/StatusBadge";
import PillTag from "../shared/PillTag";

export default function SubproductCard({ subproduct }) {
  return (
    <PremiumCard className="flex h-full flex-col gap-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge value={subproduct.priority} />
          <StatusBadge value={subproduct.commercialType} />
          {subproduct.category && <StatusBadge value={subproduct.category} />}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">{subproduct.name}</h3>
          <p className="text-sm leading-7 text-stone-600">{subproduct.shortDescription}</p>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.25fr_0.95fr]">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Entregas principais</p>
            <ul className="space-y-2 text-sm text-stone-700">
              {subproduct.deliveries.map((item) => (
                <li key={item} className="flex gap-3">
                  <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Fase</p>
              <p className="mt-2 text-sm font-medium text-stone-800">{subproduct.phase}</p>
            </div>
            <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Valor percebido</p>
              <p className="mt-2 text-sm font-medium text-stone-800">{subproduct.perceivedValue}</p>
            </div>
          </div>
          <div className="rounded-[24px] border border-stone-200 bg-white px-4 py-4">
            <div className="mb-3 flex items-center gap-2">
              <Layers2 className="h-4 w-4 text-stone-500" />
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Dependências</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {subproduct.dependencies.length ? (
                subproduct.dependencies.map((item) => <PillTag key={item}>{item}</PillTag>)
              ) : (
                <PillTag>Nenhuma</PillTag>
              )}
            </div>
          </div>
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Modelo de venda</p>
            <p className="mt-2 text-sm text-stone-700">{subproduct.salesModel}</p>
          </div>
        </div>
        <PricingPlaceholderCard
          values={{
            "Faixa de investimento": subproduct.investmentRange,
            Complexidade: subproduct.complexity,
            Esforço: subproduct.effort,
            "Valor percebido": subproduct.perceivedValue,
            "Modelo de contratação": subproduct.contractModel
          }}
        />
      </div>
    </PremiumCard>
  );
}
