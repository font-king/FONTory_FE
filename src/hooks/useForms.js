import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { fontEditSchema } from '@/utils/schema'

export const useFontEditForm = ({ defaultValues }) => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(fontEditSchema),
    defaultValues,
  })

  return formMethod
}
