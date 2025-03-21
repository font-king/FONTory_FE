import { GridContainer } from '@/app/styles/commonStyle'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { FontItemWithProfile } from './item/FontItemWithProfile'

const dummyFonts = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const PopularFontList = () => {
  const fontList = dummyFonts()

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <GridContainer $columns="1fr 1fr 1fr" $gap="lg">
      {fontList.slice(0, 3).map((font) => (
        <FontItemWithProfile key={font.id} font={font} />
      ))}
    </GridContainer>
  )
}
