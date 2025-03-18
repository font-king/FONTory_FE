import { SyncLoader } from 'react-spinners'
import styled from 'styled-components'

import theme from '@/app/styles/theme'

export const Loading = ({ isFull = false }) => {
  return (
    <LoadingContainer $isFull={isFull}>
      <SyncLoader color={theme.colors.blue[500]} />
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'center')}
  height: 100%;
  width: 100%;
`
