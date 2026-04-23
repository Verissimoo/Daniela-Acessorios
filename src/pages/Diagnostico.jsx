import { motion } from "framer-motion";
import {
  DollarSign,
  Settings,
  Users,
  Megaphone,
  BookOpen,
  BarChart3
} from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import StatusBadge from "../components/shared/StatusBadge";
import { usePageMeta } from "../hooks/usePageMeta";

const areas = [
  {
    icon: DollarSign,
    area: "Financeiro",
    problems: [
      { problem: "Entradas sem estrutura", impact: "Impossível saber o faturamento real por loja", consequence: "Decisões de compra feitas sem base concreta", urgency: "Alta" },
      { problem: "Despesas não controladas", impact: "Custos ocultos corroem a margem do negócio", consequence: "Risco de operar no prejuízo sem perceber", urgency: "Alta" },
      { problem: "Viagens sem histórico", impact: "Impossível comparar custo-benefício entre viagens", consequence: "Gastos podem crescer sem controle visível", urgency: "Média" }
    ]
  },
  {
    icon: Settings,
    area: "Operação",
    problems: [
      { problem: "Registros manuais em papel", impact: "Informação sujeita a perda e difícil consulta", consequence: "Retrabalho constante e sem análise histórica", urgency: "Alta" },
      { problem: "Sem processo padronizado", impact: "Cada loja pode operar de forma diferente", consequence: "Dados inconsistentes e não comparáveis", urgency: "Média" }
    ]
  },
  {
    icon: Users,
    area: "Comissão",
    problems: [
      { problem: "Comissão pouco clara", impact: "Equipe sem transparência sobre seus ganhos", consequence: "Desmotivação e risco de conflitos", urgency: "Alta" },
      { problem: "Base de cálculo indefinida", impact: "Sem critério formal, variação inconsistente", consequence: "Risco jurídico e financeiro para o negócio", urgency: "Média" }
    ]
  },
  {
    icon: Megaphone,
    area: "Marketing",
    problems: [
      { problem: "Fotos sem padrão", impact: "Comunicação visual inconsistente", consequence: "Dificuldade de posicionar a marca premium", urgency: "Média" },
      { problem: "Sem estratégia digital", impact: "Presença online frágil e não profissional", consequence: "Perde clientes para concorrentes mais digitais", urgency: "Média" }
    ]
  },
  {
    icon: BookOpen,
    area: "Catálogo",
    problems: [
      { problem: "Catálogo improvisado ou inexistente", impact: "Vendedoras sem material de apoio", consequence: "Vendas consultivas limitadas e pouco convincentes", urgency: "Média" },
      { problem: "Imagens sem tratamento", impact: "Material visual de baixa qualidade", consequence: "Produtos premium perdem percepção de valor", urgency: "Baixa" }
    ]
  },
  {
    icon: BarChart3,
    area: "Gestão",
    problems: [
      { problem: "Sem visão gerencial", impact: "Proprietária não enxerga o negócio como um todo", consequence: "Crescimento limitado, decisões reativas", urgency: "Alta" },
      { problem: "Dependência total da dona", impact: "Nenhuma decisão acontece sem ela", consequence: "Negócio não escala, qualquer ausência é risco", urgency: "Alta" }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
};

export default function Diagnostico() {
  usePageMeta("Diagnóstico");

  return (
    <div className="space-y-10 pb-20">
      <SectionHeader
        tag="Diagnóstico"
        title="Principais Problemas"
        description="Gargalos mapeados por área — impacto, consequência e urgência de cada um."
      />

      <div className="space-y-8">
        {areas.map((area, areaIndex) => {
          const Icon = area.icon;
          return (
            <motion.div key={area.area} custom={areaIndex} variants={fadeUp} initial="hidden" animate="visible">
              <div className="mb-3 flex items-center gap-3">
                <Icon className="h-3.5 w-3.5 text-stone-500" strokeWidth={1.5} />
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-900">{area.area}</h3>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {area.problems.map((problem) => (
                  <div key={problem.problem} className="rounded-[24px] border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h4 className="text-sm font-semibold text-stone-900">{problem.problem}</h4>
                      <StatusBadge status={problem.urgency} />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-stone-500">Impacto</p>
                        <p className="text-xs text-stone-600">{problem.impact}</p>
                      </div>
                      <div>
                        <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-stone-500">Consequência</p>
                        <p className="text-xs text-stone-600">{problem.consequence}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
