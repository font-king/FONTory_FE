import styled from 'styled-components'

import { ActionGroupContext } from '@/hooks/useActionGroupContext'

import { Cancel, Complete, Delete, Download, Edit, Save } from './ActionButton'

const ActionGroupProvider = ({ size = 'lg', children }) => {
  return (
    <ActionGroupContext.Provider value={{ size }}>
      <GroupContainer>{children}</GroupContainer>
    </ActionGroupContext.Provider>
  )
}

export const ActionGroup = Object.assign(ActionGroupProvider, {
  Download,
  Save,
  Cancel,
  Delete,
  Edit,
  Complete,
})

const GroupContainer = styled.div`
  ${({ theme }) => theme.flexBox('row', undefined, 'space-around')};
  ${({ theme }) => theme.border('divider', 'top')};
  background: white;
`
