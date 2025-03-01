import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontItemWithoutProfile } from '@/widgets/font-item/ui/FontItemWithoutProfile'

const dummyFonts = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    fontName: `가나다체 ${i}`,
    authorName: '고로케',
    preview:
      i % 2 === 0
        ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
        : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사이 보우하사닳도록 하느님이 보우하사이 보우하사닳도록 하느님이 보우하사이 보우하사닳도록 하느님이 보우하사',
    isBookmarked: i % 2 === 0,
  }))
}

export const MyCustomFontList = () => {
  const fontList = dummyFonts()

  if (!fontList) return <EmptyMessage message="등록된 폰트가 없습니다." />

  return (
    <Container>
      {fontList.map((font) => (
        <FontItemWithoutProfile key={font.id} font={font} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'lg')};
`
