import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BookmarkButton } from '@/features/bookmark/ui/BookmarkButton'
import { DownloadButton } from '@/features/download/ui/DownloadButton'
import { FontProfile } from '@/shared/ui/FontProfile'

export const FontItemWithButtons = ({ basePath, font }) => (
  <LinkContainer to={`${basePath}/detail/${font.id}`}>
    <FontProfile size="md" fontName={font.fontName} authorName={font.authorName} />
    <PreviewText>{font.preview}</PreviewText>

    <ActionButtonGroup>
      <DownloadButton />
      <BookmarkButton initialBookmarkState={font.isBookmarked} />
    </ActionButtonGroup>
  </LinkContainer>
)

const LinkContainer = styled(Link)`
  ${({ theme }) => `
    ${theme.flexBox('column', undefined, undefined, '3xl')}
    ${theme.padding('lg', 'md', 'sm')}
    ${theme.border('divider')}
    ${theme.borderRadius('md')}
  `}
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.grey[600])};
  flex-grow: 1;
  height: fit-content;
`

const ActionButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
  align-self: flex-end;
`
