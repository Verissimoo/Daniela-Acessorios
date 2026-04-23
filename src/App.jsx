import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClientInstance } from "@/lib/query-client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageNotFound from "./lib/PageNotFound"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import OperacaoAtual from "./pages/OperacaoAtual"
import Problemas from "./pages/Problemas"
import Modulos from "./pages/Modulos"
import Jornada from "./pages/Jornada"
import DashboardGerencial from "./pages/DashboardGerencial"
import Backlog from "./pages/Backlog"
import Marketing from "./pages/Marketing"
import Evolucao from "./pages/Evolucao"
import Validacoes from "./pages/Validacoes"
import SubprodutosMVP from "./pages/SubprodutosMVP"
import ComoVender from "./pages/ComoVender"

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/operacao-atual" element={<OperacaoAtual />} />
            <Route path="/problemas" element={<Problemas />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/jornada" element={<Jornada />} />
            <Route path="/dashboard-gerencial" element={<DashboardGerencial />} />
            <Route path="/backlog" element={<Backlog />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/evolucao" element={<Evolucao />} />
            <Route path="/validacoes" element={<Validacoes />} />
            <Route path="/subprodutos" element={<SubprodutosMVP />} />
            <Route path="/como-vender" element={<ComoVender />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
