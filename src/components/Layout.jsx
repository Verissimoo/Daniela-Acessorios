import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu, Diamond } from "lucide-react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setMobileOpen(false)} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-border bg-card">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded hover:bg-secondary transition-colors"
          >
            <Menu className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <Diamond className="h-3.5 w-3.5 text-foreground/50" strokeWidth={1.5} />
            <span className="font-display text-base font-semibold text-foreground">Daniela Acessórios</span>
          </div>
          <div className="w-7" />
        </div>

        <main className="p-5 md:p-8 lg:p-12 max-w-6xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
