import { motion } from "framer-motion";
import SectionHeader from "../components/shared/SectionHeader";
import {
  Wallet,
  Receipt,
  CreditCard,
  Plane,
  ShoppingBag,
  Users,
  BarChart3,
  MessageSquare,
  Camera,
  Globe
} from "lucide-react";

const modules = [
  {
    icon: Wallet, n: "01", name: "Entradas Diárias",
    func: "Registrar faturamento do dia por loja",
    registra: "Valor bruto, forma de pagamento, loja, data",
    valor: "Visão clara do faturamento por loja e período",
    deps: "—",
  },
  {
    icon: Receipt, n: "02", name: "Despesas Fixas",
    func: "Controlar despesas recorrentes mensais",
    registra: "Tipo, valor, vencimento, loja, comprovante",
    valor: "Previsibilidade de custos operacionais",
    deps: "—",
  },
  {
    icon: CreditCard, n: "03", name: "Despesas Variáveis",
    func: "Registrar despesas operacionais e eventuais",
    registra: "Tipo, valor, data, categoria, comprovante",
    valor: "Controle de custos não recorrentes",
    deps: "—",
  },
  {
    icon: Plane, n: "04", name: "Viagens",
    func: "Registrar e consolidar viagens de compra a São Paulo",
    registra: "Data, custos operacionais, total investido",
    valor: "Histórico e custo-benefício por viagem",
    deps: "Despesas variáveis",
  },
  {
    icon: ShoppingBag, n: "05", name: "Compras de Mercadoria",
    func: "Registrar compras vinculadas a viagens",
    registra: "Fornecedor, valor, viagem vinculada, comprovante",
    valor: "Controle de investimento em mercadoria",
    deps: "Viagens",
  },
  {
    icon: Users, n: "06", name: "Comissão",
    func: "Calcular comissões com regra configurável",
    registra: "Vendedora, período, base de cálculo, percentual",
    valor: "Transparência para equipe e gestão",
    deps: "Entradas diárias",
  },
  {
    icon: BarChart3, n: "07", name: "Relatórios & Dashboards",
    func: "Painéis visuais e relatórios consolidados",
    registra: "Indicadores financeiros, comparativos, tendências",
    valor: "Visão gerencial para decisões estratégicas",
    deps: "Todos os módulos financeiros",
  },
  {
    icon: MessageSquare, n: "08", name: "WhatsApp & Automações",
    func: "Lançamentos por mensagem e lembretes automáticos",
    registra: "Mensagens interpretadas, lançamentos, pendências",
    valor: "Operação mais rápida e natural",
    deps: "Entradas, Despesas",
  },
  {
    icon: Camera, n: "09", name: "Catálogo & Imagens",
    func: "Organizar e tratar imagens dos produtos",
    registra: "Imagens, categorias, coleções, status de aprovação",
    valor: "Material de venda profissional",
    deps: "—",
  },
  {
    icon: Globe, n: "10", name: "Site Institucional",
    func: "Presença digital com vitrine e SEO local",
    registra: "Páginas, coleções, CTAs, informações das lojas",
    valor: "Credibilidade e captação de clientes",
    deps: "Catálogo",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4 }
  })
};

export default function Modulos() {
  return (
    <div className="space-y-10 pb-20">
      <SectionHeader
        tag="Arquitetura"
        title="Escopo do MVP"
        description="Cada módulo resolve uma necessidade específica, implementado de forma gradual e integrada."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {modules.map((mod, index) => {
          const Icon = mod.icon;
          return (
            <motion.div
              key={mod.n}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_12px_36px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-foreground/20">
                    <Icon className="h-4 w-4 text-foreground/45" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground">{mod.n}</span>
                    <h3 className="text-sm font-semibold leading-tight text-foreground">{mod.name}</h3>
                  </div>
                </div>
                <span className="inline-flex rounded-sm bg-foreground px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-background">
                  MVP
                </span>
              </div>

              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{mod.func}</p>

              <div className="grid grid-cols-1 gap-3 border-t border-border/80 pt-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/70">Registra</p>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">{mod.registra}</p>
                </div>
                <div>
                  <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/70">Valor gerado</p>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">{mod.valor}</p>
                </div>
              </div>

              {mod.deps !== "—" && (
                <div className="mt-3 border-t border-border/60 pt-3">
                  <p className="mb-1 text-[9px] uppercase tracking-[0.15em] text-muted-foreground/70">Depende de</p>
                  <p className="text-[11px] text-muted-foreground">{mod.deps}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
