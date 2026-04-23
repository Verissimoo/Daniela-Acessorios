import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Workflow,
  AlertTriangle,
  Target,
  Route,
  BarChart3,
  ListChecks,
  Palette,
  TrendingUp,
  HelpCircle,
  X,
  Diamond,
  Package2,
  Banknote
} from "lucide-react";

const navItems = [
  { path: "/", label: "Visão Geral", icon: LayoutDashboard },
  { path: "/operacao-atual", label: "Operação Atual", icon: Workflow },
  { path: "/problemas", label: "Diagnóstico", icon: AlertTriangle },
  { path: "/modulos", label: "Escopo do MVP", icon: Target },
  { path: "/jornada", label: "Jornada de Uso", icon: Route },
  { path: "/dashboard-gerencial", label: "Dashboard", icon: BarChart3 },
  { path: "/backlog", label: "Backlog por Fases", icon: ListChecks },
  { path: "/marketing", label: "Marketing & Catálogo", icon: Palette },
  { path: "/evolucao", label: "Evolução & Upsell", icon: TrendingUp },
  { path: "/validacoes", label: "Validações", icon: HelpCircle },
  { path: "/subprodutos", label: "Estrutura Comercial", icon: Package2 },
  { path: "/como-vender", label: "Proposta Comercial", icon: Banknote },
];

export default function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <div className="h-full bg-sidebar flex flex-col">
      <div className="px-6 py-7 flex items-start justify-between border-b border-sidebar-border">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <Diamond className="h-4 w-4 text-sidebar-foreground/60" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.25em] uppercase text-sidebar-foreground/40 font-medium">
              Proposta
            </span>
          </div>
          <h1 className="font-display text-lg font-semibold text-sidebar-foreground leading-tight">
            Daniela
          </h1>
          <h1 className="font-display text-lg font-light text-sidebar-foreground/70 leading-tight -mt-0.5">
            Acessórios
          </h1>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded hover:bg-sidebar-accent transition-colors text-sidebar-foreground/40 mt-1"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200 group ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${isActive ? "" : "opacity-60 group-hover:opacity-100"}`} strokeWidth={1.5} />
                <span className="truncate text-[13px] tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="px-4 py-5 border-t border-sidebar-border">
        <p className="text-[10px] tracking-[0.15em] uppercase text-sidebar-foreground/25 leading-relaxed">
          Protótipo executivo<br />para validação interna
        </p>
      </div>
    </div>
  );
}
