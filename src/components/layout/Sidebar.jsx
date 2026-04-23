import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-[290px] shrink-0 border-r border-white/10 bg-noir px-6 py-7 text-stone-50 lg:sticky lg:top-0 lg:block">
      <div className="flex h-full flex-col">
        <div className="space-y-8">
          <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-6 shadow-insetLine backdrop-blur">
            <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400">Proposta</p>
            <div className="mt-4 space-y-0 text-3xl leading-none">
              <h1 className="text-stone-50">Daniela</h1>
              <h1 className="text-stone-300">Acessórios</h1>
            </div>
            <div className="mt-6 h-px w-full bg-white/10" />
            <p className="mt-4 text-xs leading-6 text-stone-400">
              Estrutura comercial modular do MVP, com leitura executiva e evolução futura organizada.
            </p>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                      isActive ? "bg-white text-stone-900 shadow-float" : "text-stone-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-105" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto rounded-[24px] border border-white/10 bg-white/5 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">Leitura central</p>
          <div className="mt-3 space-y-2 text-sm text-stone-300">
            <p>Núcleo gerencial primeiro.</p>
            <p>Marketing como frente separada.</p>
            <p>Estoque apenas como upsell.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
