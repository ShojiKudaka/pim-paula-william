'use client'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useCreateEmployeeForm } from '@/hooks/use-create-employee-form'

import { InputName } from './input-name'

function CreateEmployeeForm() {
  const { form } = useCreateEmployeeForm()

  return (
    <Form {...form}>
      <InputName />

      <Button className="w-max">Criar</Button>
    </Form>
  )
}

export { CreateEmployeeForm }
