import { cn } from "../../lib/cn";

export function Card({ className, children }) {
  return <div className={cn("surface-panel", className)}>{children}</div>;
}
