import styled from 'styled-components'

import { FontItemWithButtons } from '@/shared/ui/FontItemWithButtons'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const dummyFonts = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const PopularFonts = () => {
  return (
    <SectionLayout title="인기 폰트">
      <FontsGrid>
        {dummyFonts().map((font) => (
          <FontItemWithButtons key={font.id} font={font} basePath="/explorer" />
        ))}
      </FontsGrid>
    </SectionLayout>
  )
}

const FontsGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`
