import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function ServicesEmployees() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Funcionários</DialogTitle>
        <DialogDescription>
          Funcionários que exercem esse serviço
        </DialogDescription>
      </DialogHeader>

      <Table>
        <TableHeader>
          <TableHead className="w-10">Id</TableHead>
          <TableHead>Nome</TableHead>
        </TableHeader>
        <TableBody>
          {Array.from(['Paula', 'William', 'João']).map((employee, i) => {
            return (
              <TableRow key={employee}>
                <TableCell>{i}</TableCell>
                <TableCell>{employee}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </DialogContent>
  )
}

export { ServicesEmployees }
