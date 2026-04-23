import { subproducts } from "./subproducts";

export const comparisons = subproducts.map((item) => ({
  subproduto: item.name,
  oQueResolve: item.function,
  entregasPrincipais: item.deliveries.slice(0, 3).join(", "),
  prioridade: item.priority,
  tipoComercial: item.commercialType,
  fase: item.phase,
  modeloDeVenda: item.salesModel
}));
