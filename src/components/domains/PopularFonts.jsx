import styled from 'styled-components'

import { FontCardWithActions } from '../domains/fontCard/FontCardWithActions'
import { ContentLayout } from '../views/ContentLayout'

const dummyFont = {
  name: '가나다체',
  designer: '고로케',
  previewText: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
  isBookmarked: true,
}

export const PopularFonts = () => {
  const handleDownload = () => {}
  const handleSave = () => {}

  return (
    <ContentLayout title="인기 폰트">
      <FontsGrid>
        {[1, 2, 3].map((_, index) => (
          <FontCardWithActions
            key={index}
            font={dummyFont}
            onDownload={handleDownload}
            onSave={handleSave}
          />
        ))}
      </FontsGrid>
    </ContentLayout>
  )
}

const FontsGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`
