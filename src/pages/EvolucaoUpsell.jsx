import { motion } from "framer-motion";
import {
  DollarSign,
  Palette,
  Package,
  ArrowRight,
  ChevronRight,
  BarChart3,
  BookOpen,
  RefreshCw,
  Store,
  TrendingUp,
  Diamond
} from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";

const stages = [
  {
    tag: "Antes",
    title: "Operação Manual",
    style: "bg-stone-50 border-stone-200",
    titleStyle: "text-stone-500",
    items: ["Registros em papel", "Sem visão financeira", "Marketing improvisado", "Zero presença digital", "Decisões no feeling"]
  },
  {
    tag: "MVP — Agora",
    title: "Gestão & Marketing",
    style: "bg-stone-900 border-stone-900",
    titleStyle: "text-white",
    tagStyle: "text-stone-500",
    itemStyle: "text-stone-300",
    arrowStyle: "text-stone-500",
    items: ["Entradas e despesas organizadas", "Dashboard gerencial", "Comissão transparente", "Catálogo digital", "Site institucional"]
  },
  {
    tag: "Fase 2 — Upsell",
    title: "Estoque & Evolução",
    style: "bg-stone-50 border-stone-300 border-dashed",
    titleStyle: "text-stone-500",
    tagStyle: "text-stone-500",
    items: ["Entrada por lote", "Saldo por loja", "Movimentação rastreada", "Margem real por produto", "Catálogo + Estoque"]
  }
];

const futureModules = [
  { icon: Package, title: "Entrada por Lote", desc: "Mercadoria por lote vinculado a fornecedor e viagem." },
  { icon: Store, title: "Saldo por Loja", desc: "Quantas peças de cada produto em cada loja." },
  { icon: RefreshCw, title: "Movimentação", desc: "Rastrear transferências entre Taguatinga e Sudoeste." },
  { icon: BarChart3, title: "Margem Real", desc: "Lucro por produto com base no custo real de compra." },
  { icon: BookOpen, title: "Catálogo + Estoque", desc: "Integrar catálogo digital com disponibilidade real." },
  { icon: TrendingUp, title: "Dados Concretos", desc: "Com meses de dados, decisões de compra muito mais precisas." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 }
  })
};

export default function Evolucao() {
  usePageMeta("Evolução & Upsell");

  return (
    <div className="space-y-16 pb-20">
      <SectionHeader
        tag="Visão Estratégica"
        title="Evolução Futura — Upsell de Estoque"
        description="O estoque não é uma falha do MVP. É uma evolução estratégica que chega quando o negócio tem maturidade e dados para sustentá-la."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[24px] border border-stone-200 bg-white p-7"
      >
        <span className="mb-4 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Racional</span>
        <div className="grid grid-cols-1 gap-6 divide-y divide-stone-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { icon: DollarSign, step: "1°", title: "Organizar o dinheiro", desc: "Entradas, despesas, viagens, comissão — tudo registrado e visível" },
            { icon: Palette, step: "2°", title: "Fortalecer a marca", desc: "Catálogo profissional, marketing estruturado, site institucional" },
            { icon: Package, step: "3°", title: "Controlar o estoque", desc: "Com dados reais e operação madura — decisões precisas e confiáveis" }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4 pt-4 first:pt-0 md:px-6 md:pt-0 md:first:pl-0 md:last:pr-0">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-stone-200">
                  <Icon className="h-4 w-4 text-stone-500" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-stone-400">{item.step}</span>
                  <p className="text-sm font-semibold text-stone-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Evolução em 3 momentos</span>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`relative rounded-[24px] border p-6 ${stage.style}`}
            >
              {index < 2 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-stone-200 bg-white p-1 md:block">
                  <ArrowRight className="h-3 w-3 text-stone-400" strokeWidth={1.5} />
                </div>
              )}
              <span className={`mb-3 block text-[10px] uppercase tracking-[0.2em] ${stage.tagStyle || "text-stone-500"}`}>{stage.tag}</span>
              <h3 className={`mb-5 text-lg ${stage.titleStyle}`}>{stage.title}</h3>
              <ul className="space-y-2.5">
                {stage.items.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-xs ${stage.itemStyle || "text-stone-600"}`}>
                    <ChevronRight className={`mt-0.5 h-3 w-3 flex-shrink-0 ${stage.arrowStyle || "text-stone-400"}`} strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Módulos da Fase 2</span>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {futureModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="rounded-[24px] border border-dashed border-stone-300 bg-white p-5 transition-all duration-300 hover:border-stone-300 hover:shadow-float"
              >
                <Icon className="mb-3 h-4 w-4 text-stone-500" strokeWidth={1.5} />
                <h4 className="mb-1 text-sm font-semibold text-stone-600">{module.title}</h4>
                <p className="text-xs leading-relaxed text-stone-500">{module.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[24px] bg-stone-900 p-7 text-center text-white shadow-editorial md:p-10">
        <Diamond className="mx-auto mb-4 h-5 w-5 text-stone-500" strokeWidth={1.5} />
        <h4 className="mb-3 text-xl text-white">O upsell de estoque é estratégico, não emergencial</h4>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-stone-300">
          Quando o MVP estiver rodando com dados reais, a conversa sobre estoque será concreta,
          confiante e muito mais fácil de vender.
        </p>
      </div>
    </div>
  );
}
