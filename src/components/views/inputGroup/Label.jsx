import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'
import { font } from '@/styles/font'
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
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'sm')};
`

const LabelMessage = styled.p`
  font-size: ${font.fontSize[400]};
  line-height: ${font.lineHeight[400]};
  color: ${colors.blue[500]};
`

const Message = styled.p`
  font-size: ${font.fontSize[500]};
  line-height: ${font.lineHeight[500]};
  color: ${({ $success }) => ($success ? colors.ect.success : colors.ect.error)};
`
