import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'

export const Input = (props) => {
  const { register } = useFormContext()
  const section = useContext(InputGroupContext)

  return <InputContainer {...register(section)} {...props} />
}

export const TextArea = (props) => {
  const { register } = useFormContext()
  const section = useContext(InputGroupContext)

  return <TextAreaContainer {...register(section)} {...props} />
}

const InputContainer = styled.input`
  ${({ theme }) => theme.font(500, theme.colors.grey[700])};
  ${({ theme }) => theme.borderRadius('md')};
  ${({ theme }) => theme.padding('xl', '2xl')};
  ${({ theme }) => theme.boxShadow('input')};
  width: 100%;
  box-sizing: border-box;
`

const TextAreaContainer = styled.textarea`
  ${({ theme }) => theme.font(500, theme.colors.grey[700])};
  ${({ theme }) => theme.borderRadius('lg')};
  ${({ theme }) => theme.padding('xl', '2xl')};
  ${({ theme }) => theme.border('input')};
  width: 100%;
  min-height: 18rem;
  box-sizing: border-box;
`
