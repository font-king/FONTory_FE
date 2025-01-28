import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CaretRightIcon } from '@/components/views/icons/NonPropIcons'

export const FontCardWithArrow = ({ font }) => {
  const basePath = location.pathname.startsWith('/explorer')
    ? '/explorer'
    : location.pathname.startsWith('/bookmark')
      ? '/bookmark'
      : '/my-fonts'

  return (
    <LinkContainer to={`${basePath}/detail/${font.id}`}>
      <FontInfo>
        <h6 className="font-name">{font.name}</h6>
        <CaretRightIcon />
      </FontInfo>
      <PreviewText>{font.preview}</PreviewText>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, '3xl')};
  ${({ theme }) => theme.borderRadius('md')};
  ${({ theme }) => theme.padding('lg', 'md', 'sm')};
  ${({ theme }) => theme.border('divider')};
  background: white;
`

const FontInfo = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')};

  .font-name {
    ${({ theme }) => theme.font(400, 'black')};
  }
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.grey[600])};
  min-height: 10.8rem;
`
