export default function SectionHeader({ tag, title, description }) {
  return (
    <div className="mb-10">
      {tag && (
        <span className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 h-px bg-border" />
    </div>
  );
}
