import ComparisonTable from "../components/commercial/ComparisonTable";
import PackageCard from "../components/commercial/PackageCard";
import PremiumCard from "../components/shared/PremiumCard";
import SectionHeader from "../components/shared/SectionHeader";
import { comparisons } from "../data/comparisons";
import { packages } from "../data/packages";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Pacotes() {
  usePageMeta("Pacotes");

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Pacotes"
        title="Quatro pacotes para modular negociação e percepção de valor"
        description="Os pacotes permitem vender o núcleo do MVP, expandir automação e gestão, separar a frente de marca e deixar o estoque como evolução futura."
      />
      <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-4">
        {packages.map((item) => (
          <PackageCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid gap-5 xl:grid-cols-4">
        {packages.map((item) => (
          <PremiumCard key={`${item.id}-compare`} className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">Comparação entre pacotes</p>
            <h3 className="text-2xl">{item.name}</h3>
            <p className="text-sm text-stone-600">{item.summary}</p>
            <div className="rounded-[24px] border border-stone-200 bg-stone-50 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Componentes</p>
              <p className="mt-2 text-sm text-stone-700">{item.includes.length} blocos principais</p>
            </div>
            <div className="rounded-[24px] border border-stone-200 bg-white px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Dependência</p>
              <p className="mt-2 text-sm text-stone-700">{item.dependencies[0]}</p>
            </div>
          </PremiumCard>
        ))}
      </div>
      <ComparisonTable rows={comparisons.filter((row) => ["MVP", "Add-on", "Opcional", "Upsell"].includes(row.tipoComercial))} />
    </div>
  );
}
