import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const useCustomForm = (schema, options = {}) => {
  const formMethod = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
    ...options,
  })

  return formMethod
}
