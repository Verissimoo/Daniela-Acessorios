import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";

const includes = [
  "Diagnóstico e Estruturação",
  "Núcleo Gerencial Financeiro",
  "Rotina Operacional",
  "WhatsApp e Automações",
  "Dashboards e Comissão",
  "Catálogo e Imagens",
  "Site Institucional",
  "Treinamento e Suporte"
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ComoVender() {
  return (
    <div className="space-y-16 pb-20">
      <SectionHeader
        tag="Proposta Comercial"
        title="Valor que se paga com a evolução da gestão"
        description="A proposta integral para transformar a operação atual com gestão financeira, automações e posicionamento digital. O investimento retorna na organização e profissionalização do negócio."
      />

      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-[26px] border border-border bg-card shadow-[0_16px_38px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col items-center border-b border-border px-8 py-14 text-center">
            <span className="mb-6 rounded-full bg-secondary px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground">
              Implementação Completa
            </span>
            
            <p className="mb-4 text-sm text-muted-foreground uppercase tracking-[0.15em]">
              Investimento total do projeto
            </p>
            
            <div className="mb-4 flex items-start justify-center gap-2">
              <span className="mt-2 text-2xl font-medium text-foreground/70">R$</span>
              <span className="font-display text-8xl font-semibold tracking-tight text-foreground">10.000</span>
            </div>
            
            <p className="mb-8 text-xl text-muted-foreground">
              ou <strong className="font-semibold text-foreground">10x</strong> de <strong className="font-semibold text-foreground">R$ 1.000</strong>
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Check className="h-3.5 w-3.5" /> SEM JUROS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-foreground text-background px-4 py-1.5 text-xs font-medium">
                Recorrência de R$ 500 / mês
              </span>
            </div>
          </div>

          <div className="px-8 py-10 bg-background/50">
            <h4 className="mb-8 text-center font-display text-2xl font-medium text-foreground">
              O que está incluído
            </h4>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {includes.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-5 py-4"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-foreground/60" />
                  <span className="text-sm font-medium text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
