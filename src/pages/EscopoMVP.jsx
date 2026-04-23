import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { Check, X, ArrowRight } from "lucide-react";

const entraAgora = [
  "Entradas diárias por loja",
  "Despesas fixas",
  "Despesas variáveis",
  "Viagens para São Paulo",
  "Compras de mercadoria",
  "Anexos e comprovantes",
  "Consolidados diários, semanais e mensais",
  "Relatórios gerenciais",
  "Comissão por período",
  "Lançamentos via WhatsApp",
  "Lembretes e alertas",
  "Base de imagens",
  "Catálogo consultivo digital",
  "Site institucional vitrine",
];

const ficaParaDepois = [
  "Estoque detalhado por produto e SKU",
  "Baixa automática por item vendido",
  "Saldo preciso por produto e loja",
  "Movimentação entre lojas por item",
  "Margem real por produto",
  "Controle operacional completo de mercadoria",
];

const evolucao = [
  { step: "1°", label: "Organizar Finanças", sub: "MVP" },
  { step: "2°", label: "Automatizar", sub: "WhatsApp" },
  { step: "3°", label: "Fortalecer Marca", sub: "Marketing" },
  { step: "4°", label: "Presença Digital", sub: "Site" },
  { step: "5°", label: "Controlar Estoque", sub: "Fase 2", faded: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.04, duration: 0.4 },
  }),
};

export default function EscopoMvp() {
  return (
    <div className="space-y-12 pb-20">
      <SectionHeader
        tag="Definição"
        title="Escopo do MVP Inicial"
        description="O que entra na primeira entrega e o que fica para a Fase 2. Clareza total para alinhar expectativas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-border rounded-lg overflow-hidden"
        >
          <div className="bg-foreground px-5 py-3.5 flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-background/10 flex items-center justify-center">
              <Check className="h-3.5 w-3.5 text-background" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-background">Entra no MVP</h3>
              <p className="text-[10px] text-background/50">Primeira fase de implementação</p>
            </div>
          </div>
          <div className="p-4 space-y-1 bg-card">
            {entraAgora.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-secondary/50 transition-colors"
              >
                <Check className="h-3 w-3 text-foreground/40 flex-shrink-0" strokeWidth={2} />
                <span className="text-xs text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-dashed border-border rounded-lg overflow-hidden"
        >
          <div className="bg-secondary px-5 py-3.5 flex items-center gap-3 border-b border-border">
            <div className="h-6 w-6 rounded-md border border-border bg-background flex items-center justify-center">
              <X className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/50">Fica para a Fase 2</h3>
              <p className="text-[10px] text-muted-foreground">Evolução futura — upsell estratégico</p>
            </div>
          </div>
          <div className="p-4 space-y-1 bg-card/50">
            {ficaParaDepois.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 py-1.5 px-2"
              >
                <X className="h-3 w-3 text-foreground/20 flex-shrink-0" strokeWidth={2} />
                <span className="text-xs text-muted-foreground">{item}</span>
              </motion.div>
            ))}
            <div className="mt-5 p-4 bg-secondary/50 rounded-md border border-border/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground/60">Por que não agora?</strong> Sem dados financeiros organizados, 
                estoque seria impreciso. Primeiro organizamos o dinheiro — depois evoluímos com dados concretos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border border-border rounded-lg p-6 md:p-8 bg-card"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground block mb-6 text-center">
          Fluxo de Evolução Estratégica
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          {evolucao.map((step, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3">
              <div className={`text-center ${step.faded ? "opacity-30" : ""}`}>
                <div className={`h-14 w-14 rounded-lg border flex flex-col items-center justify-center mx-auto mb-2 ${
                  step.faded ? "border-dashed border-border bg-background" : "border-foreground bg-foreground"
                }`}>
                  <span className={`font-mono text-[9px] font-bold ${step.faded ? "text-muted-foreground" : "text-background/50"}`}>
                    {step.step}
                  </span>
                  <span className={`text-[10px] font-semibold leading-tight text-center px-1 ${step.faded ? "text-muted-foreground" : "text-background"}`}>
                    {step.label}
                  </span>
                </div>
                <span className={`text-[10px] ${step.faded ? "text-muted-foreground/40" : "text-muted-foreground"}`}>
                  {step.sub}
                </span>
              </div>
              {i < evolucao.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-border hidden md:block flex-shrink-0" strokeWidth={1.5} />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
