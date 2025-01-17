import styled from 'styled-components'

import { ActionGroupContext } from '@/hooks/useActionGroupContext'
import { colors } from '@/styles/palette'

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
  display: flex;
  justify-content: space-around;
  background: white;
  border-top: 0.1rem solid ${colors.grey[300]};
`
