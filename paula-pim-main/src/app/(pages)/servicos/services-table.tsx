import { DialogTrigger } from '@radix-ui/react-dialog'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ServicesEmployees } from './services-employees'

function ServicesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-30">Funcionários</TableHead>
          <TableHead className="w-30">Preço</TableHead>
          <TableHead className="w-30">Criado em</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 8 }).map((product, i) => (
          <TableRow key={i}>
            <TableCell>{i}</TableCell>
            <TableCell>Serviço {i}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Mostrar</Button>
                </DialogTrigger>

                <ServicesEmployees />
              </Dialog>
            </TableCell>
            <TableCell className="capitalize">R$ 50,00</TableCell>
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

export { ServicesTable }
