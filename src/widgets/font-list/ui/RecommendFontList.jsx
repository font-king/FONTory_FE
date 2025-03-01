import { GridContainer } from '@/app/styles/commonStyle'
import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontItemWithoutProfile } from '@/widgets/font-item/ui/FontItemWithoutProfile'

export const RecommendFontList = ({ recommendList }) => {
  if (!recommendList || !recommendList.length)
    return <EmptyMessage message="아직 등록된 폰트가 없습니다." />

  return (
    <GridContainer $columns="1fr 1fr 1fr" $gap="lg">
      {recommendList.slice(0, 3).map((font, index) => (
        <FontItemWithoutProfile key={index} font={font} />
      ))}
    </GridContainer>
  )
}
