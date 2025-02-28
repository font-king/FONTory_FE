import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { useToggle } from '@/shared/hook/useToggle'

export const FontCardWithActions = ({ font, onDownload, onSave }) => {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/bookmark') ? '/bookmark' : '/explorer'

  const [isBookmarked, toggleBookmark] = useToggle(font.isBookmarked)

  const handleBookmark = () => {
    onSave()
    toggleBookmark()
  }

  return (
    <LinkContainer to={`${basePath}/detail/${font.id}`}>
      <ProfileSection>
        <div className="profile" />

        <FontInfo>
          <h6 className="font-name">{font.name}</h6>
          <p className="designer-name">{font.designer}</p>
        </FontInfo>
      </ProfileSection>
      <PreviewText>{font.preview}</PreviewText>
      {/* <ActionGroup size="sm">
        <ActionGroup.Download onClick={onDownload} />
        <ActionGroup.Save isSaved={isBookmarked} onClick={handleBookmark} />
      </ActionGroup> */}
      <></>
    </LinkContainer>
  )
}

const LinkContainer = styled(Link)`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, '3xl')};
  ${({ theme }) => theme.borderRadius('md')};
  ${({ theme }) => theme.padding('lg', 'md', 'sm')};
  ${({ theme }) => theme.border('divider')};
  background: white;

  .profile {
    ${({ theme }) => theme.borderRadius('full')};
    ${({ theme }) => theme.border('divider')};
    width: 5.6rem;
    height: 5.6rem;
  }
`

const ProfileSection = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'lg')};
`

const FontInfo = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'sm')};

  .font-name {
    ${({ theme }) => theme.font(400)};
  }

  .designer-name {
    ${({ theme }) => theme.font(800, theme.colors.grey[400])};
  }
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.grey[600])};
  flex-grow: 1;
  height: fit-content;
`
