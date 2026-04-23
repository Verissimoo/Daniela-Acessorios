const variants = {
  alta: "bg-foreground text-background",
  media: "bg-foreground/20 text-foreground",
  baixa: "bg-foreground/8 text-foreground/60",
  mvp: "bg-foreground text-background",
  futuro: "border border-border text-muted-foreground",
  ativo: "bg-foreground text-background",
  planejado: "border border-border text-muted-foreground",
  "em andamento": "bg-foreground/15 text-foreground",
};

export default function StatusBadge({ status, className = "" }) {
  const style = variants[status?.toLowerCase()] || variants.planejado;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px] font-semibold tracking-[0.1em] uppercase ${style} ${className}`}
    >
      {status}
    </span>
  );
}
