import { Menu, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function Topbar() {
  const location = useLocation();
  const current = navigation.find((item) => item.path === location.pathname) || navigation[0];

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-25/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-stone-200 bg-white p-2 lg:hidden">
            <Menu className="h-4 w-4 text-stone-600" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Daniela Acessórios</p>
            <p className="text-sm font-semibold text-stone-800">{current.label}</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-stone-200 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-stone-600 shadow-float sm:flex">
          <Sparkles className="h-3.5 w-3.5" />
          Proposta modular do MVP
        </div>
      </div>
    </header>
  );
}
