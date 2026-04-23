import PremiumCard from "../shared/PremiumCard";

export default function SaleFormatCard({ item }) {
  return (
    <PremiumCard className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Formato de venda</p>
        <h3 className="text-3xl">{item.name}</h3>
        <p className="text-sm leading-7 text-stone-600">{item.logic}</p>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Vantagem comercial</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {item.advantages.map((advantage) => (
              <li key={advantage}>• {advantage}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[24px] border border-stone-200 bg-white px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Percepção de valor</p>
          <p className="mt-2 text-sm text-stone-700">{item.perceivedValue}</p>
        </div>
        <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Melhor contexto de venda</p>
          <p className="mt-2 text-sm text-stone-700">{item.bestUseCase}</p>
        </div>
        <div className="rounded-[24px] border border-stone-200 bg-white px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Defesa comercial</p>
          <p className="mt-2 text-sm text-stone-700">{item.salesDefense}</p>
        </div>
        <div className="rounded-[24px] border border-stone-200 bg-stone-900 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-300">Contratação sugerida</p>
          <p className="mt-2 text-sm text-stone-100">{item.contractSuggestion}</p>
        </div>
      </div>
    </PremiumCard>
  );
}
