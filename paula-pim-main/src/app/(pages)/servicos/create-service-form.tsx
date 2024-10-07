'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCreateServiceForm } from '@/hooks/use-create-service-form'

import { InputName } from './input-name'
import { InputPrice } from './input-price'
import { SelectEmployee } from './select-employee'

function CreateServiceForm() {
  const { form } = useCreateServiceForm()

  return (
    <Form {...form}>
      <div className="flex flex-col gap-6"></div>
      <div className="grid grid-cols-4 gap-4">
        <InputName />
        <InputPrice />
      </div>

      <SelectEmployee />

      <Button className="w-max">Criar</Button>
    </Form>
  )
}

export { CreateServiceForm }
