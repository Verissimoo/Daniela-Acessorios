import { cn } from "../../lib/cn";

export function Tabs({ children, className }) {
  return <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>;
}

export function TabsTrigger({ children, active, className, ...props }) {
  return (
    <button
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition",
        active ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
