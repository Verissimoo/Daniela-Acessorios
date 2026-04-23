import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";

const etapas = [
  { n: "01", titulo: "Definição & Modelagem", periodo: "Semana 1–2", entrega: "Escopo validado, dados modelados, protótipo executivo aprovado", valor: "Alinhamento total antes de construir — zero retrabalho", active: true },
  { n: "02", titulo: "Núcleo Gerencial", periodo: "Semana 3–4", entrega: "Cadastros, lojas, categorias, autenticação e estrutura do sistema", valor: "Alicerce sólido sobre o qual todos os módulos serão construídos", active: true },
  { n: "03", titulo: "Lançamentos", periodo: "Semana 5–6", entrega: "Entradas, despesas, viagens, compras e comprovantes", valor: "Operação com registro digital confiável do zero ao dia", active: true },
  { n: "04", titulo: "WhatsApp & Automação", periodo: "Semana 7–8", entrega: "Bot de lançamento, interpretação de mensagens, lembretes", valor: "Operação natural — sem precisar abrir o sistema toda vez", active: true },
  { n: "05", titulo: "Dashboards & Comissão", periodo: "Semana 9–10", entrega: "Painéis visuais, relatórios e módulo de comissão", valor: "Decisões baseadas em dados, comissão transparente", active: true },
  { n: "06", titulo: "Catálogo & Marketing", periodo: "Semana 11–13", entrega: "Biblioteca de imagens, tratamento IA, catálogos por coleção", valor: "Identidade visual forte, vendas consultivas mais eficientes", active: true },
  { n: "07", titulo: "Site Institucional", periodo: "Semana 14–16", entrega: "Site vitrine, páginas das lojas, SEO local, CTA WhatsApp", valor: "Captação orgânica, credibilidade e presença digital", active: true },
  { n: "08", titulo: "Estoque — Fase 2", periodo: "A definir", entrega: "Entrada por lote, saldo por loja, movimentação, margem real", valor: "Com dados reais e operação madura, controle preciso de mercadoria", active: false }
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 }
  })
};

export default function Roadmap() {
  usePageMeta("Roadmap");

  return (
    <div className="space-y-10 pb-20">
      <SectionHeader
        tag="Cronograma"
        title="Roadmap de Implantação"
        description="Sequência estratégica de entregas — cada etapa gera valor e prepara a próxima."
      />

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-0">
          {etapas.map((etapa, index) => (
            <div key={etapa.n} className="flex items-center">
              <div className={`flex flex-col items-center rounded-md px-4 py-3 ${etapa.active ? "bg-stone-900" : "border border-dashed border-stone-300 bg-white"}`}>
                <span className={`font-mono text-[10px] font-bold ${etapa.active ? "text-stone-400" : "text-stone-400"}`}>{etapa.n}</span>
                <span className={`mt-0.5 text-[11px] font-medium ${etapa.active ? "text-white" : "text-stone-500"}`}>{etapa.titulo.split(" ")[0]}</span>
              </div>
              {index < etapas.length - 1 && (
                <ArrowRight className={`mx-1 h-3 w-3 flex-shrink-0 ${etapa.active ? "text-stone-400" : "text-stone-300"}`} strokeWidth={1.5} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {etapas.map((etapa, index) => (
          <motion.div
            key={etapa.n}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`overflow-hidden rounded-[24px] ${!etapa.active ? "border border-dashed border-stone-300 bg-white/60" : "border border-stone-200 bg-white"}`}
          >
            <div className="grid grid-cols-1 gap-0 md:grid-cols-[160px_1fr_1fr]">
              <div className={`border-b border-stone-200 px-5 py-4 md:border-b-0 md:border-r ${!etapa.active ? "opacity-40" : ""}`}>
                <span className="mb-1 block font-mono text-[10px] text-stone-500">{etapa.periodo}</span>
                <span className="mb-1 block font-mono text-[11px] text-stone-400">Etapa {etapa.n}</span>
                <h3 className="text-base leading-tight text-stone-900">{etapa.titulo}</h3>
              </div>
              <div className={`border-b border-stone-200 px-5 py-4 md:border-b-0 md:border-r ${!etapa.active ? "opacity-40" : ""}`}>
                <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-stone-500">O que será entregue</p>
                <p className="text-xs leading-relaxed text-stone-700">{etapa.entrega}</p>
              </div>
              <div className={`${!etapa.active ? "opacity-40" : ""} px-5 py-4`}>
                <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-stone-500">Valor gerado</p>
                <p className="text-xs leading-relaxed text-stone-700">{etapa.valor}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
