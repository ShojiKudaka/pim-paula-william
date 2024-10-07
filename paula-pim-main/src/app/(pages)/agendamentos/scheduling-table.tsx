import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function SchedulingTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-30">Cliente</TableHead>
          <TableHead className="w-30">Valor</TableHead>
          <TableHead className="w-30">Funcionário</TableHead>
          <TableHead className="w-30">Data</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 8 }).map((product, i) => (
          <TableRow key={i}>
            <TableCell>{i}</TableCell>
            <TableCell>Procedimento {i}</TableCell>
            <TableCell>Claudia</TableCell>
            <TableCell className="capitalize">R$ 50,00</TableCell>
            <TableCell>Paula</TableCell>
            <TableCell>{format(new Date(), 'MM/dd/yyyy')}</TableCell>
            <TableCell>
              <Button variant={'destructive'}>Deletar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { SchedulingTable }
