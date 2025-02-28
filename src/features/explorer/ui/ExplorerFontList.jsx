import styled from 'styled-components'

import { FontItemWithButtons } from '@/entities/fontItem/ui/FontItemWithButtons'

const dummyFonts = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const ExplorerFontList = () => {
  return (
    <Container>
      {dummyFonts().map((font) => (
        <FontItemWithButtons key={font.id} font={font} basePath="/explorer" />
      ))}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'lg')};
`
