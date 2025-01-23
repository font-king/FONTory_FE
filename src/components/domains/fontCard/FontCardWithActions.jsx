import styled from 'styled-components'

import { ActionGroup } from '@/components/views/actionGroup'
import { useToggle } from '@/hooks/useToggle'
import { font } from '@/styles/font'
import { colors } from '@/styles/palette'

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
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  padding: 1.6rem 1.2rem 1rem;
  border: 1px solid ${colors.grey[300]};
  border-radius: 0.8rem;
  background: white;

  .profile {
    width: 5.6rem;
    height: 5.6rem;
    border: 1px solid grey;
    border-radius: 100%;
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

const FontInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const FontName = styled.h6`
  font-size: ${font.fontSize[400]};
  line-height: ${font.lineHeight[400]};
`

const DesignerName = styled.p`
  font-size: ${font.fontSize[800]};
  line-height: ${font.lineHeight[800]};
  color: ${colors.grey[600]};
`

const PreviewText = styled.p`
  min-height: 10.8rem;
  font-size: ${font.fontSize[500]};
  line-height: ${font.lineHeight[500]};
  color: ${colors.grey[600]};
`
