import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-stone-800"
        onClick={() => setOpen((value) => !value)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-stone-100 px-5 py-4">{children}</div>}
    </div>
  );
}
