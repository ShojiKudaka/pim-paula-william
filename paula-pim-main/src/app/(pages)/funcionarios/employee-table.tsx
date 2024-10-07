import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function EmployeeTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">ID</TableHead>
          <TableHead className="w-50">Nome</TableHead>
          <TableHead className="w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(['Paula', 'William', 'João']).map((employee, i) => (
          <TableRow key={i}>
            <TableCell>{i}</TableCell>
            <TableCell>{employee}</TableCell>
            <TableCell>
              <Button variant={'destructive'}>Deletar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { EmployeeTable }
