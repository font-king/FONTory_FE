import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'
import { font } from '@/styles/font'
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
  width: 100%;
  padding: 2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.grey[300]};
  outline: none;
  box-sizing: border-box;
  font: inherit;
  color: ${colors.grey[700]};
  font-size: ${font.fontSize[500]};
  line-height: ${font.lineHeight[500]};

  &::placeholder {
    color: ${colors.grey[500]};
  }

  &:focus {
    outline: none;
  }
`

const TextAreaContainer = styled.textarea`
  width: 100%;
  min-height: 18rem;
  padding: 2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${colors.grey[300]};
  outline: none;
  box-sizing: border-box;
  font: inherit;
  color: ${colors.grey[700]};
  font-size: ${font.fontSize[500]};
  line-height: ${font.lineHeight[500]};
  resize: none;

  &::placeholder {
    color: ${colors.grey[500]};
  }

  &:focus {
    outline: none;
  }
`
