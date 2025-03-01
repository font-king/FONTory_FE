import styled from 'styled-components'

import { BookmarkButton } from '@/features/bookmark/ui/BookmarkButton'
import { DownloadButton } from '@/features/download/ui/DownloadButton'
import { FontProfile } from '@/shared/ui/FontProfile'

export const FontDetailHeader = ({ fontName, authorName }) => {
  return (
    <Container>
      <FontProfile size="lg" fontName={fontName} authorName={authorName} />
      <ActionButtonContainer>
        <DownloadButton isButtonType />
        <BookmarkButton isButtonType />
      </ActionButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => `
    ${theme.flexBox('row', 'center', 'space-between')}
    ${theme.margin(0, 0, '4.2rem')}
  `}
`

const ActionButtonContainer = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'md')}
  width: 15rem;
`
