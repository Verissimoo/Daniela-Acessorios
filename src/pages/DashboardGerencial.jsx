import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import {
  TrendingUp, TrendingDown, Minus, AlertTriangle, ChevronRight,
  Plane, Package, Store, DollarSign
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const sparklines = {
  faturamento: [71000, 78000, 81000, 95000, 87400],
  despesas:    [50000, 51000, 52500, 56000, 54300],
  resultado:   [18000, 20000, 21500, 24000, 21280],
  viagens:     [14000, 16500, 15000, 19000, 18500],
  comissao:    [6800,  6500,  7000,  6650,  6330],
};

const kpis = [
  {
    label: "Faturamento Bruto",
    value: "R$ 87.400",
    raw: 87400,
    delta: "+12%",
    up: true,
    spark: sparklines.faturamento,
  },
  {
    label: "Total de Despesas",
    value: "R$ 54.300",
    raw: 54300,
    delta: "+8%",
    up: false,
    spark: sparklines.despesas,
  },
  {
    label: "Resultado Gerencial",
    value: "R$ 21.280",
    raw: 21280,
    delta: "+18%",
    up: true,
    spark: sparklines.resultado,
  },
  {
    label: "Custo de Viagens",
    value: "R$ 18.500",
    raw: 18500,
    delta: null,
    up: null,
    spark: sparklines.viagens,
  },
  {
    label: "Comissão Estimada",
    value: "R$ 6.330",
    raw: 6330,
    delta: "-5%",
    up: false,
    spark: sparklines.comissao,
  },
];

const lojas = [
  {
    name: "Taguatinga",
    valor: 52100,
    pct: 60,
    delta: "+9%",
    up: true,
    pix: 48,
    cartao: 35,
    dinheiro: 17,
  },
  {
    name: "Sudoeste",
    valor: 35300,
    pct: 40,
    delta: "+17%",
    up: true,
    pix: 52,
    cartao: 33,
    dinheiro: 15,
  },
];

const donutData = [
  { name: "Mercadoria", value: 58, valor: "R$ 31.494", color: "#0a0a0a" },
  { name: "Fixas",      value: 27, valor: "R$ 14.661", color: "#444444" },
  { name: "Viagens",    value: 10, valor: "R$ 5.430",  color: "#888888" },
  { name: "Variáveis",  value: 5,  valor: "R$ 2.715",  color: "#cccccc" },
];

const trendData = [
  { mes: "Set", fat: 72000, desp: 50000 },
  { mes: "Out", fat: 78000, desp: 51000 },
  { mes: "Nov", fat: 81000, desp: 52500 },
  { mes: "Dez", fat: 95000, desp: 56000 },
  { mes: "Jan", fat: 87400, desp: 54300 },
];

const movs = [
  { tipo: "Entrada",  desc: "Loja Taguatinga — Pix + Cartão",   loja: "Taguatinga", valor: "R$ 3.450", data: "Hoje"  },
  { tipo: "Entrada",  desc: "Loja Sudoeste — Pix",               loja: "Sudoeste",   valor: "R$ 1.820", data: "Hoje"  },
  { tipo: "Despesa",  desc: "Aluguel Taguatinga",                 loja: "Taguatinga", valor: "R$ 6.500", data: "Ontem" },
  { tipo: "Despesa",  desc: "Energia e Água — Sudoeste",          loja: "Sudoeste",   valor: "R$ 820",   data: "Ontem" },
  { tipo: "Viagem",   desc: "Viagem SP Jan — Passagem aérea",     loja: "—",          valor: "R$ 980",   data: "28/01" },
  { tipo: "Compra",   desc: "Fornecedor A — Brincos",             loja: "—",          valor: "R$ 4.200", data: "27/01" },
  { tipo: "Entrada",  desc: "Loja Taguatinga — Domingo",          loja: "Taguatinga", valor: "R$ 2.890", data: "26/01" },
  { tipo: "Despesa",  desc: "Sistema e Software",                  loja: "Ambas",      valor: "R$ 390",   data: "25/01" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function fmt(v) {
  return v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v;
}

// ─── SPARKLINE (SVG nativo) ───────────────────────────────────────────────────

function Sparkline({ data, up }) {
  const w = 80, h = 24;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const stroke = up === false ? "#888" : up === true ? "#0a0a0a" : "#aaa";
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}

// ─── BADGE ────────────────────────────────────────────────────────────────────

function Badge({ delta, up }) {
  if (!delta) return <span className="text-[10px] text-muted-foreground">—</span>;
  const base = "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold";
  if (up === true)  return <span className={`${base} bg-foreground text-background`}><TrendingUp className="h-2.5 w-2.5" />{delta}</span>;
  if (up === false) return <span className={`${base} bg-muted text-foreground/60 border border-border`}><TrendingDown className="h-2.5 w-2.5" />{delta}</span>;
  return <span className={`${base} bg-muted text-muted-foreground`}><Minus className="h-2.5 w-2.5" />{delta}</span>;
}

// ─── TOOLTIP RICO ─────────────────────────────────────────────────────────────

function TrendTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const fat  = payload.find(p => p.dataKey === "fat")?.value ?? 0;
  const desp = payload.find(p => p.dataKey === "desp")?.value ?? 0;
  const res  = fat - desp;
  return (
    <div className="rounded-xl border border-border bg-card px-3.5 py-3 text-xs shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
      <p className="mb-2 font-semibold text-foreground tracking-wide">{label}</p>
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-6">
          <span className="text-muted-foreground">Faturamento</span>
          <span className="font-medium text-foreground">R$ {fat.toLocaleString("pt-BR")}</span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="text-muted-foreground">Despesas</span>
          <span className="font-medium text-foreground">R$ {desp.toLocaleString("pt-BR")}</span>
        </div>
        <div className="flex items-center justify-between gap-6 border-t border-border pt-1 mt-1">
          <span className="text-muted-foreground">Resultado</span>
          <span className="font-semibold text-foreground">R$ {res.toLocaleString("pt-BR")}</span>
        </div>
      </div>
    </div>
  );
}

// ─── TIPO BADGE ───────────────────────────────────────────────────────────────

const tipoCfg = {
  Entrada: { cls: "bg-foreground text-background",            label: "ENTRADA" },
  Despesa: { cls: "border border-border text-foreground",     label: "DESPESA" },
  Viagem:  { cls: "bg-[#f5f0e8] text-[#7a6a50]",             label: "VIAGEM"  },
  Compra:  { cls: "bg-muted text-muted-foreground",           label: "COMPRA"  },
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function DashboardGerencial() {
  const [periodo, setPeriodo] = useState("jan2025");
  const [loja, setLoja]       = useState("todas");

  return (
    <div className="space-y-5 pb-16">

      {/* ── BLOCO 1 — HEADER COMPACTO ────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground leading-none">
            Dashboard Gerencial
          </h1>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Simulação · Dados fictícios
          </p>
        </div>

        {/* Filtros inline */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={periodo}
            onChange={e => setPeriodo(e.target.value)}
            className="h-8 rounded-lg border border-border bg-card px-3 text-[12px] text-foreground outline-none cursor-pointer hover:border-foreground/20 transition-colors"
          >
            <option value="jan2025">Janeiro 2025</option>
            <option value="fev2025">Fevereiro 2025</option>
          </select>
          <select
            value={loja}
            onChange={e => setLoja(e.target.value)}
            className="h-8 rounded-lg border border-border bg-card px-3 text-[12px] text-foreground outline-none cursor-pointer hover:border-foreground/20 transition-colors"
          >
            <option value="todas">Todas as lojas</option>
            <option value="taguatinga">Taguatinga</option>
            <option value="sudoeste">Sudoeste</option>
          </select>
        </div>
      </div>

      {/* ── BLOCO 2 — FAIXA DE KPIs ──────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border bg-card px-4 py-3.5 hover:border-foreground/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200"
          >
            {/* label + badge */}
            <div className="flex items-start justify-between gap-1 mb-2">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground leading-tight">
                {kpi.label}
              </p>
              <Badge delta={kpi.delta} up={kpi.up} />
            </div>
            {/* valor */}
            <p className="font-display text-xl leading-none text-foreground mb-3">
              {kpi.value}
            </p>
            {/* sparkline */}
            <Sparkline data={kpi.spark} up={kpi.up} />
          </div>
        ))}
      </div>

      {/* ── BLOCO 3 — DESEMPENHO POR LOJA + BREAKDOWN DE DESPESAS ─────── */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

        {/* Painel esquerdo — Desempenho por loja */}
        <div className="rounded-2xl border border-border bg-card px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-4">
            Desempenho por loja
          </p>
          <div className="space-y-5">
            {lojas.map((l) => (
              <div key={l.name}>
                {/* linha de cabeçalho */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Store className="h-3 w-3 text-muted-foreground" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-foreground">{l.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[15px] text-foreground">
                      R$ {l.valor.toLocaleString("pt-BR")}
                    </span>
                    <Badge delta={l.delta} up={l.up} />
                  </div>
                </div>
                {/* barra principal */}
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full bg-foreground transition-all duration-500"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
                {/* pagamentos empilhados */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="h-1.5 rounded-full bg-[#0a0a0a]" style={{ width: `${l.pix}%` }} />
                  <div className="h-1.5 rounded-full bg-[#888888]" style={{ width: `${l.cartao}%` }} />
                  <div className="h-1.5 rounded-full bg-[#cccccc]" style={{ width: `${l.dinheiro}%` }} />
                </div>
                <div className="flex gap-3">
                  {[
                    { label: "Pix", pct: l.pix, color: "#0a0a0a" },
                    { label: "Cartão", pct: l.cartao, color: "#888888" },
                    { label: "Dinheiro", pct: l.dinheiro, color: "#cccccc" },
                  ].map(p => (
                    <div key={p.label} className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-sm flex-shrink-0" style={{ backgroundColor: p.color }} />
                      <span className="text-[10px] text-muted-foreground">{p.label} {p.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painel direito — Breakdown de despesas */}
        <div className="rounded-2xl border border-border bg-card px-5 py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-4">
            Breakdown de despesas
          </p>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <ResponsiveContainer width={130} height={130}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%" cy="50%"
                    innerRadius={38} outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {donutData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: 8, border: "1px solid #e7e5e4", fontSize: 11 }}
                    formatter={(val, name) => [`${val}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {donutData.map((d) => (
                <div key={d.name} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="h-2 w-2 rounded-sm flex-shrink-0" style={{ backgroundColor: d.color }} />
                    <span className="text-[12px] text-foreground truncate">{d.name}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[11px] font-medium text-foreground">{d.valor}</span>
                    <span className="text-[10px] text-muted-foreground w-6 text-right">{d.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOCO 4 — GRÁFICO DE TENDÊNCIA (compacto, altura 180px) ──────── */}
      <div className="rounded-2xl border border-border bg-card px-5 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[13px] font-semibold text-foreground">Tendência — últimos 5 meses</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mt-0.5">
              Faturamento vs Despesas · todas as lojas
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-0.5 w-5 bg-foreground rounded" />
              <span className="text-[10px] text-muted-foreground">Faturamento</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-0.5 w-5 border-t-2 border-dashed border-muted-foreground/50 rounded" />
              <span className="text-[10px] text-muted-foreground">Despesas</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={trendData} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="gradFat" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#0a0a0a" stopOpacity={0.08} />
                <stop offset="95%" stopColor="#0a0a0a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" vertical={false} />
            <XAxis
              dataKey="mes"
              tick={{ fontSize: 11, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={fmt}
            />
            <Tooltip content={<TrendTooltip />} />
            <Area
              type="monotone"
              dataKey="fat"
              name="Faturamento"
              stroke="#0a0a0a"
              fill="url(#gradFat)"
              strokeWidth={1.75}
            />
            <Area
              type="monotone"
              dataKey="desp"
              name="Despesas"
              stroke="#aaaaaa"
              fill="none"
              strokeWidth={1.25}
              strokeDasharray="4 3"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* ── BLOCO 5 — VIAGEM SP + COMISSÃO DO PERÍODO ───────────────────── */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">

        {/* Painel esquerdo — Viagem SP */}
        <div className="rounded-2xl border border-border bg-card px-5 py-5">
          <div className="flex items-center gap-2 mb-4">
            <Plane className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Viagem São Paulo — Janeiro
            </p>
          </div>

          {/* 3 métricas em linha */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Mercadoria", valor: "R$ 11.600" },
              { label: "Operacional", valor: "R$ 1.800" },
              { label: "Total",      valor: "R$ 13.400" },
            ].map(m => (
              <div key={m.label} className="rounded-lg border border-border/60 bg-background px-3 py-2.5">
                <p className="text-[10px] text-muted-foreground mb-1">{m.label}</p>
                <p className="font-display text-[15px] text-foreground">{m.valor}</p>
              </div>
            ))}
          </div>

          {/* Fornecedores */}
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <Package className="h-3 w-3 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
            {[
              { nome: "Fornecedor A", valor: "R$ 6.200" },
              { nome: "Fornecedor B", valor: "R$ 5.400" },
            ].map((f, i) => (
              <span key={f.nome} className="text-[11px] text-foreground">
                <span className="font-medium">{f.nome}</span>
                <span className="text-muted-foreground"> · {f.valor}</span>
                {i === 0 && <span className="text-muted-foreground/40 mx-1">|</span>}
              </span>
            ))}
          </div>

          {/* indicador custo vs fat */}
          <div className="rounded-lg bg-muted/60 px-3 py-2 flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground">Representa do faturamento</p>
            <p className="text-[13px] font-semibold text-foreground">15,3%</p>
          </div>
        </div>

        {/* Painel direito — Comissão */}
        <div className="rounded-2xl border border-border bg-card px-5 py-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Comissão estimada
            </p>
          </div>

          {/* status */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            <span className="text-[11px] text-muted-foreground italic">Aguardando fechamento do período</span>
          </div>

          {/* métricas */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { label: "Base de cálculo", valor: "R$ 87.400" },
              { label: "Percentual",      valor: "2,75%" },
              { label: "Valor estimado",  valor: "R$ 2.403" },
              { label: "Dias registrados",valor: "28 / 31" },
            ].map(m => (
              <div key={m.label} className="rounded-lg border border-border/60 bg-background px-3 py-2.5">
                <p className="text-[10px] text-muted-foreground mb-1">{m.label}</p>
                <p className="font-display text-[15px] text-foreground">{m.valor}</p>
              </div>
            ))}
          </div>

          {/* barra de progresso */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] text-muted-foreground">Progresso do período</p>
              <p className="text-[10px] font-medium text-foreground">90%</p>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-foreground transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ── BLOCO 6 — ALERTAS COMPACTOS ──────────────────────────────────── */}
      <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-2.5">
        <AlertTriangle className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
        <p className="text-[12px] text-muted-foreground">
          <span className="font-medium text-foreground">2 pendências ativas</span>
          {" · "}
          Fechamento Sudoeste 28/01 em aberto
          {" · "}
          Comprovante faltando R$ 380
        </p>
      </div>

      {/* ── BLOCO 7 — TABELA DE MOVIMENTAÇÕES ────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <p className="text-[13px] font-semibold text-foreground">Últimas movimentações</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Visão operacional recente
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Tipo</th>
                <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Descrição</th>
                <th className="px-5 py-2.5 text-left text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Loja</th>
                <th className="px-5 py-2.5 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Valor</th>
                <th className="px-5 py-2.5 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Data</th>
              </tr>
            </thead>
            <tbody>
              {movs.map((mov, i) => {
                const cfg = tipoCfg[mov.tipo] ?? tipoCfg.Compra;
                return (
                  <tr
                    key={i}
                    className="border-b border-border/40 last:border-0 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-2.5">
                      <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${cfg.cls}`}>
                        {cfg.label}
                      </span>
                    </td>
                    <td className="px-5 py-2.5 text-[13px] text-foreground">{mov.desc}</td>
                    <td className="px-5 py-2.5 text-[12px] text-muted-foreground">{mov.loja}</td>
                    <td className="px-5 py-2.5 text-right text-[13px] font-medium text-foreground">{mov.valor}</td>
                    <td className="px-5 py-2.5 text-right text-[11px] text-muted-foreground">{mov.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="border-t border-border/40 px-5 py-3">
          <button className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            Ver todas as movimentações
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>

    </div>
  );
}
