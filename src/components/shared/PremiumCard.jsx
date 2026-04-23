import { cn } from "../../lib/cn";

export default function PremiumCard({ className, children }) {
  return <div className={cn("surface-panel section-fade p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-float sm:p-7", className)}>{children}</div>;
}
