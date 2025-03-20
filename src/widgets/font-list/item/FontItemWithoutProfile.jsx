import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { BookmarkButton } from '@/features/bookmark-font/ui/BookmarkButton'
import { DownloadButton } from '@/features/download-font/ui/DownloadButton'
import { CaretRightIcon } from '@/shared/ui/icons/NonPropIcons'

export const FontItemWithoutProfile = ({ font }) => {
  const { id, name, example, isBookmarked } = font

  return (
    <LinkContainer to={`/detail/${id}`}>
      <FontInformation>
        <FontName>{name}</FontName>
        <CaretRightIcon />
      </FontInformation>

      <PreviewText>{example}</PreviewText>

      <ActionButtonGroup>
        <DownloadButton />
        <BookmarkButton initialBookmarkState={isBookmarked} />
      </ActionButtonGroup>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  ${({ theme }) => `
    ${theme.flexBox('column', undefined, undefined, '3xl')}
    ${theme.padding('lg', 'md', 'sm')}
    ${theme.borderRadius('md')}
    ${theme.border('divider')}
  `}
`

const FontInformation = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')};
`

const FontName = styled.h6`
  ${({ theme }) => theme.font(400)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(700, theme.colors.grey[600])};
  flex-grow: 1;
  overflow: hidden;
  word-wrap: break-word;
`

const ActionButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
  align-self: flex-end;
`
