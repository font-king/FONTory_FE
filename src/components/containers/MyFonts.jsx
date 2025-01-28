import styled from 'styled-components'

import { FontCardWithArrow } from '../domains/fontCard/FontCardWithArrow'
import { MyFontsChart } from '../domains/MyFontsChart'
import { ContentLayout } from '../views/ContentLayout'

const dummyFonts = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `가나다체 ${i}`,
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
  }))
}

export const MyFonts = () => {
  return (
    <Container>
      <ContentLayout
        title="나만의 폰트 랭킹"
        subTitle="북마크 수와 다운로드 수가 가장 많은 상위 5개 폰트"
      >
        <MyFontsChart />
      </ContentLayout>

      <ContentLayout title="내가 제작한 폰트">
        <FontGrid>
          {dummyFonts().map((font) => (
            <FontCardWithArrow key={font.id} font={font} />
          ))}
        </FontGrid>
      </ContentLayout>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'lg')}
`

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
