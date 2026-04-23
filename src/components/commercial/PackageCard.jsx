import { Check } from "lucide-react";
import PricingPlaceholderCard from "./PricingPlaceholderCard";
import PremiumCard from "../shared/PremiumCard";

export default function PackageCard({ item }) {
  return (
    <PremiumCard className="flex h-full flex-col gap-6">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Pacote</p>
        <h3 className="text-3xl">{item.name}</h3>
        <p className="text-sm leading-7 text-stone-600">{item.summary}</p>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Inclui</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {item.includes.map((entry) => (
              <li key={entry} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-stone-500" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Melhor uso</p>
            <p className="mt-2 text-sm text-stone-700">{item.bestFor}</p>
          </div>
          <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Valor estratégico</p>
            <p className="mt-2 text-sm text-stone-700">{item.strategicValue}</p>
          </div>
        </div>
      </div>

      <PricingPlaceholderCard
        compact
        values={{
          "Faixa de investimento": item.investmentRange,
          Complexidade: item.complexity,
          Esforço: item.effort,
          "Valor percebido": item.perceivedValue,
          "Modelo de contratação": item.contractModel
        }}
      />
    </PremiumCard>
  );
}
