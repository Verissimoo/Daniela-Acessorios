import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  MessageSquare,
  Palette,
  Globe,
  TrendingUp,
  ArrowRight,
  Diamond,
  ChevronRight
} from "lucide-react";

const pillars = [
  { icon: BarChart3, num: "01", title: "Gestão Financeira", desc: "Entradas, despesas, viagens e comissões organizados com precisão." },
  { icon: MessageSquare, num: "02", title: "WhatsApp & Automações", desc: "Lançamentos por mensagem, lembretes e confirmações inteligentes." },
  { icon: Palette, num: "03", title: "Marketing & Catálogo", desc: "Imagens tratadas, catálogos por coleção, identidade visual coerente." },
  { icon: Globe, num: "04", title: "Site Institucional", desc: "Presença digital com vitrine, SEO local e CTA para WhatsApp." },
  { icon: TrendingUp, num: "05", title: "Evolução com Estoque", desc: "Fase 2 estratégica: controle de mercadoria com dados concretos." },
];

const phases = [
  { n: "01", label: "Definição", active: true },
  { n: "02", label: "Núcleo Gerencial", active: true },
  { n: "03", label: "Lançamentos", active: true },
  { n: "04", label: "WhatsApp", active: true },
  { n: "05", label: "Dashboards", active: true },
  { n: "06", label: "Marketing", active: true },
  { n: "07", label: "Site", active: true },
  { n: "08", label: "Estoque", active: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-4"
      >
        <div className="flex items-center gap-3 mb-8">
          <Diamond className="h-3.5 w-3.5 text-foreground/30" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">
            Proposta de Implementação · 2025
          </span>
        </div>

        <div className="mb-10 max-w-3xl">
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground leading-[1.05] mb-2">
            Daniela
          </h1>
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground/40 leading-[1.05] mb-8">
            Acessórios
          </h1>
          <div className="h-px bg-border w-24 mb-8" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Sistema gerencial que respeita a operação atual e organiza finanças, automações,
            presença digital e — quando o momento for certo — o controle de estoque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { num: "2", label: "Lojas no DF", sub: "Taguatinga e Sudoeste" },
            { num: "7", label: "Fases de entrega", sub: "MVP estruturado em fases" },
            { num: "Fase 2", label: "Estoque como upsell", sub: "Evolução estratégica natural" },
          ].map((h, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="border border-border rounded-lg p-5 bg-card"
            >
              <p className="font-display text-2xl font-semibold text-foreground mb-1">{h.num}</p>
              <p className="text-sm font-medium text-foreground">{h.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{h.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/modulos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Ver Escopo do MVP <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.section>

      <section>
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium block mb-6">
          Resumo Executivo
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Situação Atual", text: "Operação manual, sem controle financeiro, sem visão gerencial, marketing fragmentado e dependência total da proprietária." },
            { label: "Solução Proposta", text: "MVP gerencial que organiza a operação atual — entradas, despesas, viagens e comissões — com automação, catálogo e site." },
            { label: "Resultado Esperado", text: "Visão financeira clara, operação menos dependente, marca mais forte e base preparada para controle de estoque na Fase 2." },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="bg-card border border-border rounded-lg p-6"
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-semibold text-foreground mb-3 text-sm">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium block mb-6">
          Pilares do Projeto
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <Icon className="h-4 w-4 text-foreground/40 group-hover:text-foreground/70 transition-colors" strokeWidth={1.5} />
                  <span className="text-[10px] text-muted-foreground/50 font-mono">{p.num}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-card border border-border rounded-lg p-7">
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground block mb-4">
            Racional
          </span>
          <h3 className="font-display text-lg font-semibold text-foreground mb-5">
            Por que o projeto começa assim?
          </h3>
          <ul className="space-y-3.5">
            {[
              "O sistema se adapta à operação atual — sem exigir ruptura",
              "Sem dados financeiros organizados, qualquer módulo de estoque seria impreciso",
              "O MVP primeiro organiza o que já existe com precisão e clareza",
              "Com a base financeira rodando, a evolução para estoque se torna estratégica",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ChevronRight className="h-3.5 w-3.5 text-foreground/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-foreground text-background rounded-lg p-7">
          <span className="text-[10px] tracking-[0.25em] uppercase text-background/40 block mb-4">
            Fase 2 — Upsell
          </span>
          <h3 className="font-display text-lg font-semibold text-background mb-5">
            O que fica para depois?
          </h3>
          <ul className="space-y-3.5">
            {[
              "Controle detalhado de estoque por produto e lote",
              "Saldo preciso por loja e por SKU",
              "Movimentação entre lojas com rastreamento",
              "Margem real por produto com dados concretos",
              "Integração entre catálogo digital e estoque",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-background/70">
                <ChevronRight className="h-3.5 w-3.5 text-background/30 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium block mb-6">
          Timeline das Fases
        </span>
        <div className="relative">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-border" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-mono font-bold mb-3 z-10 border ${
                    phase.active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-muted-foreground border-border border-dashed"
                  }`}
                >
                  {phase.n}
                </div>
                <p className="text-[11px] font-medium text-foreground/80 leading-tight">{phase.label}</p>
                {!phase.active && (
                  <p className="text-[10px] text-muted-foreground mt-0.5">Fase 2</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
