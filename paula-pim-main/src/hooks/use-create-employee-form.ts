import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const useCreateEmployeeSchema = z.object({
  name: z.string().min(1),
})

type UseCreateEmployeeType = z.infer<typeof useCreateEmployeeSchema>

function useCreateEmployeeForm() {
  const form = useForm<UseCreateEmployeeType>({
    resolver: zodResolver(useCreateEmployeeSchema),
  })

  return { form }
}

export { useCreateEmployeeForm }
