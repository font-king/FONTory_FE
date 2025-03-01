import styled from 'styled-components'

import { FontCardWithArrow } from '@/widgets/fontCard/ui/FontCardWithArrow'

export const RecommendFontList = ({ recommendList }) => {
  return (
    <div>
      <Label>제작자의 다른 폰트</Label>
      <Container>
        {recommendList.map((font, index) => (
          <FontCardWithArrow key={index} font={font} />
        ))}
      </Container>
    </div>
  )
}
const Container = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`

const Label = styled.p`
  ${({ theme }) => `
    ${theme.margin(0, 0, 'md')}
    ${theme.font(500, theme.colors.blue[500])}
  `}
`
