import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { useInputGroupContext } from '@/shared/hook/useInputGroupContext'

export const Input = (props) => {
  const { register } = useFormContext()
  const section = useInputGroupContext()

  return <InputContainer {...register(section)} {...props} />
}

export const TextArea = (props) => {
  const { register } = useFormContext()
  const section = useInputGroupContext()

  return <TextAreaContainer {...register(section)} {...props} />
}

const InputContainer = styled.input`
  ${({ theme }) => `
    ${theme.padding('xl', '2xl')}
    ${theme.border('input')}
    ${theme.borderRadius('sm')}
    ${theme.font(500, theme.colors.grey[700])}
  `}
`

const TextAreaContainer = styled.textarea`
  ${({ theme }) => `
    ${theme.padding('xl', '2xl')}
    ${theme.border('input')}
    ${theme.borderRadius('sm')}
    ${theme.font(500, theme.colors.grey[700])}
  `}
  resize: none;
  min-height: 11.8rem;
`
