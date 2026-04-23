import { Outlet } from "react-router-dom";
import PageContainer from "./PageContainer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-stone-25 text-stone-800 lg:flex">
      <Sidebar />
      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="ambient-orb right-[-120px] top-[-80px] h-[280px] w-[280px] bg-stone-200/70" />
        <div className="ambient-orb bottom-[8%] left-[-140px] h-[240px] w-[240px] bg-white" />
        <Topbar />
        <PageContainer>
          <Outlet />
        </PageContainer>
      </div>
    </div>
  );
}
