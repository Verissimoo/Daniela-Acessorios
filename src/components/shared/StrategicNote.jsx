import { Quote } from "lucide-react";
import PremiumCard from "./PremiumCard";

export default function StrategicNote({ title, content }) {
  return (
    <PremiumCard className="bg-stone-900 text-white">
      <div className="space-y-4">
        <Quote className="h-5 w-5 text-stone-300" />
        <div className="space-y-2">
          <h3 className="text-2xl text-white">{title}</h3>
          <p className="text-sm leading-7 text-stone-300">{content}</p>
        </div>
      </div>
    </PremiumCard>
  );
}
