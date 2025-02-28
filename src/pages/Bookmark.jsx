import styled from 'styled-components'

import { FontCardWithActions } from '@/shared/ui/fontCard/FontCardWithActions'
import { SectionLayout } from '@/shared/ui/SectionLayout'

const createDummyFont = (id) => ({
  id,
  name: `가나다체 ${id}`,
  designer: '고로케',
  preview:
    id % 2 === 0
      ? '동해물과 백두산이 마르고 닳도록 하느님이 보우하사'
      : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사닳도록 하느님이 보우하사',
  isBookmarked: true,
})
const dummyFonts = Array.from({ length: 8 }, (_, index) => createDummyFont(index))

export const Bookmark = () => {
  const handleDownload = () => {}
  const handleSave = () => {}

  return (
    <SectionLayout>
      <BookmarkHeader>
        <div>검색창</div>
      </BookmarkHeader>

      <FontGrid>
        {dummyFonts.map((font) => (
          <FontCardWithActions
            key={font.id}
            font={font}
            onDownload={handleDownload}
            onSave={handleSave}
          />
        ))}
      </FontGrid>
    </SectionLayout>
  )
}
const BookmarkHeader = styled.div`
  ${({ theme }) => theme.flexBox('row', undefined, 'flex-end')};
  ${({ theme }) => theme.padding(0, 0, 'md')};
  ${({ theme }) => theme.margin(0, 0, '2xl')};
  ${({ theme }) => theme.border('divider', 'bottom')};
`

const FontGrid = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr', undefined, undefined, undefined, 'md')};
`
