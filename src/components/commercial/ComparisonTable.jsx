import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export default function ComparisonTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableHeader>Subproduto</TableHeader>
              <TableHeader>O que resolve</TableHeader>
              <TableHeader>Entregas principais</TableHeader>
              <TableHeader>Prioridade</TableHeader>
              <TableHeader>Tipo comercial</TableHeader>
              <TableHeader>Fase</TableHeader>
              <TableHeader>Modelo de venda</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.subproduto}>
                <TableCell className="min-w-[200px] font-semibold text-stone-900">{row.subproduto}</TableCell>
                <TableCell className="min-w-[220px]">{row.oQueResolve}</TableCell>
                <TableCell className="min-w-[240px]">{row.entregasPrincipais}</TableCell>
                <TableCell>{row.prioridade}</TableCell>
                <TableCell>{row.tipoComercial}</TableCell>
                <TableCell className="min-w-[140px]">{row.fase}</TableCell>
                <TableCell className="min-w-[220px]">{row.modeloDeVenda}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </table>
      </Table>
    </div>
  );
}
