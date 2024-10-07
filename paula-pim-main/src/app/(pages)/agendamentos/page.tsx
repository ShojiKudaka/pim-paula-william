import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CreateSchedulingModal } from './create-scheduling-modal'
import { SchedulingTable } from './scheduling-table'

export default function Agendamento() {
  return (
    <Dialog>
      <main className="container-c mt-10">
        <header className="mb-12 flex items-center justify-between">
          <h1>Agendamentos</h1>
          <DialogTrigger asChild>
            <Button>Marcar um horário</Button>
          </DialogTrigger>
        </header>

        <SchedulingTable />

        <Pagination
          // onPaginate={(page: number) => console.log(page)}
          currentQuantity={1}
          limit={10}
          page={1}
          totalCount={100}
        />
      </main>

      <CreateSchedulingModal />
    </Dialog>
  )
}