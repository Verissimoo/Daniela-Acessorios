import PremiumCard from "../shared/PremiumCard";

const rows = [
  ["Faixa de investimento", "[preencher]"],
  ["Complexidade", "Definir em reunião"],
  ["Esforço", "Definir em reunião"],
  ["Valor percebido", "Definir em reunião"],
  ["Modelo de contratação", "Definir em reunião"]
];

export default function PricingPlaceholderCard({ compact = false, values = {} }) {
  return (
    <PremiumCard className={compact ? "p-4" : ""}>
      <div className="space-y-3">
        {rows.map(([label, fallback]) => (
          <div key={label} className="flex items-center justify-between gap-4 border-b border-stone-100 pb-3 last:border-b-0 last:pb-0">
            <span className="text-xs uppercase tracking-[0.18em] text-stone-500">{label}</span>
            <span className="text-sm font-medium text-stone-800">{values[label] || fallback}</span>
          </div>
        ))}
      </div>
    </PremiumCard>
  );
}
