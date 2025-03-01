import { GridContainer } from '@/app/styles/commonStyle'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontItemWithArrow } from '@/widgets/font-item/ui/FontItemWithArrow'

const dummyFonts = () => {
  return Array.from({ length: 4 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
  }))
}

export const CustomFontList = () => {
  const fontList = dummyFonts()

  if (!fontList || !fontList.length) return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <GridContainer $columns="1fr 1fr" $gap="lg">
      {fontList.map((font) => (
        <FontItemWithArrow key={font.id} font={font} />
      ))}
    </GridContainer>
  )
}
