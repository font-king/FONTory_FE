import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'
import { colors } from '@/styles/palette'

export const Label = ({ successMessage, errorMessage, label }) => {
  const {
    formState: { errors },
  } = useFormContext()
  const section = useContext(InputGroupContext)
  const currentErrorMessage = errors[section]?.message?.toString()

  return (
    <LabelContainer>
      <LabelMessage>{label}</LabelMessage>
      {currentErrorMessage ? (
        <Message className="p-900 text-error">* {currentErrorMessage}</Message>
      ) : (
        <>
          {successMessage && <Message $success>* {successMessage}</Message>}
          {errorMessage && <Message>* {errorMessage}</Message>}
        </>
      )}
    </LabelContainer>
  )
}

const LabelContainer = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
`

const LabelMessage = styled.p`
  ${({ theme }) => theme.font(400, theme.colors.blue[500])};
`

const Message = styled.p`
  ${({ theme, $success }) => theme.font(500, $success ? colors.ect.success : colors.ect.error)}
`
