import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import { ChevronRight } from "lucide-react";

const fases = [
  {
    n: "00",
    nome: "Definição",
    objetivo: "Alinhar escopo, validar requisitos e modelar os dados do projeto",
    prioridade: "Alta",
    deps: "—",
    resultado: "Escopo validado pelos sócios e pela cliente",
    entregas: ["Workshop de descoberta", "Mapeamento de processos atuais", "Definição de entidades e regras", "Protótipo executivo (este app)", "Alinhamento de expectativas"],
  },
  {
    n: "01",
    nome: "Núcleo Gerencial",
    objetivo: "Construir a base técnica do sistema",
    prioridade: "Alta",
    deps: "Fase 0",
    resultado: "Sistema central com estrutura sólida e navegável",
    entregas: ["Lojas (Taguatinga e Sudoeste)", "Categorias financeiras", "Usuários e permissões", "Painel de navegação base"],
  },
  {
    n: "02",
    nome: "Lançamentos",
    objetivo: "Operação financeira diária rodando no sistema",
    prioridade: "Alta",
    deps: "Fase 1",
    resultado: "Registro digital confiável de todas as movimentações",
    entregas: ["Entradas diárias por loja", "Despesas fixas e variáveis", "Viagens para São Paulo", "Compras de mercadoria", "Upload de comprovantes"],
  },
  {
    n: "03",
    nome: "WhatsApp & Automação",
    objetivo: "Lançamentos por mensagem, lembretes e alertas",
    prioridade: "Alta",
    deps: "Fase 2",
    resultado: "Rotina de lançamento mais ágil com menos atrito",
    entregas: ["Bot de WhatsApp", "Interpretação com IA", "Confirmação de lançamentos", "Lembretes de fechamento", "Alertas de pendências"],
  },
  {
    n: "04",
    nome: "Dashboards & Comissão",
    objetivo: "Dados visuais e comissão calculada automaticamente",
    prioridade: "Alta",
    deps: "Fase 2",
    resultado: "Visão gerencial completa e comissão transparente",
    entregas: ["Dashboard financeiro por loja", "Gráficos e comparativos", "Relatórios exportáveis", "Módulo de comissão configurável"],
  },
  {
    n: "05",
    nome: "Catálogo & Marketing",
    objetivo: "Imagens organizadas e materiais de venda profissionais",
    prioridade: "Média",
    deps: "Fase 1",
    resultado: "Material visual padronizado e identidade de marca forte",
    entregas: ["Biblioteca central de imagens", "Tratamento com IA", "Organização por coleção", "Catálogos institucionais e promo", "Fluxo de aprovação"],
  },
  {
    n: "06",
    nome: "Site Institucional",
    objetivo: "Presença digital profissional com vitrine e SEO",
    prioridade: "Média",
    deps: "Fase 5",
    resultado: "Captação orgânica, credibilidade e canal de vendas",
    entregas: ["Página institucional da marca", "Páginas por loja", "Vitrine de coleções", "SEO local", "CTA WhatsApp integrado"],
  },
  {
    n: "07",
    nome: "Upsell — Estoque",
    objetivo: "Controle detalhado de mercadoria na Fase 2",
    prioridade: "Futuro",
    deps: "MVP estável + dados reais",
    resultado: "Controle preciso de estoque, margem e movimentação",
    entregas: ["Entrada por lote e fornecedor", "Saldo por loja", "Movimentação entre lojas", "Margem real por produto", "Catálogo + Estoque integrados"],
    future: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export default function Backlog() {
  return (
    <div className="space-y-10 pb-20">
      <SectionHeader
        tag="Planejamento"
        title="Backlog por Fases"
        description="Entregas organizadas por fase — da definição ao upsell de estoque."
      />

      <div className="space-y-4">
        {fases.map((f, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`rounded-lg overflow-hidden ${
              f.future
                ? "border border-dashed border-border bg-card/50"
                : "border border-border bg-card"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-0">
              <div className={`px-6 py-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border ${f.future ? "bg-secondary/30" : "bg-secondary/50"}`}>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground/60 block mb-1">Fase {f.n}</span>
                  <h3 className={`font-display text-lg font-semibold ${f.future ? "text-foreground/40" : "text-foreground"}`}>
                    {f.nome}
                  </h3>
                </div>
                <div className="mt-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-semibold tracking-[0.1em] uppercase ${
                    f.prioridade === "Alta"
                      ? "bg-foreground text-background"
                      : f.prioridade === "Média"
                      ? "bg-foreground/15 text-foreground"
                      : "border border-border text-muted-foreground"
                  }`}>
                    {f.prioridade}
                  </span>
                </div>
              </div>

              <div className="px-6 py-5">
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Entregas Principais</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {f.entregas.map((e, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-foreground/20 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-xs">{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-border bg-background/50">
                <div className="mb-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Depende de</p>
                  <p className="text-xs text-foreground/60">{f.deps}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Resultado</p>
                  <p className="text-xs text-foreground/70 leading-relaxed">{f.resultado}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
