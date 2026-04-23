import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";

const typeMeta = {
  Essencial: { style: "bg-stone-900 text-white" },
  Complementar: { style: "bg-stone-200 text-stone-900" },
  Evolutivo: { style: "bg-stone-100 text-stone-600" },
  Upsell: { style: "border border-dashed border-stone-300 text-stone-500" }
};

const subprodutos = [
  {
    n: "01", type: "Essencial", fase: "Fase 0", name: "Diagnóstico e Estruturação",
    resumo: "Inteligência e planejamento do projeto — antes de construir qualquer coisa.",
    entregas: ["Imersão no negócio", "Definição do MVP", "Mapeamento de fluxos", "Validações comerciais", "Regras e estrutura inicial"],
    resolve: "Define o que será construído com precisão, eliminando retrabalho",
    valor: "Clareza estratégica e alinhamento total de expectativas",
    dep: "—", venda: "Incluso no MVP"
  },
  {
    n: "02", type: "Essencial", fase: "Fase 1–2", name: "Núcleo Gerencial Financeiro",
    resumo: "O coração do MVP — onde a cliente começa a enxergar o negócio de verdade.",
    entregas: ["Entradas diárias por loja", "Despesas fixas", "Despesas variáveis", "Viagens SP", "Compras de mercadoria", "Comprovantes"],
    resolve: "Substitui o papel por registro digital confiável e consultável",
    valor: "Visão financeira real — pela primeira vez com dados organizados",
    dep: "Diagnóstico", venda: "Incluso no MVP"
  },
  {
    n: "03", type: "Essencial", fase: "Fase 2", name: "Rotina Operacional e Lançamentos",
    resumo: "Transforma a rotina atual em fluxo confiável sem exigir ruptura.",
    entregas: ["Fechamento diário", "Consolidados semanais e mensais", "Padronização de registros", "Lançamentos organizados"],
    resolve: "Operação roda sem depender da memória da proprietária",
    valor: "Consistência e confiabilidade no registro do dia a dia",
    dep: "Núcleo Gerencial", venda: "Incluso no MVP"
  },
  {
    n: "04", type: "Complementar", fase: "Fase 3", name: "WhatsApp e Automações",
    resumo: "Reduz atrito e torna o sistema mais natural de usar.",
    entregas: ["Lançamento via WhatsApp", "Confirmação automática", "Lembretes de fechamento", "Alertas de pendência"],
    resolve: "Elimina a necessidade de abrir o sistema a cada lançamento",
    valor: "Adoção mais rápida, menos resistência operacional",
    dep: "Rotina Operacional", venda: "Add-on"
  },
  {
    n: "05", type: "Complementar", fase: "Fase 4", name: "Dashboards e Comissão",
    resumo: "Dados viram gestão e tomada de decisão.",
    entregas: ["Dashboards por loja", "Visão consolidada", "Indicadores financeiros", "Comissão configurável", "Relatórios mensais"],
    resolve: "Proprietária passa a gerenciar com dados, não com intuição",
    valor: "Decisões estratégicas baseadas em informação real",
    dep: "Rotina Operacional", venda: "Add-on"
  },
  {
    n: "06", type: "Evolutivo", fase: "Fase 5", name: "Catálogo e Organização Visual",
    resumo: "Estrutura a parte visual e comercial da marca.",
    entregas: ["Biblioteca de imagens", "Tratamento com IA", "Aprovação manual", "Catálogo por coleção", "Catálogo premium e promo"],
    resolve: "Material de vendas profissional e identidade visual coerente",
    valor: "Marca percebida como premium, vendas consultivas mais eficientes",
    dep: "—", venda: "Módulo separado"
  },
  {
    n: "07", type: "Evolutivo", fase: "Fase 6", name: "Site Institucional",
    resumo: "Presença digital profissional com vitrine, SEO e CTA.",
    entregas: ["Site institucional", "Páginas por loja", "Catálogo consultivo", "Coleções em destaque", "CTA WhatsApp"],
    resolve: "Credibilidade digital e captação orgânica de clientes",
    valor: "Canal de apresentação permanente e posicionamento de marca",
    dep: "Catálogo", venda: "Módulo separado"
  },
  {
    n: "08", type: "Upsell", fase: "Fase 7", name: "Upsell Futuro — Estoque",
    resumo: "Evolução natural do sistema quando o negócio está maduro para isso.",
    entregas: ["Entrada por lote", "Saldo por loja", "Movimentação entre lojas", "Margem real", "Integração estoque + catálogo"],
    resolve: "Controle preciso de mercadoria com dados confiáveis",
    valor: "Visão completa do negócio — gestão, marca e estoque integrados",
    dep: "MVP estável + dados reais", venda: "Upsell / Fase 2"
  }
];

const pacotes = [
  { n: "01", name: "Base Gerencial", desc: "O núcleo essencial para organizar finanças e operação", includes: ["Diagnóstico e Estruturação", "Núcleo Gerencial Financeiro", "Rotina Operacional e Lançamentos"], modelo: "Contrato base", prioridade: "Essencial" },
  { n: "02", name: "Base Gerencial + Automação", desc: "Gestão organizada com automações e dashboards", includes: ["Tudo do Pacote 01", "WhatsApp e Automações", "Dashboards e Comissão"], modelo: "Contrato base + add-ons", prioridade: "Recomendado" },
  { n: "03", name: "Marca e Presença Digital", desc: "Catálogo profissional e site institucional", includes: ["Catálogo e Organização Visual", "Site Institucional"], modelo: "Módulo complementar", prioridade: "Evolutivo" },
  { n: "04", name: "Evolução Futura", desc: "Controle de estoque quando o negócio estiver pronto", includes: ["Upsell de Estoque", "Integração com MVP existente"], modelo: "Upsell / Fase 2", prioridade: "Futuro" }
];

const tabela = subprodutos.map((s) => ({
  name: s.name,
  resolve: s.resolve,
  prioridade: s.type,
  fase: s.fase,
  venda: s.venda
}));

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04, duration: 0.4 } })
};

function TypeBadge({ type }) {
  const meta = typeMeta[type] || typeMeta.Evolutivo;
  return (
    <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] ${meta.style}`}>
      {type}
    </span>
  );
}

export default function SubprodutosMVP() {
  usePageMeta("Subprodutos da Solução");

  return (
    <div className="space-y-16 pb-20">
      <SectionHeader
        tag="Visão Comercial"
        title="Estrutura Modular da Proposta"
        description="O MVP dividido em subprodutos — para facilitar precificação, empacotamento e defesa comercial."
      />

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Subprodutos da solução</span>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {subprodutos.map((item, index) => (
            <motion.div
              key={item.n}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`overflow-hidden rounded-[24px] border ${item.type === "Upsell" ? "border-dashed border-stone-300 bg-white/60" : "border-stone-200 bg-white"}`}
            >
              <div className={`flex items-center justify-between border-b border-stone-200 px-5 py-3.5 ${item.type === "Essencial" ? "bg-stone-900" : "bg-stone-50"}`}>
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[9px] font-bold ${item.type === "Essencial" ? "text-stone-400" : "text-stone-400"}`}>{item.n}</span>
                  <h3 className={`text-sm font-semibold ${item.type === "Essencial" ? "text-white" : "text-stone-900"}`}>{item.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[9px] ${item.type === "Essencial" ? "text-stone-400" : "text-stone-400"}`}>{item.fase}</span>
                  {item.type !== "Essencial" && <TypeBadge type={item.type} />}
                </div>
              </div>

              <div className="p-5">
                <p className={`mb-4 text-xs leading-relaxed ${item.type === "Upsell" ? "text-stone-500" : "text-stone-600"}`}>{item.resumo}</p>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.15em] text-stone-400">Entregas</p>
                    <ul className="space-y-1">
                      {item.entregas.slice(0, 4).map((entrega) => (
                        <li key={entrega} className="flex items-start gap-1.5 text-[11px] text-stone-600">
                          <ChevronRight className="mt-0.5 h-2.5 w-2.5 flex-shrink-0 text-stone-400" strokeWidth={1.5} />
                          {entrega}
                        </li>
                      ))}
                      {item.entregas.length > 4 && <li className="text-[10px] text-stone-400">+{item.entregas.length - 4} mais</li>}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-stone-400">Valor percebido</p>
                      <p className="text-[11px] leading-relaxed text-stone-600">{item.valor}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-stone-400">Modelo</p>
                      <span className="inline-flex rounded-sm border border-stone-200 bg-stone-50 px-2 py-0.5 text-[9px] font-medium tracking-wide text-stone-600">
                        {item.venda}
                      </span>
                    </div>
                  </div>
                </div>

                {item.dep !== "—" && (
                  <div className="border-t border-stone-200/80 pt-3">
                    <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-stone-400">Depende de</p>
                    <p className="text-[11px] text-stone-500">{item.dep}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Opções de empacotamento</span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pacotes.map((pack, index) => (
            <motion.div
              key={pack.n}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`overflow-hidden rounded-[24px] border ${
                pack.n === "02" ? "border-stone-900 bg-stone-900 text-white" : pack.n === "04" ? "border-dashed border-stone-300 bg-white/60" : "border-stone-200 bg-white"
              }`}
            >
              <div className={`border-b px-4 py-3 ${pack.n === "02" ? "border-white/10" : "border-stone-200"}`}>
                <span className={`font-mono text-[9px] ${pack.n === "02" ? "text-stone-400" : "text-stone-400"}`}>Pacote {pack.n}</span>
                <h4 className={`mt-0.5 text-sm font-semibold ${pack.n === "02" ? "text-white" : "text-stone-900"}`}>{pack.name}</h4>
              </div>
              <div className="px-4 py-4">
                <p className={`mb-4 text-[11px] leading-relaxed ${pack.n === "02" ? "text-stone-300" : "text-stone-600"}`}>{pack.desc}</p>
                <ul className="mb-4 space-y-1.5">
                  {pack.includes.map((entry) => (
                    <li key={entry} className={`flex items-start gap-1.5 text-[10px] ${pack.n === "02" ? "text-stone-300" : "text-stone-600"}`}>
                      <ChevronRight className={`mt-0.5 h-2.5 w-2.5 flex-shrink-0 ${pack.n === "02" ? "text-stone-500" : "text-stone-400"}`} strokeWidth={1.5} />
                      {entry}
                    </li>
                  ))}
                </ul>
                <div className={`border-t pt-3 ${pack.n === "02" ? "border-white/10" : "border-stone-200/80"}`}>
                  <p className={`mb-1 text-[9px] uppercase tracking-[0.1em] ${pack.n === "02" ? "text-stone-500" : "text-stone-400"}`}>Modelo</p>
                  <p className={`text-[11px] font-medium ${pack.n === "02" ? "text-stone-300" : "text-stone-600"}`}>{pack.modelo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Quadro comparativo</span>
        <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  {["Subproduto", "O que resolve", "Prioridade", "Fase", "Modelo de venda"].map((header) => (
                    <th key={header} className="whitespace-nowrap px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.15em] text-stone-500">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabela.map((row) => (
                  <tr key={row.name} className="border-b border-stone-100 last:border-0 transition-colors hover:bg-stone-50/50">
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-stone-900">{row.name}</td>
                    <td className="max-w-[240px] px-4 py-3 text-stone-600">{row.resolve}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <TypeBadge type={row.prioridade} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-[10px] text-stone-500">{row.fase}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex whitespace-nowrap rounded-sm border border-stone-200 bg-stone-50 px-2 py-0.5 text-[9px] font-medium tracking-wide text-stone-600">
                        {row.venda}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Lógica de prioridade</span>
        <div className="space-y-3">
          {[
            { label: "Núcleo Essencial", desc: "Diagnóstico · Gerencial · Rotina", badge: "Subprodutos 01–03", style: "bg-stone-900 text-white border-stone-900" },
            { label: "Aumenta Eficiência", desc: "WhatsApp e Automações", badge: "Subproduto 04", style: "bg-stone-100 text-stone-900 border-stone-200" },
            { label: "Melhora Gestão", desc: "Dashboards e Comissão", badge: "Subproduto 05", style: "bg-stone-50 text-stone-900 border-stone-200" },
            { label: "Fortalece a Marca", desc: "Catálogo · Site Institucional", badge: "Subprodutos 06–07", style: "border border-dashed border-stone-300 bg-white text-stone-900" },
            { label: "Evolução Futura", desc: "Upsell de Estoque — Fase 2", badge: "Subproduto 08", style: "border border-dashed border-stone-300 bg-white/60 text-stone-500" }
          ].map((layer, index) => (
            <motion.div
              key={layer.label}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`flex items-center justify-between rounded-[24px] border px-5 py-4 ${layer.style}`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] opacity-40">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-semibold">{layer.label}</p>
                  <p className="mt-0.5 text-[11px] opacity-60">{layer.desc}</p>
                </div>
              </div>
              <span className="hidden text-[9px] font-mono opacity-50 sm:block">{layer.badge}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500">Referências comerciais</span>
        <p className="mb-5 text-xs text-stone-500">Campos preparados para preenchimento interno — não apresentar à cliente sem definição prévia.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {["Faixa de Investimento", "Complexidade", "Esforço Estimado", "Valor Percebido", "Modelo de Contratação"].map((field) => (
            <div key={field} className="rounded-[24px] border border-dashed border-stone-300 bg-white/60 p-4">
              <p className="mb-2 text-[9px] uppercase tracking-[0.15em] text-stone-400">{field}</p>
              <div className="flex h-7 items-center rounded border border-stone-200 bg-stone-50 px-2">
                <span className="text-[10px] italic text-stone-400">a definir</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
