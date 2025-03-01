import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'
import { FontItemWithButtons } from '@/widgets/font-item/ui/FontItemWithButtons'

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

  if (!fontList || !fontList.length) return <EmptyMessage message="등록된 폰트 목록이 없습니다." />

  return (
    <Container>
      {fontList.slice(0, 3).map((font) => (
        <FontItemWithButtons key={font.id} font={font} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`
