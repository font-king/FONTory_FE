import styled from 'styled-components'

import { FontCardWithArrow } from '@/widgets/fontCard/ui/FontCardWithArrow'

const dummyFonts = () => {
  return Array.from({ length: 4 }, (_, i) => ({
    id: i,
    name: `가나다체 ${i}`,
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
  }))
}

export const CustomFontList = () => {
  const fontList = dummyFonts()

  return (
    <Container>
      {fontList.map((font) => (
        <FontCardWithArrow key={font.id} font={font} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
