import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'
import { colors } from '@/styles/palette'

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
  ${({ theme }) => theme.font(500, colors.grey[700])}
  width: 100%;
  padding: 2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.grey[300]};
`

const TextAreaContainer = styled.textarea`
  ${({ theme }) => theme.font(500, colors.grey[700])}
  width: 100%;
  min-height: 18rem;
  padding: 2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.grey[300]};
`
