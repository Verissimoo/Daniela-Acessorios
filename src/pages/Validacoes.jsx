import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Diamond, HelpCircle } from "lucide-react";
import SectionHeader from "../components/shared/SectionHeader";

const STORAGE_KEY = "daniela-validacoes-respostas";

const perguntas = [
  {
    categoria: "Comissão",
    items: [
      { q: "Qual é o percentual exato de comissão das vendedoras?", nota: "Confirmar se é igual para ambas as lojas" },
      { q: "A base de cálculo é o faturamento bruto ou outro valor?", nota: "Pode ser bruto, líquido ou sobre meta" },
      { q: "A comissão é individual ou por loja?", nota: "Impacta diretamente na modelagem do módulo" },
      { q: "Existe comissão diferenciada por tipo de produto?", nota: "Pode haver regras escalonadas por categoria" }
    ]
  },
  {
    categoria: "Viagens & Compras",
    items: [
      { q: "Como separar custos operacionais da viagem e compras de mercadoria?", nota: "Transporte, hospedagem versus valor das peças" },
      { q: "Qual a frequência média de viagens a São Paulo?", nota: "Impacta na modelagem de períodos" },
      { q: "Compras acontecem só em viagem ou também de forma remota?", nota: "Pode haver compras por WhatsApp com fornecedores" },
      { q: "Quer rastrear fornecedores específicos ou apenas o valor total?", nota: "Define o nível de detalhe do registro" }
    ]
  },
  {
    categoria: "Operação entre Lojas",
    items: [
      { q: "Existem transferências frequentes de mercadoria entre as lojas?", nota: "Relevante para o módulo de estoque na Fase 2" },
      { q: "As despesas fixas são separadas por loja?", nota: "Impacta na alocação e comparação de custos" },
      { q: "Cada loja tem vendedoras fixas ou há rotação?", nota: "Afeta o cálculo de comissão por período" }
    ]
  },
  {
    categoria: "Catálogo & Marketing",
    items: [
      { q: "Como organizar as categorias no catálogo?", nota: "Por tipo ou por coleção" },
      { q: "Existem coleções temáticas ou sazonais?", nota: "Impacta na estrutura do catálogo" },
      { q: "Já há material fotográfico ou precisa produzir do zero?", nota: "Define o esforço de curadoria inicial" },
      { q: "Qual é o tom da marca? Jovem, clássico ou premium?", nota: "Influencia o design do site e catálogo" }
    ]
  },
  {
    categoria: "Financeiro",
    items: [
      { q: "Existe crediário ou venda fiada?", nota: "Pode precisar de controle de recebíveis" },
      { q: "As formas de pagamento são sempre Pix, cartão e dinheiro?", nota: "Pode haver outras formas como boleto" },
      { q: "Precisa de controle de contas a pagar com vencimentos?", nota: "Pode ser um módulo adicional importante" }
    ]
  }
];

const statusOptions = ["Pendente", "Em análise", "Respondido"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 }
  })
};

function buildInitialState() {
  return perguntas.reduce((acc, categoria) => {
    categoria.items.forEach((item) => {
      acc[item.q] = { answer: "", status: "Pendente" };
    });
    return acc;
  }, {});
}

export default function Validacoes() {
  const [answers, setAnswers] = useState(buildInitialState);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setAnswers((current) => ({ ...current, ...JSON.parse(saved) }));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers]);

  const answeredCount = Object.values(answers).filter((item) => item.answer.trim()).length;
  const totalCount = Object.keys(answers).length;

  return (
    <div className="space-y-12 pb-20">
      <SectionHeader
        tag="Validação Comercial"
        title="Perguntas em Aberto"
        description="Checklist preenchível para consolidar respostas da cliente e refinar o escopo com clareza comercial."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex items-center gap-3 rounded-[22px] border border-border bg-card px-5 py-4">
          <Diamond className="h-3.5 w-3.5 flex-shrink-0 text-foreground/45" strokeWidth={1.5} />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Uso interno.</strong> Cada resposta influencia diretamente a modelagem dos módulos e já pode ser registrada aqui.
          </p>
        </div>

        <div className="rounded-[22px] border border-border bg-foreground px-5 py-4 text-background">
          <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 mb-2">Andamento</p>
          <p className="font-display text-3xl text-background">{answeredCount}<span className="text-background/40">/{totalCount}</span></p>
          <p className="mt-2 text-sm text-background/70">Perguntas já preenchidas nesta proposta.</p>
        </div>
      </div>

      <div className="space-y-8">
        {perguntas.map((categoria, categoryIndex) => (
          <motion.div key={categoria.categoria} custom={categoryIndex} variants={fadeUp} initial="hidden" animate="visible">
            <div className="mb-4 flex items-center gap-2.5">
              <HelpCircle className="h-3.5 w-3.5 text-foreground/35" strokeWidth={1.5} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{categoria.categoria}</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {categoria.items.map((item) => {
                const answerState = answers[item.q] || { answer: "", status: "Pendente" };
                return (
                  <div
                    key={item.q}
                    className="rounded-[22px] border border-border bg-card p-5 shadow-[0_12px_28px_rgba(0,0,0,0.03)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground leading-relaxed">{item.q}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{item.nota}</p>
                      </div>
                      <select
                        value={answerState.status}
                        onChange={(event) =>
                          setAnswers((current) => ({
                            ...current,
                            [item.q]: { ...answerState, status: event.target.value }
                          }))
                        }
                        className="rounded-md border border-border bg-background px-3 py-2 text-[11px] font-medium text-foreground outline-none"
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      value={answerState.answer}
                      onChange={(event) =>
                        setAnswers((current) => ({
                          ...current,
                          [item.q]: { ...answerState, answer: event.target.value }
                        }))
                      }
                      rows={4}
                      placeholder="Preencher resposta, observações, regras ou decisões comerciais..."
                      className="min-h-[124px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground/20"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[24px] bg-foreground p-7 text-center text-background md:p-9">
        <h4 className="mb-2 font-display text-xl text-background">Próximos passos</h4>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-background/68">
          Após validar e preencher as respostas, o escopo final pode ser refinado com muito mais precisão,
          reduzindo retrabalho e deixando a proposta comercial mais segura e convincente.
        </p>
      </div>
    </div>
  );
}
