import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Diamond } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";

const propostas = [
  {
    id: "01",
    name: "MVP Completo",
    tagline: "Proposta principal",
    desc: "A proposta integral — do diagnóstico ao site — mantendo a lógica atual do MVP como oferta central e mais completa.",
    includes: [
      "Diagnóstico e Estruturação",
      "Núcleo Gerencial Financeiro",
      "Rotina Operacional",
      "WhatsApp e Automações",
      "Dashboards e Comissão",
      "Catálogo e Imagens",
      "Site Institucional"
    ],
    modelo: "Contrato principal em fases",
    destaque: "Mais completa, mais estratégica e comercialmente prioritária",
    highlight: true,
  },
  {
    id: "02",
    name: "Gerenciamento Financeiro",
    tagline: "Oferta modular",
    desc: "Versão mais objetiva para organizar a gestão financeira e operacional do negócio com clareza gerencial desde o início.",
    includes: [
      "Diagnóstico e Estruturação",
      "Entradas diárias por loja",
      "Despesas fixas e variáveis",
      "Viagens e compras de mercadoria",
      "Relatórios gerenciais",
      "Comissão"
    ],
    modelo: "Módulo financeiro separado",
    destaque: "Menor barreira de entrada com valor gerencial imediato",
    highlight: false,
  },
  {
    id: "03",
    name: "Marca e Presença Digital",
    tagline: "Oferta modular",
    desc: "Pacote comercial voltado para fortalecimento de marca, apoio de catálogo e presença digital mais profissional.",
    includes: [
      "Biblioteca e tratamento de imagens",
      "Catálogo institucional e promocional",
      "Organização visual por coleção",
      "Site institucional vitrine",
      "CTA para WhatsApp e presença digital"
    ],
    modelo: "Módulo comercial e de marca",
    destaque: "Ideal para vender valor percebido e posicionamento premium",
    highlight: false,
  }
];

const comparativo = [
  { criterio: "Foco principal", a: "Gestão + automação + marca", b: "Controle financeiro e operação", c: "Marca, catálogo e presença digital" },
  { criterio: "Barreira de entrada", a: "Média", b: "Baixa", c: "Baixa a média" },
  { criterio: "Apelo comercial", a: "Proposta âncora", b: "Entrada racional", c: "Entrada por desejo e posicionamento" },
  { criterio: "Potencial de expansão", a: "Alto", b: "Evolui para automações e marca", c: "Evolui para gestão e integrações" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } })
};

export default function ComoVender() {
  return (
    <div className="space-y-16 pb-20">
      <SectionHeader
        tag="Estratégia Comercial"
        title="Proposta comercial"
        description="Três opções organizadas de forma modular para vender com mais clareza, valor percebido e sofisticação."
      />

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Estrutura da proposta</span>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {propostas.map((proposta, index) => (
            <motion.div
              key={proposta.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`flex flex-col overflow-hidden rounded-[26px] border ${
                proposta.highlight
                  ? "border-foreground bg-foreground text-background shadow-[0_28px_60px_rgba(0,0,0,0.12)]"
                  : "border-border bg-card shadow-[0_16px_38px_rgba(0,0,0,0.04)]"
              }`}
            >
              <div className={`border-b px-6 py-5 ${proposta.highlight ? "border-white/10" : "border-border"}`}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Diamond className={`h-3 w-3 ${proposta.highlight ? "text-background/35" : "text-foreground/25"}`} strokeWidth={1.5} />
                    <span className={`text-[9px] uppercase tracking-[0.18em] font-semibold ${proposta.highlight ? "text-background/45" : "text-muted-foreground"}`}>
                      Proposta {proposta.id}
                    </span>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] ${
                    proposta.highlight ? "bg-background/10 text-background" : "bg-secondary text-foreground"
                  }`}>
                    {proposta.tagline}
                  </span>
                </div>
                <h3 className={`font-display text-3xl leading-tight ${proposta.highlight ? "text-background" : "text-foreground"}`}>
                  {proposta.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${proposta.highlight ? "text-background/68" : "text-muted-foreground"}`}>
                  {proposta.desc}
                </p>
              </div>

              <div className="flex flex-1 flex-col px-6 py-6">
                <div className="mb-6 flex-1">
                  <p className={`mb-3 text-[9px] uppercase tracking-[0.16em] ${proposta.highlight ? "text-background/45" : "text-muted-foreground"}`}>
                    Inclui
                  </p>
                  <ul className="space-y-2.5">
                    {proposta.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <ChevronRight className={`mt-0.5 h-3 w-3 flex-shrink-0 ${proposta.highlight ? "text-background/35" : "text-foreground/25"}`} strokeWidth={1.5} />
                        <span className={`text-sm leading-relaxed ${proposta.highlight ? "text-background/84" : "text-foreground/82"}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`rounded-2xl p-4 mb-4 ${proposta.highlight ? "bg-white/7" : "bg-background border border-border"}`}>
                  <p className={`mb-1 text-[9px] uppercase tracking-[0.16em] ${proposta.highlight ? "text-background/40" : "text-muted-foreground"}`}>
                    Destaque comercial
                  </p>
                  <p className={`text-sm leading-relaxed ${proposta.highlight ? "text-background/76" : "text-muted-foreground"}`}>
                    {proposta.destaque}
                  </p>
                </div>

                <div className={`flex items-center justify-between border-t pt-4 ${proposta.highlight ? "border-white/10" : "border-border/80"}`}>
                  <div>
                    <p className={`mb-1 text-[9px] uppercase tracking-[0.16em] ${proposta.highlight ? "text-background/40" : "text-muted-foreground"}`}>
                      Modelo
                    </p>
                    <p className={`text-sm font-medium ${proposta.highlight ? "text-background/84" : "text-foreground/78"}`}>
                      {proposta.modelo}
                    </p>
                  </div>
                  {proposta.highlight && (
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-background">
                      Principal <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <span className="mb-5 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Leitura comparativa</span>
        <div className="overflow-hidden rounded-[26px] border border-border bg-card shadow-[0_16px_38px_rgba(0,0,0,0.04)]">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-6 py-4 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Critério</th>
                  <th className="px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground">MVP Completo</th>
                  <th className="px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Gerenciamento Financeiro</th>
                  <th className="px-5 py-4 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Marca e Presença Digital</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((row) => (
                  <tr key={row.criterio} className="border-b border-border/60 last:border-0">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.criterio}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.a}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.b}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-[24px] border border-border bg-card p-6">
          <span className="mb-4 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Lógica comercial</span>
          <h3 className="font-display text-2xl leading-tight text-foreground mb-5">
            Uma proposta principal forte,
            com duas entradas modulares valiosas
          </h3>
          <div className="space-y-4">
            {[
              "O MVP Completo funciona como oferta âncora e mais desejável",
              "Gerenciamento Financeiro reduz barreira de entrada e entrega valor racional imediato",
              "Marca e Presença Digital vende percepção, estética e posicionamento de marca"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/35 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-foreground p-6 text-background">
          <span className="mb-4 block text-[10px] uppercase tracking-[0.22em] text-background/38">Posicionamento</span>
          <h3 className="font-display text-2xl leading-tight text-background mb-5">
            Estrutura pensada para vender
            com clareza, elegância e margem de evolução
          </h3>
          <div className="space-y-4 border-t border-white/10 pt-5">
            {[
              "A proposta premium fica clara logo na primeira leitura",
              "Os módulos separados continuam robustos e vendáveis",
              "A modularização aumenta flexibilidade sem parecer fragmentação"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-background/35 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-background/72">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
