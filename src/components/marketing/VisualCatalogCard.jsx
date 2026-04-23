import PremiumCard from "../shared/PremiumCard";

export default function VisualCatalogCard({ title, description, bullets }) {
  return (
    <PremiumCard className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Catálogo & imagem</p>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-sm leading-7 text-stone-600">{description}</p>
      </div>
      <ul className="space-y-2 text-sm text-stone-700">
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </PremiumCard>
  );
}
