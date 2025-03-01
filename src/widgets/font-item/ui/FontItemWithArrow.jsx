import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CaretRightIcon } from '@/shared/ui/icons/NonPropIcons'

export const FontItemWithArrow = ({ font }) => (
  <LinkContainer to={`/detail/${font.id}`}>
    <FontInformation>
      <FontName>{font.fontName}</FontName>
      <CaretRightIcon />
    </FontInformation>

    <PreviewText>{font.preview}</PreviewText>
  </LinkContainer>
)

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
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(700, theme.colors.grey[600])};
  height: fit-content;
`
