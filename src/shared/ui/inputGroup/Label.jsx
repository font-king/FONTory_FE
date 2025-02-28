import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { colors } from '@/app/styles/palette'
import { useInputGroupContext } from '@/shared/hook/useInputGroupContext'

export const Label = ({ successMessage, errorMessage, label }) => {
  const {
    formState: { errors },
  } = useFormContext()
  const section = useInputGroupContext()
  const currentErrorMessage = errors[section]?.message?.toString()

  return (
    <Container>
      <LabelText>{label}</LabelText>
      {currentErrorMessage ? (
        <Message className="p-900 text-error">* {currentErrorMessage}</Message>
      ) : (
        <>
          {successMessage && <Message $success>* {successMessage}</Message>}
          {errorMessage && <Message>* {errorMessage}</Message>}
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
`

const LabelText = styled.p`
  ${({ theme }) => theme.font(400, theme.colors.blue[500])};
`

const Message = styled.p`
  ${({ theme, $success }) => theme.font(800, $success ? colors.ect.success : colors.ect.error)}
`
