import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import {
  Plane,
  ShoppingBag,
  Store,
  FileQuestion,
  Calculator,
  ShoppingCart,
  ClipboardList,
  FileText,
  Eye,
  Megaphone,
  AlertTriangle,
  UserX,
  RotateCcw
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const steps = [
  { icon: Plane, label: "Daniela viaja para São Paulo", note: "Viagens periódicas sem histórico consolidado" },
  { icon: ShoppingBag, label: "Compra com fornecedores", note: "Múltiplos fornecedores, sem registro padronizado" },
  { icon: Store, label: "Leva mercadorias para as lojas", note: "Sem controle de entrada por loja ou lote" },
  { icon: FileQuestion, label: "Sem registro de produto ou estoque", note: "Não há catalogação nem rastreio de itens" },
  { icon: Calculator, label: "Precificação no feeling", note: "Sem cálculo de margem real ou histórico" },
  { icon: ShoppingCart, label: "Produtos são vendidos", note: "Vendas sem vínculo a produto específico" },
  { icon: ClipboardList, label: "Registra apenas valor bruto do dia", note: "Somente o total de entradas é anotado" },
  { icon: FileText, label: "Papel arquivado manualmente", note: "Informações de difícil consulta e sujeitas a perda" },
  { icon: Eye, label: "Sem visão de despesas, lucro ou comissão", note: "Não há consolidado financeiro confiável" },
  { icon: Megaphone, label: "Marketing e catálogo frágeis", note: "Fotos sem padrão, catálogo inexistente" }
];

const sideCards = [
  {
    icon: AlertTriangle,
    title: "Principais Dores",
    items: ["Sem visão de lucro real", "Não sabe quanto gasta por viagem", "Comissão sem base confiável", "Sem relatórios gerenciais"]
  },
  {
    icon: UserX,
    title: "Dependência da Dona",
    items: ["Toda precificação depende dela", "Decisões de compra sem dados", "Sem delegação possível", "Informações na memória"]
  },
  {
    icon: RotateCcw,
    title: "Retrabalho Manual",
    items: ["Anotações refeitas a cada consulta", "Cálculos manuais de fechamento", "Busca de informações em papel", "Conferência sem base digital"]
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

export default function OperacaoAtual() {
  usePageMeta("Operação Atual");

  return (
    <div className="space-y-12 pb-20">
      <SectionHeader
        tag="Diagnóstico"
        title="Como a cliente opera hoje"
        description="Fluxo operacional atual — da viagem de compra ao fechamento do dia. Cada etapa revela uma oportunidade de melhoria."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-stone-200 sm:block" />
            <div className="space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start gap-4 rounded-[24px] border border-stone-200 bg-white p-4 transition-colors hover:border-stone-300"
                  >
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-stone-200 bg-white">
                      <Icon className="h-4 w-4 text-stone-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="mb-0.5 flex items-center gap-2">
                        <span className="font-mono text-[9px] text-stone-400">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-stone-900">{step.label}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-stone-500">{step.note}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {sideCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={index + 5}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="rounded-[24px] border border-stone-200 bg-white p-5"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <Icon className="h-3.5 w-3.5 text-stone-500" strokeWidth={1.5} />
                  <h4 className="text-xs font-semibold tracking-wide text-stone-900">{card.title}</h4>
                </div>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-stone-500">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-stone-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          <motion.div
            custom={9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="rounded-[24px] bg-stone-900 p-5 text-white"
          >
            <h4 className="mb-3 text-xs font-semibold tracking-wide text-stone-300">Riscos do Modelo Atual</h4>
            <ul className="space-y-2.5">
              {[
                "Decisões sem dados podem gerar prejuízo invisível",
                "Comissões imprecisas geram conflito com equipe",
                "Sem histórico, cada viagem começa do zero",
                "Catálogo frágil enfraquece a marca"
              ].map((risk) => (
                <li key={risk} className="flex items-start gap-2 text-xs text-stone-300">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-stone-500" />
                  {risk}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
