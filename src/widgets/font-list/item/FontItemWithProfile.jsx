import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BookmarkButton } from '@/features/bookmark-font/ui/BookmarkButton'
import { DownloadButton } from '@/features/download-font/ui/DownloadButton'
import { FontProfile } from '@/shared/ui/FontProfile'

export const FontItemWithProfile = ({ font }) => (
  <LinkContainer to={`/detail/${font.id}`}>
    <FontProfile size="md" fontName={font.name} authorName={font.writerName} />
    <PreviewText>{font.example}</PreviewText>

    <ActionButtonGroup>
      <DownloadButton />
      <BookmarkButton initialBookmarkState={font.bookmarked} />
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
  overflow: hidden;
  word-wrap: break-word;
`

const ActionButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
  align-self: flex-end;
`
