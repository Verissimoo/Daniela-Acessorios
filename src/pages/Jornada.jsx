import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import {
  Store,
  CreditCard,
  Smartphone,
  BarChart3,
  Receipt,
  Paperclip,
  Tag,
  Plane,
  ShoppingBag,
  DollarSign,
  MessageSquare,
  Brain,
  CheckCircle,
  Clock,
  Users,
  Settings,
  FileText
} from "lucide-react";

const flows = [
  {
    id: "A",
    title: "Fechamento do Dia",
    desc: "Como a loja registra as entradas ao fim do expediente",
    steps: [
      { icon: Store, label: "Loja informa valor bruto do dia", detail: "Final do expediente" },
      { icon: CreditCard, label: "Separa por Pix, cartão e dinheiro", detail: "Detalhamento por forma de pagamento" },
      { icon: Smartphone, label: "Sistema salva o fechamento", detail: "Registro automático com data e loja" },
      { icon: BarChart3, label: "Painel atualiza indicadores", detail: "Totais diários, semanais e mensais" }
    ]
  },
  {
    id: "B",
    title: "Registro de Despesa",
    desc: "Como despesas são lançadas e categorizadas",
    steps: [
      { icon: Receipt, label: "Usuário registra despesa", detail: "Fixa ou variável, com valor e tipo" },
      { icon: Paperclip, label: "Anexa comprovante", detail: "Foto ou arquivo digital" },
      { icon: Tag, label: "Sistema classifica", detail: "Categorização automática" },
      { icon: BarChart3, label: "Reflete nos relatórios", detail: "Impacto visível nos dashboards" }
    ]
  },
  {
    id: "C",
    title: "Viagem para São Paulo",
    desc: "Como viagens de compra são registradas e consolidadas",
    steps: [
      { icon: Plane, label: "Criar viagem", detail: "Data, destino, objetivo" },
      { icon: DollarSign, label: "Custos operacionais", detail: "Transporte, hospedagem, alimentação" },
      { icon: ShoppingBag, label: "Compras de mercadoria", detail: "Fornecedor, valor, comprovante" },
      { icon: FileText, label: "Relatório da viagem", detail: "Consolidado completo ao fim" }
    ]
  },
  {
    id: "D",
    title: "Lançamento via WhatsApp",
    desc: "Como o sistema interpreta mensagens e cria registros",
    steps: [
      { icon: MessageSquare, label: "Usuária envia mensagem simples", detail: 'Ex: "Entrada Taguatinga 3500"' },
      { icon: Brain, label: "Sistema interpreta", detail: "IA identifica tipo e dados" },
      { icon: CheckCircle, label: "Confirma o lançamento", detail: "Resposta com resumo para validar" },
      { icon: Clock, label: "Dado incompleto → pendente", detail: "Marcado para revisão no painel" }
    ]
  },
  {
    id: "E",
    title: "Cálculo de Comissão",
    desc: "Como comissões são calculadas e apresentadas",
    steps: [
      { icon: Users, label: "Sistema consolida o período", detail: "Entradas por vendedora e loja" },
      { icon: Settings, label: "Aplica regra configurável", detail: "Percentual e base definidos" },
      { icon: FileText, label: "Gera relatório", detail: "Detalhado por vendedora e período" }
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4 }
  })
};

export default function Jornada() {
  return (
    <div className="space-y-10 pb-20">
      <SectionHeader
        tag="Experiência"
        title="Jornada de Uso do MVP"
        description="Mini-fluxos mostrando como o sistema funciona na prática — respeitando a rotina atual."
      />

      <div className="space-y-4">
        {flows.map((flow, flowIndex) => (
          <motion.div
            key={flow.id}
            custom={flowIndex}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-[24px] border border-stone-200 bg-white"
          >
            <div className="flex items-center gap-4 border-b border-stone-200 bg-stone-50 px-5 py-3.5">
              <span className="font-mono text-xs font-bold text-stone-400">Fluxo {flow.id}</span>
              <div>
                <h3 className="text-sm font-semibold text-stone-900">{flow.title}</h3>
                <p className="text-[11px] text-stone-500">{flow.desc}</p>
              </div>
            </div>

            <div className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row">
                {flow.steps.map((step, stepIndex) => {
                  const Icon = step.icon;
                  return (
                    <div key={`${flow.id}-${step.label}`} className="flex flex-1 items-start gap-3">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-stone-200">
                          <Icon className="h-3.5 w-3.5 text-stone-500" strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-[9px] text-stone-400">{String(stepIndex + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="pt-0.5">
                        <p className="text-xs font-semibold leading-tight text-stone-900">{step.label}</p>
                        <p className="mt-0.5 text-[11px] text-stone-500">{step.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
