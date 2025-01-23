import styled from 'styled-components'

import { ActionGroup } from '@/components/views/actionGroup'
import { useToggle } from '@/hooks/useToggle'

export const FontCardWithActions = ({ font, onDownload, onSave }) => {
  console.log(font)
  const [isBookmarked, toggleBookmark] = useToggle(font.isBookmarked)

  const handleBookmark = () => {
    onSave()
    toggleBookmark()
  }

  return (
    <FontCardContainer>
      <ProfileSection>
        <div className="profile" />

        <FontInfo>
          <FontName>{font.name}</FontName>
          <DesignerName>{font.designer}</DesignerName>
        </FontInfo>
      </ProfileSection>

      <PreviewText>동해물과 백두산이 마르고 닳도록 하느님이 보우하사</PreviewText>

      <ActionGroup size="sm">
        <ActionGroup.Download onClick={onDownload} />
        <ActionGroup.Save isSaved={isBookmarked} onClick={handleBookmark} />
      </ActionGroup>
    </FontCardContainer>
  )
}

const FontCardContainer = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'xxl')};
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
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'md')};
`

const FontInfo = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'xs')};
`

const FontName = styled.h6`
  ${({ theme }) => theme.font(400)};
`

const DesignerName = styled.p`
  ${({ theme }) => theme.font(800, theme.colors.grey[600])};
`

const PreviewText = styled.p`
  ${({ theme }) => theme.font(500, theme.colors.grey[600])};
  min-height: 10.8rem;
`
