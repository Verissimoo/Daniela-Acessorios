import { GitBranchPlus } from "lucide-react";
import PremiumCard from "../shared/PremiumCard";
import PillTag from "../shared/PillTag";

export default function DependencyBlock({ title = "Dependências", dependencies = [] }) {
  return (
    <PremiumCard className="space-y-4">
      <div className="flex items-center gap-3">
        <GitBranchPlus className="h-4 w-4 text-stone-500" />
        <h3 className="text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {dependencies.length ? dependencies.map((item) => <PillTag key={item}>{item}</PillTag>) : <PillTag>Nenhuma</PillTag>}
      </div>
    </PremiumCard>
  );
}
