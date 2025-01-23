import styled from 'styled-components'

import { InputGroupContext } from '@/hooks/useInputGroupContext'

import { Input } from './Input'
import { TextArea } from './Input'
import { Label } from './Label'

const InputGroupProvider = ({ section, children }) => {
  return (
    <InputGroupContext.Provider value={section}>
      <GroupSection>{children}</GroupSection>
    </InputGroupContext.Provider>
  )
}

export const InputGroup = Object.assign(InputGroupProvider, {
  Input,
  TextArea,
  Label,
})

const GroupSection = styled.section`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'sm')};
  width: 100%;
`
