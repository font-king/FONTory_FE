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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
