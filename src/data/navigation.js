import {
  Blocks,
  BriefcaseBusiness,
  ChartColumnBig,
  ClipboardCheck,
  Compass,
  FolderKanban,
  Gem,
  GitBranch,
  LayoutDashboard,
  Layers3,
  Map,
  Package,
  PanelsTopLeft,
  ShoppingBag,
  Sparkles,
  Target
} from "lucide-react";

export const navigation = [
  { label: "Visão Geral", path: "/", icon: LayoutDashboard },
  { label: "Operação Atual", path: "/operacao-atual", icon: Compass },
  { label: "Diagnóstico", path: "/diagnostico", icon: ClipboardCheck },
  { label: "Jornada do MVP", path: "/jornada", icon: GitBranch },
  { label: "Escopo do MVP", path: "/escopo-mvp", icon: Target },
  { label: "Módulos do Sistema", path: "/modulos", icon: PanelsTopLeft },
  { label: "Subprodutos da Solução", path: "/subprodutos", icon: Layers3 },
  { label: "Estrutura Comercial", path: "/estrutura-comercial", icon: Blocks },
  { label: "Pacotes", path: "/pacotes", icon: Package },
  { label: "Como Podemos Vender Isso", path: "/como-vender", icon: BriefcaseBusiness },
  { label: "Dashboard Gerencial", path: "/dashboard-gerencial", icon: ChartColumnBig },
  { label: "Backlog por Fases", path: "/backlog", icon: FolderKanban },
  { label: "Roadmap", path: "/roadmap", icon: Map },
  { label: "Marketing & Catálogo", path: "/marketing-catalogo", icon: ShoppingBag },
  { label: "Evolução & Upsell", path: "/evolucao-upsell", icon: Sparkles },
  { label: "Validações", path: "/validacoes", icon: Gem }
];
