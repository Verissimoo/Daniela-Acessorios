import { cn } from "../../lib/cn";

export function Badge({ className, children }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  );
}
