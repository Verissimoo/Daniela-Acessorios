import ComparisonTable from "../components/commercial/ComparisonTable";
import DependencyBlock from "../components/commercial/DependencyBlock";
import ValuePerceptionCard from "../components/commercial/ValuePerceptionCard";
import PremiumCard from "../components/shared/PremiumCard";
import SectionHeader from "../components/shared/SectionHeader";
import StatusBadge from "../components/shared/StatusBadge";
import { comparisons } from "../data/comparisons";
import { subproducts } from "../data/subproducts";
import { usePageMeta } from "../hooks/usePageMeta";

const valueBlocks = [
  ["Base estratégica", "Diagnóstico e estruturação criam clareza de escopo e segurança comercial."],
  ["Base operacional", "Núcleo financeiro e rotina diária entregam o coração do MVP."],
  ["Automação", "WhatsApp reduz atrito e acelera adesão."],
  ["Gestão", "Dashboards e comissão traduzem dados em leitura executiva."],
  ["Marketing", "Catálogo e site criam frente comercial independente."],
  ["Evolução", "O estoque vira próxima etapa, não promessa prematura."]
];

export default function EstruturaComercialMVP() {
  usePageMeta("Estrutura Comercial");

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Estrutura Comercial"
        title="O valor da proposta foi organizado em camadas negociáveis"
        description="Essencial, complementar, opcional e upsell aparecem como blocos distintos, mas conectados, o que melhora discurso, pacote, comparação e precificação."
      />

      <div className="grid gap-5 lg:grid-cols-4">
        {["Essencial", "Complementar", "Opcional", "Upsell"].map((type) => (
          <PremiumCard key={type} className="space-y-4">
            <StatusBadge value={type} />
            <div className="space-y-2">
              <h3 className="text-2xl">{type}</h3>
              <p className="text-sm leading-7 text-stone-600">
                {subproducts.filter((item) => item.priority === type || item.commercialType === type).length} blocos associados a esta leitura comercial.
              </p>
            </div>
          </PremiumCard>
        ))}
      </div>

      <ComparisonTable rows={comparisons} />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <DependencyBlock title="Mapa visual de dependência" dependencies={["Diagnóstico → Núcleo gerencial → Rotina → Automação / Dashboards → Marketing → Estoque como upsell"]} />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {valueBlocks.map(([title, description]) => (
            <ValuePerceptionCard key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}
