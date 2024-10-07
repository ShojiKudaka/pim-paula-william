import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CreateEmployeeModal } from './create-employee-modal'
import { EmployeeTable } from './employee-table'

export default function Serviços() {
  return (
    <Dialog>
      <main className="container-c mt-10">
        <header className="mb-12 flex items-center justify-between">
          <h1>Funcionários</h1>
          <DialogTrigger asChild>
            <Button>Adicione um funcionário</Button>
          </DialogTrigger>
        </header>

        <EmployeeTable />

        <Pagination
          // onPaginate={(page: number) => console.log(page)}
          currentQuantity={1}
          limit={10}
          page={1}
          totalCount={100}
        />
      </main>

      <CreateEmployeeModal />
    </Dialog>
  )
}
