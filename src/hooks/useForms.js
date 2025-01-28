import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { fontEditSchema } from '@/utils/schema'

export const useFontEditForm = () => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(fontEditSchema),
  })

  return formMethod
}
