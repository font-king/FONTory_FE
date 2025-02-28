import styled from 'styled-components'

import { ContentLayout } from '@/shared/ui/ContentLayout'
import { FontCardWithActions } from '@/shared/ui/fontCard/FontCardWithActions'

const dummyFonts = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    name: `가나다체 ${i}`,
    designer: '고로케',
    previewText: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const PopularFonts = () => {
  const handleDownload = () => {}
  const handleSave = () => {}

  return (
    <ContentLayout title="인기 폰트">
      <FontsGrid>
        {dummyFonts().map((font) => (
          <FontCardWithActions
            key={font.id}
            font={font}
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
