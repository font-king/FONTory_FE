import { GridContainer } from '@/app/styles/commonStyle'
import { useFetchPopularFontList } from '@/entities/font/api/useFont.query'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { FontItemWithProfile } from './item/FontItemWithProfile'

export const PopularFontList = () => {
  const { data: fonts } = useFetchPopularFontList()

  if (!fonts || !fonts.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <GridContainer $columns="1fr 1fr 1fr" $gap="lg">
      {fonts.slice(0, 3).map((font) => (
        <FontItemWithProfile key={font.id} font={font} />
      ))}
    </GridContainer>
  )
}
