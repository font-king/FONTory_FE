import { GridContainer } from '@/app/styles/commonStyle'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'

import { FontItemWithoutProfile } from './item/FontItemWithoutProfile'

export const CustomFontList = ({ fonts }) => {
  if (!fonts || !fonts.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <GridContainer $columns="1fr 1fr" $gap="lg">
      {fonts.map((font) => (
        <FontItemWithoutProfile key={font.id} font={font} />
      ))}
    </GridContainer>
  )
}
